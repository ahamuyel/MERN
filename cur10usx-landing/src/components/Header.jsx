// src/components/Header.jsx
import React, { useState, useEffect } from "react";
import "./Header.css";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className={`header ${scrolled ? "transparent" : ""}`}>
      <div className="container">
        <a href="#" className="logo">Cur10usX</a>
        <div className="menuBtn" onClick={toggleMenu}>
          {menuOpen ? "✕" : "☰"}
        </div>
        <nav className={`navigation ${menuOpen ? "active" : ""}`}>
          <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#features">Recursos</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
          <div className="auth-buttons">
            <a href="#login" className="btn-login">Login</a>
            <a href="#register" className="btn-register">Registre-se</a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
