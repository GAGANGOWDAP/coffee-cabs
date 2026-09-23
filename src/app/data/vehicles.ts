export interface VehiclePricing {
  startingFare: string | number | null;
  perKm: number | null;
  minimumKm: number | null;
  minimumDays: number | null;
  driverAllowance: number | null;
  tolls: string | null;
  parking: string | null;
  otherCharges: string | null;
}

export interface Vehicle {
  id: string;
  slug: string;
  name: string;
  category: "SUV" | "Tempo Traveller" | "Force Urbania" | "Luxury Bus" | "Executive Car";
  filterCategory: "PREMIUM CARS" | "LUXURY VANS" | "GROUP TRAVEL";
  shortName: string;
  seats: string;
  seatingCapacity: string;
  luggageCapacity: string;
  acAvailable: boolean | string;
  pricePerKm: number;
  driverAllowance: number;
  company: string;
  image: string;
  images: string[];
  features: string[];
  shortDescription: string;
  description: string;
  idealFor: string[];
  serviceTypes: string[];
  pricing: VehiclePricing;
  specifications: {
    engine: string;
    fuel: string;
    ac: string;
    seatingType: string;
    luggageCapacity: string;
  };
}

export const VEHICLES: Vehicle[] = [
  {
    id: "innova-crysta",
    slug: "innova-crysta",
    name: "Toyota Innova Crysta Premium",
    category: "SUV",
    filterCategory: "PREMIUM CARS",
    shortName: "Innova Crysta",
    seats: "6–7",
    seatingCapacity: "6+1 Seater (Captain / Bench)",
    luggageCapacity: "Suitable for 4 Large Suitcases",
    acAvailable: "Dual Automatic Climate Control AC",
    pricePerKm: 19,
    driverAllowance: 400,
    company: "Toyota",
    image: `${import.meta.env.BASE_URL}images/innova-crysta.png`,
    images: [
      `${import.meta.env.BASE_URL}images/innova-crysta.png`,
    ],
    features: [
      "Spacious 7-seater plush leather cabin",
      "Automatic climate control with rear AC vents",
      "Generous boot space for 4-5 large suitcases",
      "Captain seat recliner option",
    ],
    shortDescription: "India's premier SUV for comfortable family travel, airport transfers, and outstation trips.",
    description:
      "India's premier MPV for comfortable family travel, executive transfers, and outstation trips. Renowned for supreme reliability and smooth highway cruising.",
    idealFor: ["Airport Transfers", "Corporate Travel", "Family Trips", "Outstation Travel"],
    serviceTypes: ["Airport", "Local Sightseeing", "Outstation", "Corporate"],
    pricing: {
      startingFare: null,
      perKm: 19,
      minimumKm: 300,
      minimumDays: 1,
      driverAllowance: 400,
      tolls: "Additional (As per actual fastag receipts)",
      parking: "Additional (As per actual receipts)",
      otherCharges: null,
    },
    specifications: {
      engine: "2.4L Diesel Engine",
      fuel: "Diesel",
      ac: "Dual Automatic Climate Control",
      seatingType: "7 Seater Captain / Bench",
      luggageCapacity: "4 Large Suitcases",
    },
  },
  {
    id: "force-urbania-luxury",
    slug: "force-urbania-luxury",
    name: "Force Urbania Luxury (10/12 Seater)",
    category: "Force Urbania",
    filterCategory: "LUXURY VANS",
    shortName: "Urbania Luxury",
    seats: "10–12",
    seatingCapacity: "10–12 Maharaja Recliner Seats",
    luggageCapacity: "Dedicated Rear Luggage Boot",
    acAvailable: "High Capacity Individual Roof AC",
    pricePerKm: 50,
    driverAllowance: 600,
    company: "Force Motors",
    image: `${import.meta.env.BASE_URL}images/force-urbania.png`,
    images: [
      `${import.meta.env.BASE_URL}images/force-urbania.png`,
    ],
    features: [
      "Maharaja ultra-wide plush recliners",
      "Individual AC blowers & ambient LED lighting",
      "On-board smart TV & high-power audio",
      "Panoramic windows & high-roof walking clearance",
    ],
    shortDescription: "The flagship Force Urbania Luxury offers private-jet level comfort for VIP delegations & weddings.",
    description:
      "The flagship Force Urbania Luxury offers private-jet level comfort for VIP delegations, weddings, and premium outstation tours.",
    idealFor: ["VIP Delegations", "Weddings", "Luxury Outstation Tours", "Corporate Retreats"],
    serviceTypes: ["Outstation", "Corporate", "Events", "Weddings"],
    pricing: {
      startingFare: null,
      perKm: 50,
      minimumKm: 300,
      minimumDays: 1,
      driverAllowance: 600,
      tolls: "Additional (As per actual fastag receipts)",
      parking: "Additional (As per actual receipts)",
      otherCharges: null,
    },
    specifications: {
      engine: "FM 2.6 CR ED Turbo Diesel",
      fuel: "Diesel",
      ac: "High Capacity Individual Roof AC",
      seatingType: "Maharaja Leather Recliners",
      luggageCapacity: "Dedicated Rear Luggage Boot",
    },
  },
  {
    id: "force-urbania-deluxe",
    slug: "force-urbania-deluxe",
    name: "Force Urbania Deluxe (10/12/16 Seater)",
    category: "Force Urbania",
    filterCategory: "LUXURY VANS",
    shortName: "Urbania Deluxe",
    seats: "10–16",
    seatingCapacity: "10–16 Pushback Seats",
    luggageCapacity: "Rear Luggage Storage",
    acAvailable: "Roof Mounted Heavy Duty AC",
    pricePerKm: 40,
    driverAllowance: 600,
    company: "Force Motors",
    image: `${import.meta.env.BASE_URL}images/force-urbania.png`,
    images: [
      `${import.meta.env.BASE_URL}images/force-urbania.png`,
    ],
    features: [
      "Plush pushback seats with armrests",
      "Individual AC vents & reading lights",
      "Bluetooth / Aux audio system",
      "Wide aisle and comfortable legroom",
    ],
    shortDescription: "Force Urbania Deluxe balances premium seating comfort with group capacity.",
    description:
      "Force Urbania Deluxe balances premium seating comfort with group capacity for outstation holidays and corporate trips.",
    idealFor: ["Family Holidays", "Corporate Trips", "Outstation Group Tours"],
    serviceTypes: ["Outstation", "Corporate", "Group Trips"],
    pricing: {
      startingFare: null,
      perKm: 40,
      minimumKm: 300,
      minimumDays: 1,
      driverAllowance: 600,
      tolls: "Additional (As per actual fastag receipts)",
      parking: "Additional (As per actual receipts)",
      otherCharges: null,
    },
    specifications: {
      engine: "2.6L Turbo Diesel Engine",
      fuel: "Diesel",
      ac: "Roof Mounted Heavy Duty AC",
      seatingType: "Pushback Seats",
      luggageCapacity: "Rear Luggage Storage",
    },
  },
  {
    id: "force-urbania-standard",
    slug: "force-urbania-standard",
    name: "Force Urbania Standard (10/12/16 Seater)",
    category: "Force Urbania",
    filterCategory: "LUXURY VANS",
    shortName: "Urbania Standard",
    seats: "10–16",
    seatingCapacity: "10–16 High Back Cushioned Seats",
    luggageCapacity: "Rear Cargo Space",
    acAvailable: "Central High-Performance AC",
    pricePerKm: 38,
    driverAllowance: 600,
    company: "Force Motors",
    image: `${import.meta.env.BASE_URL}images/force-urbania.png`,
    images: [
      `${import.meta.env.BASE_URL}images/force-urbania.png`,
    ],
    features: [
      "Ergonomic seats with headrests",
      "Full cabin AC & music system",
      "High roof walk-through aisle",
      "Smooth monocoque body suspension",
    ],
    shortDescription: "Affordable luxury group transport with Force Urbania's signature smooth ride.",
    description:
      "Affordable luxury group transport with Force Urbania's signature smooth ride and spacious interior.",
    idealFor: ["Group Tours", "Outstation Pilgrimages", "Corporate Outings"],
    serviceTypes: ["Outstation", "Local Sightseeing", "Corporate"],
    pricing: {
      startingFare: null,
      perKm: 38,
      minimumKm: 300,
      minimumDays: 1,
      driverAllowance: 600,
      tolls: "Additional (As per actual fastag receipts)",
      parking: "Additional (As per actual receipts)",
      otherCharges: null,
    },
    specifications: {
      engine: "2.6L CRDI Engine",
      fuel: "Diesel",
      ac: "Central High-Performance AC",
      seatingType: "High Back Cushioned Seats",
      luggageCapacity: "Rear Cargo Space",
    },
  },
  {
    id: "7-seater-tt",
    slug: "7-seater-tt",
    name: "7+1 Luxury Tempo Traveller (Recliner)",
    category: "Tempo Traveller",
    filterCategory: "GROUP TRAVEL",
    shortName: "7+1 TT Recliner",
    seats: "7+1",
    seatingCapacity: "7+1 Maharaja Recliner Seats",
    luggageCapacity: "Dedicated Rear Luggage Boot",
    acAvailable: "Roof Mounted Individual AC Vents",
    pricePerKm: 35,
    driverAllowance: 600,
    company: "Force Motors",
    image: `${import.meta.env.BASE_URL}images/tempo-traveller.png`,
    images: [
      `${import.meta.env.BASE_URL}images/tempo-traveller.png`,
    ],
    features: [
      "Maharaja recliner leather seats",
      "Individual AC vents & reading lamps",
      "Smart TV & Surround Sound audio",
      "Ideal for long outstation trips & pilgrimages",
    ],
    shortDescription: "Ultra-comfortable 7+1 Traveller featuring plush Maharaja recliner seats.",
    description:
      "Featuring plush Maharaja recliner seats, generous legroom, and individual climate controls for comfortable group travel.",
    idealFor: ["Family Group Travel", "Pilgrimages", "Outstation Tours"],
    serviceTypes: ["Outstation", "Pilgrimages", "Family Tours"],
    pricing: {
      startingFare: null,
      perKm: 35,
      minimumKm: 300,
      minimumDays: 1,
      driverAllowance: 600,
      tolls: "Additional (As per actual fastag receipts)",
      parking: "Additional (As per actual receipts)",
      otherCharges: null,
    },
    specifications: {
      engine: "2.6L Diesel Engine",
      fuel: "Diesel",
      ac: "Roof Mounted AC",
      seatingType: "7 Maharaja Recliner Seats",
      luggageCapacity: "Rear Luggage Boot",
    },
  },
  {
    id: "9-seater-tt",
    slug: "9-seater-tt",
    name: "9+1 Luxury Tempo Traveller",
    category: "Tempo Traveller",
    filterCategory: "GROUP TRAVEL",
    shortName: "9+1 TT Luxury",
    seats: "9+1",
    seatingCapacity: "9+1 Pushback Seats",
    luggageCapacity: "Rear & Under-seat Space",
    acAvailable: "Roof Mounted AC Vents",
    pricePerKm: 28,
    driverAllowance: 600,
    company: "Force Motors",
    image: `${import.meta.env.BASE_URL}images/tempo-traveller.png`,
    images: [
      `${import.meta.env.BASE_URL}images/tempo-traveller.png`,
    ],
    features: [
      "Pushback seating with armrests",
      "Individual AC vents",
      "Bluetooth audio & curtains",
    ],
    shortDescription: "Optimal combination of capacity and comfort for mid-sized family groups.",
    description:
      "Optimal combination of capacity and comfort for mid-sized family groups and pilgrimages.",
    idealFor: ["Family Groups", "Pilgrimages", "Weekend Tours"],
    serviceTypes: ["Outstation", "Local Sightseeing"],
    pricing: {
      startingFare: null,
      perKm: 28,
      minimumKm: 300,
      minimumDays: 1,
      driverAllowance: 600,
      tolls: "Additional (As per actual fastag receipts)",
      parking: "Additional (As per actual receipts)",
      otherCharges: null,
    },
    specifications: {
      engine: "2.6L Turbo Diesel",
      fuel: "Diesel",
      ac: "Roof Mounted AC",
      seatingType: "9 Pushback Seats",
      luggageCapacity: "Rear & Under-seat Space",
    },
  },
  {
    id: "12-14-seater-tt",
    slug: "12-14-seater-tt",
    name: "12/14 Seater Luxury Tempo Traveller",
    category: "Tempo Traveller",
    filterCategory: "GROUP TRAVEL",
    shortName: "12/14 Seater TT",
    seats: "12–14",
    seatingCapacity: "12–14 Pushback Seats",
    luggageCapacity: "Dedicated Rear Boot",
    acAvailable: "Dual Blower Heavy Duty AC",
    pricePerKm: 30,
    driverAllowance: 600,
    company: "Force Motors",
    image: `${import.meta.env.BASE_URL}images/tempo-traveller.png`,
    images: [
      `${import.meta.env.BASE_URL}images/tempo-traveller.png`,
    ],
    features: [
      "High back pushback seats",
      "Dual blower heavy-duty AC",
      "LED TV & audio system",
    ],
    shortDescription: "Popular choice for wedding parties, corporate outings, and outstation tours.",
    description:
      "Popular choice for wedding parties, corporate outings, and extended outstation tours.",
    idealFor: ["Weddings", "Corporate Outings", "Outstation Group Tours"],
    serviceTypes: ["Outstation", "Corporate", "Events"],
    pricing: {
      startingFare: null,
      perKm: 30,
      minimumKm: 300,
      minimumDays: 1,
      driverAllowance: 600,
      tolls: "Additional (As per actual fastag receipts)",
      parking: "Additional (As per actual receipts)",
      otherCharges: null,
    },
    specifications: {
      engine: "2.6L Turbo Diesel",
      fuel: "Diesel",
      ac: "Dual AC Blower",
      seatingType: "12-14 Pushback Seats",
      luggageCapacity: "Dedicated Rear Boot",
    },
  },
  {
    id: "16-seater-tt",
    slug: "16-seater-tt",
    name: "16 Seater Executive Tempo Traveller",
    category: "Tempo Traveller",
    filterCategory: "GROUP TRAVEL",
    shortName: "16 Seater TT",
    seats: "16",
    seatingCapacity: "16 Pushback Seats",
    luggageCapacity: "Rear Luggage Area",
    acAvailable: "Heavy Duty Roof AC",
    pricePerKm: 35,
    driverAllowance: 600,
    company: "Force Motors",
    image: `${import.meta.env.BASE_URL}images/tempo-traveller.png`,
    images: [
      `${import.meta.env.BASE_URL}images/tempo-traveller.png`,
    ],
    features: [
      "16 comfortable pushback seats",
      "Powerful roof-mounted AC",
      "Spacious central aisle",
    ],
    shortDescription: "Maximum capacity Tempo Traveller for large group tours and corporate events.",
    description:
      "Maximum capacity Tempo Traveller for large group tours and corporate events.",
    idealFor: ["Large Group Tours", "Corporate Events", "Pilgrimage Groups"],
    serviceTypes: ["Outstation", "Corporate", "Events"],
    pricing: {
      startingFare: null,
      perKm: 35,
      minimumKm: 300,
      minimumDays: 1,
      driverAllowance: 600,
      tolls: "Additional (As per actual fastag receipts)",
      parking: "Additional (As per actual receipts)",
      otherCharges: null,
    },
    specifications: {
      engine: "FM 2.6 CR Engine",
      fuel: "Diesel",
      ac: "Heavy Duty AC",
      seatingType: "16 Pushback Seats",
      luggageCapacity: "Rear Luggage Area",
    },
  },
  {
    id: "mini-bus",
    slug: "mini-bus",
    name: "Spacious Mini Bus (21/25/30/33/40/50 Seater)",
    category: "Luxury Bus",
    filterCategory: "GROUP TRAVEL",
    shortName: "Mini Bus",
    seats: "21–50",
    seatingCapacity: "21–50 Reclining Seats",
    luggageCapacity: "Large Under-deck Luggage Hold",
    acAvailable: "Central Roof AC",
    pricePerKm: 50,
    driverAllowance: 800,
    company: "Tata / Ashok Leyland",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1200&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1200&h=800&fit=crop",
    ],
    features: [
      "Pushback reclining seats",
      "High-power AC & LED TV",
      "Ample luggage under-deck storage",
    ],
    shortDescription: "Spacious 21 to 50 seater Mini Buses perfect for large wedding parties.",
    description:
      "Spacious 21 to 50 seater Mini Buses perfect for large wedding parties, corporate events, and pilgrimages.",
    idealFor: ["Large Wedding Parties", "Corporate Events", "Pilgrimage Groups"],
    serviceTypes: ["Outstation", "Events", "Weddings", "Corporate"],
    pricing: {
      startingFare: null,
      perKm: 50,
      minimumKm: 300,
      minimumDays: 1,
      driverAllowance: 800,
      tolls: "Additional (As per actual fastag receipts)",
      parking: "Additional (As per actual receipts)",
      otherCharges: null,
    },
    specifications: {
      engine: "4.0L Turbo Diesel",
      fuel: "Diesel",
      ac: "Central Roof AC",
      seatingType: "High Back Reclining Seats",
      luggageCapacity: "Large Under-deck Luggage Hold",
    },
  },
  {
    id: "luxury-bus",
    slug: "luxury-bus",
    name: "Ultra Luxury AC Bus (22/40 Seater)",
    category: "Luxury Bus",
    filterCategory: "GROUP TRAVEL",
    shortName: "Luxury Bus",
    seats: "22–40",
    seatingCapacity: "22–40 Maharaja Recliners",
    luggageCapacity: "Huge Belly Cargo Space",
    acAvailable: "Climate Control AC",
    pricePerKm: 55,
    driverAllowance: 1000,
    company: "Volvo / Scania / Eicher",
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=1200&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=1200&h=800&fit=crop",
    ],
    features: [
      "Air-suspension ultra smooth ride",
      "Maharaja recliner seats & washroom option",
      "Individual charging ports & TV screens",
    ],
    shortDescription: "Premium Volvo/Eicher Luxury Buses featuring air-suspension and top amenities.",
    description:
      "Premium 22 & 40 seater Volvo/Eicher Luxury Buses featuring air-suspension and top luxury amenities.",
    idealFor: ["VIP Delegates", "Large Groups", "Corporate Offsites"],
    serviceTypes: ["Outstation", "Corporate", "Events"],
    pricing: {
      startingFare: null,
      perKm: 55,
      minimumKm: 300,
      minimumDays: 1,
      driverAllowance: 1000,
      tolls: "Additional (As per actual fastag receipts)",
      parking: "Additional (As per actual receipts)",
      otherCharges: null,
    },
    specifications: {
      engine: "6-Cylinder Volvo Diesel Engine",
      fuel: "Diesel",
      ac: "Climate Control AC",
      seatingType: "2x1 / 2x2 Luxury Recliners",
      luggageCapacity: "Huge Belly Cargo Space",
    },
  },
];

export const PRICING_TERMS = {
  included: [
    "Fuel charges (diesel)",
    "Clean & sanitized AC vehicle",
    "Professional uniform driver salary",
    "Vehicle insurance & registration",
  ],
  extras: [
    "Toll gates (as per actual fastag receipts)",
    "Parking fees (as per actual receipts)",
    "Inter-state permit / entry taxes (actuals)",
    "Night halt charge: ₹1,000/night (if driver stays overnight)",
  ],
  minimumBilling: "300 km minimum per day for outstation trips (even if actual travel is less, 300 km/day is billed)",
  localPackage: "8 hours / 80 km minimum (within Bangalore)",
  oneWay: "Available — pay only for distance travelled (no return charge)",
  cancellation: [
    "80% refund if cancelled 48+ hours prior to departure",
    "50% refund if cancelled 24–48 hours prior to departure",
    "No refund if cancelled within 24 hours of departure",
  ],
};
