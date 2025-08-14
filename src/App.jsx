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
import Blog from './Component/Blog'

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {

  useEffect(() => {
    AOS.init({ duration: 1500, once: true }); // Animation duration and only once
  }, []);

  return (
    <>
      <div className="scroll-smooth">
        <div data-aos="fade-up"><Header /></div>
        <div data-aos="fade-up"><Hero /></div>
        <div data-aos="fade-up"><Logo /></div>
        <div data-aos="fade-up"><About /></div>
        <div data-aos="fade-up"><ProjectCrasol /></div>
        <div data-aos="fade-up"><Contruct /></div>
        <div data-aos="fade-up"><Skills /></div>
        <div data-aos="fade-up"><Review /></div>
         <div data-aos="fade-up"><Blog /></div>
        <div data-aos="fade-up"><Footer /></div>
       
      </div>
    </>
  )
}

export default App