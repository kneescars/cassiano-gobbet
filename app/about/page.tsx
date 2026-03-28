"use client";

import { useEffect, useState } from "react";

import Link from "next/link";

const PRINCIPLES = [
	{label:"Map the System",desc:"Name the system in concrete terms: actors, incentives, constraints, and feedback loops. No vague narratives, no abstractions. If it cannot be mapped clearly, it cannot be understood or acted upon—and anything built on top of it will fail."},
	{label:"Identify the Mechanisms",desc:"Ignore outrage cycles. Focus on causality. What matters is not who is blamed, but what produces the same outcomes repeatedly. If it scales, it is structural—and must be addressed at multiple points, not in isolation."},
	{label:"Design the Intervention",desc:"Every solution is a trade-off. Identify leverage points, model second-order effects, and assume failure modes upfront. If an intervention does not change incentives or break a loop, it is not a solution—it is a temporary patch"},
	{label:"Make it Understandable",desc:"Systems that shape millions must be explainable without distortion. Clarity is not simplification—it is precision under constraint. If it cannot be explained clearly, it cannot be challenged or changed."},
];

const SPEAKING_TOPICS = [
  "The Hidden Infrastructure of News",
  "The Real Economics of Journalism in the Platform Age",
  "The Myth of the Neutral Algorithm",
  "The Information Supply Chain",
  "AI as a Cognitive Exoskeleton for Journalists",
  "The New Architecture of Truth",
];

export default function About() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={{ minHeight: "100vh", paddingTop: 88 }}>

      {/* Hero */}
      <section style={{ padding: "60px 24px 80px", maxWidth: 900, margin: "0 auto" }}>
        <div style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(16px)", transition: "all 0.6s ease 0.1s", marginBottom: 16 }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "#38BDF8", letterSpacing: "0.2em" }}>SYS://ABOUT</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 48, alignItems: "start" }}>
          <div style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(20px)", transition: "all 0.7s ease 0.2s" }}>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 5vw, 60px)", color: "#EAEAEA", fontWeight: 400, lineHeight: 1.1, marginBottom: 32, letterSpacing: "-0.02em" }}>
              Analyst.<br />
              <span style={{ fontStyle: "italic", color: "#38BDF8" }}>Writer.</span><br />
              Systems thinker.
            </h1>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#9CA3AF", lineHeight: 1.85, maxWidth: 540, marginBottom: 20, fontWeight: 300 }}>
              I work at the intersection of media systems, technology, and information power, focusing on how digital infrastructure, platform incentives, and AI reshape what societies know, trust, and act upon. My work connects layers that are usually treated in isolation—editorial, technical, economic, and political—to explain how modern information systems actually function.
            </p>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#9CA3AF", lineHeight: 1.85, maxWidth: 540, marginBottom: 20, fontWeight: 300 }}>
              With more than 25 years of experience across journalism, product, and digital environments, my background spans reporting, editing, strategy, and hands-on exposure to the technical and operational realities behind media systems. I have worked with global organizations such as BBC and Yahoo, and participated in international discussions on AI and media alongside leading practitioners and researchers.
            </p>            <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#9CA3AF", lineHeight: 1.85, maxWidth: 540, marginBottom: 20, fontWeight: 300 }}>
              My perspective is shaped by a combination of practical experience and interdisciplinary study, including entrepreneurship, information systems, cybersecurity, and digital infrastructure. Rather than focusing on a single domain, I analyze how these systems interact—how content is produced, distributed, amplified, distorted, and ultimately turned into influence.
            </p>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#9CA3AF", lineHeight: 1.85, maxWidth: 540, fontWeight: 300 }}>
              Based between Europe and Latin America, I work with media professionals, researchers, and organizations seeking to understand and navigate the structural changes affecting journalism, technology, and the information ecosystem.
            </p>
          </div>

          {/* Sidebar stats */}
          <div style={{ opacity: visible ? 1 : 0, transition: "all 0.7s ease 0.5s", display: "flex", flexDirection: "column", gap: 2, minWidth: 160 }}>
            {[
              { n: "15", label: "Years of Research" },
              { n: "25", label: "Years of Career" },
//              { n: "20+", label: "Published Papers" },
//              { n: "40+", label: "Partner Institutions" },
            ].map((s) => (
              <div key={s.label} style={{ padding: "20px", border: "1px solid #1E1E1E", borderRadius: 8, background: "#0D0D0D", textAlign: "center" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 32, color: "#38BDF8", lineHeight: 1, marginBottom: 6 }}>{s.n}</div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "#4B5563", letterSpacing: "0.1em", lineHeight: 1.3 }}>{s.label.toUpperCase()}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ height: 1, background: "linear-gradient(90deg, transparent, #1E1E1E 20%, #1E1E1E 80%, transparent)" }} />
      </div>

      {/* Principles */}
      <section style={{ padding: "80px 24px", maxWidth: 900, margin: "0 auto" }}>
        <div style={{ marginBottom: 48 }}>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "#818CF8", letterSpacing: "0.15em", marginBottom: 16 }}>SYS://PRINCIPLES</div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(24px, 3.5vw, 36px)", color: "#EAEAEA", fontWeight: 400 }}>How I Work</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12 }}>
          {PRINCIPLES.map((p, i) => (
            <div key={p.label} style={{ padding: "24px", border: "1px solid #1E1E1E", borderRadius: 8, background: "#0D0D0D", animation: `fadeUp 0.6s ease ${i * 100}ms forwards`, opacity: 0 }}>
              <div style={{ width: 32, height: 32, borderRadius: "50%", border: "1px solid rgba(129,140,248,0.3)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16, background: "rgba(129,140,248,0.04)" }}>
                <span style={{ color: "#818CF8", fontFamily: "var(--font-mono)", fontSize: 11 }}>{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: 17, color: "#EAEAEA", fontWeight: 400, marginBottom: 8 }}>{p.label}</h3>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "#6B7280", lineHeight: 1.6 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ height: 1, background: "linear-gradient(90deg, transparent, #1E1E1E 20%, #1E1E1E 80%, transparent)" }} />
      </div>

      {/* Speaking topics
      <section style={{ padding: "80px 24px", maxWidth: 900, margin: "0 auto" }}>
        <div style={{ marginBottom: 40 }}>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "#34D399", letterSpacing: "0.15em", marginBottom: 16 }}>SYS://SPEAKING</div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(24px, 3.5vw, 36px)", color: "#EAEAEA", fontWeight: 400, marginBottom: 12 }}>Speaking & Lectures</h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "#6B7280", maxWidth: 480, lineHeight: 1.6, marginBottom: 32 }}>
            Available for keynotes, academic lectures, panel discussions, and institutional workshops.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 8 }}>
          {SPEAKING_TOPICS.map((topic, i) => (
            <div key={topic} style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 18px", border: "1px solid #1E1E1E", borderRadius: 6, background: "#0D0D0D", animation: `slideRight 0.5s ease ${i * 70}ms forwards`, opacity: 0 }}>
              <span style={{ color: "#34D399", fontSize: 10, flexShrink: 0 }}>→</span>
              <span style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "#9CA3AF", lineHeight: 1.4 }}>{topic}</span>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 32 }}>
          <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 24px", background: "rgba(52,211,153,0.06)", border: "1px solid rgba(52,211,153,0.2)", borderRadius: 6, color: "#34D399", textDecoration: "none", fontFamily: "var(--font-body)", fontSize: 14, letterSpacing: "0.04em" }}>
            Invite me to speak →
          </Link>
        </div>
      </section> */}

      {/* Footer */}
      <footer style={{ borderTop: "1px solid #1E1E1E", padding: "24px", textAlign: "center" }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "#2A2A2A", letterSpacing: "0.08em" }}>
          © {new Date().getFullYear()} Cassiano Gobbet
        </span>
      </footer>
    </div>
  );
}