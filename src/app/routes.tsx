import Home from "../pages/Home/Home";
import About from "../pages/About/About";

import CaseStudies from "../pages/CaseStudies/CaseStudies";
import CaseStudyDetail from "../pages/CaseStudies/CaseStudyDetail";

import Experience from "../pages/Experience/Experience";

import Contact from "../pages/Contact/Contact";

export const routes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },

  { path: "/case-studies", element: <CaseStudies /> },
  { path: "/case-studies/:slug", element: <CaseStudyDetail /> },

  { path: "/experience", element: <Experience /> },

  { path: "/contact", element: <Contact /> },

  // (We will add later)
  // { path: "/experience", element: <Experience /> },
  // { path: "/contact", element: <Contact /> },
];