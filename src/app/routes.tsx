import Home from "../pages/Home/Home";
import About from "../pages/About/About";

import CaseStudies from "../pages/CaseStudies/CaseStudies";
import CaseStudyDetail from "../pages/CaseStudies/CaseStudyDetail";

import Experience from "../pages/Experience/Experience";

import Contact from "../pages/Contact/Contact";

import PageTransition from "../components/layout/PageTransition";

import NotFound from "../pages/NotFound/NotFound";

export const routes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },

  { path: "/case-studies", element: <CaseStudies /> },
  { path: "/case-studies/:slug", element: <CaseStudyDetail /> },

  { path: "/experience", element: <Experience /> },

  { path: "/contact", element: <Contact /> },

{ path: "/", element: <PageTransition><Home /></PageTransition> },
{ path: "/about", element: <PageTransition><About /></PageTransition> },
{ path: "/case-studies", element: <PageTransition><CaseStudies /></PageTransition> },
{ path: "/case-studies/:slug", element: <PageTransition><CaseStudyDetail /></PageTransition> },
{ path: "/experience", element: <PageTransition><Experience /></PageTransition> },
{ path: "/contact", element: <PageTransition><Contact /></PageTransition> },

{ path: "*", element: <PageTransition><NotFound /></PageTransition> },

  // (We will add later)
  // { path: "/experience", element: <Experience /> },
  // { path: "/contact", element: <Contact /> },
];