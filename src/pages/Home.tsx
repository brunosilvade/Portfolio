import { Hero } from "../components/Hero/Hero";
import { Stack } from "../components/Stack/Stack";
import { Projects } from "../components/Projects/Projects";
import { About } from "../components/About/About";
import { Contact } from "../components/Contact/Contact";

export const Home = () => {
  return (
    <>
      <Hero />
      <Stack />
      <Projects />
      <About />
      <Contact />
    </>
  );
};