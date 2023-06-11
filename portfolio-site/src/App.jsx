import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import './App.css'


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/skills" element={<Skills />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
      <Navbar />
    </div>
  )
}

export default App
