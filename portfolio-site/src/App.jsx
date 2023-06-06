import Header from "./components/Header"
import Navbar from "./components/Navbar"
import About from "./components/About"
import Skills from "./components/Skills"
import './App.css'
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/skills" element={<Skills/>}/>
      </Routes>
      <Navbar />
    </div>
  )
}

export default App
