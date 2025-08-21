import React, { useState} from 'react';
import { Menu, X } from 'lucide-react';



function Header() {
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <>


   
    <header className="bg-[#002228] z-50 w-full text-white  top-0 left-0 shadow-md">
      <div className="max-w-7xl mx-auto px-8 md:px-20 flex justify-between   items-center">
        {/* Logo */}
        <div className='flex items-center '>
          <img src="mylogo.png" alt="Logo" className="h-20 w-20" />
            SH Programmer
        </div>


        {/* Desktop Navigation */}
        <nav className="cd hidden md:flex gap-7 text-sm font-medium">

         <a href="#home">Home</a>
         <a href="#about">About me</a>
         <a href="#footer">Contruct me</a>
         <a href="#skills">Skills</a>
         
        
        </nav>


        {/* Buttons */}
        


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
         <a onClick={()=>setMenuOpen(false)} href="#home">Home</a>
         <a onClick={()=>setMenuOpen(false)} href="#about">About me</a>
         <a onClick={()=>setMenuOpen(false)} href="#footer">Contruct me</a>
         <a onClick={()=>setMenuOpen(false)} href="#skills">Skills</a>
      

            
        
          </nav>
        </div>
      )}

      
    </header>



    </>
  );
}


export default Header;


