import React from 'react';
import { motion } from 'framer-motion';

const images = [
  { src: 'https://creativelayers.net/themes/swiss-resort-html/img/inst/1/1.png', topOffset: 'mt-12', height: 'h-[300px]' },
  { src: 'https://creativelayers.net/themes/swiss-resort-html/img/inst/1/2.png', topOffset: 'mt-0', height: 'h-[450px]' }, 
  { src: 'https://creativelayers.net/themes/swiss-resort-html/img/inst/1/3.png', topOffset: 'mt-10', height: 'h-[300px]' },
  { src: 'https://creativelayers.net/themes/swiss-resort-html/img/inst/1/4.png', topOffset: 'mt-0', height: 'h-[400px]' }, 
  { src: 'https://creativelayers.net/themes/swiss-resort-html/img/inst/1/5.png', topOffset: 'mt-12', height: 'h-[300px]' },
];

const InstagramGallery = () => {
  return (
    <section className="w-full bg-white py-16 px-4 overflow-hidden">
      <div className="text-center mb-12">
        <p className="text-sm text-gray-600">@SWISS-RESORT</p>
        <h2 className="text-3xl md:text-5xl font-serif mt-2 leading-snug">
          Follow us on <br className="block md:hidden" /> Instagram
        </h2>
      </div>

      <div className="flex justify-center gap-6 flex-wrap max-w-[1600px] mx-auto">
        {images.map((img, index) => (
          <motion.div
            key={index}
            className={`w-[300px] ${img.topOffset} ${img.height} flex-shrink-0 overflow-hidden`}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src={img.src}
              alt={`insta-${index}`}
              className="w-full h-full object-cover shadow-md hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default InstagramGallery;
