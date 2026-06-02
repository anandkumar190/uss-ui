import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const STATS = [
  { value: "7+", label: "Years", sub: "Of Experience" },
  { value: "10+", label: "Brand Clients", sub: "Across India" },
  { value: "50+", label: "Projects", sub: "Delivered" },
];

const EXPERTISE = ["AutoCAD 2D & 3D", "3Ds Max", "BOQ Preparation", "Project Scheduling"];

const SLIDES = [
  {
    src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80",
    alt: "Corporate office interior",
    tag: "Corporate · Banking",
  },
  {
    src: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?w=800&q=80",
    alt: "Retail store interior design",
    tag: "Retail · Commercial",
  },
  {
    src: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&q=80",
    alt: "Modern office space",
    tag: "Office · Workspace",
  },
  {
    src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80",
    alt: "Luxury interior execution",
    tag: "Luxury · Corporate",
  },
];

export function AboutSection() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const go = (dir: 1 | -1) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent((prev) => (prev + dir + SLIDES.length) % SLIDES.length);
      setAnimating(false);
    }, 300);
  };

  return (
    <section
      id="about"
      className="bg-muted/40 py-24 md:py-36 px-8 md:px-12 border-t border-border"
    >
      <div className="max-w-screen-2xl mx-auto">

        {/* Section intro */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-primary opacity-60" />
              <p className="text-label text-primary tracking-[0.25em]">ABOUT US</p>
            </div>
            <h2 className="text-display-md leading-tight">
              Built on Experience.
              <br />
              <span className="italic text-primary/80 font-light">Driven by Craft.</span>
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs leading-relaxed md:text-right">
            A premier design & execution studio specialising in commercial and corporate environments.
          </p>
        </div>

        {/* Two-column editorial layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-20">

          {/* Left: narrative + stats */}
          <div className="space-y-12">
            <div className="space-y-6">
              <p className="text-body-base text-muted-foreground leading-relaxed max-w-prose">
                Urban Style Space is a premier interior design and execution
                firm specializing in high-impact commercial and corporate
                environments. Led by founder Rajeev Kumar Ranjan, with over 7
                years of specialized experience in banking infrastructure,
                retail, and large-scale corporate rollouts.
              </p>

              <div className="border-l-2 border-primary/40 pl-5 space-y-2">
                <p className="text-xs text-primary/60 tracking-[0.18em] uppercase font-medium">
                  Notable Clients
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Axis Bank · Yes Bank · Bajaj Finserv · Sahayog Bank · Crocs ·
                  Red Chief · Samsonite · Timex · Tupperware · Samvardhana
                  Motherson · Baker By Chance · Envision
                </p>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-3 gap-px bg-border">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="group bg-background p-6 text-center relative overflow-hidden transition-colors hover:bg-primary/5"
                >
                  <span className="absolute top-0 left-0 right-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  <p className="font-display text-4xl font-light text-primary">
                    {stat.value}
                  </p>
                  <p className="text-label text-foreground mt-2 font-semibold tracking-wide uppercase text-xs">
                    {stat.label}
                  </p>
                  {stat.sub && (
                    <p className="text-xs text-muted-foreground mt-0.5">{stat.sub}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right: image slider + founder callout */}
          <div className="flex flex-col gap-8">

            {/* ── IMAGE SLIDER ── */}
            <div className="relative aspect-[4/3] overflow-hidden bg-secondary group">

              {/* Slides */}
              {SLIDES.map((slide, i) => (
                <img
                  key={slide.src}
                  src={slide.src}
                  alt={slide.alt}
                  loading="lazy"
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                    i === current ? "opacity-100" : "opacity-0"
                  } ${animating && i === current ? "scale-105" : "scale-100"} transition-all`}
                />
              ))}

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              {/* Tag */}
              <div className="absolute bottom-4 left-5">
                <p className="text-xs text-white/70 tracking-[0.15em] uppercase">
                  {SLIDES[current].tag}
                </p>
              </div>

              {/* Dot indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
                {SLIDES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-0.5 rounded-full transition-all duration-300 ${
                      i === current ? "w-6 bg-white" : "w-2 bg-white/40"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>

              {/* Slide counter */}
              <div className="absolute top-4 right-5">
                <p className="text-xs text-white/50 font-mono tabular-nums">
                  {String(current + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
                </p>
              </div>

              {/* Arrow buttons — visible on hover */}
              <button
                onClick={() => go(-1)}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center bg-black/30 hover:bg-black/60 text-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-200 backdrop-blur-sm"
                aria-label="Previous slide"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => go(1)}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center bg-black/30 hover:bg-black/60 text-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-200 backdrop-blur-sm"
                aria-label="Next slide"
              >
                <ChevronRight size={18} />
              </button>
            </div>

            {/* Founder callout */}
            <div className="bg-background border border-border p-8 space-y-5">
              <p className="text-label text-primary tracking-[0.2em]">FOUNDER</p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-semibold text-primary">RR</span>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold">Rajeev Kumar Ranjan</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">Founder & Principal Designer</p>
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">
                Our foundation may be new, but it's backed by 7 years of deep
                experience. Expert in AutoCAD (2D &amp; 3D), 3Ds Max
                visualization, BOQ preparation, project scheduling, and team
                management.
              </p>

              <div className="flex flex-wrap gap-2 pt-1">
                {EXPERTISE.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-3 py-1 border border-border rounded-full text-muted-foreground hover:border-primary/40 hover:text-primary transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}