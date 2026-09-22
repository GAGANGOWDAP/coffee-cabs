import { Routes, Route, useLocation } from "react-router";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MobileStickyActionBar from "./components/MobileStickyActionBar";
import HomePage from "./pages/HomePage";
import FleetPage from "./pages/FleetPage";
import PricingPage from "./pages/PricingPage";
import ContactPage from "./pages/ContactPage";
import PackagesPage from "./pages/PackagesPage";
import DestinationPage from "./pages/DestinationPage";
import BookingPage from "./pages/BookingPage";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div
      className="min-h-screen bg-[#08111C] text-[#F4F1E8] overflow-x-hidden relative"
      style={{ fontFamily: "'Nunito', sans-serif" }}
    >
      <ScrollToTop />
      <Navbar />
      <main className="pb-20 sm:pb-0">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/fleet" element={<FleetPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/packages" element={<PackagesPage />} />
          <Route path="/packages/:slug" element={<DestinationPage />} />
          <Route path="/booking" element={<BookingPage />} />
        </Routes>
      </main>
      <Footer />
      <MobileStickyActionBar />
    </div>
  );
}


