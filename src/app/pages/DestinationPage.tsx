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
      <div className="pt-24 min-h-screen bg-[#08111C] text-[#F4F1E8] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#F4F1E8] mb-4">Destination Package Not Found</h1>
          <Link to="/packages" className="text-[#C6A15B] underline text-sm font-bold">
            ← Explore All Packages
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article className="pt-16 bg-[#08111C] text-[#F4F1E8] min-h-screen">
      {/* Hero */}
      <section className="relative h-[45vh] sm:h-[55vh] flex items-end">
        <div className="absolute inset-0">
          <img
            src={dest.image}
            alt={`${dest.name} Tour Package`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#08111C] via-[#08111C]/60 to-transparent opacity-95" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-8 w-full pb-8 text-[#F4F1E8]">
          <Link
            to="/packages"
            className="inline-flex items-center gap-1.5 text-xs text-[#AEB7C2] hover:text-[#F4F1E8] transition-colors mb-4 bg-[#08111C]/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#AEB7C2]/20"
          >
            <ArrowLeft size={12} className="text-[#C6A15B]" /> Back to Outstation Packages
          </Link>

          <div className="flex items-center gap-2 mb-2">
            <span className="bg-[#C6A15B] text-[#08111C] text-[10px] uppercase font-extrabold px-3 py-1 rounded-full">
              {dest.category}
            </span>
            <span className="text-[#AEB7C2] text-xs font-semibold">
              {dest.state} · {dest.distance} km from Bangalore
            </span>
          </div>

          <h1
            className="text-3xl sm:text-5xl font-extrabold text-[#F4F1E8] tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Bangalore to {dest.name} Cab Service
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 sm:py-16 bg-[#08111C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid lg:grid-cols-[1.5fr_1.5fr] gap-10 items-start">
            {/* Left Main Details */}
            <div className="space-y-10">
              {/* Quick Trip Stats */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-[#132333] p-4 rounded-2xl border border-[#AEB7C2]/15 text-center">
                  <MapPin size={18} className="mx-auto text-[#C6A15B] mb-1" />
                  <div className="text-lg font-bold text-[#F4F1E8]">{dest.distance} km</div>
                  <div className="text-[10px] text-[#AEB7C2] uppercase font-semibold">Distance</div>
                </div>
                <div className="bg-[#132333] p-4 rounded-2xl border border-[#AEB7C2]/15 text-center">
                  <Clock size={18} className="mx-auto text-[#C6A15B] mb-1" />
                  <div className="text-lg font-bold text-[#F4F1E8]">{dest.time}</div>
                  <div className="text-[10px] text-[#AEB7C2] uppercase font-semibold">Est. Time</div>
                </div>
                <div className="bg-[#132333] p-4 rounded-2xl border border-[#AEB7C2]/15 text-center">
                  <Calendar size={18} className="mx-auto text-[#C6A15B] mb-1" />
                  <div className="text-xs font-bold text-[#F4F1E8] leading-tight">{dest.bestTime}</div>
                  <div className="text-[10px] text-[#AEB7C2] uppercase font-semibold">Best Season</div>
                </div>
              </div>

              {/* Description */}
              <div>
                <h2
                  className="text-2xl font-bold text-[#F4F1E8] mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Overview & Travel Guide
                </h2>
                <p className="text-sm text-[#AEB7C2] leading-relaxed">{dest.description}</p>
              </div>

              {/* Highlights */}
              <div>
                <h3 className="text-lg font-bold text-[#F4F1E8] mb-4">Top Attractions Included</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {dest.highlights.map((h, idx) => (
                    <div
                      key={idx}
                      className="bg-[#132333] p-4 rounded-2xl border border-[#AEB7C2]/15 flex items-center gap-3 text-xs font-semibold text-[#F4F1E8]"
                    >
                      <CheckCircle2 size={16} className="text-[#C6A15B] shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Vehicle Rates Matrix */}
              <div>
                <h3
                  className="text-xl font-bold text-[#F4F1E8] mb-4"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Fleet Options for {dest.name}
                </h3>

                <div className="space-y-3">
                  {VEHICLES.map((vehicle) => (
                    <div
                      key={vehicle.id}
                      onClick={() => setSelectedVehicleId(vehicle.id)}
                      className={`bg-[#132333] p-5 rounded-2xl border transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                        selectedVehicleId === vehicle.id
                          ? "border-[#C6A15B] bg-[#132333] shadow-lg"
                          : "border-[#AEB7C2]/15 hover:border-[#C6A15B]/50"
                      }`}
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-bold text-[#F4F1E8] text-base">{vehicle.name}</h4>
                          {selectedVehicleId === vehicle.id && (
                            <span className="bg-[#C6A15B] text-[#08111C] text-[10px] font-extrabold px-2 py-0.5 rounded-full">
                              Selected
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-[#AEB7C2] mt-1">
                          {vehicle.seats} seats · {vehicle.features.slice(0, 2).join(" · ")}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-extrabold text-[#C6A15B]">
                          ₹{vehicle.pricePerKm}/km
                        </div>
                        <div className="text-[10px] text-[#AEB7C2]">₹{vehicle.driverAllowance}/day driver</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inclusions & Exclusions */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-[#132333] p-5 rounded-2xl border border-[#AEB7C2]/15">
                  <h4 className="font-bold text-xs uppercase text-[#C6A15B] mb-3">✓ Inclusions</h4>
                  <ul className="space-y-1.5 text-xs text-[#AEB7C2]">
                    {PRICING_TERMS.included.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="text-[#C6A15B] font-bold">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-[#132333] p-5 rounded-2xl border border-[#AEB7C2]/15">
                  <h4 className="font-bold text-xs uppercase text-[#C6A15B] mb-3">⚠ Exclusions</h4>
                  <ul className="space-y-1.5 text-xs text-[#AEB7C2]">
                    {PRICING_TERMS.extras.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="text-[#C6A15B] font-bold">•</span> {item}
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

