// src/components/HeroSection.jsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  const [form, setForm] = useState({
    checkin: "",
    checkout: "",
    adults: 2,
    children: 0,
  });

  useEffect(() => {
    const timeout = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  const today = new Date().toISOString().split("T")[0];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const checkinDate = new Date(form.checkin);
    const checkoutDate = new Date(form.checkout);
    const now = new Date();

    if (!form.checkin || !form.checkout) {
      alert("Please select both check-in and check-out dates.");
      return;
    }

    if (checkinDate < now.setHours(0, 0, 0, 0)) {
      alert("Check-in date must be today or in the future.");
      return;
    }

    if (checkoutDate <= checkinDate) {
      alert("Check-out date must be after check-in date.");
      return;
    }

    alert(
      `Room is available!\nFrom: ${form.checkin}\nTo: ${form.checkout}\nAdults: ${form.adults}\nChildren: ${form.children}`
    );
  };

  return (
    <div
      className="relative h-screen w-full bg-cover bg-center text-white font-[serif]"
      style={{
        backgroundImage:
          "url('https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2024/03/19120250/Stupa-near-Pokhara-Raimond-Klavins-Unsplash-inline-edited.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Text */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={loaded ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1.2 }}
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4"
      >
        <p className="text-sm uppercase tracking-[3px] font-[Roboto] text-white/80">
          Your Home Away from Home
        </p>
        <h1 className="text-[40px] sm:text-[50px] md:text-[64px] lg:text-[82px] mt-6 font-normal tracking-wider leading-normal">
          Experience Unparalleled <br /> Comfort & Serenity
        </h1>
      </motion.div>

      {/* Booking Form */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 50 }}
        animate={loaded ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.6, duration: 1.2 }}
        className="absolute bottom-8 left-1/4 transform -translate-x-1/2 w-[90%] max-w-6xl z-10"
      >
        <div className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Check-in */}
          <div className="flex flex-col w-full md:w-auto text-white">
            <label className="text-xs opacity-70">Check-in</label>
            <input
              type="date"
              name="checkin"
              value={form.checkin}
              onChange={handleChange}
              min={today}
              className="bg-transparent border-none outline-none text-sm"
              required
            />
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-8 bg-white/30" />

          {/* Check-out */}
          <div className="flex flex-col w-full md:w-auto text-white">
            <label className="text-xs opacity-70">Check-out</label>
            <input
              type="date"
              name="checkout"
              value={form.checkout}
              onChange={handleChange}
              min={form.checkin || today}
              className="bg-transparent border-none outline-none text-sm"
              required
            />
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-8 bg-white/30" />

          {/* Adults */}
          <div className="flex flex-col w-full md:w-auto text-white">
            <label className="text-xs opacity-70">Adults</label>
            <input
              type="number"
              name="adults"
              value={form.adults}
              onChange={handleChange}
              min={1}
              className="bg-transparent border-none outline-none text-sm w-20"
              required
            />
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-8 bg-white/30" />

          {/* Children */}
          <div className="flex flex-col w-full md:w-auto text-white">
            <label className="text-xs opacity-70">Children</label>
            <input
              type="number"
              name="children"
              value={form.children}
              onChange={handleChange}
              min={0}
              className="bg-transparent border-none outline-none text-sm w-20"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="bg-[#FAD9B3] hover:bg-[#fcd9ac] text-black font-medium px-6 py-2 rounded-full transition-all duration-300 w-full md:w-auto mt-2 md:mt-0"
          >
            GO
          </button>
        </div>
      </motion.form>
    </div>
  );
}
