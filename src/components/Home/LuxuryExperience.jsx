import React from "react";
import BookNowButton from "../BookNowButton";

const LuxuryExperience = () => {
  return (
    <section className="py-36 bg-white">
      <div className="container mx-auto px-4 max-w-screen-xl">
        {/* Top Text Section */}
        <div className="text-center mb-12">
          <p className="uppercase tracking-wide text-sm py-5 text-gray-500 mb-2">
            SWISS RESORT LUXURY HOTEL
          </p>
          <h2 className="text-4xl md:text-5xl font-serif py-6 text-gray-900">
            Enjoy a Luxury Experience
          </h2>
        </div>

        {/* Main Layout */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-gray-600 text-base leading-relaxed mb-6">
              Welcome to the best five-star deluxe hotel in New York. Hotel
              elementum sesue the aucan vestibulum aliquam justo in sapien
              rutrum volutpat. Donec in quis the pellentesque velit. Hotel ut
              nisl quam nestibulum.
            </p>

            {/* Book Now Button */}
            <BookNowButton />

            {/* Lobby Image */}
            <img
              src="https://creativelayers.net/themes/swiss-resort-html/img/about/1/1.png"
              alt="Lobby"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="flex flex-col gap-4">
            {/* Garden Image */}
            <img
              src="https://creativelayers.net/themes/swiss-resort-html/img/about/1/2.png"
              alt="Garden"
              className="w-full h-[420px] object-cover"
            />
            {/* Smaller Pool Image */}
            <img
              src="https://creativelayers.net/themes/swiss-resort-html/img/about/1/3.png"
              alt="Pool"
              className="w-1/2 h-[300px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LuxuryExperience;
