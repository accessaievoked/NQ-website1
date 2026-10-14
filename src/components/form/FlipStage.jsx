import React from "react";

/**
 * Calendar-style 3D flip between steps.
 *
 * Wraps the whole card. When `stepKey` changes, static copies of the old and
 * new card are split at the horizontal midline and one half hinges over the
 * middle line like a wall-calendar page:
 *
 *   Continue (forward): the BOTTOM half of the old step lifts up and over onto
 *     the top half, revealing the new step's bottom half underneath; its back
 *     face is the new step's top half.
 *   Back: the TOP half of the current step falls down onto the bottom half,
 *     revealing the previous step's top half underneath; its back face is the
 *     previous step's bottom half.
 *
 * The real form (state, refs, validation) is never touched — the overlay is an
 * inert DOM snapshot removed as soon as the animation ends. It deliberately
 * plays even when the OS asks for reduced motion (project decision).
 */

export const FLIP_MS = 600;

const CSS = `
.nq-overlay { position: absolute; inset: 0; z-index: 5; pointer-events: none; perspective: 1800px; }
.nq-half, .nq-flap { position: absolute; left: 0; right: 0; height: 50%; }
.nq-half { overflow: hidden; z-index: 1; }
.nq-half.top, .nq-flap.down { top: 0; }
.nq-half.bot, .nq-flap.up { top: 50%; }
.nq-inner { position: absolute; left: 0; right: 0; top: 0; height: 200%; }
.nq-inner.low { top: -100%; }
.nq-flap { z-index: 2; transform-style: preserve-3d; will-change: transform; animation-duration: var(--nq-flip-ms, 600ms); animation-timing-function: cubic-bezier(.45, .05, .2, 1); animation-fill-mode: both; }
.nq-flap.up { transform-origin: 50% 0; animation-name: nqFlipUp; }
.nq-flap.down { transform-origin: 50% 100%; animation-name: nqFlipDown; }
.nq-face { position: absolute; inset: 0; overflow: hidden; backface-visibility: hidden; -webkit-backface-visibility: hidden; }
.nq-face.back { transform: rotateX(180deg); }
@keyframes nqFlipUp { from { transform: rotateX(0deg); } to { transform: rotateX(180deg); } }
@keyframes nqFlipDown { from { transform: rotateX(0deg); } to { transform: rotateX(-180deg); } }
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
  // half underneath never shows through the flipping leaf.
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

/** A container showing the top (low=false) or bottom (low=true) half of `node`. */
const piece = (container, node, low) => {
  const inner = div(`nq-inner${low ? " low" : ""}`);
  inner.appendChild(node);
  container.appendChild(inner);
  return container;
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
    return { a: cloneStatic(old), b: cloneStatic(old), scrollTop: scroller ? scroller.scrollTop : 0 };
  }

  componentDidUpdate(prevProps, prevState, snap) {
    if (!snap) return;
    if (this.cleanup) this.cleanup();

    const liveWrap = this.live.current;
    const incoming = liveWrap && liveWrap.firstElementChild;
    if (!incoming || !this.stage.current) return;

    const forward = this.props.stepKey > prevProps.stepKey;
    const next = { a: cloneStatic(incoming), b: cloneStatic(incoming) };

    const overlay = div("nq-overlay");
    overlay.style.setProperty("--nq-flip-ms", `${FLIP_MS}ms`);

    let flap;
    if (forward) {
      // Bottom of the old step lifts up onto the top half.
      overlay.appendChild(piece(div("nq-half top"), snap.a, false));
      overlay.appendChild(piece(div("nq-half bot"), next.a, true));
      flap = div("nq-flap up");
      flap.appendChild(piece(div("nq-face front"), snap.b, true));
      flap.appendChild(piece(div("nq-face back"), next.b, false));
    } else {
      // Top of the current step falls down onto the bottom half.
      overlay.appendChild(piece(div("nq-half top"), next.a, false));
      overlay.appendChild(piece(div("nq-half bot"), snap.a, true));
      flap = div("nq-flap down");
      flap.appendChild(piece(div("nq-face front"), snap.b, false));
      flap.appendChild(piece(div("nq-face back"), next.b, true));
    }
    overlay.appendChild(flap);

    this.stage.current.appendChild(overlay);
    // The outgoing card keeps the scroll position it was left at.
    [snap.a, snap.b].forEach((node) => {
      const scroller = node.querySelector("[data-flip-scroll]");
      if (scroller) scroller.scrollTop = snap.scrollTop;
    });

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
