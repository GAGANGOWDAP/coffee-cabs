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
  ArrowLeft,
  Check,
  FileText,
  Phone,
} from "lucide-react";
import { VEHICLES, Vehicle } from "../data/vehicles";
import { trackFormStart, trackFormSubmit, trackPhoneCallClick, trackWhatsAppClick } from "../utils/analytics";
import TripSummaryCard from "./travel/TripSummaryCard";
import VehicleComparisonTable from "./travel/VehicleComparisonTable";

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

const PASSENGER_OPTIONS = [
  "1–4 Passengers (Sedan)",
  "5–7 Passengers (SUV / Innova Crysta)",
  "8–12 Passengers (Executive Van)",
  "13+ Passengers (Tempo Traveller)",
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
  const queryPickup = searchParams.get("pickup") || "";
  const queryDate = searchParams.get("date") || "";
  const queryTime = searchParams.get("time") || "";
  const queryService = searchParams.get("service") || "";
  const queryPassengers = searchParams.get("passengers") || "";

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

  // 5-Step Progressive Disclosure State
  const [step, setStep] = useState<number>(1);
  const [showDecisionGuide, setShowDecisionGuide] = useState<boolean>(false);

  // Form Fields
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [pickupLocation, setPickupLocation] = useState(queryPickup || "Bangalore");
  const [dropLocation, setDropLocation] = useState(
    initialDestination || queryDestination || queryPackage || queryRoute || ""
  );
  const [travelDate, setTravelDate] = useState(queryDate || "");
  const [pickupTime, setPickupTime] = useState(queryTime || "06:00 AM");
  const [passengers, setPassengers] = useState(queryPassengers || "5–7 Passengers (SUV / Innova Crysta)");
  const [preferredVehicle, setPreferredVehicle] = useState(initialVehicleObj.id);
  const [serviceType, setServiceType] = useState(queryService || "Outstation Round Trip");
  const [notes, setNotes] = useState(
    queryPackage ? `Package Inquiry: ${queryPackage}` : queryRoute ? `Route Inquiry: ${queryRoute}` : ""
  );

  // Spam Protection & Analytics
  const [honeypot, setHoneypot] = useState("");
  const renderTimeRef = useRef<number>(Date.now());
  const hasStartedFormRef = useRef<boolean>(false);

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const formRef = useRef<HTMLDivElement>(null);

  const handleFormInteraction = () => {
    if (!hasStartedFormRef.current) {
      hasStartedFormRef.current = true;
      trackFormStart("booking_form");
    }
  };

  const sanitizeInput = (val: string) => val.replace(/<[^>]*>?/gm, "").trim();

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

  const selectedVehicleObj: Vehicle =
    VEHICLES.find((v) => v.id === preferredVehicle) || VEHICLES[0];

  // Validation per step
  const validateStep1 = () => {
    const errs: { [key: string]: string } = {};
    if (!sanitizeInput(pickupLocation)) errs.pickupLocation = "Please enter pickup location.";
    if (!sanitizeInput(dropLocation)) errs.dropLocation = "Please enter destination / drop location.";
    if (!travelDate) errs.travelDate = "Please select travel date.";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const validateStep4 = () => {
    const errs: { [key: string]: string } = {};
    if (!sanitizeInput(fullName)) errs.fullName = "Please enter your full name.";
    if (!phone.trim() || phone.trim().length < 8)
      errs.phone = "Please enter a valid primary mobile number (at least 8 digits).";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const nextStep = () => {
    if (step === 1 && !validateStep1()) return;
    setErrors({});
    setStep((prev) => Math.min(prev + 1, 4));
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const prevStep = () => {
    setErrors({});
    setStep((prev) => Math.max(prev - 1, 1));
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot & bot speed check
    if (honeypot.trim() !== "" || Date.now() - renderTimeRef.current < 1500) {
      setSubmitted(true);
      return;
    }

    if (!validateStep4()) {
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setStep(5);
      trackFormSubmit("booking_form");
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
      `Please confirm available vehicle and owner-approved fare.`
  );

  return (
    <div ref={formRef} className="bg-[#FFFDF7] rounded-3xl border border-[#DCC7AA] shadow-sm overflow-hidden text-[#4B3832]">
      {/* ── PROGRESS STEPPER HEADER ── */}
      <div className="bg-[#F5E6CA] p-4 sm:p-6 border-b border-[#DCC7AA]">
        <div className="flex items-center justify-between max-w-lg mx-auto text-xs font-bold mb-3">
          <div className={`flex items-center gap-1.5 ${step >= 1 ? "text-[#6F4E37]" : "text-[#6F4E37]"}`}>
            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${step >= 1 ? "bg-[#6F4E37] text-[#FFFDF7]" : "bg-[#DCC7AA] text-[#6F4E37]"}`}>1</span>
            <span className="hidden sm:inline">Trip</span>
          </div>
          <div className={`h-0.5 flex-1 mx-2 ${step >= 2 ? "bg-[#6F4E37]" : "bg-[#DCC7AA]"}`} />
          <div className={`flex items-center gap-1.5 ${step >= 2 ? "text-[#6F4E37]" : "text-[#6F4E37]"}`}>
            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${step >= 2 ? "bg-[#6F4E37] text-[#FFFDF7]" : "bg-[#DCC7AA] text-[#6F4E37]"}`}>2</span>
            <span className="hidden sm:inline">Vehicle</span>
          </div>
          <div className={`h-0.5 flex-1 mx-2 ${step >= 3 ? "bg-[#6F4E37]" : "bg-[#DCC7AA]"}`} />
          <div className={`flex items-center gap-1.5 ${step >= 3 ? "text-[#6F4E37]" : "text-[#6F4E37]"}`}>
            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${step >= 3 ? "bg-[#6F4E37] text-[#FFFDF7]" : "bg-[#DCC7AA] text-[#6F4E37]"}`}>3</span>
            <span className="hidden sm:inline">Summary</span>
          </div>
          <div className={`h-0.5 flex-1 mx-2 ${step >= 4 ? "bg-[#6F4E37]" : "bg-[#DCC7AA]"}`} />
          <div className={`flex items-center gap-1.5 ${step >= 4 ? "text-[#6F4E37]" : "text-[#6F4E37]"}`}>
            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${step >= 4 ? "bg-[#6F4E37] text-[#FFFDF7]" : "bg-[#DCC7AA] text-[#6F4E37]"}`}>4</span>
            <span className="hidden sm:inline">Details</span>
          </div>
        </div>

        <div className="text-center">
          <span className="text-[11px] font-extrabold text-[#6F4E37] uppercase tracking-widest block">
            STEP {step} OF 4
          </span>
          <h2 className="text-lg sm:text-xl font-extrabold text-[#4B3832]">
            {step === 1 && "1. Trip Details"}
            {step === 2 && "2. Passengers & Vehicle Selection"}
            {step === 3 && "3. Review Trip Summary"}
            {step === 4 && "4. Customer Contact Details"}
            {step === 5 && "Enquiry Request Submitted"}
          </h2>
        </div>
      </div>

      {/* ── FORM CONTENT ── */}
      <div className="p-5 sm:p-8" onFocus={handleFormInteraction} onChange={handleFormInteraction}>
        {/* Honeypot for bot protection */}
        <input
          type="text"
          name="b_hp_check"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />

        {/* ── STEP 1: TRIP DETAILS ── */}
        {step === 1 && (
          <div className="space-y-5">
            {/* Trip Type Options */}
            <div>
              <label className="block text-xs font-bold text-[#4B3832] uppercase tracking-wider mb-2">
                Select Service Type <span className="text-[#B86F52]">*</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                {SERVICE_OPTIONS.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setServiceType(opt.id)}
                    className={`p-3 rounded-2xl border text-left transition-all relative ${
                      serviceType === opt.id
                        ? "bg-[#6F4E37] text-[#FFFDF7] border-[#6F4E37] shadow-xs"
                        : "bg-[#FFFDF7] text-[#4B3832] border-[#DCC7AA] hover:border-[#6F4E37]"
                    }`}
                  >
                    <span className="block text-xs font-bold mb-0.5">{opt.label}</span>
                    <span className={`text-[10px] uppercase tracking-wider font-extrabold px-2 py-0.5 rounded-full inline-block ${serviceType === opt.id ? "bg-[#FFFDF7]/20 text-[#FFFDF7]" : "bg-[#DCC7AA] text-[#4B3832]"}`}>
                      {opt.badge}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Pickup & Drop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#4B3832] uppercase tracking-wider mb-1">
                  Pickup Location <span className="text-[#B86F52]">*</span>
                </label>
                <div className="relative">
                  <MapPin size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#6F4E37]" />
                  <input
                    type="text"
                    required
                    value={pickupLocation}
                    onChange={(e) => setPickupLocation(e.target.value)}
                    placeholder="e.g. Bangalore, BLR Airport, Koramangala"
                    className={`w-full pl-10 pr-3 py-2.5 bg-[#FFFDF7] border rounded-xl text-xs sm:text-sm font-semibold text-[#4B3832] focus:outline-none focus:border-[#6F4E37] ${
                      errors.pickupLocation ? "border-red-500 bg-red-50" : "border-[#DCC7AA]"
                    }`}
                  />
                </div>
                {errors.pickupLocation && <p className="text-xs text-red-600 mt-1 font-medium">{errors.pickupLocation}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-[#4B3832] uppercase tracking-wider mb-1">
                  Drop Location / Destination <span className="text-[#B86F52]">*</span>
                </label>
                <div className="relative">
                  <MapPin size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#4B3832]" />
                  <input
                    type="text"
                    required
                    value={dropLocation}
                    onChange={(e) => setDropLocation(e.target.value)}
                    placeholder="e.g. Mysuru, Coorg, Chikkamagaluru, Hampi"
                    className={`w-full pl-10 pr-3 py-2.5 bg-[#FFFDF7] border rounded-xl text-xs sm:text-sm font-semibold text-[#4B3832] focus:outline-none focus:border-[#6F4E37] ${
                      errors.dropLocation ? "border-red-500 bg-red-50" : "border-[#DCC7AA]"
                    }`}
                  />
                </div>
                {errors.dropLocation && <p className="text-xs text-red-600 mt-1 font-medium">{errors.dropLocation}</p>}
              </div>
            </div>

            {/* Date & Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#4B3832] uppercase tracking-wider mb-1">
                  Travel Date <span className="text-[#B86F52]">*</span>
                </label>
                <div className="relative">
                  <Calendar size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#6F4E37]" />
                  <input
                    type="date"
                    required
                    value={travelDate}
                    onChange={(e) => setTravelDate(e.target.value)}
                    min={new Date().toISOString().split("T")[0]}
                    className={`w-full pl-10 pr-3 py-2.5 bg-[#FFFDF7] border rounded-xl text-xs sm:text-sm font-semibold text-[#4B3832] focus:outline-none focus:border-[#6F4E37] ${
                      errors.travelDate ? "border-red-500 bg-red-50" : "border-[#DCC7AA]"
                    }`}
                  />
                </div>
                {errors.travelDate && <p className="text-xs text-red-600 mt-1 font-medium">{errors.travelDate}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-[#4B3832] uppercase tracking-wider mb-1">
                  Pickup Time
                </label>
                <div className="relative">
                  <Clock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#6F4E37]" />
                  <select
                    value={pickupTime}
                    onChange={(e) => setPickupTime(e.target.value)}
                    className="w-full pl-10 pr-8 py-2.5 bg-[#FFFDF7] border border-[#DCC7AA] rounded-xl text-xs sm:text-sm font-semibold text-[#4B3832] focus:outline-none focus:border-[#6F4E37] appearance-none"
                  >
                    <option value="05:00 AM">05:00 AM</option>
                    <option value="06:00 AM">06:00 AM (Early Morning)</option>
                    <option value="07:00 AM">07:00 AM</option>
                    <option value="08:00 AM">08:00 AM</option>
                    <option value="09:00 AM">09:00 AM</option>
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="02:00 PM">02:00 PM (Afternoon)</option>
                    <option value="06:00 PM">06:00 PM (Evening)</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                type="button"
                onClick={nextStep}
                className="w-full py-3.5 px-6 bg-[#6F4E37] text-[#FFFDF7] text-xs sm:text-sm uppercase tracking-wider font-extrabold rounded-2xl hover:bg-[#4B3832] transition-all duration-300 shadow-md flex items-center justify-center gap-2 group min-h-[48px] focus-visible:outline-2 focus-visible:outline-[#6F4E37]"
              >
                <span>CONTINUE TO VEHICLE SELECTION</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        )}

        {/* ── STEP 2: PASSENGERS & VEHICLE SELECTION ── */}
        {step === 2 && (
          <div className="space-y-6">
            {/* Passenger Count Selection */}
            <div>
              <label className="block text-xs font-bold text-[#4B3832] uppercase tracking-wider mb-2">
                Passenger Count & Seating Requirement <span className="text-[#B86F52]">*</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {PASSENGER_OPTIONS.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setPassengers(opt)}
                    className={`p-3 rounded-2xl border text-left transition-all ${
                      passengers === opt
                        ? "bg-[#6F4E37] text-[#FFFDF7] border-[#6F4E37] shadow-xs font-bold"
                        : "bg-[#FFFDF7] text-[#4B3832] border-[#DCC7AA] hover:border-[#6F4E37]"
                    }`}
                  >
                    <div className="flex items-center gap-2 text-xs">
                      <Users size={15} />
                      <span>{opt}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Vehicle Selection Cards */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="block text-xs font-bold text-[#4B3832] uppercase tracking-wider">
                  Select Vehicle Category
                </label>
                <button
                  type="button"
                  onClick={() => setShowDecisionGuide(!showDecisionGuide)}
                  className="text-xs font-bold text-[#6F4E37] underline focus-visible:outline-2 focus-visible:outline-[#6F4E37] rounded"
                >
                  {showDecisionGuide ? "Hide Decision Guide" : "Not sure which vehicle?"}
                </button>
              </div>

              {showDecisionGuide && (
                <div className="mb-4">
                  <VehicleComparisonTable
                    selectedVehicleId={preferredVehicle}
                    onSelectVehicle={(id) => {
                      setPreferredVehicle(id);
                      setShowDecisionGuide(false);
                    }}
                  />
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {VEHICLES.slice(0, 3).map((v) => {
                  const isSelected = preferredVehicle === v.id;
                  return (
                    <div
                      key={v.id}
                      onClick={() => setPreferredVehicle(v.id)}
                      className={`p-4 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between ${
                        isSelected
                          ? "bg-[#F5E6CA] border-[#6F4E37] ring-2 ring-[#6F4E37]/30 shadow-xs"
                          : "bg-[#FFFDF7] border-[#DCC7AA] hover:border-[#6F4E37]"
                      }`}
                    >
                      <div>
                        <div className="aspect-[16/10] bg-[#FFFDF7] rounded-xl overflow-hidden mb-2 border border-[#DCC7AA]">
                          <img
                            src={v.image}
                            alt={v.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h4 className="font-bold text-xs sm:text-sm text-[#4B3832] mb-1">{v.name}</h4>
                        <p className="text-[11px] text-[#6F4E37] font-medium mb-1">{v.seatingCapacity}</p>
                        <p className="text-[10px] text-[#6F4E37] line-clamp-1">{v.luggageCapacity}</p>
                      </div>

                      <button
                        type="button"
                        className={`w-full mt-3 py-1.5 rounded-xl text-xs font-bold transition-colors text-center ${
                          isSelected
                            ? "bg-[#6F4E37] text-[#FFFDF7]"
                            : "bg-[#4B3832] text-[#FFFDF7] hover:bg-[#6F4E37]"
                        }`}
                      >
                        {isSelected ? "Selected" : "Select Vehicle"}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Navigation Actions */}
            <div className="flex items-center justify-between gap-3 pt-4 border-t border-[#DCC7AA]">
              <button
                type="button"
                onClick={prevStep}
                className="py-3 px-5 bg-[#FFFDF7] border border-[#DCC7AA] text-[#4B3832] text-xs uppercase font-bold rounded-2xl hover:border-[#6F4E37] transition-all flex items-center gap-1.5"
              >
                <ArrowLeft size={15} />
                <span>BACK</span>
              </button>

              <button
                type="button"
                onClick={nextStep}
                className="flex-1 py-3.5 px-6 bg-[#6F4E37] text-[#FFFDF7] text-xs sm:text-sm uppercase tracking-wider font-extrabold rounded-2xl hover:bg-[#4B3832] transition-all duration-300 shadow-md flex items-center justify-center gap-2 group min-h-[48px]"
              >
                <span>REVIEW TRIP SUMMARY</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        )}

        {/* ── STEP 3: TRIP SUMMARY ── */}
        {step === 3 && (
          <div className="space-y-6">
            <TripSummaryCard
              pickupLocation={pickupLocation}
              dropLocation={dropLocation}
              travelDate={travelDate}
              pickupTime={pickupTime}
              serviceType={serviceType}
              passengers={passengers}
              selectedVehicle={selectedVehicleObj}
              onModify={() => setStep(1)}
              showActions={true}
            />

            {/* Navigation Actions */}
            <div className="flex items-center justify-between gap-3 pt-2">
              <button
                type="button"
                onClick={prevStep}
                className="py-3 px-5 bg-[#FFFDF7] border border-[#DCC7AA] text-[#4B3832] text-xs uppercase font-bold rounded-2xl hover:border-[#6F4E37] transition-all flex items-center gap-1.5"
              >
                <ArrowLeft size={15} />
                <span>BACK</span>
              </button>

              <button
                type="button"
                onClick={nextStep}
                className="flex-1 py-3.5 px-6 bg-[#6F4E37] text-[#FFFDF7] text-xs sm:text-sm uppercase tracking-wider font-extrabold rounded-2xl hover:bg-[#4B3832] transition-all duration-300 shadow-md flex items-center justify-center gap-2 group min-h-[48px]"
              >
                <span>CONTINUE TO CUSTOMER DETAILS</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        )}

        {/* ── STEP 4: CUSTOMER CONTACT DETAILS & SUBMIT ── */}
        {step === 4 && (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold text-[#4B3832] uppercase tracking-wider mb-1">
                  Full Name <span className="text-[#B86F52]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Rahul Sharma"
                  className={`w-full px-3.5 py-2.5 bg-[#FFFDF7] border rounded-xl text-xs sm:text-sm font-semibold text-[#4B3832] focus:outline-none focus:border-[#6F4E37] ${
                    errors.fullName ? "border-red-500 bg-red-50" : "border-[#DCC7AA]"
                  }`}
                />
                {errors.fullName && <p className="text-xs text-red-600 mt-1 font-medium">{errors.fullName}</p>}
              </div>

              {/* Primary Phone */}
              <div>
                <label className="block text-xs font-bold text-[#4B3832] uppercase tracking-wider mb-1">
                  Primary Mobile Number <span className="text-[#B86F52]">*</span>
                </label>
                <div className="relative">
                  <Phone size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#6F4E37]" />
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. +91 98765 43210"
                    className={`w-full pl-10 pr-3 py-2.5 bg-[#FFFDF7] border rounded-xl text-xs sm:text-sm font-semibold text-[#4B3832] focus:outline-none focus:border-[#6F4E37] ${
                      errors.phone ? "border-red-500 bg-red-50" : "border-[#DCC7AA]"
                    }`}
                  />
                </div>
                {errors.phone && <p className="text-xs text-red-600 mt-1 font-medium">{errors.phone}</p>}
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-bold text-[#4B3832] uppercase tracking-wider mb-1">
                Email Address (Optional)
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e.g. rahul@example.com"
                className="w-full px-3.5 py-2.5 bg-[#FFFDF7] border border-[#DCC7AA] rounded-xl text-xs sm:text-sm font-semibold text-[#4B3832] focus:outline-none focus:border-[#6F4E37]"
              />
            </div>

            {/* Special Request Notes */}
            <div>
              <label className="block text-xs font-bold text-[#4B3832] uppercase tracking-wider mb-1">
                Special Trip Instructions / Notes (Optional)
              </label>
              <textarea
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="e.g. Flight arrival time, senior citizen seating, extra luggage request"
                className="w-full p-3 bg-[#FFFDF7] border border-[#DCC7AA] rounded-xl text-xs sm:text-sm font-semibold text-[#4B3832] focus:outline-none focus:border-[#6F4E37]"
              />
            </div>

            {/* Submit Action */}
            <div className="flex items-center justify-between gap-3 pt-4 border-t border-[#DCC7AA]">
              <button
                type="button"
                onClick={prevStep}
                className="py-3 px-5 bg-[#FFFDF7] border border-[#DCC7AA] text-[#4B3832] text-xs uppercase font-bold rounded-2xl hover:border-[#6F4E37] transition-all flex items-center gap-1.5"
              >
                <ArrowLeft size={15} />
                <span>BACK</span>
              </button>

              <button
                type="submit"
                disabled={submitting}
                className="flex-1 py-3.5 px-6 bg-[#6F4E37] text-[#FFFDF7] text-xs sm:text-sm uppercase tracking-wider font-extrabold rounded-2xl hover:bg-[#4B3832] transition-all duration-300 shadow-md flex items-center justify-center gap-2 min-h-[48px] focus-visible:outline-2 focus-visible:outline-[#6F4E37]"
              >
                {submitting ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <Send size={16} />
                    <span>SUBMIT ENQUIRY REQUEST</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}

        {/* ── STEP 5: ENQUIRY CONFIRMATION SUCCESS ── */}
        {step === 5 && submitted && (
          <div className="text-center py-6 space-y-6">
            <div className="w-16 h-16 rounded-full bg-[#6F4E37]/10 text-[#6F4E37] flex items-center justify-center mx-auto">
              <CheckCircle2 size={36} />
            </div>

            <div>
              <span className="text-xs font-extrabold text-[#6F4E37] uppercase tracking-widest block mb-1">
                ENQUIRY REQUEST SUBMITTED
              </span>
              <h3 className="text-2xl font-extrabold text-[#4B3832] mb-2">
                Thank You, {fullName}!
              </h3>
              <p className="text-sm text-[#6F4E37] max-w-md mx-auto leading-relaxed">
                Our team will review your trip details for <strong>{dropLocation || "your requested destination"}</strong> and contact you shortly with vehicle availability and owner-approved fare quotes.
              </p>
            </div>

            {/* Render Summary Card */}
            <div className="text-left max-w-lg mx-auto">
              <TripSummaryCard
                pickupLocation={pickupLocation}
                dropLocation={dropLocation}
                travelDate={travelDate}
                pickupTime={pickupTime}
                serviceType={serviceType}
                passengers={passengers}
                selectedVehicle={selectedVehicleObj}
                showActions={true}
              />
            </div>

            {/* Direct Connect Options */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
              <a
                href={`https://wa.me/917676726209?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick("booking_success")}
                className="w-full sm:w-auto px-6 py-3 bg-[#6F4E37] text-[#FFFDF7] text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-[#4B3832] transition-all flex items-center justify-center gap-2 min-h-[44px]"
              >
                <MessageSquare size={16} />
                <span>CONFIRM FARE VIA WHATSAPP</span>
              </a>

              <a
                href="tel:+917676726209"
                onClick={() => trackPhoneCallClick("booking_success")}
                className="w-full sm:w-auto px-6 py-3 bg-[#F5E6CA] text-[#4B3832] border border-[#DCC7AA] text-xs font-bold uppercase tracking-wider rounded-xl hover:border-[#6F4E37] transition-all flex items-center justify-center gap-2 min-h-[44px]"
              >
                <Phone size={16} className="text-[#6F4E37]" />
                <span>CALL DISPATCH DIRECTLY</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
