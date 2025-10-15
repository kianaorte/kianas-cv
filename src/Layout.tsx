import Navbar from "./components/Navbar/Navbar.tsx";
import Contact from "./pages/Contact/Contact.tsx";
import Home from "./pages/Home/Home.tsx";
import About from "./pages/About/About.tsx";
import Projects from "./pages/Projects.tsx";
import Cv from "./pages/Cv/Cv.tsx";
import { useRef } from "react";

const Layout: React.FC = () => {
  const sections = {
    home: useRef<HTMLElement | null>(null),
    about: useRef<HTMLElement | null>(null),
    cv: useRef<HTMLElement | null>(null),
    projects: useRef<HTMLElement | null>(null),
  };

  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
    if (ref.current) {
      const offsetTop = ref.current.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <Navbar onNavigate={scrollToSection} sections={sections} />
      <section ref={sections.home}>
        <Home />
      </section>
      <section ref={sections.about}>
        <About />
      </section>
      <section ref={sections.cv}>
        <Cv />
      </section>
      <section ref={sections.projects}>
        <Projects />
      </section>
      <Contact />
    </>
  );
};

export default Layout;
