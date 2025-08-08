import React, { useEffect, useState } from "react";

// Hero Items
const heroInfo = [
  { img: "proj (1).png" },
  { img: "proj (2).png" },
  { img: "proj (3).png" },
  { img: "proj (4).png" },
  { img: "proj (5).png" },
  { img: "proj (6).png" },
  { img: "proj (7).png" },
  { img: "proj (8).png" },
  { img: "proj (9).png" },
  { img: "proj (10).png" },
  { img: "proj (11).png" },
  { img: "proj (13).png" },
  { img: "proj (14).png" },
  { img: "proj (15).png" },
  { img: "proj (16).png" },
  { img: "proj (17).png" },
];

function ProjectCrasol() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === heroInfo.length - 1 ? 0 : prev + 1
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-[85%] mb-10 mx-auto mt-10 md:mt-20 overflow-hidden">
        <div className="w-[500px] mx-auto my-10 bg-gray-600 rounded-2xl py-4 px-4"><h1 className="text-center font-semibold text-2xl text-white">Current Project Compunents</h1></div>
      <div className="relative w-full md:h-[400px] h-[200px] overflow-hidden border-2 border-white">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            width: `${heroInfo.length * 5}%`,
          }}
        >
          {heroInfo.map((slide, index) => (
            <img
              key={index}
              src={slide.img}
              alt={`Slide ${index}`}
              className=" w-full object-cover"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectCrasol;