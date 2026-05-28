import { useScrolledPast } from "@/hooks/useScrollPosition";
import { useEffect, useRef, useState } from "react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

function scrollTo(id: string) {
  const el = document.getElementById(id.replace("#", ""));
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export function Navbar() {
  const scrolled = useScrolledPast(60);
  const [menuOpen, setMenuOpen] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        data-ocid="navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-card/95 backdrop-blur-sm border-b border-border"
            : "bg-transparent"
        }`}
      >
        <nav className="flex items-center justify-between px-8 md:px-12 h-16 md:h-20 max-w-screen-2xl mx-auto">
          {/* Logo */}
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={`text-label tracking-[0.25em] transition-colors duration-300 ${
              scrolled ? "text-foreground" : "text-card"
            }`}
          >
            URBAN STYLE SPACE
          </button>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  data-ocid={`nav-${link.label.toLowerCase()}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(link.href);
                  }}
                  className={`text-label tracking-widest relative group transition-colors duration-300 ${
                    scrolled
                      ? "text-foreground hover:text-primary"
                      : "text-card/80 hover:text-card"
                  }`}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile menu trigger */}
          <button
            type="button"
            data-ocid="nav-menu-trigger"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden flex flex-col gap-1.5 p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <span
              className={`block h-px w-6 transition-all duration-300 ${
                scrolled ? "bg-foreground" : "bg-card"
              } ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block h-px w-4 transition-all duration-300 ${
                scrolled ? "bg-foreground" : "bg-card"
              } ${menuOpen ? "opacity-0 w-0" : ""}`}
            />
            <span
              className={`block h-px w-6 transition-all duration-300 ${
                scrolled ? "bg-foreground" : "bg-card"
              } ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </nav>
      </header>

      {/* Mobile Overlay */}
      <div
        ref={overlayRef}
        data-ocid="nav-overlay"
        aria-hidden={!menuOpen}
        className={`fixed inset-0 z-40 bg-foreground transition-opacity duration-500 md:hidden ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-10">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              data-ocid={`overlay-nav-${link.label.toLowerCase()}`}
              onClick={(e) => {
                e.preventDefault();
                setMenuOpen(false);
                setTimeout(() => scrollTo(link.href), 300);
              }}
              className="text-card font-display text-4xl font-bold tracking-tight hover:text-primary transition-colors duration-200"
              style={{ transitionDelay: menuOpen ? `${i * 80}ms` : "0ms" }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
