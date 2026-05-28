const SERVICES = [
  "Site Survey",
  "Space Planning",
  "Civil & Interior Work",
  "Electrical Work",
  "HVAC Work",
  "Ceiling Work",
  "Fire Alarm Systems",
  "Networking & Server Racks",
  "UPS & DG",
  "Modular / Customised Furniture",
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="py-24 md:py-32 px-8 md:px-12 bg-background border-t border-border"
    >
      <div className="max-w-screen-2xl mx-auto">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <p className="text-label text-primary mb-4 tracking-[0.25em]">
            WHAT WE DO
          </p>
          <h2 className="text-display-md leading-tight mb-4">
            End-to-End Interior Execution
          </h2>
          <p className="text-body-base text-muted-foreground">
            From concept to handover — we handle every layer of your space.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {SERVICES.map((service, i) => (
            <div
              key={service}
              data-ocid={`service-card-${i}`}
              className="bg-background p-8 group hover:bg-muted/30 transition-colors duration-300"
            >
              <p className="text-label text-primary mb-3 tracking-[0.2em]">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="font-display font-semibold text-lg leading-snug">
                {service}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
