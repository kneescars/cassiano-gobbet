"use client";

import { useState } from "react";

interface EssayProps {
  title: string;
  preview: string;
  body: string;
  date?: string;
  tags?: string[];
}

export default function Essay({ title, preview, body, date, tags }: EssayProps) {
  const [expanded, setExpanded] = useState(false);

  const paragraphs = body.trim().split("\n\n");

  return (
    <div
      style={{
        padding: "28px",
        borderRadius: "var(--radius-lg)",
        border: "1px solid var(--border)",
        background: "var(--surface)",
        transition: "all 0.3s ease",
      }}
      onMouseEnter={(e) => {
        if (!expanded) {
          const el = e.currentTarget;
          el.style.borderColor = "var(--border-hover)";
          el.style.background = "var(--surface-hover)";
        }
      }}
      onMouseLeave={(e) => {
        if (!expanded) {
          const el = e.currentTarget;
          el.style.borderColor = "var(--border)";
          el.style.background = "var(--surface)";
        }
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: "12px" }}>
        {date && (
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.7rem",
              color: "var(--text-muted)",
              letterSpacing: "0.05em",
              display: "block",
              marginBottom: "8px",
            }}
          >
            {date}
          </span>
        )}
        <h3
          style={{
            fontSize: "1.15rem",
            fontWeight: 600,
            color: "var(--text)",
            lineHeight: 1.3,
            marginBottom: "10px",
          }}
        >
          {title}
        </h3>
        <p
          style={{
            color: "var(--text-muted)",
            fontSize: "0.9rem",
            lineHeight: 1.7,
          }}
        >
          {preview}
        </p>
      </div>

      {/* Expanded content */}
      <div
        style={{
          maxHeight: expanded ? "2000px" : "0",
          overflow: "hidden",
          transition: "max-height 0.6s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        <div
          style={{
            paddingTop: "20px",
            borderTop: "1px solid var(--border)",
            marginTop: "16px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {paragraphs.map((para, i) => (
              <p
                key={i}
                style={{
                  color: "rgba(234,234,234,0.75)",
                  lineHeight: 1.85,
                  fontSize: "0.9rem",
                }}
              >
                {para}
              </p>
            ))}
          </div>

          {tags && tags.length > 0 && (
            <div
              style={{
                display: "flex",
                gap: "8px",
                marginTop: "20px",
                flexWrap: "wrap",
              }}
            >
              {tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Toggle button */}
      <button
        onClick={() => setExpanded(!expanded)}
        style={{
          marginTop: "16px",
          background: "none",
          border: "none",
          cursor: "pointer",
          fontFamily: "var(--font-mono)",
          fontSize: "0.75rem",
          color: "var(--accent)",
          display: "flex",
          alignItems: "center",
          gap: "6px",
          padding: 0,
          letterSpacing: "0.05em",
          transition: "opacity 0.2s",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.opacity = "0.7";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.opacity = "1";
        }}
      >
        <span
          style={{
            display: "inline-block",
            transform: expanded ? "rotate(90deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease",
          }}
        >
          ›
        </span>
        {expanded ? "collapse" : "read more"}
      </button>
    </div>
  );
}
