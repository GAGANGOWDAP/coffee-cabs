import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router";
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
  ArrowRight,
  ArrowDown,
  Check,
  FileText,
} from "lucide-react";
import { VEHICLES } from "../data/vehicles";

interface BookingFormProps {
  initialVehicleId?: string;
  initialDestination?: string;
  title?: string;
  subtitle?: string;
}

const SERVICE_OPTIONS = [
  { id: "Outstation Round Trip", label: "Outstation Round Trip", badge: "Popular" },
  { id: "Outstation One Way", label: "Outstation One Way", badge: "Pay One-Way" },
  { id: "Local Bangalore Sightseeing (8h/80km)", label: "Local Sightseeing (8h/80km)", badge: "City Tour" },
  { id: "Airport Pickup / Drop (BLR)", label: "Airport Pickup / Drop", badge: "24/7 Service" },
  { id: "Corporate / Event Group Transport", label: "Corporate & Events", badge: "Group" },
];

export default function BookingForm({
  initialVehicleId = "",
  initialDestination = "",
}: BookingFormProps) {
  const [searchParams] = useSearchParams();
  const queryVehicleParam = searchParams.get("vehicle") || "";
  const queryDestination = searchParams.get("destination") || searchParams.get("drop") || "";
  const queryPackage = searchParams.get("package") || "";
  const queryRoute = searchParams.get("route") || "";

  const resolvedInitialVehicle =
    initialVehicleId ||
    queryVehicleParam ||
    VEHICLES[0].id;

  const initialVehicleObj =
    VEHICLES.find(
      (v) =>
        v.id === resolvedInitialVehicle ||
        v.slug === resolvedInitialVehicle
    ) || VEHICLES[0];

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [pickupLocation, setPickupLocation] = useState("Bangalore");
  const [dropLocation, setDropLocation] = useState(
    initialDestination || queryDestination || queryPackage || queryRoute || ""
  );
  const [travelDate, setTravelDate] = useState("");
  const [pickupTime, setPickupTime] = useState("06:00 AM");
  const [passengers, setPassengers] = useState("4 Passengers");
  const [preferredVehicle, setPreferredVehicle] = useState(initialVehicleObj.id);
  const [serviceType, setServiceType] = useState("Outstation Round Trip");
  const [notes, setNotes] = useState(
    queryPackage ? `Package Inquiry: ${queryPackage}` : queryRoute ? `Route Inquiry: ${queryRoute}` : ""
  );

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (queryVehicleParam || initialVehicleId) {
      const matched = VEHICLES.find(
        (v) =>
          v.id === (queryVehicleParam || initialVehicleId) ||
          v.slug === (queryVehicleParam || initialVehicleId)
      );
      if (matched) {
        setPreferredVehicle(matched.id);
      }
    }
  }, [queryVehicleParam, initialVehicleId]);

  useEffect(() => {
    if (initialDestination) {
      setDropLocation(initialDestination);
    } else if (queryDestination) {
      setDropLocation(queryDestination);
    } else if (queryPackage) {
      setDropLocation(queryPackage);
    } else if (queryRoute) {
      setDropLocation(queryRoute);
    }
  }, [initialDestination, queryDestination, queryPackage, queryRoute]);

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
    if (!validateForm()) {
      if (formRef.current) {
        formRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      return;
    }

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
      `*Preferred Vehicle:* ${selectedVehicleObj.name} (₹${selectedVehicleObj.pricePerKm}/km)\n` +
      (notes ? `*Notes:* ${notes}\n\n` : "\n") +
      `Please confirm available vehicle and owner-approved price.`
  );

  return (
    <div className="bg-white rounded-3xl border border-[#DDD5C8] shadow-sm overflow-hidden text-[#252525]">
      {/* Form Progress Indicator Header */}
      <div className="bg-[#F7F3EC] p-4 sm:p-6 border-b border-[#DDD5C8]">
        <div className="flex items-center justify-between max-w-md mx-auto text-xs font-bold">
          <div className="flex items-center gap-2 text-[#23483A]">
            <span className="w-7 h-7 rounded-full bg-[#23483A] text-white flex items-center justify-center text-xs font-extrabold shadow-sm">
              01
            </span>
            <span>Customer</span>
          </div>
          <ArrowRight size={14} className="text-[#DDD5C8]" />
          <div className="flex items-center gap-2 text-[#23483A]">
            <span className="w-7 h-7 rounded-full bg-[#23483A] text-white flex items-center justify-center text-xs font-extrabold shadow-sm">
              02
            </span>
            <span>Journey</span>
          </div>
          <ArrowRight size={14} className="text-[#DDD5C8]" />
          <div className="flex items-center gap-2 text-[#23483A]">
            <span className="w-7 h-7 rounded-full bg-[#23483A] text-white flex items-center justify-center text-xs font-extrabold shadow-sm">
              03
            </span>
            <span>Vehicle</span>
          </div>
        </div>
      </div>

      <div className="p-6 sm:p-8">
        {submitted ? (
          /* Confirmation View */
          <div className="text-center py-8 space-y-6 max-w-xl mx-auto">
            <div className="w-16 h-16 bg-[#EDE5D8] text-[#23483A] rounded-full flex items-center justify-center mx-auto border border-[#DDD5C8]">
              <CheckCircle2 size={36} />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#4A3025] mb-2">
                Booking Enquiry Sent Successfully!
              </h3>
              <p className="text-xs text-[#6F6A63] mb-6">
                Thank you, <span className="font-bold text-[#252525]">{fullName}</span>. Our team will verify fleet availability and confirm your owner-approved fare.
              </p>

              <div className="bg-[#F7F3EC] p-5 rounded-2xl border border-[#DDD5C8] text-left text-xs space-y-3 mb-6">
                <p className="font-bold text-[#4A3025] text-xs uppercase tracking-wider border-b border-[#DDD5C8] pb-2 flex items-center gap-1.5">
                  <FileText size={14} className="text-[#23483A]" /> Request Details
                </p>
                <div className="grid grid-cols-2 gap-2.5 text-[#6F6A63]">
                  <div>
                    <span className="font-bold text-[#252525] block text-[11px]">Customer Name</span>
                    {fullName || "Traveler"}
                  </div>
                  <div>
                    <span className="font-bold text-[#252525] block text-[11px]">Phone</span>
                    {phone}
                  </div>
                  <div>
                    <span className="font-bold text-[#252525] block text-[11px]">Service Type</span>
                    {serviceType}
                  </div>
                  <div>
                    <span className="font-bold text-[#252525] block text-[11px]">Preferred Vehicle</span>
                    {selectedVehicleObj.name}
                  </div>
                  <div>
                    <span className="font-bold text-[#252525] block text-[11px]">Pickup</span>
                    {pickupLocation}
                  </div>
                  <div>
                    <span className="font-bold text-[#252525] block text-[11px]">Destination</span>
                    {dropLocation || "N/A"}
                  </div>
                  <div>
                    <span className="font-bold text-[#252525] block text-[11px]">Travel Date & Time</span>
                    {travelDate ? `${travelDate} @ ${pickupTime}` : "Flexible"}
                  </div>
                  <div>
                    <span className="font-bold text-[#252525] block text-[11px]">Passengers</span>
                    {passengers}
                  </div>
                </div>
              </div>

              <blockquote className="bg-[#F7F3EC] text-[#252525] p-4 rounded-xl border-l-4 border-[#23483A] text-xs font-medium leading-relaxed mb-6 text-left">
                We'll review your trip details and contact you to confirm availability and the applicable owner-approved fare.
              </blockquote>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={`https://wa.me/917676726209?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#23483A] text-white text-xs font-bold rounded-xl hover:bg-[#4A3025] transition-all shadow-sm min-h-[48px] focus-visible:outline-2 focus-visible:outline-[#23483A]"
                aria-label="Send booking details via WhatsApp"
              >
                <MessageSquare size={16} /> Chat on WhatsApp Instant
              </a>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#4A3025] text-white text-xs font-bold rounded-xl hover:bg-[#23483A] transition-all min-h-[48px]"
              >
                Submit Another Enquiry
              </button>
            </div>
          </div>
        ) : (
          /* Main Form Flow */
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-8" noValidate>
            {/* SECTION 01: CUSTOMER INFORMATION */}
            <section className="space-y-4">
              <div className="flex items-center gap-2 border-b border-[#DDD5C8] pb-2.5">
                <Users size={16} className="text-[#23483A]" />
                <h3 className="text-xs uppercase tracking-widest font-extrabold text-[#4A3025]">
                  01. Customer Information
                </h3>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="form-full-name" className="block text-xs font-bold text-[#252525] mb-1.5">
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
                    className={`w-full bg-white border px-4 py-3 text-xs text-[#252525] placeholder:text-[#6F6A63]/60 rounded-xl focus:outline-none focus:border-[#23483A] focus:ring-1 focus:ring-[#23483A] transition-colors min-h-[48px] ${
                      errors.fullName ? "border-red-500" : "border-[#DDD5C8]"
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1 font-semibold" role="alert">
                      <AlertCircle size={12} /> {errors.fullName}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="form-phone" className="block text-xs font-bold text-[#252525] mb-1.5">
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
                    className={`w-full bg-white border px-4 py-3 text-xs text-[#252525] placeholder:text-[#6F6A63]/60 rounded-xl focus:outline-none focus:border-[#23483A] focus:ring-1 focus:ring-[#23483A] transition-colors min-h-[48px] ${
                      errors.phone ? "border-red-500" : "border-[#DDD5C8]"
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1 font-semibold" role="alert">
                      <AlertCircle size={12} /> {errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="form-email" className="block text-xs font-bold text-[#252525] mb-1.5">
                    Email Address (Optional)
                  </label>
                  <input
                    id="form-email"
                    type="email"
                    autoComplete="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white border border-[#DDD5C8] px-4 py-3 text-xs text-[#252525] placeholder:text-[#6F6A63]/60 rounded-xl focus:outline-none focus:border-[#23483A] focus:ring-1 focus:ring-[#23483A] transition-colors min-h-[48px]"
                  />
                </div>
              </div>
            </section>

            {/* SECTION 02: YOUR JOURNEY */}
            <section className="space-y-5">
              <div className="flex items-center gap-2 border-b border-[#DDD5C8] pb-2.5">
                <MapPin size={16} className="text-[#23483A]" />
                <h3 className="text-xs uppercase tracking-widest font-extrabold text-[#4A3025]">
                  02. Your Journey
                </h3>
              </div>

              {/* Service Type Cards */}
              <div>
                <label className="block text-xs font-bold text-[#252525] mb-2">
                  Select Service Type
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
                  {SERVICE_OPTIONS.map((opt) => {
                    const isSelected = serviceType === opt.id;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setServiceType(opt.id)}
                        className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between focus-visible:outline-2 focus-visible:outline-[#23483A] min-h-[64px] ${
                          isSelected
                            ? "bg-[#23483A] text-white border-[#23483A] shadow-sm"
                            : "bg-[#F7F3EC] text-[#252525] border-[#DDD5C8] hover:border-[#23483A]/50 hover:bg-white"
                        }`}
                        aria-pressed={isSelected}
                      >
                        <div className="flex items-center justify-between w-full mb-1">
                          <span
                            className={`text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded ${
                              isSelected ? "bg-white/20 text-white" : "bg-[#EDE5D8] text-[#4A3025]"
                            }`}
                          >
                            {opt.badge}
                          </span>
                          {isSelected && <Check size={12} className="text-white" />}
                        </div>
                        <span className="text-xs font-bold leading-tight line-clamp-2">
                          {opt.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Passenger Selector & Service Type Row 1 */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="form-service-type-dropdown" className="block text-xs font-bold text-[#252525] mb-1.5">
                    Service Details / Category
                  </label>
                  <select
                    id="form-service-type-dropdown"
                    value={serviceType}
                    onChange={(e) => setServiceType(e.target.value)}
                    className="w-full bg-white border border-[#DDD5C8] px-4 py-3 text-xs font-semibold text-[#252525] rounded-xl focus:outline-none focus:border-[#23483A] focus:ring-1 focus:ring-[#23483A] transition-colors cursor-pointer min-h-[48px]"
                  >
                    <option value="Outstation Round Trip">Outstation Round Trip</option>
                    <option value="Outstation One Way">Outstation One Way</option>
                    <option value="Local Bangalore Sightseeing (8h/80km)">Local Bangalore Sightseeing (8h/80km)</option>
                    <option value="Airport Pickup / Drop (BLR)">Airport Pickup / Drop (BLR)</option>
                    <option value="Corporate / Event Group Transport">Corporate / Event Group Transport</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="form-passengers" className="block text-xs font-bold text-[#252525] mb-1.5">
                    Number of Passengers
                  </label>
                  <select
                    id="form-passengers"
                    value={passengers}
                    onChange={(e) => setPassengers(e.target.value)}
                    className="w-full bg-white border border-[#DDD5C8] px-4 py-3 text-xs font-semibold text-[#252525] rounded-xl focus:outline-none focus:border-[#23483A] focus:ring-1 focus:ring-[#23483A] transition-colors cursor-pointer min-h-[48px]"
                  >
                    <option value="1-4 Passengers">1 – 4 Passengers (Sedan / Hatchback)</option>
                    <option value="5-7 Passengers (SUV / Crysta)">5 – 7 Passengers (Innova Crysta SUV)</option>
                    <option value="8-12 Passengers (Tempo Traveller)">8 – 12 Passengers (Tempo Traveller)</option>
                    <option value="13-16 Passengers (Urbania / Executive TT)">13 – 16 Passengers (Urbania / Exec TT)</option>
                    <option value="17-30 Passengers (Mini Bus)">17 – 30 Passengers (Mini Bus)</option>
                    <option value="30+ Passengers (Luxury Bus)">30+ Passengers (Luxury Bus)</option>
                  </select>
                </div>
              </div>

              {/* Journey Visual Layout: Pickup -> Drop */}
              <div className="grid sm:grid-cols-[1fr_auto_1fr] gap-3 items-center bg-[#F7F3EC] p-4 rounded-2xl border border-[#DDD5C8]">
                <div>
                  <label htmlFor="form-pickup-loc" className="block text-xs font-bold text-[#252525] mb-1.5">
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
                    className={`w-full bg-white border px-4 py-3 text-xs text-[#252525] placeholder:text-[#6F6A63]/60 rounded-xl focus:outline-none focus:border-[#23483A] focus:ring-1 focus:ring-[#23483A] transition-colors min-h-[48px] ${
                      errors.pickupLocation ? "border-red-500" : "border-[#DDD5C8]"
                    }`}
                  />
                  {errors.pickupLocation && (
                    <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1 font-semibold" role="alert">
                      <AlertCircle size={12} /> {errors.pickupLocation}
                    </p>
                  )}
                </div>

                {/* Route Arrow Indicator */}
                <div className="hidden sm:flex flex-col items-center justify-center pt-5 text-[#23483A]">
                  <div className="w-8 h-8 rounded-full bg-[#EDE5D8] border border-[#DDD5C8] flex items-center justify-center shadow-xs">
                    <ArrowRight size={16} />
                  </div>
                </div>
                <div className="flex sm:hidden justify-center my-0.5 text-[#23483A]">
                  <div className="w-7 h-7 rounded-full bg-[#EDE5D8] border border-[#DDD5C8] flex items-center justify-center shadow-xs">
                    <ArrowDown size={14} />
                  </div>
                </div>

                <div>
                  <label htmlFor="form-drop-loc" className="block text-xs font-bold text-[#252525] mb-1.5">
                    Destination / Drop Location *
                  </label>
                  <input
                    id="form-drop-loc"
                    type="text"
                    required
                    placeholder="e.g., Mysuru, Coorg, Ooty, Airport"
                    value={dropLocation}
                    onChange={(e) => {
                      setDropLocation(e.target.value);
                      if (errors.dropLocation) setErrors((prev) => ({ ...prev, dropLocation: "" }));
                    }}
                    className={`w-full bg-white border px-4 py-3 text-xs text-[#252525] placeholder:text-[#6F6A63]/60 rounded-xl focus:outline-none focus:border-[#23483A] focus:ring-1 focus:ring-[#23483A] transition-colors min-h-[48px] ${
                      errors.dropLocation ? "border-red-500" : "border-[#DDD5C8]"
                    }`}
                  />
                  {errors.dropLocation && (
                    <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1 font-semibold" role="alert">
                      <AlertCircle size={12} /> {errors.dropLocation}
                    </p>
                  )}
                </div>
              </div>

              {/* Travel Date & Preferred Pickup Time */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="form-travel-date" className="block text-xs font-bold text-[#252525] mb-1.5 flex items-center gap-1.5">
                    <Calendar size={13} className="text-[#23483A]" /> Travel Date *
                  </label>
                  <input
                    id="form-travel-date"
                    type="date"
                    required
                    min={new Date().toISOString().split("T")[0]}
                    value={travelDate}
                    onChange={(e) => {
                      setTravelDate(e.target.value);
                      if (errors.travelDate) setErrors((prev) => ({ ...prev, travelDate: "" }));
                    }}
                    className={`w-full bg-white border px-4 py-3 text-xs text-[#252525] rounded-xl focus:outline-none focus:border-[#23483A] focus:ring-1 focus:ring-[#23483A] transition-colors min-h-[48px] ${
                      errors.travelDate ? "border-red-500" : "border-[#DDD5C8]"
                    }`}
                  />
                  {errors.travelDate && (
                    <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1 font-semibold" role="alert">
                      <AlertCircle size={12} /> {errors.travelDate}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="form-pickup-time" className="block text-xs font-bold text-[#252525] mb-1.5 flex items-center gap-1.5">
                    <Clock size={13} className="text-[#23483A]" /> Preferred Pickup Time
                  </label>
                  <select
                    id="form-pickup-time"
                    value={pickupTime}
                    onChange={(e) => setPickupTime(e.target.value)}
                    className="w-full bg-white border border-[#DDD5C8] px-4 py-3 text-xs font-semibold text-[#252525] rounded-xl focus:outline-none focus:border-[#23483A] focus:ring-1 focus:ring-[#23483A] transition-colors cursor-pointer min-h-[48px]"
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
            </section>

            {/* SECTION 03: SELECT YOUR PREFERRED VEHICLE */}
            <section className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#DDD5C8] pb-2.5">
                <div className="flex items-center gap-2">
                  <Car size={16} className="text-[#23483A]" />
                  <h3 className="text-xs uppercase tracking-widest font-extrabold text-[#4A3025]">
                    03. Select Your Preferred Vehicle
                  </h3>
                </div>
                <span className="text-[11px] text-[#6F6A63] font-semibold">
                  Owner-Approved Tariffs
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {VEHICLES.map((vehicle) => {
                  const isSelected = preferredVehicle === vehicle.id;
                  return (
                    <button
                      type="button"
                      key={vehicle.id}
                      onClick={() => setPreferredVehicle(vehicle.id)}
                      className={`p-4 rounded-2xl border transition-all text-left flex flex-col justify-between focus-visible:outline-2 focus-visible:outline-[#23483A] min-h-[120px] relative ${
                        isSelected
                          ? "bg-[#FDFBF7] text-[#252525] border-2 border-[#23483A] shadow-md scale-[1.01]"
                          : "bg-white text-[#252525] border-[#DDD5C8] hover:border-[#23483A]/50 hover:bg-[#F7F3EC]/50"
                      }`}
                      aria-pressed={isSelected}
                    >
                      <div>
                        <div className="flex justify-between items-start mb-1.5">
                          <span
                            className={`text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                              isSelected
                                ? "bg-[#23483A] text-white"
                                : "bg-[#EDE5D8] text-[#4A3025]"
                            }`}
                          >
                            {vehicle.category}
                          </span>
                          {isSelected && (
                            <span className="flex items-center gap-1 text-[10px] font-bold text-[#23483A] bg-[#23483A]/10 border border-[#23483A]/20 px-2 py-0.5 rounded-full">
                              <Check size={11} /> Selected
                            </span>
                          )}
                        </div>

                        <h4 className="font-extrabold text-sm text-[#4A3025] mb-1 leading-snug">
                          {vehicle.name}
                        </h4>
                        
                        <div className="text-[11px] text-[#6F6A63] font-medium mb-3 flex items-center gap-2">
                          <span>{vehicle.seats} Seats</span>
                          <span>•</span>
                          <span>{vehicle.acAvailable ? "AC" : "Non-AC"}</span>
                        </div>
                      </div>

                      <div className="pt-2 border-t border-[#DDD5C8] flex items-center justify-between text-[11px]">
                        <span className="text-[#6F6A63] font-medium">Owner Tariff</span>
                        <span className="font-extrabold text-[#23483A] text-xs">
                          ₹{vehicle.pricePerKm}/km
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </section>

            {/* ADDITIONAL REQUIREMENTS */}
            <section className="space-y-2">
              <label htmlFor="form-notes" className="block text-xs font-bold text-[#252525]">
                Anything else we should know?
              </label>
              <textarea
                id="form-notes"
                rows={3}
                placeholder="Pickup instructions, extra luggage, multiple stops, child seat or other requirements..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full bg-white border border-[#DDD5C8] p-4 text-xs text-[#252525] placeholder:text-[#6F6A63]/60 rounded-xl focus:outline-none focus:border-[#23483A] focus:ring-1 focus:ring-[#23483A] transition-colors resize-none"
              />
            </section>

            {/* ENQUIRY SUMMARY */}
            <section className="bg-[#F7F3EC] p-5 sm:p-6 rounded-2xl border border-[#DDD5C8] space-y-3">
              <div className="flex items-center justify-between border-b border-[#DDD5C8] pb-2.5">
                <div className="flex items-center gap-2">
                  <FileText size={15} className="text-[#23483A]" />
                  <h4 className="font-extrabold text-xs tracking-widest uppercase text-[#4A3025]">
                    YOUR ENQUIRY
                  </h4>
                </div>
                <span className="text-[10px] font-bold text-[#23483A] bg-[#EDE5D8] px-2.5 py-0.5 rounded-full border border-[#DDD5C8]">
                  Live Summary
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#6F6A63] block mb-0.5">Service</span>
                  <span className="font-bold text-[#252525]">{serviceType || "Not selected"}</span>
                </div>

                <div>
                  <span className="text-[10px] uppercase font-bold text-[#6F6A63] block mb-0.5">Route</span>
                  <div className="font-bold text-[#252525] flex items-center gap-1 flex-wrap">
                    <span>{pickupLocation || "Bengaluru"}</span>
                    <span className="text-[#23483A]">↓</span>
                    <span>{dropLocation || "Not selected"}</span>
                  </div>
                </div>

                <div>
                  <span className="text-[10px] uppercase font-bold text-[#6F6A63] block mb-0.5">Date & Time</span>
                  <span className="font-bold text-[#252525]">
                    {travelDate ? `${travelDate} @ ${pickupTime}` : "Not selected"}
                  </span>
                </div>

                <div>
                  <span className="text-[10px] uppercase font-bold text-[#6F6A63] block mb-0.5">Passengers</span>
                  <span className="font-bold text-[#252525]">{passengers || "Not selected"}</span>
                </div>

                <div className="col-span-2 sm:col-span-2">
                  <span className="text-[10px] uppercase font-bold text-[#6F6A63] block mb-0.5">Preferred Vehicle</span>
                  <span className="font-bold text-[#23483A]">
                    {selectedVehicleObj ? `${selectedVehicleObj.name} (₹${selectedVehicleObj.pricePerKm}/km)` : "Not selected"}
                  </span>
                </div>
              </div>
            </section>

            {/* PRIMARY SUBMIT CTA */}
            <div className="space-y-3 pt-2">
              <button
                type="submit"
                disabled={submitting}
                className="w-full py-4 px-6 bg-[#4A3025] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider rounded-xl hover:bg-[#23483A] transition-all shadow-sm flex items-center justify-center gap-2 group min-h-[52px] focus-visible:outline-2 focus-visible:outline-[#23483A] disabled:opacity-75 disabled:cursor-not-allowed"
              >
                {submitting ? (
                  <span>SUBMITTING ENQUIRY...</span>
                ) : (
                  <>
                    <Send size={16} className="group-hover:translate-x-0.5 transition-transform" /> Send Booking Enquiry
                  </>
                )}
              </button>
              <p className="text-center text-[11px] text-[#6F6A63] font-medium leading-relaxed max-w-md mx-auto">
                We'll review your trip details and contact you to confirm availability and the applicable owner-approved fare.
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
