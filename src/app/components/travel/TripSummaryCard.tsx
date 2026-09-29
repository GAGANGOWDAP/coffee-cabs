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
    <div className="bg-[#F5E6CA] border border-[#DCC7AA] rounded-3xl p-4 sm:p-6 shadow-sm text-[#4B3832] w-full max-w-full min-w-0 box-sizing-border-box overflow-hidden">
      {/* Header Badge */}
      <div className="flex items-center justify-between border-b border-[#DCC7AA] pb-3 mb-4">
        <div className="flex items-center gap-2 text-xs font-extrabold text-[#6F4E37] uppercase tracking-wider">
          <ShieldCheck size={16} className="text-[#6F4E37]" />
          <span>YOUR TRIP SUMMARY</span>
        </div>
        {onModify && (
          <button
            type="button"
            onClick={onModify}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#4B3832] hover:text-[#6F4E37] transition-colors focus-visible:outline-2 focus-visible:outline-[#6F4E37] rounded px-2 py-1 bg-[#FFFDF7] border border-[#DCC7AA]"
          >
            <Edit3 size={13} />
            <span>MODIFY TRIP</span>
          </button>
        )}
      </div>

      {/* Route Visualizer */}
      <div className="flex items-center gap-3 bg-[#FFFDF7] p-3.5 rounded-2xl border border-[#DCC7AA] mb-4">
        <div className="flex flex-col items-center">
          <div className="w-3 h-3 rounded-full bg-[#6F4E37]" />
          <div className="w-0.5 h-6 bg-[#6F4E37]/30 my-0.5" />
          <MapPin size={16} className="text-[#4B3832]" />
        </div>
        <div className="flex-1 space-y-1 text-xs sm:text-sm">
          <div>
            <span className="text-[11px] font-semibold text-[#6F4E37] uppercase">Pickup: </span>
            <strong className="text-[#4B3832] font-bold">{pickupLocation || "Bangalore"}</strong>
          </div>
          <div className="border-t border-[#DCC7AA]/40 pt-1">
            <span className="text-[11px] font-semibold text-[#6F4E37] uppercase">Drop: </span>
            <strong className="text-[#4B3832] font-bold">{dropLocation || "As discussed with team"}</strong>
          </div>
        </div>
      </div>

      {/* Grid Specs */}
      <div className="grid grid-cols-2 gap-2.5 text-xs text-[#4B3832] mb-4">
        <div className="bg-[#FFFDF7] p-2.5 rounded-xl border border-[#DCC7AA] flex items-center gap-2">
          <Calendar size={14} className="text-[#6F4E37] shrink-0" />
          <div className="truncate">
            <span className="block text-[10px] text-[#6F4E37] font-semibold">Travel Date</span>
            <strong className="font-bold truncate text-[#4B3832]">{travelDate || "To be decided"}</strong>
          </div>
        </div>

        <div className="bg-[#FFFDF7] p-2.5 rounded-xl border border-[#DCC7AA] flex items-center gap-2">
          <Clock size={14} className="text-[#6F4E37] shrink-0" />
          <div className="truncate">
            <span className="block text-[10px] text-[#6F4E37] font-semibold">Pickup Time</span>
            <strong className="font-bold truncate text-[#4B3832]">{pickupTime || "06:00 AM"}</strong>
          </div>
        </div>

        <div className="bg-[#FFFDF7] p-2.5 rounded-xl border border-[#DCC7AA] flex items-center gap-2">
          <Users size={14} className="text-[#6F4E37] shrink-0" />
          <div className="truncate">
            <span className="block text-[10px] text-[#6F4E37] font-semibold">Passengers</span>
            <strong className="font-bold truncate text-[#4B3832]">{passengers}</strong>
          </div>
        </div>

        <div className="bg-[#FFFDF7] p-2.5 rounded-xl border border-[#DCC7AA] flex items-center gap-2">
          <Car size={14} className="text-[#6F4E37] shrink-0" />
          <div className="truncate">
            <span className="block text-[10px] text-[#6F4E37] font-semibold">Vehicle Choice</span>
            <strong className="font-bold truncate text-[#4B3832]">{selectedVehicle?.name || "Chauffeur Cab"}</strong>
          </div>
        </div>
      </div>

      {/* Fare Disclaimer Notice */}
      <div className="bg-[#6F4E37]/10 p-3 rounded-2xl border border-[#6F4E37]/20 text-xs text-[#6F4E37] mb-4">
        <span className="font-extrabold uppercase text-[10px] tracking-wider block mb-0.5">Fare Status</span>
        <p className="font-bold text-[#4B3832]">Owner-approved fare available on enquiry</p>
        <span className="text-[11px] text-[#6F4E37] font-normal block mt-1">
          Fares vary based on route, vehicle model, interstate tolls, and parking.
        </span>
      </div>

      {/* Actions: Save & Share */}
      {showActions && (
        <div className="flex items-center justify-between gap-2 pt-2 border-t border-[#DCC7AA]">
          <button
            type="button"
            onClick={handleSaveTrip}
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-[#FFFDF7] text-[#4B3832] border border-[#DCC7AA] rounded-xl text-xs font-bold hover:bg-[#F5E6CA] hover:border-[#6F4E37] transition-all focus-visible:outline-2 focus-visible:outline-[#6F4E37]"
          >
            {saved ? <Check size={14} className="text-[#6F4E37]" /> : <Bookmark size={14} />}
            <span>{saved ? "Trip Saved" : "Save Trip"}</span>
          </button>

          <button
            type="button"
            onClick={handleShareTrip}
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-[#FFFDF7] text-[#6F4E37] border border-[#DCC7AA] rounded-xl text-xs font-bold hover:bg-[#F5E6CA] hover:border-[#6F4E37] transition-all focus-visible:outline-2 focus-visible:outline-[#6F4E37]"
          >
            {copied ? <Check size={14} className="text-[#6F4E37]" /> : <Share2 size={14} />}
            <span>{copied ? "Summary Copied" : "Share Trip"}</span>
          </button>
        </div>
      )}
    </div>
  );
}
