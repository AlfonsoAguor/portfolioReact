import React from 'react';
import Header from './componentes/Header';
import MenuScreen from './componentes/MenuScreen';
import MenuResponsive from './componentes/MenuResponsive';
import Home from './componentes/Home';
import Projects from './componentes/Projects';
import Certs from './componentes/Certs';
import Skills from './componentes/Skills';
import Footer from './componentes/Footer';
import Contact from './componentes/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <MenuScreen />
      <MenuResponsive />
      <main id="content">
        <Home />
        <div className="wrap">
          <Projects />
          <Certs />
          <Skills />
          <Contact />
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
