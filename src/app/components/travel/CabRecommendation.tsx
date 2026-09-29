import { Link } from "react-router";
import { Car, ShieldCheck, CheckCircle2, ArrowRight, MessageCircle } from "lucide-react";
import { Destination } from "../../data/destinations";

export default function CabRecommendation({ destination }: { destination: Destination }) {
  const whatsappMsg = encodeURIComponent(
    `Hi Coffee Cabs! I'd like to inquire about cab availability to ${destination.name}.`
  );

  const recommendedVehicles = destination.cab_info?.recommended_vehicle_types || [
    "Toyota Innova Crysta",
    "Force Urbania Luxury",
    "Luxury Tempo Traveller"
  ];

  return (
    <div className="bg-[#FFFDF7] border border-[#DCC7AA] rounded-3xl p-6 shadow-xs space-y-5">
      <div className="flex items-center justify-between border-b border-[#DCC7AA] pb-3">
        <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#6F4E37] bg-[#F5E6CA] px-3 py-1 rounded-full border border-[#DCC7AA]">
          COFFEE CABS FLEET ESCORT
        </span>
        <ShieldCheck size={16} className="text-[#6F4E37]" />
      </div>

      <div>
        <h3 className="text-xl font-extrabold text-[#4B3832] mb-1">
          Recommended Fleet to {destination.name}
        </h3>
        <p className="text-xs text-[#6F4E37] font-medium leading-relaxed">
          {destination.cab_info?.booking_note ||
            "Rent premium Toyota Innova Crysta, Force Urbania, or Tempo Travellers with verified highway chauffeurs."}
        </p>
      </div>

      {/* Recommended Vehicles Pills */}
      <div className="space-y-2">
        <span className="text-[10px] uppercase font-bold text-[#6F4E37] tracking-wider block">
          RECOMMENDED VEHICLES:
        </span>
        <div className="flex flex-wrap gap-2">
          {recommendedVehicles.map((v, i) => (
            <span
              key={i}
              className="text-xs font-bold text-[#6F4E37] bg-[#FFFDF7] px-3 py-1.5 rounded-xl border border-[#DCC7AA] flex items-center gap-1.5"
            >
              <Car size={13} /> {v}
            </span>
          ))}
        </div>
      </div>

      <div className="space-y-2 pt-2 border-t border-[#DCC7AA] text-xs text-[#6F4E37] font-medium">
        <div className="flex items-center gap-2">
          <CheckCircle2 size={14} className="text-[#6F4E37] shrink-0" />
          <span>Clean sanitised vehicles with air-conditioning</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 size={14} className="text-[#6F4E37] shrink-0" />
          <span>Verified highway drivers</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 size={14} className="text-[#6F4E37] shrink-0" />
          <span>Owner-approved transparent fare on enquiry</span>
        </div>
      </div>

      <div className="space-y-2.5 pt-2">
        <Link
          to={`/booking?destination=${encodeURIComponent(destination.name)}`}
          className="w-full text-center bg-[#6F4E37] hover:bg-[#4B3832] text-[#FFFDF7] text-xs font-extrabold uppercase tracking-wider py-3.5 px-6 rounded-xl transition-all shadow-xs flex items-center justify-center gap-2 min-h-[48px]"
        >
          <span>Plan a Cab to {destination.name}</span>
          <ArrowRight size={15} />
        </Link>

        <a
          href={`https://wa.me/917676726209?text=${whatsappMsg}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full text-center bg-[#F5E6CA] hover:bg-[#DCC7AA] text-[#4B3832] text-xs font-extrabold py-3 px-4 rounded-xl border border-[#DCC7AA] transition-all flex items-center justify-center gap-2 min-h-[44px]"
        >
          <MessageCircle size={15} />
          <span>WhatsApp Chat Enquiry</span>
        </a>
      </div>
    </div>
  );
}
