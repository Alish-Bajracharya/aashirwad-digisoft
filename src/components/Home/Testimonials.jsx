import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    quote:
      "Some places are so good to stay in, you don't want to generate a rush on them. The Swiss Resort lodge hotel in London is one of them.",
    author: "Aryan Shrestha  - Trip Advisor",
  },
  {
    quote:
      "Staying here felt like a dream. From cozy rooms to incredible service, everything was just perfect.",
    author: "Alish Bajracharya - Booking.com",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-[#fdfaf6] py-24">
      <div className="container mx-auto px-4 text-center relative">
        {/* Quote icon */}
        <FaQuoteLeft className="text-4xl mx-auto mb-3 text-[#1c2b2d] " />

        {/* Subheading */}
        <p className="text-sm uppercase tracking-wider mt-10 py-5 text-gray-600 mb-1">
          Voice From Our Guests
        </p>

        {/* Heading */}
        <h2 className="text-7xl font-light py-5 text-[#1c2b2d] mb-10">Testimonials</h2>

        {/* Swiper Slider */}
        <Swiper
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          modules={[Navigation]}
          loop={true}
          className="w-full max-w-4xl mx-auto"
        >
          {testimonials.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="text-center px-4">
                <p className="text-3xl py-10 text-[#1c2b2d]  leading-relaxed mb-6">
                  “{item.quote}”
                </p>
                <p className="text-lg pt-10 text-[#1c2b2d]">{item.author}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Arrows */}
        <div className="absolute left-0 bottom-32 custom-prev cursor-pointer text-3xl text-[#1c2b2d] px-6 select-none">
          ←
        </div>
        <div className="absolute right-0 bottom-32 custom-next cursor-pointer text-3xl text-[#1c2b2d] px-6 select-none">
          →
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
