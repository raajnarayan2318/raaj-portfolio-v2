import ContactHero from "./sections/ContactHero";
import ContactCards from "./sections/ContactCards";
import ContactForm from "./sections/ContactForm";

export default function Contact() {
  return (
    <div className="relative overflow-hidden">
      <ContactHero />
      <ContactCards />
      <ContactForm />
    </div>
  );
}