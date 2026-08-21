import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { useServerFn } from "@tanstack/react-start";
import { Reveal } from "@/components/Reveal";
import { PageHero, Section } from "@/components/blocks";
import { contacts, packages, partnershipCategories } from "@/data/site";
import { submitSponsorEnquiry } from "@/lib/sponsor-enquiries.functions";

export const Route = createFileRoute("/partner")({
  head: () => ({
    meta: [
      { title: "Partner With Us — Book a TRINETRA 2026 Sponsorship Meeting" },
      { name: "description", content: "Request a partnership meeting with the Corporate Relations team behind TRINETRA 2026, and reach the official contacts directly." },
      { property: "og:title", content: "Partner With TRINETRA 2026" },
      { property: "og:description", content: "Let's build a partnership that the audience remembers." },
      { property: "og:url", content: "https://www.mcamsv.com/partner" },
      { property: "og:site_name", content: "TRINETRA 2026" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.mcamsv.com/social-preview.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:image", content: "https://www.mcamsv.com/social-preview.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Partner With Us — Book a TRINETRA 2026 Sponsorship Meeting" },
      { name: "twitter:description", content: "Request a partnership meeting with the Corporate Relations team behind TRINETRA 2026, and reach the official contacts directly." },
    ],
    links: [{ rel: "canonical", href: "https://www.mcamsv.com/partner" }],
  }),
  component: Partner,
});

const field = "w-full border border-input bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-accent";

function Partner() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const submit = useServerFn(submitSponsorEnquiry);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting) return;
    const form = e.currentTarget;
    const fd = new FormData(form);
    const value = (key: string) => String(fd.get(key) ?? "").trim();

    setSubmitting(true);
    try {
      await submit({
        data: {
          name: value("name"),
          designation: value("designation"),
          company: value("company"),
          email: value("email"),
          phone: value("phone"),
          website: value("website"),
          industry: value("industry"),
          budget: value("budget"),
          package: value("package"),
          category: value("category"),
          objective: value("objective"),
          meeting: value("meeting"),
          message: value("message"),
        },
      });
      setSent(true);
      toast.success("Thank you. The TRINETRA Corporate Relations team will review your enquiry.");
    } catch (err) {
      console.error(err);
      toast.error(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };


  return (
    <>
      <PageHero eyebrow="Page 20 · Partner with us" title={<>Let's build a partnership<br />that the audience remembers.</>} lede="Tell us what your brand wants to achieve and our Corporate Relations team will come back with a tailored inventory." />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            {sent ? (
              <div className="surface p-12">
                <p className="eyebrow">Enquiry received</p>
                <p className="mt-6 text-2xl font-bold">Thank you.</p>
                <p className="mt-3 text-sm text-muted-foreground">
                  The TRINETRA Corporate Relations team will review your enquiry.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
                <label htmlFor="pf-name" className="sr-only">Your name</label>
                <input id="pf-name" required name="name" placeholder="Your name" className={field} />
                <label htmlFor="pf-designation" className="sr-only">Designation</label>
                <input id="pf-designation" name="designation" placeholder="Designation" className={field} />
                <label htmlFor="pf-company" className="sr-only">Company</label>
                <input id="pf-company" required name="company" placeholder="Company" className={field} />
                <label htmlFor="pf-email" className="sr-only">Work email</label>
                <input id="pf-email" required type="email" name="email" placeholder="Work email" className={field} />
                <label htmlFor="pf-phone" className="sr-only">Phone</label>
                <input id="pf-phone" name="phone" placeholder="Phone" className={field} />
                <label htmlFor="pf-website" className="sr-only">Company website</label>
                <input id="pf-website" name="website" placeholder="Company website" className={field} />
                <label htmlFor="pf-industry" className="sr-only">Industry</label>
                <input id="pf-industry" name="industry" placeholder="Industry" className={field} />
                <label htmlFor="pf-budget" className="sr-only">Budget range</label>
                <input id="pf-budget" name="budget" placeholder="Budget range" className={field} />
                <label htmlFor="pf-package" className="sr-only">Preferred sponsorship package</label>
                <select id="pf-package" name="package" className={field} defaultValue="">
                  <option value="" disabled>Preferred sponsorship package</option>
                  {packages.map((p) => (
                    <option key={p.tier} value={p.tier}>{p.tier} — {p.price}</option>
                  ))}
                </select>
                <label htmlFor="pf-category" className="sr-only">Preferred partnership category</label>
                <select id="pf-category" name="category" className={field} defaultValue="">
                  <option value="" disabled>Preferred partnership category</option>
                  {partnershipCategories.map((c) => (
                    <option key={c.name} value={c.name}>{c.name}</option>
                  ))}
                </select>
                <label htmlFor="pf-objective" className="sr-only">Primary objective</label>
                <input id="pf-objective" name="objective" placeholder="Primary objective" className={`${field} sm:col-span-2`} />
                <label htmlFor="pf-meeting" className="sr-only">Preferred meeting type</label>
                <select id="pf-meeting" name="meeting" className={`${field} sm:col-span-2`} defaultValue="">
                  <option value="" disabled>Preferred meeting type</option>
                  <option>Online</option>
                  <option>Physical</option>
                  <option>Phone</option>
                </select>
                <label htmlFor="pf-message" className="sr-only">Message</label>
                <textarea id="pf-message" name="message" rows={5} placeholder="Message" className={`${field} sm:col-span-2`} />

                <button
                  type="submit"
                  disabled={submitting}
                  className="sm:col-span-2 bg-accent px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-accent-foreground transition-shadow hover:shadow-[var(--glow-marigold)] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitting ? "Sending…" : "Request a partnership meeting"}
                </button>
                <p className="sm:col-span-2 text-xs text-muted-foreground">
                  Every enquiry is stored securely and reviewed by the TRINETRA Corporate Relations team.
                </p>


              </form>
            )}
          </Reveal>

          <Reveal delay={120}>
            <div className="space-y-px border border-border bg-border">
              {contacts.map((c) => (
                <div key={c.name} className="bg-background p-6">
                  <p className="eyebrow">{c.role}</p>
                  <p className="mt-3 text-base font-bold">{c.name}</p>
                  {c.email && (
                    <a href={`mailto:${c.email}`} className="mt-2 block break-all text-sm text-muted-foreground hover:text-accent">
                      {c.email}
                    </a>
                  )}
                  {c.showPhone && c.phone && (
                    <a href={`tel:+91${c.phone}`} className="mt-1 block text-sm text-muted-foreground hover:text-accent">
                      +91 {c.phone}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
