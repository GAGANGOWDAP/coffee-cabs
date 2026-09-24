import { Utensils } from "lucide-react";
import { Destination } from "../../data/destinations";

export default function DestinationFood({ destination }: { destination: Destination }) {
  const foodItems = destination.localFood;

  if (!foodItems || (Array.isArray(foodItems) && foodItems.length === 0)) return null;

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-extrabold text-[#4A3025] pb-2 border-b border-[#DDD5C8]">
        Local Food to Try
      </h2>

      <div className="bg-white border border-[#DDD5C8] p-5 sm:p-6 rounded-3xl flex items-start gap-4 shadow-xs">
        <div className="w-10 h-10 rounded-2xl bg-[#F7F3EC] text-[#23483A] border border-[#DDD5C8] flex items-center justify-center shrink-0 mt-0.5">
          <Utensils size={20} />
        </div>
        <div className="space-y-2 w-full">
          <h3 className="text-base font-extrabold text-[#252525]">Regional Specialties</h3>
          
          {typeof foodItems === "string" ? (
            <p className="text-xs sm:text-sm text-[#6F6A63] font-medium leading-relaxed">{foodItems}</p>
          ) : Array.isArray(foodItems) ? (
            <div className="flex flex-wrap gap-2 pt-1">
              {foodItems.map((item, idx) => {
                if (typeof item === "string") {
                  return (
                    <span
                      key={idx}
                      className="bg-[#F7F3EC] border border-[#DDD5C8] text-[#4A3025] text-xs font-bold px-3 py-1.5 rounded-xl shadow-2xs"
                    >
                      {item}
                    </span>
                  );
                }
                return (
                  <div key={idx} className="p-3 bg-[#F7F3EC] rounded-xl border border-[#DDD5C8] w-full space-y-1">
                    <h4 className="text-xs font-extrabold text-[#252525]">{item.name}</h4>
                    {item.description && (
                      <p className="text-[11px] text-[#6F6A63] font-medium">{item.description}</p>
                    )}
                  </div>
                );
              })}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
