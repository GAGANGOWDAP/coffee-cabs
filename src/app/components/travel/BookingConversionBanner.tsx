import { Link } from "react-router";
import { Car, ArrowRight, ShieldCheck } from "lucide-react";
import { Destination } from "../../data/destinations";

export default function BookingConversionBanner({ destination }: { destination: Destination }) {
  return (
    <div className="bg-[#FFFDF7] rounded-3xl p-6 sm:p-8 border border-[#DCC7AA] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs my-8">
      <div>
        <div className="inline-flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-widest text-[#6F4E37] bg-[#F5E6CA] px-3 py-1 rounded-full mb-2 border border-[#DCC7AA]">
          <ShieldCheck size={13} /> PLAN YOUR JOURNEY
        </div>
        <h3 className="text-xl sm:text-2xl font-extrabold text-[#4B3832]">
          Planning a trip to {destination.name}?
        </h3>
        <p className="text-xs sm:text-sm text-[#6F4E37] font-medium mt-1">
          Choose an owner-approved vehicle and send us your travel requirements.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
        <Link
          to={`/booking?destination=${encodeURIComponent(destination.name)}`}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#6F4E37] text-[#FFFDF7] text-xs font-extrabold uppercase tracking-wider rounded-xl hover:bg-[#4B3832] transition-all min-h-[48px] shadow-xs"
        >
          <span>Book a Cab</span>
          <ArrowRight size={15} />
        </Link>
        <Link
          to="/fleet"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#FFFDF7] border border-[#DCC7AA] text-[#4B3832] text-xs font-bold rounded-xl hover:border-[#6F4E37] transition-all min-h-[48px]"
        >
          <Car size={15} className="text-[#6F4E37]" />
          <span>View Fleet</span>
        </Link>
      </div>
    </div>
  );
}
