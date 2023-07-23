import logo from './logo.svg';
import './App.css';
import { NavBar } from "./components/NavBar.js";
import { Banner } from './components/Banner.js';
import { Skills } from "./components/Skills.js";
import { Projects } from "./components/Projects.js";
import { Contact } from './components/Contact';
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from 'react';

const App = () => {
  
  useEffect(() => {
    fetch("/api")
    .then((res) => res.json())
    .then((data) => {console.log(data)});
    document.title = "Ronak Patel";
  }, [])
  
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
