import { Hero } from "../components/Hero/Hero";
import { Stack } from "../components/Stack/Stack";
import { Projects } from "../components/Projects/Projects";
import { About } from "../components/About/About";
import { Contact } from "../components/Contact/Contact";

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