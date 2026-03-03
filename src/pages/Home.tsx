import { Hero } from "../components/Hero";
import { Stack } from "../components/Stack";
import { Projects } from "../components/Projects";
import { About } from "../components/About";
import { Contact } from "../components/Contact";

export const Home = () => {
  return (
    <>
      <section id="hero">
        <Hero />
      </section>

      <section id="stack">
        <Stack />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </>
  );
};