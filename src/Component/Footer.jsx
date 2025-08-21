import React from 'react'
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import MailIcon from '@mui/icons-material/Mail';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
function Footer() {
  return (
    <>
    <section id='footer' className=' scroll-mt-24 bg-black w-full text-white  mt-10'>
      <div className='w-[80%] mx-auto gap-y-8 flex-col md:flex-row flex justify-around  py-6'>
          <div> 
            <img className='w-[100px] rounded-full' src="mylogo.png" alt="" />
            <ul className='text-gray-400'>
                <li className='font-bold text-xl'>Home Address:</li>
                <li>Cox's Bazar,</li>
                <li>Bangladesh</li>
            </ul>
          </div>
        <div> <h1 className='font-bold text-xl text-gray-400 py-3'>Contuct</h1> 
         <ul className='list-none text-gray-500'>
         <li className='list-none'><AddIcCallIcon /> <span>01889412738</span></li>
         <li className='list-none'><MailIcon /> <span>hossensadek726@gmail.com</span></li>
    
       </ul>
      </div>
      <div>
   <ul> <li className='font-bold text-xl py-3 text-gray-400'>My survices</li>
    <div className='text-gray-500'>
          <li className='list-none '>Website create</li>
         <li className='list-none'>web page build</li>
         <li className='list-none'>Website Responsive Fix</li>
        <li className='list-none'> Dibuging </li>
        <li className='list-none'> Trunsitional Compunent Build</li>
        <li className='list-none'> Coding Problem Solving</li>
    </div>
   </ul>
      </div>
      </div>
      {/* icons */}
      <div className='w-[90%] flex md:w-[50%] justify-between items-center py-3 mx-auto gap-2 md:gap-3 w '>
  <a  className=' bg-gray-500 p-3 opacity-100 hover:opacity-80 transition-all rounded-full' href="https://www.facebook.com/i.ma.na.dzu">  <FacebookIcon /></a>
  <a  className=' bg-gray-500 p-3 opacity-100 hover:opacity-80 transition-all rounded-full' href="https://x.com/sadek726">   <XIcon /></a>
   <a   className=' bg-gray-500 p-3 opacity-100 hover:opacity-80 transition-all rounded-full ' href="https://instagram.com">    <InstagramIcon /></a>
   <a  className=' bg-gray-500 p-3 opacity-100 hover:opacity-80 transition-all rounded-full' href="https://wa.me/8801889412738" target='_blank'> <WhatsAppIcon /></a>
   <a  className=' bg-gray-500 p-3 opacity-100 hover:opacity-80 transition-all rounded-full' href=""><LinkedInIcon /></a>
   <a  className=' bg-gray-500 p-3 opacity-100 hover:opacity-80 transition-all rounded-full' href="https://github.com/Sadek-Hossen"><GitHubIcon /></a>
  
   
      </div>
     <hr className='text-gray-500 py-2' />
     <div>
        <h1 className='text-center py-3 text-gray-600'>© 2025 Sadek Hossen. All rights reserved.</h1>
     </div>
    </section>
    </>
  )
}

export default Footer