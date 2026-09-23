import { Routes, Route, useLocation } from "react-router";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MobileStickyActionBar from "./components/MobileStickyActionBar";
import HomePage from "./pages/HomePage";
import FleetPage from "./pages/FleetPage";
import VehicleDetailPage from "./pages/VehicleDetailPage";
import PricingPage from "./pages/PricingPage";
import ContactPage from "./pages/ContactPage";
import PackagesPage from "./pages/PackagesPage";
import DestinationPage from "./pages/DestinationPage";
import BookingPage from "./pages/BookingPage";
import TravelIndexPage from "./pages/TravelIndexPage";
import DestinationDetailPage from "./pages/DestinationDetailPage";
import PackagesIndexPage from "./pages/PackagesIndexPage";
import PackageDetailPage from "./pages/PackageDetailPage";
import RoutesIndexPage from "./pages/RoutesIndexPage";
import RouteDetailPage from "./pages/RouteDetailPage";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#08111C] text-[#F4F1E8] overflow-x-hidden relative">
      <ScrollToTop />
      <Navbar />
      <main className="pb-20 sm:pb-0">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/fleet" element={<FleetPage />} />
          <Route path="/fleet/:slug" element={<VehicleDetailPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* Travel Dictionary & Destinations */}
          <Route path="/travel" element={<TravelIndexPage />} />
          <Route path="/travel/destinations" element={<TravelIndexPage />} />
          <Route path="/travel/destinations/:slug" element={<DestinationDetailPage />} />
          <Route path="/destinations/:slug" element={<DestinationDetailPage />} />

          {/* Tour Packages */}
          <Route path="/travel/packages" element={<PackagesIndexPage />} />
          <Route path="/travel/packages/:slug" element={<PackageDetailPage />} />
          <Route path="/packages" element={<PackagesIndexPage />} />
          <Route path="/packages/:slug" element={<PackageDetailPage />} />

          {/* Outstation Routes */}
          <Route path="/routes" element={<RoutesIndexPage />} />
          <Route path="/routes/:slug" element={<RouteDetailPage />} />

          {/* Booking & Enquiry */}
          <Route path="/booking" element={<BookingPage />} />
        </Routes>
      </main>
      <Footer />
      <MobileStickyActionBar />
    </div>
  );
}



