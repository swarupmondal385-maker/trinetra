# Capture sponsor enquiries properly

Right now the Partner With Us form shows a success message and throws the enquiry away. This makes it store every enquiry and alert the team by email.

## What changes for you

- Every sponsorship enquiry is saved permanently, so nothing is lost.
- Your team gets an email the moment a brand submits the form.
- The form gives honest feedback: a real error if something fails, success only when the enquiry is actually saved.

## Scope

1. **Enable Lovable Cloud** (the built-in database) for this project.
2. **Create a `sponsor_enquiries` table** with the fields the form already collects (brand/company, contact name, email, phone, package interest, message), plus a submitted-at timestamp and a status field (`new` / `contacted` / `closed`) for follow-up tracking.
3. **Server-side submission**: a server function validates the form input, inserts the row, and then sends the notification email. Public visitors can submit but cannot read enquiries back.
4. **Email alert** to the Corporate Relations inbox with the enquiry details and a reply-to set to the sponsor's address.
5. **Form UX in `src/routes/partner.tsx`**: proper submitting state, real error handling, success only on confirmed save. Keep the existing visual design and labels.

## Technical notes

- Table lives in the `public` schema with row-level security: `INSERT` allowed for anonymous visitors, reads restricted to service-role/admin only. Grants written alongside the table in the same migration.
- Submission goes through a TanStack `createServerFn` in `src/lib/sponsor-enquiries.functions.ts`, validated with Zod, so the insert and the email both happen server-side.
- Email delivery needs an email provider. Resend is the simplest fit — I'll open the connect card during the build so you can authorize it. If you'd rather not connect anything, the enquiries still get stored and I'll skip the email step.

## Open detail

Which inbox should receive the alerts? Default is the Corporate Relations contact already listed on the site; tell me if it should go somewhere else (for example your own address).

## Not in this plan

The brand-search work (Search Console + sitemap submission) and the sponsor outreach landing page stay saved as the next two opportunities.
