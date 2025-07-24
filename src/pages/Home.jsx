import FacilityShowcase from "../components/Home/FacilityShowcase";
import Hero from "../components/Home/Hero";
import LuxuryExperience from "../components/Home/LuxuryExperience";
import RoomsSection from "../components/Home/RoomSection";
import Services from "../components/Home/Services";
import Navbar from "../components/Navbar";
import Experiences from "../components/Home/Experiences";
import Testimonials from "../components/Home/Testimonials";
import OfferNews from "../components/Home/OfferNews";
import InstagramGallery from "../components/Home/InstagramGallery";
import Footer from "../components/Footer";


const Home = () => {
  return (
    <div className="relative">
      <Navbar />
      <Hero/>
      <LuxuryExperience/>
      <RoomsSection />
      <FacilityShowcase />
      <Services/>
      <Experiences/>
      <Testimonials />
      <OfferNews/>
      <InstagramGallery/>
      <Footer />

    </div>
  );
};

export default Home;
