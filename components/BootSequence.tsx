"use client";

import { useEffect, useState } from "react";

const LINES = [
  { text: "initializing runtime environment...", delay: 0 },
  { text: "loading knowledge graph v4.2.1", delay: 400 },
  { text: "mapping domain intersections...", delay: 900 },
  { text: "calibrating model lens [██████████] 100%", delay: 1500 },
  { text: "resolving stack references...", delay: 2100 },
  { text: "compiling thoughts on media ecosystems...", delay: 2600 },
  { text: "establishing signal clarity...", delay: 3100 },
  { text: "", delay: 3600 },
  { text: "▶  welcome.", delay: 3800, accent: true, large: true },
];

interface BootSequenceProps {
  onComplete: () => void;
}

export default function BootSequence({ onComplete }: BootSequenceProps) {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const [done, setDone] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    LINES.forEach((line, i) => {
      const t = setTimeout(() => {
        setVisibleLines((prev) => [...prev, i]);
      }, line.delay);
      timers.push(t);
    });

    // Start fade out after last line
    const lastDelay = LINES[LINES.length - 1].delay;
    const t1 = setTimeout(() => {
      setFadeOut(true);
    }, lastDelay + 900);

    const t2 = setTimeout(() => {
      setDone(true);
      onComplete();
    }, lastDelay + 1700);

    timers.push(t1, t2);
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  if (done) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "var(--bg)",
        zIndex: 10000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: fadeOut ? 0 : 1,
        transition: "opacity 0.8s cubic-bezier(0.4,0,0.2,1)",
      }}
    >
      {/* Scanline effect */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 560,
          width: "100%",
          padding: "0 24px",
        }}
      >
        {/* Logo */}
        <div
          style={{
            fontFamily: "var(--font-mono)",
            color: "var(--accent)",
            fontSize: "0.75rem",
            letterSpacing: "0.2em",
            marginBottom: "32px",
            opacity: 0.6,
          }}
        >
          CASSIANO.SYS
        </div>

        {/* Terminal lines */}
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          {LINES.map((line, i) => (
            <div
              key={i}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: line.large ? "1.4rem" : "0.8rem",
                color: line.accent ? "var(--accent)" : "var(--text-muted)",
                opacity: visibleLines.includes(i) ? 1 : 0,
                transform: visibleLines.includes(i)
                  ? "translateY(0)"
                  : "translateY(6px)",
                transition: "opacity 0.3s ease, transform 0.3s ease",
                minHeight: line.large ? "2rem" : "1.1rem",
                fontWeight: line.large ? 500 : 300,
                letterSpacing: line.large ? "0.05em" : "0.02em",
              }}
            >
              {line.text}
              {/* Cursor on last visible line */}
              {i === Math.max(...visibleLines) &&
                !fadeOut &&
                visibleLines.length < LINES.length && (
                  <span
                    style={{
                      display: "inline-block",
                      width: "8px",
                      height: line.large ? "1.2rem" : "0.85rem",
                      background: "var(--accent)",
                      marginLeft: "4px",
                      verticalAlign: "middle",
                      animation: "blink 1s step-end infinite",
                    }}
                  />
                )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
