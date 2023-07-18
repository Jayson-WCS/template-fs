import Menu from "./components/header/Menu";
import HeroSection from "./components/hero/HeroSection";
import ProjectSection from "./components/cards/ProjectSection";
import ContactForm from "./components/form/ContactForm";
import Footer from "./components/footer/FooterSection";

export default function App() {
  return (
    <div data-theme="dracula">
      <Menu/>
      <HeroSection />
      <ProjectSection />
      <ContactForm />
      <Footer />
    </div>
  )
}
