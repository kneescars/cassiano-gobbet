"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Work" },
  { href: "https://zeitgeist.digital", label: "Zeitgeist", external: true },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: "0 24px",
        height: "64px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: scrolled
          ? "rgba(10,10,10,0.85)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled
          ? "1px solid var(--border)"
          : "1px solid transparent",
        transition: "all 0.4s cubic-bezier(0.4,0,0.2,1)",
      }}
    >
      {/* Logo */}
      <Link href="/">
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.85rem",
            letterSpacing: "0.1em",
            color: "var(--text)",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) =>
            ((e.target as HTMLElement).style.color = "var(--accent)")
          }
          onMouseLeave={(e) =>
            ((e.target as HTMLElement).style.color = "var(--text)")
          }
        >
          C<span style={{ color: "var(--accent)" }}>.</span>
        </span>
      </Link>

      {/* Desktop Links */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
        className="desktop-nav"
      >
        {NAV_LINKS.map((link) => {
          const isActive = !link.external && pathname === link.href;
          const linkContent = (
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.78rem",
                letterSpacing: "0.05em",
                padding: "6px 14px",
                borderRadius: "4px",
                color: isActive ? "var(--accent)" : "var(--text-muted)",
                background: isActive ? "var(--accent-dim)" : "transparent",
                border: isActive
                  ? "1px solid rgba(56,189,248,0.2)"
                  : "1px solid transparent",
                display: "inline-block",
                transition: "all 0.2s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                if (!isActive) {
                  el.style.color = "var(--text)";
                  el.style.background = "var(--surface)";
                }
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                if (!isActive) {
                  el.style.color = "var(--text-muted)";
                  el.style.background = "transparent";
                }
              }}
            >
              {link.label}
            </span>
          );

          return link.external ? (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {linkContent}
            </a>
          ) : (
            <Link key={link.href} href={link.href}>
              {linkContent}
            </Link>
          );
        })}

        {/* CTA */}
        <a
          href="mailto:cassiano@zeitgeist.digital"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.75rem",
            padding: "6px 14px",
            borderRadius: "4px",
            color: "var(--accent)",
            border: "1px solid rgba(56,189,248,0.3)",
            background: "var(--accent-dim)",
            marginLeft: "8px",
            display: "inline-block",
            transition: "all 0.2s ease",
            letterSpacing: "0.05em",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.background = "var(--accent)";
            el.style.color = "var(--bg)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.background = "var(--accent-dim)";
            el.style.color = "var(--accent)";
          }}
        >
          get in touch
        </a>
      </div>

      {/* Mobile menu toggle */}
      <button
        className="mobile-menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "8px",
          display: "none",
          flexDirection: "column",
          gap: "5px",
        }}
        aria-label="Toggle menu"
      >
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            style={{
              display: "block",
              width: "20px",
              height: "1px",
              background: "var(--text)",
              transition: "all 0.3s ease",
              transform:
                menuOpen && i === 0
                  ? "rotate(45deg) translate(4px, 4px)"
                  : menuOpen && i === 2
                  ? "rotate(-45deg) translate(4px, -4px)"
                  : menuOpen && i === 1
                  ? "scaleX(0)"
                  : "none",
            }}
          />
        ))}
      </button>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          style={{
            position: "absolute",
            top: "64px",
            left: 0,
            right: 0,
            background: "rgba(10,10,10,0.97)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid var(--border)",
            padding: "20px 24px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          {NAV_LINKS.map((link) => {
            const label = (
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.9rem",
                  color:
                    !link.external && pathname === link.href
                      ? "var(--accent)"
                      : "var(--text-muted)",
                  display: "block",
                  padding: "8px 0",
                }}
              >
                {link.label}
              </span>
            );

            return link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            );
          })}
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}