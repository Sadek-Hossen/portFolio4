import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

 function AccordionUsage() {
  return (
    <div className='grid md:grid-cols-2 mx-auto w-[80%] gap-[80px] mt-3'>
      
      {/* right side */}
        <div className=' bg-gray-600 p-5 rounded-2xl'>
              <div>
                <h1 className='text-white font-semibold md:text-2xl text-xl py-3 md:py-2  mt-10 font-stretch-110% mask-b-from-neutral-950'>Here are some  special simple functual projects I made with my own hands.</h1>
              </div>
      <Accordion style={{ backgroundColor: "#2921CC" , color:"white"}} >
        <AccordionSummary   className='bg-amber-500'
          expandIcon={<ExpandMoreIcon className='text-white' />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span" ><p className='font-bold '>Text to Voice and Translator</p></Typography>
        </AccordionSummary>
        <AccordionDetails className=' bg-red-300'>
      <a href="https://speek-eight.vercel.app/">
         <div className='flex justify-between items-center'>
          <div  className='text-blue-600 font-bold border-b'> Translator web app </div>
          <div className='text-blue-600 font-bold border-b'><span>Try  your  Text </span></div>
        </div>
        </a> 
        </AccordionDetails>
      </Accordion>

      {/* seceond */}

      <Accordion style={{ backgroundColor: "#8C8CDB" , color:"white"}} >
        <AccordionSummary   className='bg-amber-500'
          expandIcon={<ExpandMoreIcon className='text-white' />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span" ><p className='font-bold '> Calculator web app</p></Typography>
        </AccordionSummary>
        <AccordionDetails className=' bg-[#B6D0D6] '>
      <a href="https://sadek-hossen.github.io/calcolator/">
         <div className='flex justify-between items-center'>
          <div  className='text-blue-600 font-bold border-b'> Calculator web app </div>
          <div className='text-blue-600 font-bold border-b'><span>Try  your  Counts </span></div>
        </div>
        </a> 
        </AccordionDetails>
      </Accordion>

      {/* therd section */}

      <Accordion style={{ backgroundColor: "#3C7EB0" , color:"white"}} >
        <AccordionSummary   className='bg-amber-500'
          expandIcon={<ExpandMoreIcon className='text-white' />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span" ><p className='font-bold '>To Do app Web</p></Typography>
        </AccordionSummary>
        <AccordionDetails className=' bg-[#ED8A8A] '>
      <a href="https://to-do-app-asignment-2-js.vercel.app/">
         <div className='flex justify-between items-center'>
          <div  className='text-blue-600 font-bold border-b'> To Do web app </div>
          <div className='text-blue-600 font-bold border-b'><span>Try  your  To Do  </span></div>
        </div>
        </a> 
        </AccordionDetails>
      </Accordion>


      {/* forth section */}
      <Accordion style={{ backgroundColor: "#D44A4A" , color:"white"}} >
        <AccordionSummary   className='bg-amber-500'
          expandIcon={<ExpandMoreIcon className='text-white' />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span" ><p className='font-bold '>Blance web app</p></Typography>
        </AccordionSummary>
        <AccordionDetails className=' bg-[#ED8A8A] '>
      <a href="https://bank-by-react.netlify.app/">
         <div className='flex justify-between items-center'>
          <div  className='text-blue-600 font-bold border-b'> Blance web app </div>
          <div className='text-blue-600 font-bold border-b'><span>Try  your  Blance  </span></div>
        </div>
        </a> 
        </AccordionDetails>
      </Accordion>

        </div>

{/* left side */}

    <div className=' bg-gray-500 p-5 rounded-2xl'>
   
     <div>
                <h1 className='text-white font-semibold md:text-2xl text-xl py-3 md:py-2  mt-10 font-stretch-110% mask-b-from-neutral-950'>Here are some special Website  projects I made with my own hands.</h1>
              </div>
              {/* first project in left side */}
      <Accordion style={{ backgroundColor: "#2921CC" , color:"white"}} >
        <AccordionSummary   className='bg-amber-500'
          expandIcon={<ExpandMoreIcon className='text-white' />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span" ><p className='font-bold '>Bank website</p></Typography>
        </AccordionSummary>
        <AccordionDetails className=' bg-red-300'>
      <a href="https://your-bank-xi.vercel.app/">
         <div className='flex justify-between items-center'>
          <div  className='text-blue-600 font-bold border-b'> Bank web app </div>
          <div className='text-blue-600 font-bold border-b'><span>See Website</span></div>
        </div>
        </a> 
        </AccordionDetails>
      </Accordion>
      
      {/* seceond  */}

      <Accordion style={{ backgroundColor: "#8C8CDB" , color:"white"}} >
        <AccordionSummary   className='bg-amber-500'
          expandIcon={<ExpandMoreIcon className='text-white' />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span" ><p className='font-bold '>It Support  website</p></Typography>
        </AccordionSummary>
        <AccordionDetails className=' bg-[#B6D0D6] '>
      
      <a href="https://it-support-umber.vercel.app/">
         <div className='flex justify-between items-center'>
          <div  className='text-blue-600 font-bold border-b'> IT  web app </div>
          <div className='text-blue-600 font-bold border-b'><span>See Website</span></div>
        </div>
        </a> 
        </AccordionDetails>
      </Accordion>

      {/* therd */}
      <Accordion style={{ backgroundColor: "#3C7EB0" , color:"white"}} >
        <AccordionSummary   className='bg-amber-500'
          expandIcon={<ExpandMoreIcon className='text-white' />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span" ><p className='font-bold '>Hotel bussens  website</p></Typography>
        </AccordionSummary>
        <AccordionDetails className=' bg-[#ED8A8A]'>
      <a href="https://sadek-hossen.github.io/Css-paid-assignment-2/">
         <div className='flex justify-between items-center'>
          <div  className='text-blue-600 font-bold border-b'> Hotel  web app </div>
          <div className='text-blue-600 font-bold border-b'><span>See Website</span></div>
        </div>
        </a> 
        </AccordionDetails>
      </Accordion>


        {/* forth section */}
      <Accordion style={{ backgroundColor: "#D44A4A" , color:"white"}} >
        <AccordionSummary   className='bg-amber-500'
          expandIcon={<ExpandMoreIcon className='text-white' />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span" ><p className='font-bold '>Movie web app</p></Typography>
        </AccordionSummary>
        <AccordionDetails className=' bg-[#ED8A8A] '>
      <a href="https://sadek-hossen.github.io/Css-paid-project-02/#">
         <div className='flex justify-between items-center'>
          <div  className='text-blue-600 font-bold border-b'> Movie web app </div>
          <div className='text-blue-600 font-bold border-b'><span>See website  </span></div>
        </div>
        </a> 
        </AccordionDetails>
      </Accordion>

        </div>

      
    </div>
  );
}

export default AccordionUsage
