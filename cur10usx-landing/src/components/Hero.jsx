// src/components/Hero.jsx
import React from 'react';
import './Hero.css';
import heroImage from '../assets/img/hero-for-now.svg'; // ajuste o caminho conforme necessário


function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2>Descubra, aprenda, evolua com a Cur10usX</h2>
        <p>Transformamos a educação e os serviços públicos com soluções digitais inovadoras.</p>
        <a href="#about" className="btn-primary">Saiba Mais</a>
      </div>
      <div className="hero-img">
        <img src={heroImage} alt="Ilustração representando inovação" />
      </div>
    </section>
  );
}

export default Hero;
