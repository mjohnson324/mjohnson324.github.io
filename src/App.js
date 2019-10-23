import React from 'react';
import './root.scss';
import Header from './Components/Header/Header';
import Intro from './Components/Intro/Intro';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div id="portfolio-app">
      <Header />
      <Intro />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
