import type { Project, ProjectCategory } from "@/types";
import { useState, useEffect } from "react";
import { API_BASE_URL } from "@/config";

const PROJECTS: Project[] = [
  {
    id: "baker-by-chance",
    title: "Baker By Chance",
    category: "Industrial",
    year: "2024",
    location: "Commercial",
    description:
      "Complete interior fit-out: tile installation, painting, pantry counter fabrication, ceiling and electrical works, ACP façade cladding, furniture design, branding integration.",
    imageUrl:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
  },
  {
    id: "red-chief-akbarpur",
    title: "Red Chief, Akbarpur",
    category: "Industrial",
    year: "2024",
    location: "U.P.",
    description:
      "Comprehensive interior fit-out: civil works, specialized painting, final installations.",
    imageUrl:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
  },
  {
    id: "bella-steps",
    title: "Bella Steps",
    category: "Industrial",
    year: "2023",
    location: "Industrial",
    description:
      "Full design and execution, project incharge from inception to completion.",
    imageUrl:
      "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=800&q=80",
  },
  {
    id: "axis-bank",
    title: "Axis Bank",
    category: "Commercial",
    year: "2023",
    location: "Commercial Infrastructure",
    description:
      "High-impact Commercial infrastructure, full project lifecycle: design development, BOQ optimization, on-site leadership.",
    imageUrl:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
  },
  {
    id: "yes-bank",
    title: "Yes Bank — GMS Road, Dehradun",
    category: "Commercial",
    year: "2023",
    location: "Dehradun",
    description:
      "Technical oversight and site supervision, civil and partitions to high-end finishes.",
    imageUrl:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
  },
  {
    id: "bajaj-finserv",
    title: "Bajaj Finserv, Moonak",
    category: "Commercial",
    year: "2022",
    location: "Punjab",
    description: "End-to-end execution and on-site management.",
    imageUrl:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
  },
  {
    id: "crocs-outlets",
    title: "Crocs — Multi-City Rollout",
    category: "Industrial",
    year: "2023",
    location: "Ranchi, Patna, Delhi, Kochi",
    description:
      "Multiple brand outlets across four cities — design and execution lifecycle, civil and interior fit-out.",
    imageUrl:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
  },
  {
    id: "tupperware-kiosk",
    title: "Tupperware Kiosk",
    category: "Industrial",
    year: "2022",
    location: "Industrial",
    description: "Complete kiosk fit-out, designer and project head.",
    imageUrl:
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80",
  },
  {
    id: "timex-lulu-mall",
    title: "Just Watches (Timex) — Lulu Mall Kochi",
    category: "Industrial",
    year: "2022",
    location: "Kochi",
    description: "Complete fit-out, designer and project head.",
    imageUrl:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
  },
  {
    id: "mix-clients",
    title: "Mix Clients — Residential & Industrial",
    category: "Residential",
    year: "2024",
    location: "Multiple Locations",
    description:
      "Design & project coordination across multiple brand environments including American Tourister, Samvardhana Motherson, and more.",
    imageUrl:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  },
];

const CATEGORIES: ("All" | ProjectCategory)[] = [
  "All",
  "Commercial",
  "Industrial",
  "Residential",
];

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Get gallery list, fallback to single cover image
  const gallery = project.imageUrls && project.imageUrls.length > 0
    ? project.imageUrls
    : [project.imageUrl];

  useEffect(() => {
    if (!isHovered || gallery.length <= 1) return;

    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % gallery.length);
    }, 1000); // Slide changes every 2 seconds on hover

    return () => clearInterval(interval);
  }, [isHovered, gallery.length]);

  const currentImg = gallery[activeIdx] || "";
  const imageUrl = currentImg.startsWith("/assets/") || currentImg.startsWith("http")
    ? currentImg
    : currentImg
      ? `${API_BASE_URL}${currentImg}`
      : "";

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveIdx((prev) => (prev + 1) % gallery.length);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveIdx((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  return (
    <article
      data-ocid={`project-card-${project.id || project.title}`}
      className="group animate-fade-up"
      style={{ animationDelay: `${index * 80}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setActiveIdx(0); // Reset to first image when hover ends
      }}
    >
      <div className="relative overflow-hidden aspect-[4/3] bg-muted group/image">
        <img
          src={imageUrl}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-75 group-hover:scale-102 select-none"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-all duration-500" />

        {gallery.length > 1 && (
          <>
            {/* Navigation Arrows */}
            <button
              onClick={handlePrev}
              type="button"
              className="absolute left-2.5 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-1.5 rounded-full transition duration-150 z-10 opacity-0 group-hover/image:opacity-100 cursor-pointer select-none"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              type="button"
              className="absolute right-2.5 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-1.5 rounded-full transition duration-150 z-10 opacity-0 group-hover/image:opacity-100 cursor-pointer select-none"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dots indicators */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10 bg-black/35 backdrop-blur-xs px-2.5 py-1 rounded-full">
              {gallery.map((_, idx) => (
                <span
                  key={idx}
                  className={`h-1.5 w-1.5 rounded-full transition-all duration-150 ${
                    activeIdx === idx ? "bg-white scale-110" : "bg-white/45"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
      <div className="pt-4 pb-6 space-y-1">
        <div className="flex items-center justify-between">
          <h3 className="font-display font-semibold text-lg tracking-tight min-w-0 truncate pr-4">
            {project.title}
          </h3>
          <span className="text-label text-muted-foreground shrink-0">
            {project.year}
          </span>
        </div>
        <p className="text-label text-primary tracking-[0.15em]">
          {project.category}
        </p>
        <p className="text-sm text-muted-foreground">{project.location}</p>
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 pt-1">
          {project.description}
        </p>
      </div>
    </article>
  );
}

export function PortfolioSection() {
  const [projects, setProjects] = useState<Project[]>(PROJECTS);
  const [activeCategory, setActiveCategory] = useState<"All" | ProjectCategory>(
    "All",
  );

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch(`${API_BASE_URL}/api/public/projects`);
        const result = await response.json();
        if (result.success && result.data && result.data.length > 0) {
          setProjects(result.data);
        } else {
          setProjects(PROJECTS);
        }
      } catch (err) {
        console.error("Failed to fetch projects:", err);
        setProjects(PROJECTS);
      }
    }
    fetchProjects();
  }, []);

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section
      id="portfolio"
      className="py-24 md:py-32 px-8 md:px-12 bg-background border-t border-border"
    >
      <div className="max-w-screen-2xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <p className="text-label text-primary mb-3 tracking-[0.25em]">
              OUR WORK
            </p>
            <h2 className="text-display-md">Projects That Define Spaces</h2>
          </div>

          {/* Filter tabs */}
          <nav
            data-ocid="portfolio-filters"
            className="flex flex-wrap gap-1"
            aria-label="Filter projects by category"
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                data-ocid={`filter-${cat.toLowerCase()}`}
                onClick={() => setActiveCategory(cat)}
                className={`text-label px-4 py-2 transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-foreground text-card"
                    : "text-muted-foreground hover:text-foreground border border-border hover:border-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </nav>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id || project.title} project={project} index={i} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div
            data-ocid="portfolio-empty"
            className="py-24 text-center text-muted-foreground"
          >
            <p className="text-label">No projects in this category yet.</p>
          </div>
        )}
      </div>
    </section>
  );
}
