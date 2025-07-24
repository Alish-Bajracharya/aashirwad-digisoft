import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import restaurantImg from "../../assets/restaurant.png";
import spaImg from "../../assets/spa.png";
import fitnessImg from "../../assets/fitness.png";
import poolImg from "../../assets/pool.png";

const facilities = [
  {
    name: "The Restaurant",
    image: restaurantImg,
  },
  {
    name: "Spa Center",
    image: spaImg,
  },
  {
    name: "Fitness Center",
    image: fitnessImg,
  },
  {
    name: "Swimming Pool",
    image: poolImg,
  },
];

const FacilityShowcase = () => {
  const [hovered, setHovered] = useState(facilities[0]);

  return (
    <div className="bg-[#fddfb6] py-32 flex items-center justify-center px-8">
      <div className="flex gap-8 items-start relative">
        {/* Left Thumbnail Image */}
        <div className="absolute bottom-0 -left-72 shadow-lg">
          <AnimatePresence mode="wait">
            <motion.img
              key={hovered.name + "-thumb"}
              src={hovered.image}
              alt={`${hovered.name} thumbnail`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="w-[270px] h-48 object-cover"
            />
          </AnimatePresence>
        </div>

        {/* Right Image with Border Underlayer */}
        <div className="relative w-[600px] h-[650px]">
          {/* Border Behind Layer */}
          <div className="absolute top-5 left-5 w-full h-full border border-black opacity-40 z-0"></div>

          {/* Image Layer */}
          <div className="relative z-10 w-full h-full overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={hovered.name + "-main"}
                src={hovered.image}
                alt={hovered.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>
          </div>
        </div>

        {/* Facility Text List */}
        <div className="flex flex-col gap-16 ml-20 text-[#a89177] text-3xl font-light font-serif mt-40">
          {facilities.map((item, index) => (
            <button
              key={index}
              onMouseEnter={() => setHovered(item)}
              className="text-left hover:text-[#6c5c47] transition-colors"
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FacilityShowcase;
