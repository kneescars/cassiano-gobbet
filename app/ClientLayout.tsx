"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import BootSequence from "@/components/BootSequence";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [booted, setBooted] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check sessionStorage so boot only runs once per session
    const hasBooted = sessionStorage.getItem("booted");
    if (hasBooted) {
      setBooted(true);
    }
  }, []);

  const handleBootComplete = () => {
    sessionStorage.setItem("booted", "1");
    setBooted(true);
  };

  if (!mounted) return null;

  return (
    <>
      {!booted && <BootSequence onComplete={handleBootComplete} />}
      <div
        style={{
          opacity: booted ? 1 : 0,
          transition: "opacity 0.8s ease",
        }}
      >
        <Navbar />
        <main>{children}</main>
        <footer
          style={{
            borderTop: "1px solid var(--border)",
            padding: "40px 0",
            marginTop: "80px",
          }}
        >
          <div className="container" style={{ textAlign: "center" }}>
            <p
              className="mono"
              style={{ color: "var(--text-muted)", fontSize: "0.75rem" }}
            >
              © {new Date().getFullYear()} Cassiano —{" "}
              <span style={{ color: "var(--accent)" }}>
                thinking in systems
              </span>
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
