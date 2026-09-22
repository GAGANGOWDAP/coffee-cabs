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
  AlertCircle,
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

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const selectedVehicleObj =
    VEHICLES.find((v) => v.id === preferredVehicle) || VEHICLES[0];

  const validateForm = () => {
    const errs: { [key: string]: string } = {};
    if (!fullName.trim()) errs.fullName = "Please enter your full name.";
    if (!phone.trim() || phone.trim().length < 8)
      errs.phone = "Please enter a valid phone number (at least 8 digits).";
    if (!pickupLocation.trim()) errs.pickupLocation = "Please enter pickup location.";
    if (!dropLocation.trim()) errs.dropLocation = "Please enter destination / drop location.";
    if (!travelDate) errs.travelDate = "Please select travel date.";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
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
    <div className="bg-[#132333] rounded-3xl border border-[#AEB7C2]/15 shadow-2xl overflow-hidden text-[#F4F1E8]">
      {/* Form Header */}
      <div className="bg-[#08111C] text-[#F4F1E8] p-6 sm:p-10 text-center border-b border-[#AEB7C2]/15">
        <div className="inline-flex items-center gap-2 bg-[#132333] text-[#C6A15B] px-4 py-1.5 rounded-full border border-[#C6A15B]/30 text-xs font-semibold mb-3">
          <ShieldCheck size={14} className="text-[#C6A15B]" /> Owner-Approved Fleet & Transparent Tariff
        </div>
        <h2
          className="text-2xl sm:text-4xl font-extrabold text-[#F4F1E8] mb-2"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {title}
        </h2>
        <p className="text-xs sm:text-sm text-[#AEB7C2] max-w-xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      </div>

      <div className="p-6 sm:p-10">
        {submitted ? (
          /* Confirmation Message */
          <div className="text-center py-8 space-y-6 max-w-xl mx-auto">
            <div className="w-16 h-16 bg-[#C6A15B]/15 text-[#C6A15B] rounded-full flex items-center justify-center mx-auto border border-[#C6A15B]/30">
              <CheckCircle2 size={36} />
            </div>

            <div>
              <h3
                className="text-2xl font-bold text-[#F4F1E8] mb-3"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Booking Enquiry Sent Successfully!
              </h3>
              <div className="bg-[#08111C] p-5 rounded-2xl border border-[#AEB7C2]/15 text-left text-xs space-y-2 mb-4">
                <p className="font-bold text-[#C6A15B] text-sm mb-3">
                  Summary of your request:
                </p>
                <div className="grid grid-cols-2 gap-2 text-[#AEB7C2]">
                  <div>
                    <span className="font-bold text-[#F4F1E8]">Name:</span>{" "}
                    {fullName || "Traveler"}
                  </div>
                  <div>
                    <span className="font-bold text-[#F4F1E8]">Phone:</span>{" "}
                    {phone}
                  </div>
                  <div>
                    <span className="font-bold text-[#F4F1E8]">Service:</span>{" "}
                    {serviceType}
                  </div>
                  <div>
                    <span className="font-bold text-[#F4F1E8]">Vehicle:</span>{" "}
                    {selectedVehicleObj.shortName}
                  </div>
                  <div>
                    <span className="font-bold text-[#F4F1E8]">Pickup:</span>{" "}
                    {pickupLocation}
                  </div>
                  <div>
                    <span className="font-bold text-[#F4F1E8]">Drop:</span>{" "}
                    {dropLocation || "N/A"}
                  </div>
                  <div>
                    <span className="font-bold text-[#F4F1E8]">Date:</span>{" "}
                    {travelDate || "Flexible"}
                  </div>
                  <div>
                    <span className="font-bold text-[#F4F1E8]">
                      Passengers:
                    </span>{" "}
                    {passengers}
                  </div>
                </div>
              </div>

              <blockquote className="bg-[#08111C] text-[#F4F1E8] p-4 rounded-2xl border-l-4 border-[#C6A15B] text-xs font-semibold leading-relaxed mb-6 text-left">
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
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#25D366] text-white text-xs font-extrabold rounded-full hover:bg-[#1da851] transition-all shadow-md min-h-[48px] focus-visible:outline-2 focus-visible:outline-[#25D366]"
                aria-label="Send booking details via WhatsApp"
              >
                <MessageSquare size={16} /> Send via WhatsApp Instant Chat
              </a>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#C6A15B] text-[#08111C] text-xs font-extrabold rounded-full hover:bg-[#d4b06a] transition-all min-h-[48px] focus-visible:outline-2 focus-visible:outline-white"
              >
                Submit Another Enquiry
              </button>
            </div>
          </div>
        ) : (
          /* Main Form */
          <form onSubmit={handleSubmit} className="space-y-8" noValidate>
            {/* Step 1: Customer Details */}
            <div>
              <h3 className="text-xs uppercase tracking-widest font-extrabold text-[#C6A15B] mb-4 flex items-center gap-2 border-b border-[#AEB7C2]/15 pb-2">
                <Users size={14} className="text-[#C6A15B]" /> 1. Customer Information
              </h3>
              <div className="grid sm:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="form-full-name" className="block text-xs font-bold text-[#F4F1E8] mb-1.5">
                    Full Name *
                  </label>
                  <input
                    id="form-full-name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="e.g., Rajesh Kumar"
                    value={fullName}
                    onChange={(e) => {
                      setFullName(e.target.value);
                      if (errors.fullName) setErrors((prev) => ({ ...prev, fullName: "" }));
                    }}
                    className={`w-full bg-[#F4F1E8]/[0.06] border px-4 py-3.5 text-xs text-[#F4F1E8] placeholder:text-[#AEB7C2] rounded-xl focus:outline-none focus:border-[#C6A15B] focus-visible:outline-2 focus-visible:outline-[#C6A15B] transition-colors min-h-[48px] ${
                      errors.fullName ? "border-red-500" : "border-[#AEB7C2]/25"
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1" role="alert">
                      <AlertCircle size={12} /> {errors.fullName}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="form-phone" className="block text-xs font-bold text-[#F4F1E8] mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    id="form-phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      if (errors.phone) setErrors((prev) => ({ ...prev, phone: "" }));
                    }}
                    className={`w-full bg-[#F4F1E8]/[0.06] border px-4 py-3.5 text-xs text-[#F4F1E8] placeholder:text-[#AEB7C2] rounded-xl focus:outline-none focus:border-[#C6A15B] focus-visible:outline-2 focus-visible:outline-[#C6A15B] transition-colors min-h-[48px] ${
                      errors.phone ? "border-red-500" : "border-[#AEB7C2]/25"
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1" role="alert">
                      <AlertCircle size={12} /> {errors.phone}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="form-email" className="block text-xs font-bold text-[#F4F1E8] mb-1.5">
                    Email Address (Optional)
                  </label>
                  <input
                    id="form-email"
                    type="email"
                    autoComplete="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#F4F1E8]/[0.06] border border-[#AEB7C2]/25 px-4 py-3.5 text-xs text-[#F4F1E8] placeholder:text-[#AEB7C2] rounded-xl focus:outline-none focus:border-[#C6A15B] focus-visible:outline-2 focus-visible:outline-[#C6A15B] transition-colors min-h-[48px]"
                  />
                </div>
              </div>
            </div>

            {/* Step 2: Trip Information */}
            <div>
              <h3 className="text-xs uppercase tracking-widest font-extrabold text-[#C6A15B] mb-4 flex items-center gap-2 border-b border-[#AEB7C2]/15 pb-2">
                <MapPin size={14} className="text-[#C6A15B]" /> 2. Trip Information
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                <div>
                  <label htmlFor="form-service-type" className="block text-xs font-bold text-[#F4F1E8] mb-1.5">
                    Service Type
                  </label>
                  <select
                    id="form-service-type"
                    value={serviceType}
                    onChange={(e) => setServiceType(e.target.value)}
                    className="w-full bg-[#08111C] border border-[#AEB7C2]/25 px-4 py-3.5 text-xs font-semibold text-[#F4F1E8] rounded-xl focus:outline-none focus:border-[#C6A15B] focus-visible:outline-2 focus-visible:outline-[#C6A15B] transition-colors cursor-pointer min-h-[48px]"
                  >
                    <option value="Outstation Round Trip" className="bg-[#08111C] text-[#F4F1E8]">
                      Outstation Round Trip
                    </option>
                    <option value="Outstation One Way" className="bg-[#08111C] text-[#F4F1E8]">
                      Outstation One Way
                    </option>
                    <option value="Local Bangalore Sightseeing (8h/80km)" className="bg-[#08111C] text-[#F4F1E8]">
                      Local Bangalore Sightseeing
                    </option>
                    <option value="Airport Pickup / Drop (BLR)" className="bg-[#08111C] text-[#F4F1E8]">
                      Airport Pickup / Drop
                    </option>
                    <option value="Corporate / Event Group Transport" className="bg-[#08111C] text-[#F4F1E8]">
                      Corporate / Event Transport
                    </option>
                  </select>
                </div>

                <div>
                  <label htmlFor="form-pickup-loc" className="block text-xs font-bold text-[#F4F1E8] mb-1.5">
                    Pickup Location *
                  </label>
                  <input
                    id="form-pickup-loc"
                    type="text"
                    required
                    placeholder="e.g., Indiranagar, Bangalore"
                    value={pickupLocation}
                    onChange={(e) => {
                      setPickupLocation(e.target.value);
                      if (errors.pickupLocation) setErrors((prev) => ({ ...prev, pickupLocation: "" }));
                    }}
                    className={`w-full bg-[#F4F1E8]/[0.06] border px-4 py-3.5 text-xs text-[#F4F1E8] placeholder:text-[#AEB7C2] rounded-xl focus:outline-none focus:border-[#C6A15B] focus-visible:outline-2 focus-visible:outline-[#C6A15B] transition-colors min-h-[48px] ${
                      errors.pickupLocation ? "border-red-500" : "border-[#AEB7C2]/25"
                    }`}
                  />
                  {errors.pickupLocation && (
                    <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1" role="alert">
                      <AlertCircle size={12} /> {errors.pickupLocation}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="form-drop-loc" className="block text-xs font-bold text-[#F4F1E8] mb-1.5">
                    Drop Location / Destination *
                  </label>
                  <input
                    id="form-drop-loc"
                    type="text"
                    required
                    placeholder="e.g., Mysore, Coorg, Ooty, Airport"
                    value={dropLocation}
                    onChange={(e) => {
                      setDropLocation(e.target.value);
                      if (errors.dropLocation) setErrors((prev) => ({ ...prev, dropLocation: "" }));
                    }}
                    className={`w-full bg-[#F4F1E8]/[0.06] border px-4 py-3.5 text-xs text-[#F4F1E8] placeholder:text-[#AEB7C2] rounded-xl focus:outline-none focus:border-[#C6A15B] focus-visible:outline-2 focus-visible:outline-[#C6A15B] transition-colors min-h-[48px] ${
                      errors.dropLocation ? "border-red-500" : "border-[#AEB7C2]/25"
                    }`}
                  />
                  {errors.dropLocation && (
                    <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1" role="alert">
                      <AlertCircle size={12} /> {errors.dropLocation}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="form-passengers" className="block text-xs font-bold text-[#F4F1E8] mb-1.5">
                    Number of Passengers
                  </label>
                  <select
                    id="form-passengers"
                    value={passengers}
                    onChange={(e) => setPassengers(e.target.value)}
                    className="w-full bg-[#08111C] border border-[#AEB7C2]/25 px-4 py-3.5 text-xs font-semibold text-[#F4F1E8] rounded-xl focus:outline-none focus:border-[#C6A15B] focus-visible:outline-2 focus-visible:outline-[#C6A15B] transition-colors cursor-pointer min-h-[48px]"
                  >
                    <option value="1-4 Passengers" className="bg-[#08111C] text-[#F4F1E8]">1 – 4 Passengers</option>
                    <option value="5-7 Passengers (SUV / Crysta)" className="bg-[#08111C] text-[#F4F1E8]">
                      5 – 7 Passengers (Innova)
                    </option>
                    <option value="8-12 Passengers (Tempo Traveller)" className="bg-[#08111C] text-[#F4F1E8]">
                      8 – 12 Passengers (TT)
                    </option>
                    <option value="13-16 Passengers (Urbania / Executive TT)" className="bg-[#08111C] text-[#F4F1E8]">
                      13 – 16 Passengers (Urbania/TT)
                    </option>
                    <option value="17-30 Passengers (Mini Bus)" className="bg-[#08111C] text-[#F4F1E8]">
                      17 – 30 Passengers (Mini Bus)
                    </option>
                    <option value="30+ Passengers (Luxury Bus)" className="bg-[#08111C] text-[#F4F1E8]">
                      30+ Passengers (Luxury Bus)
                    </option>
                  </select>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="form-travel-date" className="block text-xs font-bold text-[#F4F1E8] mb-1.5 flex items-center gap-1.5">
                    <Calendar size={13} className="text-[#C6A15B]" /> Travel Date *
                  </label>
                  <input
                    id="form-travel-date"
                    type="date"
                    required
                    value={travelDate}
                    onChange={(e) => {
                      setTravelDate(e.target.value);
                      if (errors.travelDate) setErrors((prev) => ({ ...prev, travelDate: "" }));
                    }}
                    className={`w-full bg-[#F4F1E8]/[0.06] border px-4 py-3.5 text-xs text-[#F4F1E8] placeholder:text-[#AEB7C2] rounded-xl focus:outline-none focus:border-[#C6A15B] focus-visible:outline-2 focus-visible:outline-[#C6A15B] transition-colors min-h-[48px] ${
                      errors.travelDate ? "border-red-500" : "border-[#AEB7C2]/25"
                    }`}
                  />
                  {errors.travelDate && (
                    <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1" role="alert">
                      <AlertCircle size={12} /> {errors.travelDate}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="form-pickup-time" className="block text-xs font-bold text-[#F4F1E8] mb-1.5 flex items-center gap-1.5">
                    <Clock size={13} className="text-[#C6A15B]" /> Preferred Pickup Time
                  </label>
                  <select
                    id="form-pickup-time"
                    value={pickupTime}
                    onChange={(e) => setPickupTime(e.target.value)}
                    className="w-full bg-[#08111C] border border-[#AEB7C2]/25 px-4 py-3.5 text-xs font-semibold text-[#F4F1E8] rounded-xl focus:outline-none focus:border-[#C6A15B] focus-visible:outline-2 focus-visible:outline-[#C6A15B] transition-colors cursor-pointer min-h-[48px]"
                  >
                    <option value="05:00 AM" className="bg-[#08111C] text-[#F4F1E8]">05:00 AM (Early Morning)</option>
                    <option value="06:00 AM" className="bg-[#08111C] text-[#F4F1E8]">06:00 AM</option>
                    <option value="07:00 AM" className="bg-[#08111C] text-[#F4F1E8]">07:00 AM</option>
                    <option value="08:00 AM" className="bg-[#08111C] text-[#F4F1E8]">08:00 AM</option>
                    <option value="09:00 AM" className="bg-[#08111C] text-[#F4F1E8]">09:00 AM</option>
                    <option value="10:00 AM" className="bg-[#08111C] text-[#F4F1E8]">10:00 AM</option>
                    <option value="02:00 PM" className="bg-[#08111C] text-[#F4F1E8]">02:00 PM (Afternoon)</option>
                    <option value="06:00 PM" className="bg-[#08111C] text-[#F4F1E8]">06:00 PM (Evening)</option>
                    <option value="10:00 PM" className="bg-[#08111C] text-[#F4F1E8]">10:00 PM (Night Pickup)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Step 3: Vehicle Preference */}
            <div>
              <fieldset>
                <legend className="text-xs uppercase tracking-widest font-extrabold text-[#C6A15B] mb-4 flex items-center gap-2 border-b border-[#AEB7C2]/15 pb-2 w-full">
                  <Car size={14} className="text-[#C6A15B]" /> 3. Select Preferred Fleet Vehicle
                </legend>
                <div className="grid sm:grid-cols-3 gap-3">
                  {VEHICLES.map((vehicle) => {
                    const isSelected = preferredVehicle === vehicle.id;
                    return (
                      <button
                        type="button"
                        key={vehicle.id}
                        onClick={() => setPreferredVehicle(vehicle.id)}
                        className={`p-4 rounded-2xl border transition-all text-left flex flex-col justify-between focus-visible:outline-2 focus-visible:outline-[#C6A15B] min-h-[110px] ${
                          isSelected
                            ? "bg-[#08111C] text-[#F4F1E8] border-[#C6A15B] shadow-lg scale-[1.02]"
                            : "bg-[#F4F1E8]/[0.04] text-[#F4F1E8] border-[#AEB7C2]/20 hover:border-[#C6A15B]/50"
                        }`}
                        aria-pressed={isSelected}
                      >
                        <div>
                          <div className="flex justify-between items-start mb-1">
                            <span
                              className={`text-[10px] font-extrabold uppercase tracking-wider ${
                                isSelected ? "text-[#C6A15B]" : "text-[#AEB7C2]"
                              }`}
                            >
                              {vehicle.category}
                            </span>
                            {isSelected && (
                              <span className="bg-[#C6A15B] text-[#08111C] text-[10px] font-extrabold px-2 py-0.5 rounded-full">
                                Selected
                              </span>
                            )}
                          </div>
                          <h4 className="font-extrabold text-sm mb-1 text-[#F4F1E8]">
                            {vehicle.name}
                          </h4>
                          <p className="text-[11px] mb-3 text-[#AEB7C2]">
                            Seating: {vehicle.seats} Seats
                          </p>
                        </div>
                        <div className="pt-2 border-t border-[#AEB7C2]/15 text-[11px] font-semibold text-[#C6A15B]">
                          Owner Tariff: ₹{vehicle.pricePerKm}/km
                        </div>
                      </button>
                    );
                  })}
                </div>
              </fieldset>
            </div>

            {/* Step 4: Additional Notes */}
            <div>
              <label htmlFor="form-notes" className="block text-xs font-bold text-[#F4F1E8] mb-1.5">
                Additional Notes / Special Requirements
              </label>
              <textarea
                id="form-notes"
                rows={3}
                placeholder="e.g., Carrying extra luggage, travel with kids/senior citizens, specific pickup landmark..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full bg-[#F4F1E8]/[0.06] border border-[#AEB7C2]/25 p-4 text-xs text-[#F4F1E8] placeholder:text-[#AEB7C2] rounded-xl focus:outline-none focus:border-[#C6A15B] focus-visible:outline-2 focus-visible:outline-[#C6A15B] transition-colors resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={submitting}
                className="w-full py-4 bg-[#C6A15B] text-[#08111C] text-xs font-extrabold uppercase tracking-wider rounded-full hover:bg-[#d4b06a] transition-all shadow-xl flex items-center justify-center gap-2 group min-h-[48px] focus-visible:outline-2 focus-visible:outline-white disabled:opacity-75 disabled:cursor-not-allowed"
              >
                {submitting ? (
                  <span>SUBMITTING...</span>
                ) : (
                  <>
                    <Send size={15} /> Send Booking Enquiry
                  </>
                )}
              </button>
              <p className="text-center text-[11px] text-[#AEB7C2] mt-3 font-medium">
                Our reservation team will contact you promptly to confirm vehicle assignment and applicable pricing.
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}


