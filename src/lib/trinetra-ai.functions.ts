import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { askGateway, deriveActions } from "./trinetra-ai.server";

export const askTrinetra = createServerFn({ method: "POST" })
  .inputValidator((data) => z.object({ question: z.string().min(1).max(500) }).parse(data))
  .handler(async ({ data }) => {
    const text = await askGateway(data.question);
    if (!text) return { ok: false as const };
    return { ok: true as const, text, actions: deriveActions(data.question, text) };
  });
