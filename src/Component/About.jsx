import React from 'react'

function About() {
  return (
    <>
    <div id='about' className=' scroll-mt-24  bg-transparent w-[80%] md:flex mx-auto justify-around gap-10 '>
      
         
           <div  className='flex justify-center items-center'>
            <img className='rounded-2xl' src="amih.jpg" alt="" />
           </div>
           <div className='text-gray-400 text-xl  '>
          <h1 className='text-2xl font-mono text-blue-300 py-4'>About Me</h1>
          <p> <span className='text-4xl py-4 font-bold text-blue-400'>Me Sadek Hossen</span> <br />I'm a creative Front-End Web Developer with strong skills in <span className='text-xl font-bold text-blue-300 font-mono'>HTML, CSS, Tailwind CSS, JavaScript, and ReactJS</span>. I enjoy building responsive and modern websites with clean design. I'm passionate about learning new technologies and improving my development skills to build better user experiences. I always focus on writing clean, efficient, and maintainable code.</p>
          <div><img src="about.png" alt=""  className='p-4 rounded-3xl'/></div>
           </div>
         </div>
    

    </>

  
  )
}

export default About