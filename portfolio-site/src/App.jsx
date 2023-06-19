import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import './App.css';

function App() {
  return (
    <div className="app">
        <div className="container">
          <div className="left-components">
          <Header />
          </div>
          <div className="right-components">
            <About />
            <Projects />
            <Contact />
            <Experience />
          </div>
        </div>
    </div>
  );
}

export default App;
