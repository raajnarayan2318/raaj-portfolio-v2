import AboutHero from "./sections/AboutHero";
import ValueBlocks from "./sections/ValueBlocks";
import Principles from "./sections/Principles";
import Toolbelt from "./sections/Toolbelt";

export default function About() {
  return (
    <div className="relative overflow-hidden">
      <AboutHero />
      <ValueBlocks />
      <Principles />
      <Toolbelt />
    </div>
  );
}