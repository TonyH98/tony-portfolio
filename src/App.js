
import './App.css';
import Home from './Components/LandingPage/Home';
import Nav from './Components/NavBar/Nav';
import Projects from './Components/Projects/Projects';
import Skill from './Components/Skill/Skill';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div className="App">
   
    
    <Nav/>
      
   <Home/>

  <Projects/>

    <Skill/>

  <Contact/>
  

  
  </div>
  );
}

export default App;
