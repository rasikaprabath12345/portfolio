import { useState, useEffect } from "react";
import About from "./components/About";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div className="bg-light-bg dark:bg-dark-bg text-gray-800 dark:text-white min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Certificates />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
