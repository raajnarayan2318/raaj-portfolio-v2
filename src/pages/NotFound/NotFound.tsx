import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-24 text-center">
      <h1 className="text-4xl md:text-5xl font-semibold">404</h1>
      <p className="mt-4 text-neutral-300/80">
        This page doesn’t exist. Let’s take you back.
      </p>

      <Link to="/" className="btn-primary mt-8 inline-block">
        Back to Home
      </Link>
    </div>
  );
}