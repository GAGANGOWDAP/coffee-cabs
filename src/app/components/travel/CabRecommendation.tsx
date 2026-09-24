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
    <div className="bg-white border border-[#DDD5C8] rounded-3xl p-6 shadow-xs space-y-5">
      <div className="flex items-center justify-between border-b border-[#DDD5C8] pb-3">
        <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#23483A] bg-[#EDE5D8] px-3 py-1 rounded-full border border-[#DDD5C8]">
          COFFEE CABS FLEET ESCORT
        </span>
        <ShieldCheck size={16} className="text-[#23483A]" />
      </div>

      <div>
        <h3 className="text-xl font-extrabold text-[#4A3025] mb-1">
          Recommended Fleet to {destination.name}
        </h3>
        <p className="text-xs text-[#6F6A63] font-medium leading-relaxed">
          {destination.cab_info?.booking_note ||
            "Rent premium Toyota Innova Crysta, Force Urbania, or Tempo Travellers with verified highway chauffeurs."}
        </p>
      </div>

      {/* Recommended Vehicles Pills */}
      <div className="space-y-2">
        <span className="text-[10px] uppercase font-bold text-[#6F6A63] tracking-wider block">
          RECOMMENDED VEHICLES:
        </span>
        <div className="flex flex-wrap gap-2">
          {recommendedVehicles.map((v, i) => (
            <span
              key={i}
              className="text-xs font-bold text-[#23483A] bg-[#F7F3EC] px-3 py-1.5 rounded-xl border border-[#DDD5C8] flex items-center gap-1.5"
            >
              <Car size={13} /> {v}
            </span>
          ))}
        </div>
      </div>

      <div className="space-y-2 pt-2 border-t border-[#DDD5C8] text-xs text-[#6F6A63] font-medium">
        <div className="flex items-center gap-2">
          <CheckCircle2 size={14} className="text-[#23483A] shrink-0" />
          <span>Clean sanitised vehicles with air-conditioning</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 size={14} className="text-[#23483A] shrink-0" />
          <span>Verified highway drivers</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 size={14} className="text-[#23483A] shrink-0" />
          <span>Owner-approved transparent fare on enquiry</span>
        </div>
      </div>

      <div className="space-y-2.5 pt-2">
        <Link
          to={`/booking?destination=${encodeURIComponent(destination.name)}`}
          className="w-full text-center bg-[#4A3025] hover:bg-[#23483A] text-white text-xs font-extrabold uppercase tracking-wider py-3.5 px-6 rounded-xl transition-all shadow-xs flex items-center justify-center gap-2 min-h-[48px]"
        >
          <span>Plan a Cab to {destination.name}</span>
          <ArrowRight size={15} />
        </Link>

        <a
          href={`https://wa.me/917676726209?text=${whatsappMsg}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full text-center bg-[#EDE5D8] hover:bg-[#DDD5C8] text-[#23483A] text-xs font-extrabold py-3 px-4 rounded-xl border border-[#DDD5C8] transition-all flex items-center justify-center gap-2 min-h-[44px]"
        >
          <MessageCircle size={15} />
          <span>WhatsApp Chat Enquiry</span>
        </a>
      </div>
    </div>
  );
}
