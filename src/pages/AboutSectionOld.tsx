const STATS = [
  { value: "7+", label: "Years", sub: "Of Experience" },
  { value: "10+", label: "Brand Clients", sub: "" },
  { value: "50+", label: "Projects", sub: "Delivered" },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="bg-muted/40 py-24 md:py-36 px-8 md:px-12 border-t border-border"
    >
      <div className="max-w-screen-2xl mx-auto">
        {/* Section intro */}
        <div className="mb-20 max-w-xl">
          <p className="text-label text-primary mb-4 tracking-[0.25em]">
            ABOUT US
          </p>
          <h2 className="text-display-md leading-tight">
            Built on Experience.
            <br />
            Driven by Craft.
          </h2>
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
              <p className="text-body-base text-muted-foreground leading-relaxed max-w-prose">
                Our clients include Axis Bank, Yes Bank, Bajaj Finserv, Sahayog
                Bank, Crocs, Red Chief, Samsonite, Timex, Tupperware,
                Samvardhana Motherson, Baker By Chance, and Envision.
              </p>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-3 gap-px bg-border">
              {STATS.map((stat) => (
                <div key={stat.label} className="bg-background p-6 text-center">
                  <p className="font-display text-3xl font-bold text-primary">
                    {stat.value}
                  </p>
                  <p className="text-label text-foreground mt-1 font-semibold">
                    {stat.label}
                  </p>
                  {stat.sub && (
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {stat.sub}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right: image + founder callout */}
          <div className="flex flex-col gap-10">
            <div className="aspect-[4/3] overflow-hidden bg-secondary">
              <img
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80"
                alt="Urban Style Space — interior design studio execution"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Founder callout */}
            <div className="bg-background border border-border p-8 space-y-4">
              <p className="text-label text-primary tracking-[0.2em]">
                FOUNDER
              </p>
              <h3 className="font-display text-xl font-bold">
                Rajeev Kumar Ranjan
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Our foundation may be new, but it's backed by 7 years of deep
                experience. Expert in AutoCAD (2D &amp; 3D), 3Ds Max
                visualization, BOQ preparation, project scheduling, and team
                management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
