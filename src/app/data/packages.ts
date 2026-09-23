export interface DayItinerary {
  day: number;
  title: string;
  activities: string[];
  highlights: string[];
}

export interface TourPackage {
  id: string;
  title: string;
  slug: string;
  category: 
    | "Bengaluru nearby 1-day"
    | "Heritage"
    | "Waterfall/Nature"
    | "Mysuru"
    | "Coorg"
    | "Chikkamagaluru"
    | "Coastal"
    | "Western Ghats"
    | "Hampi/Badami/Pattadakal"
    | "Grand 5–7 day Karnataka"
    | "Wildlife"
    | "Pilgrimage"
    | "Family"
    | "Couple"
    | "Adventure"
    | "Corporate/Group";
  duration: string;
  destinationIds: string[];
  route: string;
  pickupAreas: string[];
  dropAreas: string[];
  dayWiseItinerary: DayItinerary[];
  vehicleIds: string[];
  inclusions: string[];
  exclusions: string[];
  approximateDistance: string;
  season: string;
  notes: string;
  relatedDestinations: string[];
  relatedRoutes: string[];
  faqs: { question: string; answer: string }[];
  bookingCTA: string;
  pricingStatus: "pending" | "approved";
  startingFareNote?: string;
}

export const PACKAGES: TourPackage[] = [
  {
    "id": "bengaluru-nearby-1",
    "title": "Bengaluru nearby 1-day Tour Option #1 (1 Day)",
    "slug": "bengaluru-nearby-1",
    "category": "Bengaluru nearby 1-day",
    "duration": "1 Day",
    "destinationIds": [
      "nandi-hills",
      "ramanagara",
      "savandurga",
      "bannerghatta",
      "kanakapura-sangama-mekedatu",
      "bheemeshwari",
      "shivagange",
      "devarayanadurga",
      "madhugiri"
    ],
    "route": "Bengaluru → nandi-hills → ramanagara → savandurga → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: NANDI-HILLS Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards nandi-hills",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "nandi-hills sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "150–250 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "nandi-hills",
      "ramanagara",
      "savandurga",
      "bannerghatta",
      "kanakapura-sangama-mekedatu",
      "bheemeshwari",
      "shivagange",
      "devarayanadurga",
      "madhugiri"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Bengaluru nearby 1-day Tour Option #1 (1 Day)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "bengaluru-nearby-2",
    "title": "Bengaluru nearby 1-day Tour Option #2 (1 Day)",
    "slug": "bengaluru-nearby-2",
    "category": "Bengaluru nearby 1-day",
    "duration": "1 Day",
    "destinationIds": [
      "nandi-hills",
      "ramanagara",
      "savandurga",
      "bannerghatta",
      "kanakapura-sangama-mekedatu",
      "bheemeshwari",
      "shivagange",
      "devarayanadurga",
      "madhugiri"
    ],
    "route": "Bengaluru → nandi-hills → ramanagara → savandurga → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: NANDI-HILLS Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards nandi-hills",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "nandi-hills sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "150–250 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "nandi-hills",
      "ramanagara",
      "savandurga",
      "bannerghatta",
      "kanakapura-sangama-mekedatu",
      "bheemeshwari",
      "shivagange",
      "devarayanadurga",
      "madhugiri"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Bengaluru nearby 1-day Tour Option #2 (1 Day)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "bengaluru-nearby-3",
    "title": "Bengaluru nearby 1-day Tour Option #3 (1 Day)",
    "slug": "bengaluru-nearby-3",
    "category": "Bengaluru nearby 1-day",
    "duration": "1 Day",
    "destinationIds": [
      "nandi-hills",
      "ramanagara",
      "savandurga",
      "bannerghatta",
      "kanakapura-sangama-mekedatu",
      "bheemeshwari",
      "shivagange",
      "devarayanadurga",
      "madhugiri"
    ],
    "route": "Bengaluru → nandi-hills → ramanagara → savandurga → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: NANDI-HILLS Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards nandi-hills",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "nandi-hills sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "150–250 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "nandi-hills",
      "ramanagara",
      "savandurga",
      "bannerghatta",
      "kanakapura-sangama-mekedatu",
      "bheemeshwari",
      "shivagange",
      "devarayanadurga",
      "madhugiri"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Bengaluru nearby 1-day Tour Option #3 (1 Day)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "bengaluru-nearby-4",
    "title": "Bengaluru nearby 1-day Tour Option #4 (1 Day)",
    "slug": "bengaluru-nearby-4",
    "category": "Bengaluru nearby 1-day",
    "duration": "1 Day",
    "destinationIds": [
      "nandi-hills",
      "ramanagara",
      "savandurga",
      "bannerghatta",
      "kanakapura-sangama-mekedatu",
      "bheemeshwari",
      "shivagange",
      "devarayanadurga",
      "madhugiri"
    ],
    "route": "Bengaluru → nandi-hills → ramanagara → savandurga → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: NANDI-HILLS Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards nandi-hills",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "nandi-hills sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "150–250 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "nandi-hills",
      "ramanagara",
      "savandurga",
      "bannerghatta",
      "kanakapura-sangama-mekedatu",
      "bheemeshwari",
      "shivagange",
      "devarayanadurga",
      "madhugiri"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Bengaluru nearby 1-day Tour Option #4 (1 Day)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "bengaluru-nearby-5",
    "title": "Bengaluru nearby 1-day Tour Option #5 (1 Day)",
    "slug": "bengaluru-nearby-5",
    "category": "Bengaluru nearby 1-day",
    "duration": "1 Day",
    "destinationIds": [
      "nandi-hills",
      "ramanagara",
      "savandurga",
      "bannerghatta",
      "kanakapura-sangama-mekedatu",
      "bheemeshwari",
      "shivagange",
      "devarayanadurga",
      "madhugiri"
    ],
    "route": "Bengaluru → nandi-hills → ramanagara → savandurga → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: NANDI-HILLS Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards nandi-hills",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "nandi-hills sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "150–250 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "nandi-hills",
      "ramanagara",
      "savandurga",
      "bannerghatta",
      "kanakapura-sangama-mekedatu",
      "bheemeshwari",
      "shivagange",
      "devarayanadurga",
      "madhugiri"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Bengaluru nearby 1-day Tour Option #5 (1 Day)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "bengaluru-nearby-6",
    "title": "Bengaluru nearby 1-day Tour Option #6 (1 Day)",
    "slug": "bengaluru-nearby-6",
    "category": "Bengaluru nearby 1-day",
    "duration": "1 Day",
    "destinationIds": [
      "nandi-hills",
      "ramanagara",
      "savandurga",
      "bannerghatta",
      "kanakapura-sangama-mekedatu",
      "bheemeshwari",
      "shivagange",
      "devarayanadurga",
      "madhugiri"
    ],
    "route": "Bengaluru → nandi-hills → ramanagara → savandurga → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: NANDI-HILLS Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards nandi-hills",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "nandi-hills sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "150–250 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "nandi-hills",
      "ramanagara",
      "savandurga",
      "bannerghatta",
      "kanakapura-sangama-mekedatu",
      "bheemeshwari",
      "shivagange",
      "devarayanadurga",
      "madhugiri"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Bengaluru nearby 1-day Tour Option #6 (1 Day)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "bengaluru-nearby-7",
    "title": "Bengaluru nearby 1-day Tour Option #7 (1 Day)",
    "slug": "bengaluru-nearby-7",
    "category": "Bengaluru nearby 1-day",
    "duration": "1 Day",
    "destinationIds": [
      "nandi-hills",
      "ramanagara",
      "savandurga",
      "bannerghatta",
      "kanakapura-sangama-mekedatu",
      "bheemeshwari",
      "shivagange",
      "devarayanadurga",
      "madhugiri"
    ],
    "route": "Bengaluru → nandi-hills → ramanagara → savandurga → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: NANDI-HILLS Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards nandi-hills",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "nandi-hills sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "150–250 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "nandi-hills",
      "ramanagara",
      "savandurga",
      "bannerghatta",
      "kanakapura-sangama-mekedatu",
      "bheemeshwari",
      "shivagange",
      "devarayanadurga",
      "madhugiri"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Bengaluru nearby 1-day Tour Option #7 (1 Day)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "bengaluru-nearby-8",
    "title": "Bengaluru nearby 1-day Tour Option #8 (1 Day)",
    "slug": "bengaluru-nearby-8",
    "category": "Bengaluru nearby 1-day",
    "duration": "1 Day",
    "destinationIds": [
      "nandi-hills",
      "ramanagara",
      "savandurga",
      "bannerghatta",
      "kanakapura-sangama-mekedatu",
      "bheemeshwari",
      "shivagange",
      "devarayanadurga",
      "madhugiri"
    ],
    "route": "Bengaluru → nandi-hills → ramanagara → savandurga → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: NANDI-HILLS Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards nandi-hills",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "nandi-hills sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "150–250 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "nandi-hills",
      "ramanagara",
      "savandurga",
      "bannerghatta",
      "kanakapura-sangama-mekedatu",
      "bheemeshwari",
      "shivagange",
      "devarayanadurga",
      "madhugiri"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Bengaluru nearby 1-day Tour Option #8 (1 Day)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "bengaluru-nearby-9",
    "title": "Bengaluru nearby 1-day Tour Option #9 (1 Day)",
    "slug": "bengaluru-nearby-9",
    "category": "Bengaluru nearby 1-day",
    "duration": "1 Day",
    "destinationIds": [
      "nandi-hills",
      "ramanagara",
      "savandurga",
      "bannerghatta",
      "kanakapura-sangama-mekedatu",
      "bheemeshwari",
      "shivagange",
      "devarayanadurga",
      "madhugiri"
    ],
    "route": "Bengaluru → nandi-hills → ramanagara → savandurga → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: NANDI-HILLS Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards nandi-hills",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "nandi-hills sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "150–250 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "nandi-hills",
      "ramanagara",
      "savandurga",
      "bannerghatta",
      "kanakapura-sangama-mekedatu",
      "bheemeshwari",
      "shivagange",
      "devarayanadurga",
      "madhugiri"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Bengaluru nearby 1-day Tour Option #9 (1 Day)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "bengaluru-nearby-10",
    "title": "Bengaluru nearby 1-day Tour Option #10 (1 Day)",
    "slug": "bengaluru-nearby-10",
    "category": "Bengaluru nearby 1-day",
    "duration": "1 Day",
    "destinationIds": [
      "nandi-hills",
      "ramanagara",
      "savandurga",
      "bannerghatta",
      "kanakapura-sangama-mekedatu",
      "bheemeshwari",
      "shivagange",
      "devarayanadurga",
      "madhugiri"
    ],
    "route": "Bengaluru → nandi-hills → ramanagara → savandurga → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: NANDI-HILLS Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards nandi-hills",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "nandi-hills sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "150–250 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "nandi-hills",
      "ramanagara",
      "savandurga",
      "bannerghatta",
      "kanakapura-sangama-mekedatu",
      "bheemeshwari",
      "shivagange",
      "devarayanadurga",
      "madhugiri"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Bengaluru nearby 1-day Tour Option #10 (1 Day)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "heritage-trail-1",
    "title": "Heritage Tour Option #1 (2 Days / 1 Night)",
    "slug": "heritage-trail-1",
    "category": "Heritage",
    "duration": "2 Days / 1 Night",
    "destinationIds": [
      "mysuru",
      "srirangapatna",
      "belur",
      "halebidu",
      "shravanabelagola",
      "somanathapura",
      "chitradurga",
      "bidar",
      "vijayapura",
      "melkote"
    ],
    "route": "Bengaluru → mysuru → srirangapatna → belur → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: MYSURU Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards mysuru",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "mysuru sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: SRIRANGAPATNA Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards srirangapatna",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "srirangapatna sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "450–950 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "mysuru",
      "srirangapatna",
      "belur",
      "halebidu",
      "shravanabelagola",
      "somanathapura",
      "chitradurga",
      "bidar",
      "vijayapura",
      "melkote"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Heritage Tour Option #1 (2 Days / 1 Night)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "heritage-trail-2",
    "title": "Heritage Tour Option #2 (2 Days / 1 Night)",
    "slug": "heritage-trail-2",
    "category": "Heritage",
    "duration": "2 Days / 1 Night",
    "destinationIds": [
      "mysuru",
      "srirangapatna",
      "belur",
      "halebidu",
      "shravanabelagola",
      "somanathapura",
      "chitradurga",
      "bidar",
      "vijayapura",
      "melkote"
    ],
    "route": "Bengaluru → mysuru → srirangapatna → belur → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: MYSURU Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards mysuru",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "mysuru sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: SRIRANGAPATNA Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards srirangapatna",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "srirangapatna sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "450–950 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "mysuru",
      "srirangapatna",
      "belur",
      "halebidu",
      "shravanabelagola",
      "somanathapura",
      "chitradurga",
      "bidar",
      "vijayapura",
      "melkote"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Heritage Tour Option #2 (2 Days / 1 Night)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "heritage-trail-3",
    "title": "Heritage Tour Option #3 (2 Days / 1 Night)",
    "slug": "heritage-trail-3",
    "category": "Heritage",
    "duration": "2 Days / 1 Night",
    "destinationIds": [
      "mysuru",
      "srirangapatna",
      "belur",
      "halebidu",
      "shravanabelagola",
      "somanathapura",
      "chitradurga",
      "bidar",
      "vijayapura",
      "melkote"
    ],
    "route": "Bengaluru → mysuru → srirangapatna → belur → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: MYSURU Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards mysuru",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "mysuru sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: SRIRANGAPATNA Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards srirangapatna",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "srirangapatna sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "450–950 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "mysuru",
      "srirangapatna",
      "belur",
      "halebidu",
      "shravanabelagola",
      "somanathapura",
      "chitradurga",
      "bidar",
      "vijayapura",
      "melkote"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Heritage Tour Option #3 (2 Days / 1 Night)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "heritage-trail-4",
    "title": "Heritage Tour Option #4 (2 Days / 1 Night)",
    "slug": "heritage-trail-4",
    "category": "Heritage",
    "duration": "2 Days / 1 Night",
    "destinationIds": [
      "mysuru",
      "srirangapatna",
      "belur",
      "halebidu",
      "shravanabelagola",
      "somanathapura",
      "chitradurga",
      "bidar",
      "vijayapura",
      "melkote"
    ],
    "route": "Bengaluru → mysuru → srirangapatna → belur → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: MYSURU Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards mysuru",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "mysuru sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: SRIRANGAPATNA Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards srirangapatna",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "srirangapatna sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "450–950 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "mysuru",
      "srirangapatna",
      "belur",
      "halebidu",
      "shravanabelagola",
      "somanathapura",
      "chitradurga",
      "bidar",
      "vijayapura",
      "melkote"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Heritage Tour Option #4 (2 Days / 1 Night)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "heritage-trail-5",
    "title": "Heritage Tour Option #5 (2 Days / 1 Night)",
    "slug": "heritage-trail-5",
    "category": "Heritage",
    "duration": "2 Days / 1 Night",
    "destinationIds": [
      "mysuru",
      "srirangapatna",
      "belur",
      "halebidu",
      "shravanabelagola",
      "somanathapura",
      "chitradurga",
      "bidar",
      "vijayapura",
      "melkote"
    ],
    "route": "Bengaluru → mysuru → srirangapatna → belur → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: MYSURU Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards mysuru",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "mysuru sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: SRIRANGAPATNA Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards srirangapatna",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "srirangapatna sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "450–950 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "mysuru",
      "srirangapatna",
      "belur",
      "halebidu",
      "shravanabelagola",
      "somanathapura",
      "chitradurga",
      "bidar",
      "vijayapura",
      "melkote"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Heritage Tour Option #5 (2 Days / 1 Night)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "heritage-trail-6",
    "title": "Heritage Tour Option #6 (2 Days / 1 Night)",
    "slug": "heritage-trail-6",
    "category": "Heritage",
    "duration": "2 Days / 1 Night",
    "destinationIds": [
      "mysuru",
      "srirangapatna",
      "belur",
      "halebidu",
      "shravanabelagola",
      "somanathapura",
      "chitradurga",
      "bidar",
      "vijayapura",
      "melkote"
    ],
    "route": "Bengaluru → mysuru → srirangapatna → belur → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: MYSURU Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards mysuru",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "mysuru sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: SRIRANGAPATNA Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards srirangapatna",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "srirangapatna sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "450–950 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "mysuru",
      "srirangapatna",
      "belur",
      "halebidu",
      "shravanabelagola",
      "somanathapura",
      "chitradurga",
      "bidar",
      "vijayapura",
      "melkote"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Heritage Tour Option #6 (2 Days / 1 Night)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "heritage-trail-7",
    "title": "Heritage Tour Option #7 (2 Days / 1 Night)",
    "slug": "heritage-trail-7",
    "category": "Heritage",
    "duration": "2 Days / 1 Night",
    "destinationIds": [
      "mysuru",
      "srirangapatna",
      "belur",
      "halebidu",
      "shravanabelagola",
      "somanathapura",
      "chitradurga",
      "bidar",
      "vijayapura",
      "melkote"
    ],
    "route": "Bengaluru → mysuru → srirangapatna → belur → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: MYSURU Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards mysuru",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "mysuru sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: SRIRANGAPATNA Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards srirangapatna",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "srirangapatna sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "450–950 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "mysuru",
      "srirangapatna",
      "belur",
      "halebidu",
      "shravanabelagola",
      "somanathapura",
      "chitradurga",
      "bidar",
      "vijayapura",
      "melkote"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Heritage Tour Option #7 (2 Days / 1 Night)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "heritage-trail-8",
    "title": "Heritage Tour Option #8 (2 Days / 1 Night)",
    "slug": "heritage-trail-8",
    "category": "Heritage",
    "duration": "2 Days / 1 Night",
    "destinationIds": [
      "mysuru",
      "srirangapatna",
      "belur",
      "halebidu",
      "shravanabelagola",
      "somanathapura",
      "chitradurga",
      "bidar",
      "vijayapura",
      "melkote"
    ],
    "route": "Bengaluru → mysuru → srirangapatna → belur → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: MYSURU Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards mysuru",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "mysuru sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: SRIRANGAPATNA Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards srirangapatna",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "srirangapatna sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "450–950 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "mysuru",
      "srirangapatna",
      "belur",
      "halebidu",
      "shravanabelagola",
      "somanathapura",
      "chitradurga",
      "bidar",
      "vijayapura",
      "melkote"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Heritage Tour Option #8 (2 Days / 1 Night)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "heritage-trail-9",
    "title": "Heritage Tour Option #9 (2 Days / 1 Night)",
    "slug": "heritage-trail-9",
    "category": "Heritage",
    "duration": "2 Days / 1 Night",
    "destinationIds": [
      "mysuru",
      "srirangapatna",
      "belur",
      "halebidu",
      "shravanabelagola",
      "somanathapura",
      "chitradurga",
      "bidar",
      "vijayapura",
      "melkote"
    ],
    "route": "Bengaluru → mysuru → srirangapatna → belur → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: MYSURU Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards mysuru",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "mysuru sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: SRIRANGAPATNA Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards srirangapatna",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "srirangapatna sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "450–950 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "mysuru",
      "srirangapatna",
      "belur",
      "halebidu",
      "shravanabelagola",
      "somanathapura",
      "chitradurga",
      "bidar",
      "vijayapura",
      "melkote"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Heritage Tour Option #9 (2 Days / 1 Night)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "heritage-trail-10",
    "title": "Heritage Tour Option #10 (2 Days / 1 Night)",
    "slug": "heritage-trail-10",
    "category": "Heritage",
    "duration": "2 Days / 1 Night",
    "destinationIds": [
      "mysuru",
      "srirangapatna",
      "belur",
      "halebidu",
      "shravanabelagola",
      "somanathapura",
      "chitradurga",
      "bidar",
      "vijayapura",
      "melkote"
    ],
    "route": "Bengaluru → mysuru → srirangapatna → belur → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: MYSURU Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards mysuru",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "mysuru sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: SRIRANGAPATNA Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards srirangapatna",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "srirangapatna sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "450–950 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "mysuru",
      "srirangapatna",
      "belur",
      "halebidu",
      "shravanabelagola",
      "somanathapura",
      "chitradurga",
      "bidar",
      "vijayapura",
      "melkote"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Heritage Tour Option #10 (2 Days / 1 Night)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "heritage-trail-11",
    "title": "Heritage Tour Option #11 (2 Days / 1 Night)",
    "slug": "heritage-trail-11",
    "category": "Heritage",
    "duration": "2 Days / 1 Night",
    "destinationIds": [
      "mysuru",
      "srirangapatna",
      "belur",
      "halebidu",
      "shravanabelagola",
      "somanathapura",
      "chitradurga",
      "bidar",
      "vijayapura",
      "melkote"
    ],
    "route": "Bengaluru → mysuru → srirangapatna → belur → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: MYSURU Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards mysuru",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "mysuru sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: SRIRANGAPATNA Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards srirangapatna",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "srirangapatna sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "450–950 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "mysuru",
      "srirangapatna",
      "belur",
      "halebidu",
      "shravanabelagola",
      "somanathapura",
      "chitradurga",
      "bidar",
      "vijayapura",
      "melkote"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Heritage Tour Option #11 (2 Days / 1 Night)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "heritage-trail-12",
    "title": "Heritage Tour Option #12 (2 Days / 1 Night)",
    "slug": "heritage-trail-12",
    "category": "Heritage",
    "duration": "2 Days / 1 Night",
    "destinationIds": [
      "mysuru",
      "srirangapatna",
      "belur",
      "halebidu",
      "shravanabelagola",
      "somanathapura",
      "chitradurga",
      "bidar",
      "vijayapura",
      "melkote"
    ],
    "route": "Bengaluru → mysuru → srirangapatna → belur → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: MYSURU Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards mysuru",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "mysuru sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: SRIRANGAPATNA Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards srirangapatna",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "srirangapatna sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "450–950 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "mysuru",
      "srirangapatna",
      "belur",
      "halebidu",
      "shravanabelagola",
      "somanathapura",
      "chitradurga",
      "bidar",
      "vijayapura",
      "melkote"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Heritage Tour Option #12 (2 Days / 1 Night)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "heritage-trail-13",
    "title": "Heritage Tour Option #13 (2 Days / 1 Night)",
    "slug": "heritage-trail-13",
    "category": "Heritage",
    "duration": "2 Days / 1 Night",
    "destinationIds": [
      "mysuru",
      "srirangapatna",
      "belur",
      "halebidu",
      "shravanabelagola",
      "somanathapura",
      "chitradurga",
      "bidar",
      "vijayapura",
      "melkote"
    ],
    "route": "Bengaluru → mysuru → srirangapatna → belur → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: MYSURU Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards mysuru",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "mysuru sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: SRIRANGAPATNA Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards srirangapatna",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "srirangapatna sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "450–950 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "mysuru",
      "srirangapatna",
      "belur",
      "halebidu",
      "shravanabelagola",
      "somanathapura",
      "chitradurga",
      "bidar",
      "vijayapura",
      "melkote"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Heritage Tour Option #13 (2 Days / 1 Night)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "heritage-trail-14",
    "title": "Heritage Tour Option #14 (2 Days / 1 Night)",
    "slug": "heritage-trail-14",
    "category": "Heritage",
    "duration": "2 Days / 1 Night",
    "destinationIds": [
      "mysuru",
      "srirangapatna",
      "belur",
      "halebidu",
      "shravanabelagola",
      "somanathapura",
      "chitradurga",
      "bidar",
      "vijayapura",
      "melkote"
    ],
    "route": "Bengaluru → mysuru → srirangapatna → belur → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: MYSURU Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards mysuru",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "mysuru sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: SRIRANGAPATNA Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards srirangapatna",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "srirangapatna sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "450–950 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "mysuru",
      "srirangapatna",
      "belur",
      "halebidu",
      "shravanabelagola",
      "somanathapura",
      "chitradurga",
      "bidar",
      "vijayapura",
      "melkote"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Heritage Tour Option #14 (2 Days / 1 Night)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "heritage-trail-15",
    "title": "Heritage Tour Option #15 (2 Days / 1 Night)",
    "slug": "heritage-trail-15",
    "category": "Heritage",
    "duration": "2 Days / 1 Night",
    "destinationIds": [
      "mysuru",
      "srirangapatna",
      "belur",
      "halebidu",
      "shravanabelagola",
      "somanathapura",
      "chitradurga",
      "bidar",
      "vijayapura",
      "melkote"
    ],
    "route": "Bengaluru → mysuru → srirangapatna → belur → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: MYSURU Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards mysuru",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "mysuru sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: SRIRANGAPATNA Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards srirangapatna",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "srirangapatna sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "450–950 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "mysuru",
      "srirangapatna",
      "belur",
      "halebidu",
      "shravanabelagola",
      "somanathapura",
      "chitradurga",
      "bidar",
      "vijayapura",
      "melkote"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Heritage Tour Option #15 (2 Days / 1 Night)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "waterfall-nature-1",
    "title": "Waterfall/Nature Tour Option #1 (2 Days / 1 Night)",
    "slug": "waterfall-nature-1",
    "category": "Waterfall/Nature",
    "duration": "2 Days / 1 Night",
    "destinationIds": [
      "jog-falls",
      "shivanasamudra",
      "agumbe",
      "magod-falls",
      "gokak-falls",
      "sathodi-falls",
      "honnemaradu"
    ],
    "route": "Bengaluru → jog-falls → shivanasamudra → agumbe → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: JOG-FALLS Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards jog-falls",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "jog-falls sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: SHIVANASAMUDRA Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards shivanasamudra",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "shivanasamudra sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "350–800 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "jog-falls",
      "shivanasamudra",
      "agumbe",
      "magod-falls",
      "gokak-falls",
      "sathodi-falls",
      "honnemaradu"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Waterfall/Nature Tour Option #1 (2 Days / 1 Night)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "waterfall-nature-2",
    "title": "Waterfall/Nature Tour Option #2 (2 Days / 1 Night)",
    "slug": "waterfall-nature-2",
    "category": "Waterfall/Nature",
    "duration": "2 Days / 1 Night",
    "destinationIds": [
      "jog-falls",
      "shivanasamudra",
      "agumbe",
      "magod-falls",
      "gokak-falls",
      "sathodi-falls",
      "honnemaradu"
    ],
    "route": "Bengaluru → jog-falls → shivanasamudra → agumbe → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: JOG-FALLS Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards jog-falls",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "jog-falls sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: SHIVANASAMUDRA Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards shivanasamudra",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "shivanasamudra sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "350–800 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "jog-falls",
      "shivanasamudra",
      "agumbe",
      "magod-falls",
      "gokak-falls",
      "sathodi-falls",
      "honnemaradu"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Waterfall/Nature Tour Option #2 (2 Days / 1 Night)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "waterfall-nature-3",
    "title": "Waterfall/Nature Tour Option #3 (2 Days / 1 Night)",
    "slug": "waterfall-nature-3",
    "category": "Waterfall/Nature",
    "duration": "2 Days / 1 Night",
    "destinationIds": [
      "jog-falls",
      "shivanasamudra",
      "agumbe",
      "magod-falls",
      "gokak-falls",
      "sathodi-falls",
      "honnemaradu"
    ],
    "route": "Bengaluru → jog-falls → shivanasamudra → agumbe → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: JOG-FALLS Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards jog-falls",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "jog-falls sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: SHIVANASAMUDRA Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards shivanasamudra",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "shivanasamudra sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "350–800 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "jog-falls",
      "shivanasamudra",
      "agumbe",
      "magod-falls",
      "gokak-falls",
      "sathodi-falls",
      "honnemaradu"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Waterfall/Nature Tour Option #3 (2 Days / 1 Night)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "waterfall-nature-4",
    "title": "Waterfall/Nature Tour Option #4 (2 Days / 1 Night)",
    "slug": "waterfall-nature-4",
    "category": "Waterfall/Nature",
    "duration": "2 Days / 1 Night",
    "destinationIds": [
      "jog-falls",
      "shivanasamudra",
      "agumbe",
      "magod-falls",
      "gokak-falls",
      "sathodi-falls",
      "honnemaradu"
    ],
    "route": "Bengaluru → jog-falls → shivanasamudra → agumbe → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: JOG-FALLS Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards jog-falls",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "jog-falls sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: SHIVANASAMUDRA Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards shivanasamudra",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "shivanasamudra sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "350–800 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "jog-falls",
      "shivanasamudra",
      "agumbe",
      "magod-falls",
      "gokak-falls",
      "sathodi-falls",
      "honnemaradu"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Waterfall/Nature Tour Option #4 (2 Days / 1 Night)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "waterfall-nature-5",
    "title": "Waterfall/Nature Tour Option #5 (2 Days / 1 Night)",
    "slug": "waterfall-nature-5",
    "category": "Waterfall/Nature",
    "duration": "2 Days / 1 Night",
    "destinationIds": [
      "jog-falls",
      "shivanasamudra",
      "agumbe",
      "magod-falls",
      "gokak-falls",
      "sathodi-falls",
      "honnemaradu"
    ],
    "route": "Bengaluru → jog-falls → shivanasamudra → agumbe → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: JOG-FALLS Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards jog-falls",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "jog-falls sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: SHIVANASAMUDRA Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards shivanasamudra",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "shivanasamudra sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "350–800 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "jog-falls",
      "shivanasamudra",
      "agumbe",
      "magod-falls",
      "gokak-falls",
      "sathodi-falls",
      "honnemaradu"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Waterfall/Nature Tour Option #5 (2 Days / 1 Night)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "waterfall-nature-6",
    "title": "Waterfall/Nature Tour Option #6 (2 Days / 1 Night)",
    "slug": "waterfall-nature-6",
    "category": "Waterfall/Nature",
    "duration": "2 Days / 1 Night",
    "destinationIds": [
      "jog-falls",
      "shivanasamudra",
      "agumbe",
      "magod-falls",
      "gokak-falls",
      "sathodi-falls",
      "honnemaradu"
    ],
    "route": "Bengaluru → jog-falls → shivanasamudra → agumbe → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: JOG-FALLS Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards jog-falls",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "jog-falls sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: SHIVANASAMUDRA Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards shivanasamudra",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "shivanasamudra sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "350–800 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "jog-falls",
      "shivanasamudra",
      "agumbe",
      "magod-falls",
      "gokak-falls",
      "sathodi-falls",
      "honnemaradu"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Waterfall/Nature Tour Option #6 (2 Days / 1 Night)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "waterfall-nature-7",
    "title": "Waterfall/Nature Tour Option #7 (2 Days / 1 Night)",
    "slug": "waterfall-nature-7",
    "category": "Waterfall/Nature",
    "duration": "2 Days / 1 Night",
    "destinationIds": [
      "jog-falls",
      "shivanasamudra",
      "agumbe",
      "magod-falls",
      "gokak-falls",
      "sathodi-falls",
      "honnemaradu"
    ],
    "route": "Bengaluru → jog-falls → shivanasamudra → agumbe → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: JOG-FALLS Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards jog-falls",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "jog-falls sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: SHIVANASAMUDRA Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards shivanasamudra",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "shivanasamudra sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "350–800 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "jog-falls",
      "shivanasamudra",
      "agumbe",
      "magod-falls",
      "gokak-falls",
      "sathodi-falls",
      "honnemaradu"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Waterfall/Nature Tour Option #7 (2 Days / 1 Night)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "waterfall-nature-8",
    "title": "Waterfall/Nature Tour Option #8 (2 Days / 1 Night)",
    "slug": "waterfall-nature-8",
    "category": "Waterfall/Nature",
    "duration": "2 Days / 1 Night",
    "destinationIds": [
      "jog-falls",
      "shivanasamudra",
      "agumbe",
      "magod-falls",
      "gokak-falls",
      "sathodi-falls",
      "honnemaradu"
    ],
    "route": "Bengaluru → jog-falls → shivanasamudra → agumbe → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: JOG-FALLS Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards jog-falls",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "jog-falls sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: SHIVANASAMUDRA Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards shivanasamudra",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "shivanasamudra sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "350–800 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "jog-falls",
      "shivanasamudra",
      "agumbe",
      "magod-falls",
      "gokak-falls",
      "sathodi-falls",
      "honnemaradu"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Waterfall/Nature Tour Option #8 (2 Days / 1 Night)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "waterfall-nature-9",
    "title": "Waterfall/Nature Tour Option #9 (2 Days / 1 Night)",
    "slug": "waterfall-nature-9",
    "category": "Waterfall/Nature",
    "duration": "2 Days / 1 Night",
    "destinationIds": [
      "jog-falls",
      "shivanasamudra",
      "agumbe",
      "magod-falls",
      "gokak-falls",
      "sathodi-falls",
      "honnemaradu"
    ],
    "route": "Bengaluru → jog-falls → shivanasamudra → agumbe → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: JOG-FALLS Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards jog-falls",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "jog-falls sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: SHIVANASAMUDRA Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards shivanasamudra",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "shivanasamudra sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "350–800 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "jog-falls",
      "shivanasamudra",
      "agumbe",
      "magod-falls",
      "gokak-falls",
      "sathodi-falls",
      "honnemaradu"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Waterfall/Nature Tour Option #9 (2 Days / 1 Night)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "waterfall-nature-10",
    "title": "Waterfall/Nature Tour Option #10 (2 Days / 1 Night)",
    "slug": "waterfall-nature-10",
    "category": "Waterfall/Nature",
    "duration": "2 Days / 1 Night",
    "destinationIds": [
      "jog-falls",
      "shivanasamudra",
      "agumbe",
      "magod-falls",
      "gokak-falls",
      "sathodi-falls",
      "honnemaradu"
    ],
    "route": "Bengaluru → jog-falls → shivanasamudra → agumbe → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: JOG-FALLS Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards jog-falls",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "jog-falls sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: SHIVANASAMUDRA Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards shivanasamudra",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "shivanasamudra sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "350–800 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "jog-falls",
      "shivanasamudra",
      "agumbe",
      "magod-falls",
      "gokak-falls",
      "sathodi-falls",
      "honnemaradu"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Waterfall/Nature Tour Option #10 (2 Days / 1 Night)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "waterfall-nature-11",
    "title": "Waterfall/Nature Tour Option #11 (2 Days / 1 Night)",
    "slug": "waterfall-nature-11",
    "category": "Waterfall/Nature",
    "duration": "2 Days / 1 Night",
    "destinationIds": [
      "jog-falls",
      "shivanasamudra",
      "agumbe",
      "magod-falls",
      "gokak-falls",
      "sathodi-falls",
      "honnemaradu"
    ],
    "route": "Bengaluru → jog-falls → shivanasamudra → agumbe → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: JOG-FALLS Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards jog-falls",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "jog-falls sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: SHIVANASAMUDRA Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards shivanasamudra",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "shivanasamudra sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "350–800 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "jog-falls",
      "shivanasamudra",
      "agumbe",
      "magod-falls",
      "gokak-falls",
      "sathodi-falls",
      "honnemaradu"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Waterfall/Nature Tour Option #11 (2 Days / 1 Night)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "waterfall-nature-12",
    "title": "Waterfall/Nature Tour Option #12 (2 Days / 1 Night)",
    "slug": "waterfall-nature-12",
    "category": "Waterfall/Nature",
    "duration": "2 Days / 1 Night",
    "destinationIds": [
      "jog-falls",
      "shivanasamudra",
      "agumbe",
      "magod-falls",
      "gokak-falls",
      "sathodi-falls",
      "honnemaradu"
    ],
    "route": "Bengaluru → jog-falls → shivanasamudra → agumbe → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: JOG-FALLS Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards jog-falls",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "jog-falls sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: SHIVANASAMUDRA Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards shivanasamudra",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "shivanasamudra sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "350–800 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "jog-falls",
      "shivanasamudra",
      "agumbe",
      "magod-falls",
      "gokak-falls",
      "sathodi-falls",
      "honnemaradu"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Waterfall/Nature Tour Option #12 (2 Days / 1 Night)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "waterfall-nature-13",
    "title": "Waterfall/Nature Tour Option #13 (2 Days / 1 Night)",
    "slug": "waterfall-nature-13",
    "category": "Waterfall/Nature",
    "duration": "2 Days / 1 Night",
    "destinationIds": [
      "jog-falls",
      "shivanasamudra",
      "agumbe",
      "magod-falls",
      "gokak-falls",
      "sathodi-falls",
      "honnemaradu"
    ],
    "route": "Bengaluru → jog-falls → shivanasamudra → agumbe → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: JOG-FALLS Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards jog-falls",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "jog-falls sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: SHIVANASAMUDRA Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards shivanasamudra",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "shivanasamudra sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "350–800 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "jog-falls",
      "shivanasamudra",
      "agumbe",
      "magod-falls",
      "gokak-falls",
      "sathodi-falls",
      "honnemaradu"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Waterfall/Nature Tour Option #13 (2 Days / 1 Night)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "waterfall-nature-14",
    "title": "Waterfall/Nature Tour Option #14 (2 Days / 1 Night)",
    "slug": "waterfall-nature-14",
    "category": "Waterfall/Nature",
    "duration": "2 Days / 1 Night",
    "destinationIds": [
      "jog-falls",
      "shivanasamudra",
      "agumbe",
      "magod-falls",
      "gokak-falls",
      "sathodi-falls",
      "honnemaradu"
    ],
    "route": "Bengaluru → jog-falls → shivanasamudra → agumbe → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: JOG-FALLS Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards jog-falls",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "jog-falls sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: SHIVANASAMUDRA Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards shivanasamudra",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "shivanasamudra sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "350–800 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "jog-falls",
      "shivanasamudra",
      "agumbe",
      "magod-falls",
      "gokak-falls",
      "sathodi-falls",
      "honnemaradu"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Waterfall/Nature Tour Option #14 (2 Days / 1 Night)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "waterfall-nature-15",
    "title": "Waterfall/Nature Tour Option #15 (2 Days / 1 Night)",
    "slug": "waterfall-nature-15",
    "category": "Waterfall/Nature",
    "duration": "2 Days / 1 Night",
    "destinationIds": [
      "jog-falls",
      "shivanasamudra",
      "agumbe",
      "magod-falls",
      "gokak-falls",
      "sathodi-falls",
      "honnemaradu"
    ],
    "route": "Bengaluru → jog-falls → shivanasamudra → agumbe → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: JOG-FALLS Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards jog-falls",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "jog-falls sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: SHIVANASAMUDRA Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards shivanasamudra",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "shivanasamudra sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "350–800 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "jog-falls",
      "shivanasamudra",
      "agumbe",
      "magod-falls",
      "gokak-falls",
      "sathodi-falls",
      "honnemaradu"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Waterfall/Nature Tour Option #15 (2 Days / 1 Night)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "mysuru-circuit-1",
    "title": "Mysuru Tour Option #1 (2 Days / 1 Night)",
    "slug": "mysuru-circuit-1",
    "category": "Mysuru",
    "duration": "2 Days / 1 Night",
    "destinationIds": [
      "mysuru",
      "chamundi-hills",
      "srirangapatna",
      "ranganathittu",
      "somanathapura",
      "talakadu",
      "nanjangud",
      "krs-brindavan-gardens"
    ],
    "route": "Bengaluru → mysuru → chamundi-hills → srirangapatna → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: MYSURU Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards mysuru",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "mysuru sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: CHAMUNDI-HILLS Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards chamundi-hills",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "chamundi-hills sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "350–500 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "mysuru",
      "chamundi-hills",
      "srirangapatna",
      "ranganathittu",
      "somanathapura",
      "talakadu",
      "nanjangud",
      "krs-brindavan-gardens"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Mysuru Tour Option #1 (2 Days / 1 Night)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "mysuru-circuit-2",
    "title": "Mysuru Tour Option #2 (2 Days / 1 Night)",
    "slug": "mysuru-circuit-2",
    "category": "Mysuru",
    "duration": "2 Days / 1 Night",
    "destinationIds": [
      "mysuru",
      "chamundi-hills",
      "srirangapatna",
      "ranganathittu",
      "somanathapura",
      "talakadu",
      "nanjangud",
      "krs-brindavan-gardens"
    ],
    "route": "Bengaluru → mysuru → chamundi-hills → srirangapatna → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: MYSURU Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards mysuru",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "mysuru sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: CHAMUNDI-HILLS Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards chamundi-hills",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "chamundi-hills sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "350–500 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "mysuru",
      "chamundi-hills",
      "srirangapatna",
      "ranganathittu",
      "somanathapura",
      "talakadu",
      "nanjangud",
      "krs-brindavan-gardens"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Mysuru Tour Option #2 (2 Days / 1 Night)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "mysuru-circuit-3",
    "title": "Mysuru Tour Option #3 (2 Days / 1 Night)",
    "slug": "mysuru-circuit-3",
    "category": "Mysuru",
    "duration": "2 Days / 1 Night",
    "destinationIds": [
      "mysuru",
      "chamundi-hills",
      "srirangapatna",
      "ranganathittu",
      "somanathapura",
      "talakadu",
      "nanjangud",
      "krs-brindavan-gardens"
    ],
    "route": "Bengaluru → mysuru → chamundi-hills → srirangapatna → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: MYSURU Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards mysuru",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "mysuru sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: CHAMUNDI-HILLS Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards chamundi-hills",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "chamundi-hills sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "350–500 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "mysuru",
      "chamundi-hills",
      "srirangapatna",
      "ranganathittu",
      "somanathapura",
      "talakadu",
      "nanjangud",
      "krs-brindavan-gardens"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Mysuru Tour Option #3 (2 Days / 1 Night)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "mysuru-circuit-4",
    "title": "Mysuru Tour Option #4 (2 Days / 1 Night)",
    "slug": "mysuru-circuit-4",
    "category": "Mysuru",
    "duration": "2 Days / 1 Night",
    "destinationIds": [
      "mysuru",
      "chamundi-hills",
      "srirangapatna",
      "ranganathittu",
      "somanathapura",
      "talakadu",
      "nanjangud",
      "krs-brindavan-gardens"
    ],
    "route": "Bengaluru → mysuru → chamundi-hills → srirangapatna → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: MYSURU Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards mysuru",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "mysuru sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: CHAMUNDI-HILLS Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards chamundi-hills",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "chamundi-hills sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "350–500 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "mysuru",
      "chamundi-hills",
      "srirangapatna",
      "ranganathittu",
      "somanathapura",
      "talakadu",
      "nanjangud",
      "krs-brindavan-gardens"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Mysuru Tour Option #4 (2 Days / 1 Night)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "mysuru-circuit-5",
    "title": "Mysuru Tour Option #5 (2 Days / 1 Night)",
    "slug": "mysuru-circuit-5",
    "category": "Mysuru",
    "duration": "2 Days / 1 Night",
    "destinationIds": [
      "mysuru",
      "chamundi-hills",
      "srirangapatna",
      "ranganathittu",
      "somanathapura",
      "talakadu",
      "nanjangud",
      "krs-brindavan-gardens"
    ],
    "route": "Bengaluru → mysuru → chamundi-hills → srirangapatna → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: MYSURU Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards mysuru",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "mysuru sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: CHAMUNDI-HILLS Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards chamundi-hills",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "chamundi-hills sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "350–500 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "mysuru",
      "chamundi-hills",
      "srirangapatna",
      "ranganathittu",
      "somanathapura",
      "talakadu",
      "nanjangud",
      "krs-brindavan-gardens"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Mysuru Tour Option #5 (2 Days / 1 Night)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "mysuru-circuit-6",
    "title": "Mysuru Tour Option #6 (2 Days / 1 Night)",
    "slug": "mysuru-circuit-6",
    "category": "Mysuru",
    "duration": "2 Days / 1 Night",
    "destinationIds": [
      "mysuru",
      "chamundi-hills",
      "srirangapatna",
      "ranganathittu",
      "somanathapura",
      "talakadu",
      "nanjangud",
      "krs-brindavan-gardens"
    ],
    "route": "Bengaluru → mysuru → chamundi-hills → srirangapatna → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: MYSURU Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards mysuru",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "mysuru sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: CHAMUNDI-HILLS Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards chamundi-hills",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "chamundi-hills sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "350–500 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "mysuru",
      "chamundi-hills",
      "srirangapatna",
      "ranganathittu",
      "somanathapura",
      "talakadu",
      "nanjangud",
      "krs-brindavan-gardens"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Mysuru Tour Option #6 (2 Days / 1 Night)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "mysuru-circuit-7",
    "title": "Mysuru Tour Option #7 (2 Days / 1 Night)",
    "slug": "mysuru-circuit-7",
    "category": "Mysuru",
    "duration": "2 Days / 1 Night",
    "destinationIds": [
      "mysuru",
      "chamundi-hills",
      "srirangapatna",
      "ranganathittu",
      "somanathapura",
      "talakadu",
      "nanjangud",
      "krs-brindavan-gardens"
    ],
    "route": "Bengaluru → mysuru → chamundi-hills → srirangapatna → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: MYSURU Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards mysuru",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "mysuru sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: CHAMUNDI-HILLS Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards chamundi-hills",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "chamundi-hills sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "350–500 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "mysuru",
      "chamundi-hills",
      "srirangapatna",
      "ranganathittu",
      "somanathapura",
      "talakadu",
      "nanjangud",
      "krs-brindavan-gardens"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Mysuru Tour Option #7 (2 Days / 1 Night)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "mysuru-circuit-8",
    "title": "Mysuru Tour Option #8 (2 Days / 1 Night)",
    "slug": "mysuru-circuit-8",
    "category": "Mysuru",
    "duration": "2 Days / 1 Night",
    "destinationIds": [
      "mysuru",
      "chamundi-hills",
      "srirangapatna",
      "ranganathittu",
      "somanathapura",
      "talakadu",
      "nanjangud",
      "krs-brindavan-gardens"
    ],
    "route": "Bengaluru → mysuru → chamundi-hills → srirangapatna → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: MYSURU Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards mysuru",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "mysuru sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: CHAMUNDI-HILLS Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards chamundi-hills",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "chamundi-hills sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "350–500 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "mysuru",
      "chamundi-hills",
      "srirangapatna",
      "ranganathittu",
      "somanathapura",
      "talakadu",
      "nanjangud",
      "krs-brindavan-gardens"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Mysuru Tour Option #8 (2 Days / 1 Night)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "mysuru-circuit-9",
    "title": "Mysuru Tour Option #9 (2 Days / 1 Night)",
    "slug": "mysuru-circuit-9",
    "category": "Mysuru",
    "duration": "2 Days / 1 Night",
    "destinationIds": [
      "mysuru",
      "chamundi-hills",
      "srirangapatna",
      "ranganathittu",
      "somanathapura",
      "talakadu",
      "nanjangud",
      "krs-brindavan-gardens"
    ],
    "route": "Bengaluru → mysuru → chamundi-hills → srirangapatna → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: MYSURU Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards mysuru",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "mysuru sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: CHAMUNDI-HILLS Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards chamundi-hills",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "chamundi-hills sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "350–500 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "mysuru",
      "chamundi-hills",
      "srirangapatna",
      "ranganathittu",
      "somanathapura",
      "talakadu",
      "nanjangud",
      "krs-brindavan-gardens"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Mysuru Tour Option #9 (2 Days / 1 Night)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "mysuru-circuit-10",
    "title": "Mysuru Tour Option #10 (2 Days / 1 Night)",
    "slug": "mysuru-circuit-10",
    "category": "Mysuru",
    "duration": "2 Days / 1 Night",
    "destinationIds": [
      "mysuru",
      "chamundi-hills",
      "srirangapatna",
      "ranganathittu",
      "somanathapura",
      "talakadu",
      "nanjangud",
      "krs-brindavan-gardens"
    ],
    "route": "Bengaluru → mysuru → chamundi-hills → srirangapatna → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: MYSURU Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards mysuru",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "mysuru sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: CHAMUNDI-HILLS Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards chamundi-hills",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "chamundi-hills sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "350–500 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "mysuru",
      "chamundi-hills",
      "srirangapatna",
      "ranganathittu",
      "somanathapura",
      "talakadu",
      "nanjangud",
      "krs-brindavan-gardens"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Mysuru Tour Option #10 (2 Days / 1 Night)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "coorg-misty-1",
    "title": "Coorg Tour Option #1 (3 Days / 2 Nights)",
    "slug": "coorg-misty-1",
    "category": "Coorg",
    "duration": "3 Days / 2 Nights",
    "destinationIds": [
      "madikeri",
      "kushalnagar-dubare",
      "bhagamandala-talakaveri",
      "virajpet",
      "kakkabe-tadiandamol"
    ],
    "route": "Bengaluru → madikeri → kushalnagar-dubare → bhagamandala-talakaveri → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: MADIKERI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards madikeri",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "madikeri sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: KUSHALNAGAR-DUBARE Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards kushalnagar-dubare",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "kushalnagar-dubare sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 3,
        "title": "Day 3: BHAGAMANDALA-TALAKAVERI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards bhagamandala-talakaveri",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "bhagamandala-talakaveri sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "650 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "madikeri",
      "kushalnagar-dubare",
      "bhagamandala-talakaveri",
      "virajpet",
      "kakkabe-tadiandamol"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Coorg Tour Option #1 (3 Days / 2 Nights)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "coorg-misty-2",
    "title": "Coorg Tour Option #2 (3 Days / 2 Nights)",
    "slug": "coorg-misty-2",
    "category": "Coorg",
    "duration": "3 Days / 2 Nights",
    "destinationIds": [
      "madikeri",
      "kushalnagar-dubare",
      "bhagamandala-talakaveri",
      "virajpet",
      "kakkabe-tadiandamol"
    ],
    "route": "Bengaluru → madikeri → kushalnagar-dubare → bhagamandala-talakaveri → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: MADIKERI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards madikeri",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "madikeri sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: KUSHALNAGAR-DUBARE Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards kushalnagar-dubare",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "kushalnagar-dubare sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 3,
        "title": "Day 3: BHAGAMANDALA-TALAKAVERI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards bhagamandala-talakaveri",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "bhagamandala-talakaveri sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "650 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "madikeri",
      "kushalnagar-dubare",
      "bhagamandala-talakaveri",
      "virajpet",
      "kakkabe-tadiandamol"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Coorg Tour Option #2 (3 Days / 2 Nights)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "coorg-misty-3",
    "title": "Coorg Tour Option #3 (3 Days / 2 Nights)",
    "slug": "coorg-misty-3",
    "category": "Coorg",
    "duration": "3 Days / 2 Nights",
    "destinationIds": [
      "madikeri",
      "kushalnagar-dubare",
      "bhagamandala-talakaveri",
      "virajpet",
      "kakkabe-tadiandamol"
    ],
    "route": "Bengaluru → madikeri → kushalnagar-dubare → bhagamandala-talakaveri → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: MADIKERI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards madikeri",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "madikeri sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: KUSHALNAGAR-DUBARE Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards kushalnagar-dubare",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "kushalnagar-dubare sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 3,
        "title": "Day 3: BHAGAMANDALA-TALAKAVERI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards bhagamandala-talakaveri",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "bhagamandala-talakaveri sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "650 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "madikeri",
      "kushalnagar-dubare",
      "bhagamandala-talakaveri",
      "virajpet",
      "kakkabe-tadiandamol"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Coorg Tour Option #3 (3 Days / 2 Nights)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "coorg-misty-4",
    "title": "Coorg Tour Option #4 (3 Days / 2 Nights)",
    "slug": "coorg-misty-4",
    "category": "Coorg",
    "duration": "3 Days / 2 Nights",
    "destinationIds": [
      "madikeri",
      "kushalnagar-dubare",
      "bhagamandala-talakaveri",
      "virajpet",
      "kakkabe-tadiandamol"
    ],
    "route": "Bengaluru → madikeri → kushalnagar-dubare → bhagamandala-talakaveri → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: MADIKERI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards madikeri",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "madikeri sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: KUSHALNAGAR-DUBARE Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards kushalnagar-dubare",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "kushalnagar-dubare sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 3,
        "title": "Day 3: BHAGAMANDALA-TALAKAVERI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards bhagamandala-talakaveri",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "bhagamandala-talakaveri sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "650 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "madikeri",
      "kushalnagar-dubare",
      "bhagamandala-talakaveri",
      "virajpet",
      "kakkabe-tadiandamol"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Coorg Tour Option #4 (3 Days / 2 Nights)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "coorg-misty-5",
    "title": "Coorg Tour Option #5 (3 Days / 2 Nights)",
    "slug": "coorg-misty-5",
    "category": "Coorg",
    "duration": "3 Days / 2 Nights",
    "destinationIds": [
      "madikeri",
      "kushalnagar-dubare",
      "bhagamandala-talakaveri",
      "virajpet",
      "kakkabe-tadiandamol"
    ],
    "route": "Bengaluru → madikeri → kushalnagar-dubare → bhagamandala-talakaveri → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: MADIKERI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards madikeri",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "madikeri sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: KUSHALNAGAR-DUBARE Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards kushalnagar-dubare",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "kushalnagar-dubare sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 3,
        "title": "Day 3: BHAGAMANDALA-TALAKAVERI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards bhagamandala-talakaveri",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "bhagamandala-talakaveri sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "650 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "madikeri",
      "kushalnagar-dubare",
      "bhagamandala-talakaveri",
      "virajpet",
      "kakkabe-tadiandamol"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Coorg Tour Option #5 (3 Days / 2 Nights)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "coorg-misty-6",
    "title": "Coorg Tour Option #6 (3 Days / 2 Nights)",
    "slug": "coorg-misty-6",
    "category": "Coorg",
    "duration": "3 Days / 2 Nights",
    "destinationIds": [
      "madikeri",
      "kushalnagar-dubare",
      "bhagamandala-talakaveri",
      "virajpet",
      "kakkabe-tadiandamol"
    ],
    "route": "Bengaluru → madikeri → kushalnagar-dubare → bhagamandala-talakaveri → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: MADIKERI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards madikeri",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "madikeri sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: KUSHALNAGAR-DUBARE Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards kushalnagar-dubare",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "kushalnagar-dubare sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 3,
        "title": "Day 3: BHAGAMANDALA-TALAKAVERI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards bhagamandala-talakaveri",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "bhagamandala-talakaveri sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "650 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "madikeri",
      "kushalnagar-dubare",
      "bhagamandala-talakaveri",
      "virajpet",
      "kakkabe-tadiandamol"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Coorg Tour Option #6 (3 Days / 2 Nights)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "coorg-misty-7",
    "title": "Coorg Tour Option #7 (3 Days / 2 Nights)",
    "slug": "coorg-misty-7",
    "category": "Coorg",
    "duration": "3 Days / 2 Nights",
    "destinationIds": [
      "madikeri",
      "kushalnagar-dubare",
      "bhagamandala-talakaveri",
      "virajpet",
      "kakkabe-tadiandamol"
    ],
    "route": "Bengaluru → madikeri → kushalnagar-dubare → bhagamandala-talakaveri → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: MADIKERI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards madikeri",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "madikeri sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: KUSHALNAGAR-DUBARE Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards kushalnagar-dubare",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "kushalnagar-dubare sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 3,
        "title": "Day 3: BHAGAMANDALA-TALAKAVERI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards bhagamandala-talakaveri",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "bhagamandala-talakaveri sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "650 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "madikeri",
      "kushalnagar-dubare",
      "bhagamandala-talakaveri",
      "virajpet",
      "kakkabe-tadiandamol"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Coorg Tour Option #7 (3 Days / 2 Nights)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "coorg-misty-8",
    "title": "Coorg Tour Option #8 (3 Days / 2 Nights)",
    "slug": "coorg-misty-8",
    "category": "Coorg",
    "duration": "3 Days / 2 Nights",
    "destinationIds": [
      "madikeri",
      "kushalnagar-dubare",
      "bhagamandala-talakaveri",
      "virajpet",
      "kakkabe-tadiandamol"
    ],
    "route": "Bengaluru → madikeri → kushalnagar-dubare → bhagamandala-talakaveri → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: MADIKERI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards madikeri",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "madikeri sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: KUSHALNAGAR-DUBARE Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards kushalnagar-dubare",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "kushalnagar-dubare sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 3,
        "title": "Day 3: BHAGAMANDALA-TALAKAVERI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards bhagamandala-talakaveri",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "bhagamandala-talakaveri sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "650 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "madikeri",
      "kushalnagar-dubare",
      "bhagamandala-talakaveri",
      "virajpet",
      "kakkabe-tadiandamol"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Coorg Tour Option #8 (3 Days / 2 Nights)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "coorg-misty-9",
    "title": "Coorg Tour Option #9 (3 Days / 2 Nights)",
    "slug": "coorg-misty-9",
    "category": "Coorg",
    "duration": "3 Days / 2 Nights",
    "destinationIds": [
      "madikeri",
      "kushalnagar-dubare",
      "bhagamandala-talakaveri",
      "virajpet",
      "kakkabe-tadiandamol"
    ],
    "route": "Bengaluru → madikeri → kushalnagar-dubare → bhagamandala-talakaveri → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: MADIKERI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards madikeri",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "madikeri sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: KUSHALNAGAR-DUBARE Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards kushalnagar-dubare",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "kushalnagar-dubare sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 3,
        "title": "Day 3: BHAGAMANDALA-TALAKAVERI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards bhagamandala-talakaveri",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "bhagamandala-talakaveri sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "650 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "madikeri",
      "kushalnagar-dubare",
      "bhagamandala-talakaveri",
      "virajpet",
      "kakkabe-tadiandamol"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Coorg Tour Option #9 (3 Days / 2 Nights)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "coorg-misty-10",
    "title": "Coorg Tour Option #10 (3 Days / 2 Nights)",
    "slug": "coorg-misty-10",
    "category": "Coorg",
    "duration": "3 Days / 2 Nights",
    "destinationIds": [
      "madikeri",
      "kushalnagar-dubare",
      "bhagamandala-talakaveri",
      "virajpet",
      "kakkabe-tadiandamol"
    ],
    "route": "Bengaluru → madikeri → kushalnagar-dubare → bhagamandala-talakaveri → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: MADIKERI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards madikeri",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "madikeri sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: KUSHALNAGAR-DUBARE Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards kushalnagar-dubare",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "kushalnagar-dubare sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 3,
        "title": "Day 3: BHAGAMANDALA-TALAKAVERI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards bhagamandala-talakaveri",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "bhagamandala-talakaveri sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "650 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "madikeri",
      "kushalnagar-dubare",
      "bhagamandala-talakaveri",
      "virajpet",
      "kakkabe-tadiandamol"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Coorg Tour Option #10 (3 Days / 2 Nights)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "chikkamagaluru-coffee-1",
    "title": "Chikkamagaluru Tour Option #1 (3 Days / 2 Nights)",
    "slug": "chikkamagaluru-coffee-1",
    "category": "Chikkamagaluru",
    "duration": "3 Days / 2 Nights",
    "destinationIds": [
      "chikkamagaluru",
      "mullayanagiri-baba-budangiri",
      "kemmannugundi",
      "kudremukh",
      "horanadu",
      "bhadra-wildlife-sanctuary"
    ],
    "route": "Bengaluru → chikkamagaluru → mullayanagiri-baba-budangiri → kemmannugundi → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: CHIKKAMAGALURU Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards chikkamagaluru",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "chikkamagaluru sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: MULLAYANAGIRI-BABA-BUDANGIRI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards mullayanagiri-baba-budangiri",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "mullayanagiri-baba-budangiri sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 3,
        "title": "Day 3: KEMMANNUGUNDI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards kemmannugundi",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "kemmannugundi sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "720 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "chikkamagaluru",
      "mullayanagiri-baba-budangiri",
      "kemmannugundi",
      "kudremukh",
      "horanadu",
      "bhadra-wildlife-sanctuary"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Chikkamagaluru Tour Option #1 (3 Days / 2 Nights)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "chikkamagaluru-coffee-2",
    "title": "Chikkamagaluru Tour Option #2 (3 Days / 2 Nights)",
    "slug": "chikkamagaluru-coffee-2",
    "category": "Chikkamagaluru",
    "duration": "3 Days / 2 Nights",
    "destinationIds": [
      "chikkamagaluru",
      "mullayanagiri-baba-budangiri",
      "kemmannugundi",
      "kudremukh",
      "horanadu",
      "bhadra-wildlife-sanctuary"
    ],
    "route": "Bengaluru → chikkamagaluru → mullayanagiri-baba-budangiri → kemmannugundi → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: CHIKKAMAGALURU Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards chikkamagaluru",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "chikkamagaluru sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: MULLAYANAGIRI-BABA-BUDANGIRI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards mullayanagiri-baba-budangiri",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "mullayanagiri-baba-budangiri sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 3,
        "title": "Day 3: KEMMANNUGUNDI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards kemmannugundi",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "kemmannugundi sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "720 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "chikkamagaluru",
      "mullayanagiri-baba-budangiri",
      "kemmannugundi",
      "kudremukh",
      "horanadu",
      "bhadra-wildlife-sanctuary"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Chikkamagaluru Tour Option #2 (3 Days / 2 Nights)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "chikkamagaluru-coffee-3",
    "title": "Chikkamagaluru Tour Option #3 (3 Days / 2 Nights)",
    "slug": "chikkamagaluru-coffee-3",
    "category": "Chikkamagaluru",
    "duration": "3 Days / 2 Nights",
    "destinationIds": [
      "chikkamagaluru",
      "mullayanagiri-baba-budangiri",
      "kemmannugundi",
      "kudremukh",
      "horanadu",
      "bhadra-wildlife-sanctuary"
    ],
    "route": "Bengaluru → chikkamagaluru → mullayanagiri-baba-budangiri → kemmannugundi → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: CHIKKAMAGALURU Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards chikkamagaluru",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "chikkamagaluru sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: MULLAYANAGIRI-BABA-BUDANGIRI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards mullayanagiri-baba-budangiri",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "mullayanagiri-baba-budangiri sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 3,
        "title": "Day 3: KEMMANNUGUNDI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards kemmannugundi",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "kemmannugundi sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "720 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "chikkamagaluru",
      "mullayanagiri-baba-budangiri",
      "kemmannugundi",
      "kudremukh",
      "horanadu",
      "bhadra-wildlife-sanctuary"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Chikkamagaluru Tour Option #3 (3 Days / 2 Nights)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "chikkamagaluru-coffee-4",
    "title": "Chikkamagaluru Tour Option #4 (3 Days / 2 Nights)",
    "slug": "chikkamagaluru-coffee-4",
    "category": "Chikkamagaluru",
    "duration": "3 Days / 2 Nights",
    "destinationIds": [
      "chikkamagaluru",
      "mullayanagiri-baba-budangiri",
      "kemmannugundi",
      "kudremukh",
      "horanadu",
      "bhadra-wildlife-sanctuary"
    ],
    "route": "Bengaluru → chikkamagaluru → mullayanagiri-baba-budangiri → kemmannugundi → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: CHIKKAMAGALURU Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards chikkamagaluru",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "chikkamagaluru sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: MULLAYANAGIRI-BABA-BUDANGIRI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards mullayanagiri-baba-budangiri",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "mullayanagiri-baba-budangiri sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 3,
        "title": "Day 3: KEMMANNUGUNDI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards kemmannugundi",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "kemmannugundi sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "720 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "chikkamagaluru",
      "mullayanagiri-baba-budangiri",
      "kemmannugundi",
      "kudremukh",
      "horanadu",
      "bhadra-wildlife-sanctuary"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Chikkamagaluru Tour Option #4 (3 Days / 2 Nights)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "chikkamagaluru-coffee-5",
    "title": "Chikkamagaluru Tour Option #5 (3 Days / 2 Nights)",
    "slug": "chikkamagaluru-coffee-5",
    "category": "Chikkamagaluru",
    "duration": "3 Days / 2 Nights",
    "destinationIds": [
      "chikkamagaluru",
      "mullayanagiri-baba-budangiri",
      "kemmannugundi",
      "kudremukh",
      "horanadu",
      "bhadra-wildlife-sanctuary"
    ],
    "route": "Bengaluru → chikkamagaluru → mullayanagiri-baba-budangiri → kemmannugundi → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: CHIKKAMAGALURU Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards chikkamagaluru",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "chikkamagaluru sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: MULLAYANAGIRI-BABA-BUDANGIRI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards mullayanagiri-baba-budangiri",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "mullayanagiri-baba-budangiri sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 3,
        "title": "Day 3: KEMMANNUGUNDI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards kemmannugundi",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "kemmannugundi sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "720 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "chikkamagaluru",
      "mullayanagiri-baba-budangiri",
      "kemmannugundi",
      "kudremukh",
      "horanadu",
      "bhadra-wildlife-sanctuary"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Chikkamagaluru Tour Option #5 (3 Days / 2 Nights)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "chikkamagaluru-coffee-6",
    "title": "Chikkamagaluru Tour Option #6 (3 Days / 2 Nights)",
    "slug": "chikkamagaluru-coffee-6",
    "category": "Chikkamagaluru",
    "duration": "3 Days / 2 Nights",
    "destinationIds": [
      "chikkamagaluru",
      "mullayanagiri-baba-budangiri",
      "kemmannugundi",
      "kudremukh",
      "horanadu",
      "bhadra-wildlife-sanctuary"
    ],
    "route": "Bengaluru → chikkamagaluru → mullayanagiri-baba-budangiri → kemmannugundi → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: CHIKKAMAGALURU Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards chikkamagaluru",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "chikkamagaluru sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: MULLAYANAGIRI-BABA-BUDANGIRI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards mullayanagiri-baba-budangiri",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "mullayanagiri-baba-budangiri sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 3,
        "title": "Day 3: KEMMANNUGUNDI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards kemmannugundi",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "kemmannugundi sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "720 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "chikkamagaluru",
      "mullayanagiri-baba-budangiri",
      "kemmannugundi",
      "kudremukh",
      "horanadu",
      "bhadra-wildlife-sanctuary"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Chikkamagaluru Tour Option #6 (3 Days / 2 Nights)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "chikkamagaluru-coffee-7",
    "title": "Chikkamagaluru Tour Option #7 (3 Days / 2 Nights)",
    "slug": "chikkamagaluru-coffee-7",
    "category": "Chikkamagaluru",
    "duration": "3 Days / 2 Nights",
    "destinationIds": [
      "chikkamagaluru",
      "mullayanagiri-baba-budangiri",
      "kemmannugundi",
      "kudremukh",
      "horanadu",
      "bhadra-wildlife-sanctuary"
    ],
    "route": "Bengaluru → chikkamagaluru → mullayanagiri-baba-budangiri → kemmannugundi → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: CHIKKAMAGALURU Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards chikkamagaluru",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "chikkamagaluru sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: MULLAYANAGIRI-BABA-BUDANGIRI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards mullayanagiri-baba-budangiri",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "mullayanagiri-baba-budangiri sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 3,
        "title": "Day 3: KEMMANNUGUNDI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards kemmannugundi",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "kemmannugundi sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "720 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "chikkamagaluru",
      "mullayanagiri-baba-budangiri",
      "kemmannugundi",
      "kudremukh",
      "horanadu",
      "bhadra-wildlife-sanctuary"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Chikkamagaluru Tour Option #7 (3 Days / 2 Nights)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "chikkamagaluru-coffee-8",
    "title": "Chikkamagaluru Tour Option #8 (3 Days / 2 Nights)",
    "slug": "chikkamagaluru-coffee-8",
    "category": "Chikkamagaluru",
    "duration": "3 Days / 2 Nights",
    "destinationIds": [
      "chikkamagaluru",
      "mullayanagiri-baba-budangiri",
      "kemmannugundi",
      "kudremukh",
      "horanadu",
      "bhadra-wildlife-sanctuary"
    ],
    "route": "Bengaluru → chikkamagaluru → mullayanagiri-baba-budangiri → kemmannugundi → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: CHIKKAMAGALURU Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards chikkamagaluru",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "chikkamagaluru sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: MULLAYANAGIRI-BABA-BUDANGIRI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards mullayanagiri-baba-budangiri",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "mullayanagiri-baba-budangiri sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 3,
        "title": "Day 3: KEMMANNUGUNDI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards kemmannugundi",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "kemmannugundi sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "720 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "chikkamagaluru",
      "mullayanagiri-baba-budangiri",
      "kemmannugundi",
      "kudremukh",
      "horanadu",
      "bhadra-wildlife-sanctuary"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Chikkamagaluru Tour Option #8 (3 Days / 2 Nights)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "chikkamagaluru-coffee-9",
    "title": "Chikkamagaluru Tour Option #9 (3 Days / 2 Nights)",
    "slug": "chikkamagaluru-coffee-9",
    "category": "Chikkamagaluru",
    "duration": "3 Days / 2 Nights",
    "destinationIds": [
      "chikkamagaluru",
      "mullayanagiri-baba-budangiri",
      "kemmannugundi",
      "kudremukh",
      "horanadu",
      "bhadra-wildlife-sanctuary"
    ],
    "route": "Bengaluru → chikkamagaluru → mullayanagiri-baba-budangiri → kemmannugundi → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: CHIKKAMAGALURU Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards chikkamagaluru",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "chikkamagaluru sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: MULLAYANAGIRI-BABA-BUDANGIRI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards mullayanagiri-baba-budangiri",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "mullayanagiri-baba-budangiri sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 3,
        "title": "Day 3: KEMMANNUGUNDI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards kemmannugundi",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "kemmannugundi sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "720 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "chikkamagaluru",
      "mullayanagiri-baba-budangiri",
      "kemmannugundi",
      "kudremukh",
      "horanadu",
      "bhadra-wildlife-sanctuary"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Chikkamagaluru Tour Option #9 (3 Days / 2 Nights)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "chikkamagaluru-coffee-10",
    "title": "Chikkamagaluru Tour Option #10 (3 Days / 2 Nights)",
    "slug": "chikkamagaluru-coffee-10",
    "category": "Chikkamagaluru",
    "duration": "3 Days / 2 Nights",
    "destinationIds": [
      "chikkamagaluru",
      "mullayanagiri-baba-budangiri",
      "kemmannugundi",
      "kudremukh",
      "horanadu",
      "bhadra-wildlife-sanctuary"
    ],
    "route": "Bengaluru → chikkamagaluru → mullayanagiri-baba-budangiri → kemmannugundi → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: CHIKKAMAGALURU Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards chikkamagaluru",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "chikkamagaluru sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: MULLAYANAGIRI-BABA-BUDANGIRI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards mullayanagiri-baba-budangiri",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "mullayanagiri-baba-budangiri sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 3,
        "title": "Day 3: KEMMANNUGUNDI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards kemmannugundi",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "kemmannugundi sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "720 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "chikkamagaluru",
      "mullayanagiri-baba-budangiri",
      "kemmannugundi",
      "kudremukh",
      "horanadu",
      "bhadra-wildlife-sanctuary"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Chikkamagaluru Tour Option #10 (3 Days / 2 Nights)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "coastal-karnataka-1",
    "title": "Coastal Tour Option #1 (4 Days / 3 Nights)",
    "slug": "coastal-karnataka-1",
    "category": "Coastal",
    "duration": "4 Days / 3 Nights",
    "destinationIds": [
      "udupi",
      "malpe-st-marys-island",
      "manipal",
      "kaup-padubidri",
      "kollur",
      "kundapura-maravanthe",
      "mangaluru",
      "gokarna",
      "murudeshwar",
      "karwar",
      "honnavar"
    ],
    "route": "Bengaluru → udupi → malpe-st-marys-island → manipal → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: UDUPI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards udupi",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "udupi sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: MALPE-ST-MARYS-ISLAND Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards malpe-st-marys-island",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "malpe-st-marys-island sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 3,
        "title": "Day 3: MANIPAL Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards manipal",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "manipal sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 4,
        "title": "Day 4: KAUP-PADUBIDRI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards kaup-padubidri",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "kaup-padubidri sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "1,100 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "udupi",
      "malpe-st-marys-island",
      "manipal",
      "kaup-padubidri",
      "kollur",
      "kundapura-maravanthe",
      "mangaluru",
      "gokarna",
      "murudeshwar",
      "karwar",
      "honnavar"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Coastal Tour Option #1 (4 Days / 3 Nights)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "coastal-karnataka-2",
    "title": "Coastal Tour Option #2 (4 Days / 3 Nights)",
    "slug": "coastal-karnataka-2",
    "category": "Coastal",
    "duration": "4 Days / 3 Nights",
    "destinationIds": [
      "udupi",
      "malpe-st-marys-island",
      "manipal",
      "kaup-padubidri",
      "kollur",
      "kundapura-maravanthe",
      "mangaluru",
      "gokarna",
      "murudeshwar",
      "karwar",
      "honnavar"
    ],
    "route": "Bengaluru → udupi → malpe-st-marys-island → manipal → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: UDUPI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards udupi",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "udupi sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: MALPE-ST-MARYS-ISLAND Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards malpe-st-marys-island",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "malpe-st-marys-island sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 3,
        "title": "Day 3: MANIPAL Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards manipal",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "manipal sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 4,
        "title": "Day 4: KAUP-PADUBIDRI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards kaup-padubidri",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "kaup-padubidri sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "1,100 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "udupi",
      "malpe-st-marys-island",
      "manipal",
      "kaup-padubidri",
      "kollur",
      "kundapura-maravanthe",
      "mangaluru",
      "gokarna",
      "murudeshwar",
      "karwar",
      "honnavar"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Coastal Tour Option #2 (4 Days / 3 Nights)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "coastal-karnataka-3",
    "title": "Coastal Tour Option #3 (4 Days / 3 Nights)",
    "slug": "coastal-karnataka-3",
    "category": "Coastal",
    "duration": "4 Days / 3 Nights",
    "destinationIds": [
      "udupi",
      "malpe-st-marys-island",
      "manipal",
      "kaup-padubidri",
      "kollur",
      "kundapura-maravanthe",
      "mangaluru",
      "gokarna",
      "murudeshwar",
      "karwar",
      "honnavar"
    ],
    "route": "Bengaluru → udupi → malpe-st-marys-island → manipal → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: UDUPI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards udupi",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "udupi sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: MALPE-ST-MARYS-ISLAND Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards malpe-st-marys-island",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "malpe-st-marys-island sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 3,
        "title": "Day 3: MANIPAL Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards manipal",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "manipal sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 4,
        "title": "Day 4: KAUP-PADUBIDRI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards kaup-padubidri",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "kaup-padubidri sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "1,100 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "udupi",
      "malpe-st-marys-island",
      "manipal",
      "kaup-padubidri",
      "kollur",
      "kundapura-maravanthe",
      "mangaluru",
      "gokarna",
      "murudeshwar",
      "karwar",
      "honnavar"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Coastal Tour Option #3 (4 Days / 3 Nights)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "coastal-karnataka-4",
    "title": "Coastal Tour Option #4 (4 Days / 3 Nights)",
    "slug": "coastal-karnataka-4",
    "category": "Coastal",
    "duration": "4 Days / 3 Nights",
    "destinationIds": [
      "udupi",
      "malpe-st-marys-island",
      "manipal",
      "kaup-padubidri",
      "kollur",
      "kundapura-maravanthe",
      "mangaluru",
      "gokarna",
      "murudeshwar",
      "karwar",
      "honnavar"
    ],
    "route": "Bengaluru → udupi → malpe-st-marys-island → manipal → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: UDUPI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards udupi",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "udupi sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: MALPE-ST-MARYS-ISLAND Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards malpe-st-marys-island",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "malpe-st-marys-island sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 3,
        "title": "Day 3: MANIPAL Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards manipal",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "manipal sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 4,
        "title": "Day 4: KAUP-PADUBIDRI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards kaup-padubidri",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "kaup-padubidri sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "1,100 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "udupi",
      "malpe-st-marys-island",
      "manipal",
      "kaup-padubidri",
      "kollur",
      "kundapura-maravanthe",
      "mangaluru",
      "gokarna",
      "murudeshwar",
      "karwar",
      "honnavar"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Coastal Tour Option #4 (4 Days / 3 Nights)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "coastal-karnataka-5",
    "title": "Coastal Tour Option #5 (4 Days / 3 Nights)",
    "slug": "coastal-karnataka-5",
    "category": "Coastal",
    "duration": "4 Days / 3 Nights",
    "destinationIds": [
      "udupi",
      "malpe-st-marys-island",
      "manipal",
      "kaup-padubidri",
      "kollur",
      "kundapura-maravanthe",
      "mangaluru",
      "gokarna",
      "murudeshwar",
      "karwar",
      "honnavar"
    ],
    "route": "Bengaluru → udupi → malpe-st-marys-island → manipal → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: UDUPI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards udupi",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "udupi sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: MALPE-ST-MARYS-ISLAND Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards malpe-st-marys-island",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "malpe-st-marys-island sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 3,
        "title": "Day 3: MANIPAL Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards manipal",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "manipal sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 4,
        "title": "Day 4: KAUP-PADUBIDRI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards kaup-padubidri",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "kaup-padubidri sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "1,100 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "udupi",
      "malpe-st-marys-island",
      "manipal",
      "kaup-padubidri",
      "kollur",
      "kundapura-maravanthe",
      "mangaluru",
      "gokarna",
      "murudeshwar",
      "karwar",
      "honnavar"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Coastal Tour Option #5 (4 Days / 3 Nights)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "coastal-karnataka-6",
    "title": "Coastal Tour Option #6 (4 Days / 3 Nights)",
    "slug": "coastal-karnataka-6",
    "category": "Coastal",
    "duration": "4 Days / 3 Nights",
    "destinationIds": [
      "udupi",
      "malpe-st-marys-island",
      "manipal",
      "kaup-padubidri",
      "kollur",
      "kundapura-maravanthe",
      "mangaluru",
      "gokarna",
      "murudeshwar",
      "karwar",
      "honnavar"
    ],
    "route": "Bengaluru → udupi → malpe-st-marys-island → manipal → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: UDUPI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards udupi",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "udupi sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: MALPE-ST-MARYS-ISLAND Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards malpe-st-marys-island",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "malpe-st-marys-island sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 3,
        "title": "Day 3: MANIPAL Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards manipal",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "manipal sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 4,
        "title": "Day 4: KAUP-PADUBIDRI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards kaup-padubidri",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "kaup-padubidri sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "1,100 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "udupi",
      "malpe-st-marys-island",
      "manipal",
      "kaup-padubidri",
      "kollur",
      "kundapura-maravanthe",
      "mangaluru",
      "gokarna",
      "murudeshwar",
      "karwar",
      "honnavar"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Coastal Tour Option #6 (4 Days / 3 Nights)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "coastal-karnataka-7",
    "title": "Coastal Tour Option #7 (4 Days / 3 Nights)",
    "slug": "coastal-karnataka-7",
    "category": "Coastal",
    "duration": "4 Days / 3 Nights",
    "destinationIds": [
      "udupi",
      "malpe-st-marys-island",
      "manipal",
      "kaup-padubidri",
      "kollur",
      "kundapura-maravanthe",
      "mangaluru",
      "gokarna",
      "murudeshwar",
      "karwar",
      "honnavar"
    ],
    "route": "Bengaluru → udupi → malpe-st-marys-island → manipal → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: UDUPI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards udupi",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "udupi sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: MALPE-ST-MARYS-ISLAND Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards malpe-st-marys-island",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "malpe-st-marys-island sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 3,
        "title": "Day 3: MANIPAL Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards manipal",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "manipal sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 4,
        "title": "Day 4: KAUP-PADUBIDRI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards kaup-padubidri",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "kaup-padubidri sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "1,100 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "udupi",
      "malpe-st-marys-island",
      "manipal",
      "kaup-padubidri",
      "kollur",
      "kundapura-maravanthe",
      "mangaluru",
      "gokarna",
      "murudeshwar",
      "karwar",
      "honnavar"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Coastal Tour Option #7 (4 Days / 3 Nights)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "coastal-karnataka-8",
    "title": "Coastal Tour Option #8 (4 Days / 3 Nights)",
    "slug": "coastal-karnataka-8",
    "category": "Coastal",
    "duration": "4 Days / 3 Nights",
    "destinationIds": [
      "udupi",
      "malpe-st-marys-island",
      "manipal",
      "kaup-padubidri",
      "kollur",
      "kundapura-maravanthe",
      "mangaluru",
      "gokarna",
      "murudeshwar",
      "karwar",
      "honnavar"
    ],
    "route": "Bengaluru → udupi → malpe-st-marys-island → manipal → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: UDUPI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards udupi",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "udupi sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: MALPE-ST-MARYS-ISLAND Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards malpe-st-marys-island",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "malpe-st-marys-island sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 3,
        "title": "Day 3: MANIPAL Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards manipal",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "manipal sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 4,
        "title": "Day 4: KAUP-PADUBIDRI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards kaup-padubidri",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "kaup-padubidri sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "1,100 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "udupi",
      "malpe-st-marys-island",
      "manipal",
      "kaup-padubidri",
      "kollur",
      "kundapura-maravanthe",
      "mangaluru",
      "gokarna",
      "murudeshwar",
      "karwar",
      "honnavar"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Coastal Tour Option #8 (4 Days / 3 Nights)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "coastal-karnataka-9",
    "title": "Coastal Tour Option #9 (4 Days / 3 Nights)",
    "slug": "coastal-karnataka-9",
    "category": "Coastal",
    "duration": "4 Days / 3 Nights",
    "destinationIds": [
      "udupi",
      "malpe-st-marys-island",
      "manipal",
      "kaup-padubidri",
      "kollur",
      "kundapura-maravanthe",
      "mangaluru",
      "gokarna",
      "murudeshwar",
      "karwar",
      "honnavar"
    ],
    "route": "Bengaluru → udupi → malpe-st-marys-island → manipal → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: UDUPI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards udupi",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "udupi sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: MALPE-ST-MARYS-ISLAND Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards malpe-st-marys-island",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "malpe-st-marys-island sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 3,
        "title": "Day 3: MANIPAL Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards manipal",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "manipal sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 4,
        "title": "Day 4: KAUP-PADUBIDRI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards kaup-padubidri",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "kaup-padubidri sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "1,100 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "udupi",
      "malpe-st-marys-island",
      "manipal",
      "kaup-padubidri",
      "kollur",
      "kundapura-maravanthe",
      "mangaluru",
      "gokarna",
      "murudeshwar",
      "karwar",
      "honnavar"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Coastal Tour Option #9 (4 Days / 3 Nights)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "coastal-karnataka-10",
    "title": "Coastal Tour Option #10 (4 Days / 3 Nights)",
    "slug": "coastal-karnataka-10",
    "category": "Coastal",
    "duration": "4 Days / 3 Nights",
    "destinationIds": [
      "udupi",
      "malpe-st-marys-island",
      "manipal",
      "kaup-padubidri",
      "kollur",
      "kundapura-maravanthe",
      "mangaluru",
      "gokarna",
      "murudeshwar",
      "karwar",
      "honnavar"
    ],
    "route": "Bengaluru → udupi → malpe-st-marys-island → manipal → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: UDUPI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards udupi",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "udupi sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: MALPE-ST-MARYS-ISLAND Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards malpe-st-marys-island",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "malpe-st-marys-island sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 3,
        "title": "Day 3: MANIPAL Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards manipal",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "manipal sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 4,
        "title": "Day 4: KAUP-PADUBIDRI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards kaup-padubidri",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "kaup-padubidri sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "1,100 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "udupi",
      "malpe-st-marys-island",
      "manipal",
      "kaup-padubidri",
      "kollur",
      "kundapura-maravanthe",
      "mangaluru",
      "gokarna",
      "murudeshwar",
      "karwar",
      "honnavar"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Coastal Tour Option #10 (4 Days / 3 Nights)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "coastal-karnataka-11",
    "title": "Coastal Tour Option #11 (4 Days / 3 Nights)",
    "slug": "coastal-karnataka-11",
    "category": "Coastal",
    "duration": "4 Days / 3 Nights",
    "destinationIds": [
      "udupi",
      "malpe-st-marys-island",
      "manipal",
      "kaup-padubidri",
      "kollur",
      "kundapura-maravanthe",
      "mangaluru",
      "gokarna",
      "murudeshwar",
      "karwar",
      "honnavar"
    ],
    "route": "Bengaluru → udupi → malpe-st-marys-island → manipal → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: UDUPI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards udupi",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "udupi sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: MALPE-ST-MARYS-ISLAND Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards malpe-st-marys-island",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "malpe-st-marys-island sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 3,
        "title": "Day 3: MANIPAL Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards manipal",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "manipal sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 4,
        "title": "Day 4: KAUP-PADUBIDRI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards kaup-padubidri",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "kaup-padubidri sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "1,100 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "udupi",
      "malpe-st-marys-island",
      "manipal",
      "kaup-padubidri",
      "kollur",
      "kundapura-maravanthe",
      "mangaluru",
      "gokarna",
      "murudeshwar",
      "karwar",
      "honnavar"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Coastal Tour Option #11 (4 Days / 3 Nights)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "coastal-karnataka-12",
    "title": "Coastal Tour Option #12 (4 Days / 3 Nights)",
    "slug": "coastal-karnataka-12",
    "category": "Coastal",
    "duration": "4 Days / 3 Nights",
    "destinationIds": [
      "udupi",
      "malpe-st-marys-island",
      "manipal",
      "kaup-padubidri",
      "kollur",
      "kundapura-maravanthe",
      "mangaluru",
      "gokarna",
      "murudeshwar",
      "karwar",
      "honnavar"
    ],
    "route": "Bengaluru → udupi → malpe-st-marys-island → manipal → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: UDUPI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards udupi",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "udupi sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: MALPE-ST-MARYS-ISLAND Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards malpe-st-marys-island",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "malpe-st-marys-island sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 3,
        "title": "Day 3: MANIPAL Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards manipal",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "manipal sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 4,
        "title": "Day 4: KAUP-PADUBIDRI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards kaup-padubidri",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "kaup-padubidri sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "1,100 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "udupi",
      "malpe-st-marys-island",
      "manipal",
      "kaup-padubidri",
      "kollur",
      "kundapura-maravanthe",
      "mangaluru",
      "gokarna",
      "murudeshwar",
      "karwar",
      "honnavar"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Coastal Tour Option #12 (4 Days / 3 Nights)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "coastal-karnataka-13",
    "title": "Coastal Tour Option #13 (4 Days / 3 Nights)",
    "slug": "coastal-karnataka-13",
    "category": "Coastal",
    "duration": "4 Days / 3 Nights",
    "destinationIds": [
      "udupi",
      "malpe-st-marys-island",
      "manipal",
      "kaup-padubidri",
      "kollur",
      "kundapura-maravanthe",
      "mangaluru",
      "gokarna",
      "murudeshwar",
      "karwar",
      "honnavar"
    ],
    "route": "Bengaluru → udupi → malpe-st-marys-island → manipal → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: UDUPI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards udupi",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "udupi sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: MALPE-ST-MARYS-ISLAND Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards malpe-st-marys-island",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "malpe-st-marys-island sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 3,
        "title": "Day 3: MANIPAL Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards manipal",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "manipal sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 4,
        "title": "Day 4: KAUP-PADUBIDRI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards kaup-padubidri",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "kaup-padubidri sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "1,100 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "udupi",
      "malpe-st-marys-island",
      "manipal",
      "kaup-padubidri",
      "kollur",
      "kundapura-maravanthe",
      "mangaluru",
      "gokarna",
      "murudeshwar",
      "karwar",
      "honnavar"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Coastal Tour Option #13 (4 Days / 3 Nights)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "coastal-karnataka-14",
    "title": "Coastal Tour Option #14 (4 Days / 3 Nights)",
    "slug": "coastal-karnataka-14",
    "category": "Coastal",
    "duration": "4 Days / 3 Nights",
    "destinationIds": [
      "udupi",
      "malpe-st-marys-island",
      "manipal",
      "kaup-padubidri",
      "kollur",
      "kundapura-maravanthe",
      "mangaluru",
      "gokarna",
      "murudeshwar",
      "karwar",
      "honnavar"
    ],
    "route": "Bengaluru → udupi → malpe-st-marys-island → manipal → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: UDUPI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards udupi",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "udupi sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: MALPE-ST-MARYS-ISLAND Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards malpe-st-marys-island",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "malpe-st-marys-island sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 3,
        "title": "Day 3: MANIPAL Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards manipal",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "manipal sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 4,
        "title": "Day 4: KAUP-PADUBIDRI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards kaup-padubidri",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "kaup-padubidri sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "1,100 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "udupi",
      "malpe-st-marys-island",
      "manipal",
      "kaup-padubidri",
      "kollur",
      "kundapura-maravanthe",
      "mangaluru",
      "gokarna",
      "murudeshwar",
      "karwar",
      "honnavar"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Coastal Tour Option #14 (4 Days / 3 Nights)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "coastal-karnataka-15",
    "title": "Coastal Tour Option #15 (4 Days / 3 Nights)",
    "slug": "coastal-karnataka-15",
    "category": "Coastal",
    "duration": "4 Days / 3 Nights",
    "destinationIds": [
      "udupi",
      "malpe-st-marys-island",
      "manipal",
      "kaup-padubidri",
      "kollur",
      "kundapura-maravanthe",
      "mangaluru",
      "gokarna",
      "murudeshwar",
      "karwar",
      "honnavar"
    ],
    "route": "Bengaluru → udupi → malpe-st-marys-island → manipal → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: UDUPI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards udupi",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "udupi sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: MALPE-ST-MARYS-ISLAND Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards malpe-st-marys-island",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "malpe-st-marys-island sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 3,
        "title": "Day 3: MANIPAL Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards manipal",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "manipal sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 4,
        "title": "Day 4: KAUP-PADUBIDRI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards kaup-padubidri",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "kaup-padubidri sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "1,100 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "udupi",
      "malpe-st-marys-island",
      "manipal",
      "kaup-padubidri",
      "kollur",
      "kundapura-maravanthe",
      "mangaluru",
      "gokarna",
      "murudeshwar",
      "karwar",
      "honnavar"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Coastal Tour Option #15 (4 Days / 3 Nights)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "western-ghats-1",
    "title": "Western Ghats Tour Option #1 (3 Days / 2 Nights)",
    "slug": "western-ghats-1",
    "category": "Western Ghats",
    "duration": "3 Days / 2 Nights",
    "destinationIds": [
      "sakleshpur",
      "chikkamagaluru",
      "kudremukh",
      "agumbe",
      "kodachadri",
      "thirthahalli-kavaledurga",
      "sringeri"
    ],
    "route": "Bengaluru → sakleshpur → chikkamagaluru → kudremukh → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: SAKLESHPUR Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards sakleshpur",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "sakleshpur sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: CHIKKAMAGALURU Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards chikkamagaluru",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "chikkamagaluru sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 3,
        "title": "Day 3: KUDREMUKH Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards kudremukh",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "kudremukh sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "750–900 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "sakleshpur",
      "chikkamagaluru",
      "kudremukh",
      "agumbe",
      "kodachadri",
      "thirthahalli-kavaledurga",
      "sringeri"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Western Ghats Tour Option #1 (3 Days / 2 Nights)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "western-ghats-2",
    "title": "Western Ghats Tour Option #2 (3 Days / 2 Nights)",
    "slug": "western-ghats-2",
    "category": "Western Ghats",
    "duration": "3 Days / 2 Nights",
    "destinationIds": [
      "sakleshpur",
      "chikkamagaluru",
      "kudremukh",
      "agumbe",
      "kodachadri",
      "thirthahalli-kavaledurga",
      "sringeri"
    ],
    "route": "Bengaluru → sakleshpur → chikkamagaluru → kudremukh → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: SAKLESHPUR Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards sakleshpur",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "sakleshpur sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: CHIKKAMAGALURU Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards chikkamagaluru",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "chikkamagaluru sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 3,
        "title": "Day 3: KUDREMUKH Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards kudremukh",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "kudremukh sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "750–900 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "sakleshpur",
      "chikkamagaluru",
      "kudremukh",
      "agumbe",
      "kodachadri",
      "thirthahalli-kavaledurga",
      "sringeri"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Western Ghats Tour Option #2 (3 Days / 2 Nights)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "western-ghats-3",
    "title": "Western Ghats Tour Option #3 (3 Days / 2 Nights)",
    "slug": "western-ghats-3",
    "category": "Western Ghats",
    "duration": "3 Days / 2 Nights",
    "destinationIds": [
      "sakleshpur",
      "chikkamagaluru",
      "kudremukh",
      "agumbe",
      "kodachadri",
      "thirthahalli-kavaledurga",
      "sringeri"
    ],
    "route": "Bengaluru → sakleshpur → chikkamagaluru → kudremukh → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: SAKLESHPUR Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards sakleshpur",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "sakleshpur sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: CHIKKAMAGALURU Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards chikkamagaluru",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "chikkamagaluru sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 3,
        "title": "Day 3: KUDREMUKH Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards kudremukh",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "kudremukh sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "750–900 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "sakleshpur",
      "chikkamagaluru",
      "kudremukh",
      "agumbe",
      "kodachadri",
      "thirthahalli-kavaledurga",
      "sringeri"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Western Ghats Tour Option #3 (3 Days / 2 Nights)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "western-ghats-4",
    "title": "Western Ghats Tour Option #4 (3 Days / 2 Nights)",
    "slug": "western-ghats-4",
    "category": "Western Ghats",
    "duration": "3 Days / 2 Nights",
    "destinationIds": [
      "sakleshpur",
      "chikkamagaluru",
      "kudremukh",
      "agumbe",
      "kodachadri",
      "thirthahalli-kavaledurga",
      "sringeri"
    ],
    "route": "Bengaluru → sakleshpur → chikkamagaluru → kudremukh → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: SAKLESHPUR Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards sakleshpur",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "sakleshpur sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: CHIKKAMAGALURU Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards chikkamagaluru",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "chikkamagaluru sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 3,
        "title": "Day 3: KUDREMUKH Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards kudremukh",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "kudremukh sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "750–900 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "sakleshpur",
      "chikkamagaluru",
      "kudremukh",
      "agumbe",
      "kodachadri",
      "thirthahalli-kavaledurga",
      "sringeri"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Western Ghats Tour Option #4 (3 Days / 2 Nights)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "western-ghats-5",
    "title": "Western Ghats Tour Option #5 (3 Days / 2 Nights)",
    "slug": "western-ghats-5",
    "category": "Western Ghats",
    "duration": "3 Days / 2 Nights",
    "destinationIds": [
      "sakleshpur",
      "chikkamagaluru",
      "kudremukh",
      "agumbe",
      "kodachadri",
      "thirthahalli-kavaledurga",
      "sringeri"
    ],
    "route": "Bengaluru → sakleshpur → chikkamagaluru → kudremukh → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: SAKLESHPUR Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards sakleshpur",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "sakleshpur sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: CHIKKAMAGALURU Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards chikkamagaluru",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "chikkamagaluru sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 3,
        "title": "Day 3: KUDREMUKH Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards kudremukh",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "kudremukh sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "750–900 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "sakleshpur",
      "chikkamagaluru",
      "kudremukh",
      "agumbe",
      "kodachadri",
      "thirthahalli-kavaledurga",
      "sringeri"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Western Ghats Tour Option #5 (3 Days / 2 Nights)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "western-ghats-6",
    "title": "Western Ghats Tour Option #6 (3 Days / 2 Nights)",
    "slug": "western-ghats-6",
    "category": "Western Ghats",
    "duration": "3 Days / 2 Nights",
    "destinationIds": [
      "sakleshpur",
      "chikkamagaluru",
      "kudremukh",
      "agumbe",
      "kodachadri",
      "thirthahalli-kavaledurga",
      "sringeri"
    ],
    "route": "Bengaluru → sakleshpur → chikkamagaluru → kudremukh → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: SAKLESHPUR Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards sakleshpur",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "sakleshpur sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: CHIKKAMAGALURU Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards chikkamagaluru",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "chikkamagaluru sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 3,
        "title": "Day 3: KUDREMUKH Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards kudremukh",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "kudremukh sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "750–900 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "sakleshpur",
      "chikkamagaluru",
      "kudremukh",
      "agumbe",
      "kodachadri",
      "thirthahalli-kavaledurga",
      "sringeri"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Western Ghats Tour Option #6 (3 Days / 2 Nights)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "western-ghats-7",
    "title": "Western Ghats Tour Option #7 (3 Days / 2 Nights)",
    "slug": "western-ghats-7",
    "category": "Western Ghats",
    "duration": "3 Days / 2 Nights",
    "destinationIds": [
      "sakleshpur",
      "chikkamagaluru",
      "kudremukh",
      "agumbe",
      "kodachadri",
      "thirthahalli-kavaledurga",
      "sringeri"
    ],
    "route": "Bengaluru → sakleshpur → chikkamagaluru → kudremukh → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: SAKLESHPUR Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards sakleshpur",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "sakleshpur sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: CHIKKAMAGALURU Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards chikkamagaluru",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "chikkamagaluru sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 3,
        "title": "Day 3: KUDREMUKH Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards kudremukh",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "kudremukh sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "750–900 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "sakleshpur",
      "chikkamagaluru",
      "kudremukh",
      "agumbe",
      "kodachadri",
      "thirthahalli-kavaledurga",
      "sringeri"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Western Ghats Tour Option #7 (3 Days / 2 Nights)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "western-ghats-8",
    "title": "Western Ghats Tour Option #8 (3 Days / 2 Nights)",
    "slug": "western-ghats-8",
    "category": "Western Ghats",
    "duration": "3 Days / 2 Nights",
    "destinationIds": [
      "sakleshpur",
      "chikkamagaluru",
      "kudremukh",
      "agumbe",
      "kodachadri",
      "thirthahalli-kavaledurga",
      "sringeri"
    ],
    "route": "Bengaluru → sakleshpur → chikkamagaluru → kudremukh → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: SAKLESHPUR Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards sakleshpur",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "sakleshpur sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: CHIKKAMAGALURU Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards chikkamagaluru",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "chikkamagaluru sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 3,
        "title": "Day 3: KUDREMUKH Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards kudremukh",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "kudremukh sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "750–900 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "sakleshpur",
      "chikkamagaluru",
      "kudremukh",
      "agumbe",
      "kodachadri",
      "thirthahalli-kavaledurga",
      "sringeri"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Western Ghats Tour Option #8 (3 Days / 2 Nights)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "western-ghats-9",
    "title": "Western Ghats Tour Option #9 (3 Days / 2 Nights)",
    "slug": "western-ghats-9",
    "category": "Western Ghats",
    "duration": "3 Days / 2 Nights",
    "destinationIds": [
      "sakleshpur",
      "chikkamagaluru",
      "kudremukh",
      "agumbe",
      "kodachadri",
      "thirthahalli-kavaledurga",
      "sringeri"
    ],
    "route": "Bengaluru → sakleshpur → chikkamagaluru → kudremukh → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: SAKLESHPUR Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards sakleshpur",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "sakleshpur sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: CHIKKAMAGALURU Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards chikkamagaluru",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "chikkamagaluru sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 3,
        "title": "Day 3: KUDREMUKH Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards kudremukh",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "kudremukh sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "750–900 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "sakleshpur",
      "chikkamagaluru",
      "kudremukh",
      "agumbe",
      "kodachadri",
      "thirthahalli-kavaledurga",
      "sringeri"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Western Ghats Tour Option #9 (3 Days / 2 Nights)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "western-ghats-10",
    "title": "Western Ghats Tour Option #10 (3 Days / 2 Nights)",
    "slug": "western-ghats-10",
    "category": "Western Ghats",
    "duration": "3 Days / 2 Nights",
    "destinationIds": [
      "sakleshpur",
      "chikkamagaluru",
      "kudremukh",
      "agumbe",
      "kodachadri",
      "thirthahalli-kavaledurga",
      "sringeri"
    ],
    "route": "Bengaluru → sakleshpur → chikkamagaluru → kudremukh → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: SAKLESHPUR Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards sakleshpur",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "sakleshpur sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: CHIKKAMAGALURU Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards chikkamagaluru",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "chikkamagaluru sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 3,
        "title": "Day 3: KUDREMUKH Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards kudremukh",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "kudremukh sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "750–900 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "sakleshpur",
      "chikkamagaluru",
      "kudremukh",
      "agumbe",
      "kodachadri",
      "thirthahalli-kavaledurga",
      "sringeri"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Western Ghats Tour Option #10 (3 Days / 2 Nights)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "hampi-badami-empire-1",
    "title": "Hampi/Badami/Pattadakal Tour Option #1 (4 Days / 3 Nights)",
    "slug": "hampi-badami-empire-1",
    "category": "Hampi/Badami/Pattadakal",
    "duration": "4 Days / 3 Nights",
    "destinationIds": [
      "hampi",
      "hosapete",
      "anegundi",
      "badami",
      "pattadakal",
      "aihole",
      "mahakuta-banashankari"
    ],
    "route": "Bengaluru → hampi → hosapete → anegundi → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: HAMPI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards hampi",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "hampi sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: HOSAPETE Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards hosapete",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "hosapete sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 3,
        "title": "Day 3: ANEGUNDI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards anegundi",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "anegundi sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 4,
        "title": "Day 4: BADAMI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards badami",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "badami sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "1,150 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "hampi",
      "hosapete",
      "anegundi",
      "badami",
      "pattadakal",
      "aihole",
      "mahakuta-banashankari"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Hampi/Badami/Pattadakal Tour Option #1 (4 Days / 3 Nights)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "hampi-badami-empire-2",
    "title": "Hampi/Badami/Pattadakal Tour Option #2 (4 Days / 3 Nights)",
    "slug": "hampi-badami-empire-2",
    "category": "Hampi/Badami/Pattadakal",
    "duration": "4 Days / 3 Nights",
    "destinationIds": [
      "hampi",
      "hosapete",
      "anegundi",
      "badami",
      "pattadakal",
      "aihole",
      "mahakuta-banashankari"
    ],
    "route": "Bengaluru → hampi → hosapete → anegundi → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: HAMPI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards hampi",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "hampi sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: HOSAPETE Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards hosapete",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "hosapete sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 3,
        "title": "Day 3: ANEGUNDI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards anegundi",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "anegundi sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 4,
        "title": "Day 4: BADAMI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards badami",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "badami sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "1,150 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "hampi",
      "hosapete",
      "anegundi",
      "badami",
      "pattadakal",
      "aihole",
      "mahakuta-banashankari"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Hampi/Badami/Pattadakal Tour Option #2 (4 Days / 3 Nights)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "hampi-badami-empire-3",
    "title": "Hampi/Badami/Pattadakal Tour Option #3 (4 Days / 3 Nights)",
    "slug": "hampi-badami-empire-3",
    "category": "Hampi/Badami/Pattadakal",
    "duration": "4 Days / 3 Nights",
    "destinationIds": [
      "hampi",
      "hosapete",
      "anegundi",
      "badami",
      "pattadakal",
      "aihole",
      "mahakuta-banashankari"
    ],
    "route": "Bengaluru → hampi → hosapete → anegundi → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: HAMPI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards hampi",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "hampi sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: HOSAPETE Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards hosapete",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "hosapete sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 3,
        "title": "Day 3: ANEGUNDI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards anegundi",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "anegundi sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 4,
        "title": "Day 4: BADAMI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards badami",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "badami sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "1,150 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "hampi",
      "hosapete",
      "anegundi",
      "badami",
      "pattadakal",
      "aihole",
      "mahakuta-banashankari"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Hampi/Badami/Pattadakal Tour Option #3 (4 Days / 3 Nights)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "hampi-badami-empire-4",
    "title": "Hampi/Badami/Pattadakal Tour Option #4 (4 Days / 3 Nights)",
    "slug": "hampi-badami-empire-4",
    "category": "Hampi/Badami/Pattadakal",
    "duration": "4 Days / 3 Nights",
    "destinationIds": [
      "hampi",
      "hosapete",
      "anegundi",
      "badami",
      "pattadakal",
      "aihole",
      "mahakuta-banashankari"
    ],
    "route": "Bengaluru → hampi → hosapete → anegundi → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: HAMPI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards hampi",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "hampi sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: HOSAPETE Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards hosapete",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "hosapete sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 3,
        "title": "Day 3: ANEGUNDI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards anegundi",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "anegundi sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 4,
        "title": "Day 4: BADAMI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards badami",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "badami sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "1,150 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "hampi",
      "hosapete",
      "anegundi",
      "badami",
      "pattadakal",
      "aihole",
      "mahakuta-banashankari"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Hampi/Badami/Pattadakal Tour Option #4 (4 Days / 3 Nights)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "hampi-badami-empire-5",
    "title": "Hampi/Badami/Pattadakal Tour Option #5 (4 Days / 3 Nights)",
    "slug": "hampi-badami-empire-5",
    "category": "Hampi/Badami/Pattadakal",
    "duration": "4 Days / 3 Nights",
    "destinationIds": [
      "hampi",
      "hosapete",
      "anegundi",
      "badami",
      "pattadakal",
      "aihole",
      "mahakuta-banashankari"
    ],
    "route": "Bengaluru → hampi → hosapete → anegundi → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: HAMPI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards hampi",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "hampi sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: HOSAPETE Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards hosapete",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "hosapete sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 3,
        "title": "Day 3: ANEGUNDI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards anegundi",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "anegundi sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 4,
        "title": "Day 4: BADAMI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards badami",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "badami sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "1,150 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "hampi",
      "hosapete",
      "anegundi",
      "badami",
      "pattadakal",
      "aihole",
      "mahakuta-banashankari"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Hampi/Badami/Pattadakal Tour Option #5 (4 Days / 3 Nights)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "hampi-badami-empire-6",
    "title": "Hampi/Badami/Pattadakal Tour Option #6 (4 Days / 3 Nights)",
    "slug": "hampi-badami-empire-6",
    "category": "Hampi/Badami/Pattadakal",
    "duration": "4 Days / 3 Nights",
    "destinationIds": [
      "hampi",
      "hosapete",
      "anegundi",
      "badami",
      "pattadakal",
      "aihole",
      "mahakuta-banashankari"
    ],
    "route": "Bengaluru → hampi → hosapete → anegundi → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: HAMPI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards hampi",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "hampi sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: HOSAPETE Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards hosapete",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "hosapete sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 3,
        "title": "Day 3: ANEGUNDI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards anegundi",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "anegundi sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 4,
        "title": "Day 4: BADAMI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards badami",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "badami sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "1,150 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "hampi",
      "hosapete",
      "anegundi",
      "badami",
      "pattadakal",
      "aihole",
      "mahakuta-banashankari"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Hampi/Badami/Pattadakal Tour Option #6 (4 Days / 3 Nights)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "hampi-badami-empire-7",
    "title": "Hampi/Badami/Pattadakal Tour Option #7 (4 Days / 3 Nights)",
    "slug": "hampi-badami-empire-7",
    "category": "Hampi/Badami/Pattadakal",
    "duration": "4 Days / 3 Nights",
    "destinationIds": [
      "hampi",
      "hosapete",
      "anegundi",
      "badami",
      "pattadakal",
      "aihole",
      "mahakuta-banashankari"
    ],
    "route": "Bengaluru → hampi → hosapete → anegundi → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: HAMPI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards hampi",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "hampi sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: HOSAPETE Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards hosapete",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "hosapete sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 3,
        "title": "Day 3: ANEGUNDI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards anegundi",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "anegundi sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 4,
        "title": "Day 4: BADAMI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards badami",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "badami sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "1,150 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "hampi",
      "hosapete",
      "anegundi",
      "badami",
      "pattadakal",
      "aihole",
      "mahakuta-banashankari"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Hampi/Badami/Pattadakal Tour Option #7 (4 Days / 3 Nights)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "hampi-badami-empire-8",
    "title": "Hampi/Badami/Pattadakal Tour Option #8 (4 Days / 3 Nights)",
    "slug": "hampi-badami-empire-8",
    "category": "Hampi/Badami/Pattadakal",
    "duration": "4 Days / 3 Nights",
    "destinationIds": [
      "hampi",
      "hosapete",
      "anegundi",
      "badami",
      "pattadakal",
      "aihole",
      "mahakuta-banashankari"
    ],
    "route": "Bengaluru → hampi → hosapete → anegundi → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: HAMPI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards hampi",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "hampi sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: HOSAPETE Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards hosapete",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "hosapete sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 3,
        "title": "Day 3: ANEGUNDI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards anegundi",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "anegundi sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 4,
        "title": "Day 4: BADAMI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards badami",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "badami sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "1,150 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "hampi",
      "hosapete",
      "anegundi",
      "badami",
      "pattadakal",
      "aihole",
      "mahakuta-banashankari"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Hampi/Badami/Pattadakal Tour Option #8 (4 Days / 3 Nights)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "hampi-badami-empire-9",
    "title": "Hampi/Badami/Pattadakal Tour Option #9 (4 Days / 3 Nights)",
    "slug": "hampi-badami-empire-9",
    "category": "Hampi/Badami/Pattadakal",
    "duration": "4 Days / 3 Nights",
    "destinationIds": [
      "hampi",
      "hosapete",
      "anegundi",
      "badami",
      "pattadakal",
      "aihole",
      "mahakuta-banashankari"
    ],
    "route": "Bengaluru → hampi → hosapete → anegundi → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: HAMPI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards hampi",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "hampi sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: HOSAPETE Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards hosapete",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "hosapete sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 3,
        "title": "Day 3: ANEGUNDI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards anegundi",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "anegundi sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 4,
        "title": "Day 4: BADAMI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards badami",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "badami sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "1,150 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "hampi",
      "hosapete",
      "anegundi",
      "badami",
      "pattadakal",
      "aihole",
      "mahakuta-banashankari"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Hampi/Badami/Pattadakal Tour Option #9 (4 Days / 3 Nights)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "hampi-badami-empire-10",
    "title": "Hampi/Badami/Pattadakal Tour Option #10 (4 Days / 3 Nights)",
    "slug": "hampi-badami-empire-10",
    "category": "Hampi/Badami/Pattadakal",
    "duration": "4 Days / 3 Nights",
    "destinationIds": [
      "hampi",
      "hosapete",
      "anegundi",
      "badami",
      "pattadakal",
      "aihole",
      "mahakuta-banashankari"
    ],
    "route": "Bengaluru → hampi → hosapete → anegundi → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: HAMPI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards hampi",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "hampi sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: HOSAPETE Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards hosapete",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "hosapete sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 3,
        "title": "Day 3: ANEGUNDI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards anegundi",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "anegundi sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 4,
        "title": "Day 4: BADAMI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards badami",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "badami sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "1,150 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "hampi",
      "hosapete",
      "anegundi",
      "badami",
      "pattadakal",
      "aihole",
      "mahakuta-banashankari"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Hampi/Badami/Pattadakal Tour Option #10 (4 Days / 3 Nights)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "grand-karnataka-1",
    "title": "Grand 5–7 day Karnataka Tour Option #1 (7 Days / 6 Nights)",
    "slug": "grand-karnataka-1",
    "category": "Grand 5–7 day Karnataka",
    "duration": "7 Days / 6 Nights",
    "destinationIds": [
      "mysuru",
      "madikeri",
      "chikkamagaluru",
      "belur",
      "hampi",
      "badami",
      "udupi"
    ],
    "route": "Bengaluru → mysuru → madikeri → chikkamagaluru → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: MYSURU Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards mysuru",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "mysuru sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: MADIKERI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards madikeri",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "madikeri sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 3,
        "title": "Day 3: CHIKKAMAGALURU Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards chikkamagaluru",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "chikkamagaluru sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 4,
        "title": "Day 4: BELUR Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards belur",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "belur sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 5,
        "title": "Day 5: HAMPI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards hampi",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "hampi sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 6,
        "title": "Day 6: BADAMI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards badami",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "badami sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 7,
        "title": "Day 7: UDUPI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards udupi",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "udupi sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "1,850 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "mysuru",
      "madikeri",
      "chikkamagaluru",
      "belur",
      "hampi",
      "badami",
      "udupi"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Grand 5–7 day Karnataka Tour Option #1 (7 Days / 6 Nights)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "grand-karnataka-2",
    "title": "Grand 5–7 day Karnataka Tour Option #2 (7 Days / 6 Nights)",
    "slug": "grand-karnataka-2",
    "category": "Grand 5–7 day Karnataka",
    "duration": "7 Days / 6 Nights",
    "destinationIds": [
      "mysuru",
      "madikeri",
      "chikkamagaluru",
      "belur",
      "hampi",
      "badami",
      "udupi"
    ],
    "route": "Bengaluru → mysuru → madikeri → chikkamagaluru → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: MYSURU Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards mysuru",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "mysuru sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: MADIKERI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards madikeri",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "madikeri sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 3,
        "title": "Day 3: CHIKKAMAGALURU Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards chikkamagaluru",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "chikkamagaluru sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 4,
        "title": "Day 4: BELUR Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards belur",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "belur sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 5,
        "title": "Day 5: HAMPI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards hampi",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "hampi sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 6,
        "title": "Day 6: BADAMI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards badami",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "badami sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 7,
        "title": "Day 7: UDUPI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards udupi",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "udupi sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "1,850 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "mysuru",
      "madikeri",
      "chikkamagaluru",
      "belur",
      "hampi",
      "badami",
      "udupi"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Grand 5–7 day Karnataka Tour Option #2 (7 Days / 6 Nights)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "grand-karnataka-3",
    "title": "Grand 5–7 day Karnataka Tour Option #3 (7 Days / 6 Nights)",
    "slug": "grand-karnataka-3",
    "category": "Grand 5–7 day Karnataka",
    "duration": "7 Days / 6 Nights",
    "destinationIds": [
      "mysuru",
      "madikeri",
      "chikkamagaluru",
      "belur",
      "hampi",
      "badami",
      "udupi"
    ],
    "route": "Bengaluru → mysuru → madikeri → chikkamagaluru → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: MYSURU Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards mysuru",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "mysuru sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: MADIKERI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards madikeri",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "madikeri sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 3,
        "title": "Day 3: CHIKKAMAGALURU Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards chikkamagaluru",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "chikkamagaluru sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 4,
        "title": "Day 4: BELUR Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards belur",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "belur sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 5,
        "title": "Day 5: HAMPI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards hampi",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "hampi sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 6,
        "title": "Day 6: BADAMI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards badami",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "badami sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 7,
        "title": "Day 7: UDUPI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards udupi",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "udupi sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "1,850 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "mysuru",
      "madikeri",
      "chikkamagaluru",
      "belur",
      "hampi",
      "badami",
      "udupi"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Grand 5–7 day Karnataka Tour Option #3 (7 Days / 6 Nights)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "grand-karnataka-4",
    "title": "Grand 5–7 day Karnataka Tour Option #4 (7 Days / 6 Nights)",
    "slug": "grand-karnataka-4",
    "category": "Grand 5–7 day Karnataka",
    "duration": "7 Days / 6 Nights",
    "destinationIds": [
      "mysuru",
      "madikeri",
      "chikkamagaluru",
      "belur",
      "hampi",
      "badami",
      "udupi"
    ],
    "route": "Bengaluru → mysuru → madikeri → chikkamagaluru → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: MYSURU Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards mysuru",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "mysuru sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: MADIKERI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards madikeri",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "madikeri sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 3,
        "title": "Day 3: CHIKKAMAGALURU Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards chikkamagaluru",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "chikkamagaluru sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 4,
        "title": "Day 4: BELUR Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards belur",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "belur sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 5,
        "title": "Day 5: HAMPI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards hampi",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "hampi sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 6,
        "title": "Day 6: BADAMI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards badami",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "badami sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 7,
        "title": "Day 7: UDUPI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards udupi",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "udupi sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "1,850 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "mysuru",
      "madikeri",
      "chikkamagaluru",
      "belur",
      "hampi",
      "badami",
      "udupi"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Grand 5–7 day Karnataka Tour Option #4 (7 Days / 6 Nights)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "grand-karnataka-5",
    "title": "Grand 5–7 day Karnataka Tour Option #5 (7 Days / 6 Nights)",
    "slug": "grand-karnataka-5",
    "category": "Grand 5–7 day Karnataka",
    "duration": "7 Days / 6 Nights",
    "destinationIds": [
      "mysuru",
      "madikeri",
      "chikkamagaluru",
      "belur",
      "hampi",
      "badami",
      "udupi"
    ],
    "route": "Bengaluru → mysuru → madikeri → chikkamagaluru → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: MYSURU Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards mysuru",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "mysuru sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: MADIKERI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards madikeri",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "madikeri sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 3,
        "title": "Day 3: CHIKKAMAGALURU Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards chikkamagaluru",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "chikkamagaluru sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 4,
        "title": "Day 4: BELUR Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards belur",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "belur sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 5,
        "title": "Day 5: HAMPI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards hampi",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "hampi sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 6,
        "title": "Day 6: BADAMI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards badami",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "badami sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 7,
        "title": "Day 7: UDUPI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards udupi",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "udupi sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "1,850 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "mysuru",
      "madikeri",
      "chikkamagaluru",
      "belur",
      "hampi",
      "badami",
      "udupi"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Grand 5–7 day Karnataka Tour Option #5 (7 Days / 6 Nights)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "wildlife-safari-1",
    "title": "Wildlife Tour Option #1 (3 Days / 2 Nights)",
    "slug": "wildlife-safari-1",
    "category": "Wildlife",
    "duration": "3 Days / 2 Nights",
    "destinationIds": [
      "bandipur",
      "nagarhole",
      "kabini",
      "br-hills",
      "bhadra-wildlife-sanctuary",
      "dandeli"
    ],
    "route": "Bengaluru → bandipur → nagarhole → kabini → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: BANDIPUR Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards bandipur",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "bandipur sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: NAGARHOLE Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards nagarhole",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "nagarhole sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 3,
        "title": "Day 3: KABINI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards kabini",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "kabini sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "580 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "bandipur",
      "nagarhole",
      "kabini",
      "br-hills",
      "bhadra-wildlife-sanctuary",
      "dandeli"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Wildlife Tour Option #1 (3 Days / 2 Nights)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "wildlife-safari-2",
    "title": "Wildlife Tour Option #2 (3 Days / 2 Nights)",
    "slug": "wildlife-safari-2",
    "category": "Wildlife",
    "duration": "3 Days / 2 Nights",
    "destinationIds": [
      "bandipur",
      "nagarhole",
      "kabini",
      "br-hills",
      "bhadra-wildlife-sanctuary",
      "dandeli"
    ],
    "route": "Bengaluru → bandipur → nagarhole → kabini → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: BANDIPUR Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards bandipur",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "bandipur sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: NAGARHOLE Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards nagarhole",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "nagarhole sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 3,
        "title": "Day 3: KABINI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards kabini",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "kabini sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "580 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "bandipur",
      "nagarhole",
      "kabini",
      "br-hills",
      "bhadra-wildlife-sanctuary",
      "dandeli"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Wildlife Tour Option #2 (3 Days / 2 Nights)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "wildlife-safari-3",
    "title": "Wildlife Tour Option #3 (3 Days / 2 Nights)",
    "slug": "wildlife-safari-3",
    "category": "Wildlife",
    "duration": "3 Days / 2 Nights",
    "destinationIds": [
      "bandipur",
      "nagarhole",
      "kabini",
      "br-hills",
      "bhadra-wildlife-sanctuary",
      "dandeli"
    ],
    "route": "Bengaluru → bandipur → nagarhole → kabini → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: BANDIPUR Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards bandipur",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "bandipur sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: NAGARHOLE Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards nagarhole",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "nagarhole sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 3,
        "title": "Day 3: KABINI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards kabini",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "kabini sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "580 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "bandipur",
      "nagarhole",
      "kabini",
      "br-hills",
      "bhadra-wildlife-sanctuary",
      "dandeli"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Wildlife Tour Option #3 (3 Days / 2 Nights)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "wildlife-safari-4",
    "title": "Wildlife Tour Option #4 (3 Days / 2 Nights)",
    "slug": "wildlife-safari-4",
    "category": "Wildlife",
    "duration": "3 Days / 2 Nights",
    "destinationIds": [
      "bandipur",
      "nagarhole",
      "kabini",
      "br-hills",
      "bhadra-wildlife-sanctuary",
      "dandeli"
    ],
    "route": "Bengaluru → bandipur → nagarhole → kabini → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: BANDIPUR Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards bandipur",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "bandipur sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: NAGARHOLE Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards nagarhole",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "nagarhole sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 3,
        "title": "Day 3: KABINI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards kabini",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "kabini sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "580 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "bandipur",
      "nagarhole",
      "kabini",
      "br-hills",
      "bhadra-wildlife-sanctuary",
      "dandeli"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Wildlife Tour Option #4 (3 Days / 2 Nights)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "wildlife-safari-5",
    "title": "Wildlife Tour Option #5 (3 Days / 2 Nights)",
    "slug": "wildlife-safari-5",
    "category": "Wildlife",
    "duration": "3 Days / 2 Nights",
    "destinationIds": [
      "bandipur",
      "nagarhole",
      "kabini",
      "br-hills",
      "bhadra-wildlife-sanctuary",
      "dandeli"
    ],
    "route": "Bengaluru → bandipur → nagarhole → kabini → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: BANDIPUR Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards bandipur",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "bandipur sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: NAGARHOLE Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards nagarhole",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "nagarhole sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 3,
        "title": "Day 3: KABINI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards kabini",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "kabini sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "580 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "bandipur",
      "nagarhole",
      "kabini",
      "br-hills",
      "bhadra-wildlife-sanctuary",
      "dandeli"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Wildlife Tour Option #5 (3 Days / 2 Nights)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "sacred-pilgrimage-1",
    "title": "Pilgrimage Tour Option #1 (3 Days / 2 Nights)",
    "slug": "sacred-pilgrimage-1",
    "category": "Pilgrimage",
    "duration": "3 Days / 2 Nights",
    "destinationIds": [
      "udupi",
      "dharmasthala-venur",
      "kukke-subramanya",
      "kollur",
      "sringeri",
      "horanadu",
      "nanjangud",
      "melkote",
      "male-mahadeshwara-hills"
    ],
    "route": "Bengaluru → udupi → dharmasthala-venur → kukke-subramanya → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: UDUPI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards udupi",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "udupi sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: DHARMASTHALA-VENUR Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards dharmasthala-venur",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "dharmasthala-venur sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 3,
        "title": "Day 3: KUKKE-SUBRAMANYA Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards kukke-subramanya",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "kukke-subramanya sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "700–1000 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "udupi",
      "dharmasthala-venur",
      "kukke-subramanya",
      "kollur",
      "sringeri",
      "horanadu",
      "nanjangud",
      "melkote",
      "male-mahadeshwara-hills"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Pilgrimage Tour Option #1 (3 Days / 2 Nights)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "sacred-pilgrimage-2",
    "title": "Pilgrimage Tour Option #2 (3 Days / 2 Nights)",
    "slug": "sacred-pilgrimage-2",
    "category": "Pilgrimage",
    "duration": "3 Days / 2 Nights",
    "destinationIds": [
      "udupi",
      "dharmasthala-venur",
      "kukke-subramanya",
      "kollur",
      "sringeri",
      "horanadu",
      "nanjangud",
      "melkote",
      "male-mahadeshwara-hills"
    ],
    "route": "Bengaluru → udupi → dharmasthala-venur → kukke-subramanya → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: UDUPI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards udupi",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "udupi sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: DHARMASTHALA-VENUR Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards dharmasthala-venur",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "dharmasthala-venur sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 3,
        "title": "Day 3: KUKKE-SUBRAMANYA Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards kukke-subramanya",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "kukke-subramanya sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "700–1000 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "udupi",
      "dharmasthala-venur",
      "kukke-subramanya",
      "kollur",
      "sringeri",
      "horanadu",
      "nanjangud",
      "melkote",
      "male-mahadeshwara-hills"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Pilgrimage Tour Option #2 (3 Days / 2 Nights)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "sacred-pilgrimage-3",
    "title": "Pilgrimage Tour Option #3 (3 Days / 2 Nights)",
    "slug": "sacred-pilgrimage-3",
    "category": "Pilgrimage",
    "duration": "3 Days / 2 Nights",
    "destinationIds": [
      "udupi",
      "dharmasthala-venur",
      "kukke-subramanya",
      "kollur",
      "sringeri",
      "horanadu",
      "nanjangud",
      "melkote",
      "male-mahadeshwara-hills"
    ],
    "route": "Bengaluru → udupi → dharmasthala-venur → kukke-subramanya → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: UDUPI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards udupi",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "udupi sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: DHARMASTHALA-VENUR Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards dharmasthala-venur",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "dharmasthala-venur sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 3,
        "title": "Day 3: KUKKE-SUBRAMANYA Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards kukke-subramanya",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "kukke-subramanya sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "700–1000 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "udupi",
      "dharmasthala-venur",
      "kukke-subramanya",
      "kollur",
      "sringeri",
      "horanadu",
      "nanjangud",
      "melkote",
      "male-mahadeshwara-hills"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Pilgrimage Tour Option #3 (3 Days / 2 Nights)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "sacred-pilgrimage-4",
    "title": "Pilgrimage Tour Option #4 (3 Days / 2 Nights)",
    "slug": "sacred-pilgrimage-4",
    "category": "Pilgrimage",
    "duration": "3 Days / 2 Nights",
    "destinationIds": [
      "udupi",
      "dharmasthala-venur",
      "kukke-subramanya",
      "kollur",
      "sringeri",
      "horanadu",
      "nanjangud",
      "melkote",
      "male-mahadeshwara-hills"
    ],
    "route": "Bengaluru → udupi → dharmasthala-venur → kukke-subramanya → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: UDUPI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards udupi",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "udupi sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: DHARMASTHALA-VENUR Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards dharmasthala-venur",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "dharmasthala-venur sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 3,
        "title": "Day 3: KUKKE-SUBRAMANYA Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards kukke-subramanya",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "kukke-subramanya sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "700–1000 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "udupi",
      "dharmasthala-venur",
      "kukke-subramanya",
      "kollur",
      "sringeri",
      "horanadu",
      "nanjangud",
      "melkote",
      "male-mahadeshwara-hills"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Pilgrimage Tour Option #4 (3 Days / 2 Nights)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "sacred-pilgrimage-5",
    "title": "Pilgrimage Tour Option #5 (3 Days / 2 Nights)",
    "slug": "sacred-pilgrimage-5",
    "category": "Pilgrimage",
    "duration": "3 Days / 2 Nights",
    "destinationIds": [
      "udupi",
      "dharmasthala-venur",
      "kukke-subramanya",
      "kollur",
      "sringeri",
      "horanadu",
      "nanjangud",
      "melkote",
      "male-mahadeshwara-hills"
    ],
    "route": "Bengaluru → udupi → dharmasthala-venur → kukke-subramanya → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: UDUPI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards udupi",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "udupi sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: DHARMASTHALA-VENUR Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards dharmasthala-venur",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "dharmasthala-venur sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 3,
        "title": "Day 3: KUKKE-SUBRAMANYA Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards kukke-subramanya",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "kukke-subramanya sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "700–1000 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "udupi",
      "dharmasthala-venur",
      "kukke-subramanya",
      "kollur",
      "sringeri",
      "horanadu",
      "nanjangud",
      "melkote",
      "male-mahadeshwara-hills"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Pilgrimage Tour Option #5 (3 Days / 2 Nights)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "sacred-pilgrimage-6",
    "title": "Pilgrimage Tour Option #6 (3 Days / 2 Nights)",
    "slug": "sacred-pilgrimage-6",
    "category": "Pilgrimage",
    "duration": "3 Days / 2 Nights",
    "destinationIds": [
      "udupi",
      "dharmasthala-venur",
      "kukke-subramanya",
      "kollur",
      "sringeri",
      "horanadu",
      "nanjangud",
      "melkote",
      "male-mahadeshwara-hills"
    ],
    "route": "Bengaluru → udupi → dharmasthala-venur → kukke-subramanya → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: UDUPI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards udupi",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "udupi sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: DHARMASTHALA-VENUR Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards dharmasthala-venur",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "dharmasthala-venur sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 3,
        "title": "Day 3: KUKKE-SUBRAMANYA Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards kukke-subramanya",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "kukke-subramanya sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "700–1000 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "udupi",
      "dharmasthala-venur",
      "kukke-subramanya",
      "kollur",
      "sringeri",
      "horanadu",
      "nanjangud",
      "melkote",
      "male-mahadeshwara-hills"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Pilgrimage Tour Option #6 (3 Days / 2 Nights)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "sacred-pilgrimage-7",
    "title": "Pilgrimage Tour Option #7 (3 Days / 2 Nights)",
    "slug": "sacred-pilgrimage-7",
    "category": "Pilgrimage",
    "duration": "3 Days / 2 Nights",
    "destinationIds": [
      "udupi",
      "dharmasthala-venur",
      "kukke-subramanya",
      "kollur",
      "sringeri",
      "horanadu",
      "nanjangud",
      "melkote",
      "male-mahadeshwara-hills"
    ],
    "route": "Bengaluru → udupi → dharmasthala-venur → kukke-subramanya → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: UDUPI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards udupi",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "udupi sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: DHARMASTHALA-VENUR Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards dharmasthala-venur",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "dharmasthala-venur sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 3,
        "title": "Day 3: KUKKE-SUBRAMANYA Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards kukke-subramanya",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "kukke-subramanya sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "700–1000 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "udupi",
      "dharmasthala-venur",
      "kukke-subramanya",
      "kollur",
      "sringeri",
      "horanadu",
      "nanjangud",
      "melkote",
      "male-mahadeshwara-hills"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Pilgrimage Tour Option #7 (3 Days / 2 Nights)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "sacred-pilgrimage-8",
    "title": "Pilgrimage Tour Option #8 (3 Days / 2 Nights)",
    "slug": "sacred-pilgrimage-8",
    "category": "Pilgrimage",
    "duration": "3 Days / 2 Nights",
    "destinationIds": [
      "udupi",
      "dharmasthala-venur",
      "kukke-subramanya",
      "kollur",
      "sringeri",
      "horanadu",
      "nanjangud",
      "melkote",
      "male-mahadeshwara-hills"
    ],
    "route": "Bengaluru → udupi → dharmasthala-venur → kukke-subramanya → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: UDUPI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards udupi",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "udupi sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: DHARMASTHALA-VENUR Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards dharmasthala-venur",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "dharmasthala-venur sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 3,
        "title": "Day 3: KUKKE-SUBRAMANYA Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards kukke-subramanya",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "kukke-subramanya sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "700–1000 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "udupi",
      "dharmasthala-venur",
      "kukke-subramanya",
      "kollur",
      "sringeri",
      "horanadu",
      "nanjangud",
      "melkote",
      "male-mahadeshwara-hills"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Pilgrimage Tour Option #8 (3 Days / 2 Nights)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "sacred-pilgrimage-9",
    "title": "Pilgrimage Tour Option #9 (3 Days / 2 Nights)",
    "slug": "sacred-pilgrimage-9",
    "category": "Pilgrimage",
    "duration": "3 Days / 2 Nights",
    "destinationIds": [
      "udupi",
      "dharmasthala-venur",
      "kukke-subramanya",
      "kollur",
      "sringeri",
      "horanadu",
      "nanjangud",
      "melkote",
      "male-mahadeshwara-hills"
    ],
    "route": "Bengaluru → udupi → dharmasthala-venur → kukke-subramanya → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: UDUPI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards udupi",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "udupi sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: DHARMASTHALA-VENUR Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards dharmasthala-venur",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "dharmasthala-venur sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 3,
        "title": "Day 3: KUKKE-SUBRAMANYA Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards kukke-subramanya",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "kukke-subramanya sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "700–1000 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "udupi",
      "dharmasthala-venur",
      "kukke-subramanya",
      "kollur",
      "sringeri",
      "horanadu",
      "nanjangud",
      "melkote",
      "male-mahadeshwara-hills"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Pilgrimage Tour Option #9 (3 Days / 2 Nights)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "sacred-pilgrimage-10",
    "title": "Pilgrimage Tour Option #10 (3 Days / 2 Nights)",
    "slug": "sacred-pilgrimage-10",
    "category": "Pilgrimage",
    "duration": "3 Days / 2 Nights",
    "destinationIds": [
      "udupi",
      "dharmasthala-venur",
      "kukke-subramanya",
      "kollur",
      "sringeri",
      "horanadu",
      "nanjangud",
      "melkote",
      "male-mahadeshwara-hills"
    ],
    "route": "Bengaluru → udupi → dharmasthala-venur → kukke-subramanya → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: UDUPI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards udupi",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "udupi sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: DHARMASTHALA-VENUR Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards dharmasthala-venur",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "dharmasthala-venur sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 3,
        "title": "Day 3: KUKKE-SUBRAMANYA Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards kukke-subramanya",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "kukke-subramanya sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "700–1000 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "udupi",
      "dharmasthala-venur",
      "kukke-subramanya",
      "kollur",
      "sringeri",
      "horanadu",
      "nanjangud",
      "melkote",
      "male-mahadeshwara-hills"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Pilgrimage Tour Option #10 (3 Days / 2 Nights)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "family-holiday-1",
    "title": "Family Tour Option #1 (3 Days / 2 Nights)",
    "slug": "family-holiday-1",
    "category": "Family",
    "duration": "3 Days / 2 Nights",
    "destinationIds": [
      "mysuru",
      "madikeri",
      "chikkamagaluru",
      "udupi",
      "krs-brindavan-gardens"
    ],
    "route": "Bengaluru → mysuru → madikeri → chikkamagaluru → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: MYSURU Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards mysuru",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "mysuru sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: MADIKERI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards madikeri",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "madikeri sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 3,
        "title": "Day 3: CHIKKAMAGALURU Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards chikkamagaluru",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "chikkamagaluru sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "600 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "mysuru",
      "madikeri",
      "chikkamagaluru",
      "udupi",
      "krs-brindavan-gardens"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Family Tour Option #1 (3 Days / 2 Nights)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "family-holiday-2",
    "title": "Family Tour Option #2 (3 Days / 2 Nights)",
    "slug": "family-holiday-2",
    "category": "Family",
    "duration": "3 Days / 2 Nights",
    "destinationIds": [
      "mysuru",
      "madikeri",
      "chikkamagaluru",
      "udupi",
      "krs-brindavan-gardens"
    ],
    "route": "Bengaluru → mysuru → madikeri → chikkamagaluru → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: MYSURU Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards mysuru",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "mysuru sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: MADIKERI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards madikeri",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "madikeri sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 3,
        "title": "Day 3: CHIKKAMAGALURU Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards chikkamagaluru",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "chikkamagaluru sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "600 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "mysuru",
      "madikeri",
      "chikkamagaluru",
      "udupi",
      "krs-brindavan-gardens"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Family Tour Option #2 (3 Days / 2 Nights)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "family-holiday-3",
    "title": "Family Tour Option #3 (3 Days / 2 Nights)",
    "slug": "family-holiday-3",
    "category": "Family",
    "duration": "3 Days / 2 Nights",
    "destinationIds": [
      "mysuru",
      "madikeri",
      "chikkamagaluru",
      "udupi",
      "krs-brindavan-gardens"
    ],
    "route": "Bengaluru → mysuru → madikeri → chikkamagaluru → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: MYSURU Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards mysuru",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "mysuru sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: MADIKERI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards madikeri",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "madikeri sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 3,
        "title": "Day 3: CHIKKAMAGALURU Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards chikkamagaluru",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "chikkamagaluru sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "600 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "mysuru",
      "madikeri",
      "chikkamagaluru",
      "udupi",
      "krs-brindavan-gardens"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Family Tour Option #3 (3 Days / 2 Nights)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "family-holiday-4",
    "title": "Family Tour Option #4 (3 Days / 2 Nights)",
    "slug": "family-holiday-4",
    "category": "Family",
    "duration": "3 Days / 2 Nights",
    "destinationIds": [
      "mysuru",
      "madikeri",
      "chikkamagaluru",
      "udupi",
      "krs-brindavan-gardens"
    ],
    "route": "Bengaluru → mysuru → madikeri → chikkamagaluru → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: MYSURU Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards mysuru",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "mysuru sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: MADIKERI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards madikeri",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "madikeri sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 3,
        "title": "Day 3: CHIKKAMAGALURU Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards chikkamagaluru",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "chikkamagaluru sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "600 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "mysuru",
      "madikeri",
      "chikkamagaluru",
      "udupi",
      "krs-brindavan-gardens"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Family Tour Option #4 (3 Days / 2 Nights)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "family-holiday-5",
    "title": "Family Tour Option #5 (3 Days / 2 Nights)",
    "slug": "family-holiday-5",
    "category": "Family",
    "duration": "3 Days / 2 Nights",
    "destinationIds": [
      "mysuru",
      "madikeri",
      "chikkamagaluru",
      "udupi",
      "krs-brindavan-gardens"
    ],
    "route": "Bengaluru → mysuru → madikeri → chikkamagaluru → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: MYSURU Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards mysuru",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "mysuru sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: MADIKERI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards madikeri",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "madikeri sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 3,
        "title": "Day 3: CHIKKAMAGALURU Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards chikkamagaluru",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "chikkamagaluru sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "600 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "mysuru",
      "madikeri",
      "chikkamagaluru",
      "udupi",
      "krs-brindavan-gardens"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Family Tour Option #5 (3 Days / 2 Nights)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "couple-retreat-1",
    "title": "Couple Tour Option #1 (3 Days / 2 Nights)",
    "slug": "couple-retreat-1",
    "category": "Couple",
    "duration": "3 Days / 2 Nights",
    "destinationIds": [
      "madikeri",
      "chikkamagaluru",
      "gokarna",
      "nandi-hills",
      "kabini"
    ],
    "route": "Bengaluru → madikeri → chikkamagaluru → gokarna → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: MADIKERI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards madikeri",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "madikeri sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: CHIKKAMAGALURU Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards chikkamagaluru",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "chikkamagaluru sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 3,
        "title": "Day 3: GOKARNA Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards gokarna",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "gokarna sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "650 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "madikeri",
      "chikkamagaluru",
      "gokarna",
      "nandi-hills",
      "kabini"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Couple Tour Option #1 (3 Days / 2 Nights)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "couple-retreat-2",
    "title": "Couple Tour Option #2 (3 Days / 2 Nights)",
    "slug": "couple-retreat-2",
    "category": "Couple",
    "duration": "3 Days / 2 Nights",
    "destinationIds": [
      "madikeri",
      "chikkamagaluru",
      "gokarna",
      "nandi-hills",
      "kabini"
    ],
    "route": "Bengaluru → madikeri → chikkamagaluru → gokarna → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: MADIKERI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards madikeri",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "madikeri sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: CHIKKAMAGALURU Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards chikkamagaluru",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "chikkamagaluru sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 3,
        "title": "Day 3: GOKARNA Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards gokarna",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "gokarna sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "650 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "madikeri",
      "chikkamagaluru",
      "gokarna",
      "nandi-hills",
      "kabini"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Couple Tour Option #2 (3 Days / 2 Nights)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "couple-retreat-3",
    "title": "Couple Tour Option #3 (3 Days / 2 Nights)",
    "slug": "couple-retreat-3",
    "category": "Couple",
    "duration": "3 Days / 2 Nights",
    "destinationIds": [
      "madikeri",
      "chikkamagaluru",
      "gokarna",
      "nandi-hills",
      "kabini"
    ],
    "route": "Bengaluru → madikeri → chikkamagaluru → gokarna → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: MADIKERI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards madikeri",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "madikeri sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: CHIKKAMAGALURU Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards chikkamagaluru",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "chikkamagaluru sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 3,
        "title": "Day 3: GOKARNA Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards gokarna",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "gokarna sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "650 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "madikeri",
      "chikkamagaluru",
      "gokarna",
      "nandi-hills",
      "kabini"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Couple Tour Option #3 (3 Days / 2 Nights)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "couple-retreat-4",
    "title": "Couple Tour Option #4 (3 Days / 2 Nights)",
    "slug": "couple-retreat-4",
    "category": "Couple",
    "duration": "3 Days / 2 Nights",
    "destinationIds": [
      "madikeri",
      "chikkamagaluru",
      "gokarna",
      "nandi-hills",
      "kabini"
    ],
    "route": "Bengaluru → madikeri → chikkamagaluru → gokarna → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: MADIKERI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards madikeri",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "madikeri sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: CHIKKAMAGALURU Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards chikkamagaluru",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "chikkamagaluru sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 3,
        "title": "Day 3: GOKARNA Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards gokarna",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "gokarna sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "650 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "madikeri",
      "chikkamagaluru",
      "gokarna",
      "nandi-hills",
      "kabini"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Couple Tour Option #4 (3 Days / 2 Nights)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "couple-retreat-5",
    "title": "Couple Tour Option #5 (3 Days / 2 Nights)",
    "slug": "couple-retreat-5",
    "category": "Couple",
    "duration": "3 Days / 2 Nights",
    "destinationIds": [
      "madikeri",
      "chikkamagaluru",
      "gokarna",
      "nandi-hills",
      "kabini"
    ],
    "route": "Bengaluru → madikeri → chikkamagaluru → gokarna → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: MADIKERI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards madikeri",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "madikeri sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: CHIKKAMAGALURU Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards chikkamagaluru",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "chikkamagaluru sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 3,
        "title": "Day 3: GOKARNA Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards gokarna",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "gokarna sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "650 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "madikeri",
      "chikkamagaluru",
      "gokarna",
      "nandi-hills",
      "kabini"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Couple Tour Option #5 (3 Days / 2 Nights)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "adventure-trail-1",
    "title": "Adventure Tour Option #1 (2 Days / 1 Night)",
    "slug": "adventure-trail-1",
    "category": "Adventure",
    "duration": "2 Days / 1 Night",
    "destinationIds": [
      "dandeli",
      "kodachadri",
      "kudremukh",
      "savandurga",
      "ramanagara"
    ],
    "route": "Bengaluru → dandeli → kodachadri → kudremukh → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: DANDELI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards dandeli",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "dandeli sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: KODACHADRI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards kodachadri",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "kodachadri sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "500 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "dandeli",
      "kodachadri",
      "kudremukh",
      "savandurga",
      "ramanagara"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Adventure Tour Option #1 (2 Days / 1 Night)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "adventure-trail-2",
    "title": "Adventure Tour Option #2 (2 Days / 1 Night)",
    "slug": "adventure-trail-2",
    "category": "Adventure",
    "duration": "2 Days / 1 Night",
    "destinationIds": [
      "dandeli",
      "kodachadri",
      "kudremukh",
      "savandurga",
      "ramanagara"
    ],
    "route": "Bengaluru → dandeli → kodachadri → kudremukh → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: DANDELI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards dandeli",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "dandeli sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: KODACHADRI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards kodachadri",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "kodachadri sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "500 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "dandeli",
      "kodachadri",
      "kudremukh",
      "savandurga",
      "ramanagara"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Adventure Tour Option #2 (2 Days / 1 Night)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "adventure-trail-3",
    "title": "Adventure Tour Option #3 (2 Days / 1 Night)",
    "slug": "adventure-trail-3",
    "category": "Adventure",
    "duration": "2 Days / 1 Night",
    "destinationIds": [
      "dandeli",
      "kodachadri",
      "kudremukh",
      "savandurga",
      "ramanagara"
    ],
    "route": "Bengaluru → dandeli → kodachadri → kudremukh → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: DANDELI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards dandeli",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "dandeli sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: KODACHADRI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards kodachadri",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "kodachadri sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "500 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "dandeli",
      "kodachadri",
      "kudremukh",
      "savandurga",
      "ramanagara"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Adventure Tour Option #3 (2 Days / 1 Night)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "adventure-trail-4",
    "title": "Adventure Tour Option #4 (2 Days / 1 Night)",
    "slug": "adventure-trail-4",
    "category": "Adventure",
    "duration": "2 Days / 1 Night",
    "destinationIds": [
      "dandeli",
      "kodachadri",
      "kudremukh",
      "savandurga",
      "ramanagara"
    ],
    "route": "Bengaluru → dandeli → kodachadri → kudremukh → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: DANDELI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards dandeli",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "dandeli sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: KODACHADRI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards kodachadri",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "kodachadri sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "500 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "dandeli",
      "kodachadri",
      "kudremukh",
      "savandurga",
      "ramanagara"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Adventure Tour Option #4 (2 Days / 1 Night)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "adventure-trail-5",
    "title": "Adventure Tour Option #5 (2 Days / 1 Night)",
    "slug": "adventure-trail-5",
    "category": "Adventure",
    "duration": "2 Days / 1 Night",
    "destinationIds": [
      "dandeli",
      "kodachadri",
      "kudremukh",
      "savandurga",
      "ramanagara"
    ],
    "route": "Bengaluru → dandeli → kodachadri → kudremukh → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: DANDELI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards dandeli",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "dandeli sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: KODACHADRI Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards kodachadri",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "kodachadri sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "500 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "dandeli",
      "kodachadri",
      "kudremukh",
      "savandurga",
      "ramanagara"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Adventure Tour Option #5 (2 Days / 1 Night)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "corporate-group-outing-1",
    "title": "Corporate/Group Tour Option #1 (2 Days / 1 Night)",
    "slug": "corporate-group-outing-1",
    "category": "Corporate/Group",
    "duration": "2 Days / 1 Night",
    "destinationIds": [
      "nandi-hills",
      "coorg",
      "chikkamagaluru",
      "dandeli",
      "bheemeshwari"
    ],
    "route": "Bengaluru → nandi-hills → coorg → chikkamagaluru → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: NANDI-HILLS Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards nandi-hills",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "nandi-hills sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: COORG Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards coorg",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "coorg sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "300–600 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "nandi-hills",
      "coorg",
      "chikkamagaluru",
      "dandeli",
      "bheemeshwari"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Corporate/Group Tour Option #1 (2 Days / 1 Night)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "corporate-group-outing-2",
    "title": "Corporate/Group Tour Option #2 (2 Days / 1 Night)",
    "slug": "corporate-group-outing-2",
    "category": "Corporate/Group",
    "duration": "2 Days / 1 Night",
    "destinationIds": [
      "nandi-hills",
      "coorg",
      "chikkamagaluru",
      "dandeli",
      "bheemeshwari"
    ],
    "route": "Bengaluru → nandi-hills → coorg → chikkamagaluru → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: NANDI-HILLS Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards nandi-hills",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "nandi-hills sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: COORG Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards coorg",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "coorg sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "300–600 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "nandi-hills",
      "coorg",
      "chikkamagaluru",
      "dandeli",
      "bheemeshwari"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Corporate/Group Tour Option #2 (2 Days / 1 Night)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "corporate-group-outing-3",
    "title": "Corporate/Group Tour Option #3 (2 Days / 1 Night)",
    "slug": "corporate-group-outing-3",
    "category": "Corporate/Group",
    "duration": "2 Days / 1 Night",
    "destinationIds": [
      "nandi-hills",
      "coorg",
      "chikkamagaluru",
      "dandeli",
      "bheemeshwari"
    ],
    "route": "Bengaluru → nandi-hills → coorg → chikkamagaluru → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: NANDI-HILLS Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards nandi-hills",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "nandi-hills sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: COORG Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards coorg",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "coorg sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "300–600 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "nandi-hills",
      "coorg",
      "chikkamagaluru",
      "dandeli",
      "bheemeshwari"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Corporate/Group Tour Option #3 (2 Days / 1 Night)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "corporate-group-outing-4",
    "title": "Corporate/Group Tour Option #4 (2 Days / 1 Night)",
    "slug": "corporate-group-outing-4",
    "category": "Corporate/Group",
    "duration": "2 Days / 1 Night",
    "destinationIds": [
      "nandi-hills",
      "coorg",
      "chikkamagaluru",
      "dandeli",
      "bheemeshwari"
    ],
    "route": "Bengaluru → nandi-hills → coorg → chikkamagaluru → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: NANDI-HILLS Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards nandi-hills",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "nandi-hills sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: COORG Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards coorg",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "coorg sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "300–600 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "nandi-hills",
      "coorg",
      "chikkamagaluru",
      "dandeli",
      "bheemeshwari"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Corporate/Group Tour Option #4 (2 Days / 1 Night)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  },
  {
    "id": "corporate-group-outing-5",
    "title": "Corporate/Group Tour Option #5 (2 Days / 1 Night)",
    "slug": "corporate-group-outing-5",
    "category": "Corporate/Group",
    "duration": "2 Days / 1 Night",
    "destinationIds": [
      "nandi-hills",
      "coorg",
      "chikkamagaluru",
      "dandeli",
      "bheemeshwari"
    ],
    "route": "Bengaluru → nandi-hills → coorg → chikkamagaluru → Bengaluru",
    "pickupAreas": [
      "Airport (BLR)",
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "Electronic City",
      "All Bengaluru Addresses"
    ],
    "dropAreas": [
      "All Bengaluru Locations"
    ],
    "dayWiseItinerary": [
      {
        "day": 1,
        "title": "Day 1: NANDI-HILLS Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards nandi-hills",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "nandi-hills sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      },
      {
        "day": 2,
        "title": "Day 2: COORG Exploration & Sightseeing",
        "activities": [
          "Morning pickup & departure towards coorg",
          "Explore prime local attractions and scenic viewpoints",
          "Authentic regional lunch break & photography stop",
          "Evening sunset view & relaxation at hotel/resort"
        ],
        "highlights": [
          "coorg sightseeing",
          "Private chauffeur comfort",
          "Scenic highway cruising"
        ]
      }
    ],
    "vehicleIds": [
      "innova-crysta",
      "force-urbania-luxury",
      "7-seater-tt",
      "9-seater-tt",
      "12-14-seater-tt"
    ],
    "inclusions": [
      "Dedicated AC Chauffeur Vehicle",
      "Fuel charges & experienced highway driver",
      "Outstation driver night allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    "exclusions": [
      "Entry tickets, permits & parking fees",
      "Meals, beverages & personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    "approximateDistance": "300–600 km round trip",
    "season": "September to May",
    "notes": "Driver allowance included. Tolls & parking extra at actuals.",
    "relatedDestinations": [
      "nandi-hills",
      "coorg",
      "chikkamagaluru",
      "dandeli",
      "bheemeshwari"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "Is private cab included for the entire tour?",
        "answer": "Yes, dedicated chauffeur vehicle remains with your group throughout the itinerary."
      }
    ],
    "bookingCTA": "Enquire Corporate/Group Tour Option #5 (2 Days / 1 Night)",
    "pricingStatus": "pending",
    "startingFareNote": "Owner-approved fare available on enquiry."
  }
];
