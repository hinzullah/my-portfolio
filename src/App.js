import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import Skills from './Components/Skills';
import Timeline from './Components/Timeline';
import Webimage from './Components/Webimage';


function App() {
  return (
    <div className="App">
      <Home />
      <Webimage />
      <About />
      <Skills />
      <Timeline />
     
    </div>
  );
}

export default App;
