// app/about/page.tsx — Server Component

const TIMELINE = [
  {
    year: "2024",
    title: "Epistemic Infrastructure Lab",
    description:
      "Founded an interdisciplinary research initiative examining knowledge systems in the AI era, now spanning collaborators across four universities.",
  },
  {
    year: "2023",
    title: "Keynote — Systems & Society Forum",
    description:
      "Delivered the opening address on 'Interface Ideology' to an audience of 2,000+ designers, researchers, and policymakers across Europe.",
  },
  {
    year: "2022",
    title: "Published: Ontological Debt",
    description:
      "Five-part essay series on the hidden costs of premature conceptual modeling — cited in academic and practitioner contexts internationally.",
  },
  {
    year: "2021",
    title: "Research Fellowship",
    description:
      "Appointed to a research fellowship in information science, focusing on the governance implications of algorithmic curation systems.",
  },
  {
    year: "2019",
    title: "Systems Atlas v1.0",
    description:
      "Launched the first version of the interactive global systems visualization, adopted in twelve university curricula.",
  },
  {
    year: "2017",
    title: "Early work in media ecology",
    description:
      "Began the research program that would eventually become the Media Topology project — mapping structural relationships between media forms across history.",
  },
];

const INTERESTS = [
  "Information Architecture",
  "Media Ecology",
  "Systems Theory",
  "Philosophy of Information",
  "Technology Governance",
  "Knowledge Infrastructure",
  "Complexity Science",
  "Critical Design Theory",
];

export default function AboutPage() {
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
              About
            </span>
          </div>

          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 700,
              lineHeight: 1.1,
              marginBottom: "32px",
              letterSpacing: "-0.02em",
            }}
          >
            A mind trained on{" "}
            <span
              style={{
                background: "linear-gradient(135deg, var(--accent), #818CF8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              systems.
            </span>
          </h1>

          <div style={{ maxWidth: "640px" }}>
            <p
              style={{
                fontSize: "1.1rem",
                color: "var(--text)",
                lineHeight: 1.8,
                marginBottom: "20px",
              }}
            >
              I'm Cassiano — a researcher, writer, and strategist working at
              the intersection of information systems, media ecology, and
              technology culture. I'm interested in the structures that shape
              what we can know, say, and do.
            </p>
            <p
              style={{
                fontSize: "1rem",
                color: "var(--text-muted)",
                lineHeight: 1.8,
                marginBottom: "20px",
              }}
            >
              My work moves between theory and practice — between academic
              research and strategic consulting, between writing essays and
              designing systems. The thread connecting these is a conviction
              that understanding the deep structure of problems is prerequisite
              to solving them.
            </p>
            <p
              style={{
                fontSize: "1rem",
                color: "var(--text-muted)",
                lineHeight: 1.8,
              }}
            >
              I'm based in Europe, but the problems I work on have no obvious
              jurisdiction. I speak at conferences, consult with organizations
              navigating technological transformation, collaborate with
              researchers across disciplines, and write for readers who prefer
              complexity to comfort.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 24px" }}>
        <div className="divider" />
      </div>

      {/* What I do */}
      <section
        style={{
          padding: "80px 24px",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <div className="animate-fadeUp">
          <div className="accent-line" />
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 600,
              marginBottom: "40px",
            }}
          >
            What I do
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "20px",
          }}
        >
          {[
            {
              title: "Research",
              icon: "◈",
              color: "#38BDF8",
              description:
                "Original inquiry into the structure of information, the dynamics of media systems, and the governance implications of technology.",
            },
            {
              title: "Writing",
              icon: "◇",
              color: "#A78BFA",
              description:
                "Essays, papers, and longer-form work aimed at readers who want rigorous thinking without unnecessary opacity.",
            },
            {
              title: "Speaking",
              icon: "◎",
              color: "#4ADE80",
              description:
                "Keynotes and panel contributions for conferences, organizations, and academic institutions worldwide.",
            },
            {
              title: "Consulting",
              icon: "◉",
              color: "#FBBF24",
              description:
                "Strategic advice for organizations navigating information complexity, technological transformation, and knowledge management.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="card"
              style={{ padding: "28px" }}
            >
              <div
                style={{
                  fontSize: "1.4rem",
                  color: item.color,
                  marginBottom: "14px",
                }}
              >
                {item.icon}
              </div>
              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: 600,
                  marginBottom: "10px",
                  color: "var(--text)",
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  color: "var(--text-muted)",
                  fontSize: "0.88rem",
                  lineHeight: 1.7,
                }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section
        style={{
          padding: "80px 24px",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <div className="accent-line" />
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: 600,
            marginBottom: "48px",
          }}
        >
          Selected milestones
        </h2>

        <div style={{ position: "relative" }}>
          {/* Vertical line */}
          <div
            style={{
              position: "absolute",
              left: "72px",
              top: 0,
              bottom: 0,
              width: "1px",
              background:
                "linear-gradient(to bottom, var(--border), transparent)",
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
            {TIMELINE.map((item, i) => (
              <div
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: "80px 1fr",
                  gap: "24px",
                  alignItems: "start",
                  position: "relative",
                }}
              >
                {/* Year */}
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.72rem",
                    color: "var(--accent)",
                    letterSpacing: "0.05em",
                    paddingTop: "2px",
                    textAlign: "right",
                    paddingRight: "8px",
                  }}
                >
                  {item.year}
                </span>

                {/* Content */}
                <div>
                  {/* Node dot */}
                  <div
                    style={{
                      position: "absolute",
                      left: "68px",
                      top: "7px",
                      width: "9px",
                      height: "9px",
                      borderRadius: "50%",
                      background: "var(--bg)",
                      border: "1px solid var(--accent)",
                      boxShadow: "0 0 6px rgba(56,189,248,0.3)",
                    }}
                  />

                  <h3
                    style={{
                      fontSize: "1rem",
                      fontWeight: 600,
                      marginBottom: "6px",
                      color: "var(--text)",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      color: "var(--text-muted)",
                      fontSize: "0.88rem",
                      lineHeight: 1.7,
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interests */}
      <section
        style={{
          padding: "80px 24px 120px",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <div className="accent-line" />
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: 600,
            marginBottom: "32px",
          }}
        >
          Areas of interest
        </h2>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {INTERESTS.map((interest, i) => (
            <span
              key={i}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.8rem",
                padding: "8px 16px",
                borderRadius: "var(--radius)",
                background: "var(--surface)",
                border: "1px solid var(--border)",
                color: "var(--text-muted)",
                letterSpacing: "0.03em",
                transition: "all 0.2s ease",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = "rgba(56,189,248,0.3)";
                el.style.color = "var(--accent)";
                el.style.background = "var(--accent-dim)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = "var(--border)";
                el.style.color = "var(--text-muted)";
                el.style.background = "var(--surface)";
              }}
            >
              {interest}
            </span>
          ))}
        </div>
      </section>
    </>
  );
}
