//const TELEGRAM_USERNAME = "cassiano_telegram"; // ← your actual @username
//"use client";

import { useEffect, useState } from "react";

const TELEGRAM_USERNAME = "cassiano_telegram"; // ← your actual @username
"use client";

const INQUIRY_TYPES = [
  { id: "speaking", label: "Speaking Engagement", icon: "◈" },
  { id: "consulting", label: "Consulting", icon: "◇" },
  { id: "research", label: "Research Collaboration", icon: "◉" },
  { id: "press", label: "Press & Media", icon: "◎" },
  { id: "other", label: "Other", icon: "○" },
];

export default function Contact() {
  const [visible, setVisible] = useState(false);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  const handleTelegramSend = () => {
    if (!name.trim() || !message.trim()) return;
    const type = selectedType ? INQUIRY_TYPES.find((t) => t.id === selectedType)?.label : "General";
    const text = encodeURIComponent(`[${type}]\nFrom: ${name}\n\n${message}`);
    window.open(`https://t.me/${TELEGRAM_USERNAME}?text=${text}`, "_blank");
    setSent(true);
  };

  return (
    <div style={{ minHeight: "100vh", paddingTop: 88 }}>

      {/* Header */}
      <section style={{ padding: "60px 24px 60px", maxWidth: 900, margin: "0 auto" }}>
        <div style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(16px)", transition: "all 0.6s ease 0.1s", marginBottom: 16 }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "#38BDF8", letterSpacing: "0.2em" }}>SYS://CONTACT</span>
        </div>
        <div style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(20px)", transition: "all 0.7s ease 0.2s" }}>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px, 5vw, 56px)", color: "#EAEAEA", fontWeight: 400, lineHeight: 1.1, marginBottom: 16, letterSpacing: "-0.02em" }}>
            Let's think<br />
            <span style={{ fontStyle: "italic", color: "#38BDF8" }}>together.</span>
          </h1>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "#6B7280", lineHeight: 1.7, maxWidth: 480 }}>
            I'm open to speaking invitations, research collaborations, consulting projects, and press inquiries. Send me a message directly via Telegram.
          </p>
        </div>
      </section>

      {/* Contact interface */}
      <section style={{ padding: "0 24px 80px", maxWidth: 900, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 24, alignItems: "start" }}>

          {/* Form */}
          <div style={{ opacity: visible ? 1 : 0, transition: "all 0.7s ease 0.3s" }}>
            {sent ? (
              <div style={{ border: "1px solid rgba(52,211,153,0.25)", borderRadius: 8, padding: "48px 40px", background: "rgba(52,211,153,0.04)", textAlign: "center", animation: "fadeUp 0.5s ease forwards" }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 28, color: "#34D399", marginBottom: 16 }}>✓</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: 22, color: "#EAEAEA", fontWeight: 400, marginBottom: 12 }}>Message prepared.</h3>
                <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "#6B7280", lineHeight: 1.6, marginBottom: 24 }}>
                  Your Telegram app should have opened with the pre-filled message. If not, message me directly at @{TELEGRAM_USERNAME}.
                </p>
                <button onClick={() => setSent(false)} style={{ background: "none", border: "1px solid #2A2A2A", borderRadius: 6, color: "#6B7280", cursor: "pointer", padding: "8px 20px", fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.08em" }}>
                  SEND ANOTHER
                </button>
              </div>
            ) : (
              <div style={{ border: "1px solid #1E1E1E", borderRadius: 8, overflow: "hidden", background: "#0D0D0D" }}>
                {/* Inquiry type */}
                <div style={{ padding: "24px 24px 0" }}>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "#4B5563", letterSpacing: "0.12em", marginBottom: 12 }}>INQUIRY TYPE</div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 24 }}>
                    {INQUIRY_TYPES.map((type) => {
                      const active = selectedType === type.id;
                      return (
                        <button key={type.id} onClick={() => setSelectedType(active ? null : type.id)}
                          style={{ display: "flex", alignItems: "center", gap: 6, padding: "6px 14px", borderRadius: 5, border: `1px solid ${active ? "rgba(56,189,248,0.35)" : "#2A2A2A"}`, background: active ? "rgba(56,189,248,0.08)" : "transparent", color: active ? "#38BDF8" : "#6B7280", cursor: "pointer", fontFamily: "var(--font-body)", fontSize: 12, transition: "all 0.2s" }}>
                          <span style={{ fontSize: 10 }}>{type.icon}</span>
                          {type.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Divider */}
                <div style={{ height: 1, background: "#1A1A1A" }} />

                {/* Fields */}
                <div style={{ padding: "24px" }}>
                  <div style={{ marginBottom: 16 }}>
                    <label style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: 10, color: "#4B5563", letterSpacing: "0.12em", marginBottom: 8 }}>YOUR NAME</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Jane Smith"
                      style={{ width: "100%", background: "#111", border: "1px solid #2A2A2A", borderRadius: 6, padding: "12px 14px", color: "#EAEAEA", fontFamily: "var(--font-body)", fontSize: 14, outline: "none", transition: "border-color 0.2s" }}
                      onFocus={(e) => (e.target.style.borderColor = "rgba(56,189,248,0.4)")}
                      onBlur={(e) => (e.target.style.borderColor = "#2A2A2A")}
                    />
                  </div>
                  <div style={{ marginBottom: 24 }}>
                    <label style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: 10, color: "#4B5563", letterSpacing: "0.12em", marginBottom: 8 }}>MESSAGE</label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell me about your project, event, or question..."
                      rows={5}
                      style={{ width: "100%", background: "#111", border: "1px solid #2A2A2A", borderRadius: 6, padding: "12px 14px", color: "#EAEAEA", fontFamily: "var(--font-body)", fontSize: 14, outline: "none", resize: "vertical", transition: "border-color 0.2s" }}
                      onFocus={(e) => (e.target.style.borderColor = "rgba(56,189,248,0.4)")}
                      onBlur={(e) => (e.target.style.borderColor = "#2A2A2A")}
                    />
                  </div>

                  <button
                    onClick={handleTelegramSend}
                    disabled={!name.trim() || !message.trim()}
                    style={{ width: "100%", padding: "14px", background: name.trim() && message.trim() ? "rgba(56,189,248,0.1)" : "rgba(56,189,248,0.03)", border: `1px solid ${name.trim() && message.trim() ? "rgba(56,189,248,0.35)" : "rgba(56,189,248,0.1)"}`, borderRadius: 6, color: name.trim() && message.trim() ? "#38BDF8" : "#4B5563", cursor: name.trim() && message.trim() ? "pointer" : "not-allowed", fontFamily: "var(--font-body)", fontSize: 14, letterSpacing: "0.04em", transition: "all 0.2s ease", display: "flex", alignItems: "center", justifyContent: "center", gap: 10 }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-2.01 9.47c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.26 13.985l-2.94-.92c-.64-.203-.653-.64.136-.948l11.49-4.43c.532-.194.998.13.616.561z"/>
                    </svg>
                    Send via Telegram
                  </button>
                  <p style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "#2A2A2A", textAlign: "center", marginTop: 12, letterSpacing: "0.06em" }}>
                    OPENS TELEGRAM APP WITH PRE-FILLED MESSAGE
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar info */}
          <div style={{ opacity: visible ? 1 : 0, transition: "all 0.7s ease 0.5s", display: "flex", flexDirection: "column", gap: 12 }}>

            {/* Direct Telegram */}
            <div style={{ border: "1px solid #1E1E1E", borderRadius: 8, padding: "20px", background: "#0D0D0D" }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "#4B5563", letterSpacing: "0.12em", marginBottom: 12 }}>DIRECT CONTACT</div>
              <a href={`https://t.me/${TELEGRAM_USERNAME}`} target="_blank" rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none", padding: "12px 16px", border: "1px solid rgba(56,189,248,0.15)", borderRadius: 6, background: "rgba(56,189,248,0.04)", transition: "all 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.background = "rgba(56,189,248,0.08)")}
                onMouseLeave={e => (e.currentTarget.style.background = "rgba(56,189,248,0.04)")}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#38BDF8" style={{ flexShrink: 0 }}>
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-2.01 9.47c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.26 13.985l-2.94-.92c-.64-.203-.653-.64.136-.948l11.49-4.43c.532-.194.998.13.616.561z"/>
                </svg>
                <div>
                  <div style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "#38BDF8" }}>@{TELEGRAM_USERNAME}</div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "#4B5563", letterSpacing: "0.04em" }}>TELEGRAM</div>
                </div>
              </a>
            </div>

            {/* Response info */}
            <div style={{ border: "1px solid #1E1E1E", borderRadius: 8, padding: "20px", background: "#0D0D0D" }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "#4B5563", letterSpacing: "0.12em", marginBottom: 16 }}>RESPONSE TIMES</div>
              {[
                { type: "Speaking / Events", time: "48–72 hrs" },
                { type: "Research & Consulting", time: "1–3 days" },
                { type: "Press Inquiries", time: "24 hrs" },
              ].map((r) => (
                <div key={r.type} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10, paddingBottom: 10, borderBottom: "1px solid #111" }}>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "#6B7280" }}>{r.type}</span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "#38BDF8" }}>{r.time}</span>
                </div>
              ))}
            </div>

            {/* Availability */}
            <div style={{ border: "1px solid rgba(52,211,153,0.2)", borderRadius: 8, padding: "16px 20px", background: "rgba(52,211,153,0.03)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#34D399", boxShadow: "0 0 6px #34D399" }} />
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "#34D399", letterSpacing: "0.1em" }}>AVAILABLE FOR NEW PROJECTS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid #1E1E1E", padding: "24px", textAlign: "center" }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "#2A2A2A", letterSpacing: "0.08em" }}>
          © {new Date().getFullYear()} Cassiano Gobbet
        </span>
      </footer>
    </div>
  );
}