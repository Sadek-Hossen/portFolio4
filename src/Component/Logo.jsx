import React from 'react';
import Marquee from 'react-fast-marquee';

const LogoCarousel = () => {
  const logos = [
    { img: 'logo (1).jpg' },
    { img: 'logo (1).png' },
     { img: 'logo (5).png' },
    { img: 'logo (2).png' },
     { img: 'logo (7).png' },
    { img: 'logo (3).png' },
    { img: 'logo (4).png' },
    { img: 'logo (6).png' },
    { img: 'logo (7).png' },
  ];

  return (
    <section className="bg-gray-400 py-6 w-[80%] my-5 mx-auto">
      <div className="max-w-6xl mx-auto ">
        <Marquee
          direction="right"
          speed={30}
          gradient={false}
          pauseOnHover={true}
          loop={0}
        >
          {logos.map((item, idx) => (
            <div
              key={idx}
              className="md:w-40  w-20 h-10 md:h-20 mx-4 flex items-center justify-center shadow-md"
            >
              <img
                src={item.img}
                alt={`logo-${idx}`}
                className="h-full rounded-lg object-contain"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default LogoCarousel;
