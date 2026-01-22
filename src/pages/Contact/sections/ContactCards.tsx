export default function ContactCards() {
    const cards = [
      {
        title: "LinkedIn",
        desc: "Let’s connect professionally.",
        href: "https://linkedin.com/in/raajnarayan",
        label: "Open LinkedIn →",
      },
      {
        title: "GitHub",
        desc: "Explore projects & code.",
        href: "https://github.com/raajnarayan2318",
        label: "Open GitHub →",
      },
      {
        title: "Email",
        desc: "Reach out directly.",
        href: "mailto:raajthipparthy@gmail.com",
        label: "Send email →",
      },
    ];
  
    return (
      <section className="mx-auto max-w-6xl px-6 pb-16 md:pb-20">
        <div className="grid gap-5 md:grid-cols-3">
          {cards.map((c) => (
            <a
              key={c.title}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noreferrer" : undefined}
              className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur hover:border-white/20 hover:bg-white/10 transition"
            >
              <div className="text-xl font-semibold">{c.title}</div>
              <p className="mt-2 text-neutral-300/80">{c.desc}</p>
              <div className="mt-6 text-sm font-medium text-cyan-300 hover:text-cyan-200">
                {c.label}
              </div>
            </a>
          ))}
        </div>
      </section>
    );
  }