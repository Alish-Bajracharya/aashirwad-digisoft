import React, { useState, useEffect, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useSwipeable } from "react-swipeable";
import { motion, AnimatePresence } from "framer-motion";

const rooms = [
  {
    image: "https://creativelayers.net/themes/swiss-resort-html/img/cards/rooms/3/1.png",
    title: "Luxury Suite Room",
    price: 499,
  },
  {
    image: "https://creativelayers.net/themes/swiss-resort-html/img/cards/rooms/3/2.png",
    title: "Family Room",
    price: 399,
  },
  {
    image: "https://creativelayers.net/themes/swiss-resort-html/img/cards/rooms/3/3.png",
    title: "Twin Room",
    price: 299,
  },
];

const RoomCard = ({ image, title, price }) => {
  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8 }}
    >
      <div className="relative group overflow-hidden border border-gray-100">
        <img
          src={image}
          alt={title}
          className="w-full h-[550px] object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300">
          <button className="bg-white text-black px-6 py-2 rounded-full font-medium text-sm shadow-md hover:bg-gray-100">
            BOOK NOW
          </button>
        </div>
      </div>

      <div className="mt-4 text-white">
        <div className="flex items-center justify-between mb-1">
          <h3 className="text-xl font-serif">{title}</h3>
          <span className="text-sm font-medium">${price} / NIGHT</span>
        </div>
        <p className="text-sm tracking-wide">
          30M2 &nbsp; · &nbsp; 2 ADULTS &nbsp; · &nbsp; 1 CHILDREN
        </p>
      </div>
    </motion.div>
  );
};

const RoomsSection = () => {
  const [index, setIndex] = useState(0);
  const [hovering, setHovering] = useState(false);
  const maxIndex = rooms.length - 2;

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    trackMouse: true,
  });

  // Auto-play every 5 seconds, pause on hover
  useEffect(() => {
    if (!hovering) {
      const interval = setInterval(() => {
        setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [hovering, index]);

  return (
    <section
      className="bg-[#0e2b29] py-20 relative overflow-hidden"
      {...swipeHandlers}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-12 text-white">
          <div>
            <p className="uppercase text-sm tracking-wide text-gray-300 mb-1">EXPLORE</p>
            <h2 className="text-4xl font-serif">Rooms & Suites</h2>
          </div>
          <button className="flex items-center gap-2 text-sm border-white hover:opacity-70 transition">
            BOOK NOW
            <svg
              width="50"
              height="30"
              viewBox="0 0 50 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M35.8 28.0924C43.3451 28.0924 49.4616 21.9759 49.4616 14.4308C49.4616 6.88577 43.3451 0.769287 35.8 0.769287C28.255 0.769287 22.1385 6.88577 22.1385 14.4308C22.1385 21.9759 28.255 28.0924 35.8 28.0924Z"
                stroke="#fff"
              />
              <path
                d="M33.4808 10.2039L32.9985 10.8031L37.2931 14.2623H0.341553V15.0315H37.28L33.0008 18.4262L33.4785 19.0285L39 14.6492L33.4808 10.2039Z"
                fill="#fff"
              />
            </svg>
          </button>
        </div>

        {/* Room Cards */}
        <AnimatePresence mode="wait">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-10">
            {rooms.slice(index, index + 2).map((room, i) => (
              <RoomCard key={i} {...room} />
            ))}
          </div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="absolute bottom-8 left-80">
        <button
          onClick={handlePrev}
          className="p-3 border border-white text-white rounded-full hover:bg-white hover:text-black transition"
        >
          <FaArrowLeft />
        </button>
      </div>
      <div className="absolute bottom-8 right-80">
        <button
          onClick={handleNext}
          className="p-3 border border-white text-white rounded-full hover:bg-white hover:text-black transition"
        >
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
};

export default RoomsSection;
