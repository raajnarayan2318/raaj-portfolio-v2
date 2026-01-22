export default function Footer() {
    return (
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-neutral-300/70 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} Raaj Narayan Rao Thipparthy</div>
  
          <div className="flex gap-5">
            <a
              className="hover:text-white"
              href="https://github.com/raajnarayan2318"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              className="hover:text-white"
              href="https://linkedin.com/in/raajnarayan"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    );
  }