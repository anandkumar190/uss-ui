export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative h-screen min-h-[600px] flex flex-col overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-residence.dim_1920x1080.jpg')",
        }}
        aria-hidden="true"
      />
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-foreground/55" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-end pb-20 px-8 md:px-12 max-w-screen-2xl mx-auto w-full h-full">
        <div className="max-w-3xl space-y-6">
          <p
            className="text-label text-card/60 text-black animate-fade-up tracking-[0.3em]"
            style={{ animationDelay: "200ms" }}
          >
            INTERIOR DESIGN &amp; EXECUTION
          </p>
          <h1
            className="text-display-xl text-card animate-fade-up"
            style={{ animationDelay: "350ms" }}
          >
            We Engineer
            <br />
            <span className="text-primary">Environments.</span>
          </h1>
          <p
            className="text-body-lg  text-white text-card/70 max-w-lg animate-fade-up"
            style={{ animationDelay: "500ms" }}
          >
            We engineer environments that reflect the identity and ambition of
            our clients.
          </p>
          <div
            className="pt-4 animate-fade-up"
            style={{ animationDelay: "650ms" }}
          >
            <button
              type="button"
              data-ocid="hero-cta"
              onClick={() =>
                document
                  .getElementById("portfolio")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-label text-foreground bg-card px-8 py-4 hover:bg-primary hover:text-primary-foreground transition-all duration-300 tracking-[0.2em]"
            >
              EXPLORE OUR WORK
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in"
        style={{ animationDelay: "1s" }}
      >
        <div className="flex flex-col items-center gap-2">
          <div className="w-px h-12 bg-card/30 animate-[pulse_2s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  );
}
