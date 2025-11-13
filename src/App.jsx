import About from "./components/About"
import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Logoline from "./components/LogoLine"
import Navbar from "./components/Navbar"
import Parallax from "./components/Parallax"
import Projects from "./components/Projects"
import Skills from "./components/Skills"

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Logoline/>
      <Projects/>
      <Parallax/>
      <Contact/>
    </div>
  )
}

export default App
