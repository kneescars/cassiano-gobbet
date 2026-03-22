"use client";

import Essay from "@/components/Essay";
import SystemMap from "@/components/SystemMap";

const ESSAYS = [
  {
    title: "On the Legibility of Systems",
    preview:
      "Every system is designed to make certain things visible and others invisible. The question is never whether a system is legible — it's legible to whom, for what purpose, at what cost.",
    body: `Every system is designed to make certain things visible and others invisible. The question is never whether a system is legible — it's legible to whom, for what purpose, at what cost.

James C. Scott, in Seeing Like a State, describes the "high modernist" impulse to impose legibility on complex social phenomena — to simplify, standardize, and render measurable what was previously local, contextual, and irreducibly particular. The Prussian forest, reshaped for maximum timber yield, was supremely legible to foresters — and collapsed within two generations as the simplified monoculture failed to sustain the complex interdependencies of a natural system.

The same dynamics play out in organizations, in cities, in information systems. The dashboard that shows everything that is easy to measure creates a systematic blind spot for everything that is hard to measure but genuinely important. Over time, the organization begins to optimize for the dashboard — not because anyone chooses this consciously, but because legible metrics have consequences and invisible ones do not.

The corrective is not less measurement. It is epistemic humility about what any particular measurement regime makes invisible, combined with active investment in preserving diversity of perspective, method, and knowledge type. The best organizations are those that can hold multiple legibility regimes simultaneously, knowing each is partial.`,
    date: "2024",
    tags: ["systems", "epistemology", "organizations"],
  },
  {
    title: "Information Wants to Be Structured",
    preview:
      "The famous declaration that 'information wants to be free' obscures a prior and more fundamental truth: information wants to be structured. Without structure, there is no information — only noise.",
    body: `The famous declaration that 'information wants to be free' obscures a prior and more fundamental truth: information wants to be structured. Without structure, there is no information — only noise.

Shannon's information theory defines information in terms of surprise — the reduction of uncertainty. But this mathematical conception is agnostic about meaning. A maximally surprising sequence of random bits contains the most information in Shannon's sense while conveying no meaning whatsoever. What we call information in everyday usage is always already structured: organized in ways that carve a conceptual space into figure and ground, into signal and context.

The choice of structure is never neutral. A library organized by author makes different books neighboring — and therefore in implicit conversation — than one organized by subject. A hospital record system that captures diagnoses as discrete codes forecloses the expression of diagnostic uncertainty. A social media timeline that sequences posts chronologically creates a different epistemic environment than one organized by predicted engagement.

The practical implication: those who design the structures through which information flows have more power than those who generate the information itself. The archivist, the taxonomist, the platform designer — these are not neutral technicians but active shapers of what can be thought, said, and known.`,
    date: "2023",
    tags: ["information theory", "design", "power"],
  },
  {
    title: "Against Premature Optimization",
    preview:
      "Knuth's famous warning about premature optimization in code applies with equal force to organizations, policies, and systems of every kind. Optimizing a system before understanding it is how you guarantee unforeseen consequences.",
    body: `Knuth's famous warning about premature optimization in code applies with equal force to organizations, policies, and systems of every kind. Optimizing a system before understanding it is how you guarantee unforeseen consequences.

Optimization requires a target — a function to maximize. But in complex adaptive systems, the consequences of optimizing for any particular target are never confined to that target. You optimize for speed and sacrifice robustness. You optimize for efficiency and sacrifice adaptability. You optimize for engagement and sacrifice epistemic health.

The deeper problem is that optimization tends to erode the very diversity that makes systems resilient. An optimized system is one in which most of the variation has been eliminated — the variation that, in a different environment, might have proven adaptive. This is why highly optimized biological systems are often the first casualties of environmental disruption: they have traded flexibility for efficiency.

The alternative is not to avoid optimization, but to be strategic about it. Optimize at the edges; preserve redundancy at the core. Optimize for today's environment; maintain the capacity to adapt to tomorrow's. And always, always ask: what is this optimization making worse? The answer will be there, even when it's invisible.`,
    date: "2022",
    tags: ["systems thinking", "complexity", "design"],
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "120px 24px 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(56,189,248,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            pointerEvents: "none",
          }}
        />

        {/* Radial glow */}
        <div
          style={{
            position: "absolute",
            top: "30%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "600px",
            height: "600px",
            background:
              "radial-gradient(ellipse, rgba(56,189,248,0.04) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div style={{ maxWidth: "900px", margin: "0 auto", width: "100%", position: "relative" }}>
          {/* Eyebrow */}
          <div
            className="animate-fadeUp"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "32px",
            }}
          >
            <div
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "var(--accent)",
                boxShadow: "0 0 10px rgba(56,189,248,0.5)",
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                color: "var(--accent)",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              Researcher · Writer · Systems Thinker
            </span>
          </div>

          {/* Main headline */}
          <h1
            className="animate-fadeUp delay-2"
            style={{
              fontSize: "clamp(2.4rem, 6vw, 4.5rem)",
              fontWeight: 700,
              lineHeight: 1.08,
              marginBottom: "28px",
              letterSpacing: "-0.02em",
            }}
          >
            The world is{" "}
            <span
              style={{
                color: "transparent",
                WebkitTextStroke: "1px rgba(234,234,234,0.4)",
              }}
            >
              systems
            </span>
            <br />
            all the{" "}
            <span
              style={{
                background: "linear-gradient(135deg, var(--accent), #818CF8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              way down.
            </span>
          </h1>

          {/* Subheadline */}
          <p
            className="animate-fadeUp delay-3"
            style={{
              fontSize: "1.1rem",
              color: "var(--text-muted)",
              lineHeight: 1.75,
              maxWidth: "560px",
              marginBottom: "44px",
            }}
          >
            I study the structures that shape how we know, communicate, and
            organize — across information systems, media ecology, and technology
            culture.
          </p>

          {/* CTAs */}
          <div
            className="animate-fadeUp delay-4"
            style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}
          >
            <a
              href="#domains"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "12px 24px",
                borderRadius: "var(--radius)",
                fontFamily: "var(--font-mono)",
                fontSize: "0.8rem",
                background: "var(--accent-dim)",
                border: "1px solid rgba(56,189,248,0.3)",
                color: "var(--accent)",
                letterSpacing: "0.05em",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.background = "var(--accent)";
                el.style.color = "var(--bg)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.background = "var(--accent-dim)";
                el.style.color = "var(--accent)";
              }}
            >
              explore domains ↓
            </a>
            <a
              href="/about"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "12px 24px",
                borderRadius: "var(--radius)",
                fontFamily: "var(--font-mono)",
                fontSize: "0.8rem",
                background: "var(--surface)",
                border: "1px solid var(--border)",
                color: "var(--text-muted)",
                letterSpacing: "0.05em",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = "rgba(56,189,248,0.3)";
                el.style.color = "var(--text)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = "var(--border)";
                el.style.color = "var(--text-muted)";
              }}
            >
              about me →
            </a>
          </div>

          {/* Scroll indicator */}
          <div
            className="animate-fadeUp delay-6"
            style={{
              position: "absolute",
              bottom: "-120px",
              right: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <div
              style={{
                width: "1px",
                height: "60px",
                background:
                  "linear-gradient(to bottom, transparent, var(--border))",
              }}
            />
          </div>
        </div>
      </section>

      {/* Domain Map */}
      <section
        id="domains"
        style={{ padding: "100px 24px", maxWidth: "1000px", margin: "0 auto" }}
      >
        <div style={{ marginBottom: "48px" }}>
          <div className="accent-line" />
          <h2
            style={{
              fontSize: "1.8rem",
              fontWeight: 600,
              marginBottom: "12px",
            }}
          >
            Domain Map
          </h2>
          <p style={{ color: "var(--text-muted)", maxWidth: "480px", lineHeight: 1.7 }}>
            Five interconnected domains of research and thinking. Select any
            node to read the essay.
          </p>
        </div>
        <SystemMap />
      </section>

      {/* Essays */}
      <section
        style={{
          padding: "100px 24px",
          maxWidth: "820px",
          margin: "0 auto",
        }}
      >
        <div style={{ marginBottom: "48px" }}>
          <div className="accent-line" />
          <h2
            style={{
              fontSize: "1.8rem",
              fontWeight: 600,
              marginBottom: "12px",
            }}
          >
            Selected Essays
          </h2>
          <p style={{ color: "var(--text-muted)", lineHeight: 1.7 }}>
            Explorations at the intersection of systems, knowledge, and technology.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {ESSAYS.map((essay) => (
            <Essay key={essay.title} {...essay} />
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section
        style={{
          padding: "80px 24px 120px",
          maxWidth: "700px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <div
          style={{
            padding: "60px 40px",
            borderRadius: "var(--radius-lg)",
            border: "1px solid var(--border)",
            background: "var(--bg-2)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(ellipse at center, rgba(56,189,248,0.05) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />
          <div style={{ position: "relative" }}>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.7rem",
                color: "var(--accent)",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                display: "block",
                marginBottom: "16px",
              }}
            >
              Available for collaboration
            </span>
            <h2
              style={{
                fontSize: "1.9rem",
                fontWeight: 600,
                marginBottom: "16px",
                lineHeight: 1.2,
              }}
            >
              Let&apos;s think together.
            </h2>
            <p
              style={{
                color: "var(--text-muted)",
                lineHeight: 1.7,
                marginBottom: "32px",
              }}
            >
              Speaking engagements, research collaborations, strategic
              consulting — or simply a conversation about something that matters.
            </p>
            <a
              href="mailto:hello@cassiano.io"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "14px 28px",
                borderRadius: "var(--radius)",
                fontFamily: "var(--font-mono)",
                fontSize: "0.82rem",
                background: "var(--accent)",
                color: "var(--bg)",
                fontWeight: 500,
                letterSpacing: "0.05em",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.opacity = "0.85";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.opacity = "1";
              }}
            >
              get in touch →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
