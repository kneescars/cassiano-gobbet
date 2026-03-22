"use client";

import { useState } from "react";
import { Project } from "@/data/portfolio";

const STATUS_COLORS: Record<string, string> = {
  live: "#4ADE80",
  research: "#38BDF8",
  published: "#A78BFA",
  ongoing: "#FBBF24",
};

interface PortfolioItemProps {
  project: Project;
}

export default function PortfolioItem({ project }: PortfolioItemProps) {
  const [expanded, setExpanded] = useState(false);
  const [hovered, setHovered] = useState(false);

  const statusColor = STATUS_COLORS[project.status] ?? "#6B7280";
  const paragraphs = project.detail.trim().split("\n\n");

  return (
    <div
      onClick={() => setExpanded(!expanded)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: "24px",
        borderRadius: "var(--radius-lg)",
        border: `1px solid ${expanded ? `${statusColor}30` : hovered ? "var(--border-hover)" : "var(--border)"}`,
        background: expanded
          ? `${statusColor}06`
          : hovered
          ? "var(--surface-hover)"
          : "var(--surface)",
        cursor: "pointer",
        transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
        transform: hovered && !expanded ? "translateY(-2px)" : "translateY(0)",
        boxShadow: hovered ? "0 8px 30px rgba(0,0,0,0.2)" : "none",
      }}
    >
      {/* Top meta */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginBottom: "12px",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.65rem",
            color: "var(--text-muted)",
            letterSpacing: "0.05em",
          }}
        >
          {project.year}
        </span>
        <span style={{ color: "var(--border)", fontSize: "0.6rem" }}>·</span>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.65rem",
            color: "var(--text-muted)",
            letterSpacing: "0.05em",
          }}
        >
          {project.category}
        </span>
        <span style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "5px" }}>
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: statusColor,
              display: "inline-block",
              boxShadow: `0 0 6px ${statusColor}60`,
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.65rem",
              color: statusColor,
              letterSpacing: "0.05em",
            }}
          >
            {project.status}
          </span>
        </span>
      </div>

      {/* Title */}
      <h3
        style={{
          fontSize: "1.1rem",
          fontWeight: 600,
          color: "var(--text)",
          marginBottom: "8px",
          lineHeight: 1.3,
          transition: "color 0.2s",
        }}
      >
        {project.title}
      </h3>

      {/* Short description */}
      <p
        style={{
          color: "var(--text-muted)",
          fontSize: "0.88rem",
          lineHeight: 1.6,
        }}
      >
        {project.description}
      </p>

      {/* Expanded detail */}
      <div
        style={{
          maxHeight: expanded ? "1000px" : "0",
          overflow: "hidden",
          transition: "max-height 0.5s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        <div
          style={{
            marginTop: "20px",
            paddingTop: "20px",
            borderTop: `1px solid ${statusColor}20`,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {paragraphs.map((para, i) => (
              <p
                key={i}
                style={{
                  color: "rgba(234,234,234,0.7)",
                  fontSize: "0.88rem",
                  lineHeight: 1.8,
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
              marginTop: "20px",
              flexWrap: "wrap",
            }}
          >
            {project.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.68rem",
                  padding: "3px 10px",
                  borderRadius: "999px",
                  background: `${statusColor}12`,
                  color: statusColor,
                  border: `1px solid ${statusColor}25`,
                  letterSpacing: "0.05em",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Expand indicator */}
      <div
        style={{
          marginTop: "16px",
          display: "flex",
          alignItems: "center",
          gap: "6px",
          fontFamily: "var(--font-mono)",
          fontSize: "0.72rem",
          color: "var(--text-dim)",
        }}
      >
        <span
          style={{
            display: "inline-block",
            transform: expanded ? "rotate(90deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease",
            color: expanded ? statusColor : undefined,
          }}
        >
          ›
        </span>
        <span style={{ color: expanded ? statusColor : undefined }}>
          {expanded ? "collapse" : "expand"}
        </span>
      </div>
    </div>
  );
}
