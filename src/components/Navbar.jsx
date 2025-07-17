// components/Navbar.jsx

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaPhoneAlt } from "react-icons/fa";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Scroll hide/show logic
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setShowNav(currentScroll < lastScroll || currentScroll < 10);
      setLastScroll(currentScroll);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <>
      {/* TOP NAVBAR */}
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: showNav ? 0 : -100 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 lg:px-20 py-6 border-b text-white transition-all duration-500"
      >
        <div className="flex justify-between items-center w-full">
          {/* HAMBURGER + PHONE */}
          <button
            onClick={toggleMenu}
            className="flex items-center gap-3 text-sm font-semibold uppercase tracking-widest"
          >
            {/* Custom 2-line Hamburger */}
            <div className="flex flex-col gap-[6px]">
              <span className="block w-6 h-[2px] bg-white"></span>
              <span className="block w-4 h-[2px] bg-white"></span>
            </div>
            <span className="tracking-[0.2em]">Menu</span>
            <div className="hidden md:flex items-center gap-2">
              <FaPhoneAlt className="text-sm" />
              <span className="tracking-wide">+41.96567.7854</span>
            </div>
          </button>

          {/* BRAND */}
          <div className="text-center leading-tight">
            <h1 className="text-xl md:text-2xl font-serif uppercase tracking-[0.15em]">
              Hotel Aashirwad
            </h1>
            <p className="text-xs tracking-[0.3em]">Luxury Hotel Pokhara</p>
          </div>

          {/* RIGHT: LANG + BOOK */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-1">
              <span>EN</span>
              <ChevronDown size={14} />
            </div>
            <button className="uppercase font-medium tracking-wide">
              Book Your Stay
            </button>
          </div>
        </div>
      </motion.header>

      {/* FULLSCREEN OVERLAY MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] flex flex-col md:flex-row"
          >
            {/* LEFT (75%) with IMAGE */}
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="md:w-[60%] w-full h-[60vh] md:h-full bg-cover bg-center relative px-6 md:px-10 flex flex-col justify-center text-white"
              style={{
                backgroundImage: `url('https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2024/03/19120250/Stupa-near-Pokhara-Raimond-Klavins-Unsplash-inline-edited.jpg')`,
                backgroundColor: "rgba(0,0,0,0.6)",
                backgroundBlendMode: "overlay",
              }}
            >
              <button
                onClick={toggleMenu}
                className="absolute top-6 left-6 text-white uppercase text-sm font-semibold tracking-widest flex items-center gap-2"
              >
                <FaTimes className="text-lg" /> Close
              </button>

              <ul className="space-y-8 text-3xl md:text-5xl font-serif tracking-wide mt-20">
                {["Home", "Rooms", "Booking", "Pages", "Blog", "Contact"].map(
                  (item) => (
                    <li key={item}>
                      <a href="#" className="hover:underline">
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </motion.div>

            {/* RIGHT (25%) */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="md:w-[40%] w-full bg-[#fce0c6] px-10 py-10 flex flex-col justify-center text-center font-serif text-[#1a1a1a] space-y-6"
            >
              <h2 className="text-lg font-semibold tracking-widest py-5">
                Hotel Aashirwad Pokhara <br/>
                <span className="text-sm font-normal tracking-widest">Luxury Hotel</span>
              </h2>
              <h3 className="text-4xl py-5">Hotel & Spa Senery <br/>Resort</h3>

              <div>
                <h4 className="text-2xl font-medium py-2">Location</h4>
                <p className="text-lg mt-1">
                  Lakeside, Pokhara 33700<br />Nepal
                </p>
              </div>

              <div>
                <h4 className="text-xl font-medium py-2">Phone Support</h4>
                <p className="text-lg mt-1" >
                    <a href="telno:+977 9841234567" className="hover:text-gray-600">+977 9841234567</a>
                  <br />
                  <a href="mailto:info@aashirwadhotel.com" className="hover:text-gray-600">info@aashirwadhotel.com</a>
                </p>
              </div>

              <div>
                <h4 className="text-xl font-medium">Connect With Us</h4>
                <p className="text-sm mt-1">WhatsApp: +977 9841234567</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
