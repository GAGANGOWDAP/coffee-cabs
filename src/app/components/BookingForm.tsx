import { useState } from "react";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Car,
  CheckCircle2,
  Send,
  MessageSquare,
  ShieldCheck,
} from "lucide-react";
import { VEHICLES } from "../data/vehicles";

interface BookingFormProps {
  initialVehicleId?: string;
  initialDestination?: string;
  title?: string;
  subtitle?: string;
}

export default function BookingForm({
  initialVehicleId = "",
  initialDestination = "",
  title = "Request a Booking / Enquiry",
  subtitle = "Choose your vehicle preference and share trip details. Our team will review and confirm vehicle availability and owner-approved pricing with you.",
}: BookingFormProps) {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [pickupLocation, setPickupLocation] = useState("Bangalore");
  const [dropLocation, setDropLocation] = useState(initialDestination);
  const [travelDate, setTravelDate] = useState("");
  const [pickupTime, setPickupTime] = useState("06:00 AM");
  const [passengers, setPassengers] = useState("4");
  const [preferredVehicle, setPreferredVehicle] = useState(
    initialVehicleId || VEHICLES[0].id
  );
  const [serviceType, setServiceType] = useState("Outstation Round Trip");
  const [notes, setNotes] = useState("");

  const [submitted, setSubmitted] = useState(false);

  const selectedVehicleObj =
    VEHICLES.find((v) => v.id === preferredVehicle) || VEHICLES[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Hi Coffee Cabs! I would like to request a booking enquiry:\n\n` +
      `*Customer Name:* ${fullName || "Not provided"}\n` +
      `*Phone:* ${phone || "Not provided"}\n` +
      `*Email:* ${email || "Not provided"}\n` +
      `*Service Type:* ${serviceType}\n` +
      `*Pickup Location:* ${pickupLocation}\n` +
      `*Drop Location:* ${dropLocation || "As discussed"}\n` +
      `*Travel Date:* ${travelDate || "To be decided"}\n` +
      `*Pickup Time:* ${pickupTime}\n` +
      `*Passengers:* ${passengers}\n` +
      `*Preferred Vehicle:* ${selectedVehicleObj.name}\n` +
      (notes ? `*Notes:* ${notes}\n\n` : "\n") +
      `Please confirm available vehicle and owner-approved price.`
  );

  return (
    <div className="bg-white rounded-3xl border border-black/10 shadow-xl overflow-hidden text-[#09090b]">
      {/* Form Header */}
      <div className="bg-[#09090b] text-white p-6 sm:p-10 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 text-xs font-semibold mb-3">
          <ShieldCheck size={14} /> Owner-Approved Fleet & Transparent Tariff
        </div>
        <h2
          className="text-2xl sm:text-4xl font-extrabold text-white mb-2"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {title}
        </h2>
        <p className="text-xs sm:text-sm text-neutral-300 max-w-xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      </div>

      <div className="p-6 sm:p-10">
        {submitted ? (
          /* Confirmation Message */
          <div className="text-center py-8 space-y-6 max-w-xl mx-auto">
            <div className="w-16 h-16 bg-[#22c55e]/10 text-[#22c55e] rounded-full flex items-center justify-center mx-auto border border-[#22c55e]/30">
              <CheckCircle2 size={36} />
            </div>

            <div>
              <h3
                className="text-2xl font-bold text-[#09090b] mb-3"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Booking Enquiry Sent Successfully!
              </h3>
              <div className="bg-[#fafafa] p-5 rounded-2xl border border-black/10 text-left text-xs space-y-2 mb-4">
                <p className="font-bold text-[#09090b] text-sm mb-3">
                  Summary of your request:
                </p>
                <div className="grid grid-cols-2 gap-2 text-[#52525b]">
                  <div>
                    <span className="font-bold text-[#09090b]">Name:</span>{" "}
                    {fullName || "Traveler"}
                  </div>
                  <div>
                    <span className="font-bold text-[#09090b]">Phone:</span>{" "}
                    {phone}
                  </div>
                  <div>
                    <span className="font-bold text-[#09090b]">Service:</span>{" "}
                    {serviceType}
                  </div>
                  <div>
                    <span className="font-bold text-[#09090b]">Vehicle:</span>{" "}
                    {selectedVehicleObj.shortName}
                  </div>
                  <div>
                    <span className="font-bold text-[#09090b]">Pickup:</span>{" "}
                    {pickupLocation}
                  </div>
                  <div>
                    <span className="font-bold text-[#09090b]">Drop:</span>{" "}
                    {dropLocation || "N/A"}
                  </div>
                  <div>
                    <span className="font-bold text-[#09090b]">Date:</span>{" "}
                    {travelDate || "Flexible"}
                  </div>
                  <div>
                    <span className="font-bold text-[#09090b]">
                      Passengers:
                    </span>{" "}
                    {passengers}
                  </div>
                </div>
              </div>

              <blockquote className="bg-[#f4f4f5] text-[#09090b] p-4 rounded-2xl border-l-4 border-[#09090b] text-xs font-semibold leading-relaxed mb-6">
                Thank you for your enquiry. Our team will review your
                requirements and confirm the available vehicle and applicable
                price with you.
              </blockquote>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={`https://wa.me/917676726209?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#25D366] text-white text-xs font-extrabold rounded-full hover:bg-[#1da851] transition-all shadow-md"
              >
                <MessageSquare size={16} /> Send via WhatsApp Instant Chat
              </a>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#09090b] text-white text-xs font-extrabold rounded-full hover:bg-neutral-800 transition-all"
              >
                Submit Another Enquiry
              </button>
            </div>
          </div>
        ) : (
          /* Main Form */
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Step 1: Customer Details */}
            <div>
              <h3 className="text-xs uppercase tracking-widest font-extrabold text-[#71717a] mb-4 flex items-center gap-2 border-b border-black/5 pb-2">
                <Users size={14} className="text-[#09090b]" /> 1. Customer Information
              </h3>
              <div className="grid sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#09090b] mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., Rajesh Kumar"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-[#fafafa] border border-black/10 px-4 py-3 text-xs text-[#09090b] rounded-xl focus:outline-none focus:border-[#09090b] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#09090b] mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-[#fafafa] border border-black/10 px-4 py-3 text-xs text-[#09090b] rounded-xl focus:outline-none focus:border-[#09090b] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#09090b] mb-1.5">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#fafafa] border border-black/10 px-4 py-3 text-xs text-[#09090b] rounded-xl focus:outline-none focus:border-[#09090b] transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Step 2: Trip Information */}
            <div>
              <h3 className="text-xs uppercase tracking-widest font-extrabold text-[#71717a] mb-4 flex items-center gap-2 border-b border-black/5 pb-2">
                <MapPin size={14} className="text-[#09090b]" /> 2. Trip Information
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-bold text-[#09090b] mb-1.5">
                    Service Type
                  </label>
                  <select
                    value={serviceType}
                    onChange={(e) => setServiceType(e.target.value)}
                    className="w-full bg-[#fafafa] border border-black/10 px-4 py-3 text-xs font-semibold text-[#09090b] rounded-xl focus:outline-none focus:border-[#09090b] transition-colors cursor-pointer"
                  >
                    <option value="Outstation Round Trip">
                      Outstation Round Trip
                    </option>
                    <option value="Outstation One Way">
                      Outstation One Way
                    </option>
                    <option value="Local Bangalore Sightseeing (8h/80km)">
                      Local Bangalore Sightseeing
                    </option>
                    <option value="Airport Pickup / Drop (BLR)">
                      Airport Pickup / Drop
                    </option>
                    <option value="Corporate / Event Group Transport">
                      Corporate / Event Transport
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#09090b] mb-1.5">
                    Pickup Location *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., Indiranagar, Bangalore"
                    value={pickupLocation}
                    onChange={(e) => setPickupLocation(e.target.value)}
                    className="w-full bg-[#fafafa] border border-black/10 px-4 py-3 text-xs text-[#09090b] rounded-xl focus:outline-none focus:border-[#09090b] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#09090b] mb-1.5">
                    Drop Location / Destination *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., Mysore, Coorg, Ooty, Airport"
                    value={dropLocation}
                    onChange={(e) => setDropLocation(e.target.value)}
                    className="w-full bg-[#fafafa] border border-black/10 px-4 py-3 text-xs text-[#09090b] rounded-xl focus:outline-none focus:border-[#09090b] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#09090b] mb-1.5">
                    Number of Passengers
                  </label>
                  <select
                    value={passengers}
                    onChange={(e) => setPassengers(e.target.value)}
                    className="w-full bg-[#fafafa] border border-black/10 px-4 py-3 text-xs font-semibold text-[#09090b] rounded-xl focus:outline-none focus:border-[#09090b] transition-colors cursor-pointer"
                  >
                    <option value="1-4 Passengers">1 – 4 Passengers</option>
                    <option value="5-7 Passengers (SUV / Crysta)">
                      5 – 7 Passengers (Innova)
                    </option>
                    <option value="8-12 Passengers (Tempo Traveller)">
                      8 – 12 Passengers (TT)
                    </option>
                    <option value="13-16 Passengers (Urbania / Executive TT)">
                      13 – 16 Passengers (Urbania/TT)
                    </option>
                    <option value="17-30 Passengers (Mini Bus)">
                      17 – 30 Passengers (Mini Bus)
                    </option>
                    <option value="30+ Passengers (Luxury Bus)">
                      30+ Passengers (Luxury Bus)
                    </option>
                  </select>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#09090b] mb-1.5 flex items-center gap-1.5">
                    <Calendar size={13} /> Travel Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={travelDate}
                    onChange={(e) => setTravelDate(e.target.value)}
                    className="w-full bg-[#fafafa] border border-black/10 px-4 py-3 text-xs text-[#09090b] rounded-xl focus:outline-none focus:border-[#09090b] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#09090b] mb-1.5 flex items-center gap-1.5">
                    <Clock size={13} /> Preferred Pickup Time
                  </label>
                  <select
                    value={pickupTime}
                    onChange={(e) => setPickupTime(e.target.value)}
                    className="w-full bg-[#fafafa] border border-black/10 px-4 py-3 text-xs font-semibold text-[#09090b] rounded-xl focus:outline-none focus:border-[#09090b] transition-colors cursor-pointer"
                  >
                    <option value="05:00 AM">05:00 AM (Early Morning)</option>
                    <option value="06:00 AM">06:00 AM</option>
                    <option value="07:00 AM">07:00 AM</option>
                    <option value="08:00 AM">08:00 AM</option>
                    <option value="09:00 AM">09:00 AM</option>
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="02:00 PM">02:00 PM (Afternoon)</option>
                    <option value="06:00 PM">06:00 PM (Evening)</option>
                    <option value="10:00 PM">10:00 PM (Night Pickup)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Step 3: Vehicle Preference */}
            <div>
              <h3 className="text-xs uppercase tracking-widest font-extrabold text-[#71717a] mb-4 flex items-center gap-2 border-b border-black/5 pb-2">
                <Car size={14} className="text-[#09090b]" /> 3. Select Preferred Fleet Vehicle
              </h3>
              <div className="grid sm:grid-cols-3 gap-3">
                {VEHICLES.map((vehicle) => {
                  const isSelected = preferredVehicle === vehicle.id;
                  return (
                    <div
                      key={vehicle.id}
                      onClick={() => setPreferredVehicle(vehicle.id)}
                      className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? "bg-[#09090b] text-white border-[#09090b] shadow-lg scale-[1.02]"
                          : "bg-[#fafafa] text-[#09090b] border-black/10 hover:border-black/30"
                      }`}
                    >
                      <div>
                        <div className="flex justify-between items-start mb-1">
                          <span
                            className={`text-[10px] font-extrabold uppercase tracking-wider ${
                              isSelected ? "text-neutral-400" : "text-[#71717a]"
                            }`}
                          >
                            {vehicle.category}
                          </span>
                          {isSelected && (
                            <span className="bg-white text-black text-[10px] font-extrabold px-2 py-0.5 rounded-full">
                              Selected
                            </span>
                          )}
                        </div>
                        <h4 className="font-extrabold text-sm mb-1">
                          {vehicle.name}
                        </h4>
                        <p
                          className={`text-[11px] mb-3 ${
                            isSelected ? "text-neutral-300" : "text-[#71717a]"
                          }`}
                        >
                          Seating: {vehicle.seats} Seats
                        </p>
                      </div>
                      <div className="pt-2 border-t border-current/10 text-[11px] font-semibold">
                        Owner Tariff: ₹{vehicle.pricePerKm}/km
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Additional Notes */}
            <div>
              <label className="block text-xs font-bold text-[#09090b] mb-1.5">
                Additional Notes / Special Requirements
              </label>
              <textarea
                rows={3}
                placeholder="e.g., Carrying extra luggage, travel with kids/senior citizens, specific pickup landmark..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full bg-[#fafafa] border border-black/10 p-4 text-xs text-[#09090b] rounded-xl focus:outline-none focus:border-[#09090b] transition-colors resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-4 bg-[#09090b] text-white text-xs font-extrabold uppercase tracking-wider rounded-full hover:bg-neutral-800 transition-all shadow-xl flex items-center justify-center gap-2 group"
              >
                <Send size={15} /> Send Booking Enquiry
              </button>
              <p className="text-center text-[11px] text-[#71717a] mt-3 font-medium">
                Our reservation team will contact you promptly to confirm vehicle assignment and applicable pricing.
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
