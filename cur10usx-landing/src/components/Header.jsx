// src/components/Header.jsx
import React, { useState } from "react";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="header">
      <div className="container">
        <a href="#" className="logo">
          Cur10usX
        </a>
        <div className="menuBtn" onClick={toggleMenu}>
          {menuOpen ? "✕" : "☰"}
        </div>
        <nav className={`navigation ${menuOpen ? "active" : ""}`}>
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <li>
              <a href="#about">Sobre</a>
            </li>
            <li>
              <a href="#features">Recursos</a>
            </li>
            <li>
              <a href="#contact">Contato</a>
            </li>
          </ul>
          <div className="auth-buttons">
            <a href="#login" className="btn-login">
              Login
            </a>
            <a href="#register" className="btn-register">
              Registre-se
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
