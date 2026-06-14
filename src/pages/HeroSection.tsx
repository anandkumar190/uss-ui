import { API_BASE_URL } from "@/config";

export function HeroSection({ heroContent }: { heroContent?: any }) {
  const subtitle = heroContent?.subtitle || "INTERIOR DESIGN & EXECUTION";
  const title = heroContent?.title || "We Engineer\nEnvironments.";
  const description = heroContent?.description || "We engineer environments that reflect the identity and ambition of our clients.";
  const mediaUrl = heroContent?.mediaUrl || "/assets/generated/hero-residence.dim_1920x1080.jpg";
  const ctaText = heroContent?.ctaText || "EXPLORE OUR WORK";

  const imageUrl = mediaUrl.startsWith("/assets/") 
    ? mediaUrl 
    : (mediaUrl.startsWith("http") ? mediaUrl : `${API_BASE_URL}${mediaUrl}`);

  const renderTitle = () => {
    return title.split("\n").map((line: string, index: number) => {
      const parts = line.split("Environments.");
      if (parts.length > 1) {
        return (
          <span key={index}>
            {index > 0 && <br />}
            {parts[0]}
            <span className="text-primary">Environments.</span>
            {parts[1]}
          </span>
        );
      }
      return (
        <span key={index}>
          {index > 0 && <br />}
          {line}
        </span>
      );
    });
  };

  return (
    <section
      id="hero"
      className="relative  h-svh h-screen min-h-[600px] flex flex-col overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${imageUrl}')`,
        }}
        aria-hidden="true"
      />
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-foreground/55" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-end  pb-32 pb-20 px-8 md:px-12 max-w-screen-2xl mx-auto w-full h-full">
        <div className="max-w-3xl space-y-6">
          <p
            className="text-label text-card/60 text-black animate-fade-up tracking-[0.3em]"
            style={{ animationDelay: "200ms" }}
          >
            {subtitle}
          </p>
          <h1
            className="text-display-xl text-card animate-fade-up"
            style={{ animationDelay: "350ms" }}
          >
            {renderTitle()}
          </h1>
          <p
            className="text-body-lg  text-white text-card/70 max-w-lg animate-fade-up"
            style={{ animationDelay: "500ms" }}
          >
            {description}
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
              {ctaText}
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
