import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

const optional = z.string().trim().max(500).optional().or(z.literal("")).transform((v) => (v ? v : null));

const enquirySchema = z.object({
  name: z.string().trim().min(1).max(200),
  company: z.string().trim().min(1).max(200),
  email: z.string().trim().email().max(320),
  designation: optional,
  phone: optional,
  website: optional,
  industry: optional,
  budget: optional,
  package: optional,
  category: optional,
  objective: optional,
  meeting: optional,
  message: z.string().trim().max(4000).optional().or(z.literal("")).transform((v) => (v ? v : null)),
});

export type SponsorEnquiryInput = z.input<typeof enquirySchema>;

export const submitSponsorEnquiry = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => enquirySchema.parse(data))
  .handler(async ({ data }) => {
    const { error } = await supabase.from("sponsor_enquiries").insert(data);

    if (error) {
      console.error("sponsor_enquiries insert failed:", error.message);
      throw new Error("We could not save your enquiry. Please try again or email us directly.");
    }

    return { ok: true as const };
  });
