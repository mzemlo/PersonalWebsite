import React from 'react';
import './App.scss';
import Navbar from './sections/header/Navbar';
import HeroShot from './sections/home/HeroShot';
import Projects from './sections/projects/Projects';
import About from './sections/about/About';
import Technologies from './sections/technologies/Technologies';
import Contact from './sections/contact/Contact';
import Footer from './sections/footer/Footer';


function App() {
  return (
    <div className="App container-fluid">
      <Navbar/>
      <div id="home" className="row">
        <HeroShot/>
      </div>        
      <div id="projekty" className="row">
        <Projects/>
      </div>        
      <div id="o-mnie" className="row">
        <About/>
      </div>
      <div id="technologie" className="row">
        <Technologies/>
      </div>
      <div id="kontakt" className="row">
        <Contact/>
      </div>          
      <div id="footer" className="row">
        <Footer/>
      </div>         
    </div>
  );
}

export default App;
