import { Routes, Route } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Cursor from "../components/ui/Cursor";

import { routes } from "./routes";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Cursor />
      <Navbar />

      <Routes>
        {routes.map((r) => (
          <Route key={r.path} path={r.path} element={r.element} />
        ))}
      </Routes>

      <Footer />
    </div>
  );
}