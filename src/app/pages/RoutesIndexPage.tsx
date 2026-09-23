import { Route as RouteIcon, Navigation } from "lucide-react";
import { ROUTES } from "../data/routes";
import RouteCard from "../components/RouteCard";
import SEO from "../components/SEO";

export default function RoutesIndexPage() {
  return (
    <div className="pt-20 bg-[#08111C] text-[#F4F1E8] min-h-screen">
      <SEO
        title="Bengaluru Outstation Taxi Routes & Cabs"
        description="Book outstation cabs from Bengaluru to Mysuru, Coorg, Chikkamagaluru, Hampi, Udupi, Gokarna, Mangaluru, Ooty & Goa. One-way & round trip."
        canonicalUrl="https://gagangowdap.github.io/coffee-cabs/routes"
      />
      {/* HEADER HERO */}
      <section className="bg-gradient-to-b from-[#132333] to-[#08111C] border-b border-[#AEB7C2]/15 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#C6A15B] bg-[#08111C] px-4 py-1.5 rounded-full border border-[#C6A15B]/30 mb-4">
            <RouteIcon size={16} />
            <span>HIGH-INTENT OUTSTATION TAXI ROUTES</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#F4F1E8] tracking-tight mb-4">
            Bengaluru Outstation Taxi Routes & Cabs
          </h1>

          <p className="text-[#AEB7C2] text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Reliable one-way and round-trip outstation taxi service from Bengaluru to Mysuru, Coorg, Chikkamagaluru, Hampi, Udupi, Gokarna, Mangaluru, Ooty and Goa.
          </p>
        </div>
      </section>

      {/* ROUTES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2 text-lg font-bold text-[#F4F1E8]">
            <Navigation size={20} className="text-[#C6A15B]" />
            <span>PRIMARY OUTSTATION HIGHWAY CORRIDORS ({ROUTES.length})</span>
          </div>

          <span className="text-xs text-[#AEB7C2]">
            All routes feature owner-approved transparent fare logic
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ROUTES.map((route) => (
            <RouteCard key={route.id} route={route} />
          ))}
        </div>
      </section>
    </div>
  );
}
