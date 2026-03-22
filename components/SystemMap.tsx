"use client";

import { useState, useRef } from "react";
import { domains, Domain } from "@/data/domains";
import DomainView from "./DomainView";

export default function SystemMap() {
  const [active, setActive] = useState<Domain | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  return (
    <div style={{ position: "relative" }}>
      {/* Map container */}
      <div
        ref={mapRef}
        style={{
          position: "relative",
          width: "100%",
          height: "380px",
          borderRadius: "var(--radius-lg)",
          border: "1px solid var(--border)",
          background: "var(--bg-2)",
          overflow: "hidden",
        }}
      >
        {/* Grid lines */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(56,189,248,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.04) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Connection lines between domains */}
        <svg
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
          }}
        >
          {domains.map((d, i) =>
            domains.slice(i + 1).map((d2) => (
              <line
                key={`${d.id}-${d2.id}`}
                x1={`${d.x}%`}
                y1={`${d.y}%`}
                x2={`${d2.x}%`}
                y2={`${d2.y}%`}
                stroke={
                  hovered === d.id || hovered === d2.id
                    ? "rgba(56,189,248,0.12)"
                    : "rgba(255,255,255,0.03)"
                }
                strokeWidth="1"
                style={{ transition: "stroke 0.3s ease" }}
              />
            ))
          )}
        </svg>

        {/* Center label */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            pointerEvents: "none",
          }}
        >
          <div
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              border: "1px solid rgba(56,189,248,0.15)",
              background: "rgba(56,189,248,0.05)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 8px",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.6rem",
                color: "rgba(56,189,248,0.5)",
                letterSpacing: "0.1em",
              }}
            >
              SYS
            </span>
          </div>
        </div>

        {/* Domain nodes */}
        {domains.map((domain) => (
          <button
            key={domain.id}
            onClick={() => setActive(active?.id === domain.id ? null : domain)}
            onMouseEnter={() => setHovered(domain.id)}
            onMouseLeave={() => setHovered(null)}
            style={{
              position: "absolute",
              left: `${domain.x}%`,
              top: `${domain.y}%`,
              transform: "translate(-50%, -50%)",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
              zIndex: 2,
            }}
          >
            {/* Node */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <div
                style={{
                  width:
                    active?.id === domain.id
                      ? "44px"
                      : hovered === domain.id
                      ? "36px"
                      : "28px",
                  height:
                    active?.id === domain.id
                      ? "44px"
                      : hovered === domain.id
                      ? "36px"
                      : "28px",
                  borderRadius: "50%",
                  background:
                    active?.id === domain.id || hovered === domain.id
                      ? `${domain.color}20`
                      : "var(--bg-3)",
                  border: `1px solid ${
                    active?.id === domain.id || hovered === domain.id
                      ? domain.color
                      : "var(--border)"
                  }`,
                  boxShadow:
                    active?.id === domain.id
                      ? `0 0 20px ${domain.color}40`
                      : hovered === domain.id
                      ? `0 0 12px ${domain.color}20`
                      : "none",
                  transition: "all 0.25s cubic-bezier(0.4,0,0.2,1)",
                  position: "relative",
                }}
              >
                {/* Pulse ring on active */}
                {active?.id === domain.id && (
                  <div
                    style={{
                      position: "absolute",
                      inset: "-6px",
                      borderRadius: "50%",
                      border: `1px solid ${domain.color}30`,
                      animation: "ping 2s ease-in-out infinite",
                    }}
                  />
                )}
              </div>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.65rem",
                  color:
                    active?.id === domain.id
                      ? domain.color
                      : hovered === domain.id
                      ? "var(--text)"
                      : "var(--text-muted)",
                  letterSpacing: "0.05em",
                  transition: "color 0.2s ease",
                  whiteSpace: "nowrap",
                  textAlign: "center",
                  maxWidth: "80px",
                  lineHeight: 1.3,
                }}
              >
                {domain.shortLabel}
              </span>
            </div>
          </button>
        ))}

        {/* Instruction */}
        <div
          style={{
            position: "absolute",
            bottom: "12px",
            right: "16px",
            fontFamily: "var(--font-mono)",
            fontSize: "0.65rem",
            color: "var(--text-dim)",
            letterSpacing: "0.05em",
          }}
        >
          click nodes to explore →
        </div>
      </div>

      {/* Domain essay panel */}
      {active && (
        <DomainView domain={active} onClose={() => setActive(null)} />
      )}

      <style>{`
        @keyframes ping {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(1.8); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
