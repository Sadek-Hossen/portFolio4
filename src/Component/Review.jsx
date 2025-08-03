import React, { useRef } from 'react';

const reviews = [
  {
    name: "John A. (USA)",
    stars: 3,
    img: "rvw (2).png",
    message: "Sadek delivered the project ahead of schedule. Very professional and talented developer!",
    date: "30/12/2024"
  },
  {
    name: "Ayesha R. (Pakistan)",
    stars: 4,
    img: "rvw (4).png",
    message: "He understood my requirements perfectly and created a responsive website just as I wanted.",
    date: "10/01/2025"
  },
  {
    name: "Mohammed I. (UAE)",
    stars: 5,
    img: "rvw (6).png",
    message: "Excellent work with clean code and fast delivery. Highly recommended!",
    date: "12/12/2024"
  },
  {
    name: "Sophia L. (UK)",
    stars: 5,
    img: "rvw (7).png",
    message: "I loved the UI design. Sadek is creative and a great communicator.",
    date: "20/10/2024"
  },
  {
    name: "Rohan M. (India)",
    stars: 4,
    img: "rvw (8).png",
    message: "I hired him for a React project. He did a fantastic job and stayed within budget.",
    date: "02/05/2024"
  },
  {
    name: "Carlos V. (Spain)",
    stars: 5,
    img: "rvw (9).png",
    message: "Great experience! He even helped me fix bugs after delivery.",
    date: "02/06/2024"
  },
  {
    name: "David K. (Germany)",
    stars: 4,
    img: "rvw (11).png",
    message: "Highly skilled in frontend. He worked with Tailwind CSS and React like a pro!",
    date: "01/02/2024"
  }
];

function ReviewSlider() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = container.offsetWidth * 0.8; // scroll by 80% of container

    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-[95%] md:w-[85%] mx-auto py-10 bg-black text-white relative border-4 border-gray-300">
      <h2 className="text-center text-3xl font-bold mb-6">Client Reviews</h2>

      <div className="relative">
        {/* Left Button */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 hover:bg-gray-600 p-2 rounded-full z-10"
        >
          ◀
        </button>

        {/* Reviews */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scroll-smooth gap-4 px-12 pb-4 no-scrollbar"
        >
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl px-5 py-4 flex-shrink-0 
              w-[90%] sm:w-[60%] md:w-[40%] lg:w-[25%] xl:w-[20%] transition duration-300"
            >
              <div className="flex gap-3 items-center md:py-3">
                <img className="w-[50px] rounded-full" src={review.img} alt={review.name} />
                <h1>{review.name}</h1>
              </div>
              <div className="text-sm font-semibold text-gray-300">
             <p className=''>Date: {review.date}</p>
              </div>
              <span>{'⭐️'.repeat(review.stars)}</span>
              <p className="text-gray-400 md:pt-2">"{review.message}"</p>
              
           
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 hover:bg-gray-600 p-2 rounded-full z-10"
        >
          ▶
        </button>
      </div>
    </div>
  );
}

export default ReviewSlider;