import { VEHICLES } from "../data/vehicles";
import VehicleCard from "../components/VehicleCard";

export default function FleetPage() {
  return (
    <div className="pt-20 bg-[#08111C] text-[#F4F1E8] min-h-screen">
      {/* Header */}
      <section className="py-12 sm:py-16 bg-[#132333] border-b border-[#AEB7C2]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center">
          <div className="text-xs tracking-widest uppercase text-[#C6A15B] mb-3 font-extrabold bg-[#08111C] border border-[#AEB7C2]/15 px-4 py-1.5 rounded-full inline-block shadow-sm">
            Our 3 Fleet Models
          </div>
          <h1
            className="text-3xl sm:text-5xl font-bold text-[#F4F1E8] mb-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Toyota Innova Crysta & Luxury Tempo Travellers
          </h1>
          <p className="text-[#AEB7C2] text-sm sm:text-base max-w-lg mx-auto">
            Carefully maintained, luxury chauffeur-driven fleet from Bangalore. Use the image slideshow controls to view interior photos and specifications.
          </p>
        </div>
      </section>

      {/* Fleet Grid */}
      <section className="py-16 sm:py-24 bg-[#08111C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {VEHICLES.map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

