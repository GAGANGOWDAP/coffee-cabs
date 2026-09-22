import { useState } from "react";
import { useParams, Link } from "react-router";
import { ArrowLeft, MapPin, Clock, Calendar, CheckCircle2 } from "lucide-react";
import { DESTINATIONS } from "../data/destinations";
import { VEHICLES, PRICING_TERMS } from "../data/vehicles";
import BookingForm from "../components/BookingForm";

export default function DestinationPage() {
  const { slug } = useParams<{ slug: string }>();
  const dest = DESTINATIONS.find((d) => d.slug === slug);

  const [selectedVehicleId, setSelectedVehicleId] = useState(VEHICLES[0].id);

  if (!dest) {
    return (
      <div className="pt-24 min-h-screen bg-white text-[#09090b] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#09090b] mb-4">Destination Package Not Found</h1>
          <Link to="/packages" className="text-[#09090b] underline text-sm font-bold">
            ← Explore All Packages
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article className="pt-16 bg-white text-[#09090b] min-h-screen">
      {/* Hero */}
      <section className="relative h-[45vh] sm:h-[55vh] flex items-end">
        <div className="absolute inset-0">
          <img
            src={dest.image}
            alt={`${dest.name} Tour Package`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-85" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-8 w-full pb-8 text-white">
          <Link
            to="/packages"
            className="inline-flex items-center gap-1.5 text-xs text-white/80 hover:text-white transition-colors mb-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20"
          >
            <ArrowLeft size={12} /> Back to Outstation Packages
          </Link>

          <div className="flex items-center gap-2 mb-2">
            <span className="bg-white text-black text-[10px] uppercase font-extrabold px-3 py-1 rounded-full">
              {dest.category}
            </span>
            <span className="text-white/80 text-xs font-semibold">
              {dest.state} · {dest.distance} km from Bangalore
            </span>
          </div>

          <h1
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Bangalore to {dest.name} Cab Service
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid lg:grid-cols-[1.5fr_1.5fr] gap-10 items-start">
            {/* Left Main Details */}
            <div className="space-y-10">
              {/* Quick Trip Stats */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-[#fafafa] p-4 rounded-2xl border border-black/10 text-center">
                  <MapPin size={18} className="mx-auto text-[#09090b] mb-1" />
                  <div className="text-lg font-bold text-[#09090b]">{dest.distance} km</div>
                  <div className="text-[10px] text-[#71717a] uppercase font-semibold">Distance</div>
                </div>
                <div className="bg-[#fafafa] p-4 rounded-2xl border border-black/10 text-center">
                  <Clock size={18} className="mx-auto text-[#09090b] mb-1" />
                  <div className="text-lg font-bold text-[#09090b]">{dest.time}</div>
                  <div className="text-[10px] text-[#71717a] uppercase font-semibold">Est. Time</div>
                </div>
                <div className="bg-[#fafafa] p-4 rounded-2xl border border-black/10 text-center">
                  <Calendar size={18} className="mx-auto text-[#09090b] mb-1" />
                  <div className="text-xs font-bold text-[#09090b] leading-tight">{dest.bestTime}</div>
                  <div className="text-[10px] text-[#71717a] uppercase font-semibold">Best Season</div>
                </div>
              </div>

              {/* Description */}
              <div>
                <h2
                  className="text-2xl font-bold text-[#09090b] mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Overview & Travel Guide
                </h2>
                <p className="text-sm text-[#71717a] leading-relaxed">{dest.description}</p>
              </div>

              {/* Highlights */}
              <div>
                <h3 className="text-lg font-bold text-[#09090b] mb-4">Top Attractions Included</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {dest.highlights.map((h, idx) => (
                    <div
                      key={idx}
                      className="bg-[#fafafa] p-4 rounded-2xl border border-black/10 flex items-center gap-3 text-xs font-semibold text-[#09090b]"
                    >
                      <CheckCircle2 size={16} className="text-[#09090b] shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Vehicle Rates Matrix */}
              <div>
                <h3
                  className="text-xl font-bold text-[#09090b] mb-4"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Fleet Options for {dest.name}
                </h3>

                <div className="space-y-3">
                  {VEHICLES.map((vehicle) => (
                    <div
                      key={vehicle.id}
                      onClick={() => setSelectedVehicleId(vehicle.id)}
                      className={`bg-[#fafafa] p-5 rounded-2xl border transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                        selectedVehicleId === vehicle.id
                          ? "border-[#09090b] bg-white shadow-md"
                          : "border-black/10 hover:border-black/30"
                      }`}
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-bold text-[#09090b] text-base">{vehicle.name}</h4>
                          {selectedVehicleId === vehicle.id && (
                            <span className="bg-[#09090b] text-white text-[10px] font-extrabold px-2 py-0.5 rounded-full">
                              Selected
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-[#71717a] mt-1">
                          {vehicle.seats} seats · {vehicle.features.slice(0, 2).join(" · ")}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-extrabold text-[#09090b]">
                          ₹{vehicle.pricePerKm}/km
                        </div>
                        <div className="text-[10px] text-[#71717a]">₹{vehicle.driverAllowance}/day driver</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inclusions & Exclusions */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-[#fafafa] p-5 rounded-2xl border border-black/10">
                  <h4 className="font-bold text-xs uppercase text-[#09090b] mb-3">✓ Inclusions</h4>
                  <ul className="space-y-1.5 text-xs text-[#71717a]">
                    {PRICING_TERMS.included.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="text-[#09090b] font-bold">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-[#fafafa] p-5 rounded-2xl border border-black/10">
                  <h4 className="font-bold text-xs uppercase text-[#09090b] mb-3">⚠ Exclusions</h4>
                  <ul className="space-y-1.5 text-xs text-[#71717a]">
                    {PRICING_TERMS.extras.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="text-[#09090b] font-bold">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Booking Enquiry Form Widget */}
            <div className="sticky top-24">
              <BookingForm
                initialDestination={dest.name}
                initialVehicleId={selectedVehicleId}
                title={`Book Cab to ${dest.name}`}
                subtitle={`Submit your travel enquiry for ${dest.name}. Our team will confirm vehicle availability and owner-approved pricing with you.`}
              />
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
