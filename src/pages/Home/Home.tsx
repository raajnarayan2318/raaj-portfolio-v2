import Hero from "./sections/Hero";
import FeaturedWork from "./sections/FeaturedWork";
import TechMarquee from "./sections/TechMarquee";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <Hero />
      <TechMarquee />
      <FeaturedWork />
    </div>
  );
}