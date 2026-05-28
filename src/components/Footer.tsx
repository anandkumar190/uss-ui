const FOOTER_NAV = ["About", "Services", "Process", "Portfolio", "Contact"];

export function Footer() {
  const year = new Date().getFullYear();
  const hostname = encodeURIComponent(
    typeof window !== "undefined" ? window.location.hostname : "",
  );

  return (
    <footer
      data-ocid="footer"
      className="bg-foreground text-card py-16 px-8 md:px-12"
    >
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
        {/* Studio identity */}
        <div className="space-y-3">
          <p className="text-label text-card/40 tracking-[0.2em]">Studio</p>
          <p className="font-display text-xl font-bold tracking-tight">
            URBAN STYLE SPACE
          </p>
          <p className="text-card/60 text-sm leading-relaxed max-w-xs">
            We engineer environments that reflect the identity and ambition of
            our clients.
          </p>
        </div>

        {/* Navigation links */}
        <div className="space-y-3">
          <p className="text-label text-card/40 tracking-[0.2em]">Navigate</p>
          <nav className="flex flex-col gap-2" aria-label="Footer navigation">
            {FOOTER_NAV.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById(item.toLowerCase())
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-card/60 text-sm hover:text-card transition-colors duration-200 w-fit"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        {/* Contact / Location */}
        <div className="space-y-3">
          <p className="text-label text-card/40 tracking-[0.2em]">Contact</p>
          <address className="not-italic text-card/60 text-sm leading-relaxed">
            Kirti Vihar Colony, Loni
            <br />
            Ghaziabad, U.P. — India
          </address>
          <a
            href="mailto:urbanstylespace@gmail.com"
            className="block text-card/60 text-sm hover:text-card transition-colors duration-200 mt-2"
          >
            urbanstylespace@gmail.com
          </a>
          <a
            href="tel:+916202592267"
            className="block text-card/60 text-sm hover:text-card transition-colors duration-200"
          >
            +91 6202592267
          </a>
          <a
            href="https://www.urbanstylespace.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-card/60 text-sm hover:text-card transition-colors duration-200"
          >
            www.urbanstylespace.com
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-screen-2xl mx-auto mt-12 pt-8 border-t border-card/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <p className="text-card/40 text-xs tracking-wide">
          &copy; {year} Urban Style Space. All rights reserved.
        </p>
        <p className="text-card/40 text-xs">
          Built with love using{" "}
          {/* <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-card/70 transition-colors duration-200 underline underline-offset-2"
          >
            caffeine.ai
          </a> */}
        </p>
      </div>
    </footer>
  );
}
