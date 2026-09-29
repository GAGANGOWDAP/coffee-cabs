import { useState } from "react";
import { MapPin, Calendar, Clock, Users, Car, Edit3, Bookmark, Share2, ShieldCheck, Check } from "lucide-react";
import { Vehicle } from "../../data/vehicles";

interface TripSummaryCardProps {
  pickupLocation: string;
  dropLocation: string;
  travelDate: string;
  pickupTime: string;
  serviceType: string;
  passengers: string;
  selectedVehicle?: Vehicle;
  onModify?: () => void;
  showActions?: boolean;
}

export default function TripSummaryCard({
  pickupLocation,
  dropLocation,
  travelDate,
  pickupTime,
  serviceType,
  passengers,
  selectedVehicle,
  onModify,
  showActions = true,
}: TripSummaryCardProps) {
  const [saved, setSaved] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  const handleSaveTrip = () => {
    try {
      const tripData = {
        pickupLocation,
        dropLocation,
        travelDate,
        pickupTime,
        serviceType,
        passengers,
        vehicle: selectedVehicle?.name || "Standard Fleet",
        savedAt: new Date().toISOString(),
      };
      localStorage.setItem("coffeecabs_saved_trip", JSON.stringify(tripData));
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } catch (err) {
      // Ignore localStorage restrictions
    }
  };

  const handleShareTrip = async () => {
    const summaryText =
      `Coffee Cabs Trip Summary:\n` +
      `• Pickup: ${pickupLocation || "Bangalore"}\n` +
      `• Destination: ${dropLocation || "To be specified"}\n` +
      `• Trip Type: ${serviceType}\n` +
      `• Date: ${travelDate || "To be decided"}\n` +
      `• Time: ${pickupTime}\n` +
      `• Passengers: ${passengers}\n` +
      `• Vehicle: ${selectedVehicle?.name || "Chauffeur Cab"}\n` +
      `• Fare: Owner-approved fare available on enquiry\n` +
      `Book at: https://gagangowdap.github.io/coffee-cabs/booking`;

    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title: "Coffee Cabs Trip Summary",
          text: summaryText,
          url: "https://gagangowdap.github.io/coffee-cabs/booking",
        });
        return;
      } catch (e) {
        // Fallback to clipboard
      }
    }

    if (typeof navigator !== "undefined" && navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(summaryText);
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
      } catch (err) {
        // Ignore clipboard errors
      }
    }
  };

  return (
    <div className="bg-[#EDE5D8]/90 backdrop-blur-md border border-[#DDD5C8] rounded-3xl p-5 sm:p-6 shadow-sm text-[#252525]">
      {/* Header Badge */}
      <div className="flex items-center justify-between border-b border-[#DDD5C8] pb-3 mb-4">
        <div className="flex items-center gap-2 text-xs font-extrabold text-[#23483A] uppercase tracking-wider">
          <ShieldCheck size={16} className="text-[#23483A]" />
          <span>YOUR TRIP SUMMARY</span>
        </div>
        {onModify && (
          <button
            type="button"
            onClick={onModify}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#4A3025] hover:text-[#23483A] transition-colors focus-visible:outline-2 focus-visible:outline-[#23483A] rounded px-2 py-1 bg-white/60 border border-[#DDD5C8]"
          >
            <Edit3 size={13} />
            <span>MODIFY TRIP</span>
          </button>
        )}
      </div>

      {/* Route Visualizer */}
      <div className="flex items-center gap-3 bg-white p-3.5 rounded-2xl border border-[#DDD5C8] mb-4">
        <div className="flex flex-col items-center">
          <div className="w-3 h-3 rounded-full bg-[#23483A]" />
          <div className="w-0.5 h-6 bg-[#23483A]/30 my-0.5" />
          <MapPin size={16} className="text-[#4A3025]" />
        </div>
        <div className="flex-1 space-y-1 text-xs sm:text-sm">
          <div>
            <span className="text-[11px] font-semibold text-[#6F6A63] uppercase">Pickup: </span>
            <strong className="text-[#252525] font-bold">{pickupLocation || "Bangalore"}</strong>
          </div>
          <div className="border-t border-[#DDD5C8]/40 pt-1">
            <span className="text-[11px] font-semibold text-[#6F6A63] uppercase">Drop: </span>
            <strong className="text-[#4A3025] font-bold">{dropLocation || "As discussed with team"}</strong>
          </div>
        </div>
      </div>

      {/* Grid Specs */}
      <div className="grid grid-cols-2 gap-2.5 text-xs text-[#252525] mb-4">
        <div className="bg-white/80 p-2.5 rounded-xl border border-[#DDD5C8] flex items-center gap-2">
          <Calendar size={14} className="text-[#23483A] shrink-0" />
          <div className="truncate">
            <span className="block text-[10px] text-[#6F6A63] font-semibold">Travel Date</span>
            <strong className="font-bold truncate">{travelDate || "To be decided"}</strong>
          </div>
        </div>

        <div className="bg-white/80 p-2.5 rounded-xl border border-[#DDD5C8] flex items-center gap-2">
          <Clock size={14} className="text-[#23483A] shrink-0" />
          <div className="truncate">
            <span className="block text-[10px] text-[#6F6A63] font-semibold">Pickup Time</span>
            <strong className="font-bold truncate">{pickupTime || "06:00 AM"}</strong>
          </div>
        </div>

        <div className="bg-white/80 p-2.5 rounded-xl border border-[#DDD5C8] flex items-center gap-2">
          <Users size={14} className="text-[#23483A] shrink-0" />
          <div className="truncate">
            <span className="block text-[10px] text-[#6F6A63] font-semibold">Passengers</span>
            <strong className="font-bold truncate">{passengers}</strong>
          </div>
        </div>

        <div className="bg-white/80 p-2.5 rounded-xl border border-[#DDD5C8] flex items-center gap-2">
          <Car size={14} className="text-[#23483A] shrink-0" />
          <div className="truncate">
            <span className="block text-[10px] text-[#6F6A63] font-semibold">Vehicle Choice</span>
            <strong className="font-bold truncate">{selectedVehicle?.name || "Chauffeur Cab"}</strong>
          </div>
        </div>
      </div>

      {/* Fare Disclaimer Notice */}
      <div className="bg-[#23483A]/10 p-3 rounded-2xl border border-[#23483A]/20 text-xs text-[#23483A] mb-4">
        <span className="font-extrabold uppercase text-[10px] tracking-wider block mb-0.5">Fare Status</span>
        <p className="font-bold">Owner-approved fare available on enquiry</p>
        <span className="text-[11px] text-[#6F6A63] font-normal block mt-1">
          Fares vary based on route, vehicle model, interstate tolls, and parking.
        </span>
      </div>

      {/* Actions: Save & Share */}
      {showActions && (
        <div className="flex items-center justify-between gap-2 pt-2 border-t border-[#DDD5C8]">
          <button
            type="button"
            onClick={handleSaveTrip}
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-white text-[#4A3025] border border-[#DDD5C8] rounded-xl text-xs font-bold hover:border-[#23483A] transition-all focus-visible:outline-2 focus-visible:outline-[#23483A]"
          >
            {saved ? <Check size={14} className="text-[#23483A]" /> : <Bookmark size={14} />}
            <span>{saved ? "Trip Saved" : "Save Trip"}</span>
          </button>

          <button
            type="button"
            onClick={handleShareTrip}
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-white text-[#23483A] border border-[#DDD5C8] rounded-xl text-xs font-bold hover:border-[#23483A] transition-all focus-visible:outline-2 focus-visible:outline-[#23483A]"
          >
            {copied ? <Check size={14} className="text-[#23483A]" /> : <Share2 size={14} />}
            <span>{copied ? "Summary Copied" : "Share Trip"}</span>
          </button>
        </div>
      )}
    </div>
  );
}
