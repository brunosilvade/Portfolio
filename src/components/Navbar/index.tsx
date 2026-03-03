import { useState } from "react";
import "./navbar.scss";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">Bruno Almeida</div>

        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>

        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li><a href="#hero">Home</a></li>
          <li><a href="#stack">Stack</a></li>
          <li><a href="#projects">Projetos</a></li>
          <li><a href="#about">Sobre</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>
      </div>
    </nav>
  );
};