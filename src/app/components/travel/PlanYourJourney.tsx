import { useState } from "react";
import { useNavigate } from "react-router";
import { MapPin, Calendar, Clock, Users, Car, ArrowRight, Compass } from "lucide-react";

interface PlanYourJourneyProps {
  className?: string;
  compact?: boolean;
}

const POPULAR_DESTINATIONS = ["Mysuru", "Coorg (Madikeri)", "Chikkamagaluru", "Hampi", "Gokarna", "Ooty", "Kabini"];

const TRIP_TYPES = [
  { id: "Outstation Round Trip", label: "Outstation Round Trip" },
  { id: "Outstation One Way", label: "Outstation One Way" },
  { id: "Airport Pickup / Drop (BLR)", label: "Airport Pickup / Drop" },
  { id: "Local Bangalore Sightseeing (8h/80km)", label: "Local Sightseeing (8h/80km)" },
  { id: "Corporate / Event Group Transport", label: "Corporate & Events" },
];

const PASSENGER_OPTIONS = [
  "1–4 Passengers (Sedan)",
  "5–7 Passengers (SUV / Innova Crysta)",
  "8–12 Passengers (Executive Van)",
  "13+ Passengers (Tempo Traveller)",
];

export default function PlanYourJourney({ className = "", compact = false }: PlanYourJourneyProps) {
  const navigate = useNavigate();
  const [pickup, setPickup] = useState<string>("Bangalore");
  const [drop, setDrop] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [time, setTime] = useState<string>("06:00 AM");
  const [service, setService] = useState<string>("Outstation Round Trip");
  const [passengers, setPassengers] = useState<string>("5–7 Passengers (SUV / Innova Crysta)");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams({
      pickup,
      destination: drop,
      date,
      time,
      service,
      passengers,
    });
    navigate(`/booking?${params.toString()}`);
  };

  return (
    <div className={`bg-[#EDE5D8] border border-[#DDD5C8] rounded-3xl p-5 sm:p-7 shadow-md text-[#252525] ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-5 pb-3 border-b border-[#DDD5C8]">
        <div>
          <span className="text-[10px] sm:text-xs font-extrabold text-[#23483A] uppercase tracking-widest block mb-0.5">
            WHERE ARE YOU GOING?
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#4A3025]">
            Plan Your Journey
          </h2>
        </div>
        <div className="w-10 h-10 rounded-full bg-[#23483A]/10 flex items-center justify-center text-[#23483A] shrink-0">
          <Compass size={20} />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Row 1: Pickup & Drop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {/* Pickup Location */}
          <div>
            <label className="block text-xs font-bold text-[#4A3025] mb-1">
              Pickup Location <span className="text-[#B86F52]">*</span>
            </label>
            <div className="relative">
              <MapPin size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#23483A]" />
              <input
                type="text"
                required
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                placeholder="e.g. Bangalore, BLR Airport, Koramangala"
                className="w-full pl-10 pr-3 py-2.5 bg-white border border-[#DDD5C8] rounded-xl text-xs sm:text-sm font-semibold text-[#252525] focus:outline-none focus:border-[#23483A] focus:ring-1 focus:ring-[#23483A] transition-all"
              />
            </div>
          </div>

          {/* Drop Location */}
          <div>
            <label className="block text-xs font-bold text-[#4A3025] mb-1">
              Destination / Drop Location <span className="text-[#B86F52]">*</span>
            </label>
            <div className="relative">
              <MapPin size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#4A3025]" />
              <input
                type="text"
                required
                value={drop}
                onChange={(e) => setDrop(e.target.value)}
                placeholder="e.g. Mysuru, Coorg, Chikkamagaluru, Ooty"
                className="w-full pl-10 pr-3 py-2.5 bg-white border border-[#DDD5C8] rounded-xl text-xs sm:text-sm font-semibold text-[#252525] focus:outline-none focus:border-[#23483A] focus:ring-1 focus:ring-[#23483A] transition-all"
              />
            </div>
          </div>
        </div>

        {/* Quick Destination Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
          <span className="text-[11px] font-bold text-[#6F6A63] shrink-0 mr-1">Popular:</span>
          {POPULAR_DESTINATIONS.map((dest) => (
            <button
              key={dest}
              type="button"
              onClick={() => setDrop(dest)}
              className={`px-2.5 py-1 rounded-full text-[11px] font-bold transition-colors shrink-0 ${
                drop === dest
                  ? "bg-[#23483A] text-white"
                  : "bg-white text-[#4A3025] border border-[#DDD5C8] hover:border-[#23483A]"
              }`}
            >
              {dest}
            </button>
          ))}
        </div>

        {/* Row 2: Trip Type & Passengers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {/* Trip Type */}
          <div>
            <label className="block text-xs font-bold text-[#4A3025] mb-1">
              Trip Type
            </label>
            <div className="relative">
              <Car size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#23483A]" />
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full pl-10 pr-8 py-2.5 bg-white border border-[#DDD5C8] rounded-xl text-xs sm:text-sm font-semibold text-[#252525] focus:outline-none focus:border-[#23483A] focus:ring-1 focus:ring-[#23483A] transition-all appearance-none"
              >
                {TRIP_TYPES.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Passengers */}
          <div>
            <label className="block text-xs font-bold text-[#4A3025] mb-1">
              Passengers
            </label>
            <div className="relative">
              <Users size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#23483A]" />
              <select
                value={passengers}
                onChange={(e) => setPassengers(e.target.value)}
                className="w-full pl-10 pr-8 py-2.5 bg-white border border-[#DDD5C8] rounded-xl text-xs sm:text-sm font-semibold text-[#252525] focus:outline-none focus:border-[#23483A] focus:ring-1 focus:ring-[#23483A] transition-all appearance-none"
              >
                {PASSENGER_OPTIONS.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Row 3: Date & Time */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {/* Travel Date */}
          <div>
            <label className="block text-xs font-bold text-[#4A3025] mb-1">
              Travel Date <span className="text-[#B86F52]">*</span>
            </label>
            <div className="relative">
              <Calendar size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#23483A]" />
              <input
                type="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                min={new Date().toISOString().split("T")[0]}
                className="w-full pl-10 pr-3 py-2.5 bg-white border border-[#DDD5C8] rounded-xl text-xs sm:text-sm font-semibold text-[#252525] focus:outline-none focus:border-[#23483A] focus:ring-1 focus:ring-[#23483A] transition-all"
              />
            </div>
          </div>

          {/* Pickup Time */}
          <div>
            <label className="block text-xs font-bold text-[#4A3025] mb-1">
              Pickup Time
            </label>
            <div className="relative">
              <Clock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#23483A]" />
              <select
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full pl-10 pr-8 py-2.5 bg-white border border-[#DDD5C8] rounded-xl text-xs sm:text-sm font-semibold text-[#252525] focus:outline-none focus:border-[#23483A] focus:ring-1 focus:ring-[#23483A] transition-all appearance-none"
              >
                <option value="05:00 AM">05:00 AM</option>
                <option value="06:00 AM">06:00 AM (Early Morning)</option>
                <option value="07:00 AM">07:00 AM</option>
                <option value="08:00 AM">08:00 AM</option>
                <option value="09:00 AM">09:00 AM</option>
                <option value="10:00 AM">10:00 AM</option>
                <option value="02:00 PM">02:00 PM (Afternoon)</option>
                <option value="06:00 PM">06:00 PM (Evening)</option>
                <option value="10:00 PM">10:00 PM (Night)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            className="w-full py-3.5 px-6 bg-[#4A3025] text-white text-xs sm:text-sm uppercase tracking-wider font-extrabold rounded-2xl hover:bg-[#23483A] transition-all duration-300 shadow-md flex items-center justify-center gap-2 group min-h-[48px] focus-visible:outline-2 focus-visible:outline-[#23483A]"
          >
            <span>CHECK AVAILABILITY & FARES</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </form>
    </div>
  );
}
