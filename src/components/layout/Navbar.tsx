import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";
import { Home } from "lucide-react";

const nav = [
  { label: "About", to: "/about" },
  { label: "Case Studies", to: "/case-studies" },
  { label: "Experience", to: "/experience" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          to="/"
          aria-label="Home"
          title="Home"
          className="flex h-10 w-10 items-center justify-center rounded-xl
           border border-white/10 bg-white/5 text-cyan-300
           transition hover:bg-cyan-500/10 hover:text-cyan-200
           hover:shadow-[0_0_20px_rgba(34,211,238,0.35)]"
        >
          <Home className="h-5 w-5" />
        </Link>

        <nav className="hidden items-center gap-6 text-sm md:flex">
          {nav.map((item) => {
            const active =
              item.to === "/case-studies"
                ? pathname.startsWith("/case-studies")
                : pathname === item.to;

            return (
              <Link
                key={item.to}
                to={item.to}
                className={clsx(
                  "transition hover:text-white",
                  active ? "text-white" : "text-neutral-200/80"
                )}
              >
                {item.label}
                {active && (
                  <span className="block h-[2px] w-full rounded-full bg-cyan-300/80 mt-1" />
                )}
              </Link>
            );
          })}
        </nav>

        <Link className="btn-secondary" to="/case-studies">
          Explore
        </Link>
      </div>
    </header>
  );
}