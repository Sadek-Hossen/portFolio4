
import './App.css'
import Header from "./Component/Header"
import Hero from './Component/Hero'
import About from './Component/About'
import Contruct from './Component/Contruct'
import Skills from './Component/Skills'
import Logo from './Component/Logo'
import Review from './Component/Review'
import Footer from './Component/Footer'
import ProjectCrasol from './Component/ProjectCrasol'
function App() {

  return (
    <>
      <div className="scroll-smooth">
     <Header />
     <Hero />
     <Logo />
     <About />
      <ProjectCrasol />
     <Contruct />
     <Skills />
   
     <Review />
     <Footer />
     </div>

  

    </>
  )
}

export default App
