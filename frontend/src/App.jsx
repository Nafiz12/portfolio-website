import { useEffect } from "react";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Navbar from './components/Navbar';

export default function App() {
  useEffect(() => {
    const titleMap = {
      home: "Home | Md Nafiz Al Ifat",
      about: "About | Md Nafiz Al Ifat",
      skills: "Skills | Md Nafiz Al Ifat",
      projects: "Projects | Md Nafiz Al Ifat",
      contact: "Contact | Md Nafiz Al Ifat",
    };

    const sentinels = document.querySelectorAll("[data-observe]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("data-observe");
            if (titleMap[id]) {
              document.title = titleMap[id];
            }
          }
        });
      },
      {
        root: null,
        threshold: 0.1, // reliable and early trigger
      }
    );

    sentinels.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <section id="home" className="relative">
          <div className="absolute top-0 h-1 w-full" data-observe="home" />
          <Home />
        </section>

        <section id="about" className="relative">
          <div className="absolute top-0 h-1 w-full" data-observe="about" />
          <About />
        </section>

        <section id="skills" className="relative">
          <div className="absolute top-0 h-1 w-full" data-observe="skills" />
          <Skills />
        </section>

        <section id="projects" className="relative">
          <div className="absolute top-0 h-1 w-full" data-observe="projects" />
          <Projects />
        </section>

        <section id="contact" className="relative">
          <div className="absolute top-0 h-1 w-full" data-observe="contact" />
          <Contact />
        </section>
      </main>
    </>
  );
}
