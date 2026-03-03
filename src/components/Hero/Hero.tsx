import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import "../../styles/components/_hero.scss";

export const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-title", {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".hero-subtitle", {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
      });
    }, heroRef);

    return () => ctx.revert(); // limpeza segura
  }, []);

  return (
    <section ref={heroRef} className="hero">
     <div>
      <h1 className="hero-title">Bruno Almeida</h1>
      <p className="hero-subtitle">
        Front-end Developer focado em performance, arquitetura e experiência
      </p>
     </div>
    </section>
  );
};