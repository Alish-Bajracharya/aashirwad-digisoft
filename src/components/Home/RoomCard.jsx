import React from "react";

const RoomCard = ({ image, title, price }) => {
  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 2 }}
    >
      <div className="relative group overflow-hidden">
        {/* Image with border inside */}
        <div className="relative">
          <img
            src={image}
            alt={title}
            className="w-full h-[450px] object-cover"
          />

          {/* Border inside image (layered) */}
          <div className="absolute inset-0 border-[6px] border-gray-100 pointer-events-none z-10"></div>

          {/* BOOK NOW Hover Layer */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 z-20">
            <button className="bg-white text-black px-6 py-2 rounded-full font-medium text-sm shadow-md hover:bg-gray-100">
              BOOK NOW
            </button>
          </div>
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



export default RoomCard;
