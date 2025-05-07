// src/components/Hero.jsx
import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2>Transformando o público com tecnologia de ponta</h2>
        <p>Na Cur10usX, desenvolvemos soluções para educação, saúde, transporte e muito mais.</p>
        <a href="#about" className="btn-primary">Saiba Mais</a>
      </div>
    </section>
  );
}

export default Hero;
