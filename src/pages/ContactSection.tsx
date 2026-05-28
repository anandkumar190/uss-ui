import type { ContactForm } from "@/types";
import { useState } from "react";
import { toast } from "sonner";

const EMPTY_FORM: ContactForm = { name: "", email: "", message: "" };

export function ContactSection() {
  const [form, setForm] = useState<ContactForm>(EMPTY_FORM);
  const [errors, setErrors] = useState<Partial<ContactForm>>({});
  const [submitting, setSubmitting] = useState(false);

  function validate(): boolean {
    const next: Partial<ContactForm> = {};
    if (!form.name.trim()) next.name = "Name is required.";
    if (!form.email.trim()) {
      next.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      next.email = "Enter a valid email address.";
    }
    if (!form.message.trim()) next.message = "Message is required.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    try {
      await new Promise((r) => setTimeout(r, 800));
      toast.success("Message sent. We'll be in touch shortly.");
      setForm(EMPTY_FORM);
      setErrors({});
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  function handleBlur(field: keyof ContactForm) {
    if (!form[field].trim()) {
      setErrors((prev) => ({
        ...prev,
        [field]: `${field.charAt(0).toUpperCase() + field.slice(1)} is required.`,
      }));
    } else {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  }

  return (
    <section
      id="contact"
      className="py-24 md:py-36 px-8 md:px-12 bg-background border-t border-border"
    >
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-16">
        {/* Left: copy */}
        <div className="space-y-8">
          <div>
            <p className="text-label text-primary mb-4 tracking-[0.25em]">
              GET IN TOUCH
            </p>
            <h2 className="text-display-md leading-tight max-w-sm">
              Let's Build Something Together
            </h2>
          </div>
          <p className="text-body-base text-muted-foreground max-w-sm leading-relaxed">
            Whether you have a clear brief or a vague vision, we'd love to hear
            from you. Your satisfaction is our priority, fueled by fair pricing
            and punctual delivery.
          </p>

          <div className="space-y-6 pt-4">
            <div>
              <p className="text-label text-muted-foreground mb-1">Studio</p>
              <p className="text-body-base">
                First Floor Room No-2, Kh no-167,
              </p>
              <p className="text-body-base">H NO-B-63/1, Kirti Vihar Colony,</p>
              <p className="text-body-base">Loni, Ghaziabad, U.P. - 201102</p>
            </div>
            <div>
              <p className="text-label text-muted-foreground mb-1">Email</p>
              <a
                href="mailto:urbanstylespace@gmail.com"
                className="text-body-base hover:text-primary transition-colors duration-200"
              >
                urbanstylespace@gmail.com
              </a>
            </div>
            <div>
              <p className="text-label text-muted-foreground mb-1">Phone</p>
              <a
                href="tel:+916202592267"
                className="text-body-base hover:text-primary transition-colors duration-200"
              >
                +91 6202592267
              </a>
            </div>
            <div>
              <p className="text-label text-muted-foreground mb-1">Website</p>
              <a
                href="https://www.urbanstylespace.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-body-base hover:text-primary transition-colors duration-200"
              >
                www.urbanstylespace.com
              </a>
            </div>
            <div>
              <p className="text-label text-muted-foreground mb-1">Hours</p>
              <p className="text-body-base">Mon – Sat, 9am – 7pm IST</p>
            </div>
          </div>
        </div>

        {/* Right: form */}
        <div>
          <form
            data-ocid="contact-form"
            onSubmit={handleSubmit}
            noValidate
            className="space-y-6"
          >
            {/* Name */}
            <div className="space-y-2">
              <label
                htmlFor="contact-name"
                className="text-label text-muted-foreground"
              >
                Full Name
              </label>
              <input
                id="contact-name"
                data-ocid="contact-name"
                type="text"
                value={form.name}
                onChange={(e) =>
                  setForm((p) => ({ ...p, name: e.target.value }))
                }
                onBlur={() => handleBlur("name")}
                placeholder="Your Name"
                aria-invalid={!!errors.name}
                aria-describedby={
                  errors.name ? "contact-name-error" : undefined
                }
                className="w-full bg-transparent border-b border-border py-3 text-body-base placeholder:text-muted-foreground/50 focus:outline-none focus-visible:outline-none focus-visible:border-foreground focus-visible:ring-1 focus-visible:ring-foreground/30 focus:border-foreground transition-colors duration-200"
              />
              {errors.name && (
                <p
                  id="contact-name-error"
                  className="text-xs text-destructive"
                  role="alert"
                >
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label
                htmlFor="contact-email"
                className="text-label text-muted-foreground"
              >
                Email Address
              </label>
              <input
                id="contact-email"
                data-ocid="contact-email"
                type="email"
                value={form.email}
                onChange={(e) =>
                  setForm((p) => ({ ...p, email: e.target.value }))
                }
                onBlur={() => handleBlur("email")}
                placeholder="your@email.com"
                aria-invalid={!!errors.email}
                aria-describedby={
                  errors.email ? "contact-email-error" : undefined
                }
                className="w-full bg-transparent border-b border-border py-3 text-body-base placeholder:text-muted-foreground/50 focus:outline-none focus-visible:outline-none focus-visible:border-foreground focus-visible:ring-1 focus-visible:ring-foreground/30 focus:border-foreground transition-colors duration-200"
              />
              {errors.email && (
                <p
                  id="contact-email-error"
                  className="text-xs text-destructive"
                  role="alert"
                >
                  {errors.email}
                </p>
              )}
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label
                htmlFor="contact-message"
                className="text-label text-muted-foreground"
              >
                Your Message
              </label>
              <textarea
                id="contact-message"
                data-ocid="contact-message"
                value={form.message}
                onChange={(e) =>
                  setForm((p) => ({ ...p, message: e.target.value }))
                }
                onBlur={() => handleBlur("message")}
                placeholder="Tell us about your project — location, scale, timeline, and any inspiration..."
                rows={5}
                aria-invalid={!!errors.message}
                aria-describedby={
                  errors.message ? "contact-message-error" : undefined
                }
                className="w-full bg-transparent border-b border-border py-3 text-body-base placeholder:text-muted-foreground/50 focus:outline-none focus-visible:outline-none focus-visible:border-foreground focus-visible:ring-1 focus-visible:ring-foreground/30 focus:border-foreground transition-colors duration-200 resize-none"
              />
              {errors.message && (
                <p
                  id="contact-message-error"
                  className="text-xs text-destructive"
                  role="alert"
                >
                  {errors.message}
                </p>
              )}
            </div>

            {/* Submit */}
            <div className="pt-4">
              <button
                type="submit"
                data-ocid="contact-submit"
                disabled={submitting}
                aria-disabled={submitting}
                className="text-label bg-foreground text-card px-10 py-4 hover:bg-primary transition-all duration-300 tracking-[0.2em] disabled:opacity-50 disabled:cursor-not-allowed w-full md:w-auto"
              >
                {submitting ? "SENDING..." : "SEND INQUIRY"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
