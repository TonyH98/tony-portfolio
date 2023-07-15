
import './App.css';
import { BrowserRouter as Router, Route , Routes } from 'react-router-dom';
import Home from './Components/LandingPage/Home';
import Nav from './Components/NavBar/Nav';
import Projects from './Components/Projects/Projects';
import About from './Components/About/About';


function App() {
  return (
    <div className="App">
    <Router>
    
    <Nav/>
      <main>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/About" element={<About/>}/>
        </Routes>
      </main>
    </Router>
  </div>
  );
}

export default App;
