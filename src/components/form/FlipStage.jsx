import React from "react";

/**
 * 3D door flip between steps.
 *
 * Wraps the whole card. When `stepKey` changes, static copies of the old and
 * new card are stacked back-to-back as the two faces of a single panel that
 * spins 180° around the card's vertical centre line (rotateY), like a glass
 * door turning on a central pivot:
 *
 *   Continue (forward): spins to the left  (rotateY 0 -> -180deg)
 *   Back:               spins to the right (rotateY 0 -> +180deg)
 *
 * Front face = old card, back face = new card (pre-rotated so it reads
 * correctly once the panel has turned).
 *
 * The real form (state, refs, validation) is never touched — the overlay is an
 * inert DOM snapshot removed as soon as the animation ends. It deliberately
 * plays even when the OS asks for reduced motion (project decision).
 */

export const FLIP_MS = 700;

const CSS = `
.nq-overlay { position: absolute; inset: 0; z-index: 5; pointer-events: none; perspective: 2600px; }
.nq-panel { position: absolute; inset: 0; transform-origin: 50% 50%; transform-style: preserve-3d; will-change: transform; animation-duration: var(--nq-flip-ms, 700ms); animation-timing-function: cubic-bezier(.45, .05, .2, 1); animation-fill-mode: both; }
.nq-panel.left { animation-name: nqTurnLeft; }
.nq-panel.right { animation-name: nqTurnRight; }
.nq-face { position: absolute; inset: 0; backface-visibility: hidden; -webkit-backface-visibility: hidden; }
.nq-face.back { transform: rotateY(180deg); }
@keyframes nqTurnLeft { from { transform: rotateY(0deg); } to { transform: rotateY(-180deg); } }
@keyframes nqTurnRight { from { transform: rotateY(0deg); } to { transform: rotateY(180deg); } }
`;

const div = (cls) => {
  const el = document.createElement("div");
  el.className = cls;
  return el;
};

/** Inert, id-free copy of a step with the live input values carried over. */
function cloneStatic(src) {
  const copy = src.cloneNode(true);
  copy.removeAttribute("id");
  copy.querySelectorAll("[id]").forEach((n) => n.removeAttribute("id"));
  // Radios sharing a name would otherwise fight the real ones.
  copy.querySelectorAll("[name]").forEach((n) => n.removeAttribute("name"));
  copy.querySelectorAll("[tabindex]").forEach((n) => n.setAttribute("tabindex", "-1"));
  copy.setAttribute("aria-hidden", "true");
  copy.setAttribute("inert", "");
  // The live card is translucent + blurred; the copy must be opaque so the
  // other face never shows through the turning panel.
  copy.style.backgroundColor = "#fefeff";
  copy.style.backdropFilter = "none";
  copy.style.webkitBackdropFilter = "none";

  const query = "input, textarea, select";
  const from = src.querySelectorAll(query);
  const to = copy.querySelectorAll(query);
  from.forEach((field, i) => {
    if (!to[i]) return;
    if (field.type === "checkbox" || field.type === "radio") to[i].checked = field.checked;
    else to[i].value = field.value;
  });
  return copy;
}

const face = (cls, node) => {
  const el = div(`nq-face ${cls}`);
  el.appendChild(node);
  return el;
};

export default class FlipStage extends React.Component {
  live = React.createRef();
  stage = React.createRef();
  cleanup = null;

  getSnapshotBeforeUpdate(prevProps) {
    const { stepKey } = this.props;
    if (prevProps.stepKey === stepKey) return null;
    // Only animate between numbered steps (not into/out of the thank-you view).
    if (typeof stepKey !== "number" || typeof prevProps.stepKey !== "number") return null;
    const old = this.live.current && this.live.current.firstElementChild;
    if (!old) return null;
    const scroller = old.querySelector("[data-flip-scroll]");
    return { node: cloneStatic(old), scrollTop: scroller ? scroller.scrollTop : 0 };
  }

  componentDidUpdate(prevProps, prevState, snap) {
    if (!snap) return;
    if (this.cleanup) this.cleanup();

    const liveWrap = this.live.current;
    const incoming = liveWrap && liveWrap.firstElementChild;
    if (!incoming || !this.stage.current) return;

    const forward = this.props.stepKey > prevProps.stepKey;

    const overlay = div("nq-overlay");
    overlay.style.setProperty("--nq-flip-ms", `${FLIP_MS}ms`);

    const flap = div(`nq-panel ${forward ? "left" : "right"}`);
    flap.appendChild(face("front", snap.node));
    flap.appendChild(face("back", cloneStatic(incoming)));
    overlay.appendChild(flap);

    this.stage.current.appendChild(overlay);
    // The outgoing card keeps the scroll position it was left at.
    const scroller = snap.node.querySelector("[data-flip-scroll]");
    if (scroller) scroller.scrollTop = snap.scrollTop;

    liveWrap.style.opacity = "0";
    this.props.onFlipChange && this.props.onFlipChange(true);

    let done = false;
    const finish = () => {
      if (done) return;
      done = true;
      clearTimeout(timer);
      flap.removeEventListener("animationend", onEnd);
      overlay.remove();
      liveWrap.style.opacity = "";
      this.cleanup = null;
      this.props.onFlipChange && this.props.onFlipChange(false);
    };
    const onEnd = (e) => {
      if (e.target === flap) finish();
    };
    flap.addEventListener("animationend", onEnd);
    const timer = setTimeout(finish, FLIP_MS + 150);
    this.cleanup = finish;
  }

  componentWillUnmount() {
    if (this.cleanup) this.cleanup();
  }

  render() {
    return (
      <div ref={this.stage} className={`relative min-h-0 ${this.props.className || ""}`}>
        <style>{CSS}</style>
        <div ref={this.live} className="h-full w-full">
          {this.props.children}
        </div>
      </div>
    );
  }
}
