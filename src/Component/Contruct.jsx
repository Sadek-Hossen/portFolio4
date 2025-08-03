import React, { useState } from 'react'

function Contruct() {
  const [massage,setmassage] = useState(false);


  return (
 <div className='text-white'>
 <section className='w-[80%] mx-auto'>
<div className='flex justify-center items-center'>
    <button className='bg-blue-400 p-3 rounded-full text-center my-4 text-black font-semibold transition-all duration-300 ' onClick={()=>setmassage(!massage)}>{massage ? "Learn end^"  : "Learn More About Me"}</button>
</div>
{massage && (
  <p className=''> why you create a website by me,,, I Know how to make a beautifull website , I know how to add any functual compunent in website , and I know how to build a profetional website, </p>
)}
 </section>
 </div>
  )
}

export default Contruct