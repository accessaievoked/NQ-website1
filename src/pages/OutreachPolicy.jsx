import React, { useEffect } from "react";

const TITLE = "Outreach & Anti-Spam Policy | Next Quarter";
const DESCRIPTION =
	"How Next Quarter (AI Evoked Private Limited) does business-to-business email outreach: who we contact, how much we send, and how to opt out.";
const CANONICAL = "https://nxtqtr.com/outreach-policy";
const CONTACT_EMAIL = "contact@aievoked.com";

// Section heading used throughout the page
const H2 = ({ children }) => (
	<h2 className="mb-3 mt-10 text-[20px] font-medium tracking-[-0.02em] text-black md:mt-12 md:text-[26px]">
		{children}
	</h2>
);

const P = ({ children, className = "" }) => (
	<p className={`text-[15px] leading-[1.7] text-[#071d32] md:text-[16px] ${className}`}>
		{children}
	</p>
);

const OutreachPolicy = () => {
	// The site has no head manager, so set the tags this page needs directly
	// and put the originals back when the visitor navigates away.
	useEffect(() => {
		const prevTitle = document.title;
		document.title = TITLE;

		const setTag = (selector, create, attr, value) => {
			let el = document.head.querySelector(selector);
			const created = !el;
			if (!el) {
				el = create();
				document.head.appendChild(el);
			}
			const prev = created ? null : el.getAttribute(attr);
			el.setAttribute(attr, value);
			return () => {
				if (created) el.remove();
				else if (prev !== null) el.setAttribute(attr, prev);
			};
		};

		const restoreDesc = setTag(
			'meta[name="description"]',
			() => {
				const m = document.createElement("meta");
				m.setAttribute("name", "description");
				return m;
			},
			"content",
			DESCRIPTION
		);
		const restoreCanonical = setTag(
			'link[rel="canonical"]',
			() => {
				const l = document.createElement("link");
				l.setAttribute("rel", "canonical");
				return l;
			},
			"href",
			CANONICAL
		);

		return () => {
			document.title = prevTitle;
			restoreDesc();
			restoreCanonical();
		};
	}, []);

	return (
		<div className="flex flex-col bg-white">
			{/* ---------- HERO ---------- */}
			<div className="w-full max-w-full overflow-x-hidden">
				<section
					className="relative left-1/2 w-screen -translate-x-1/2 bg-white pt-32 sm:pt-36 md:pt-44"
					style={{
						backgroundImage: `
							radial-gradient(circle at 50% 8%, rgba(255, 212, 235, 0.62), transparent 31%),
							radial-gradient(circle at 57% 61%, rgba(170, 225, 255, 0.58), transparent 38%),
							linear-gradient(135deg, #ffffff 0%, #fff7fb 31%, #f1faff 72%, #ffffff 100%)
						`,
					}}
				>
					<div className="relative z-10 mx-auto max-w-6xl px-5 text-center">
						<h1 className="text-[28px] font-normal leading-tight tracking-[-0.04em] text-black sm:text-[38px] md:text-[54px]">
							Outreach &amp;{" "}
							<span
								className="inline-block text-[#0b4375]"
								style={{
									background: "#dbeaffbf",
									padding: "2px 12px",
									borderLeft: "3px solid #87B5DA",
									borderRight: "3px solid #87B5DA",
									lineHeight: 1.4,
								}}
							>
								Anti-Spam
							</span>{" "}
							Policy
						</h1>
						<p className="mt-5 text-[13px] font-medium text-[#071d32]/70 md:text-[14px]">
							Last updated: 13 October 2026
						</p>
					</div>
					{/* Fade-out strip so the gradient melts into the white body */}
					<div className="pointer-events-none mt-10 h-20 w-full bg-gradient-to-b from-transparent to-white md:mt-14 md:h-28" />
				</section>
			</div>

			{/* ---------- BODY ---------- */}
			<main className="mx-auto w-full max-w-[1440px] px-4 pb-16 pt-2 sm:px-8 md:px-20 md:pb-28 md:pt-6">
				<P>
					Next Quarter (nxtqtr.com), operated by AI Evoked Private Limited, is a
					Shopify conversion-rate-optimisation agency based in New Delhi, India. We
					sometimes email businesses that haven&apos;t contacted us before, to offer our
					services. This page explains how we do that responsibly.
				</P>

				<H2>Who we contact</H2>
				<P>
					We only email businesses, never consumers. Our recipients are founders,
					owners or marketing leads of Shopify stores, at their published business
					addresses. Before writing to a store, we research it, and every email refers
					to something specific about that store. We verify each address before
					sending. We don&apos;t use bulk consumer lists, and we don&apos;t email anyone who
					has asked us not to.
				</P>

				<H2>How much we send</H2>
				<P>
					Our outreach is one-to-one and low volume. Each mailbox sends a small, capped
					number of emails per day. We send no mass blasts and no newsletters to people
					who haven&apos;t subscribed. If someone doesn&apos;t reply, they get at most a short
					follow-up sequence, and then we stop.
				</P>

				<H2>Stopping and opting out</H2>
				<ul className="list-disc space-y-2 pl-5 marker:text-[#87B5DA]">
					<li className="pl-1 text-[15px] leading-[1.7] text-[#071d32] md:text-[16px]">
						When a recipient replies, all automated follow-ups to them stop
						immediately.
					</li>
					<li className="pl-1 text-[15px] leading-[1.7] text-[#071d32] md:text-[16px]">
						Every email has a one-click unsubscribe option, and you can also reply
						&ldquo;unsubscribe&rdquo; or &ldquo;stop&rdquo;.
					</li>
					<li className="pl-1 text-[15px] leading-[1.7] text-[#071d32] md:text-[16px]">
						We add opt-outs to a permanent suppression list across all our sending
						domains and mailboxes. We don&apos;t contact that address again.
					</li>
				</ul>

				<H2>How we send</H2>
				<P>
					We send from our own domains through Google Workspace, with SPF, DKIM and
					DMARC authentication. We don&apos;t hide our identity, use misleading subject
					lines, or send from addresses we don&apos;t control. Our sending domains
					redirect to this website.
				</P>

				<H2>No third-party advertising</H2>
				<P>
					We don&apos;t pay affiliates, list brokers or other third parties to promote
					nxtqtr.com or our sending domains by email.
				</P>

				<H2>Contact</H2>
				<P>
					To ask about an email you got from us, or to make sure you&apos;re never
					contacted again, write to{" "}
					<a
						href={`mailto:${CONTACT_EMAIL}`}
						className="break-all font-semibold text-[#0b4375] underline underline-offset-2 hover:text-[#001931]"
					>
						{CONTACT_EMAIL}
					</a>
					. We&apos;ll act on your request within 2 business days.
				</P>

				{/* Company details */}
				<div className="mt-10">
					<p className="text-[15px] font-semibold text-[#001931]">
						AI Evoked Private Limited
					</p>
					<address className="mt-1 text-[14px] not-italic leading-[1.7] text-[#071d32] md:text-[15px]">
						12-E, PKT-1, Second Floor, Mayur Vihar Phase-I,
						<br />
						New Delhi, Delhi 110091, India
					</address>
				</div>

			</main>
		</div>
	);
};

export default OutreachPolicy;
