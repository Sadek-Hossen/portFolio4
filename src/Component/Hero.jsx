import React, { useState } from "react";
import AccordionUsage from "./Accrroding";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  const imgInfo = [
    { img: "/Me.jpg" },
    { img: "/Me.png" },
    { img: "/cruton.jpg" },
    { img: "/ami.jpeg" },
    { img: "/mylogo.png" },
  ];

  const [CurrentIndex, SetCurrentIndex] = useState(0);
  const prevImgInfo = () => {
    SetCurrentIndex((prevImg) =>
      prevImg === 0 ? imgInfo.length - 1 : prevImg - 1
    );
  };
  const nextImg = () => {
    SetCurrentIndex((prevImg) =>
      prevImg === imgInfo.length - 1 ? 0 : prevImg + 1
    );
  };
  const { img } = imgInfo[CurrentIndex];

  return (
    <section id="home" className="mb-15 ">
      <div className=" md:flex justify-around items-center gap-6 md:px-10 mt-20  mx-auto w-[95%] md:w-[90%]">
        <div className="bg-[url(proBg.png)] bg-center py-12 rounded-full mx-auto  md:w-1/2">
          <div className="flex justify-arround items-center ">
            <button
              onClick={prevImgInfo}
              className="p-2 bg-gray-500 rounded-3xl border hover:bg-gray-300 transition-all"
            >
              ⬅️
            </button>
            <img
              src={img}
              alt=""
              className="mx-auto rounded-3xl w-[70%] md:w-[90%]  "
            />
            <button
              onClick={nextImg}
              className="p-2  bg-gray-500 rounded-3xl border hover:bg-gray-400 transition-all "
            >
              ➡️
            </button>
          </div>
        </div>
        <div>
          <div className="text-white px-1  md:w-1/2 mx-auto">
            {" "}
            <h1 className="text-blue-400 font-semibold font-mono text-xl md:text-3xl italic">
              Hi There{" "}
            </h1>
            <span className="font-bold text-2xl md:text-6xl text-[#4200bc] ">
              <TypeAnimation
                sequence={["I am Sadek Hossen", 2000, "", 500]} // টাইপ, অপেক্ষা, ডিলিট, অপেক্ষা
                speed={30}
                repeat={Infinity}
              />
            </span>
            <p className="py-5 text-[16px] md:text-2xl text-blue-300">
              Front End Expert Web Developer
            </p>
          </div>
          <div>
            {" "}
            <p className="text-sm px-3 md:text-3xl text-gray-400  ">
              I design and build modern, responsive, and user-friendly websites.
            </p>
          </div>
        </div>
      </div>

      <div className=" md:mt-[100px] mt-[50px]">
        <AccordionUsage />
      </div>
    </section>
  );
}

export default Hero;
