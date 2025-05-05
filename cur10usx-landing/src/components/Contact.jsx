// src/components/Contact.jsx
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'cur10usx',
      'template_01',
      form.current,
      'sFJ7wEMZFbnJFy6X3'
    )
    .then(() => {
      alert('Mensagem enviada com sucesso!');
      form.current.reset();
    }, (error) => {
      alert('Erro ao enviar a mensagem. Tente novamente.');
      console.log(error.text);
    });
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-content">
        <h2>Entre em Contato</h2>
        <p>Tem dúvidas, sugestões ou quer colaborar com a Curious? Fale conosco!</p>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input type="text" name="user_name" placeholder="Seu nome" required />
          <input type="email" name="user_email" placeholder="Seu email" required />
          <textarea name="message" placeholder="Sua mensagem..." rows="5" required></textarea>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
