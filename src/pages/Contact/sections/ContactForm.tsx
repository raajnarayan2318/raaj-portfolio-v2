import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  return (
    <section className="mx-auto max-w-6xl px-6 pb-20">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8">
          <h2 className="text-2xl font-semibold">Let’s build something</h2>
          <p className="mt-3 text-neutral-300/80 leading-relaxed">
            Whether it’s pipelines, dashboards, or AI-assisted workflows — I love transforming messy information into
            systems that teams can rely on.
          </p>

          <div className="mt-8 space-y-3 text-neutral-300/80">
            <div className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3">
              ⚡ Data engineering & automation
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3">
              📊 Analytics + KPI dashboards
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3">
              🤖 AI workflows (LLM enablement)
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <h3 className="text-xl font-semibold">Send a message</h3>

          <form
            className="mt-6 space-y-4"
            action="https://formspree.io/f/xbdapqbl"
            method="POST"
            onSubmit={() => setStatus("sent")}
          >
            <input
              required
              name="name"
              placeholder="Your name"
              className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none focus:border-white/30"
            />

            <input
              type="hidden"
              name="_subject"
              value="New message from portfolio"
            />

            <input
              required
              type="email"
              name="email"
              placeholder="Email"
              className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none focus:border-white/30"
            />

            <textarea
              required
              name="message"
              placeholder="Message"
              rows={5}
              className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none focus:border-white/30 resize-none"
            />

            <button className="btn-primary w-full" type="submit">
              {status === "sent" ? "Message queued ✅" : "Send message"}
            </button>
          </form>

          {status === "sent" && (
            <div className="mt-4 text-sm text-neutral-300/80">
              For now, please email me directly — we’ll connect this form to AWS soon.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}