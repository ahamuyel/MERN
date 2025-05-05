// src/components/Features.jsx
import React from 'react';
import './Features.css';

function Features() {
  return (
    <section id="features" className="features">
      <div className="features-title">
        <h2>Recursos Inovadores</h2>
        <p>O que torna a CuriousX única?</p>
      </div>
      <div className="features-grid">
        <div className="feature-item">
          <h3>Educação Digital</h3>
          <p>Plataformas de aprendizagem inclusivas e gamificadas para todos os níveis de ensino.</p>
        </div>
        <div className="feature-item">
          <h3>Saúde Conectada</h3>
          <p>Ferramentas para digitalizar consultas, exames e informações médicas com segurança.</p>
        </div>
        <div className="feature-item">
          <h3>Finanças Acessíveis</h3>
          <p>Soluções financeiras simples e eficazes para cidadãos e governos.</p>
        </div>
        <div className="feature-item">
          <h3>Mobilidade Urbana</h3>
          <p>Apps para transporte público inteligente, com foco em eficiência e sustentabilidade.</p>
        </div>
      </div>
    </section>
  );
}

export default Features;
