import { Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { ArrowUpRight, Send, Sparkles, X } from "lucide-react";
import {
  fallbackReply,
  matchIntent,
  suggestedQuestions,
  type AssistantAction,
} from "@/data/trinetraKnowledge";
import { askTrinetra } from "@/lib/trinetra-ai.functions";
import { TrinetraMark } from "./TrinetraMark";
import { cn } from "@/lib/utils";

type Message = { id: number; role: "user" | "bot"; text: string; actions?: AssistantAction[] };

let nextId = 1;

export function TrinetraAI() {
  const [open, setOpen] = useState(false);
  const [busy, setBusy] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      role: "bot",
      text: "Namaskar. Ask me anything about TRINETRA 2026 — artists, schedule, venue or sponsorship.",
    },
  ]);
  const listRef = useRef<HTMLDivElement>(null);
  const ask = useServerFn(askTrinetra);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const send = async (question: string) => {
    const q = question.trim();
    if (!q || busy) return;
    setInput("");
    setMessages((m) => [...m, { id: nextId++, role: "user", text: q }]);

    // Level 1 — instant deterministic answer from curated data.
    const local = matchIntent(q);
    if (local) {
      setMessages((m) => [...m, { id: nextId++, role: "bot", text: local.text, actions: local.actions }]);
      return;
    }

    // Level 2 — grounded LLM, server-side only.
    setBusy(true);
    try {
      const res = await ask({ data: { question: q } });
      if (res.ok) {
        setMessages((m) => [...m, { id: nextId++, role: "bot", text: res.text, actions: res.actions }]);
      } else {
        setMessages((m) => [
          ...m,
          { id: nextId++, role: "bot", text: fallbackReply.text, actions: fallbackReply.actions },
        ]);
      }
    } catch {
      setMessages((m) => [
        ...m,
        { id: nextId++, role: "bot", text: fallbackReply.text, actions: fallbackReply.actions },
      ]);
    } finally {
      setBusy(false);
    }
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    void send(input);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open Ask Trinetra assistant"
        className={cn(
          "fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-[var(--glow-marigold)] transition-transform duration-300 hover:scale-105 active:scale-95 sm:h-16 sm:w-16",
          open && "pointer-events-none opacity-0",
        )}
      >
        <TrinetraMark className="h-7 w-auto sm:h-8" />
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-end justify-end sm:p-6">
          <button
            type="button"
            aria-label="Close assistant"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-background/60 backdrop-blur-sm"
          />
          <div
            role="dialog"
            aria-label="Ask Trinetra"
            className="animate-scale-in relative flex h-[88svh] w-full flex-col border border-border bg-card shadow-[var(--shadow-plate)] sm:h-[min(36rem,80svh)] sm:w-[24rem]"
          >
            <header className="flex items-start justify-between gap-3 border-b border-border p-4">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center border border-accent/60 text-accent">
                  <Sparkles className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-sm font-bold uppercase tracking-[0.16em]">Ask Trinetra</span>
                  <span className="block text-[11px] text-muted-foreground">Your guide to TRINETRA 2026</span>
                </span>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close assistant"
                className="flex h-10 w-10 items-center justify-center text-muted-foreground hover:text-foreground"
              >
                <X className="h-5 w-5" />
              </button>
            </header>

            <div ref={listRef} className="flex-1 space-y-4 overflow-y-auto p-4">
              {messages.map((m) => (
                <div key={m.id} className={cn("flex", m.role === "user" ? "justify-end" : "justify-start")}>
                  <div
                    className={cn(
                      "max-w-[85%] px-3.5 py-2.5 text-sm leading-relaxed",
                      m.role === "user"
                        ? "bg-accent text-accent-foreground"
                        : "border border-border bg-background text-foreground",
                    )}
                  >
                    <p className="whitespace-pre-line">{m.text}</p>
                    {m.actions && m.actions.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {m.actions.map((a) => (
                          <Link
                            key={a.to + a.label}
                            to={a.to}
                            onClick={() => setOpen(false)}
                            className="inline-flex items-center gap-1 border border-accent/60 px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-accent hover:bg-accent hover:text-accent-foreground"
                          >
                            {a.label} <ArrowUpRight className="h-3 w-3" />
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
              {busy && <p className="text-xs text-muted-foreground">Thinking…</p>}

              {messages.length <= 1 && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {suggestedQuestions.slice(0, 5).map((q) => (
                    <button
                      key={q}
                      type="button"
                      onClick={() => void send(q)}
                      className="border border-border px-2.5 py-1.5 text-[11px] text-muted-foreground transition-colors hover:border-accent hover:text-accent"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <form onSubmit={onSubmit} className="flex items-center gap-2 border-t border-border p-3">
              <label htmlFor="trinetra-ai-input" className="sr-only">
                Ask about TRINETRA 2026
              </label>
              <input
                id="trinetra-ai-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about artists, schedule, sponsorship…"
                className="min-h-11 flex-1 border border-input bg-background px-3 text-sm outline-none focus:border-accent"
              />
              <button
                type="submit"
                disabled={busy || !input.trim()}
                aria-label="Send message"
                className="flex h-11 w-11 shrink-0 items-center justify-center bg-accent text-accent-foreground disabled:opacity-50"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
