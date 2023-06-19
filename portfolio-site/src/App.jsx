import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import './App.css';

function App() {
  const isSmallScreen = window.matchMedia("(max-width: 1000px)").matches;

  return (
    <div className="app">
      {isSmallScreen ? (
        <div>
          <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Navbar />
        </div>
      ) : (
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
      )}
    </div>
  );
}

export default App;
