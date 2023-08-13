
import './App.css';
import { BrowserRouter as Router, Route , Routes } from 'react-router-dom';
import Home from './Components/LandingPage/Home';
import Nav from './Components/NavBar/Nav';
import Projects from './Components/Projects/Projects';

import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div className="App">
   
    
    <Nav/>
      
   <Home/>

  <Projects/>

  <Contact/>
  

  
  </div>
  );
}

export default App;
