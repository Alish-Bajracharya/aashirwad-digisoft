import React from "react";
import { motion } from "framer-motion";

const blogPosts = [
  {
    category: "Spa & Wellness",
    date: "06 April 2023",
    title: "Hotel June's Upcoming Artist in Residence",
    image: "https://creativelayers.net/themes/swiss-resort-html/img/cards/2/1.png",
  },
  {
    category: "Event",
    date: "06 April 2023",
    title: "Where to travel in 2023: 10 places you need to go in 2023!",
    image: "https://creativelayers.net/themes/swiss-resort-html/img/cards/2/2.png",
  },
  {
    category: "Restaurant",
    date: "06 April 2023",
    title: "Tips For Picking Vacation Accommodation",
    image: "https://creativelayers.net/themes/swiss-resort-html/img/cards/2/3.png",
  },
];

const OfferNews = () => {
  return (
    <div className="container mx-auto px-8 md:px-32 py-20">
      <div className="flex justify-between items-center mb-8">
        <div>
          <p className="text-sm mt-20 tracking-widest py-3 uppercase text-gray-600">Blog</p>
          <h2 className="text-6xl font-serif py-10 text-gray-900">Offers & News</h2>
        </div>

        {/* Updated Button */}
        <button className="flex items-center gap-3 py-5 mb-5 group">
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
          <span className="text-base font-medium text-gray-900 tracking-wide group-hover:underline">
            VIEW ALL MORE
          </span>
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <motion.div
            key={index}
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="overflow-hidden shadow-sm">
              <motion.img
                src={post.image}
                alt={post.title}
                className="w-full h-auto object-cover"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              />
            </div>
            <p className="text-lg mt-4 py-1 text-gray-600">
              {post.category} &nbsp; {post.date}
            </p>
            <h3 className="text-2xl py-2 font-serif text-gray-900 mt-2">
              {post.title}
            </h3>

            {/* Read More Button (same style) */}
            <button className="flex items-center gap-3 py-5 group">
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
              <span className="text-base font-medium text-gray-900 tracking-wide group-hover:underline">
                READ MORE
              </span>
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OfferNews;
