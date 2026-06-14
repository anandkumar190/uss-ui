const PHASES = [
  {
    number: "01",
    title: "CONCEPT DESIGN",
    subtitle: "The Vision Phase",
    steps: [
      "Client Briefing",
      "Site Analysis",
      "Design Workshop",
      "Concept Studies",
      "Budgetary Assistance",
      "Conceptual Presentation",
    ],
  },
  {
    number: "02",
    title: "DESIGN DEVELOPMENT",
    subtitle: "The Technical Phase",
    steps: [
      "Preliminary Layouts",
      "Execution Drawings",
      "Package BOQ Preparation",
      "Tendering & Comparisons",
    ],
  },
  {
    number: "03",
    title: "EXECUTION",
    subtitle: "The Delivery Phase",
    steps: [
      "Work Order Management",
      "Project Kick-off",
      "Stakeholder Reporting",
      "Performance Monitoring",
      "Deviation Management",
      "Final Handover",
    ],
  },
];

interface ProcessSectionProps {
  processList?: Array<{
    phaseNumber: string;
    phaseTitle: string;
    phaseSubtitle: string;
    steps: string[];
  }>;
}

export function ProcessSection({ processList }: ProcessSectionProps) {
  const phases = processList && processList.length > 0 
    ? processList.map(p => ({
        number: p.phaseNumber,
        title: p.phaseTitle,
        subtitle: p.phaseSubtitle,
        steps: p.steps
      }))
    : [
        {
          number: "01",
          title: "CONCEPT DESIGN",
          subtitle: "The Vision Phase",
          steps: [
            "Client Briefing",
            "Site Analysis",
            "Design Workshop",
            "Concept Studies",
            "Budgetary Assistance",
            "Conceptual Presentation",
          ],
        },
        {
          number: "02",
          title: "DESIGN DEVELOPMENT",
          subtitle: "The Technical Phase",
          steps: [
            "Preliminary Layouts",
            "Execution Drawings",
            "Package BOQ Preparation",
            "Tendering & Comparisons",
          ],
        },
        {
          number: "03",
          title: "EXECUTION",
          subtitle: "The Delivery Phase",
          steps: [
            "Work Order Management",
            "Project Kick-off",
            "Stakeholder Reporting",
            "Performance Monitoring",
            "Deviation Management",
            "Final Handover",
          ],
        },
      ];

  return (
    <section
      id="process"
      className="py-24 md:py-32 px-8 md:px-12 bg-muted/40 border-t border-border"
    >
      <div className="max-w-screen-2xl mx-auto">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <p className="text-label text-primary mb-4 tracking-[0.25em]">
            HOW WE WORK
          </p>
          <h2 className="text-display-md leading-tight">
            A Proven Three-Phase Process
          </h2>
        </div>

        {/* Phase cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {phases.map((phase) => (
            <div
              key={phase.number}
              data-ocid={`process-phase-${phase.number}`}
              className="bg-background p-10 space-y-6"
            >
              <p className="font-display text-6xl font-bold text-primary/20 leading-none">
                {phase.number}
              </p>
              <div className="space-y-1">
                <h3 className="font-display font-bold text-lg tracking-tight">
                  {phase.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {phase.subtitle}
                </p>
              </div>
              <ul className="space-y-2">
                {phase.steps.map((step) => (
                  <li key={step} className="flex items-start gap-3">
                    <span
                      className="mt-2 w-1 h-1 bg-primary shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-sm text-muted-foreground leading-relaxed">
                      {step}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
