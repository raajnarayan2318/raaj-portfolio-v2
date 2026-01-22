import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Cursor from "../components/ui/Cursor";

import { routes } from "./routes";

export default function App() {
  return (
    <BrowserRouter>
      {/* custom cursor */}
      <Cursor />

      {/* app shell */}
      <div className="min-h-screen bg-neutral-950 text-neutral-100">
        <Navbar />

        <main className="pt-16">
          <Routes>
            {routes.map((r) => (
              <Route key={r.path} path={r.path} element={r.element} />
            ))}
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}