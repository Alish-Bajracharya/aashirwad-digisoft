import React, { useState } from "react";
import { FaWifi, FaShuttleVan, FaTv, FaCoffee, FaTshirt, FaBroom } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

import leftImg from "../../assets/leftImg.png";
import rightImg from "../../assets/rightImg.png";

const facilities = [
  { name: "Wifi & Internet", icon: <FaWifi size={28} />, image: leftImg },
  { name: "Airport Transfer", icon: <FaShuttleVan size={28} />, image: rightImg },
  { name: "Smart TV", icon: <FaTv size={28} />, image: leftImg },
  { name: "Breakfast", icon: <FaCoffee size={28} />, image: rightImg },
  { name: "Laundry", icon: <FaTshirt size={28} />, image: leftImg },
  { name: "Housekeeper", icon: <FaBroom size={28} />, image: rightImg },
];

const Services = () => {
  const [hovered, setHovered] = useState(facilities[0]);

  return (
    <div className="bg-white px-10 py-32 min-h-screen flex justify-center items-center">
      <div className="flex flex-col gap-12 max-w-6xl w-full">
        {/* Heading and Icons */}
        <div className="text-center">
          <p className="text-sm tracking-widest text-gray-400 uppercase mb-2">Our Services</p>
          <h2 className="text-5xl font-light text-gray-800 py-5 mb-16">Hotel Facilities</h2>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-10 items-center  justify-center">
            {facilities.map((facility, index) => (
              <div
                key={index}
                onMouseEnter={() => setHovered(facility)}
                className="flex flex-col items-center cursor-pointer hover:text-black text-gray-600 transition"
              >
                <div className="text-4xl mb-2">{facility.icon}</div>
                <div className="text-2xl text-center font-light">{facility.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Subheading + CTA with side images */}
        <div className="relative flex items-center justify-center text-center">
          {/* Left Side Image */}
          <AnimatePresence mode="wait">
            <motion.img
              key={hovered.name + "-left"}
              src={hovered.image}
              alt="Left Side"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="absolute top-10 -left-96 w-[500px] h-[650px] object-cover hidden md:block"
            />
          </AnimatePresence>

          {/* Center Text */}
          <div className="z-10 mt-48">
            <p className="text-sm tracking-widest text-gray-700 uppercase mb-1">Meeting & Events</p>
            <h3 className="text-6xl font-medium tracking-wider text-gray-900 mb-6 leading-normal">
              A Warm, Exquisite, <br />
              Practical And <br />
              Urban Space.
            </h3>
            <button className="px-6 py-2 bg-[#fddfb6] text-black text-sm tracking-wide hover:bg-[#fcd099] transition-all">
              → Find Out More
            </button>
          </div>

          {/* Right Side Image */}
          <AnimatePresence mode="wait">
            <motion.img
              key={hovered.name + "-right"}
              src={hovered.image}
              alt="Right Side"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.4 }}
              className="absolute top-10 -right-96 w-[500px] h-[650px] object-cover hidden md:block"
            />
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Services;
