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
    id: "nandi-hills-ramanagara-1day",
    title: "Nandi Hills Sunrise & Ramanagara Adventure 1-Day Escape",
    slug: "nandi-hills-ramanagara-1day",
    category: "Bengaluru nearby 1-day",
    duration: "1 Day",
    destinationIds: ["nandi-hills", "ramanagara"],
    route: "Bengaluru → Nandi Hills → Devanahalli → Ramanagara → Bengaluru",
    pickupAreas: ["Airport", "Indiranagar", "Koramangala", "Whitefield", "Electronic City", "All Bengaluru Pickups"],
    dropAreas: ["All Bengaluru Drop Locations"],
    dayWiseItinerary: [
      {
        day: 1,
        title: "Early Morning Sunrise at Nandi Hills & Sholay Hills Adventure",
        activities: [
          "04:00 AM pickup from Bengaluru address",
          "Reach Nandi Hills summit for scenic early morning fog & sunrise viewpoint",
          "Explore Tipu's Drop, Amrita Sarovar, and ancient Bhoga Nandeeshwara Temple at foothill",
          "Breakfast en route featuring South Indian specialties",
          "Drive to Ramanagara (Ramadevara Betta / Sholay shooting spot) for silk town exploration & rock scenery",
          "Return to Bengaluru by early evening"
        ],
        highlights: [
          "Panoramic misty sunrise views",
          "1,000-year-old Chola/Hoysala architecture at Bhoga Nandeeshwara",
          "Iconic Sholay hill lock rock formations"
        ]
      }
    ],
    vehicleIds: ["innova-crysta", "force-urbania-luxury", "7-seater-tt", "9-seater-tt"],
    inclusions: [
      "Private AC Chauffeur Vehicle for full day (up to 250 km)",
      "Fuel charges & experienced highway driver",
      "Driver allowance",
      "Doorstep pickup & drop in Bengaluru"
    ],
    exclusions: [
      "Entry tickets & parking fees at Nandi Hills",
      "Meals, beverages, and personal expenses",
      "Toll charges (as per actual FASTag)"
    ],
    approximateDistance: "220 km round trip",
    season: "September to March (Best sunrise & cool weather)",
    notes: "Nandi Hills entry opens early morning; weekend entry passes may require advance booking on government portal.",
    relatedDestinations: ["nandi-hills", "ramanagara", "devanadurga", "savandurga"],
    relatedRoutes: ["bengaluru-to-mysuru"],
    faqs: [
      {
        question: "What time does the trip start?",
        answer: "Pickup is recommended at 04:00 AM to reach Nandi Hills before sunrise."
      },
      {
        question: "Can we customize the stops along the way?",
        answer: "Yes, private cabs offer complete flexibility to stop at local breakfast spots or nearby attractions."
      }
    ],
    bookingCTA: "Book Nandi Hills 1-Day Cab Escort",
    pricingStatus: "pending",
    startingFareNote: "Owner-approved fare available on enquiry."
  },
  {
    id: "mysuru-heritage-royal-1day",
    title: "Royal Mysuru Heritage & Palace 1-Day Tour",
    slug: "mysuru-heritage-royal-1day",
    category: "Mysuru",
    duration: "1 Day",
    destinationIds: ["mysuru", "chamundi-hills", "srirangapatna", "krs-brindavan-gardens"],
    route: "Bengaluru → Srirangapatna → Chamundi Hills → Mysuru Palace → Brindavan Gardens → Bengaluru",
    pickupAreas: ["Any Bengaluru Home / Hotel / Airport"],
    dropAreas: ["Any Bengaluru Location"],
    dayWiseItinerary: [
      {
        day: 1,
        title: "Island Fortress, Sacred Hills, Mysore Palace & Musical Fountains",
        activities: [
          "06:00 AM pickup via Mysuru Expressway",
          "Visit Tipu Sultan's Summer Palace (Daria Daulat Bagh) and Ranganathaswamy Temple in Srirangapatna",
          "Ascend Chamundi Hills for Sri Chamundeshwari Temple & Nandi Monolith",
          "Authentic Mysuru Thali / Mysore Pak tasting break",
          "Guided walkthrough of illuminated Mysuru Palace & Durbar Hall",
          "Evening musical fountain show at KRS Brindavan Gardens",
          "Expressway return drive to Bengaluru by 10:30 PM"
        ],
        highlights: [
          "Fast smooth transit via Bengaluru-Mysuru Expressway",
          "Iconic Mysore Palace Durbar Hall & Golden Throne history",
          "Evening fountain lights at Brindavan Gardens"
        ]
      }
    ],
    vehicleIds: ["innova-crysta", "force-urbania-luxury", "12-14-seater-tt"],
    inclusions: [
      "Dedicated AC Vehicle with expert driver",
      "Fuel, driver allowance & toll management support",
      "Flexible itinerary pacing"
    ],
    exclusions: [
      "Palace & Garden entry tickets",
      "Camera fees & guide charges",
      "Food and personal shopping"
    ],
    approximateDistance: "340 km round trip",
    season: "Year-round (Dasara festival in Oct/Nov is extra special)",
    notes: "Palace illumination happens on Sundays and public holidays; general lighting operates every evening.",
    relatedDestinations: ["mysuru", "chamundi-hills", "srirangapatna", "somanathapura"],
    relatedRoutes: ["bengaluru-to-mysuru"],
    faqs: [
      {
        question: "Is 1 day enough for Mysuru?",
        answer: "Yes! Thanks to the 10-lane expressway, you can cover major heritage landmarks comfortably in a single day."
      }
    ],
    bookingCTA: "Book Mysuru Heritage Day Cab",
    pricingStatus: "pending",
    startingFareNote: "Owner-approved fare available on enquiry."
  },
  {
    id: "coorg-misty-hills-3day",
    title: "Coorg Misty Hills, Coffee Estates & Wildlife 3-Day Retreat",
    slug: "coorg-misty-hills-3day",
    category: "Coorg",
    duration: "3 Days / 2 Nights",
    destinationIds: ["madikeri", "kushalnagar-dubare", "bhagamandala-talakaveri", "virajpet", "kakkabe-tadiandamol"],
    route: "Bengaluru → Kushalnagar → Madikeri → Talakaveri → Abbey Falls → Virajpet → Bengaluru",
    pickupAreas: ["All Bengaluru Areas & BLR Airport"],
    dropAreas: ["All Bengaluru Drop Locations"],
    dayWiseItinerary: [
      {
        day: 1,
        title: "Golden Temple Namdroling & Dubare Elephant Camp",
        activities: [
          "06:30 AM departure from Bengaluru",
          "Visit Namdroling Monastery (Bylakuppe Tibetan Settlement)",
          "Interactive elephant bath experience at Dubare Elephant Camp along Cauvery river",
          "Check-in at Madikeri resort / homestay",
          "Sunset views at Raja's Seat"
        ],
        highlights: ["Bylakuppe Golden Temple", "Dubare Elephant Camp river rafting"]
      },
      {
        day: 2,
        title: "Origin of Cauvery & Cascade Waterfalls",
        activities: [
          "Scenic drive to Bhagamandala triveni sangam & Talakaveri sacred peak",
          "Panoramic Brahmagiri mountain views",
          "Visit Abbey Falls nestled inside lush coffee plantations",
          "Explore Madikeri Fort & Omkareshwara Temple",
          "Spices & Kodava coffee shopping in Madikeri town"
        ],
        highlights: ["Talakaveri mountain views", "Abbey Falls coffee estate walk"]
      },
      {
        day: 3,
        title: "Nisargadhama Bamboo Forest & Return",
        activities: [
          "Visit Kaveri Nisargadhama bamboo island park",
          "Optional halt at Coffee plantation roasting center",
          "Return drive to Bengaluru reaching by late evening"
        ],
        highlights: ["Kaveri island hanging bridge", "Fresh spice plantation purchasing"]
      }
    ],
    vehicleIds: ["innova-crysta", "force-urbania-luxury", "7-seater-tt", "12-14-seater-tt"],
    inclusions: [
      "Outstation AC vehicle with driver allowance for 3 days / 2 nights",
      "Fuel costs for entire circuit (up to 800 km included)",
      "Inter-district permit clearance"
    ],
    exclusions: [
      "Resort accommodation & food",
      "Activity charges (Elephant bath, rafting, jeep safari)",
      "Tolls & parking receipts"
    ],
    approximateDistance: "650 km total circuit",
    season: "October to May (Monsoons Jul-Aug feature lush waterfalls)",
    notes: "Dubare Elephant Camp morning interaction starts early around 08:30 AM.",
    relatedDestinations: ["madikeri", "kushalnagar-dubare", "bhagamandala-talakaveri", "virajpet"],
    relatedRoutes: ["bengaluru-to-coorg"],
    faqs: [
      {
        question: "Does the cab driver stay with us in Coorg?",
        answer: "Yes, your dedicated vehicle and driver remain with you for all local transfers and sightseeing throughout the trip."
      }
    ],
    bookingCTA: "Enquire Coorg 3-Day Tour Package",
    pricingStatus: "pending",
    startingFareNote: "Owner-approved fare available on enquiry."
  },
  {
    id: "chikkamagaluru-coffee-peaks-3day",
    title: "Chikkamagaluru Coffee Estates & Highest Peaks 3-Day Tour",
    slug: "chikkamagaluru-coffee-peaks-3day",
    category: "Chikkamagaluru",
    duration: "3 Days / 2 Nights",
    destinationIds: ["chikkamagaluru", "mullayanagiri-baba-budangiri", "kemmannugundi", "kudremukh", "bhadra-wildlife-sanctuary"],
    route: "Bengaluru → Hassan → Belur → Chikkamagaluru → Mullayanagiri → Hebbe Falls → Kemmannugundi → Bengaluru",
    pickupAreas: ["All Bengaluru Locations"],
    dropAreas: ["All Bengaluru Locations"],
    dayWiseItinerary: [
      {
        day: 1,
        title: "Hoysala Architecture & Coffee Country Welcome",
        activities: [
          "Depart Bengaluru early morning via NH75",
          "En route stop at Belur Chennakeshava Temple (Hoysala masterpiece)",
          "Arrive in Chikkamagaluru and check in at coffee plantation estate",
          "Evening visit to Hirekolale Lake for tranquil sunset"
        ],
        highlights: ["Belur Stone Sculpture", "Hirekolale Lake sunset reflection"]
      },
      {
        day: 2,
        title: "Conquering Karnataka's Highest Peak Mullayanagiri & Baba Budangiri",
        activities: [
          "Early morning drive to Mullayanagiri peak (highest in Karnataka at 1,930m)",
          "Visit sacred shrine of Baba Budangiri & Manikyadhara Falls",
          "Jeep ride into Jhari / Buttermilk Falls",
          "Walk through aromatic Arabica & Robusta coffee plantations"
        ],
        highlights: ["Mullayanagiri peak summit", "Jhari waterfall jeep trail", "Coffee tasting session"]
      },
      {
        day: 3,
        title: "Kemmannugundi Hill Station & Return",
        activities: [
          "Scenic drive to Kemmannugundi royal retreat & Z Point viewpoint",
          "Visit Hebbe Falls / Kalhatti Falls",
          "Return journey to Bengaluru reaching by 09:30 PM"
        ],
        highlights: ["Z Point mountain ridge", "Kemmannugundi rose gardens"]
      }
    ],
    vehicleIds: ["innova-crysta", "force-urbania-luxury", "7-seater-tt", "12-14-seater-tt"],
    inclusions: [
      "AC vehicle for 3 days / 2 nights outstation tour",
      "Fuel, driver allowance & outstation driver night charges",
      "All driver stay & boarding charges"
    ],
    exclusions: [
      "Jeep hire charges at Jhari/Hebbe falls (local hill rule)",
      "Hotel stay & food",
      "Tolls & parking"
    ],
    approximateDistance: "720 km round trip",
    season: "September to May",
    notes: "Mullayanagiri summit steps require comfortable walking shoes.",
    relatedDestinations: ["chikkamagaluru", "mullayanagiri-baba-budangiri", "kemmannugundi", "belur"],
    relatedRoutes: ["bengaluru-to-chikkamagaluru"],
    faqs: [
      {
        question: "Can our cab drive all the way to Mullayanagiri top?",
        answer: "Yes, cab access goes right up to the parking lot below the summit steps."
      }
    ],
    bookingCTA: "Book Chikkamagaluru Peak Package",
    pricingStatus: "pending",
    startingFareNote: "Owner-approved fare available on enquiry."
  },
  {
    id: "hampi-badami-heritage-4day",
    title: "Vijayanagara & Chalukya Empire Heritage Trail (Hampi-Badami 4-Day)",
    slug: "hampi-badami-heritage-4day",
    category: "Hampi/Badami/Pattadakal",
    duration: "4 Days / 3 Nights",
    destinationIds: ["hampi", "hosapete", "anegundi", "badami", "pattadakal", "aihole"],
    route: "Bengaluru → Chitradurga → Hampi → Anegundi → Badami → Pattadakal → Aihole → Bengaluru",
    pickupAreas: ["All Bengaluru Addresses & Airport"],
    dropAreas: ["All Bengaluru Locations"],
    dayWiseItinerary: [
      {
        day: 1,
        title: "Chitradurga Fort & Arrival in Hampi UNESCO Realm",
        activities: [
          "06:00 AM departure via NH50",
          "Explore Chitradurga Fort (Seven Circles / Kallina Kote)",
          "Drive to Hospet/Hampi and check in",
          "Sunset view from Hemakuta Hill overlooking Virupaksha Temple"
        ],
        highlights: ["Chitradurga Fort history", "Hemakuta Hill golden sunset"]
      },
      {
        day: 2,
        title: "Full Day Hampi Monumental Marvels",
        activities: [
          "Visit Virupaksha Temple, Monolithic Sasivekalu & Kadalekalu Ganesha",
          "Vittala Temple Complex with iconic Stone Chariot & Musical Pillars",
          "Lotus Mahal, Elephant Stables & Royal Enclosure",
          "Coracle boat ride on Tungabhadra river"
        ],
        highlights: ["Vittala Stone Chariot UNESCO symbol", "Tungabhadra Coracle ride"]
      },
      {
        day: 3,
        title: "Chalukyan Rock-Cut Caves of Badami, Pattadakal & Aihole",
        activities: [
          "Day excursion to Badami cave temples carved into red sandstone cliffs",
          "Agastya Lake & Bhutanatha Temple cluster",
          "Pattadakal UNESCO complex showing Dravidian & Nagara architecture fusion",
          "Aihole Durga Temple (cradle of Indian temple architecture)"
        ],
        highlights: ["Badami red sandstone cave relief sculptures", "Pattadakal temple architecture"]
      },
      {
        day: 4,
        title: "Anegundi Mythological Realm & Return",
        activities: [
          "Visit Anegundi (Kishkindha realm) and Anjanadri Hill (Lord Hanuman birthplace)",
          "Begin return journey towards Bengaluru",
          "Reach Bengaluru by 10:00 PM"
        ],
        highlights: ["Anjanadri Hill panoramic view", "Historical Anegundi village"]
      }
    ],
    vehicleIds: ["innova-crysta", "force-urbania-luxury", "7-seater-tt", "12-14-seater-tt"],
    inclusions: [
      "Dedicated long-distance AC vehicle for 4 days",
      "All driver allowances & fuel charges",
      "Inter-district transport coordination"
    ],
    exclusions: [
      "ASI entrance tickets for UNESCO monuments",
      "Guide fees & coracle ride tickets",
      "Hotel accommodation & meals"
    ],
    approximateDistance: "1,150 km total circuit",
    season: "October to March (Pleasant weather for heritage exploration)",
    notes: "Monuments involve walking on rock surfaces; hat and sun protection recommended.",
    relatedDestinations: ["hampi", "badami", "pattadakal", "aihole", "chitradurga"],
    relatedRoutes: ["bengaluru-to-hampi"],
    faqs: [
      {
        question: "Is driver overnight allowance included?",
        answer: "Yes, all outstation driver night charges are covered in the package estimate."
      }
    ],
    bookingCTA: "Enquire Hampi-Badami Heritage Tour",
    pricingStatus: "pending",
    startingFareNote: "Owner-approved fare available on enquiry."
  },
  {
    id: "gokarna-murudeshwar-coastal-4day",
    title: "Gokarna, Murudeshwar & Karwar Coastal Express 4-Day",
    slug: "gokarna-murudeshwar-coastal-4day",
    category: "Coastal",
    duration: "4 Days / 3 Nights",
    destinationIds: ["gokarna", "murudeshwar", "karwar", "yana-kumta", "honnavar"],
    route: "Bengaluru → Shivamogga → Honnavar → Murudeshwar → Gokarna → Yana → Bengaluru",
    pickupAreas: ["All Bengaluru Addresses"],
    dropAreas: ["All Bengaluru Locations"],
    dayWiseItinerary: [
      {
        day: 1,
        title: "Bengaluru to Murudeshwar & World's 2nd Tallest Shiva Statue",
        activities: [
          "Early morning 05:00 AM departure",
          "Scenic drive across Western Ghats ghat sections",
          "Reach Murudeshwar; visit Shiva Temple & 20-storey Raja Gopura with elevator view",
          "Check in at oceanfront resort"
        ],
        highlights: ["123ft Shiva Statue facing Arabian Sea", "Raja Gopura tower top view"]
      },
      {
        day: 2,
        title: "Honnavar Backwater Boating & Gokarna Beach Trail",
        activities: [
          "Honnavar Sharavathi river backwater boat ride through mangrove forests",
          "Drive to Gokarna town",
          "Visit Mahabaleshwar Temple (Atmalinga shrine)",
          "Sunset trek/walk at Om Beach and Kudle Beach"
        ],
        highlights: ["Mangrove backwater cruise", "Om Beach natural 'Om' shape coastline"]
      },
      {
        day: 3,
        title: "Yana Black Rock Monoliths & Mirjan Fort",
        activities: [
          "Excursion to Yana Caves (massive crystalline karst black rock spires)",
          "Visit 16th-century mossy brick ramparts of Mirjan Fort",
          "Evening relaxing at Half Moon & Paradise beaches"
        ],
        highlights: ["Bhairaveshwara Shikhara black rocks", "Mirjan Fort coastal green walls"]
      },
      {
        day: 4,
        title: "Jog Falls Halt & Return Journey",
        activities: [
          "Check out and drive towards Jog Falls (India's 2nd highest plunge waterfall)",
          "Halt for photos & lunch",
          "Return to Bengaluru reaching late night"
        ],
        highlights: ["Jog Falls Sharavathi cascade view"]
      }
    ],
    vehicleIds: ["innova-crysta", "force-urbania-luxury", "7-seater-tt", "12-14-seater-tt"],
    inclusions: [
      "AC vehicle for 4 days coastal highway circuit",
      "Fuel, toll assistance & experienced coastal driver",
      "All driver stay fees"
    ],
    exclusions: [
      "Honnavar boat rides & temple pooja tickets",
      "Hotel & dining charges",
      "Tolls & parking receipts"
    ],
    approximateDistance: "1,100 km round trip",
    season: "October to April",
    notes: "Yana Caves involve a 1 km shaded forest walk.",
    relatedDestinations: ["gokarna", "murudeshwar", "honnavar", "yana-kumta", "jog-falls"],
    relatedRoutes: ["bengaluru-to-gokarna"],
    faqs: [
      {
        question: "Is coastal route safe for family travel?",
        answer: "Yes, we deploy experienced drivers familiar with Western Ghats ghat roads and coastal expressways."
      }
    ],
    bookingCTA: "Book Coastal Karnataka Tour",
    pricingStatus: "pending",
    startingFareNote: "Owner-approved fare available on enquiry."
  },
  {
    id: "grand-karnataka-7day",
    title: "Grand Karnataka Explorer (Mysuru, Coorg, Chikkamagaluru & Hampi 7-Day)",
    slug: "grand-karnataka-7day",
    category: "Grand 5–7 day Karnataka",
    duration: "7 Days / 6 Nights",
    destinationIds: ["mysuru", "madikeri", "chikkamagaluru", "belur", "hampi", "badami"],
    route: "Bengaluru → Mysuru → Coorg → Chikkamagaluru → Belur → Hampi → Badami → Bengaluru",
    pickupAreas: ["Bengaluru Airport (BLR) / City Hotels"],
    dropAreas: ["Bengaluru Airport (BLR) / City Hotels"],
    dayWiseItinerary: [
      {
        day: 1,
        title: "Bengaluru to Mysuru Palace & Chamundi Hill",
        activities: [
          "07:00 AM pickup",
          "Visit Srirangapatna Daria Daulat, Mysuru Palace & Chamundi Hills",
          "Overnight halt in Mysuru"
        ],
        highlights: ["Expressway drive", "Mysuru Palace grand tour"]
      },
      {
        day: 2,
        title: "Mysuru to Coorg via Golden Temple",
        activities: [
          "Visit Bylakuppe Namdroling Monastery & Dubare Elephant Camp",
          "Check in at Madikeri resort; visit Raja's Seat sunset",
          "Overnight in Coorg"
        ],
        highlights: ["Tibetan culture", "Coffee state evening"]
      },
      {
        day: 3,
        title: "Coorg Sightseeing to Chikkamagaluru",
        activities: [
          "Visit Abbey Falls & Talakaveri",
          "Drive north to Chikkamagaluru",
          "Overnight in Chikkamagaluru resort"
        ],
        highlights: ["Coffee country transit"]
      },
      {
        day: 4,
        title: "Mullayanagiri Summit & Belur Hoysala Temples",
        activities: [
          "Summit Mullayanagiri peak & Jhari Falls",
          "Visit Chennakeshava Temple Belur",
          "Overnight in Chikkamagaluru"
        ],
        highlights: ["Highest peak summit", "Hoysala stone carving"]
      },
      {
        day: 5,
        title: "Chikkamagaluru to Hampi Empire Realm",
        activities: [
          "Drive to Hospet/Hampi via Chitradurga Fort",
          "Evening view of Tungabhadra River sunset",
          "Overnight in Hampi"
        ],
        highlights: ["Fort of Seven Circles", "UNESCO valley view"]
      },
      {
        day: 6,
        title: "Hampi Monumental Exploration & Anegundi",
        activities: [
          "Full day tour of Vittala Temple Stone Chariot, Virupaksha & Lotus Mahal",
          "Cross Tungabhadra to Anegundi Kishkindha realm",
          "Overnight in Hampi"
        ],
        highlights: ["Vittala Stone Chariot", "Royal Enclosure"]
      },
      {
        day: 7,
        title: "Badami Cave Temples & Grand Return to Bengaluru",
        activities: [
          "Morning excursion to Badami Rock-Cut Caves",
          "Begin return highway trip to Bengaluru",
          "Drop off at Bengaluru airport/hotel by 11:00 PM"
        ],
        highlights: ["Badami red sandstone caves", "Grand Karnataka circuit completion"]
      }
    ],
    vehicleIds: ["innova-crysta", "force-urbania-luxury", "7-seater-tt", "12-14-seater-tt"],
    inclusions: [
      "Dedicated premium AC vehicle for complete 7-day circuit",
      "Unlimited interstate / inter-district miles",
      "Driver night allowance, fuel & highway toll handling"
    ],
    exclusions: [
      "Hotels, resorts & meal packages",
      "Monument tickets & local guide fees",
      "Personal shopping & activities"
    ],
    approximateDistance: "1,850 km complete grand tour",
    season: "October to March",
    notes: "Ideal for NRI visitors, family vacations, and first-time Karnataka explorers.",
    relatedDestinations: ["mysuru", "madikeri", "chikkamagaluru", "hampi", "badami"],
    relatedRoutes: ["bengaluru-to-mysuru", "bengaluru-to-coorg", "bengaluru-to-hampi"],
    faqs: [
      {
        question: "Can we start directly from Bangalore Airport?",
        answer: "Yes! Our driver will receive your group at BLR Airport arrival terminal with a name placard."
      }
    ],
    bookingCTA: "Enquire Grand Karnataka 7-Day Package",
    pricingStatus: "pending",
    startingFareNote: "Owner-approved fare available on enquiry."
  },
  {
    id: "bandipur-kabini-wildlife-3day",
    title: "Bandipur & Kabini Tiger Reserve Safari 3-Day Trail",
    slug: "bandipur-kabini-wildlife-3day",
    category: "Wildlife",
    duration: "3 Days / 2 Nights",
    destinationIds: ["bandipur", "kabini", "nagarhole", "br-hills"],
    route: "Bengaluru → Mysuru → Bandipur National Park → Kabini Backwaters → Bengaluru",
    pickupAreas: ["All Bengaluru Addresses"],
    dropAreas: ["All Bengaluru Locations"],
    dayWiseItinerary: [
      {
        day: 1,
        title: "Drive to Bandipur & Afternoon Jungle Safari",
        activities: [
          "06:00 AM pickup from Bengaluru",
          "Drive past Mysuru to Bandipur National Park tiger reserve forest",
          "Check in at jungle lodge",
          "Afternoon Forest Department Jeep / Bus Safari for tiger, elephant & leopard tracking"
        ],
        highlights: ["Nilgiri Biosphere jungle drive", "Bandipur tiger reserve safari"]
      },
      {
        day: 2,
        title: "Kabini River Boat Safari & Nagarhole Forest Realm",
        activities: [
          "Early morning jungle tracking",
          "Drive to Kabini river backwaters (Nagarhole southern corridor)",
          "Evening Boat Safari along Kabini reservoir for wild elephant herds & waterfowl",
          "Night campfire at resort"
        ],
        highlights: ["Kabini river elephant congregation", "Leopard & black panther territory"]
      },
      {
        day: 3,
        title: "Morning Safari & Return Drive",
        activities: [
          "Optional early morning birding walk",
          "Check out and drive back to Bengaluru via Mysuru Expressway",
          "Reach Bengaluru by 08:00 PM"
        ],
        highlights: ["Kabini backwaters sunrise view"]
      }
    ],
    vehicleIds: ["innova-crysta", "force-urbania-luxury", "7-seater-tt"],
    inclusions: [
      "AC vehicle for 3-day wildlife circuit",
      "Fuel costs, driver stay & night allowance",
      "Doorstep pickup & drop"
    ],
    exclusions: [
      "Forest Department Safari slot tickets (Jungle Lodges / Forest Dept booking)",
      "Resort accommodation & food",
      "Toll receipts"
    ],
    approximateDistance: "580 km round trip",
    season: "October to May (Best wildlife sightings)",
    notes: "Safari slots are strictly controlled by Karnataka Forest Department and require early online booking.",
    relatedDestinations: ["bandipur", "kabini", "nagarhole", "br-hills"],
    relatedRoutes: ["bengaluru-to-mysuru"],
    faqs: [
      {
        question: "Do you book the jungle safari slots?",
        answer: "We provide complete cab transport to the safari gate. We recommend booking official Jungle Lodges or Forest Dept tickets online in advance."
      }
    ],
    bookingCTA: "Book Wildlife Safari Cab Express",
    pricingStatus: "pending",
    startingFareNote: "Owner-approved fare available on enquiry."
  }
];
