import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="font-semibold tracking-tight">
          Raaj<span className="text-white/40">.</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-neutral-200/80 md:flex">
          <Link className="hover:text-white" to="/about">About</Link>
          <Link className="hover:text-white" to="/case-studies">Case Studies</Link>
          <Link className="hover:text-white" to="/experience">Experience</Link>
          <Link className="hover:text-white" to="/contact">Contact</Link>
        </nav>

        <a className="btn-secondary" href="#featured">
          Explore
        </a>
      </div>
    </header>
  );
}