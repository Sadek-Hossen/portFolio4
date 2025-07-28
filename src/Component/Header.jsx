import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';


function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  //dark mode
  const [light , setligt ]= useState("black")

  const outlight = ()=>{
    setligt(light==="black"  ? "white":"black")
  }
  const darkset = (light==="black" ? "White" : "Dark")

  
  

  // const navLinks = ['Home', 'About me', 'Contuct '];


  return (
    <>
    <body style={{backgroundColor:light, color:"black"}}>

    </body>
    <header className="bg-[#002228] w-full text-white fixed top-0 left-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-5 py-4 flex justify-between items-center">
        {/* Logo */}
        <div>
          <img src="mylogo.png" alt="Logo" className="h-10" />
        </div>


        {/* Desktop Navigation */}
        <nav className="cd hidden md:flex gap-7 text-sm font-medium">

         <a href="#home">Home</a>
         <a href="#about">About me</a>
         <a href="#contruct">Contruct me</a>
         <a href="#skills">Skills</a>
         
        
        </nav>


        {/* Buttons */}
        <div className="hidden md:flex gap-3">
          <button className="bg-[#0FF1F6] text-black rounded-full px-4 py-1 hover:bg-[#62b5b5] transition-all">
            Sign in
          </button>
          <button onClick={outlight} className="border border-white rounded-full px-4 py-1 hover:bg-[#62b5b5] transition-all">
          {darkset}
          </button>
        </div>


        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>


      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#002228] px-5 pb-4">
          <nav className="flex flex-col gap-4 text-center font-medium">
       <a href="#home">Home</a>
         <a href="#about">About me</a>
         <a href="#contruct">Contruct me</a>
         <a href="#skills">Skills</a>


            <button onClick={outlight} className="bg-[#0FF1F6] text-black rounded-full px-4 py-1 hover:bg-[#62b5b5] transition-all">
              {darkset}
            </button>
            <button className="border border-white rounded-full px-4 py-1 hover:bg-[#62b5b5] transition-all">
              Contact Us
            </button>
          </nav>
        </div>
      )}
    </header>
    </>
  );
}


export default Header;


