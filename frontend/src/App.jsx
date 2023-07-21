import Menu from "./components/header/Menu";
import HeroSection from "./components/hero/HeroSection";
import Paths from "./components/paths/Paths";
import ProjectSection from "./components/cards/ProjectSection";
import ContactForm from "./components/form/ContactForm";
import Reviews from "./components/reviews/Reviews";
import Footer from "./components/footer/FooterSection";

export default function App() {
  return (
    <div data-theme="cmyk">
      <Menu/>
      <HeroSection />
      <Paths />
      <ProjectSection />
      <ContactForm />
      <Reviews />
      <Footer />
    </div>
  )
}
