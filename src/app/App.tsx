import { Routes, Route, useLocation } from "react-router";
import { useEffect, lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MobileStickyActionBar from "./components/MobileStickyActionBar";

// Lazy-loaded page components for route-level code splitting
const HomePage = lazy(() => import("./pages/HomePage"));
const FleetPage = lazy(() => import("./pages/FleetPage"));
const VehicleDetailPage = lazy(() => import("./pages/VehicleDetailPage"));
const PricingPage = lazy(() => import("./pages/PricingPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const BookingPage = lazy(() => import("./pages/BookingPage"));
const TravelIndexPage = lazy(() => import("./pages/TravelIndexPage"));
const DestinationDetailPage = lazy(() => import("./pages/DestinationDetailPage"));
const PackagesIndexPage = lazy(() => import("./pages/PackagesIndexPage"));
const PackageDetailPage = lazy(() => import("./pages/PackageDetailPage"));
const RoutesIndexPage = lazy(() => import("./pages/RoutesIndexPage"));
const RouteDetailPage = lazy(() => import("./pages/RouteDetailPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function PageLoader() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-[#F7F3EC]">
      <div className="flex flex-col items-center gap-3">
        <div className="w-8 h-8 border-3 border-[#23483A]/20 border-t-[#23483A] rounded-full animate-spin" />
        <span className="text-xs font-semibold text-[#6F6A63] tracking-wide uppercase">Loading Coffee Cabs...</span>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#F7F3EC] text-[#252525] overflow-x-hidden relative">
      <ScrollToTop />
      <Navbar />
      <main className="pb-20 sm:pb-0">
        <Suspense fallback={<PageLoader />}>
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

            {/* 404 Catch-All */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <MobileStickyActionBar />
    </div>
  );
}



