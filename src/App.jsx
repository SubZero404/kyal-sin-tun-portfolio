import About from "./components/About"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Skills from "./components/Skills"

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
    </div>
  )
}

export default App
