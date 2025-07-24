import React from "react";

const BookNowButton = () => {
  return (
    <button className="flex items-center gap-3 py-5 mb-5 group">
      {/* Icon Wrapper */}
      <span className="w-[50px] h-[30px] inline-block">
        <svg
          width="50"
          height="30"
          viewBox="0 0 50 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-300 group-hover:translate-x-1"
        >
          <path
            d="M35.8 28.0924C43.3451 28.0924 49.4616 21.9759 49.4616 14.4308C49.4616 6.88577 43.3451 0.769287 35.8 0.769287C28.255 0.769287 22.1385 6.88577 22.1385 14.4308C22.1385 21.9759 28.255 28.0924 35.8 28.0924Z"
            stroke="#122223"
          ></path>
          <path
            d="M33.4808 10.2039L32.9985 10.8031L37.2931 14.2623H0.341553V15.0315H37.28L33.0008 18.4262L33.4785 19.0285L39 14.6492L33.4808 10.2039Z"
            fill="#122223"
          ></path>
        </svg>
      </span>

      {/* Text */}
      
      <span className="text-base font-medium text-gray-900 tracking-wide group-hover:underline">
        Book now
      </span>
    </button>
  );
};

export default BookNowButton;
