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

interface ServiceItem {
  name: string;
  description?: string;
}

interface ServicesSectionProps {
  servicesList?: Array<ServiceItem>;
}

export function ServicesSection({ servicesList }: ServicesSectionProps) {
  const services = servicesList && servicesList.length > 0 
    ? servicesList
    : [
        { name: "Site Survey", description: "Detailed measurement and physical inspection of the project site." },
        { name: "Space Planning", description: "Optimizing layouts and floor plans for maximum workflow efficiency." },
        { name: "Civil & Interior Work", description: "Precision execution of partitions, masonry, paneling, and wall finishes." },
        { name: "Electrical Work", description: "Certified routing of cabling, custom lighting, server power feeds, and switches." },
        { name: "HVAC Work", description: "Installation of central air conditioning, ducting, and ventilation control." },
        { name: "Ceiling Work", description: "Designer grid ceilings, gypsum board designs, and acoustic board installations." },
        { name: "Fire Alarm Systems", description: "Deployment of smoke detectors, sprinkler triggers, and fire panel compliance." },
        { name: "Networking & Server Racks", description: "Structured CAT6 routing, data drops, patch panels, and server cabinets." },
        { name: "UPS & DG", description: "Installation of backup power battery banks and diesel generator backup triggers." },
        { name: "Modular / Customised Furniture", description: "Bespoke workstations, executive desks, conference tables, and storages." },
      ];

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
          {services.map((service, i) => (
            <div
              key={service.name}
              data-ocid={`service-card-${i}`}
              className="bg-background p-8 group hover:bg-muted/30 transition-all duration-300 min-h-[160px] flex flex-col justify-between"
            >
              <div>
                <p className="text-label text-primary mb-2 tracking-[0.2em]">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="font-display font-semibold text-lg leading-snug transition-transform duration-300 group-hover:-translate-y-1">
                  {service.name}
                </h3>
              </div>
              
              {service.description && (
                <p className="text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out max-h-0 overflow-hidden group-hover:max-h-20 leading-relaxed mt-2">
                  {service.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
