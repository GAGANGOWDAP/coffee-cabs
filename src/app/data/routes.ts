export interface CommercialRoute {
  id: string;
  title: string;
  slug: string;
  from: string;
  to: string;
  approximateDistance: string;
  approximateDriveTime: string;
  routeDescription: string;
  highwayDetails: string;
  pickupAreas: string[];
  dropAreas: string[];
  tripTypes: ("One-Way Cab" | "Round Trip" | "Same Day Sightseeing" | "Multi-Day Outstation")[];
  vehicleIds: string[];
  itineraryChoices: {
    title: string;
    duration: string;
    description: string;
    highlights: string[];
  }[];
  faqs: { question: string; answer: string }[];
  relatedPackages: string[];
  relatedDestinations: string[];
  pricingStatus: "pending" | "approved";
  startingFareNote?: string;
}

export const ROUTES: CommercialRoute[] = [
  {
    id: "bengaluru-to-mysuru",
    title: "Bengaluru to Mysuru Taxi & Outstation Cab Service",
    slug: "bengaluru-to-mysuru",
    from: "Bengaluru",
    to: "Mysuru",
    approximateDistance: "145 km",
    approximateDriveTime: "2.5 – 3 Hours",
    routeDescription:
      "Travel smoothly from Bengaluru to Mysuru via the state-of-the-art 10-lane NH275 Expressway. Ideal for business, family trips, heritage tours, and airport transfers. Enjoy a hassle-free door-to-door journey with Coffee Cabs' professional drivers, sanitised vehicles, and transparent pricing.",
    highwayDetails: "NH275 Bengaluru–Mysuru Access-Controlled 10-Lane Expressway",
    pickupAreas: [
      "Kempegowda International Airport (BLR)",
      "Koramangala & Indiranagar",
      "Whitefield & Marathahalli",
      "Electronic City & Silk Board",
      "Jayanagar & JP Nagar",
      "Hebbal & Yelahanka",
      "All Bengaluru Addresses"
    ],
    dropAreas: [
      "Mysuru City Center & Bus Stand",
      "Chamundi Hills & Foot",
      "KRS Road & Brindavan Gardens",
      "Mysuru Railway Station",
      "All Mysuru Hotels & Residences"
    ],
    tripTypes: ["One-Way Cab", "Round Trip", "Same Day Sightseeing", "Multi-Day Outstation"],
    vehicleIds: ["innova-crysta", "force-urbania-luxury", "7-seater-tt", "9-seater-tt", "12-14-seater-tt"],
    itineraryChoices: [
      {
        title: "Expressway Direct Transfer",
        duration: "2.5 Hours",
        description: "Non-stop smooth transit from Bengaluru doorstep to Mysuru destination via NH275 Expressway.",
        highlights: ["Fastest route", "Zero city traffic delays once on expressway", "Comfortable cruising"]
      },
      {
        title: "Heritage En Route Circuit (Srirangapatna & Wooden Toys)",
        duration: "4.5 Hours",
        description: "Stop at Channapatna wooden toy workshops and Srirangapatna island fort before entering Mysuru city.",
        highlights: ["Channapatna craft village", "Tipu Sultan Summer Palace", "Ranganathaswamy Temple"]
      }
    ],
    faqs: [
      {
        question: "How long does it take from Bengaluru Airport to Mysuru?",
        answer: "Via the Satellite Town Ring Road (STRR) and Mysuru Expressway, transit from BLR Airport to Mysuru takes approximately 3 to 3.5 hours."
      },
      {
        question: "Is one-way taxi booking available for Bengaluru to Mysuru?",
        answer: "Yes! Coffee Cabs offers one-way cab options where you only pay for the distance travelled."
      },
      {
        question: "What are the toll charges on Bengaluru Mysuru Expressway?",
        answer: "Toll gates operate electronically via FASTag on NH275 and are charged as per actual government rates."
      }
    ],
    relatedPackages: ["mysuru-heritage-royal-1day", "grand-karnataka-7day", "bandipur-kabini-wildlife-3day"],
    relatedDestinations: ["mysuru", "chamundi-hills", "srirangapatna", "krs-brindavan-gardens", "somanathapura"],
    pricingStatus: "pending",
    startingFareNote: "Owner-approved fare available on enquiry."
  },
  {
    id: "bengaluru-to-coorg",
    title: "Bengaluru to Coorg (Madikeri) Outstation Cab Service",
    slug: "bengaluru-to-coorg",
    from: "Bengaluru",
    to: "Coorg (Madikeri)",
    approximateDistance: "265 km",
    approximateDriveTime: "5.5 – 6 Hours",
    routeDescription:
      "Embark on a scenic journey from Bengaluru to Coorg (Madikeri / Kushalnagar), India's coffee capital. Pass through lush green plains and ascend into the misty hills of the Western Ghats. Our experienced mountain drivers ensure a safe and relaxing ride in premium Innova Crysta or Force Urbania vehicles.",
    highwayDetails: "NH275 via Mysuru Expressway & Kushalnagar Highway",
    pickupAreas: [
      "Kempegowda International Airport (BLR)",
      "Indiranagar, Koramangala & Whitefield",
      "Electronic City, HSR & Sarjapur",
      "Rajajinagar & Yeshwanthpur",
      "All Bengaluru Locations"
    ],
    dropAreas: [
      "Madikeri Town & Raja's Seat area",
      "Kushalnagar & Dubare resorts",
      "Virajpet & Southern Coorg estates",
      "Bhagamandala & Coffee Homestays"
    ],
    tripTypes: ["One-Way Cab", "Round Trip", "Multi-Day Outstation"],
    vehicleIds: ["innova-crysta", "force-urbania-luxury", "7-seater-tt", "12-14-seater-tt"],
    itineraryChoices: [
      {
        title: "Scenic Highway via Golden Temple",
        duration: "6 Hours",
        description: "En route stop at Bylakuppe Tibetan Golden Temple before ascending Madikeri hills.",
        highlights: ["Bylakuppe Monastery", "Dubare Elephant Camp halt", "Coffee estate views"]
      }
    ],
    faqs: [
      {
        question: "Are your drivers experienced with hill drives in Coorg?",
        answer: "Yes, all our outstation chauffeurs are highly trained in Western Ghats ghat section driving."
      },
      {
        question: "Can we hire the vehicle for local sightseeing in Coorg?",
        answer: "Absoluty! On round-trip outstation bookings, the vehicle and driver remain with your group for all local spots like Abbey Falls, Raja's Seat, and Talakaveri."
      }
    ],
    relatedPackages: ["coorg-misty-hills-3day", "grand-karnataka-7day"],
    relatedDestinations: ["madikeri", "kushalnagar-dubare", "bhagamandala-talakaveri", "virajpet"],
    pricingStatus: "pending",
    startingFareNote: "Owner-approved fare available on enquiry."
  },
  {
    id: "bengaluru-to-chikkamagaluru",
    title: "Bengaluru to Chikkamagaluru Outstation Taxi",
    slug: "bengaluru-to-chikkamagaluru",
    from: "Bengaluru",
    to: "Chikkamagaluru",
    approximateDistance: "245 km",
    approximateDriveTime: "4.5 – 5 Hours",
    routeDescription:
      "Drive from Bengaluru to Chikkamagaluru via smooth 4-lane NH75 Hassan highway. Perfect for weekend getaways, coffee estate homestays, and trekking trips to Mullayanagiri peak.",
    highwayDetails: "NH75 via Nelamangala, Kunigal, Channarayapatna & Hassan",
    pickupAreas: [
      "BLR Airport & Hebbal",
      "Koramangala, Indiranagar & HSR",
      "Whitefield & Marathahalli",
      "Yeshwanthpur & Tumakuru Road",
      "All Bengaluru Addresses"
    ],
    dropAreas: [
      "Chikkamagaluru Town",
      "Mullayanagiri & Baba Budangiri Foothills",
      "Tarikere Road & Resort Belt",
      "All Coffee Homestays & Resorts"
    ],
    tripTypes: ["One-Way Cab", "Round Trip", "Multi-Day Outstation"],
    vehicleIds: ["innova-crysta", "force-urbania-luxury", "7-seater-tt", "12-14-seater-tt"],
    itineraryChoices: [
      {
        title: "Express Hassan Route with Belur Halt",
        duration: "5.5 Hours",
        description: "Halt at the 900-year-old Belur Chennakeshava Temple before reaching Chikkamagaluru.",
        highlights: ["Hassan expressway speed", "Belur stone carving masterpiece", "Coffee estate entry"]
      }
    ],
    faqs: [
      {
        question: "How is the road condition between Bengaluru and Chikkamagaluru?",
        answer: "The NH75 4-lane highway up to Hassan is excellent, followed by a well-paved state highway into Chikkamagaluru."
      }
    ],
    relatedPackages: ["chikkamagaluru-coffee-peaks-3day", "grand-karnataka-7day"],
    relatedDestinations: ["chikkamagaluru", "mullayanagiri-baba-budangiri", "kemmannugundi", "belur"],
    pricingStatus: "pending",
    startingFareNote: "Owner-approved fare available on enquiry."
  },
  {
    id: "bengaluru-to-hampi",
    title: "Bengaluru to Hampi Premium Outstation Cab",
    slug: "bengaluru-to-hampi",
    from: "Bengaluru",
    to: "Hampi",
    approximateDistance: "340 km",
    approximateDriveTime: "5.5 – 6 Hours",
    routeDescription:
      "Travel from Bengaluru to the UNESCO World Heritage realm of Hampi via NH50. Travel comfortably across the Deccan plateau in high-roof luxury Force Urbania or Innova Crysta cabs.",
    highwayDetails: "NH48 & NH50 Expressway via Chitradurga & Hospet",
    pickupAreas: ["All Bengaluru Pickups & BLR Airport"],
    dropAreas: ["Hampi Island / Hippie Island", "Hospet Hotels & Railway Station", "Anegundi Resorts"],
    tripTypes: ["One-Way Cab", "Round Trip", "Multi-Day Outstation"],
    vehicleIds: ["innova-crysta", "force-urbania-luxury", "7-seater-tt", "12-14-seater-tt"],
    itineraryChoices: [
      {
        title: "Direct Expressway via Chitradurga Fort",
        duration: "6.5 Hours",
        description: "En route visit Chitradurga Fort before arriving in Hampi for sunset.",
        highlights: ["NH50 smooth cruising", "Chitradurga Fort exploration"]
      }
    ],
    faqs: [
      {
        question: "Can we visit Badami and Aihole along with Hampi?",
        answer: "Yes, our round-trip packages cover full circuit extensions to Badami, Pattadakal, and Aihole."
      }
    ],
    relatedPackages: ["hampi-badami-heritage-4day", "grand-karnataka-7day"],
    relatedDestinations: ["hampi", "hosapete", "anegundi", "badami", "pattadakal"],
    pricingStatus: "pending",
    startingFareNote: "Owner-approved fare available on enquiry."
  },
  {
    id: "bengaluru-to-udupi",
    title: "Bengaluru to Udupi Outstation Cab",
    slug: "bengaluru-to-udupi",
    from: "Bengaluru",
    to: "Udupi",
    approximateDistance: "400 km",
    approximateDriveTime: "7.5 – 8 Hours",
    routeDescription:
      "Journey from Bengaluru to the temple city of Udupi and Malpe coast via Shiradi Ghat or Charmadi Ghat. Experience serene coastal roads, Sri Krishna Temple, and St. Mary's Island.",
    highwayDetails: "NH75 via Hassan, Sakleshpur & Mangaluru / Udupi Highway",
    pickupAreas: ["All Bengaluru Pickups & BLR Airport"],
    dropAreas: ["Udupi Town & Temple Complex", "Malpe Beach & Resorts", "Kaup & Padubidri"],
    tripTypes: ["One-Way Cab", "Round Trip", "Multi-Day Outstation"],
    vehicleIds: ["innova-crysta", "force-urbania-luxury", "7-seater-tt", "12-14-seater-tt"],
    itineraryChoices: [
      {
        title: "Ghat & Coast Express",
        duration: "8 Hours",
        description: "Scenic Western Ghats mountain crossing into coastal Karnataka.",
        highlights: ["Sakleshpur ghat vistas", "Malpe sea beach sunset"]
      }
    ],
    faqs: [
      {
        question: "Which ghat route is taken for Udupi?",
        answer: "Our drivers select the best active route between Shiradi Ghat (NH75) and Charmadi Ghat based on real-time road conditions."
      }
    ],
    relatedPackages: ["gokarna-murudeshwar-coastal-4day"],
    relatedDestinations: ["udupi", "malpe", "kaup-padubidri", "kollur"],
    pricingStatus: "pending",
    startingFareNote: "Owner-approved fare available on enquiry."
  },
  {
    id: "bengaluru-to-gokarna",
    title: "Bengaluru to Gokarna Beach Taxi Service",
    slug: "bengaluru-to-gokarna",
    from: "Bengaluru",
    to: "Gokarna",
    approximateDistance: "485 km",
    approximateDriveTime: "8.5 – 9 Hours",
    routeDescription:
      "Travel comfortably from Bengaluru to Gokarna's pristine beaches and Mahabaleshwar Temple. Relax in our plush vehicles while our highway experts navigate the route.",
    highwayDetails: "NH48 via Tumakuru, Chitradurga, Ranebennur & Sirsi/Yellapur Highway",
    pickupAreas: ["All Bengaluru Addresses & BLR Airport"],
    dropAreas: ["Gokarna Town", "Kudle Beach", "Om Beach Resorts", "Gokarna Cliff Stays"],
    tripTypes: ["One-Way Cab", "Round Trip", "Multi-Day Outstation"],
    vehicleIds: ["innova-crysta", "force-urbania-luxury", "7-seater-tt", "12-14-seater-tt"],
    itineraryChoices: [
      {
        title: "Express Highway via Sirsi/Yellapur",
        duration: "9 Hours",
        description: "Smooth highway transit connecting into green North Canara forests.",
        highlights: ["NH48 fast cruising", "Om Beach sunset arrival"]
      }
    ],
    faqs: [
      {
        question: "Is overnight travel available for Gokarna?",
        answer: "Yes, we offer early morning and night departures with experienced night drivers."
      }
    ],
    relatedPackages: ["gokarna-murudeshwar-coastal-4day"],
    relatedDestinations: ["gokarna", "murudeshwar", "honnavar", "yana-kumta"],
    pricingStatus: "pending",
    startingFareNote: "Owner-approved fare available on enquiry."
  },
  {
    id: "bengaluru-to-mangaluru",
    title: "Bengaluru to Mangaluru Outstation Cab",
    slug: "bengaluru-to-mangaluru",
    from: "Bengaluru",
    to: "Mangaluru",
    approximateDistance: "350 km",
    approximateDriveTime: "6.5 – 7 Hours",
    routeDescription:
      "Direct taxi booking from Bengaluru to Mangaluru port city. Reliable door-to-door transport for business delegates, family reunions, and coastal tours.",
    highwayDetails: "NH75 via Hassan & Shiradi Ghat",
    pickupAreas: ["All Bengaluru Locations & BLR Airport"],
    dropAreas: ["Mangaluru City Center", "Panambur Beach", "Pilikula", "Mangaluru Airport (IXE)"],
    tripTypes: ["One-Way Cab", "Round Trip", "Multi-Day Outstation"],
    vehicleIds: ["innova-crysta", "force-urbania-luxury", "7-seater-tt", "12-14-seater-tt"],
    itineraryChoices: [
      {
        title: "Direct Shiradi Highway Transit",
        duration: "7 Hours",
        description: "Fastest road link connecting Bengaluru and Mangaluru.",
        highlights: ["Smooth highway", "Coastal seafood dining stop"]
      }
    ],
    faqs: [
      {
        question: "Do you offer airport transfer to Mangaluru?",
        answer: "Yes, we provide inter-city transfers between Bengaluru Airport and Mangaluru city/airport."
      }
    ],
    relatedPackages: ["gokarna-murudeshwar-coastal-4day"],
    relatedDestinations: ["mangaluru", "dharmasthala-venur", "kukke-subramanya", "pilikula-nisargadhama"],
    pricingStatus: "pending",
    startingFareNote: "Owner-approved fare available on enquiry."
  },
  {
    id: "bengaluru-to-ooty",
    title: "Bengaluru to Ooty (Nilgiris) Outstation Cab",
    slug: "bengaluru-to-ooty",
    from: "Bengaluru",
    to: "Ooty",
    approximateDistance: "275 km",
    approximateDriveTime: "6 – 6.5 Hours",
    routeDescription:
      "Travel from Bengaluru to Queen of Hill Stations Ooty via Mysuru, Bandipur National Park, and Mudumalai tiger sanctuary. Ascend the famous 36 hairpin bends of Kallatty Ghat or Gudalur route.",
    highwayDetails: "NH275 Expressway & NH181 Nilgiri Highway",
    pickupAreas: ["All Bengaluru Pickups & BLR Airport"],
    dropAreas: ["Ooty Town & Lake", "Coonoor", "Kotagiri", "All Nilgiri Resorts"],
    tripTypes: ["One-Way Cab", "Round Trip", "Multi-Day Outstation"],
    vehicleIds: ["innova-crysta", "force-urbania-luxury", "7-seater-tt", "12-14-seater-tt"],
    itineraryChoices: [
      {
        title: "Forest & Hairpin Bend Route",
        duration: "6.5 Hours",
        description: "Pass through Bandipur forest and ascend Nilgiri mountain roads.",
        highlights: ["Bandipur jungle drive", "Nilgiri tea garden vistas"]
      }
    ],
    faqs: [
      {
        question: "Is Tamil Nadu state e-pass required for Ooty?",
        answer: "Tamil Nadu e-pass rules update periodically; our support team assists with latest requirements prior to travel."
      }
    ],
    relatedPackages: ["bandipur-kabini-wildlife-3day"],
    relatedDestinations: ["bandipur", "mysuru"],
    pricingStatus: "pending",
    startingFareNote: "Owner-approved fare available on enquiry."
  },
  {
    id: "bengaluru-to-goa",
    title: "Bengaluru to Goa Outstation Luxury Taxi",
    slug: "bengaluru-to-goa",
    from: "Bengaluru",
    to: "Goa",
    approximateDistance: "560 km",
    approximateDriveTime: "9.5 – 10 Hours",
    routeDescription:
      "Experience a comfortable road trip from Bengaluru to Goa in our luxury Force Urbania or Innova Crysta. Pass through Hubballi, Dharwad, and Anmod/Chorla Ghat into North or South Goa.",
    highwayDetails: "NH48 Expressway & Anmod / Chorla Ghat",
    pickupAreas: ["All Bengaluru Locations & BLR Airport"],
    dropAreas: ["North Goa (Calangute, Baga, Anjuna)", "South Goa (Madgaon, Palolem, Colva)", "Goa Dabolim / MOPA Airport"],
    tripTypes: ["One-Way Cab", "Round Trip", "Multi-Day Outstation"],
    vehicleIds: ["innova-crysta", "force-urbania-luxury", "7-seater-tt", "12-14-seater-tt"],
    itineraryChoices: [
      {
        title: "Chorla / Anmod Ghat Express",
        duration: "10 Hours",
        description: "High-speed NH48 cruising followed by scenic forest ghat descent into Goa.",
        highlights: ["NH48 speed section", "Western Ghats jungle views", "Doorstep beach hotel drop"]
      }
    ],
    faqs: [
      {
        question: "Is Goa inter-state permit handled by Coffee Cabs?",
        answer: "Yes, our commercial vehicles hold yellow-plate outstation tourist permits with FASTag for smooth border entry."
      }
    ],
    relatedPackages: ["gokarna-murudeshwar-coastal-4day"],
    relatedDestinations: ["gokarna", "karwar"],
    pricingStatus: "pending",
    startingFareNote: "Owner-approved fare available on enquiry."
  }
];
