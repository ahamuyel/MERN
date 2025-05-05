import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h3>Cur10usX</h3>
          <p>Transformando o futuro digital de Angola.</p>
        </div>
        <div className="footer-links">
          <a href="#about">Sobre</a>
          <a href="#features">Recursos</a>
          <a href="#contact">Contato</a>
        </div>
        <div className="footer-copy">
          <p>&copy; {new Date().getFullYear()} Cur10usX. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
