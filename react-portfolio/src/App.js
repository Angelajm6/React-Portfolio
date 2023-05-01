import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Home from "./components/Home";
import About from "./components/About-me";
import Skills from "./components/Skills";
import Work from "./components/work";



function App() {
  return (
    <div>
      <Navbar/>
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
