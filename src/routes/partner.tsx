import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Reveal } from "@/components/Reveal";
import { PageHero, Section } from "@/components/blocks";
import { contacts, packages, partnershipCategories } from "@/data/site";

export const Route = createFileRoute("/partner")({
  head: () => ({
    meta: [
      { title: "Partner With Us — Book a TRINETRA 2026 Sponsorship Meeting" },
      { name: "description", content: "Request a partnership meeting with CRED, the Corporate Relations and Events Department behind TRINETRA 2026, and reach the official contacts directly." },
      { property: "og:title", content: "Partner With TRINETRA 2026" },
      { property: "og:description", content: "Let's build a partnership that the audience remembers." },
    ],
  }),
  component: Partner,
});

const field = "w-full border border-input bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-accent";

function Partner() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    toast.success("Thank you. The TRINETRA Corporate Relations team will review your enquiry.");
  };

  return (
    <>
      <PageHero eyebrow="Page 20 · Partner with us" title={<>Let's build a partnership<br />that the audience remembers.</>} lede="Tell us what your brand wants to achieve and CRED will come back with a tailored inventory." />

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
                <input required name="name" placeholder="Your name" className={field} />
                <input name="designation" placeholder="Designation" className={field} />
                <input required name="company" placeholder="Company" className={field} />
                <input required type="email" name="email" placeholder="Work email" className={field} />
                <input name="phone" placeholder="Phone" className={field} />
                <input name="website" placeholder="Company website" className={field} />
                <input name="industry" placeholder="Industry" className={field} />
                <input name="budget" placeholder="Budget range" className={field} />
                <select name="package" className={field} defaultValue="">
                  <option value="" disabled>Preferred sponsorship package</option>
                  {packages.map((p) => (
                    <option key={p.tier} value={p.tier}>{p.tier} — {p.price}</option>
                  ))}
                </select>
                <select name="category" className={field} defaultValue="">
                  <option value="" disabled>Preferred partnership category</option>
                  {partnershipCategories.map((c) => (
                    <option key={c.name} value={c.name}>{c.name}</option>
                  ))}
                </select>
                <input name="objective" placeholder="Primary objective" className={`${field} sm:col-span-2`} />
                <select name="meeting" className={`${field} sm:col-span-2`} defaultValue="">
                  <option value="" disabled>Preferred meeting type</option>
                  <option>Online</option>
                  <option>Physical</option>
                  <option>Phone</option>
                </select>
                <textarea name="message" rows={5} placeholder="Message" className={`${field} sm:col-span-2`} />
                <button
                  type="submit"
                  className="sm:col-span-2 bg-accent px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-accent-foreground transition-shadow hover:shadow-[var(--glow-marigold)]"
                >
                  Request a partnership meeting
                </button>
                <p className="sm:col-span-2 text-xs text-muted-foreground">
                  Enquiries are reviewed by CRED. Brand brief uploads and stored lead tracking can be enabled with a backend.
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
