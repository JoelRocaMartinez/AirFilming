import React, { useState } from "react";
import './App.css';

//Components
import About from "./components/About";
import Airfilming from "./components/Airfilming";
import Contact from "./components/Contact";
import Equipment from "./components/Equipment";
import MyNavBar from "./components/MyNavBar";
import Services from "./components/Services";
import Footer from "./components/Footer";


function App() {
  let languageStoredInLocalStorage = localStorage.getItem("language");
  const [language, setLanguage] = useState(languageStoredInLocalStorage ? languageStoredInLocalStorage : "Spanish"); 

  return (
    <div> 
      <MyNavBar language={language}
          handleSetLanguage={language => {
          setLanguage(language);
          storeLanguageInLocalStorage(language);
        }}/>
      <Airfilming/>
      <Services language={language}/>
      <Equipment language={language}/>
      <About language={language}/>
      <Contact language={language}/>
      <Footer language={language}/>
    </div>
  );
}

function storeLanguageInLocalStorage(language) {
  localStorage.setItem("language", language);
}

export default App;
