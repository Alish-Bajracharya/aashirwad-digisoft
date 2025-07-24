import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const experiences = [
  {
    title: "Bike Rides",
    price: "$280 /Person",
    image: "https://creativelayers.net/themes/swiss-resort-html/img/cards/1/1.png",
  },
  {
    title: "Golf",
    price: "$280 /Person",
    image: "https://creativelayers.net/themes/swiss-resort-html/img/cards/1/2.png",
  },
  {
    title: "Snowsports",
    price: "$280 /Person",
    image: "https://creativelayers.net/themes/swiss-resort-html/img/cards/1/3.png",
  },
  {
    title: "Climbing",
    price: "$280 /Person",
    image: "https://creativelayers.net/themes/swiss-resort-html/img/cards/1/4.png",
  },
  {
    title: "Swimming",
    price: "$220 /Person",
    image: "https://creativelayers.net/themes/swiss-resort-html/img/cards/1/6.png",
  },
];

const Experiences = () => {
  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">
            There's so much to discover
          </p>
          <h2 className="text-6xl font-light mt-5 leading-normal tracking-wider text-gray-900">
            Unforgettable Experience
          </h2>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="mySwiper"
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {experiences.map((exp, index) => (
            <SwiperSlide key={index}>
              <div className="relative overflow-hidden group rounded-sm">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-[450px] object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute text-center justify-center bottom-5 left-36 text-white drop-shadow-md">
                  <h3 className="text-lg font-medium">{exp.title}</h3>
                  <p className="text-sm">{exp.price}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <style>{`
          .swiper-pagination-bullets {
            bottom: -30px !important;
          }
        `}</style>
      </div>
    </div>
  );
};

export default Experiences;
