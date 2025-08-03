import React, { useState } from 'react'
import CheckIcon from '@mui/icons-material/Check';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
function Skills() {
  const slideInpo =[
    {
      img:"naikWeb.png",
      hadign:"DISIAST/IO",
      clyient:"Pakistani Client",
      link:"https://assignment2-in-reactjs.netlify.app/"

    },
    {
      img:"image.png",
      hadign:"nufruit",
      clyient:"Indian Client",
      link:"https://sadek-hossen.github.io/Css-paid/"
    },
    {
      img:"image copy.png",
      hadign:"WIZIA",
      clyient:"Indian Client",
      link:"https://r-assignment1.netlify.app/"
    },
    {
      img:"image copy 2.png",
      hadign:"Dagic",
      clyient:"Indian Client",
      link:"https://reactjs-first-froject.netlify.app/"
    },
    {
      img:"image copy 3.png",
      hadign:"Natural wiki",
      clyient:" rusian Client",
      link:"https://sadek-hossen.github.io/asignment-3-in-css/"
    },
  ];
const [animationClass, setAnimationClass] = useState('opacity-100 translate-x-0');
  const [currenIndex, setCurrentIndex] = useState(0);
 const previus = () => {
  setAnimationClass('opacity-0 -translate-x-10'); // animate out
  setTimeout(() => {
    setCurrentIndex((prev) => (prev === 0 ? slideInpo.length - 1 : prev - 1));
    setAnimationClass('opacity-100 translate-x-0'); // animate in
  }, 500);
};

const nextprevius = () => {
  setAnimationClass('opacity-0 translate-x-10'); // animate out
  setTimeout(() => {
    setCurrentIndex((prev) => (prev === slideInpo.length - 1 ? 0 : prev + 1));
    setAnimationClass('opacity-100 translate-x-0'); // animate in
  }, 500);
};
  const {img,hadign,clyient,link} = slideInpo [currenIndex]
  return (
  <>
  <div id='skills' className='md:flex justify-between  items-center w-[80%]  mx-auto gap-4 my-7'>

    <div className='flex flex-col bg-gray-500 rounded-2xl mb-3 h-[600px] px-7 md:w-1/2 '>
        <h1  className='text-center font-bold mx-auto py-3 text-3xl font-sans'>My Skills</h1>

        <div className='flex flex-col gap-y-3 '>
          <div>
          <div className='flex    items-center gap-3 bg-blue-300 px-3 py-2 w-full rounded-2xl  '> <CheckIcon  /><h1> HTML</h1></div>
        </div>
        <div>
          <div className='flex   items-center gap-3 bg-blue-300 px-3 py-2 w-full rounded-2xl  '> <CheckIcon  /><h1>CSS</h1></div>
        </div>
        <div>
          <div className='flex   items-center gap-3 bg-blue-300 px-3 py-2 w-full rounded-2xl  '> <CheckIcon  /><h1> Tailwind CSS</h1></div>
        </div>
        <div>
          <div className='flex   items-center gap-3 bg-blue-300 px-3 py-2 w-full rounded-2xl  '> <CheckIcon  /><h1> Javascript</h1></div>
        </div>
        <div>
          <div className='flex   items-center gap-3 bg-blue-300 px-3 py-2 w-full rounded-2xl  '> <CheckIcon  /><h1> React JS</h1></div>
        </div>
        <div>
          <div className='flex   items-center gap-3 bg-blue-300 px-3 py-2 w-full rounded-2xl  '> <CheckIcon  /><h1> Node Js</h1></div>
        </div>
        <div>
          <div className='flex   items-center gap-3 bg-blue-300 px-3 py-2 w-full rounded-2xl  '> <CheckIcon  /><h1> Dibuging</h1></div>
        </div>
        <div>
          <div className='flex   items-center gap-3 bg-blue-300 px-3 py-2 w-full rounded-2xl  '> <CheckIcon  /><h1> Responsive </h1></div>
        </div>
        </div>
    </div>
    <div  className='flex bg-gray-500 rounded-2xl justify-center items-center gap-2 h-[600px] md:w-1/2 '>
<div><button className='p-3 bg-gray-400 rounded-2xl  ' onClick={previus}> <ArrowBackIosIcon /></button> </div>
<div   className={`transition-all duration-700 ease-in-out transform ${animationClass}`}>
  <div>
    <h1 className='text-center font-bold text-white text-2xl pb-3'>Current Project</h1>
    <img className='h-[300px]' src={img} alt="" />
    <h1 className='font-bold text-2xl text-center text-white'>  {hadign} </h1>
    <p className='text-center text-white'> {clyient} </p>
    <a className='text-center  text-white border-b' href={link}>Link</a>
  </div>
  
 </div>

<div> <button className='p-3 bg-gray-400 rounded-2xl  ' onClick={nextprevius}>  <ArrowForwardIosIcon />  </button> </div>
    </div>

  </div>
  </> 
  )
}

export default Skills