"use client";

import PortfolioItem from "@/components/PortfolioItem";
import { projects } from "@/data/portfolio";
import { useState } from "react";

const ALL_CATEGORIES = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section
        style={{
          padding: "140px 24px 80px",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <div className="animate-fadeUp">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "32px",
            }}
          >
            <div className="accent-line" style={{ marginBottom: 0 }} />
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                color: "var(--accent)",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              Work
            </span>
          </div>

          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 700,
              lineHeight: 1.1,
              marginBottom: "20px",
              letterSpacing: "-0.02em",
            }}
          >
            Selected{" "}
            <span
              style={{
                background: "linear-gradient(135deg, var(--accent), #818CF8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              projects.
            </span>
          </h1>
          <p
            style={{
              fontSize: "1rem",
              color: "var(--text-muted)",
              lineHeight: 1.7,
              maxWidth: "500px",
            }}
          >
            Research, essays, talks, and initiatives. Click any project to read
            more.
          </p>
        </div>
      </section>

      {/* Filter tabs */}
      <div
        style={{
          padding: "0 24px",
          maxWidth: "900px",
          margin: "0 auto",
          marginBottom: "48px",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "8px",
            flexWrap: "wrap",
          }}
        >
          {ALL_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                padding: "7px 16px",
                borderRadius: "var(--radius)",
                border: `1px solid ${activeCategory === cat ? "rgba(56,189,248,0.3)" : "var(--border)"}`,
                background:
                  activeCategory === cat ? "var(--accent-dim)" : "var(--surface)",
                color:
                  activeCategory === cat ? "var(--accent)" : "var(--text-muted)",
                cursor: "pointer",
                letterSpacing: "0.05em",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                if (activeCategory !== cat) {
                  const el = e.currentTarget;
                  el.style.borderColor = "rgba(56,189,248,0.2)";
                  el.style.color = "var(--text)";
                }
              }}
              onMouseLeave={(e) => {
                if (activeCategory !== cat) {
                  const el = e.currentTarget;
                  el.style.borderColor = "var(--border)";
                  el.style.color = "var(--text-muted)";
                }
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Project grid */}
      <section
        style={{
          padding: "0 24px 120px",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))",
            gap: "16px",
          }}
        >
          {filtered.map((project) => (
            <PortfolioItem key={project.id} project={project} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div
            style={{
              textAlign: "center",
              padding: "80px 0",
              color: "var(--text-muted)",
              fontFamily: "var(--font-mono)",
              fontSize: "0.85rem",
            }}
          >
            no projects in this category yet.
          </div>
        )}

        {/* Stats bar */}
        <div
          style={{
            marginTop: "64px",
            padding: "28px",
            borderRadius: "var(--radius-lg)",
            border: "1px solid var(--border)",
            background: "var(--bg-2)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
            gap: "24px",
          }}
        >
          {[
            { label: "Projects", value: `${projects.length}+` },
            { label: "Years active", value: "20+" },
//            { label: "Talks delivered", value: "30+" },
 //         { label: "Countries", value: "12+" },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: "center" }}>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "1.8rem",
                  fontWeight: 500,
                  color: "var(--accent)",
                  marginBottom: "4px",
                  letterSpacing: "-0.02em",
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.7rem",
                  color: "var(--text-muted)",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
