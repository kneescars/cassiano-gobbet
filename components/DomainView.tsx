"use client";

import { useEffect, useState } from "react";
import { Domain } from "@/data/domains";

interface DomainViewProps {
  domain: Domain;
  onClose: () => void;
}

export default function DomainView({ domain, onClose }: DomainViewProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Trigger transition after mount
    const t = setTimeout(() => setVisible(true), 10);
    return () => clearTimeout(t);
  }, []);

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 400);
  };

  const paragraphs = domain.essay.trim().split("\n\n");

  return (
    <div
      style={{
        marginTop: "16px",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(12px)",
        transition: "opacity 0.4s ease, transform 0.4s cubic-bezier(0.4,0,0.2,1)",
        borderRadius: "var(--radius-lg)",
        border: `1px solid ${domain.color}30`,
        background: "var(--bg-2)",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: "24px 28px 20px",
          borderBottom: `1px solid ${domain.color}15`,
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: "20px",
        }}
      >
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: domain.color,
                boxShadow: `0 0 8px ${domain.color}60`,
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.7rem",
                color: domain.color,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Domain
            </span>
          </div>
          <h3
            style={{
              fontSize: "1.4rem",
              fontWeight: 600,
              color: "var(--text)",
              marginBottom: "6px",
              lineHeight: 1.2,
            }}
          >
            {domain.label}
          </h3>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.8rem",
              color: "var(--text-muted)",
              fontStyle: "italic",
            }}
          >
            {domain.tagline}
          </p>
        </div>

        <button
          onClick={handleClose}
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: "4px",
            color: "var(--text-muted)",
            cursor: "pointer",
            padding: "6px 10px",
            fontFamily: "var(--font-mono)",
            fontSize: "0.7rem",
            transition: "all 0.2s",
            flexShrink: 0,
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget;
            el.style.borderColor = "var(--accent)";
            el.style.color = "var(--accent)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget;
            el.style.borderColor = "var(--border)";
            el.style.color = "var(--text-muted)";
          }}
        >
          esc
        </button>
      </div>

      {/* Essay content */}
      <div style={{ padding: "28px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            maxWidth: "720px",
          }}
        >
          {paragraphs.map((para, i) => (
            <p
              key={i}
              style={{
                color: i === 0 ? "var(--text)" : "rgba(234,234,234,0.7)",
                lineHeight: 1.8,
                fontSize: "0.95rem",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(8px)",
                transition: `opacity 0.5s ease ${0.1 + i * 0.08}s, transform 0.5s ease ${0.1 + i * 0.08}s`,
              }}
            >
              {para}
            </p>
          ))}
        </div>

        {/* Tags */}
        <div
          style={{
            display: "flex",
            gap: "8px",
            marginTop: "28px",
            flexWrap: "wrap",
          }}
        >
          {domain.tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.7rem",
                padding: "4px 10px",
                borderRadius: "999px",
                background: `${domain.color}12`,
                color: domain.color,
                border: `1px solid ${domain.color}25`,
                letterSpacing: "0.05em",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
