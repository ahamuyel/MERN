// src/App.jsx
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./index.css";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Features />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
