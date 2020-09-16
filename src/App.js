import React from 'react';
import './App.css';

//Components
import About from "./components/About";
import Airfilming from "./components/Airfilming";
import Contact from "./components/Contact";
import Equipment from "./components/Equipment";
import NavBar from "./components/NavBar";
import Services from "./components/Services";
import Footer from "./components/Footer";


function App() {
  return (
    <div> 
      <NavBar/>
      <Airfilming/>
      <Services/>
      <Equipment/>
      <About/>
      <Contact/>
      <Footer/>
    
    </div>
  );
}

export default App;
