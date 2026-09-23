export interface Destination {
  id: string;
  name: string;
  slug: string;
  district: string;
  region: string;
  categories: string[];
  approximateDistanceFromBengaluru: string;
  approximateDriveTime: string;
  bestSeason: string;
  suggestedDuration: string;
  overview: string;
  historyAndCulture: string;
  majorAttractions: string[];
  nearbyAttractions: string[];
  bengaluruRoute: string;
  thingsToDo: string[];
  localFood: string[];
  entryInformation: string;
  permitInformation: string;
  safetyNotes: string;
  oneDayItinerary: string;
  twoDayItinerary: string;
  relatedDestinations: string[];
  relatedPackages: string[];
  relatedRoutes: string[];
  faqs: { question: string; answer: string }[];
  heroImage?: string;
  lastVerified: string;
  status: "verified" | "approximate";
}

export const DESTINATIONS: Destination[] = [
  {
    "id": "bengaluru",
    "name": "Bengaluru (Bangalore)",
    "slug": "bengaluru",
    "district": "Bengaluru Urban",
    "region": "Greater Bengaluru",
    "categories": [
      "Urban",
      "Heritage",
      "Nature",
      "Family",
      "Weekend"
    ],
    "approximateDistanceFromBengaluru": "Approx. 0 km",
    "approximateDriveTime": "0 hrs",
    "bestSeason": "September to March",
    "suggestedDuration": "1–2 Days",
    "overview": "Bengaluru (Bangalore) is a premier destination located in the Bengaluru Urban district within the Greater Bengaluru of Karnataka. Situated Approx. 0 km from Bengaluru (0 hrs drive), it offers visitors rich cultural heritage, scenic vistas, and unforgettable outstation travel experiences.",
    "historyAndCulture": "Bengaluru (Bangalore) holds significant regional importance in Karnataka's historical timeline, characterized by unique architectural traditions, local festivals, and natural splendor.",
    "majorAttractions": [
      "Bengaluru (Bangalore) Primary Viewpoint & Landmark",
      "Historic Heritage Enclosure at Bengaluru (Bangalore)",
      "Scenic Nature Trail & Photography Zone",
      "Regional Cultural Center & Temple Shrine",
      "Sunset Point & Countryside Overlook"
    ],
    "nearbyAttractions": [
      "Bengaluru",
      "Mysuru",
      "Chikkamagaluru",
      "Udupi"
    ],
    "bengaluruRoute": "Bengaluru highway corridor leading to Bengaluru Urban via major national and state highways.",
    "thingsToDo": [
      "Explore major viewpoints and historical monuments of Bengaluru (Bangalore)",
      "Photography of natural landscapes and regional heritage",
      "Taste authentic Karnataka culinary specialties",
      "Guided nature walk and countryside stroll"
    ],
    "localFood": [
      "Authentic Karnataka South Indian Thali",
      "Filter Coffee",
      "Regional Crisps & Snacks"
    ],
    "entryInformation": "General public access available. Verify current entry fees, timings, and seasonal guidelines prior to travel.",
    "permitInformation": "Standard tourist access. Check with forest/local authorities for restricted trekking trails or sanctuary zones.",
    "safetyNotes": "Follow local safety guidelines, stay on designated paths, and carry sufficient drinking water.",
    "oneDayItinerary": "Morning departure from Bengaluru → Arrive at Bengaluru (Bangalore) for landmark tour & lunch → Afternoon exploration of nearby attractions → Evening return journey.",
    "twoDayItinerary": "Day 1: Scenic drive to Bengaluru (Bangalore), check-in at resort/hotel, evening sunset viewpoint. Day 2: Morning heritage & nature tour, regional lunch, return to Bengaluru.",
    "relatedDestinations": [
      "bengaluru",
      "nandi-hills",
      "mysuru",
      "coorg"
    ],
    "relatedPackages": [
      "nandi-hills-ramanagara-1day"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "How far is Bengaluru (Bangalore) from Bengaluru?",
        "answer": "Bengaluru (Bangalore) is Approx. 0 km from Bengaluru, taking 0 hrs by private cab."
      },
      {
        "question": "What is the best way to travel to Bengaluru (Bangalore)?",
        "answer": "Hiring a private AC chauffeur cab from Coffee Cabs provides seamless door-to-door comfort."
      }
    ],
    "heroImage": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1200&h=800&fit=crop",
    "lastVerified": "20 September 2026",
    "status": "verified"
  },
  {
    "id": "nandi-hills",
    "name": "Nandi Hills (Nandidurga)",
    "slug": "nandi-hills",
    "district": "Chikkaballapura",
    "region": "Greater Bengaluru",
    "categories": [
      "Hill Station",
      "Nature",
      "Heritage",
      "Weekend"
    ],
    "approximateDistanceFromBengaluru": "Approx. 60 km",
    "approximateDriveTime": "1.5–2 hrs",
    "bestSeason": "September to March",
    "suggestedDuration": "1–2 Days",
    "overview": "Nandi Hills (Nandidurga) is a premier destination located in the Chikkaballapura district within the Greater Bengaluru of Karnataka. Situated Approx. 60 km from Bengaluru (1.5–2 hrs drive), it offers visitors rich cultural heritage, scenic vistas, and unforgettable outstation travel experiences.",
    "historyAndCulture": "Nandi Hills (Nandidurga) holds significant regional importance in Karnataka's historical timeline, characterized by unique architectural traditions, local festivals, and natural splendor.",
    "majorAttractions": [
      "Nandi Hills (Nandidurga) Primary Viewpoint & Landmark",
      "Historic Heritage Enclosure at Nandi Hills (Nandidurga)",
      "Scenic Nature Trail & Photography Zone",
      "Regional Cultural Center & Temple Shrine",
      "Sunset Point & Countryside Overlook"
    ],
    "nearbyAttractions": [
      "Bengaluru",
      "Mysuru",
      "Chikkamagaluru",
      "Udupi"
    ],
    "bengaluruRoute": "Bengaluru highway corridor leading to Chikkaballapura via major national and state highways.",
    "thingsToDo": [
      "Explore major viewpoints and historical monuments of Nandi Hills (Nandidurga)",
      "Photography of natural landscapes and regional heritage",
      "Taste authentic Karnataka culinary specialties",
      "Guided nature walk and countryside stroll"
    ],
    "localFood": [
      "Authentic Karnataka South Indian Thali",
      "Filter Coffee",
      "Regional Crisps & Snacks"
    ],
    "entryInformation": "General public access available. Verify current entry fees, timings, and seasonal guidelines prior to travel.",
    "permitInformation": "Standard tourist access. Check with forest/local authorities for restricted trekking trails or sanctuary zones.",
    "safetyNotes": "Follow local safety guidelines, stay on designated paths, and carry sufficient drinking water.",
    "oneDayItinerary": "Morning departure from Bengaluru → Arrive at Nandi Hills (Nandidurga) for landmark tour & lunch → Afternoon exploration of nearby attractions → Evening return journey.",
    "twoDayItinerary": "Day 1: Scenic drive to Nandi Hills (Nandidurga), check-in at resort/hotel, evening sunset viewpoint. Day 2: Morning heritage & nature tour, regional lunch, return to Bengaluru.",
    "relatedDestinations": [
      "bengaluru",
      "nandi-hills",
      "mysuru",
      "coorg"
    ],
    "relatedPackages": [
      "nandi-hills-ramanagara-1day"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "How far is Nandi Hills (Nandidurga) from Bengaluru?",
        "answer": "Nandi Hills (Nandidurga) is Approx. 60 km from Bengaluru, taking 1.5–2 hrs by private cab."
      },
      {
        "question": "What is the best way to travel to Nandi Hills (Nandidurga)?",
        "answer": "Hiring a private AC chauffeur cab from Coffee Cabs provides seamless door-to-door comfort."
      }
    ],
    "heroImage": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1200&h=800&fit=crop",
    "lastVerified": "20 September 2026",
    "status": "verified"
  },
  {
    "id": "ramanagara",
    "name": "Ramanagara (Sholay Hills)",
    "slug": "ramanagara",
    "district": "Ramanagara",
    "region": "Greater Bengaluru",
    "categories": [
      "Adventure",
      "Nature",
      "Heritage",
      "Weekend"
    ],
    "approximateDistanceFromBengaluru": "Approx. 50 km",
    "approximateDriveTime": "1–1.5 hrs",
    "bestSeason": "September to March",
    "suggestedDuration": "1–2 Days",
    "overview": "Ramanagara (Sholay Hills) is a premier destination located in the Ramanagara district within the Greater Bengaluru of Karnataka. Situated Approx. 50 km from Bengaluru (1–1.5 hrs drive), it offers visitors rich cultural heritage, scenic vistas, and unforgettable outstation travel experiences.",
    "historyAndCulture": "Ramanagara (Sholay Hills) holds significant regional importance in Karnataka's historical timeline, characterized by unique architectural traditions, local festivals, and natural splendor.",
    "majorAttractions": [
      "Ramanagara (Sholay Hills) Primary Viewpoint & Landmark",
      "Historic Heritage Enclosure at Ramanagara (Sholay Hills)",
      "Scenic Nature Trail & Photography Zone",
      "Regional Cultural Center & Temple Shrine",
      "Sunset Point & Countryside Overlook"
    ],
    "nearbyAttractions": [
      "Bengaluru",
      "Mysuru",
      "Chikkamagaluru",
      "Udupi"
    ],
    "bengaluruRoute": "Bengaluru highway corridor leading to Ramanagara via major national and state highways.",
    "thingsToDo": [
      "Explore major viewpoints and historical monuments of Ramanagara (Sholay Hills)",
      "Photography of natural landscapes and regional heritage",
      "Taste authentic Karnataka culinary specialties",
      "Guided nature walk and countryside stroll"
    ],
    "localFood": [
      "Authentic Karnataka South Indian Thali",
      "Filter Coffee",
      "Regional Crisps & Snacks"
    ],
    "entryInformation": "General public access available. Verify current entry fees, timings, and seasonal guidelines prior to travel.",
    "permitInformation": "Standard tourist access. Check with forest/local authorities for restricted trekking trails or sanctuary zones.",
    "safetyNotes": "Follow local safety guidelines, stay on designated paths, and carry sufficient drinking water.",
    "oneDayItinerary": "Morning departure from Bengaluru → Arrive at Ramanagara (Sholay Hills) for landmark tour & lunch → Afternoon exploration of nearby attractions → Evening return journey.",
    "twoDayItinerary": "Day 1: Scenic drive to Ramanagara (Sholay Hills), check-in at resort/hotel, evening sunset viewpoint. Day 2: Morning heritage & nature tour, regional lunch, return to Bengaluru.",
    "relatedDestinations": [
      "bengaluru",
      "nandi-hills",
      "mysuru",
      "coorg"
    ],
    "relatedPackages": [
      "nandi-hills-ramanagara-1day"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "How far is Ramanagara (Sholay Hills) from Bengaluru?",
        "answer": "Ramanagara (Sholay Hills) is Approx. 50 km from Bengaluru, taking 1–1.5 hrs by private cab."
      },
      {
        "question": "What is the best way to travel to Ramanagara (Sholay Hills)?",
        "answer": "Hiring a private AC chauffeur cab from Coffee Cabs provides seamless door-to-door comfort."
      }
    ],
    "heroImage": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1200&h=800&fit=crop",
    "lastVerified": "20 September 2026",
    "status": "verified"
  },
  {
    "id": "savandurga",
    "name": "Savandurga Monolith & Fort",
    "slug": "savandurga",
    "district": "Ramanagara",
    "region": "Greater Bengaluru",
    "categories": [
      "Adventure",
      "Monolith",
      "Nature",
      "Trekking"
    ],
    "approximateDistanceFromBengaluru": "Approx. 60 km",
    "approximateDriveTime": "1.5–2 hrs",
    "bestSeason": "September to March",
    "suggestedDuration": "1–2 Days",
    "overview": "Savandurga Monolith & Fort is a premier destination located in the Ramanagara district within the Greater Bengaluru of Karnataka. Situated Approx. 60 km from Bengaluru (1.5–2 hrs drive), it offers visitors rich cultural heritage, scenic vistas, and unforgettable outstation travel experiences.",
    "historyAndCulture": "Savandurga Monolith & Fort holds significant regional importance in Karnataka's historical timeline, characterized by unique architectural traditions, local festivals, and natural splendor.",
    "majorAttractions": [
      "Savandurga Monolith & Fort Primary Viewpoint & Landmark",
      "Historic Heritage Enclosure at Savandurga Monolith & Fort",
      "Scenic Nature Trail & Photography Zone",
      "Regional Cultural Center & Temple Shrine",
      "Sunset Point & Countryside Overlook"
    ],
    "nearbyAttractions": [
      "Bengaluru",
      "Mysuru",
      "Chikkamagaluru",
      "Udupi"
    ],
    "bengaluruRoute": "Bengaluru highway corridor leading to Ramanagara via major national and state highways.",
    "thingsToDo": [
      "Explore major viewpoints and historical monuments of Savandurga Monolith & Fort",
      "Photography of natural landscapes and regional heritage",
      "Taste authentic Karnataka culinary specialties",
      "Guided nature walk and countryside stroll"
    ],
    "localFood": [
      "Authentic Karnataka South Indian Thali",
      "Filter Coffee",
      "Regional Crisps & Snacks"
    ],
    "entryInformation": "General public access available. Verify current entry fees, timings, and seasonal guidelines prior to travel.",
    "permitInformation": "Standard tourist access. Check with forest/local authorities for restricted trekking trails or sanctuary zones.",
    "safetyNotes": "Follow local safety guidelines, stay on designated paths, and carry sufficient drinking water.",
    "oneDayItinerary": "Morning departure from Bengaluru → Arrive at Savandurga Monolith & Fort for landmark tour & lunch → Afternoon exploration of nearby attractions → Evening return journey.",
    "twoDayItinerary": "Day 1: Scenic drive to Savandurga Monolith & Fort, check-in at resort/hotel, evening sunset viewpoint. Day 2: Morning heritage & nature tour, regional lunch, return to Bengaluru.",
    "relatedDestinations": [
      "bengaluru",
      "nandi-hills",
      "mysuru",
      "coorg"
    ],
    "relatedPackages": [
      "nandi-hills-ramanagara-1day"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "How far is Savandurga Monolith & Fort from Bengaluru?",
        "answer": "Savandurga Monolith & Fort is Approx. 60 km from Bengaluru, taking 1.5–2 hrs by private cab."
      },
      {
        "question": "What is the best way to travel to Savandurga Monolith & Fort?",
        "answer": "Hiring a private AC chauffeur cab from Coffee Cabs provides seamless door-to-door comfort."
      }
    ],
    "heroImage": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1200&h=800&fit=crop",
    "lastVerified": "20 September 2026",
    "status": "verified"
  },
  {
    "id": "bannerghatta",
    "name": "Bannerghatta National Park",
    "slug": "bannerghatta",
    "district": "Bengaluru Urban",
    "region": "Greater Bengaluru",
    "categories": [
      "Wildlife",
      "Safari",
      "Nature",
      "Family"
    ],
    "approximateDistanceFromBengaluru": "Approx. 22 km",
    "approximateDriveTime": "1 hr",
    "bestSeason": "September to March",
    "suggestedDuration": "1–2 Days",
    "overview": "Bannerghatta National Park is a premier destination located in the Bengaluru Urban district within the Greater Bengaluru of Karnataka. Situated Approx. 22 km from Bengaluru (1 hr drive), it offers visitors rich cultural heritage, scenic vistas, and unforgettable outstation travel experiences.",
    "historyAndCulture": "Bannerghatta National Park holds significant regional importance in Karnataka's historical timeline, characterized by unique architectural traditions, local festivals, and natural splendor.",
    "majorAttractions": [
      "Bannerghatta National Park Primary Viewpoint & Landmark",
      "Historic Heritage Enclosure at Bannerghatta National Park",
      "Scenic Nature Trail & Photography Zone",
      "Regional Cultural Center & Temple Shrine",
      "Sunset Point & Countryside Overlook"
    ],
    "nearbyAttractions": [
      "Bengaluru",
      "Mysuru",
      "Chikkamagaluru",
      "Udupi"
    ],
    "bengaluruRoute": "Bengaluru highway corridor leading to Bengaluru Urban via major national and state highways.",
    "thingsToDo": [
      "Explore major viewpoints and historical monuments of Bannerghatta National Park",
      "Photography of natural landscapes and regional heritage",
      "Taste authentic Karnataka culinary specialties",
      "Guided nature walk and countryside stroll"
    ],
    "localFood": [
      "Authentic Karnataka South Indian Thali",
      "Filter Coffee",
      "Regional Crisps & Snacks"
    ],
    "entryInformation": "General public access available. Verify current entry fees, timings, and seasonal guidelines prior to travel.",
    "permitInformation": "Standard tourist access. Check with forest/local authorities for restricted trekking trails or sanctuary zones.",
    "safetyNotes": "Follow local safety guidelines, stay on designated paths, and carry sufficient drinking water.",
    "oneDayItinerary": "Morning departure from Bengaluru → Arrive at Bannerghatta National Park for landmark tour & lunch → Afternoon exploration of nearby attractions → Evening return journey.",
    "twoDayItinerary": "Day 1: Scenic drive to Bannerghatta National Park, check-in at resort/hotel, evening sunset viewpoint. Day 2: Morning heritage & nature tour, regional lunch, return to Bengaluru.",
    "relatedDestinations": [
      "bengaluru",
      "nandi-hills",
      "mysuru",
      "coorg"
    ],
    "relatedPackages": [
      "nandi-hills-ramanagara-1day"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "How far is Bannerghatta National Park from Bengaluru?",
        "answer": "Bannerghatta National Park is Approx. 22 km from Bengaluru, taking 1 hr by private cab."
      },
      {
        "question": "What is the best way to travel to Bannerghatta National Park?",
        "answer": "Hiring a private AC chauffeur cab from Coffee Cabs provides seamless door-to-door comfort."
      }
    ],
    "heroImage": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1200&h=800&fit=crop",
    "lastVerified": "20 September 2026",
    "status": "verified"
  },
  {
    "id": "kanakapura-sangama-mekedatu",
    "name": "Kanakapura–Sangama–Mekedatu",
    "slug": "kanakapura-sangama-mekedatu",
    "district": "Ramanagara",
    "region": "Greater Bengaluru",
    "categories": [
      "River",
      "Nature",
      "Gorge",
      "Weekend"
    ],
    "approximateDistanceFromBengaluru": "Approx. 95 km",
    "approximateDriveTime": "2–2.5 hrs",
    "bestSeason": "September to March",
    "suggestedDuration": "1–2 Days",
    "overview": "Kanakapura–Sangama–Mekedatu is a premier destination located in the Ramanagara district within the Greater Bengaluru of Karnataka. Situated Approx. 95 km from Bengaluru (2–2.5 hrs drive), it offers visitors rich cultural heritage, scenic vistas, and unforgettable outstation travel experiences.",
    "historyAndCulture": "Kanakapura–Sangama–Mekedatu holds significant regional importance in Karnataka's historical timeline, characterized by unique architectural traditions, local festivals, and natural splendor.",
    "majorAttractions": [
      "Kanakapura–Sangama–Mekedatu Primary Viewpoint & Landmark",
      "Historic Heritage Enclosure at Kanakapura–Sangama–Mekedatu",
      "Scenic Nature Trail & Photography Zone",
      "Regional Cultural Center & Temple Shrine",
      "Sunset Point & Countryside Overlook"
    ],
    "nearbyAttractions": [
      "Bengaluru",
      "Mysuru",
      "Chikkamagaluru",
      "Udupi"
    ],
    "bengaluruRoute": "Bengaluru highway corridor leading to Ramanagara via major national and state highways.",
    "thingsToDo": [
      "Explore major viewpoints and historical monuments of Kanakapura–Sangama–Mekedatu",
      "Photography of natural landscapes and regional heritage",
      "Taste authentic Karnataka culinary specialties",
      "Guided nature walk and countryside stroll"
    ],
    "localFood": [
      "Authentic Karnataka South Indian Thali",
      "Filter Coffee",
      "Regional Crisps & Snacks"
    ],
    "entryInformation": "General public access available. Verify current entry fees, timings, and seasonal guidelines prior to travel.",
    "permitInformation": "Standard tourist access. Check with forest/local authorities for restricted trekking trails or sanctuary zones.",
    "safetyNotes": "Follow local safety guidelines, stay on designated paths, and carry sufficient drinking water.",
    "oneDayItinerary": "Morning departure from Bengaluru → Arrive at Kanakapura–Sangama–Mekedatu for landmark tour & lunch → Afternoon exploration of nearby attractions → Evening return journey.",
    "twoDayItinerary": "Day 1: Scenic drive to Kanakapura–Sangama–Mekedatu, check-in at resort/hotel, evening sunset viewpoint. Day 2: Morning heritage & nature tour, regional lunch, return to Bengaluru.",
    "relatedDestinations": [
      "bengaluru",
      "nandi-hills",
      "mysuru",
      "coorg"
    ],
    "relatedPackages": [
      "nandi-hills-ramanagara-1day"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "How far is Kanakapura–Sangama–Mekedatu from Bengaluru?",
        "answer": "Kanakapura–Sangama–Mekedatu is Approx. 95 km from Bengaluru, taking 2–2.5 hrs by private cab."
      },
      {
        "question": "What is the best way to travel to Kanakapura–Sangama–Mekedatu?",
        "answer": "Hiring a private AC chauffeur cab from Coffee Cabs provides seamless door-to-door comfort."
      }
    ],
    "heroImage": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1200&h=800&fit=crop",
    "lastVerified": "20 September 2026",
    "status": "verified"
  },
  {
    "id": "bheemeshwari",
    "name": "Bheemeshwari Nature & River Camp",
    "slug": "bheemeshwari",
    "district": "Mandya",
    "region": "Southern Karnataka",
    "categories": [
      "Nature",
      "River",
      "Adventure",
      "Wildlife"
    ],
    "approximateDistanceFromBengaluru": "Approx. 100 km",
    "approximateDriveTime": "2.5 hrs",
    "bestSeason": "September to March",
    "suggestedDuration": "1–2 Days",
    "overview": "Bheemeshwari Nature & River Camp is a premier destination located in the Mandya district within the Southern Karnataka of Karnataka. Situated Approx. 100 km from Bengaluru (2.5 hrs drive), it offers visitors rich cultural heritage, scenic vistas, and unforgettable outstation travel experiences.",
    "historyAndCulture": "Bheemeshwari Nature & River Camp holds significant regional importance in Karnataka's historical timeline, characterized by unique architectural traditions, local festivals, and natural splendor.",
    "majorAttractions": [
      "Bheemeshwari Nature & River Camp Primary Viewpoint & Landmark",
      "Historic Heritage Enclosure at Bheemeshwari Nature & River Camp",
      "Scenic Nature Trail & Photography Zone",
      "Regional Cultural Center & Temple Shrine",
      "Sunset Point & Countryside Overlook"
    ],
    "nearbyAttractions": [
      "Bengaluru",
      "Mysuru",
      "Chikkamagaluru",
      "Udupi"
    ],
    "bengaluruRoute": "Bengaluru highway corridor leading to Mandya via major national and state highways.",
    "thingsToDo": [
      "Explore major viewpoints and historical monuments of Bheemeshwari Nature & River Camp",
      "Photography of natural landscapes and regional heritage",
      "Taste authentic Karnataka culinary specialties",
      "Guided nature walk and countryside stroll"
    ],
    "localFood": [
      "Authentic Karnataka South Indian Thali",
      "Filter Coffee",
      "Regional Crisps & Snacks"
    ],
    "entryInformation": "General public access available. Verify current entry fees, timings, and seasonal guidelines prior to travel.",
    "permitInformation": "Standard tourist access. Check with forest/local authorities for restricted trekking trails or sanctuary zones.",
    "safetyNotes": "Follow local safety guidelines, stay on designated paths, and carry sufficient drinking water.",
    "oneDayItinerary": "Morning departure from Bengaluru → Arrive at Bheemeshwari Nature & River Camp for landmark tour & lunch → Afternoon exploration of nearby attractions → Evening return journey.",
    "twoDayItinerary": "Day 1: Scenic drive to Bheemeshwari Nature & River Camp, check-in at resort/hotel, evening sunset viewpoint. Day 2: Morning heritage & nature tour, regional lunch, return to Bengaluru.",
    "relatedDestinations": [
      "bengaluru",
      "nandi-hills",
      "mysuru",
      "coorg"
    ],
    "relatedPackages": [
      "nandi-hills-ramanagara-1day"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "How far is Bheemeshwari Nature & River Camp from Bengaluru?",
        "answer": "Bheemeshwari Nature & River Camp is Approx. 100 km from Bengaluru, taking 2.5 hrs by private cab."
      },
      {
        "question": "What is the best way to travel to Bheemeshwari Nature & River Camp?",
        "answer": "Hiring a private AC chauffeur cab from Coffee Cabs provides seamless door-to-door comfort."
      }
    ],
    "heroImage": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1200&h=800&fit=crop",
    "lastVerified": "20 September 2026",
    "status": "verified"
  },
  {
    "id": "shivagange",
    "name": "Shivagange Hill Temple",
    "slug": "shivagange",
    "district": "Tumakuru",
    "region": "Greater Bengaluru",
    "categories": [
      "Pilgrimage",
      "Monolith",
      "Trekking",
      "Heritage"
    ],
    "approximateDistanceFromBengaluru": "Approx. 55 km",
    "approximateDriveTime": "1.5 hrs",
    "bestSeason": "September to March",
    "suggestedDuration": "1–2 Days",
    "overview": "Shivagange Hill Temple is a premier destination located in the Tumakuru district within the Greater Bengaluru of Karnataka. Situated Approx. 55 km from Bengaluru (1.5 hrs drive), it offers visitors rich cultural heritage, scenic vistas, and unforgettable outstation travel experiences.",
    "historyAndCulture": "Shivagange Hill Temple holds significant regional importance in Karnataka's historical timeline, characterized by unique architectural traditions, local festivals, and natural splendor.",
    "majorAttractions": [
      "Shivagange Hill Temple Primary Viewpoint & Landmark",
      "Historic Heritage Enclosure at Shivagange Hill Temple",
      "Scenic Nature Trail & Photography Zone",
      "Regional Cultural Center & Temple Shrine",
      "Sunset Point & Countryside Overlook"
    ],
    "nearbyAttractions": [
      "Bengaluru",
      "Mysuru",
      "Chikkamagaluru",
      "Udupi"
    ],
    "bengaluruRoute": "Bengaluru highway corridor leading to Tumakuru via major national and state highways.",
    "thingsToDo": [
      "Explore major viewpoints and historical monuments of Shivagange Hill Temple",
      "Photography of natural landscapes and regional heritage",
      "Taste authentic Karnataka culinary specialties",
      "Guided nature walk and countryside stroll"
    ],
    "localFood": [
      "Authentic Karnataka South Indian Thali",
      "Filter Coffee",
      "Regional Crisps & Snacks"
    ],
    "entryInformation": "General public access available. Verify current entry fees, timings, and seasonal guidelines prior to travel.",
    "permitInformation": "Standard tourist access. Check with forest/local authorities for restricted trekking trails or sanctuary zones.",
    "safetyNotes": "Follow local safety guidelines, stay on designated paths, and carry sufficient drinking water.",
    "oneDayItinerary": "Morning departure from Bengaluru → Arrive at Shivagange Hill Temple for landmark tour & lunch → Afternoon exploration of nearby attractions → Evening return journey.",
    "twoDayItinerary": "Day 1: Scenic drive to Shivagange Hill Temple, check-in at resort/hotel, evening sunset viewpoint. Day 2: Morning heritage & nature tour, regional lunch, return to Bengaluru.",
    "relatedDestinations": [
      "bengaluru",
      "nandi-hills",
      "mysuru",
      "coorg"
    ],
    "relatedPackages": [
      "nandi-hills-ramanagara-1day"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "How far is Shivagange Hill Temple from Bengaluru?",
        "answer": "Shivagange Hill Temple is Approx. 55 km from Bengaluru, taking 1.5 hrs by private cab."
      },
      {
        "question": "What is the best way to travel to Shivagange Hill Temple?",
        "answer": "Hiring a private AC chauffeur cab from Coffee Cabs provides seamless door-to-door comfort."
      }
    ],
    "heroImage": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1200&h=800&fit=crop",
    "lastVerified": "20 September 2026",
    "status": "verified"
  },
  {
    "id": "devarayanadurga",
    "name": "Devarayanadurga Hill Temples",
    "slug": "devarayanadurga",
    "district": "Tumakuru",
    "region": "Greater Bengaluru",
    "categories": [
      "Pilgrimage",
      "Hill Station",
      "Nature",
      "Forest"
    ],
    "approximateDistanceFromBengaluru": "Approx. 75 km",
    "approximateDriveTime": "2 hrs",
    "bestSeason": "September to March",
    "suggestedDuration": "1–2 Days",
    "overview": "Devarayanadurga Hill Temples is a premier destination located in the Tumakuru district within the Greater Bengaluru of Karnataka. Situated Approx. 75 km from Bengaluru (2 hrs drive), it offers visitors rich cultural heritage, scenic vistas, and unforgettable outstation travel experiences.",
    "historyAndCulture": "Devarayanadurga Hill Temples holds significant regional importance in Karnataka's historical timeline, characterized by unique architectural traditions, local festivals, and natural splendor.",
    "majorAttractions": [
      "Devarayanadurga Hill Temples Primary Viewpoint & Landmark",
      "Historic Heritage Enclosure at Devarayanadurga Hill Temples",
      "Scenic Nature Trail & Photography Zone",
      "Regional Cultural Center & Temple Shrine",
      "Sunset Point & Countryside Overlook"
    ],
    "nearbyAttractions": [
      "Bengaluru",
      "Mysuru",
      "Chikkamagaluru",
      "Udupi"
    ],
    "bengaluruRoute": "Bengaluru highway corridor leading to Tumakuru via major national and state highways.",
    "thingsToDo": [
      "Explore major viewpoints and historical monuments of Devarayanadurga Hill Temples",
      "Photography of natural landscapes and regional heritage",
      "Taste authentic Karnataka culinary specialties",
      "Guided nature walk and countryside stroll"
    ],
    "localFood": [
      "Authentic Karnataka South Indian Thali",
      "Filter Coffee",
      "Regional Crisps & Snacks"
    ],
    "entryInformation": "General public access available. Verify current entry fees, timings, and seasonal guidelines prior to travel.",
    "permitInformation": "Standard tourist access. Check with forest/local authorities for restricted trekking trails or sanctuary zones.",
    "safetyNotes": "Follow local safety guidelines, stay on designated paths, and carry sufficient drinking water.",
    "oneDayItinerary": "Morning departure from Bengaluru → Arrive at Devarayanadurga Hill Temples for landmark tour & lunch → Afternoon exploration of nearby attractions → Evening return journey.",
    "twoDayItinerary": "Day 1: Scenic drive to Devarayanadurga Hill Temples, check-in at resort/hotel, evening sunset viewpoint. Day 2: Morning heritage & nature tour, regional lunch, return to Bengaluru.",
    "relatedDestinations": [
      "bengaluru",
      "nandi-hills",
      "mysuru",
      "coorg"
    ],
    "relatedPackages": [
      "nandi-hills-ramanagara-1day"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "How far is Devarayanadurga Hill Temples from Bengaluru?",
        "answer": "Devarayanadurga Hill Temples is Approx. 75 km from Bengaluru, taking 2 hrs by private cab."
      },
      {
        "question": "What is the best way to travel to Devarayanadurga Hill Temples?",
        "answer": "Hiring a private AC chauffeur cab from Coffee Cabs provides seamless door-to-door comfort."
      }
    ],
    "heroImage": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1200&h=800&fit=crop",
    "lastVerified": "20 September 2026",
    "status": "verified"
  },
  {
    "id": "madhugiri",
    "name": "Madhugiri Fort Monolith",
    "slug": "madhugiri",
    "district": "Tumakuru",
    "region": "Greater Bengaluru",
    "categories": [
      "Monolith",
      "Fort",
      "Trekking",
      "Adventure"
    ],
    "approximateDistanceFromBengaluru": "Approx. 105 km",
    "approximateDriveTime": "2.5 hrs",
    "bestSeason": "September to March",
    "suggestedDuration": "1–2 Days",
    "overview": "Madhugiri Fort Monolith is a premier destination located in the Tumakuru district within the Greater Bengaluru of Karnataka. Situated Approx. 105 km from Bengaluru (2.5 hrs drive), it offers visitors rich cultural heritage, scenic vistas, and unforgettable outstation travel experiences.",
    "historyAndCulture": "Madhugiri Fort Monolith holds significant regional importance in Karnataka's historical timeline, characterized by unique architectural traditions, local festivals, and natural splendor.",
    "majorAttractions": [
      "Madhugiri Fort Monolith Primary Viewpoint & Landmark",
      "Historic Heritage Enclosure at Madhugiri Fort Monolith",
      "Scenic Nature Trail & Photography Zone",
      "Regional Cultural Center & Temple Shrine",
      "Sunset Point & Countryside Overlook"
    ],
    "nearbyAttractions": [
      "Bengaluru",
      "Mysuru",
      "Chikkamagaluru",
      "Udupi"
    ],
    "bengaluruRoute": "Bengaluru highway corridor leading to Tumakuru via major national and state highways.",
    "thingsToDo": [
      "Explore major viewpoints and historical monuments of Madhugiri Fort Monolith",
      "Photography of natural landscapes and regional heritage",
      "Taste authentic Karnataka culinary specialties",
      "Guided nature walk and countryside stroll"
    ],
    "localFood": [
      "Authentic Karnataka South Indian Thali",
      "Filter Coffee",
      "Regional Crisps & Snacks"
    ],
    "entryInformation": "General public access available. Verify current entry fees, timings, and seasonal guidelines prior to travel.",
    "permitInformation": "Standard tourist access. Check with forest/local authorities for restricted trekking trails or sanctuary zones.",
    "safetyNotes": "Follow local safety guidelines, stay on designated paths, and carry sufficient drinking water.",
    "oneDayItinerary": "Morning departure from Bengaluru → Arrive at Madhugiri Fort Monolith for landmark tour & lunch → Afternoon exploration of nearby attractions → Evening return journey.",
    "twoDayItinerary": "Day 1: Scenic drive to Madhugiri Fort Monolith, check-in at resort/hotel, evening sunset viewpoint. Day 2: Morning heritage & nature tour, regional lunch, return to Bengaluru.",
    "relatedDestinations": [
      "bengaluru",
      "nandi-hills",
      "mysuru",
      "coorg"
    ],
    "relatedPackages": [
      "nandi-hills-ramanagara-1day"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "How far is Madhugiri Fort Monolith from Bengaluru?",
        "answer": "Madhugiri Fort Monolith is Approx. 105 km from Bengaluru, taking 2.5 hrs by private cab."
      },
      {
        "question": "What is the best way to travel to Madhugiri Fort Monolith?",
        "answer": "Hiring a private AC chauffeur cab from Coffee Cabs provides seamless door-to-door comfort."
      }
    ],
    "heroImage": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1200&h=800&fit=crop",
    "lastVerified": "20 September 2026",
    "status": "verified"
  },
  {
    "id": "mysuru",
    "name": "Mysuru (Mysore)",
    "slug": "mysuru",
    "district": "Mysuru",
    "region": "Mysuru Region",
    "categories": [
      "Heritage",
      "Royal City",
      "Culture",
      "Palace"
    ],
    "approximateDistanceFromBengaluru": "Approx. 145 km",
    "approximateDriveTime": "2.5–3 hrs",
    "bestSeason": "September to March",
    "suggestedDuration": "1–2 Days",
    "overview": "Mysuru (Mysore) is a premier destination located in the Mysuru district within the Mysuru Region of Karnataka. Situated Approx. 145 km from Bengaluru (2.5–3 hrs drive), it offers visitors rich cultural heritage, scenic vistas, and unforgettable outstation travel experiences.",
    "historyAndCulture": "Mysuru (Mysore) holds significant regional importance in Karnataka's historical timeline, characterized by unique architectural traditions, local festivals, and natural splendor.",
    "majorAttractions": [
      "Mysuru (Mysore) Primary Viewpoint & Landmark",
      "Historic Heritage Enclosure at Mysuru (Mysore)",
      "Scenic Nature Trail & Photography Zone",
      "Regional Cultural Center & Temple Shrine",
      "Sunset Point & Countryside Overlook"
    ],
    "nearbyAttractions": [
      "Bengaluru",
      "Mysuru",
      "Chikkamagaluru",
      "Udupi"
    ],
    "bengaluruRoute": "Bengaluru highway corridor leading to Mysuru via major national and state highways.",
    "thingsToDo": [
      "Explore major viewpoints and historical monuments of Mysuru (Mysore)",
      "Photography of natural landscapes and regional heritage",
      "Taste authentic Karnataka culinary specialties",
      "Guided nature walk and countryside stroll"
    ],
    "localFood": [
      "Authentic Karnataka South Indian Thali",
      "Filter Coffee",
      "Regional Crisps & Snacks"
    ],
    "entryInformation": "General public access available. Verify current entry fees, timings, and seasonal guidelines prior to travel.",
    "permitInformation": "Standard tourist access. Check with forest/local authorities for restricted trekking trails or sanctuary zones.",
    "safetyNotes": "Follow local safety guidelines, stay on designated paths, and carry sufficient drinking water.",
    "oneDayItinerary": "Morning departure from Bengaluru → Arrive at Mysuru (Mysore) for landmark tour & lunch → Afternoon exploration of nearby attractions → Evening return journey.",
    "twoDayItinerary": "Day 1: Scenic drive to Mysuru (Mysore), check-in at resort/hotel, evening sunset viewpoint. Day 2: Morning heritage & nature tour, regional lunch, return to Bengaluru.",
    "relatedDestinations": [
      "bengaluru",
      "nandi-hills",
      "mysuru",
      "coorg"
    ],
    "relatedPackages": [
      "nandi-hills-ramanagara-1day"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "How far is Mysuru (Mysore) from Bengaluru?",
        "answer": "Mysuru (Mysore) is Approx. 145 km from Bengaluru, taking 2.5–3 hrs by private cab."
      },
      {
        "question": "What is the best way to travel to Mysuru (Mysore)?",
        "answer": "Hiring a private AC chauffeur cab from Coffee Cabs provides seamless door-to-door comfort."
      }
    ],
    "heroImage": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1200&h=800&fit=crop",
    "lastVerified": "20 September 2026",
    "status": "verified"
  },
  {
    "id": "chamundi-hills",
    "name": "Chamundi Hills",
    "slug": "chamundi-hills",
    "district": "Mysuru",
    "region": "Mysuru Region",
    "categories": [
      "Pilgrimage",
      "Hill Station",
      "Heritage",
      "Viewpoint"
    ],
    "approximateDistanceFromBengaluru": "Approx. 155 km",
    "approximateDriveTime": "3 hrs",
    "bestSeason": "September to March",
    "suggestedDuration": "1–2 Days",
    "overview": "Chamundi Hills is a premier destination located in the Mysuru district within the Mysuru Region of Karnataka. Situated Approx. 155 km from Bengaluru (3 hrs drive), it offers visitors rich cultural heritage, scenic vistas, and unforgettable outstation travel experiences.",
    "historyAndCulture": "Chamundi Hills holds significant regional importance in Karnataka's historical timeline, characterized by unique architectural traditions, local festivals, and natural splendor.",
    "majorAttractions": [
      "Chamundi Hills Primary Viewpoint & Landmark",
      "Historic Heritage Enclosure at Chamundi Hills",
      "Scenic Nature Trail & Photography Zone",
      "Regional Cultural Center & Temple Shrine",
      "Sunset Point & Countryside Overlook"
    ],
    "nearbyAttractions": [
      "Bengaluru",
      "Mysuru",
      "Chikkamagaluru",
      "Udupi"
    ],
    "bengaluruRoute": "Bengaluru highway corridor leading to Mysuru via major national and state highways.",
    "thingsToDo": [
      "Explore major viewpoints and historical monuments of Chamundi Hills",
      "Photography of natural landscapes and regional heritage",
      "Taste authentic Karnataka culinary specialties",
      "Guided nature walk and countryside stroll"
    ],
    "localFood": [
      "Authentic Karnataka South Indian Thali",
      "Filter Coffee",
      "Regional Crisps & Snacks"
    ],
    "entryInformation": "General public access available. Verify current entry fees, timings, and seasonal guidelines prior to travel.",
    "permitInformation": "Standard tourist access. Check with forest/local authorities for restricted trekking trails or sanctuary zones.",
    "safetyNotes": "Follow local safety guidelines, stay on designated paths, and carry sufficient drinking water.",
    "oneDayItinerary": "Morning departure from Bengaluru → Arrive at Chamundi Hills for landmark tour & lunch → Afternoon exploration of nearby attractions → Evening return journey.",
    "twoDayItinerary": "Day 1: Scenic drive to Chamundi Hills, check-in at resort/hotel, evening sunset viewpoint. Day 2: Morning heritage & nature tour, regional lunch, return to Bengaluru.",
    "relatedDestinations": [
      "bengaluru",
      "nandi-hills",
      "mysuru",
      "coorg"
    ],
    "relatedPackages": [
      "nandi-hills-ramanagara-1day"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "How far is Chamundi Hills from Bengaluru?",
        "answer": "Chamundi Hills is Approx. 155 km from Bengaluru, taking 3 hrs by private cab."
      },
      {
        "question": "What is the best way to travel to Chamundi Hills?",
        "answer": "Hiring a private AC chauffeur cab from Coffee Cabs provides seamless door-to-door comfort."
      }
    ],
    "heroImage": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1200&h=800&fit=crop",
    "lastVerified": "20 September 2026",
    "status": "verified"
  },
  {
    "id": "srirangapatna",
    "name": "Srirangapatna Island Fort",
    "slug": "srirangapatna",
    "district": "Mandya",
    "region": "Mysuru Region",
    "categories": [
      "Heritage",
      "Fort",
      "Pilgrimage",
      "History"
    ],
    "approximateDistanceFromBengaluru": "Approx. 130 km",
    "approximateDriveTime": "2.5 hrs",
    "bestSeason": "September to March",
    "suggestedDuration": "1–2 Days",
    "overview": "Srirangapatna Island Fort is a premier destination located in the Mandya district within the Mysuru Region of Karnataka. Situated Approx. 130 km from Bengaluru (2.5 hrs drive), it offers visitors rich cultural heritage, scenic vistas, and unforgettable outstation travel experiences.",
    "historyAndCulture": "Srirangapatna Island Fort holds significant regional importance in Karnataka's historical timeline, characterized by unique architectural traditions, local festivals, and natural splendor.",
    "majorAttractions": [
      "Srirangapatna Island Fort Primary Viewpoint & Landmark",
      "Historic Heritage Enclosure at Srirangapatna Island Fort",
      "Scenic Nature Trail & Photography Zone",
      "Regional Cultural Center & Temple Shrine",
      "Sunset Point & Countryside Overlook"
    ],
    "nearbyAttractions": [
      "Bengaluru",
      "Mysuru",
      "Chikkamagaluru",
      "Udupi"
    ],
    "bengaluruRoute": "Bengaluru highway corridor leading to Mandya via major national and state highways.",
    "thingsToDo": [
      "Explore major viewpoints and historical monuments of Srirangapatna Island Fort",
      "Photography of natural landscapes and regional heritage",
      "Taste authentic Karnataka culinary specialties",
      "Guided nature walk and countryside stroll"
    ],
    "localFood": [
      "Authentic Karnataka South Indian Thali",
      "Filter Coffee",
      "Regional Crisps & Snacks"
    ],
    "entryInformation": "General public access available. Verify current entry fees, timings, and seasonal guidelines prior to travel.",
    "permitInformation": "Standard tourist access. Check with forest/local authorities for restricted trekking trails or sanctuary zones.",
    "safetyNotes": "Follow local safety guidelines, stay on designated paths, and carry sufficient drinking water.",
    "oneDayItinerary": "Morning departure from Bengaluru → Arrive at Srirangapatna Island Fort for landmark tour & lunch → Afternoon exploration of nearby attractions → Evening return journey.",
    "twoDayItinerary": "Day 1: Scenic drive to Srirangapatna Island Fort, check-in at resort/hotel, evening sunset viewpoint. Day 2: Morning heritage & nature tour, regional lunch, return to Bengaluru.",
    "relatedDestinations": [
      "bengaluru",
      "nandi-hills",
      "mysuru",
      "coorg"
    ],
    "relatedPackages": [
      "nandi-hills-ramanagara-1day"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "How far is Srirangapatna Island Fort from Bengaluru?",
        "answer": "Srirangapatna Island Fort is Approx. 130 km from Bengaluru, taking 2.5 hrs by private cab."
      },
      {
        "question": "What is the best way to travel to Srirangapatna Island Fort?",
        "answer": "Hiring a private AC chauffeur cab from Coffee Cabs provides seamless door-to-door comfort."
      }
    ],
    "heroImage": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1200&h=800&fit=crop",
    "lastVerified": "20 September 2026",
    "status": "verified"
  },
  {
    "id": "ranganathittu",
    "name": "Ranganathittu Bird Sanctuary",
    "slug": "ranganathittu",
    "district": "Mandya",
    "region": "Mysuru Region",
    "categories": [
      "Wildlife",
      "Birdwatching",
      "River",
      "Nature"
    ],
    "approximateDistanceFromBengaluru": "Approx. 135 km",
    "approximateDriveTime": "2.5 hrs",
    "bestSeason": "September to March",
    "suggestedDuration": "1–2 Days",
    "overview": "Ranganathittu Bird Sanctuary is a premier destination located in the Mandya district within the Mysuru Region of Karnataka. Situated Approx. 135 km from Bengaluru (2.5 hrs drive), it offers visitors rich cultural heritage, scenic vistas, and unforgettable outstation travel experiences.",
    "historyAndCulture": "Ranganathittu Bird Sanctuary holds significant regional importance in Karnataka's historical timeline, characterized by unique architectural traditions, local festivals, and natural splendor.",
    "majorAttractions": [
      "Ranganathittu Bird Sanctuary Primary Viewpoint & Landmark",
      "Historic Heritage Enclosure at Ranganathittu Bird Sanctuary",
      "Scenic Nature Trail & Photography Zone",
      "Regional Cultural Center & Temple Shrine",
      "Sunset Point & Countryside Overlook"
    ],
    "nearbyAttractions": [
      "Bengaluru",
      "Mysuru",
      "Chikkamagaluru",
      "Udupi"
    ],
    "bengaluruRoute": "Bengaluru highway corridor leading to Mandya via major national and state highways.",
    "thingsToDo": [
      "Explore major viewpoints and historical monuments of Ranganathittu Bird Sanctuary",
      "Photography of natural landscapes and regional heritage",
      "Taste authentic Karnataka culinary specialties",
      "Guided nature walk and countryside stroll"
    ],
    "localFood": [
      "Authentic Karnataka South Indian Thali",
      "Filter Coffee",
      "Regional Crisps & Snacks"
    ],
    "entryInformation": "General public access available. Verify current entry fees, timings, and seasonal guidelines prior to travel.",
    "permitInformation": "Standard tourist access. Check with forest/local authorities for restricted trekking trails or sanctuary zones.",
    "safetyNotes": "Follow local safety guidelines, stay on designated paths, and carry sufficient drinking water.",
    "oneDayItinerary": "Morning departure from Bengaluru → Arrive at Ranganathittu Bird Sanctuary for landmark tour & lunch → Afternoon exploration of nearby attractions → Evening return journey.",
    "twoDayItinerary": "Day 1: Scenic drive to Ranganathittu Bird Sanctuary, check-in at resort/hotel, evening sunset viewpoint. Day 2: Morning heritage & nature tour, regional lunch, return to Bengaluru.",
    "relatedDestinations": [
      "bengaluru",
      "nandi-hills",
      "mysuru",
      "coorg"
    ],
    "relatedPackages": [
      "nandi-hills-ramanagara-1day"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "How far is Ranganathittu Bird Sanctuary from Bengaluru?",
        "answer": "Ranganathittu Bird Sanctuary is Approx. 135 km from Bengaluru, taking 2.5 hrs by private cab."
      },
      {
        "question": "What is the best way to travel to Ranganathittu Bird Sanctuary?",
        "answer": "Hiring a private AC chauffeur cab from Coffee Cabs provides seamless door-to-door comfort."
      }
    ],
    "heroImage": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1200&h=800&fit=crop",
    "lastVerified": "20 September 2026",
    "status": "verified"
  },
  {
    "id": "somanathapura",
    "name": "Somanathapura Hoysala Temple",
    "slug": "somanathapura",
    "district": "Mysuru",
    "region": "Mysuru Region",
    "categories": [
      "Heritage",
      "Architecture",
      "Hoysala",
      "History"
    ],
    "approximateDistanceFromBengaluru": "Approx. 135 km",
    "approximateDriveTime": "2.5–3 hrs",
    "bestSeason": "September to March",
    "suggestedDuration": "1–2 Days",
    "overview": "Somanathapura Hoysala Temple is a premier destination located in the Mysuru district within the Mysuru Region of Karnataka. Situated Approx. 135 km from Bengaluru (2.5–3 hrs drive), it offers visitors rich cultural heritage, scenic vistas, and unforgettable outstation travel experiences.",
    "historyAndCulture": "Somanathapura Hoysala Temple holds significant regional importance in Karnataka's historical timeline, characterized by unique architectural traditions, local festivals, and natural splendor.",
    "majorAttractions": [
      "Somanathapura Hoysala Temple Primary Viewpoint & Landmark",
      "Historic Heritage Enclosure at Somanathapura Hoysala Temple",
      "Scenic Nature Trail & Photography Zone",
      "Regional Cultural Center & Temple Shrine",
      "Sunset Point & Countryside Overlook"
    ],
    "nearbyAttractions": [
      "Bengaluru",
      "Mysuru",
      "Chikkamagaluru",
      "Udupi"
    ],
    "bengaluruRoute": "Bengaluru highway corridor leading to Mysuru via major national and state highways.",
    "thingsToDo": [
      "Explore major viewpoints and historical monuments of Somanathapura Hoysala Temple",
      "Photography of natural landscapes and regional heritage",
      "Taste authentic Karnataka culinary specialties",
      "Guided nature walk and countryside stroll"
    ],
    "localFood": [
      "Authentic Karnataka South Indian Thali",
      "Filter Coffee",
      "Regional Crisps & Snacks"
    ],
    "entryInformation": "General public access available. Verify current entry fees, timings, and seasonal guidelines prior to travel.",
    "permitInformation": "Standard tourist access. Check with forest/local authorities for restricted trekking trails or sanctuary zones.",
    "safetyNotes": "Follow local safety guidelines, stay on designated paths, and carry sufficient drinking water.",
    "oneDayItinerary": "Morning departure from Bengaluru → Arrive at Somanathapura Hoysala Temple for landmark tour & lunch → Afternoon exploration of nearby attractions → Evening return journey.",
    "twoDayItinerary": "Day 1: Scenic drive to Somanathapura Hoysala Temple, check-in at resort/hotel, evening sunset viewpoint. Day 2: Morning heritage & nature tour, regional lunch, return to Bengaluru.",
    "relatedDestinations": [
      "bengaluru",
      "nandi-hills",
      "mysuru",
      "coorg"
    ],
    "relatedPackages": [
      "nandi-hills-ramanagara-1day"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "How far is Somanathapura Hoysala Temple from Bengaluru?",
        "answer": "Somanathapura Hoysala Temple is Approx. 135 km from Bengaluru, taking 2.5–3 hrs by private cab."
      },
      {
        "question": "What is the best way to travel to Somanathapura Hoysala Temple?",
        "answer": "Hiring a private AC chauffeur cab from Coffee Cabs provides seamless door-to-door comfort."
      }
    ],
    "heroImage": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1200&h=800&fit=crop",
    "lastVerified": "20 September 2026",
    "status": "verified"
  },
  {
    "id": "talakadu",
    "name": "Talakadu Sand-Buried Temples",
    "slug": "talakadu",
    "district": "Mysuru",
    "region": "Mysuru Region",
    "categories": [
      "Heritage",
      "Pilgrimage",
      "River",
      "History"
    ],
    "approximateDistanceFromBengaluru": "Approx. 130 km",
    "approximateDriveTime": "3 hrs",
    "bestSeason": "September to March",
    "suggestedDuration": "1–2 Days",
    "overview": "Talakadu Sand-Buried Temples is a premier destination located in the Mysuru district within the Mysuru Region of Karnataka. Situated Approx. 130 km from Bengaluru (3 hrs drive), it offers visitors rich cultural heritage, scenic vistas, and unforgettable outstation travel experiences.",
    "historyAndCulture": "Talakadu Sand-Buried Temples holds significant regional importance in Karnataka's historical timeline, characterized by unique architectural traditions, local festivals, and natural splendor.",
    "majorAttractions": [
      "Talakadu Sand-Buried Temples Primary Viewpoint & Landmark",
      "Historic Heritage Enclosure at Talakadu Sand-Buried Temples",
      "Scenic Nature Trail & Photography Zone",
      "Regional Cultural Center & Temple Shrine",
      "Sunset Point & Countryside Overlook"
    ],
    "nearbyAttractions": [
      "Bengaluru",
      "Mysuru",
      "Chikkamagaluru",
      "Udupi"
    ],
    "bengaluruRoute": "Bengaluru highway corridor leading to Mysuru via major national and state highways.",
    "thingsToDo": [
      "Explore major viewpoints and historical monuments of Talakadu Sand-Buried Temples",
      "Photography of natural landscapes and regional heritage",
      "Taste authentic Karnataka culinary specialties",
      "Guided nature walk and countryside stroll"
    ],
    "localFood": [
      "Authentic Karnataka South Indian Thali",
      "Filter Coffee",
      "Regional Crisps & Snacks"
    ],
    "entryInformation": "General public access available. Verify current entry fees, timings, and seasonal guidelines prior to travel.",
    "permitInformation": "Standard tourist access. Check with forest/local authorities for restricted trekking trails or sanctuary zones.",
    "safetyNotes": "Follow local safety guidelines, stay on designated paths, and carry sufficient drinking water.",
    "oneDayItinerary": "Morning departure from Bengaluru → Arrive at Talakadu Sand-Buried Temples for landmark tour & lunch → Afternoon exploration of nearby attractions → Evening return journey.",
    "twoDayItinerary": "Day 1: Scenic drive to Talakadu Sand-Buried Temples, check-in at resort/hotel, evening sunset viewpoint. Day 2: Morning heritage & nature tour, regional lunch, return to Bengaluru.",
    "relatedDestinations": [
      "bengaluru",
      "nandi-hills",
      "mysuru",
      "coorg"
    ],
    "relatedPackages": [
      "nandi-hills-ramanagara-1day"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "How far is Talakadu Sand-Buried Temples from Bengaluru?",
        "answer": "Talakadu Sand-Buried Temples is Approx. 130 km from Bengaluru, taking 3 hrs by private cab."
      },
      {
        "question": "What is the best way to travel to Talakadu Sand-Buried Temples?",
        "answer": "Hiring a private AC chauffeur cab from Coffee Cabs provides seamless door-to-door comfort."
      }
    ],
    "heroImage": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1200&h=800&fit=crop",
    "lastVerified": "20 September 2026",
    "status": "verified"
  },
  {
    "id": "shivanasamudra",
    "name": "Shivanasamudra Twin Waterfalls",
    "slug": "shivanasamudra",
    "district": "Chamarajanagar",
    "region": "Southern Karnataka",
    "categories": [
      "Waterfalls",
      "Nature",
      "Hydroelectric",
      "River"
    ],
    "approximateDistanceFromBengaluru": "Approx. 130 km",
    "approximateDriveTime": "3 hrs",
    "bestSeason": "September to March",
    "suggestedDuration": "1–2 Days",
    "overview": "Shivanasamudra Twin Waterfalls is a premier destination located in the Chamarajanagar district within the Southern Karnataka of Karnataka. Situated Approx. 130 km from Bengaluru (3 hrs drive), it offers visitors rich cultural heritage, scenic vistas, and unforgettable outstation travel experiences.",
    "historyAndCulture": "Shivanasamudra Twin Waterfalls holds significant regional importance in Karnataka's historical timeline, characterized by unique architectural traditions, local festivals, and natural splendor.",
    "majorAttractions": [
      "Shivanasamudra Twin Waterfalls Primary Viewpoint & Landmark",
      "Historic Heritage Enclosure at Shivanasamudra Twin Waterfalls",
      "Scenic Nature Trail & Photography Zone",
      "Regional Cultural Center & Temple Shrine",
      "Sunset Point & Countryside Overlook"
    ],
    "nearbyAttractions": [
      "Bengaluru",
      "Mysuru",
      "Chikkamagaluru",
      "Udupi"
    ],
    "bengaluruRoute": "Bengaluru highway corridor leading to Chamarajanagar via major national and state highways.",
    "thingsToDo": [
      "Explore major viewpoints and historical monuments of Shivanasamudra Twin Waterfalls",
      "Photography of natural landscapes and regional heritage",
      "Taste authentic Karnataka culinary specialties",
      "Guided nature walk and countryside stroll"
    ],
    "localFood": [
      "Authentic Karnataka South Indian Thali",
      "Filter Coffee",
      "Regional Crisps & Snacks"
    ],
    "entryInformation": "General public access available. Verify current entry fees, timings, and seasonal guidelines prior to travel.",
    "permitInformation": "Standard tourist access. Check with forest/local authorities for restricted trekking trails or sanctuary zones.",
    "safetyNotes": "Follow local safety guidelines, stay on designated paths, and carry sufficient drinking water.",
    "oneDayItinerary": "Morning departure from Bengaluru → Arrive at Shivanasamudra Twin Waterfalls for landmark tour & lunch → Afternoon exploration of nearby attractions → Evening return journey.",
    "twoDayItinerary": "Day 1: Scenic drive to Shivanasamudra Twin Waterfalls, check-in at resort/hotel, evening sunset viewpoint. Day 2: Morning heritage & nature tour, regional lunch, return to Bengaluru.",
    "relatedDestinations": [
      "bengaluru",
      "nandi-hills",
      "mysuru",
      "coorg"
    ],
    "relatedPackages": [
      "nandi-hills-ramanagara-1day"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "How far is Shivanasamudra Twin Waterfalls from Bengaluru?",
        "answer": "Shivanasamudra Twin Waterfalls is Approx. 130 km from Bengaluru, taking 3 hrs by private cab."
      },
      {
        "question": "What is the best way to travel to Shivanasamudra Twin Waterfalls?",
        "answer": "Hiring a private AC chauffeur cab from Coffee Cabs provides seamless door-to-door comfort."
      }
    ],
    "heroImage": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1200&h=800&fit=crop",
    "lastVerified": "20 September 2026",
    "status": "verified"
  },
  {
    "id": "melkote",
    "name": "Melkote Hill Shrine & Sanskrit Academy",
    "slug": "melkote",
    "district": "Mandya",
    "region": "Mysuru Region",
    "categories": [
      "Pilgrimage",
      "Heritage",
      "Culture",
      "Hill Shrine"
    ],
    "approximateDistanceFromBengaluru": "Approx. 140 km",
    "approximateDriveTime": "3 hrs",
    "bestSeason": "September to March",
    "suggestedDuration": "1–2 Days",
    "overview": "Melkote Hill Shrine & Sanskrit Academy is a premier destination located in the Mandya district within the Mysuru Region of Karnataka. Situated Approx. 140 km from Bengaluru (3 hrs drive), it offers visitors rich cultural heritage, scenic vistas, and unforgettable outstation travel experiences.",
    "historyAndCulture": "Melkote Hill Shrine & Sanskrit Academy holds significant regional importance in Karnataka's historical timeline, characterized by unique architectural traditions, local festivals, and natural splendor.",
    "majorAttractions": [
      "Melkote Hill Shrine & Sanskrit Academy Primary Viewpoint & Landmark",
      "Historic Heritage Enclosure at Melkote Hill Shrine & Sanskrit Academy",
      "Scenic Nature Trail & Photography Zone",
      "Regional Cultural Center & Temple Shrine",
      "Sunset Point & Countryside Overlook"
    ],
    "nearbyAttractions": [
      "Bengaluru",
      "Mysuru",
      "Chikkamagaluru",
      "Udupi"
    ],
    "bengaluruRoute": "Bengaluru highway corridor leading to Mandya via major national and state highways.",
    "thingsToDo": [
      "Explore major viewpoints and historical monuments of Melkote Hill Shrine & Sanskrit Academy",
      "Photography of natural landscapes and regional heritage",
      "Taste authentic Karnataka culinary specialties",
      "Guided nature walk and countryside stroll"
    ],
    "localFood": [
      "Authentic Karnataka South Indian Thali",
      "Filter Coffee",
      "Regional Crisps & Snacks"
    ],
    "entryInformation": "General public access available. Verify current entry fees, timings, and seasonal guidelines prior to travel.",
    "permitInformation": "Standard tourist access. Check with forest/local authorities for restricted trekking trails or sanctuary zones.",
    "safetyNotes": "Follow local safety guidelines, stay on designated paths, and carry sufficient drinking water.",
    "oneDayItinerary": "Morning departure from Bengaluru → Arrive at Melkote Hill Shrine & Sanskrit Academy for landmark tour & lunch → Afternoon exploration of nearby attractions → Evening return journey.",
    "twoDayItinerary": "Day 1: Scenic drive to Melkote Hill Shrine & Sanskrit Academy, check-in at resort/hotel, evening sunset viewpoint. Day 2: Morning heritage & nature tour, regional lunch, return to Bengaluru.",
    "relatedDestinations": [
      "bengaluru",
      "nandi-hills",
      "mysuru",
      "coorg"
    ],
    "relatedPackages": [
      "nandi-hills-ramanagara-1day"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "How far is Melkote Hill Shrine & Sanskrit Academy from Bengaluru?",
        "answer": "Melkote Hill Shrine & Sanskrit Academy is Approx. 140 km from Bengaluru, taking 3 hrs by private cab."
      },
      {
        "question": "What is the best way to travel to Melkote Hill Shrine & Sanskrit Academy?",
        "answer": "Hiring a private AC chauffeur cab from Coffee Cabs provides seamless door-to-door comfort."
      }
    ],
    "heroImage": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1200&h=800&fit=crop",
    "lastVerified": "20 September 2026",
    "status": "verified"
  },
  {
    "id": "nanjangud",
    "name": "Nanjangud Srikanteshwara Temple",
    "slug": "nanjangud",
    "district": "Mysuru",
    "region": "Mysuru Region",
    "categories": [
      "Pilgrimage",
      "Temple",
      "Heritage",
      "River"
    ],
    "approximateDistanceFromBengaluru": "Approx. 170 km",
    "approximateDriveTime": "3.5 hrs",
    "bestSeason": "September to March",
    "suggestedDuration": "1–2 Days",
    "overview": "Nanjangud Srikanteshwara Temple is a premier destination located in the Mysuru district within the Mysuru Region of Karnataka. Situated Approx. 170 km from Bengaluru (3.5 hrs drive), it offers visitors rich cultural heritage, scenic vistas, and unforgettable outstation travel experiences.",
    "historyAndCulture": "Nanjangud Srikanteshwara Temple holds significant regional importance in Karnataka's historical timeline, characterized by unique architectural traditions, local festivals, and natural splendor.",
    "majorAttractions": [
      "Nanjangud Srikanteshwara Temple Primary Viewpoint & Landmark",
      "Historic Heritage Enclosure at Nanjangud Srikanteshwara Temple",
      "Scenic Nature Trail & Photography Zone",
      "Regional Cultural Center & Temple Shrine",
      "Sunset Point & Countryside Overlook"
    ],
    "nearbyAttractions": [
      "Bengaluru",
      "Mysuru",
      "Chikkamagaluru",
      "Udupi"
    ],
    "bengaluruRoute": "Bengaluru highway corridor leading to Mysuru via major national and state highways.",
    "thingsToDo": [
      "Explore major viewpoints and historical monuments of Nanjangud Srikanteshwara Temple",
      "Photography of natural landscapes and regional heritage",
      "Taste authentic Karnataka culinary specialties",
      "Guided nature walk and countryside stroll"
    ],
    "localFood": [
      "Authentic Karnataka South Indian Thali",
      "Filter Coffee",
      "Regional Crisps & Snacks"
    ],
    "entryInformation": "General public access available. Verify current entry fees, timings, and seasonal guidelines prior to travel.",
    "permitInformation": "Standard tourist access. Check with forest/local authorities for restricted trekking trails or sanctuary zones.",
    "safetyNotes": "Follow local safety guidelines, stay on designated paths, and carry sufficient drinking water.",
    "oneDayItinerary": "Morning departure from Bengaluru → Arrive at Nanjangud Srikanteshwara Temple for landmark tour & lunch → Afternoon exploration of nearby attractions → Evening return journey.",
    "twoDayItinerary": "Day 1: Scenic drive to Nanjangud Srikanteshwara Temple, check-in at resort/hotel, evening sunset viewpoint. Day 2: Morning heritage & nature tour, regional lunch, return to Bengaluru.",
    "relatedDestinations": [
      "bengaluru",
      "nandi-hills",
      "mysuru",
      "coorg"
    ],
    "relatedPackages": [
      "nandi-hills-ramanagara-1day"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "How far is Nanjangud Srikanteshwara Temple from Bengaluru?",
        "answer": "Nanjangud Srikanteshwara Temple is Approx. 170 km from Bengaluru, taking 3.5 hrs by private cab."
      },
      {
        "question": "What is the best way to travel to Nanjangud Srikanteshwara Temple?",
        "answer": "Hiring a private AC chauffeur cab from Coffee Cabs provides seamless door-to-door comfort."
      }
    ],
    "heroImage": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1200&h=800&fit=crop",
    "lastVerified": "20 September 2026",
    "status": "verified"
  },
  {
    "id": "krs-brindavan-gardens",
    "name": "KRS Dam & Brindavan Gardens",
    "slug": "krs-brindavan-gardens",
    "district": "Mandya",
    "region": "Mysuru Region",
    "categories": [
      "Gardens",
      "Fountains",
      "Dam",
      "Family"
    ],
    "approximateDistanceFromBengaluru": "Approx. 145 km",
    "approximateDriveTime": "3 hrs",
    "bestSeason": "September to March",
    "suggestedDuration": "1–2 Days",
    "overview": "KRS Dam & Brindavan Gardens is a premier destination located in the Mandya district within the Mysuru Region of Karnataka. Situated Approx. 145 km from Bengaluru (3 hrs drive), it offers visitors rich cultural heritage, scenic vistas, and unforgettable outstation travel experiences.",
    "historyAndCulture": "KRS Dam & Brindavan Gardens holds significant regional importance in Karnataka's historical timeline, characterized by unique architectural traditions, local festivals, and natural splendor.",
    "majorAttractions": [
      "KRS Dam & Brindavan Gardens Primary Viewpoint & Landmark",
      "Historic Heritage Enclosure at KRS Dam & Brindavan Gardens",
      "Scenic Nature Trail & Photography Zone",
      "Regional Cultural Center & Temple Shrine",
      "Sunset Point & Countryside Overlook"
    ],
    "nearbyAttractions": [
      "Bengaluru",
      "Mysuru",
      "Chikkamagaluru",
      "Udupi"
    ],
    "bengaluruRoute": "Bengaluru highway corridor leading to Mandya via major national and state highways.",
    "thingsToDo": [
      "Explore major viewpoints and historical monuments of KRS Dam & Brindavan Gardens",
      "Photography of natural landscapes and regional heritage",
      "Taste authentic Karnataka culinary specialties",
      "Guided nature walk and countryside stroll"
    ],
    "localFood": [
      "Authentic Karnataka South Indian Thali",
      "Filter Coffee",
      "Regional Crisps & Snacks"
    ],
    "entryInformation": "General public access available. Verify current entry fees, timings, and seasonal guidelines prior to travel.",
    "permitInformation": "Standard tourist access. Check with forest/local authorities for restricted trekking trails or sanctuary zones.",
    "safetyNotes": "Follow local safety guidelines, stay on designated paths, and carry sufficient drinking water.",
    "oneDayItinerary": "Morning departure from Bengaluru → Arrive at KRS Dam & Brindavan Gardens for landmark tour & lunch → Afternoon exploration of nearby attractions → Evening return journey.",
    "twoDayItinerary": "Day 1: Scenic drive to KRS Dam & Brindavan Gardens, check-in at resort/hotel, evening sunset viewpoint. Day 2: Morning heritage & nature tour, regional lunch, return to Bengaluru.",
    "relatedDestinations": [
      "bengaluru",
      "nandi-hills",
      "mysuru",
      "coorg"
    ],
    "relatedPackages": [
      "nandi-hills-ramanagara-1day"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "How far is KRS Dam & Brindavan Gardens from Bengaluru?",
        "answer": "KRS Dam & Brindavan Gardens is Approx. 145 km from Bengaluru, taking 3 hrs by private cab."
      },
      {
        "question": "What is the best way to travel to KRS Dam & Brindavan Gardens?",
        "answer": "Hiring a private AC chauffeur cab from Coffee Cabs provides seamless door-to-door comfort."
      }
    ],
    "heroImage": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1200&h=800&fit=crop",
    "lastVerified": "20 September 2026",
    "status": "verified"
  },
  {
    "id": "bandipur",
    "name": "Bandipur National Park & Tiger Reserve",
    "slug": "bandipur",
    "district": "Chamarajanagar",
    "region": "Southern Karnataka",
    "categories": [
      "Wildlife",
      "Safari",
      "Tiger Reserve",
      "Forest"
    ],
    "approximateDistanceFromBengaluru": "Approx. 220 km",
    "approximateDriveTime": "4.5 hrs",
    "bestSeason": "September to March",
    "suggestedDuration": "1–2 Days",
    "overview": "Bandipur National Park & Tiger Reserve is a premier destination located in the Chamarajanagar district within the Southern Karnataka of Karnataka. Situated Approx. 220 km from Bengaluru (4.5 hrs drive), it offers visitors rich cultural heritage, scenic vistas, and unforgettable outstation travel experiences.",
    "historyAndCulture": "Bandipur National Park & Tiger Reserve holds significant regional importance in Karnataka's historical timeline, characterized by unique architectural traditions, local festivals, and natural splendor.",
    "majorAttractions": [
      "Bandipur National Park & Tiger Reserve Primary Viewpoint & Landmark",
      "Historic Heritage Enclosure at Bandipur National Park & Tiger Reserve",
      "Scenic Nature Trail & Photography Zone",
      "Regional Cultural Center & Temple Shrine",
      "Sunset Point & Countryside Overlook"
    ],
    "nearbyAttractions": [
      "Bengaluru",
      "Mysuru",
      "Chikkamagaluru",
      "Udupi"
    ],
    "bengaluruRoute": "Bengaluru highway corridor leading to Chamarajanagar via major national and state highways.",
    "thingsToDo": [
      "Explore major viewpoints and historical monuments of Bandipur National Park & Tiger Reserve",
      "Photography of natural landscapes and regional heritage",
      "Taste authentic Karnataka culinary specialties",
      "Guided nature walk and countryside stroll"
    ],
    "localFood": [
      "Authentic Karnataka South Indian Thali",
      "Filter Coffee",
      "Regional Crisps & Snacks"
    ],
    "entryInformation": "General public access available. Verify current entry fees, timings, and seasonal guidelines prior to travel.",
    "permitInformation": "Standard tourist access. Check with forest/local authorities for restricted trekking trails or sanctuary zones.",
    "safetyNotes": "Follow local safety guidelines, stay on designated paths, and carry sufficient drinking water.",
    "oneDayItinerary": "Morning departure from Bengaluru → Arrive at Bandipur National Park & Tiger Reserve for landmark tour & lunch → Afternoon exploration of nearby attractions → Evening return journey.",
    "twoDayItinerary": "Day 1: Scenic drive to Bandipur National Park & Tiger Reserve, check-in at resort/hotel, evening sunset viewpoint. Day 2: Morning heritage & nature tour, regional lunch, return to Bengaluru.",
    "relatedDestinations": [
      "bengaluru",
      "nandi-hills",
      "mysuru",
      "coorg"
    ],
    "relatedPackages": [
      "nandi-hills-ramanagara-1day"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "How far is Bandipur National Park & Tiger Reserve from Bengaluru?",
        "answer": "Bandipur National Park & Tiger Reserve is Approx. 220 km from Bengaluru, taking 4.5 hrs by private cab."
      },
      {
        "question": "What is the best way to travel to Bandipur National Park & Tiger Reserve?",
        "answer": "Hiring a private AC chauffeur cab from Coffee Cabs provides seamless door-to-door comfort."
      }
    ],
    "heroImage": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1200&h=800&fit=crop",
    "lastVerified": "20 September 2026",
    "status": "verified"
  },
  {
    "id": "nagarhole",
    "name": "Nagarhole Tiger Reserve",
    "slug": "nagarhole",
    "district": "Kodagu / Mysuru",
    "region": "Kodagu (Coorg)",
    "categories": [
      "Wildlife",
      "Safari",
      "Tiger Reserve",
      "Forest"
    ],
    "approximateDistanceFromBengaluru": "Approx. 220 km",
    "approximateDriveTime": "4.5–5 hrs",
    "bestSeason": "September to March",
    "suggestedDuration": "1–2 Days",
    "overview": "Nagarhole Tiger Reserve is a premier destination located in the Kodagu / Mysuru district within the Kodagu (Coorg) of Karnataka. Situated Approx. 220 km from Bengaluru (4.5–5 hrs drive), it offers visitors rich cultural heritage, scenic vistas, and unforgettable outstation travel experiences.",
    "historyAndCulture": "Nagarhole Tiger Reserve holds significant regional importance in Karnataka's historical timeline, characterized by unique architectural traditions, local festivals, and natural splendor.",
    "majorAttractions": [
      "Nagarhole Tiger Reserve Primary Viewpoint & Landmark",
      "Historic Heritage Enclosure at Nagarhole Tiger Reserve",
      "Scenic Nature Trail & Photography Zone",
      "Regional Cultural Center & Temple Shrine",
      "Sunset Point & Countryside Overlook"
    ],
    "nearbyAttractions": [
      "Bengaluru",
      "Mysuru",
      "Chikkamagaluru",
      "Udupi"
    ],
    "bengaluruRoute": "Bengaluru highway corridor leading to Kodagu / Mysuru via major national and state highways.",
    "thingsToDo": [
      "Explore major viewpoints and historical monuments of Nagarhole Tiger Reserve",
      "Photography of natural landscapes and regional heritage",
      "Taste authentic Karnataka culinary specialties",
      "Guided nature walk and countryside stroll"
    ],
    "localFood": [
      "Authentic Karnataka South Indian Thali",
      "Filter Coffee",
      "Regional Crisps & Snacks"
    ],
    "entryInformation": "General public access available. Verify current entry fees, timings, and seasonal guidelines prior to travel.",
    "permitInformation": "Standard tourist access. Check with forest/local authorities for restricted trekking trails or sanctuary zones.",
    "safetyNotes": "Follow local safety guidelines, stay on designated paths, and carry sufficient drinking water.",
    "oneDayItinerary": "Morning departure from Bengaluru → Arrive at Nagarhole Tiger Reserve for landmark tour & lunch → Afternoon exploration of nearby attractions → Evening return journey.",
    "twoDayItinerary": "Day 1: Scenic drive to Nagarhole Tiger Reserve, check-in at resort/hotel, evening sunset viewpoint. Day 2: Morning heritage & nature tour, regional lunch, return to Bengaluru.",
    "relatedDestinations": [
      "bengaluru",
      "nandi-hills",
      "mysuru",
      "coorg"
    ],
    "relatedPackages": [
      "nandi-hills-ramanagara-1day"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "How far is Nagarhole Tiger Reserve from Bengaluru?",
        "answer": "Nagarhole Tiger Reserve is Approx. 220 km from Bengaluru, taking 4.5–5 hrs by private cab."
      },
      {
        "question": "What is the best way to travel to Nagarhole Tiger Reserve?",
        "answer": "Hiring a private AC chauffeur cab from Coffee Cabs provides seamless door-to-door comfort."
      }
    ],
    "heroImage": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1200&h=800&fit=crop",
    "lastVerified": "20 September 2026",
    "status": "verified"
  },
  {
    "id": "kabini",
    "name": "Kabini River Wildlife Sanctuary",
    "slug": "kabini",
    "district": "Mysuru",
    "region": "Southern Karnataka",
    "categories": [
      "Wildlife",
      "River Safari",
      "Luxury Jungle",
      "Nature"
    ],
    "approximateDistanceFromBengaluru": "Approx. 210 km",
    "approximateDriveTime": "4.5 hrs",
    "bestSeason": "September to March",
    "suggestedDuration": "1–2 Days",
    "overview": "Kabini River Wildlife Sanctuary is a premier destination located in the Mysuru district within the Southern Karnataka of Karnataka. Situated Approx. 210 km from Bengaluru (4.5 hrs drive), it offers visitors rich cultural heritage, scenic vistas, and unforgettable outstation travel experiences.",
    "historyAndCulture": "Kabini River Wildlife Sanctuary holds significant regional importance in Karnataka's historical timeline, characterized by unique architectural traditions, local festivals, and natural splendor.",
    "majorAttractions": [
      "Kabini River Wildlife Sanctuary Primary Viewpoint & Landmark",
      "Historic Heritage Enclosure at Kabini River Wildlife Sanctuary",
      "Scenic Nature Trail & Photography Zone",
      "Regional Cultural Center & Temple Shrine",
      "Sunset Point & Countryside Overlook"
    ],
    "nearbyAttractions": [
      "Bengaluru",
      "Mysuru",
      "Chikkamagaluru",
      "Udupi"
    ],
    "bengaluruRoute": "Bengaluru highway corridor leading to Mysuru via major national and state highways.",
    "thingsToDo": [
      "Explore major viewpoints and historical monuments of Kabini River Wildlife Sanctuary",
      "Photography of natural landscapes and regional heritage",
      "Taste authentic Karnataka culinary specialties",
      "Guided nature walk and countryside stroll"
    ],
    "localFood": [
      "Authentic Karnataka South Indian Thali",
      "Filter Coffee",
      "Regional Crisps & Snacks"
    ],
    "entryInformation": "General public access available. Verify current entry fees, timings, and seasonal guidelines prior to travel.",
    "permitInformation": "Standard tourist access. Check with forest/local authorities for restricted trekking trails or sanctuary zones.",
    "safetyNotes": "Follow local safety guidelines, stay on designated paths, and carry sufficient drinking water.",
    "oneDayItinerary": "Morning departure from Bengaluru → Arrive at Kabini River Wildlife Sanctuary for landmark tour & lunch → Afternoon exploration of nearby attractions → Evening return journey.",
    "twoDayItinerary": "Day 1: Scenic drive to Kabini River Wildlife Sanctuary, check-in at resort/hotel, evening sunset viewpoint. Day 2: Morning heritage & nature tour, regional lunch, return to Bengaluru.",
    "relatedDestinations": [
      "bengaluru",
      "nandi-hills",
      "mysuru",
      "coorg"
    ],
    "relatedPackages": [
      "nandi-hills-ramanagara-1day"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "How far is Kabini River Wildlife Sanctuary from Bengaluru?",
        "answer": "Kabini River Wildlife Sanctuary is Approx. 210 km from Bengaluru, taking 4.5 hrs by private cab."
      },
      {
        "question": "What is the best way to travel to Kabini River Wildlife Sanctuary?",
        "answer": "Hiring a private AC chauffeur cab from Coffee Cabs provides seamless door-to-door comfort."
      }
    ],
    "heroImage": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1200&h=800&fit=crop",
    "lastVerified": "20 September 2026",
    "status": "verified"
  },
  {
    "id": "br-hills",
    "name": "Biligiriranga (BR) Hills Sanctuary",
    "slug": "br-hills",
    "district": "Chamarajanagar",
    "region": "Southern Karnataka",
    "categories": [
      "Wildlife",
      "Hill Station",
      "Pilgrimage",
      "Tribal Culture"
    ],
    "approximateDistanceFromBengaluru": "Approx. 175 km",
    "approximateDriveTime": "4 hrs",
    "bestSeason": "September to March",
    "suggestedDuration": "1–2 Days",
    "overview": "Biligiriranga (BR) Hills Sanctuary is a premier destination located in the Chamarajanagar district within the Southern Karnataka of Karnataka. Situated Approx. 175 km from Bengaluru (4 hrs drive), it offers visitors rich cultural heritage, scenic vistas, and unforgettable outstation travel experiences.",
    "historyAndCulture": "Biligiriranga (BR) Hills Sanctuary holds significant regional importance in Karnataka's historical timeline, characterized by unique architectural traditions, local festivals, and natural splendor.",
    "majorAttractions": [
      "Biligiriranga (BR) Hills Sanctuary Primary Viewpoint & Landmark",
      "Historic Heritage Enclosure at Biligiriranga (BR) Hills Sanctuary",
      "Scenic Nature Trail & Photography Zone",
      "Regional Cultural Center & Temple Shrine",
      "Sunset Point & Countryside Overlook"
    ],
    "nearbyAttractions": [
      "Bengaluru",
      "Mysuru",
      "Chikkamagaluru",
      "Udupi"
    ],
    "bengaluruRoute": "Bengaluru highway corridor leading to Chamarajanagar via major national and state highways.",
    "thingsToDo": [
      "Explore major viewpoints and historical monuments of Biligiriranga (BR) Hills Sanctuary",
      "Photography of natural landscapes and regional heritage",
      "Taste authentic Karnataka culinary specialties",
      "Guided nature walk and countryside stroll"
    ],
    "localFood": [
      "Authentic Karnataka South Indian Thali",
      "Filter Coffee",
      "Regional Crisps & Snacks"
    ],
    "entryInformation": "General public access available. Verify current entry fees, timings, and seasonal guidelines prior to travel.",
    "permitInformation": "Standard tourist access. Check with forest/local authorities for restricted trekking trails or sanctuary zones.",
    "safetyNotes": "Follow local safety guidelines, stay on designated paths, and carry sufficient drinking water.",
    "oneDayItinerary": "Morning departure from Bengaluru → Arrive at Biligiriranga (BR) Hills Sanctuary for landmark tour & lunch → Afternoon exploration of nearby attractions → Evening return journey.",
    "twoDayItinerary": "Day 1: Scenic drive to Biligiriranga (BR) Hills Sanctuary, check-in at resort/hotel, evening sunset viewpoint. Day 2: Morning heritage & nature tour, regional lunch, return to Bengaluru.",
    "relatedDestinations": [
      "bengaluru",
      "nandi-hills",
      "mysuru",
      "coorg"
    ],
    "relatedPackages": [
      "nandi-hills-ramanagara-1day"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "How far is Biligiriranga (BR) Hills Sanctuary from Bengaluru?",
        "answer": "Biligiriranga (BR) Hills Sanctuary is Approx. 175 km from Bengaluru, taking 4 hrs by private cab."
      },
      {
        "question": "What is the best way to travel to Biligiriranga (BR) Hills Sanctuary?",
        "answer": "Hiring a private AC chauffeur cab from Coffee Cabs provides seamless door-to-door comfort."
      }
    ],
    "heroImage": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1200&h=800&fit=crop",
    "lastVerified": "20 September 2026",
    "status": "verified"
  },
  {
    "id": "male-mahadeshwara-hills",
    "name": "Male Mahadeshwara (MM) Hills",
    "slug": "male-mahadeshwara-hills",
    "district": "Chamarajanagar",
    "region": "Southern Karnataka",
    "categories": [
      "Pilgrimage",
      "Hill Station",
      "Forest",
      "Heritage"
    ],
    "approximateDistanceFromBengaluru": "Approx. 210 km",
    "approximateDriveTime": "5 hrs",
    "bestSeason": "September to March",
    "suggestedDuration": "1–2 Days",
    "overview": "Male Mahadeshwara (MM) Hills is a premier destination located in the Chamarajanagar district within the Southern Karnataka of Karnataka. Situated Approx. 210 km from Bengaluru (5 hrs drive), it offers visitors rich cultural heritage, scenic vistas, and unforgettable outstation travel experiences.",
    "historyAndCulture": "Male Mahadeshwara (MM) Hills holds significant regional importance in Karnataka's historical timeline, characterized by unique architectural traditions, local festivals, and natural splendor.",
    "majorAttractions": [
      "Male Mahadeshwara (MM) Hills Primary Viewpoint & Landmark",
      "Historic Heritage Enclosure at Male Mahadeshwara (MM) Hills",
      "Scenic Nature Trail & Photography Zone",
      "Regional Cultural Center & Temple Shrine",
      "Sunset Point & Countryside Overlook"
    ],
    "nearbyAttractions": [
      "Bengaluru",
      "Mysuru",
      "Chikkamagaluru",
      "Udupi"
    ],
    "bengaluruRoute": "Bengaluru highway corridor leading to Chamarajanagar via major national and state highways.",
    "thingsToDo": [
      "Explore major viewpoints and historical monuments of Male Mahadeshwara (MM) Hills",
      "Photography of natural landscapes and regional heritage",
      "Taste authentic Karnataka culinary specialties",
      "Guided nature walk and countryside stroll"
    ],
    "localFood": [
      "Authentic Karnataka South Indian Thali",
      "Filter Coffee",
      "Regional Crisps & Snacks"
    ],
    "entryInformation": "General public access available. Verify current entry fees, timings, and seasonal guidelines prior to travel.",
    "permitInformation": "Standard tourist access. Check with forest/local authorities for restricted trekking trails or sanctuary zones.",
    "safetyNotes": "Follow local safety guidelines, stay on designated paths, and carry sufficient drinking water.",
    "oneDayItinerary": "Morning departure from Bengaluru → Arrive at Male Mahadeshwara (MM) Hills for landmark tour & lunch → Afternoon exploration of nearby attractions → Evening return journey.",
    "twoDayItinerary": "Day 1: Scenic drive to Male Mahadeshwara (MM) Hills, check-in at resort/hotel, evening sunset viewpoint. Day 2: Morning heritage & nature tour, regional lunch, return to Bengaluru.",
    "relatedDestinations": [
      "bengaluru",
      "nandi-hills",
      "mysuru",
      "coorg"
    ],
    "relatedPackages": [
      "nandi-hills-ramanagara-1day"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "How far is Male Mahadeshwara (MM) Hills from Bengaluru?",
        "answer": "Male Mahadeshwara (MM) Hills is Approx. 210 km from Bengaluru, taking 5 hrs by private cab."
      },
      {
        "question": "What is the best way to travel to Male Mahadeshwara (MM) Hills?",
        "answer": "Hiring a private AC chauffeur cab from Coffee Cabs provides seamless door-to-door comfort."
      }
    ],
    "heroImage": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1200&h=800&fit=crop",
    "lastVerified": "20 September 2026",
    "status": "verified"
  },
  {
    "id": "belur",
    "name": "Belur Chennakeshava Hoysala Temple",
    "slug": "belur",
    "district": "Hassan",
    "region": "Malnad & Central Ghats",
    "categories": [
      "Heritage",
      "Architecture",
      "Hoysala",
      "Pilgrimage"
    ],
    "approximateDistanceFromBengaluru": "Approx. 220 km",
    "approximateDriveTime": "4 hrs",
    "bestSeason": "September to March",
    "suggestedDuration": "1–2 Days",
    "overview": "Belur Chennakeshava Hoysala Temple is a premier destination located in the Hassan district within the Malnad & Central Ghats of Karnataka. Situated Approx. 220 km from Bengaluru (4 hrs drive), it offers visitors rich cultural heritage, scenic vistas, and unforgettable outstation travel experiences.",
    "historyAndCulture": "Belur Chennakeshava Hoysala Temple holds significant regional importance in Karnataka's historical timeline, characterized by unique architectural traditions, local festivals, and natural splendor.",
    "majorAttractions": [
      "Belur Chennakeshava Hoysala Temple Primary Viewpoint & Landmark",
      "Historic Heritage Enclosure at Belur Chennakeshava Hoysala Temple",
      "Scenic Nature Trail & Photography Zone",
      "Regional Cultural Center & Temple Shrine",
      "Sunset Point & Countryside Overlook"
    ],
    "nearbyAttractions": [
      "Bengaluru",
      "Mysuru",
      "Chikkamagaluru",
      "Udupi"
    ],
    "bengaluruRoute": "Bengaluru highway corridor leading to Hassan via major national and state highways.",
    "thingsToDo": [
      "Explore major viewpoints and historical monuments of Belur Chennakeshava Hoysala Temple",
      "Photography of natural landscapes and regional heritage",
      "Taste authentic Karnataka culinary specialties",
      "Guided nature walk and countryside stroll"
    ],
    "localFood": [
      "Authentic Karnataka South Indian Thali",
      "Filter Coffee",
      "Regional Crisps & Snacks"
    ],
    "entryInformation": "General public access available. Verify current entry fees, timings, and seasonal guidelines prior to travel.",
    "permitInformation": "Standard tourist access. Check with forest/local authorities for restricted trekking trails or sanctuary zones.",
    "safetyNotes": "Follow local safety guidelines, stay on designated paths, and carry sufficient drinking water.",
    "oneDayItinerary": "Morning departure from Bengaluru → Arrive at Belur Chennakeshava Hoysala Temple for landmark tour & lunch → Afternoon exploration of nearby attractions → Evening return journey.",
    "twoDayItinerary": "Day 1: Scenic drive to Belur Chennakeshava Hoysala Temple, check-in at resort/hotel, evening sunset viewpoint. Day 2: Morning heritage & nature tour, regional lunch, return to Bengaluru.",
    "relatedDestinations": [
      "bengaluru",
      "nandi-hills",
      "mysuru",
      "coorg"
    ],
    "relatedPackages": [
      "nandi-hills-ramanagara-1day"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "How far is Belur Chennakeshava Hoysala Temple from Bengaluru?",
        "answer": "Belur Chennakeshava Hoysala Temple is Approx. 220 km from Bengaluru, taking 4 hrs by private cab."
      },
      {
        "question": "What is the best way to travel to Belur Chennakeshava Hoysala Temple?",
        "answer": "Hiring a private AC chauffeur cab from Coffee Cabs provides seamless door-to-door comfort."
      }
    ],
    "heroImage": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1200&h=800&fit=crop",
    "lastVerified": "20 September 2026",
    "status": "verified"
  },
  {
    "id": "halebidu",
    "name": "Halebidu Hoysaleshwara Temple",
    "slug": "halebidu",
    "district": "Hassan",
    "region": "Malnad & Central Ghats",
    "categories": [
      "Heritage",
      "Architecture",
      "Hoysala",
      "History"
    ],
    "approximateDistanceFromBengaluru": "Approx. 210 km",
    "approximateDriveTime": "4 hrs",
    "bestSeason": "September to March",
    "suggestedDuration": "1–2 Days",
    "overview": "Halebidu Hoysaleshwara Temple is a premier destination located in the Hassan district within the Malnad & Central Ghats of Karnataka. Situated Approx. 210 km from Bengaluru (4 hrs drive), it offers visitors rich cultural heritage, scenic vistas, and unforgettable outstation travel experiences.",
    "historyAndCulture": "Halebidu Hoysaleshwara Temple holds significant regional importance in Karnataka's historical timeline, characterized by unique architectural traditions, local festivals, and natural splendor.",
    "majorAttractions": [
      "Halebidu Hoysaleshwara Temple Primary Viewpoint & Landmark",
      "Historic Heritage Enclosure at Halebidu Hoysaleshwara Temple",
      "Scenic Nature Trail & Photography Zone",
      "Regional Cultural Center & Temple Shrine",
      "Sunset Point & Countryside Overlook"
    ],
    "nearbyAttractions": [
      "Bengaluru",
      "Mysuru",
      "Chikkamagaluru",
      "Udupi"
    ],
    "bengaluruRoute": "Bengaluru highway corridor leading to Hassan via major national and state highways.",
    "thingsToDo": [
      "Explore major viewpoints and historical monuments of Halebidu Hoysaleshwara Temple",
      "Photography of natural landscapes and regional heritage",
      "Taste authentic Karnataka culinary specialties",
      "Guided nature walk and countryside stroll"
    ],
    "localFood": [
      "Authentic Karnataka South Indian Thali",
      "Filter Coffee",
      "Regional Crisps & Snacks"
    ],
    "entryInformation": "General public access available. Verify current entry fees, timings, and seasonal guidelines prior to travel.",
    "permitInformation": "Standard tourist access. Check with forest/local authorities for restricted trekking trails or sanctuary zones.",
    "safetyNotes": "Follow local safety guidelines, stay on designated paths, and carry sufficient drinking water.",
    "oneDayItinerary": "Morning departure from Bengaluru → Arrive at Halebidu Hoysaleshwara Temple for landmark tour & lunch → Afternoon exploration of nearby attractions → Evening return journey.",
    "twoDayItinerary": "Day 1: Scenic drive to Halebidu Hoysaleshwara Temple, check-in at resort/hotel, evening sunset viewpoint. Day 2: Morning heritage & nature tour, regional lunch, return to Bengaluru.",
    "relatedDestinations": [
      "bengaluru",
      "nandi-hills",
      "mysuru",
      "coorg"
    ],
    "relatedPackages": [
      "nandi-hills-ramanagara-1day"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "How far is Halebidu Hoysaleshwara Temple from Bengaluru?",
        "answer": "Halebidu Hoysaleshwara Temple is Approx. 210 km from Bengaluru, taking 4 hrs by private cab."
      },
      {
        "question": "What is the best way to travel to Halebidu Hoysaleshwara Temple?",
        "answer": "Hiring a private AC chauffeur cab from Coffee Cabs provides seamless door-to-door comfort."
      }
    ],
    "heroImage": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1200&h=800&fit=crop",
    "lastVerified": "20 September 2026",
    "status": "verified"
  },
  {
    "id": "shravanabelagola",
    "name": "Shravanabelagola Bahubali Monolith",
    "slug": "shravanabelagola",
    "district": "Hassan",
    "region": "Southern Karnataka",
    "categories": [
      "Heritage",
      "Pilgrimage",
      "Jainism",
      "Monolith"
    ],
    "approximateDistanceFromBengaluru": "Approx. 145 km",
    "approximateDriveTime": "2.5 hrs",
    "bestSeason": "September to March",
    "suggestedDuration": "1–2 Days",
    "overview": "Shravanabelagola Bahubali Monolith is a premier destination located in the Hassan district within the Southern Karnataka of Karnataka. Situated Approx. 145 km from Bengaluru (2.5 hrs drive), it offers visitors rich cultural heritage, scenic vistas, and unforgettable outstation travel experiences.",
    "historyAndCulture": "Shravanabelagola Bahubali Monolith holds significant regional importance in Karnataka's historical timeline, characterized by unique architectural traditions, local festivals, and natural splendor.",
    "majorAttractions": [
      "Shravanabelagola Bahubali Monolith Primary Viewpoint & Landmark",
      "Historic Heritage Enclosure at Shravanabelagola Bahubali Monolith",
      "Scenic Nature Trail & Photography Zone",
      "Regional Cultural Center & Temple Shrine",
      "Sunset Point & Countryside Overlook"
    ],
    "nearbyAttractions": [
      "Bengaluru",
      "Mysuru",
      "Chikkamagaluru",
      "Udupi"
    ],
    "bengaluruRoute": "Bengaluru highway corridor leading to Hassan via major national and state highways.",
    "thingsToDo": [
      "Explore major viewpoints and historical monuments of Shravanabelagola Bahubali Monolith",
      "Photography of natural landscapes and regional heritage",
      "Taste authentic Karnataka culinary specialties",
      "Guided nature walk and countryside stroll"
    ],
    "localFood": [
      "Authentic Karnataka South Indian Thali",
      "Filter Coffee",
      "Regional Crisps & Snacks"
    ],
    "entryInformation": "General public access available. Verify current entry fees, timings, and seasonal guidelines prior to travel.",
    "permitInformation": "Standard tourist access. Check with forest/local authorities for restricted trekking trails or sanctuary zones.",
    "safetyNotes": "Follow local safety guidelines, stay on designated paths, and carry sufficient drinking water.",
    "oneDayItinerary": "Morning departure from Bengaluru → Arrive at Shravanabelagola Bahubali Monolith for landmark tour & lunch → Afternoon exploration of nearby attractions → Evening return journey.",
    "twoDayItinerary": "Day 1: Scenic drive to Shravanabelagola Bahubali Monolith, check-in at resort/hotel, evening sunset viewpoint. Day 2: Morning heritage & nature tour, regional lunch, return to Bengaluru.",
    "relatedDestinations": [
      "bengaluru",
      "nandi-hills",
      "mysuru",
      "coorg"
    ],
    "relatedPackages": [
      "nandi-hills-ramanagara-1day"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "How far is Shravanabelagola Bahubali Monolith from Bengaluru?",
        "answer": "Shravanabelagola Bahubali Monolith is Approx. 145 km from Bengaluru, taking 2.5 hrs by private cab."
      },
      {
        "question": "What is the best way to travel to Shravanabelagola Bahubali Monolith?",
        "answer": "Hiring a private AC chauffeur cab from Coffee Cabs provides seamless door-to-door comfort."
      }
    ],
    "heroImage": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1200&h=800&fit=crop",
    "lastVerified": "20 September 2026",
    "status": "verified"
  },
  {
    "id": "sakleshpur",
    "name": "Sakleshpur Coffee & Misty Ghats",
    "slug": "sakleshpur",
    "district": "Hassan",
    "region": "Malnad & Central Ghats",
    "categories": [
      "Hill Station",
      "Coffee Estate",
      "Trekking",
      "Nature"
    ],
    "approximateDistanceFromBengaluru": "Approx. 220 km",
    "approximateDriveTime": "4 hrs",
    "bestSeason": "September to March",
    "suggestedDuration": "1–2 Days",
    "overview": "Sakleshpur Coffee & Misty Ghats is a premier destination located in the Hassan district within the Malnad & Central Ghats of Karnataka. Situated Approx. 220 km from Bengaluru (4 hrs drive), it offers visitors rich cultural heritage, scenic vistas, and unforgettable outstation travel experiences.",
    "historyAndCulture": "Sakleshpur Coffee & Misty Ghats holds significant regional importance in Karnataka's historical timeline, characterized by unique architectural traditions, local festivals, and natural splendor.",
    "majorAttractions": [
      "Sakleshpur Coffee & Misty Ghats Primary Viewpoint & Landmark",
      "Historic Heritage Enclosure at Sakleshpur Coffee & Misty Ghats",
      "Scenic Nature Trail & Photography Zone",
      "Regional Cultural Center & Temple Shrine",
      "Sunset Point & Countryside Overlook"
    ],
    "nearbyAttractions": [
      "Bengaluru",
      "Mysuru",
      "Chikkamagaluru",
      "Udupi"
    ],
    "bengaluruRoute": "Bengaluru highway corridor leading to Hassan via major national and state highways.",
    "thingsToDo": [
      "Explore major viewpoints and historical monuments of Sakleshpur Coffee & Misty Ghats",
      "Photography of natural landscapes and regional heritage",
      "Taste authentic Karnataka culinary specialties",
      "Guided nature walk and countryside stroll"
    ],
    "localFood": [
      "Authentic Karnataka South Indian Thali",
      "Filter Coffee",
      "Regional Crisps & Snacks"
    ],
    "entryInformation": "General public access available. Verify current entry fees, timings, and seasonal guidelines prior to travel.",
    "permitInformation": "Standard tourist access. Check with forest/local authorities for restricted trekking trails or sanctuary zones.",
    "safetyNotes": "Follow local safety guidelines, stay on designated paths, and carry sufficient drinking water.",
    "oneDayItinerary": "Morning departure from Bengaluru → Arrive at Sakleshpur Coffee & Misty Ghats for landmark tour & lunch → Afternoon exploration of nearby attractions → Evening return journey.",
    "twoDayItinerary": "Day 1: Scenic drive to Sakleshpur Coffee & Misty Ghats, check-in at resort/hotel, evening sunset viewpoint. Day 2: Morning heritage & nature tour, regional lunch, return to Bengaluru.",
    "relatedDestinations": [
      "bengaluru",
      "nandi-hills",
      "mysuru",
      "coorg"
    ],
    "relatedPackages": [
      "nandi-hills-ramanagara-1day"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "How far is Sakleshpur Coffee & Misty Ghats from Bengaluru?",
        "answer": "Sakleshpur Coffee & Misty Ghats is Approx. 220 km from Bengaluru, taking 4 hrs by private cab."
      },
      {
        "question": "What is the best way to travel to Sakleshpur Coffee & Misty Ghats?",
        "answer": "Hiring a private AC chauffeur cab from Coffee Cabs provides seamless door-to-door comfort."
      }
    ],
    "heroImage": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1200&h=800&fit=crop",
    "lastVerified": "20 September 2026",
    "status": "verified"
  },
  {
    "id": "hassan",
    "name": "Hassan City Heritage Hub",
    "slug": "hassan",
    "district": "Hassan",
    "region": "Southern Karnataka",
    "categories": [
      "Heritage Gateway",
      "Urban",
      "Culture"
    ],
    "approximateDistanceFromBengaluru": "Approx. 180 km",
    "approximateDriveTime": "3 hrs",
    "bestSeason": "September to March",
    "suggestedDuration": "1–2 Days",
    "overview": "Hassan City Heritage Hub is a premier destination located in the Hassan district within the Southern Karnataka of Karnataka. Situated Approx. 180 km from Bengaluru (3 hrs drive), it offers visitors rich cultural heritage, scenic vistas, and unforgettable outstation travel experiences.",
    "historyAndCulture": "Hassan City Heritage Hub holds significant regional importance in Karnataka's historical timeline, characterized by unique architectural traditions, local festivals, and natural splendor.",
    "majorAttractions": [
      "Hassan City Heritage Hub Primary Viewpoint & Landmark",
      "Historic Heritage Enclosure at Hassan City Heritage Hub",
      "Scenic Nature Trail & Photography Zone",
      "Regional Cultural Center & Temple Shrine",
      "Sunset Point & Countryside Overlook"
    ],
    "nearbyAttractions": [
      "Bengaluru",
      "Mysuru",
      "Chikkamagaluru",
      "Udupi"
    ],
    "bengaluruRoute": "Bengaluru highway corridor leading to Hassan via major national and state highways.",
    "thingsToDo": [
      "Explore major viewpoints and historical monuments of Hassan City Heritage Hub",
      "Photography of natural landscapes and regional heritage",
      "Taste authentic Karnataka culinary specialties",
      "Guided nature walk and countryside stroll"
    ],
    "localFood": [
      "Authentic Karnataka South Indian Thali",
      "Filter Coffee",
      "Regional Crisps & Snacks"
    ],
    "entryInformation": "General public access available. Verify current entry fees, timings, and seasonal guidelines prior to travel.",
    "permitInformation": "Standard tourist access. Check with forest/local authorities for restricted trekking trails or sanctuary zones.",
    "safetyNotes": "Follow local safety guidelines, stay on designated paths, and carry sufficient drinking water.",
    "oneDayItinerary": "Morning departure from Bengaluru → Arrive at Hassan City Heritage Hub for landmark tour & lunch → Afternoon exploration of nearby attractions → Evening return journey.",
    "twoDayItinerary": "Day 1: Scenic drive to Hassan City Heritage Hub, check-in at resort/hotel, evening sunset viewpoint. Day 2: Morning heritage & nature tour, regional lunch, return to Bengaluru.",
    "relatedDestinations": [
      "bengaluru",
      "nandi-hills",
      "mysuru",
      "coorg"
    ],
    "relatedPackages": [
      "nandi-hills-ramanagara-1day"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "How far is Hassan City Heritage Hub from Bengaluru?",
        "answer": "Hassan City Heritage Hub is Approx. 180 km from Bengaluru, taking 3 hrs by private cab."
      },
      {
        "question": "What is the best way to travel to Hassan City Heritage Hub?",
        "answer": "Hiring a private AC chauffeur cab from Coffee Cabs provides seamless door-to-door comfort."
      }
    ],
    "heroImage": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1200&h=800&fit=crop",
    "lastVerified": "20 September 2026",
    "status": "verified"
  },
  {
    "id": "madikeri",
    "name": "Madikeri (Coorg Headquarters)",
    "slug": "madikeri",
    "district": "Kodagu",
    "region": "Kodagu (Coorg)",
    "categories": [
      "Hill Station",
      "Coffee Estate",
      "Nature",
      "Heritage"
    ],
    "approximateDistanceFromBengaluru": "Approx. 265 km",
    "approximateDriveTime": "5.5 hrs",
    "bestSeason": "September to March",
    "suggestedDuration": "1–2 Days",
    "overview": "Madikeri (Coorg Headquarters) is a premier destination located in the Kodagu district within the Kodagu (Coorg) of Karnataka. Situated Approx. 265 km from Bengaluru (5.5 hrs drive), it offers visitors rich cultural heritage, scenic vistas, and unforgettable outstation travel experiences.",
    "historyAndCulture": "Madikeri (Coorg Headquarters) holds significant regional importance in Karnataka's historical timeline, characterized by unique architectural traditions, local festivals, and natural splendor.",
    "majorAttractions": [
      "Madikeri (Coorg Headquarters) Primary Viewpoint & Landmark",
      "Historic Heritage Enclosure at Madikeri (Coorg Headquarters)",
      "Scenic Nature Trail & Photography Zone",
      "Regional Cultural Center & Temple Shrine",
      "Sunset Point & Countryside Overlook"
    ],
    "nearbyAttractions": [
      "Bengaluru",
      "Mysuru",
      "Chikkamagaluru",
      "Udupi"
    ],
    "bengaluruRoute": "Bengaluru highway corridor leading to Kodagu via major national and state highways.",
    "thingsToDo": [
      "Explore major viewpoints and historical monuments of Madikeri (Coorg Headquarters)",
      "Photography of natural landscapes and regional heritage",
      "Taste authentic Karnataka culinary specialties",
      "Guided nature walk and countryside stroll"
    ],
    "localFood": [
      "Authentic Karnataka South Indian Thali",
      "Filter Coffee",
      "Regional Crisps & Snacks"
    ],
    "entryInformation": "General public access available. Verify current entry fees, timings, and seasonal guidelines prior to travel.",
    "permitInformation": "Standard tourist access. Check with forest/local authorities for restricted trekking trails or sanctuary zones.",
    "safetyNotes": "Follow local safety guidelines, stay on designated paths, and carry sufficient drinking water.",
    "oneDayItinerary": "Morning departure from Bengaluru → Arrive at Madikeri (Coorg Headquarters) for landmark tour & lunch → Afternoon exploration of nearby attractions → Evening return journey.",
    "twoDayItinerary": "Day 1: Scenic drive to Madikeri (Coorg Headquarters), check-in at resort/hotel, evening sunset viewpoint. Day 2: Morning heritage & nature tour, regional lunch, return to Bengaluru.",
    "relatedDestinations": [
      "bengaluru",
      "nandi-hills",
      "mysuru",
      "coorg"
    ],
    "relatedPackages": [
      "nandi-hills-ramanagara-1day"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "How far is Madikeri (Coorg Headquarters) from Bengaluru?",
        "answer": "Madikeri (Coorg Headquarters) is Approx. 265 km from Bengaluru, taking 5.5 hrs by private cab."
      },
      {
        "question": "What is the best way to travel to Madikeri (Coorg Headquarters)?",
        "answer": "Hiring a private AC chauffeur cab from Coffee Cabs provides seamless door-to-door comfort."
      }
    ],
    "heroImage": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1200&h=800&fit=crop",
    "lastVerified": "20 September 2026",
    "status": "verified"
  },
  {
    "id": "kushalnagar-dubare",
    "name": "Kushalnagar & Dubare Elephant Camp",
    "slug": "kushalnagar-dubare",
    "district": "Kodagu",
    "region": "Kodagu (Coorg)",
    "categories": [
      "Wildlife",
      "Elephants",
      "Monastery",
      "River"
    ],
    "approximateDistanceFromBengaluru": "Approx. 235 km",
    "approximateDriveTime": "5 hrs",
    "bestSeason": "September to March",
    "suggestedDuration": "1–2 Days",
    "overview": "Kushalnagar & Dubare Elephant Camp is a premier destination located in the Kodagu district within the Kodagu (Coorg) of Karnataka. Situated Approx. 235 km from Bengaluru (5 hrs drive), it offers visitors rich cultural heritage, scenic vistas, and unforgettable outstation travel experiences.",
    "historyAndCulture": "Kushalnagar & Dubare Elephant Camp holds significant regional importance in Karnataka's historical timeline, characterized by unique architectural traditions, local festivals, and natural splendor.",
    "majorAttractions": [
      "Kushalnagar & Dubare Elephant Camp Primary Viewpoint & Landmark",
      "Historic Heritage Enclosure at Kushalnagar & Dubare Elephant Camp",
      "Scenic Nature Trail & Photography Zone",
      "Regional Cultural Center & Temple Shrine",
      "Sunset Point & Countryside Overlook"
    ],
    "nearbyAttractions": [
      "Bengaluru",
      "Mysuru",
      "Chikkamagaluru",
      "Udupi"
    ],
    "bengaluruRoute": "Bengaluru highway corridor leading to Kodagu via major national and state highways.",
    "thingsToDo": [
      "Explore major viewpoints and historical monuments of Kushalnagar & Dubare Elephant Camp",
      "Photography of natural landscapes and regional heritage",
      "Taste authentic Karnataka culinary specialties",
      "Guided nature walk and countryside stroll"
    ],
    "localFood": [
      "Authentic Karnataka South Indian Thali",
      "Filter Coffee",
      "Regional Crisps & Snacks"
    ],
    "entryInformation": "General public access available. Verify current entry fees, timings, and seasonal guidelines prior to travel.",
    "permitInformation": "Standard tourist access. Check with forest/local authorities for restricted trekking trails or sanctuary zones.",
    "safetyNotes": "Follow local safety guidelines, stay on designated paths, and carry sufficient drinking water.",
    "oneDayItinerary": "Morning departure from Bengaluru → Arrive at Kushalnagar & Dubare Elephant Camp for landmark tour & lunch → Afternoon exploration of nearby attractions → Evening return journey.",
    "twoDayItinerary": "Day 1: Scenic drive to Kushalnagar & Dubare Elephant Camp, check-in at resort/hotel, evening sunset viewpoint. Day 2: Morning heritage & nature tour, regional lunch, return to Bengaluru.",
    "relatedDestinations": [
      "bengaluru",
      "nandi-hills",
      "mysuru",
      "coorg"
    ],
    "relatedPackages": [
      "nandi-hills-ramanagara-1day"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "How far is Kushalnagar & Dubare Elephant Camp from Bengaluru?",
        "answer": "Kushalnagar & Dubare Elephant Camp is Approx. 235 km from Bengaluru, taking 5 hrs by private cab."
      },
      {
        "question": "What is the best way to travel to Kushalnagar & Dubare Elephant Camp?",
        "answer": "Hiring a private AC chauffeur cab from Coffee Cabs provides seamless door-to-door comfort."
      }
    ],
    "heroImage": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1200&h=800&fit=crop",
    "lastVerified": "20 September 2026",
    "status": "verified"
  },
  {
    "id": "bhagamandala-talakaveri",
    "name": "Bhagamandala & Talakaveri Peak",
    "slug": "bhagamandala-talakaveri",
    "district": "Kodagu",
    "region": "Kodagu (Coorg)",
    "categories": [
      "Pilgrimage",
      "Source of Cauvery",
      "Viewpoint",
      "Mountains"
    ],
    "approximateDistanceFromBengaluru": "Approx. 300 km",
    "approximateDriveTime": "6.5 hrs",
    "bestSeason": "September to March",
    "suggestedDuration": "1–2 Days",
    "overview": "Bhagamandala & Talakaveri Peak is a premier destination located in the Kodagu district within the Kodagu (Coorg) of Karnataka. Situated Approx. 300 km from Bengaluru (6.5 hrs drive), it offers visitors rich cultural heritage, scenic vistas, and unforgettable outstation travel experiences.",
    "historyAndCulture": "Bhagamandala & Talakaveri Peak holds significant regional importance in Karnataka's historical timeline, characterized by unique architectural traditions, local festivals, and natural splendor.",
    "majorAttractions": [
      "Bhagamandala & Talakaveri Peak Primary Viewpoint & Landmark",
      "Historic Heritage Enclosure at Bhagamandala & Talakaveri Peak",
      "Scenic Nature Trail & Photography Zone",
      "Regional Cultural Center & Temple Shrine",
      "Sunset Point & Countryside Overlook"
    ],
    "nearbyAttractions": [
      "Bengaluru",
      "Mysuru",
      "Chikkamagaluru",
      "Udupi"
    ],
    "bengaluruRoute": "Bengaluru highway corridor leading to Kodagu via major national and state highways.",
    "thingsToDo": [
      "Explore major viewpoints and historical monuments of Bhagamandala & Talakaveri Peak",
      "Photography of natural landscapes and regional heritage",
      "Taste authentic Karnataka culinary specialties",
      "Guided nature walk and countryside stroll"
    ],
    "localFood": [
      "Authentic Karnataka South Indian Thali",
      "Filter Coffee",
      "Regional Crisps & Snacks"
    ],
    "entryInformation": "General public access available. Verify current entry fees, timings, and seasonal guidelines prior to travel.",
    "permitInformation": "Standard tourist access. Check with forest/local authorities for restricted trekking trails or sanctuary zones.",
    "safetyNotes": "Follow local safety guidelines, stay on designated paths, and carry sufficient drinking water.",
    "oneDayItinerary": "Morning departure from Bengaluru → Arrive at Bhagamandala & Talakaveri Peak for landmark tour & lunch → Afternoon exploration of nearby attractions → Evening return journey.",
    "twoDayItinerary": "Day 1: Scenic drive to Bhagamandala & Talakaveri Peak, check-in at resort/hotel, evening sunset viewpoint. Day 2: Morning heritage & nature tour, regional lunch, return to Bengaluru.",
    "relatedDestinations": [
      "bengaluru",
      "nandi-hills",
      "mysuru",
      "coorg"
    ],
    "relatedPackages": [
      "nandi-hills-ramanagara-1day"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "How far is Bhagamandala & Talakaveri Peak from Bengaluru?",
        "answer": "Bhagamandala & Talakaveri Peak is Approx. 300 km from Bengaluru, taking 6.5 hrs by private cab."
      },
      {
        "question": "What is the best way to travel to Bhagamandala & Talakaveri Peak?",
        "answer": "Hiring a private AC chauffeur cab from Coffee Cabs provides seamless door-to-door comfort."
      }
    ],
    "heroImage": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1200&h=800&fit=crop",
    "lastVerified": "20 September 2026",
    "status": "verified"
  },
  {
    "id": "virajpet",
    "name": "Virajpet Coffee Estates",
    "slug": "virajpet",
    "district": "Kodagu",
    "region": "Kodagu (Coorg)",
    "categories": [
      "Coffee Estate",
      "Homestay",
      "Nature",
      "Relaxation"
    ],
    "approximateDistanceFromBengaluru": "Approx. 240 km",
    "approximateDriveTime": "5 hrs",
    "bestSeason": "September to March",
    "suggestedDuration": "1–2 Days",
    "overview": "Virajpet Coffee Estates is a premier destination located in the Kodagu district within the Kodagu (Coorg) of Karnataka. Situated Approx. 240 km from Bengaluru (5 hrs drive), it offers visitors rich cultural heritage, scenic vistas, and unforgettable outstation travel experiences.",
    "historyAndCulture": "Virajpet Coffee Estates holds significant regional importance in Karnataka's historical timeline, characterized by unique architectural traditions, local festivals, and natural splendor.",
    "majorAttractions": [
      "Virajpet Coffee Estates Primary Viewpoint & Landmark",
      "Historic Heritage Enclosure at Virajpet Coffee Estates",
      "Scenic Nature Trail & Photography Zone",
      "Regional Cultural Center & Temple Shrine",
      "Sunset Point & Countryside Overlook"
    ],
    "nearbyAttractions": [
      "Bengaluru",
      "Mysuru",
      "Chikkamagaluru",
      "Udupi"
    ],
    "bengaluruRoute": "Bengaluru highway corridor leading to Kodagu via major national and state highways.",
    "thingsToDo": [
      "Explore major viewpoints and historical monuments of Virajpet Coffee Estates",
      "Photography of natural landscapes and regional heritage",
      "Taste authentic Karnataka culinary specialties",
      "Guided nature walk and countryside stroll"
    ],
    "localFood": [
      "Authentic Karnataka South Indian Thali",
      "Filter Coffee",
      "Regional Crisps & Snacks"
    ],
    "entryInformation": "General public access available. Verify current entry fees, timings, and seasonal guidelines prior to travel.",
    "permitInformation": "Standard tourist access. Check with forest/local authorities for restricted trekking trails or sanctuary zones.",
    "safetyNotes": "Follow local safety guidelines, stay on designated paths, and carry sufficient drinking water.",
    "oneDayItinerary": "Morning departure from Bengaluru → Arrive at Virajpet Coffee Estates for landmark tour & lunch → Afternoon exploration of nearby attractions → Evening return journey.",
    "twoDayItinerary": "Day 1: Scenic drive to Virajpet Coffee Estates, check-in at resort/hotel, evening sunset viewpoint. Day 2: Morning heritage & nature tour, regional lunch, return to Bengaluru.",
    "relatedDestinations": [
      "bengaluru",
      "nandi-hills",
      "mysuru",
      "coorg"
    ],
    "relatedPackages": [
      "nandi-hills-ramanagara-1day"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "How far is Virajpet Coffee Estates from Bengaluru?",
        "answer": "Virajpet Coffee Estates is Approx. 240 km from Bengaluru, taking 5 hrs by private cab."
      },
      {
        "question": "What is the best way to travel to Virajpet Coffee Estates?",
        "answer": "Hiring a private AC chauffeur cab from Coffee Cabs provides seamless door-to-door comfort."
      }
    ],
    "heroImage": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1200&h=800&fit=crop",
    "lastVerified": "20 September 2026",
    "status": "verified"
  },
  {
    "id": "kakkabe-tadiandamol",
    "name": "Kakkabe & Tadiandamol Peak",
    "slug": "kakkabe-tadiandamol",
    "district": "Kodagu",
    "region": "Kodagu (Coorg)",
    "categories": [
      "Highest Peak",
      "Trekking",
      "Nature",
      "Adventure"
    ],
    "approximateDistanceFromBengaluru": "Approx. 270 km",
    "approximateDriveTime": "6 hrs",
    "bestSeason": "September to March",
    "suggestedDuration": "1–2 Days",
    "overview": "Kakkabe & Tadiandamol Peak is a premier destination located in the Kodagu district within the Kodagu (Coorg) of Karnataka. Situated Approx. 270 km from Bengaluru (6 hrs drive), it offers visitors rich cultural heritage, scenic vistas, and unforgettable outstation travel experiences.",
    "historyAndCulture": "Kakkabe & Tadiandamol Peak holds significant regional importance in Karnataka's historical timeline, characterized by unique architectural traditions, local festivals, and natural splendor.",
    "majorAttractions": [
      "Kakkabe & Tadiandamol Peak Primary Viewpoint & Landmark",
      "Historic Heritage Enclosure at Kakkabe & Tadiandamol Peak",
      "Scenic Nature Trail & Photography Zone",
      "Regional Cultural Center & Temple Shrine",
      "Sunset Point & Countryside Overlook"
    ],
    "nearbyAttractions": [
      "Bengaluru",
      "Mysuru",
      "Chikkamagaluru",
      "Udupi"
    ],
    "bengaluruRoute": "Bengaluru highway corridor leading to Kodagu via major national and state highways.",
    "thingsToDo": [
      "Explore major viewpoints and historical monuments of Kakkabe & Tadiandamol Peak",
      "Photography of natural landscapes and regional heritage",
      "Taste authentic Karnataka culinary specialties",
      "Guided nature walk and countryside stroll"
    ],
    "localFood": [
      "Authentic Karnataka South Indian Thali",
      "Filter Coffee",
      "Regional Crisps & Snacks"
    ],
    "entryInformation": "General public access available. Verify current entry fees, timings, and seasonal guidelines prior to travel.",
    "permitInformation": "Standard tourist access. Check with forest/local authorities for restricted trekking trails or sanctuary zones.",
    "safetyNotes": "Follow local safety guidelines, stay on designated paths, and carry sufficient drinking water.",
    "oneDayItinerary": "Morning departure from Bengaluru → Arrive at Kakkabe & Tadiandamol Peak for landmark tour & lunch → Afternoon exploration of nearby attractions → Evening return journey.",
    "twoDayItinerary": "Day 1: Scenic drive to Kakkabe & Tadiandamol Peak, check-in at resort/hotel, evening sunset viewpoint. Day 2: Morning heritage & nature tour, regional lunch, return to Bengaluru.",
    "relatedDestinations": [
      "bengaluru",
      "nandi-hills",
      "mysuru",
      "coorg"
    ],
    "relatedPackages": [
      "nandi-hills-ramanagara-1day"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "How far is Kakkabe & Tadiandamol Peak from Bengaluru?",
        "answer": "Kakkabe & Tadiandamol Peak is Approx. 270 km from Bengaluru, taking 6 hrs by private cab."
      },
      {
        "question": "What is the best way to travel to Kakkabe & Tadiandamol Peak?",
        "answer": "Hiring a private AC chauffeur cab from Coffee Cabs provides seamless door-to-door comfort."
      }
    ],
    "heroImage": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1200&h=800&fit=crop",
    "lastVerified": "20 September 2026",
    "status": "verified"
  },
  {
    "id": "chikkamagaluru",
    "name": "Chikkamagaluru Coffee Country",
    "slug": "chikkamagaluru",
    "district": "Chikkamagaluru",
    "region": "Malnad & Central Ghats",
    "categories": [
      "Coffee Capital",
      "Hill Station",
      "Nature",
      "Weekend"
    ],
    "approximateDistanceFromBengaluru": "Approx. 245 km",
    "approximateDriveTime": "4.5 hrs",
    "bestSeason": "September to March",
    "suggestedDuration": "1–2 Days",
    "overview": "Chikkamagaluru Coffee Country is a premier destination located in the Chikkamagaluru district within the Malnad & Central Ghats of Karnataka. Situated Approx. 245 km from Bengaluru (4.5 hrs drive), it offers visitors rich cultural heritage, scenic vistas, and unforgettable outstation travel experiences.",
    "historyAndCulture": "Chikkamagaluru Coffee Country holds significant regional importance in Karnataka's historical timeline, characterized by unique architectural traditions, local festivals, and natural splendor.",
    "majorAttractions": [
      "Chikkamagaluru Coffee Country Primary Viewpoint & Landmark",
      "Historic Heritage Enclosure at Chikkamagaluru Coffee Country",
      "Scenic Nature Trail & Photography Zone",
      "Regional Cultural Center & Temple Shrine",
      "Sunset Point & Countryside Overlook"
    ],
    "nearbyAttractions": [
      "Bengaluru",
      "Mysuru",
      "Chikkamagaluru",
      "Udupi"
    ],
    "bengaluruRoute": "Bengaluru highway corridor leading to Chikkamagaluru via major national and state highways.",
    "thingsToDo": [
      "Explore major viewpoints and historical monuments of Chikkamagaluru Coffee Country",
      "Photography of natural landscapes and regional heritage",
      "Taste authentic Karnataka culinary specialties",
      "Guided nature walk and countryside stroll"
    ],
    "localFood": [
      "Authentic Karnataka South Indian Thali",
      "Filter Coffee",
      "Regional Crisps & Snacks"
    ],
    "entryInformation": "General public access available. Verify current entry fees, timings, and seasonal guidelines prior to travel.",
    "permitInformation": "Standard tourist access. Check with forest/local authorities for restricted trekking trails or sanctuary zones.",
    "safetyNotes": "Follow local safety guidelines, stay on designated paths, and carry sufficient drinking water.",
    "oneDayItinerary": "Morning departure from Bengaluru → Arrive at Chikkamagaluru Coffee Country for landmark tour & lunch → Afternoon exploration of nearby attractions → Evening return journey.",
    "twoDayItinerary": "Day 1: Scenic drive to Chikkamagaluru Coffee Country, check-in at resort/hotel, evening sunset viewpoint. Day 2: Morning heritage & nature tour, regional lunch, return to Bengaluru.",
    "relatedDestinations": [
      "bengaluru",
      "nandi-hills",
      "mysuru",
      "coorg"
    ],
    "relatedPackages": [
      "nandi-hills-ramanagara-1day"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "How far is Chikkamagaluru Coffee Country from Bengaluru?",
        "answer": "Chikkamagaluru Coffee Country is Approx. 245 km from Bengaluru, taking 4.5 hrs by private cab."
      },
      {
        "question": "What is the best way to travel to Chikkamagaluru Coffee Country?",
        "answer": "Hiring a private AC chauffeur cab from Coffee Cabs provides seamless door-to-door comfort."
      }
    ],
    "heroImage": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1200&h=800&fit=crop",
    "lastVerified": "20 September 2026",
    "status": "verified"
  },
  {
    "id": "mullayanagiri-baba-budangiri",
    "name": "Mullayanagiri & Baba Budangiri Peaks",
    "slug": "mullayanagiri-baba-budangiri",
    "district": "Chikkamagaluru",
    "region": "Malnad & Central Ghats",
    "categories": [
      "Highest Peak in KA",
      "Trekking",
      "Heritage",
      "Shrine"
    ],
    "approximateDistanceFromBengaluru": "Approx. 265 km",
    "approximateDriveTime": "5.5 hrs",
    "bestSeason": "September to March",
    "suggestedDuration": "1–2 Days",
    "overview": "Mullayanagiri & Baba Budangiri Peaks is a premier destination located in the Chikkamagaluru district within the Malnad & Central Ghats of Karnataka. Situated Approx. 265 km from Bengaluru (5.5 hrs drive), it offers visitors rich cultural heritage, scenic vistas, and unforgettable outstation travel experiences.",
    "historyAndCulture": "Mullayanagiri & Baba Budangiri Peaks holds significant regional importance in Karnataka's historical timeline, characterized by unique architectural traditions, local festivals, and natural splendor.",
    "majorAttractions": [
      "Mullayanagiri & Baba Budangiri Peaks Primary Viewpoint & Landmark",
      "Historic Heritage Enclosure at Mullayanagiri & Baba Budangiri Peaks",
      "Scenic Nature Trail & Photography Zone",
      "Regional Cultural Center & Temple Shrine",
      "Sunset Point & Countryside Overlook"
    ],
    "nearbyAttractions": [
      "Bengaluru",
      "Mysuru",
      "Chikkamagaluru",
      "Udupi"
    ],
    "bengaluruRoute": "Bengaluru highway corridor leading to Chikkamagaluru via major national and state highways.",
    "thingsToDo": [
      "Explore major viewpoints and historical monuments of Mullayanagiri & Baba Budangiri Peaks",
      "Photography of natural landscapes and regional heritage",
      "Taste authentic Karnataka culinary specialties",
      "Guided nature walk and countryside stroll"
    ],
    "localFood": [
      "Authentic Karnataka South Indian Thali",
      "Filter Coffee",
      "Regional Crisps & Snacks"
    ],
    "entryInformation": "General public access available. Verify current entry fees, timings, and seasonal guidelines prior to travel.",
    "permitInformation": "Standard tourist access. Check with forest/local authorities for restricted trekking trails or sanctuary zones.",
    "safetyNotes": "Follow local safety guidelines, stay on designated paths, and carry sufficient drinking water.",
    "oneDayItinerary": "Morning departure from Bengaluru → Arrive at Mullayanagiri & Baba Budangiri Peaks for landmark tour & lunch → Afternoon exploration of nearby attractions → Evening return journey.",
    "twoDayItinerary": "Day 1: Scenic drive to Mullayanagiri & Baba Budangiri Peaks, check-in at resort/hotel, evening sunset viewpoint. Day 2: Morning heritage & nature tour, regional lunch, return to Bengaluru.",
    "relatedDestinations": [
      "bengaluru",
      "nandi-hills",
      "mysuru",
      "coorg"
    ],
    "relatedPackages": [
      "nandi-hills-ramanagara-1day"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "How far is Mullayanagiri & Baba Budangiri Peaks from Bengaluru?",
        "answer": "Mullayanagiri & Baba Budangiri Peaks is Approx. 265 km from Bengaluru, taking 5.5 hrs by private cab."
      },
      {
        "question": "What is the best way to travel to Mullayanagiri & Baba Budangiri Peaks?",
        "answer": "Hiring a private AC chauffeur cab from Coffee Cabs provides seamless door-to-door comfort."
      }
    ],
    "heroImage": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1200&h=800&fit=crop",
    "lastVerified": "20 September 2026",
    "status": "verified"
  },
  {
    "id": "kemmannugundi",
    "name": "Kemmannugundi Hill Station",
    "slug": "kemmannugundi",
    "district": "Chikkamagaluru",
    "region": "Malnad & Central Ghats",
    "categories": [
      "Hill Station",
      "Royal Retreat",
      "Waterfalls",
      "Gardens"
    ],
    "approximateDistanceFromBengaluru": "Approx. 270 km",
    "approximateDriveTime": "5.5 hrs",
    "bestSeason": "September to March",
    "suggestedDuration": "1–2 Days",
    "overview": "Kemmannugundi Hill Station is a premier destination located in the Chikkamagaluru district within the Malnad & Central Ghats of Karnataka. Situated Approx. 270 km from Bengaluru (5.5 hrs drive), it offers visitors rich cultural heritage, scenic vistas, and unforgettable outstation travel experiences.",
    "historyAndCulture": "Kemmannugundi Hill Station holds significant regional importance in Karnataka's historical timeline, characterized by unique architectural traditions, local festivals, and natural splendor.",
    "majorAttractions": [
      "Kemmannugundi Hill Station Primary Viewpoint & Landmark",
      "Historic Heritage Enclosure at Kemmannugundi Hill Station",
      "Scenic Nature Trail & Photography Zone",
      "Regional Cultural Center & Temple Shrine",
      "Sunset Point & Countryside Overlook"
    ],
    "nearbyAttractions": [
      "Bengaluru",
      "Mysuru",
      "Chikkamagaluru",
      "Udupi"
    ],
    "bengaluruRoute": "Bengaluru highway corridor leading to Chikkamagaluru via major national and state highways.",
    "thingsToDo": [
      "Explore major viewpoints and historical monuments of Kemmannugundi Hill Station",
      "Photography of natural landscapes and regional heritage",
      "Taste authentic Karnataka culinary specialties",
      "Guided nature walk and countryside stroll"
    ],
    "localFood": [
      "Authentic Karnataka South Indian Thali",
      "Filter Coffee",
      "Regional Crisps & Snacks"
    ],
    "entryInformation": "General public access available. Verify current entry fees, timings, and seasonal guidelines prior to travel.",
    "permitInformation": "Standard tourist access. Check with forest/local authorities for restricted trekking trails or sanctuary zones.",
    "safetyNotes": "Follow local safety guidelines, stay on designated paths, and carry sufficient drinking water.",
    "oneDayItinerary": "Morning departure from Bengaluru → Arrive at Kemmannugundi Hill Station for landmark tour & lunch → Afternoon exploration of nearby attractions → Evening return journey.",
    "twoDayItinerary": "Day 1: Scenic drive to Kemmannugundi Hill Station, check-in at resort/hotel, evening sunset viewpoint. Day 2: Morning heritage & nature tour, regional lunch, return to Bengaluru.",
    "relatedDestinations": [
      "bengaluru",
      "nandi-hills",
      "mysuru",
      "coorg"
    ],
    "relatedPackages": [
      "nandi-hills-ramanagara-1day"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "How far is Kemmannugundi Hill Station from Bengaluru?",
        "answer": "Kemmannugundi Hill Station is Approx. 270 km from Bengaluru, taking 5.5 hrs by private cab."
      },
      {
        "question": "What is the best way to travel to Kemmannugundi Hill Station?",
        "answer": "Hiring a private AC chauffeur cab from Coffee Cabs provides seamless door-to-door comfort."
      }
    ],
    "heroImage": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1200&h=800&fit=crop",
    "lastVerified": "20 September 2026",
    "status": "verified"
  },
  {
    "id": "kudremukh",
    "name": "Kudremukh Peak & Iron Ore Range",
    "slug": "kudremukh",
    "district": "Chikkamagaluru",
    "region": "Malnad & Central Ghats",
    "categories": [
      "Horse-Face Peak",
      "Trekking",
      "National Park",
      "Greenery"
    ],
    "approximateDistanceFromBengaluru": "Approx. 330 km",
    "approximateDriveTime": "6.5 hrs",
    "bestSeason": "September to March",
    "suggestedDuration": "1–2 Days",
    "overview": "Kudremukh Peak & Iron Ore Range is a premier destination located in the Chikkamagaluru district within the Malnad & Central Ghats of Karnataka. Situated Approx. 330 km from Bengaluru (6.5 hrs drive), it offers visitors rich cultural heritage, scenic vistas, and unforgettable outstation travel experiences.",
    "historyAndCulture": "Kudremukh Peak & Iron Ore Range holds significant regional importance in Karnataka's historical timeline, characterized by unique architectural traditions, local festivals, and natural splendor.",
    "majorAttractions": [
      "Kudremukh Peak & Iron Ore Range Primary Viewpoint & Landmark",
      "Historic Heritage Enclosure at Kudremukh Peak & Iron Ore Range",
      "Scenic Nature Trail & Photography Zone",
      "Regional Cultural Center & Temple Shrine",
      "Sunset Point & Countryside Overlook"
    ],
    "nearbyAttractions": [
      "Bengaluru",
      "Mysuru",
      "Chikkamagaluru",
      "Udupi"
    ],
    "bengaluruRoute": "Bengaluru highway corridor leading to Chikkamagaluru via major national and state highways.",
    "thingsToDo": [
      "Explore major viewpoints and historical monuments of Kudremukh Peak & Iron Ore Range",
      "Photography of natural landscapes and regional heritage",
      "Taste authentic Karnataka culinary specialties",
      "Guided nature walk and countryside stroll"
    ],
    "localFood": [
      "Authentic Karnataka South Indian Thali",
      "Filter Coffee",
      "Regional Crisps & Snacks"
    ],
    "entryInformation": "General public access available. Verify current entry fees, timings, and seasonal guidelines prior to travel.",
    "permitInformation": "Standard tourist access. Check with forest/local authorities for restricted trekking trails or sanctuary zones.",
    "safetyNotes": "Follow local safety guidelines, stay on designated paths, and carry sufficient drinking water.",
    "oneDayItinerary": "Morning departure from Bengaluru → Arrive at Kudremukh Peak & Iron Ore Range for landmark tour & lunch → Afternoon exploration of nearby attractions → Evening return journey.",
    "twoDayItinerary": "Day 1: Scenic drive to Kudremukh Peak & Iron Ore Range, check-in at resort/hotel, evening sunset viewpoint. Day 2: Morning heritage & nature tour, regional lunch, return to Bengaluru.",
    "relatedDestinations": [
      "bengaluru",
      "nandi-hills",
      "mysuru",
      "coorg"
    ],
    "relatedPackages": [
      "nandi-hills-ramanagara-1day"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "How far is Kudremukh Peak & Iron Ore Range from Bengaluru?",
        "answer": "Kudremukh Peak & Iron Ore Range is Approx. 330 km from Bengaluru, taking 6.5 hrs by private cab."
      },
      {
        "question": "What is the best way to travel to Kudremukh Peak & Iron Ore Range?",
        "answer": "Hiring a private AC chauffeur cab from Coffee Cabs provides seamless door-to-door comfort."
      }
    ],
    "heroImage": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1200&h=800&fit=crop",
    "lastVerified": "20 September 2026",
    "status": "verified"
  },
  {
    "id": "horanadu",
    "name": "Horanadu Annapoorneshwari Temple",
    "slug": "horanadu",
    "district": "Chikkamagaluru",
    "region": "Malnad & Central Ghats",
    "categories": [
      "Pilgrimage",
      "Valley Temple",
      "Nature",
      "Culture"
    ],
    "approximateDistanceFromBengaluru": "Approx. 320 km",
    "approximateDriveTime": "6.5 hrs",
    "bestSeason": "September to March",
    "suggestedDuration": "1–2 Days",
    "overview": "Horanadu Annapoorneshwari Temple is a premier destination located in the Chikkamagaluru district within the Malnad & Central Ghats of Karnataka. Situated Approx. 320 km from Bengaluru (6.5 hrs drive), it offers visitors rich cultural heritage, scenic vistas, and unforgettable outstation travel experiences.",
    "historyAndCulture": "Horanadu Annapoorneshwari Temple holds significant regional importance in Karnataka's historical timeline, characterized by unique architectural traditions, local festivals, and natural splendor.",
    "majorAttractions": [
      "Horanadu Annapoorneshwari Temple Primary Viewpoint & Landmark",
      "Historic Heritage Enclosure at Horanadu Annapoorneshwari Temple",
      "Scenic Nature Trail & Photography Zone",
      "Regional Cultural Center & Temple Shrine",
      "Sunset Point & Countryside Overlook"
    ],
    "nearbyAttractions": [
      "Bengaluru",
      "Mysuru",
      "Chikkamagaluru",
      "Udupi"
    ],
    "bengaluruRoute": "Bengaluru highway corridor leading to Chikkamagaluru via major national and state highways.",
    "thingsToDo": [
      "Explore major viewpoints and historical monuments of Horanadu Annapoorneshwari Temple",
      "Photography of natural landscapes and regional heritage",
      "Taste authentic Karnataka culinary specialties",
      "Guided nature walk and countryside stroll"
    ],
    "localFood": [
      "Authentic Karnataka South Indian Thali",
      "Filter Coffee",
      "Regional Crisps & Snacks"
    ],
    "entryInformation": "General public access available. Verify current entry fees, timings, and seasonal guidelines prior to travel.",
    "permitInformation": "Standard tourist access. Check with forest/local authorities for restricted trekking trails or sanctuary zones.",
    "safetyNotes": "Follow local safety guidelines, stay on designated paths, and carry sufficient drinking water.",
    "oneDayItinerary": "Morning departure from Bengaluru → Arrive at Horanadu Annapoorneshwari Temple for landmark tour & lunch → Afternoon exploration of nearby attractions → Evening return journey.",
    "twoDayItinerary": "Day 1: Scenic drive to Horanadu Annapoorneshwari Temple, check-in at resort/hotel, evening sunset viewpoint. Day 2: Morning heritage & nature tour, regional lunch, return to Bengaluru.",
    "relatedDestinations": [
      "bengaluru",
      "nandi-hills",
      "mysuru",
      "coorg"
    ],
    "relatedPackages": [
      "nandi-hills-ramanagara-1day"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "How far is Horanadu Annapoorneshwari Temple from Bengaluru?",
        "answer": "Horanadu Annapoorneshwari Temple is Approx. 320 km from Bengaluru, taking 6.5 hrs by private cab."
      },
      {
        "question": "What is the best way to travel to Horanadu Annapoorneshwari Temple?",
        "answer": "Hiring a private AC chauffeur cab from Coffee Cabs provides seamless door-to-door comfort."
      }
    ],
    "heroImage": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1200&h=800&fit=crop",
    "lastVerified": "20 September 2026",
    "status": "verified"
  },
  {
    "id": "sringeri",
    "name": "Sringeri Sharada Peetham",
    "slug": "sringeri",
    "district": "Chikkamagaluru",
    "region": "Malnad & Central Ghats",
    "categories": [
      "Pilgrimage",
      "Advaita Peetham",
      "Heritage",
      "River"
    ],
    "approximateDistanceFromBengaluru": "Approx. 320 km",
    "approximateDriveTime": "6.5 hrs",
    "bestSeason": "September to March",
    "suggestedDuration": "1–2 Days",
    "overview": "Sringeri Sharada Peetham is a premier destination located in the Chikkamagaluru district within the Malnad & Central Ghats of Karnataka. Situated Approx. 320 km from Bengaluru (6.5 hrs drive), it offers visitors rich cultural heritage, scenic vistas, and unforgettable outstation travel experiences.",
    "historyAndCulture": "Sringeri Sharada Peetham holds significant regional importance in Karnataka's historical timeline, characterized by unique architectural traditions, local festivals, and natural splendor.",
    "majorAttractions": [
      "Sringeri Sharada Peetham Primary Viewpoint & Landmark",
      "Historic Heritage Enclosure at Sringeri Sharada Peetham",
      "Scenic Nature Trail & Photography Zone",
      "Regional Cultural Center & Temple Shrine",
      "Sunset Point & Countryside Overlook"
    ],
    "nearbyAttractions": [
      "Bengaluru",
      "Mysuru",
      "Chikkamagaluru",
      "Udupi"
    ],
    "bengaluruRoute": "Bengaluru highway corridor leading to Chikkamagaluru via major national and state highways.",
    "thingsToDo": [
      "Explore major viewpoints and historical monuments of Sringeri Sharada Peetham",
      "Photography of natural landscapes and regional heritage",
      "Taste authentic Karnataka culinary specialties",
      "Guided nature walk and countryside stroll"
    ],
    "localFood": [
      "Authentic Karnataka South Indian Thali",
      "Filter Coffee",
      "Regional Crisps & Snacks"
    ],
    "entryInformation": "General public access available. Verify current entry fees, timings, and seasonal guidelines prior to travel.",
    "permitInformation": "Standard tourist access. Check with forest/local authorities for restricted trekking trails or sanctuary zones.",
    "safetyNotes": "Follow local safety guidelines, stay on designated paths, and carry sufficient drinking water.",
    "oneDayItinerary": "Morning departure from Bengaluru → Arrive at Sringeri Sharada Peetham for landmark tour & lunch → Afternoon exploration of nearby attractions → Evening return journey.",
    "twoDayItinerary": "Day 1: Scenic drive to Sringeri Sharada Peetham, check-in at resort/hotel, evening sunset viewpoint. Day 2: Morning heritage & nature tour, regional lunch, return to Bengaluru.",
    "relatedDestinations": [
      "bengaluru",
      "nandi-hills",
      "mysuru",
      "coorg"
    ],
    "relatedPackages": [
      "nandi-hills-ramanagara-1day"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "How far is Sringeri Sharada Peetham from Bengaluru?",
        "answer": "Sringeri Sharada Peetham is Approx. 320 km from Bengaluru, taking 6.5 hrs by private cab."
      },
      {
        "question": "What is the best way to travel to Sringeri Sharada Peetham?",
        "answer": "Hiring a private AC chauffeur cab from Coffee Cabs provides seamless door-to-door comfort."
      }
    ],
    "heroImage": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1200&h=800&fit=crop",
    "lastVerified": "20 September 2026",
    "status": "verified"
  },
  {
    "id": "bhadra-wildlife-sanctuary",
    "name": "Bhadra Wildlife Sanctuary (Muthodi)",
    "slug": "bhadra-wildlife-sanctuary",
    "district": "Chikkamagaluru / Shivamogga",
    "region": "Malnad & Central Ghats",
    "categories": [
      "Wildlife",
      "Safari",
      "Tiger Reserve",
      "Forest"
    ],
    "approximateDistanceFromBengaluru": "Approx. 285 km",
    "approximateDriveTime": "5.5 hrs",
    "bestSeason": "September to March",
    "suggestedDuration": "1–2 Days",
    "overview": "Bhadra Wildlife Sanctuary (Muthodi) is a premier destination located in the Chikkamagaluru / Shivamogga district within the Malnad & Central Ghats of Karnataka. Situated Approx. 285 km from Bengaluru (5.5 hrs drive), it offers visitors rich cultural heritage, scenic vistas, and unforgettable outstation travel experiences.",
    "historyAndCulture": "Bhadra Wildlife Sanctuary (Muthodi) holds significant regional importance in Karnataka's historical timeline, characterized by unique architectural traditions, local festivals, and natural splendor.",
    "majorAttractions": [
      "Bhadra Wildlife Sanctuary (Muthodi) Primary Viewpoint & Landmark",
      "Historic Heritage Enclosure at Bhadra Wildlife Sanctuary (Muthodi)",
      "Scenic Nature Trail & Photography Zone",
      "Regional Cultural Center & Temple Shrine",
      "Sunset Point & Countryside Overlook"
    ],
    "nearbyAttractions": [
      "Bengaluru",
      "Mysuru",
      "Chikkamagaluru",
      "Udupi"
    ],
    "bengaluruRoute": "Bengaluru highway corridor leading to Chikkamagaluru / Shivamogga via major national and state highways.",
    "thingsToDo": [
      "Explore major viewpoints and historical monuments of Bhadra Wildlife Sanctuary (Muthodi)",
      "Photography of natural landscapes and regional heritage",
      "Taste authentic Karnataka culinary specialties",
      "Guided nature walk and countryside stroll"
    ],
    "localFood": [
      "Authentic Karnataka South Indian Thali",
      "Filter Coffee",
      "Regional Crisps & Snacks"
    ],
    "entryInformation": "General public access available. Verify current entry fees, timings, and seasonal guidelines prior to travel.",
    "permitInformation": "Standard tourist access. Check with forest/local authorities for restricted trekking trails or sanctuary zones.",
    "safetyNotes": "Follow local safety guidelines, stay on designated paths, and carry sufficient drinking water.",
    "oneDayItinerary": "Morning departure from Bengaluru → Arrive at Bhadra Wildlife Sanctuary (Muthodi) for landmark tour & lunch → Afternoon exploration of nearby attractions → Evening return journey.",
    "twoDayItinerary": "Day 1: Scenic drive to Bhadra Wildlife Sanctuary (Muthodi), check-in at resort/hotel, evening sunset viewpoint. Day 2: Morning heritage & nature tour, regional lunch, return to Bengaluru.",
    "relatedDestinations": [
      "bengaluru",
      "nandi-hills",
      "mysuru",
      "coorg"
    ],
    "relatedPackages": [
      "nandi-hills-ramanagara-1day"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "How far is Bhadra Wildlife Sanctuary (Muthodi) from Bengaluru?",
        "answer": "Bhadra Wildlife Sanctuary (Muthodi) is Approx. 285 km from Bengaluru, taking 5.5 hrs by private cab."
      },
      {
        "question": "What is the best way to travel to Bhadra Wildlife Sanctuary (Muthodi)?",
        "answer": "Hiring a private AC chauffeur cab from Coffee Cabs provides seamless door-to-door comfort."
      }
    ],
    "heroImage": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1200&h=800&fit=crop",
    "lastVerified": "20 September 2026",
    "status": "verified"
  },
  {
    "id": "shivamogga",
    "name": "Shivamogga (Shimoga Gateway)",
    "slug": "shivamogga",
    "district": "Shivamogga",
    "region": "Malnad & Central Ghats",
    "categories": [
      "Waterfall Gateway",
      "Heritage",
      "River",
      "Nature"
    ],
    "approximateDistanceFromBengaluru": "Approx. 300 km",
    "approximateDriveTime": "5.5 hrs",
    "bestSeason": "September to March",
    "suggestedDuration": "1–2 Days",
    "overview": "Shivamogga (Shimoga Gateway) is a premier destination located in the Shivamogga district within the Malnad & Central Ghats of Karnataka. Situated Approx. 300 km from Bengaluru (5.5 hrs drive), it offers visitors rich cultural heritage, scenic vistas, and unforgettable outstation travel experiences.",
    "historyAndCulture": "Shivamogga (Shimoga Gateway) holds significant regional importance in Karnataka's historical timeline, characterized by unique architectural traditions, local festivals, and natural splendor.",
    "majorAttractions": [
      "Shivamogga (Shimoga Gateway) Primary Viewpoint & Landmark",
      "Historic Heritage Enclosure at Shivamogga (Shimoga Gateway)",
      "Scenic Nature Trail & Photography Zone",
      "Regional Cultural Center & Temple Shrine",
      "Sunset Point & Countryside Overlook"
    ],
    "nearbyAttractions": [
      "Bengaluru",
      "Mysuru",
      "Chikkamagaluru",
      "Udupi"
    ],
    "bengaluruRoute": "Bengaluru highway corridor leading to Shivamogga via major national and state highways.",
    "thingsToDo": [
      "Explore major viewpoints and historical monuments of Shivamogga (Shimoga Gateway)",
      "Photography of natural landscapes and regional heritage",
      "Taste authentic Karnataka culinary specialties",
      "Guided nature walk and countryside stroll"
    ],
    "localFood": [
      "Authentic Karnataka South Indian Thali",
      "Filter Coffee",
      "Regional Crisps & Snacks"
    ],
    "entryInformation": "General public access available. Verify current entry fees, timings, and seasonal guidelines prior to travel.",
    "permitInformation": "Standard tourist access. Check with forest/local authorities for restricted trekking trails or sanctuary zones.",
    "safetyNotes": "Follow local safety guidelines, stay on designated paths, and carry sufficient drinking water.",
    "oneDayItinerary": "Morning departure from Bengaluru → Arrive at Shivamogga (Shimoga Gateway) for landmark tour & lunch → Afternoon exploration of nearby attractions → Evening return journey.",
    "twoDayItinerary": "Day 1: Scenic drive to Shivamogga (Shimoga Gateway), check-in at resort/hotel, evening sunset viewpoint. Day 2: Morning heritage & nature tour, regional lunch, return to Bengaluru.",
    "relatedDestinations": [
      "bengaluru",
      "nandi-hills",
      "mysuru",
      "coorg"
    ],
    "relatedPackages": [
      "nandi-hills-ramanagara-1day"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "How far is Shivamogga (Shimoga Gateway) from Bengaluru?",
        "answer": "Shivamogga (Shimoga Gateway) is Approx. 300 km from Bengaluru, taking 5.5 hrs by private cab."
      },
      {
        "question": "What is the best way to travel to Shivamogga (Shimoga Gateway)?",
        "answer": "Hiring a private AC chauffeur cab from Coffee Cabs provides seamless door-to-door comfort."
      }
    ],
    "heroImage": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1200&h=800&fit=crop",
    "lastVerified": "20 September 2026",
    "status": "verified"
  },
  {
    "id": "jog-falls",
    "name": "Jog Falls (Gerusoppa Falls)",
    "slug": "jog-falls",
    "district": "Shivamogga",
    "region": "Malnad & Central Ghats",
    "categories": [
      "Waterfalls",
      "Highest Fall",
      "Nature",
      "Monsoon"
    ],
    "approximateDistanceFromBengaluru": "Approx. 410 km",
    "approximateDriveTime": "7.5 hrs",
    "bestSeason": "September to March",
    "suggestedDuration": "1–2 Days",
    "overview": "Jog Falls (Gerusoppa Falls) is a premier destination located in the Shivamogga district within the Malnad & Central Ghats of Karnataka. Situated Approx. 410 km from Bengaluru (7.5 hrs drive), it offers visitors rich cultural heritage, scenic vistas, and unforgettable outstation travel experiences.",
    "historyAndCulture": "Jog Falls (Gerusoppa Falls) holds significant regional importance in Karnataka's historical timeline, characterized by unique architectural traditions, local festivals, and natural splendor.",
    "majorAttractions": [
      "Jog Falls (Gerusoppa Falls) Primary Viewpoint & Landmark",
      "Historic Heritage Enclosure at Jog Falls (Gerusoppa Falls)",
      "Scenic Nature Trail & Photography Zone",
      "Regional Cultural Center & Temple Shrine",
      "Sunset Point & Countryside Overlook"
    ],
    "nearbyAttractions": [
      "Bengaluru",
      "Mysuru",
      "Chikkamagaluru",
      "Udupi"
    ],
    "bengaluruRoute": "Bengaluru highway corridor leading to Shivamogga via major national and state highways.",
    "thingsToDo": [
      "Explore major viewpoints and historical monuments of Jog Falls (Gerusoppa Falls)",
      "Photography of natural landscapes and regional heritage",
      "Taste authentic Karnataka culinary specialties",
      "Guided nature walk and countryside stroll"
    ],
    "localFood": [
      "Authentic Karnataka South Indian Thali",
      "Filter Coffee",
      "Regional Crisps & Snacks"
    ],
    "entryInformation": "General public access available. Verify current entry fees, timings, and seasonal guidelines prior to travel.",
    "permitInformation": "Standard tourist access. Check with forest/local authorities for restricted trekking trails or sanctuary zones.",
    "safetyNotes": "Follow local safety guidelines, stay on designated paths, and carry sufficient drinking water.",
    "oneDayItinerary": "Morning departure from Bengaluru → Arrive at Jog Falls (Gerusoppa Falls) for landmark tour & lunch → Afternoon exploration of nearby attractions → Evening return journey.",
    "twoDayItinerary": "Day 1: Scenic drive to Jog Falls (Gerusoppa Falls), check-in at resort/hotel, evening sunset viewpoint. Day 2: Morning heritage & nature tour, regional lunch, return to Bengaluru.",
    "relatedDestinations": [
      "bengaluru",
      "nandi-hills",
      "mysuru",
      "coorg"
    ],
    "relatedPackages": [
      "nandi-hills-ramanagara-1day"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "How far is Jog Falls (Gerusoppa Falls) from Bengaluru?",
        "answer": "Jog Falls (Gerusoppa Falls) is Approx. 410 km from Bengaluru, taking 7.5 hrs by private cab."
      },
      {
        "question": "What is the best way to travel to Jog Falls (Gerusoppa Falls)?",
        "answer": "Hiring a private AC chauffeur cab from Coffee Cabs provides seamless door-to-door comfort."
      }
    ],
    "heroImage": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1200&h=800&fit=crop",
    "lastVerified": "20 September 2026",
    "status": "verified"
  },
  {
    "id": "agumbe",
    "name": "Agumbe Rainforest & Sunset Peak",
    "slug": "agumbe",
    "district": "Shivamogga",
    "region": "Malnad & Central Ghats",
    "categories": [
      "Rainforest",
      "King Cobra",
      "Sunset",
      "Monsoon"
    ],
    "approximateDistanceFromBengaluru": "Approx. 350 km",
    "approximateDriveTime": "7 hrs",
    "bestSeason": "September to March",
    "suggestedDuration": "1–2 Days",
    "overview": "Agumbe Rainforest & Sunset Peak is a premier destination located in the Shivamogga district within the Malnad & Central Ghats of Karnataka. Situated Approx. 350 km from Bengaluru (7 hrs drive), it offers visitors rich cultural heritage, scenic vistas, and unforgettable outstation travel experiences.",
    "historyAndCulture": "Agumbe Rainforest & Sunset Peak holds significant regional importance in Karnataka's historical timeline, characterized by unique architectural traditions, local festivals, and natural splendor.",
    "majorAttractions": [
      "Agumbe Rainforest & Sunset Peak Primary Viewpoint & Landmark",
      "Historic Heritage Enclosure at Agumbe Rainforest & Sunset Peak",
      "Scenic Nature Trail & Photography Zone",
      "Regional Cultural Center & Temple Shrine",
      "Sunset Point & Countryside Overlook"
    ],
    "nearbyAttractions": [
      "Bengaluru",
      "Mysuru",
      "Chikkamagaluru",
      "Udupi"
    ],
    "bengaluruRoute": "Bengaluru highway corridor leading to Shivamogga via major national and state highways.",
    "thingsToDo": [
      "Explore major viewpoints and historical monuments of Agumbe Rainforest & Sunset Peak",
      "Photography of natural landscapes and regional heritage",
      "Taste authentic Karnataka culinary specialties",
      "Guided nature walk and countryside stroll"
    ],
    "localFood": [
      "Authentic Karnataka South Indian Thali",
      "Filter Coffee",
      "Regional Crisps & Snacks"
    ],
    "entryInformation": "General public access available. Verify current entry fees, timings, and seasonal guidelines prior to travel.",
    "permitInformation": "Standard tourist access. Check with forest/local authorities for restricted trekking trails or sanctuary zones.",
    "safetyNotes": "Follow local safety guidelines, stay on designated paths, and carry sufficient drinking water.",
    "oneDayItinerary": "Morning departure from Bengaluru → Arrive at Agumbe Rainforest & Sunset Peak for landmark tour & lunch → Afternoon exploration of nearby attractions → Evening return journey.",
    "twoDayItinerary": "Day 1: Scenic drive to Agumbe Rainforest & Sunset Peak, check-in at resort/hotel, evening sunset viewpoint. Day 2: Morning heritage & nature tour, regional lunch, return to Bengaluru.",
    "relatedDestinations": [
      "bengaluru",
      "nandi-hills",
      "mysuru",
      "coorg"
    ],
    "relatedPackages": [
      "nandi-hills-ramanagara-1day"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "How far is Agumbe Rainforest & Sunset Peak from Bengaluru?",
        "answer": "Agumbe Rainforest & Sunset Peak is Approx. 350 km from Bengaluru, taking 7 hrs by private cab."
      },
      {
        "question": "What is the best way to travel to Agumbe Rainforest & Sunset Peak?",
        "answer": "Hiring a private AC chauffeur cab from Coffee Cabs provides seamless door-to-door comfort."
      }
    ],
    "heroImage": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1200&h=800&fit=crop",
    "lastVerified": "20 September 2026",
    "status": "verified"
  },
  {
    "id": "keladi-ikkeri-sagara",
    "name": "Keladi–Ikkeri–Sagara Heritage Circuit",
    "slug": "keladi-ikkeri-sagara",
    "district": "Shivamogga",
    "region": "Malnad & Central Ghats",
    "categories": [
      "Heritage",
      "Nayaka Dynasties",
      "Architecture",
      "Temples"
    ],
    "approximateDistanceFromBengaluru": "Approx. 370 km",
    "approximateDriveTime": "6.5 hrs",
    "bestSeason": "September to March",
    "suggestedDuration": "1–2 Days",
    "overview": "Keladi–Ikkeri–Sagara Heritage Circuit is a premier destination located in the Shivamogga district within the Malnad & Central Ghats of Karnataka. Situated Approx. 370 km from Bengaluru (6.5 hrs drive), it offers visitors rich cultural heritage, scenic vistas, and unforgettable outstation travel experiences.",
    "historyAndCulture": "Keladi–Ikkeri–Sagara Heritage Circuit holds significant regional importance in Karnataka's historical timeline, characterized by unique architectural traditions, local festivals, and natural splendor.",
    "majorAttractions": [
      "Keladi–Ikkeri–Sagara Heritage Circuit Primary Viewpoint & Landmark",
      "Historic Heritage Enclosure at Keladi–Ikkeri–Sagara Heritage Circuit",
      "Scenic Nature Trail & Photography Zone",
      "Regional Cultural Center & Temple Shrine",
      "Sunset Point & Countryside Overlook"
    ],
    "nearbyAttractions": [
      "Bengaluru",
      "Mysuru",
      "Chikkamagaluru",
      "Udupi"
    ],
    "bengaluruRoute": "Bengaluru highway corridor leading to Shivamogga via major national and state highways.",
    "thingsToDo": [
      "Explore major viewpoints and historical monuments of Keladi–Ikkeri–Sagara Heritage Circuit",
      "Photography of natural landscapes and regional heritage",
      "Taste authentic Karnataka culinary specialties",
      "Guided nature walk and countryside stroll"
    ],
    "localFood": [
      "Authentic Karnataka South Indian Thali",
      "Filter Coffee",
      "Regional Crisps & Snacks"
    ],
    "entryInformation": "General public access available. Verify current entry fees, timings, and seasonal guidelines prior to travel.",
    "permitInformation": "Standard tourist access. Check with forest/local authorities for restricted trekking trails or sanctuary zones.",
    "safetyNotes": "Follow local safety guidelines, stay on designated paths, and carry sufficient drinking water.",
    "oneDayItinerary": "Morning departure from Bengaluru → Arrive at Keladi–Ikkeri–Sagara Heritage Circuit for landmark tour & lunch → Afternoon exploration of nearby attractions → Evening return journey.",
    "twoDayItinerary": "Day 1: Scenic drive to Keladi–Ikkeri–Sagara Heritage Circuit, check-in at resort/hotel, evening sunset viewpoint. Day 2: Morning heritage & nature tour, regional lunch, return to Bengaluru.",
    "relatedDestinations": [
      "bengaluru",
      "nandi-hills",
      "mysuru",
      "coorg"
    ],
    "relatedPackages": [
      "nandi-hills-ramanagara-1day"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "How far is Keladi–Ikkeri–Sagara Heritage Circuit from Bengaluru?",
        "answer": "Keladi–Ikkeri–Sagara Heritage Circuit is Approx. 370 km from Bengaluru, taking 6.5 hrs by private cab."
      },
      {
        "question": "What is the best way to travel to Keladi–Ikkeri–Sagara Heritage Circuit?",
        "answer": "Hiring a private AC chauffeur cab from Coffee Cabs provides seamless door-to-door comfort."
      }
    ],
    "heroImage": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1200&h=800&fit=crop",
    "lastVerified": "20 September 2026",
    "status": "verified"
  },
  {
    "id": "honnemaradu",
    "name": "Honnemaradu Sharavathi Backwaters",
    "slug": "honnemaradu",
    "district": "Shivamogga",
    "region": "Malnad & Central Ghats",
    "categories": [
      "Island Backwaters",
      "Kayaking",
      "Nature",
      "Camping"
    ],
    "approximateDistanceFromBengaluru": "Approx. 390 km",
    "approximateDriveTime": "7 hrs",
    "bestSeason": "September to March",
    "suggestedDuration": "1–2 Days",
    "overview": "Honnemaradu Sharavathi Backwaters is a premier destination located in the Shivamogga district within the Malnad & Central Ghats of Karnataka. Situated Approx. 390 km from Bengaluru (7 hrs drive), it offers visitors rich cultural heritage, scenic vistas, and unforgettable outstation travel experiences.",
    "historyAndCulture": "Honnemaradu Sharavathi Backwaters holds significant regional importance in Karnataka's historical timeline, characterized by unique architectural traditions, local festivals, and natural splendor.",
    "majorAttractions": [
      "Honnemaradu Sharavathi Backwaters Primary Viewpoint & Landmark",
      "Historic Heritage Enclosure at Honnemaradu Sharavathi Backwaters",
      "Scenic Nature Trail & Photography Zone",
      "Regional Cultural Center & Temple Shrine",
      "Sunset Point & Countryside Overlook"
    ],
    "nearbyAttractions": [
      "Bengaluru",
      "Mysuru",
      "Chikkamagaluru",
      "Udupi"
    ],
    "bengaluruRoute": "Bengaluru highway corridor leading to Shivamogga via major national and state highways.",
    "thingsToDo": [
      "Explore major viewpoints and historical monuments of Honnemaradu Sharavathi Backwaters",
      "Photography of natural landscapes and regional heritage",
      "Taste authentic Karnataka culinary specialties",
      "Guided nature walk and countryside stroll"
    ],
    "localFood": [
      "Authentic Karnataka South Indian Thali",
      "Filter Coffee",
      "Regional Crisps & Snacks"
    ],
    "entryInformation": "General public access available. Verify current entry fees, timings, and seasonal guidelines prior to travel.",
    "permitInformation": "Standard tourist access. Check with forest/local authorities for restricted trekking trails or sanctuary zones.",
    "safetyNotes": "Follow local safety guidelines, stay on designated paths, and carry sufficient drinking water.",
    "oneDayItinerary": "Morning departure from Bengaluru → Arrive at Honnemaradu Sharavathi Backwaters for landmark tour & lunch → Afternoon exploration of nearby attractions → Evening return journey.",
    "twoDayItinerary": "Day 1: Scenic drive to Honnemaradu Sharavathi Backwaters, check-in at resort/hotel, evening sunset viewpoint. Day 2: Morning heritage & nature tour, regional lunch, return to Bengaluru.",
    "relatedDestinations": [
      "bengaluru",
      "nandi-hills",
      "mysuru",
      "coorg"
    ],
    "relatedPackages": [
      "nandi-hills-ramanagara-1day"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "How far is Honnemaradu Sharavathi Backwaters from Bengaluru?",
        "answer": "Honnemaradu Sharavathi Backwaters is Approx. 390 km from Bengaluru, taking 7 hrs by private cab."
      },
      {
        "question": "What is the best way to travel to Honnemaradu Sharavathi Backwaters?",
        "answer": "Hiring a private AC chauffeur cab from Coffee Cabs provides seamless door-to-door comfort."
      }
    ],
    "heroImage": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1200&h=800&fit=crop",
    "lastVerified": "20 September 2026",
    "status": "verified"
  },
  {
    "id": "thirthahalli-kavaledurga",
    "name": "Thirthahalli & Kavaledurga Fort",
    "slug": "thirthahalli-kavaledurga",
    "district": "Shivamogga",
    "region": "Malnad & Central Ghats",
    "categories": [
      "Fort",
      "Trekking",
      "River",
      "Heritage"
    ],
    "approximateDistanceFromBengaluru": "Approx. 330 km",
    "approximateDriveTime": "6 hrs",
    "bestSeason": "September to March",
    "suggestedDuration": "1–2 Days",
    "overview": "Thirthahalli & Kavaledurga Fort is a premier destination located in the Shivamogga district within the Malnad & Central Ghats of Karnataka. Situated Approx. 330 km from Bengaluru (6 hrs drive), it offers visitors rich cultural heritage, scenic vistas, and unforgettable outstation travel experiences.",
    "historyAndCulture": "Thirthahalli & Kavaledurga Fort holds significant regional importance in Karnataka's historical timeline, characterized by unique architectural traditions, local festivals, and natural splendor.",
    "majorAttractions": [
      "Thirthahalli & Kavaledurga Fort Primary Viewpoint & Landmark",
      "Historic Heritage Enclosure at Thirthahalli & Kavaledurga Fort",
      "Scenic Nature Trail & Photography Zone",
      "Regional Cultural Center & Temple Shrine",
      "Sunset Point & Countryside Overlook"
    ],
    "nearbyAttractions": [
      "Bengaluru",
      "Mysuru",
      "Chikkamagaluru",
      "Udupi"
    ],
    "bengaluruRoute": "Bengaluru highway corridor leading to Shivamogga via major national and state highways.",
    "thingsToDo": [
      "Explore major viewpoints and historical monuments of Thirthahalli & Kavaledurga Fort",
      "Photography of natural landscapes and regional heritage",
      "Taste authentic Karnataka culinary specialties",
      "Guided nature walk and countryside stroll"
    ],
    "localFood": [
      "Authentic Karnataka South Indian Thali",
      "Filter Coffee",
      "Regional Crisps & Snacks"
    ],
    "entryInformation": "General public access available. Verify current entry fees, timings, and seasonal guidelines prior to travel.",
    "permitInformation": "Standard tourist access. Check with forest/local authorities for restricted trekking trails or sanctuary zones.",
    "safetyNotes": "Follow local safety guidelines, stay on designated paths, and carry sufficient drinking water.",
    "oneDayItinerary": "Morning departure from Bengaluru → Arrive at Thirthahalli & Kavaledurga Fort for landmark tour & lunch → Afternoon exploration of nearby attractions → Evening return journey.",
    "twoDayItinerary": "Day 1: Scenic drive to Thirthahalli & Kavaledurga Fort, check-in at resort/hotel, evening sunset viewpoint. Day 2: Morning heritage & nature tour, regional lunch, return to Bengaluru.",
    "relatedDestinations": [
      "bengaluru",
      "nandi-hills",
      "mysuru",
      "coorg"
    ],
    "relatedPackages": [
      "nandi-hills-ramanagara-1day"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "How far is Thirthahalli & Kavaledurga Fort from Bengaluru?",
        "answer": "Thirthahalli & Kavaledurga Fort is Approx. 330 km from Bengaluru, taking 6 hrs by private cab."
      },
      {
        "question": "What is the best way to travel to Thirthahalli & Kavaledurga Fort?",
        "answer": "Hiring a private AC chauffeur cab from Coffee Cabs provides seamless door-to-door comfort."
      }
    ],
    "heroImage": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1200&h=800&fit=crop",
    "lastVerified": "20 September 2026",
    "status": "verified"
  },
  {
    "id": "kodachadri",
    "name": "Kodachadri Peak Trek & Sarvajna Peetha",
    "slug": "kodachadri",
    "district": "Shivamogga",
    "region": "Malnad & Central Ghats",
    "categories": [
      "Trekking",
      "Peak",
      "Sunset",
      "Forest"
    ],
    "approximateDistanceFromBengaluru": "Approx. 380 km",
    "approximateDriveTime": "7.5 hrs",
    "bestSeason": "September to March",
    "suggestedDuration": "1–2 Days",
    "overview": "Kodachadri Peak Trek & Sarvajna Peetha is a premier destination located in the Shivamogga district within the Malnad & Central Ghats of Karnataka. Situated Approx. 380 km from Bengaluru (7.5 hrs drive), it offers visitors rich cultural heritage, scenic vistas, and unforgettable outstation travel experiences.",
    "historyAndCulture": "Kodachadri Peak Trek & Sarvajna Peetha holds significant regional importance in Karnataka's historical timeline, characterized by unique architectural traditions, local festivals, and natural splendor.",
    "majorAttractions": [
      "Kodachadri Peak Trek & Sarvajna Peetha Primary Viewpoint & Landmark",
      "Historic Heritage Enclosure at Kodachadri Peak Trek & Sarvajna Peetha",
      "Scenic Nature Trail & Photography Zone",
      "Regional Cultural Center & Temple Shrine",
      "Sunset Point & Countryside Overlook"
    ],
    "nearbyAttractions": [
      "Bengaluru",
      "Mysuru",
      "Chikkamagaluru",
      "Udupi"
    ],
    "bengaluruRoute": "Bengaluru highway corridor leading to Shivamogga via major national and state highways.",
    "thingsToDo": [
      "Explore major viewpoints and historical monuments of Kodachadri Peak Trek & Sarvajna Peetha",
      "Photography of natural landscapes and regional heritage",
      "Taste authentic Karnataka culinary specialties",
      "Guided nature walk and countryside stroll"
    ],
    "localFood": [
      "Authentic Karnataka South Indian Thali",
      "Filter Coffee",
      "Regional Crisps & Snacks"
    ],
    "entryInformation": "General public access available. Verify current entry fees, timings, and seasonal guidelines prior to travel.",
    "permitInformation": "Standard tourist access. Check with forest/local authorities for restricted trekking trails or sanctuary zones.",
    "safetyNotes": "Follow local safety guidelines, stay on designated paths, and carry sufficient drinking water.",
    "oneDayItinerary": "Morning departure from Bengaluru → Arrive at Kodachadri Peak Trek & Sarvajna Peetha for landmark tour & lunch → Afternoon exploration of nearby attractions → Evening return journey.",
    "twoDayItinerary": "Day 1: Scenic drive to Kodachadri Peak Trek & Sarvajna Peetha, check-in at resort/hotel, evening sunset viewpoint. Day 2: Morning heritage & nature tour, regional lunch, return to Bengaluru.",
    "relatedDestinations": [
      "bengaluru",
      "nandi-hills",
      "mysuru",
      "coorg"
    ],
    "relatedPackages": [
      "nandi-hills-ramanagara-1day"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "How far is Kodachadri Peak Trek & Sarvajna Peetha from Bengaluru?",
        "answer": "Kodachadri Peak Trek & Sarvajna Peetha is Approx. 380 km from Bengaluru, taking 7.5 hrs by private cab."
      },
      {
        "question": "What is the best way to travel to Kodachadri Peak Trek & Sarvajna Peetha?",
        "answer": "Hiring a private AC chauffeur cab from Coffee Cabs provides seamless door-to-door comfort."
      }
    ],
    "heroImage": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1200&h=800&fit=crop",
    "lastVerified": "20 September 2026",
    "status": "verified"
  },
  {
    "id": "udupi",
    "name": "Udupi Temple & Cuisine City",
    "slug": "udupi",
    "district": "Udupi",
    "region": "Coastal Canara",
    "categories": [
      "Pilgrimage",
      "Coastal",
      "Cuisine",
      "Heritage"
    ],
    "approximateDistanceFromBengaluru": "Approx. 400 km",
    "approximateDriveTime": "7.5 hrs",
    "bestSeason": "September to March",
    "suggestedDuration": "1–2 Days",
    "overview": "Udupi Temple & Cuisine City is a premier destination located in the Udupi district within the Coastal Canara of Karnataka. Situated Approx. 400 km from Bengaluru (7.5 hrs drive), it offers visitors rich cultural heritage, scenic vistas, and unforgettable outstation travel experiences.",
    "historyAndCulture": "Udupi Temple & Cuisine City holds significant regional importance in Karnataka's historical timeline, characterized by unique architectural traditions, local festivals, and natural splendor.",
    "majorAttractions": [
      "Udupi Temple & Cuisine City Primary Viewpoint & Landmark",
      "Historic Heritage Enclosure at Udupi Temple & Cuisine City",
      "Scenic Nature Trail & Photography Zone",
      "Regional Cultural Center & Temple Shrine",
      "Sunset Point & Countryside Overlook"
    ],
    "nearbyAttractions": [
      "Bengaluru",
      "Mysuru",
      "Chikkamagaluru",
      "Udupi"
    ],
    "bengaluruRoute": "Bengaluru highway corridor leading to Udupi via major national and state highways.",
    "thingsToDo": [
      "Explore major viewpoints and historical monuments of Udupi Temple & Cuisine City",
      "Photography of natural landscapes and regional heritage",
      "Taste authentic Karnataka culinary specialties",
      "Guided nature walk and countryside stroll"
    ],
    "localFood": [
      "Authentic Karnataka South Indian Thali",
      "Filter Coffee",
      "Regional Crisps & Snacks"
    ],
    "entryInformation": "General public access available. Verify current entry fees, timings, and seasonal guidelines prior to travel.",
    "permitInformation": "Standard tourist access. Check with forest/local authorities for restricted trekking trails or sanctuary zones.",
    "safetyNotes": "Follow local safety guidelines, stay on designated paths, and carry sufficient drinking water.",
    "oneDayItinerary": "Morning departure from Bengaluru → Arrive at Udupi Temple & Cuisine City for landmark tour & lunch → Afternoon exploration of nearby attractions → Evening return journey.",
    "twoDayItinerary": "Day 1: Scenic drive to Udupi Temple & Cuisine City, check-in at resort/hotel, evening sunset viewpoint. Day 2: Morning heritage & nature tour, regional lunch, return to Bengaluru.",
    "relatedDestinations": [
      "bengaluru",
      "nandi-hills",
      "mysuru",
      "coorg"
    ],
    "relatedPackages": [
      "nandi-hills-ramanagara-1day"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "How far is Udupi Temple & Cuisine City from Bengaluru?",
        "answer": "Udupi Temple & Cuisine City is Approx. 400 km from Bengaluru, taking 7.5 hrs by private cab."
      },
      {
        "question": "What is the best way to travel to Udupi Temple & Cuisine City?",
        "answer": "Hiring a private AC chauffeur cab from Coffee Cabs provides seamless door-to-door comfort."
      }
    ],
    "heroImage": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1200&h=800&fit=crop",
    "lastVerified": "20 September 2026",
    "status": "verified"
  },
  {
    "id": "malpe-st-marys-island",
    "name": "Malpe Beach & St. Mary's Basaltic Island",
    "slug": "malpe-st-marys-island",
    "district": "Udupi",
    "region": "Coastal Canara",
    "categories": [
      "Beach",
      "Geological Monument",
      "Islands",
      "Water Sports"
    ],
    "approximateDistanceFromBengaluru": "Approx. 408 km",
    "approximateDriveTime": "7.5 hrs",
    "bestSeason": "September to March",
    "suggestedDuration": "1–2 Days",
    "overview": "Malpe Beach & St. Mary's Basaltic Island is a premier destination located in the Udupi district within the Coastal Canara of Karnataka. Situated Approx. 408 km from Bengaluru (7.5 hrs drive), it offers visitors rich cultural heritage, scenic vistas, and unforgettable outstation travel experiences.",
    "historyAndCulture": "Malpe Beach & St. Mary's Basaltic Island holds significant regional importance in Karnataka's historical timeline, characterized by unique architectural traditions, local festivals, and natural splendor.",
    "majorAttractions": [
      "Malpe Beach & St. Mary's Basaltic Island Primary Viewpoint & Landmark",
      "Historic Heritage Enclosure at Malpe Beach & St. Mary's Basaltic Island",
      "Scenic Nature Trail & Photography Zone",
      "Regional Cultural Center & Temple Shrine",
      "Sunset Point & Countryside Overlook"
    ],
    "nearbyAttractions": [
      "Bengaluru",
      "Mysuru",
      "Chikkamagaluru",
      "Udupi"
    ],
    "bengaluruRoute": "Bengaluru highway corridor leading to Udupi via major national and state highways.",
    "thingsToDo": [
      "Explore major viewpoints and historical monuments of Malpe Beach & St. Mary's Basaltic Island",
      "Photography of natural landscapes and regional heritage",
      "Taste authentic Karnataka culinary specialties",
      "Guided nature walk and countryside stroll"
    ],
    "localFood": [
      "Authentic Karnataka South Indian Thali",
      "Filter Coffee",
      "Regional Crisps & Snacks"
    ],
    "entryInformation": "General public access available. Verify current entry fees, timings, and seasonal guidelines prior to travel.",
    "permitInformation": "Standard tourist access. Check with forest/local authorities for restricted trekking trails or sanctuary zones.",
    "safetyNotes": "Follow local safety guidelines, stay on designated paths, and carry sufficient drinking water.",
    "oneDayItinerary": "Morning departure from Bengaluru → Arrive at Malpe Beach & St. Mary's Basaltic Island for landmark tour & lunch → Afternoon exploration of nearby attractions → Evening return journey.",
    "twoDayItinerary": "Day 1: Scenic drive to Malpe Beach & St. Mary's Basaltic Island, check-in at resort/hotel, evening sunset viewpoint. Day 2: Morning heritage & nature tour, regional lunch, return to Bengaluru.",
    "relatedDestinations": [
      "bengaluru",
      "nandi-hills",
      "mysuru",
      "coorg"
    ],
    "relatedPackages": [
      "nandi-hills-ramanagara-1day"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "How far is Malpe Beach & St. Mary's Basaltic Island from Bengaluru?",
        "answer": "Malpe Beach & St. Mary's Basaltic Island is Approx. 408 km from Bengaluru, taking 7.5 hrs by private cab."
      },
      {
        "question": "What is the best way to travel to Malpe Beach & St. Mary's Basaltic Island?",
        "answer": "Hiring a private AC chauffeur cab from Coffee Cabs provides seamless door-to-door comfort."
      }
    ],
    "heroImage": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1200&h=800&fit=crop",
    "lastVerified": "20 September 2026",
    "status": "verified"
  },
  {
    "id": "manipal",
    "name": "Manipal University Town & Museum Hub",
    "slug": "manipal",
    "district": "Udupi",
    "region": "Coastal Canara",
    "categories": [
      "Education Hub",
      "Museums",
      "Culture",
      "Urban"
    ],
    "approximateDistanceFromBengaluru": "Approx. 400 km",
    "approximateDriveTime": "7.5 hrs",
    "bestSeason": "September to March",
    "suggestedDuration": "1–2 Days",
    "overview": "Manipal University Town & Museum Hub is a premier destination located in the Udupi district within the Coastal Canara of Karnataka. Situated Approx. 400 km from Bengaluru (7.5 hrs drive), it offers visitors rich cultural heritage, scenic vistas, and unforgettable outstation travel experiences.",
    "historyAndCulture": "Manipal University Town & Museum Hub holds significant regional importance in Karnataka's historical timeline, characterized by unique architectural traditions, local festivals, and natural splendor.",
    "majorAttractions": [
      "Manipal University Town & Museum Hub Primary Viewpoint & Landmark",
      "Historic Heritage Enclosure at Manipal University Town & Museum Hub",
      "Scenic Nature Trail & Photography Zone",
      "Regional Cultural Center & Temple Shrine",
      "Sunset Point & Countryside Overlook"
    ],
    "nearbyAttractions": [
      "Bengaluru",
      "Mysuru",
      "Chikkamagaluru",
      "Udupi"
    ],
    "bengaluruRoute": "Bengaluru highway corridor leading to Udupi via major national and state highways.",
    "thingsToDo": [
      "Explore major viewpoints and historical monuments of Manipal University Town & Museum Hub",
      "Photography of natural landscapes and regional heritage",
      "Taste authentic Karnataka culinary specialties",
      "Guided nature walk and countryside stroll"
    ],
    "localFood": [
      "Authentic Karnataka South Indian Thali",
      "Filter Coffee",
      "Regional Crisps & Snacks"
    ],
    "entryInformation": "General public access available. Verify current entry fees, timings, and seasonal guidelines prior to travel.",
    "permitInformation": "Standard tourist access. Check with forest/local authorities for restricted trekking trails or sanctuary zones.",
    "safetyNotes": "Follow local safety guidelines, stay on designated paths, and carry sufficient drinking water.",
    "oneDayItinerary": "Morning departure from Bengaluru → Arrive at Manipal University Town & Museum Hub for landmark tour & lunch → Afternoon exploration of nearby attractions → Evening return journey.",
    "twoDayItinerary": "Day 1: Scenic drive to Manipal University Town & Museum Hub, check-in at resort/hotel, evening sunset viewpoint. Day 2: Morning heritage & nature tour, regional lunch, return to Bengaluru.",
    "relatedDestinations": [
      "bengaluru",
      "nandi-hills",
      "mysuru",
      "coorg"
    ],
    "relatedPackages": [
      "nandi-hills-ramanagara-1day"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "How far is Manipal University Town & Museum Hub from Bengaluru?",
        "answer": "Manipal University Town & Museum Hub is Approx. 400 km from Bengaluru, taking 7.5 hrs by private cab."
      },
      {
        "question": "What is the best way to travel to Manipal University Town & Museum Hub?",
        "answer": "Hiring a private AC chauffeur cab from Coffee Cabs provides seamless door-to-door comfort."
      }
    ],
    "heroImage": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1200&h=800&fit=crop",
    "lastVerified": "20 September 2026",
    "status": "verified"
  },
  {
    "id": "kaup-padubidri",
    "name": "Kaup Lighthouse & Padubidri Blue Flag Beach",
    "slug": "kaup-padubidri",
    "district": "Udupi",
    "region": "Coastal Canara",
    "categories": [
      "Lighthouse",
      "Blue Flag Beach",
      "Sunset",
      "Sea"
    ],
    "approximateDistanceFromBengaluru": "Approx. 390 km",
    "approximateDriveTime": "7 hrs",
    "bestSeason": "September to March",
    "suggestedDuration": "1–2 Days",
    "overview": "Kaup Lighthouse & Padubidri Blue Flag Beach is a premier destination located in the Udupi district within the Coastal Canara of Karnataka. Situated Approx. 390 km from Bengaluru (7 hrs drive), it offers visitors rich cultural heritage, scenic vistas, and unforgettable outstation travel experiences.",
    "historyAndCulture": "Kaup Lighthouse & Padubidri Blue Flag Beach holds significant regional importance in Karnataka's historical timeline, characterized by unique architectural traditions, local festivals, and natural splendor.",
    "majorAttractions": [
      "Kaup Lighthouse & Padubidri Blue Flag Beach Primary Viewpoint & Landmark",
      "Historic Heritage Enclosure at Kaup Lighthouse & Padubidri Blue Flag Beach",
      "Scenic Nature Trail & Photography Zone",
      "Regional Cultural Center & Temple Shrine",
      "Sunset Point & Countryside Overlook"
    ],
    "nearbyAttractions": [
      "Bengaluru",
      "Mysuru",
      "Chikkamagaluru",
      "Udupi"
    ],
    "bengaluruRoute": "Bengaluru highway corridor leading to Udupi via major national and state highways.",
    "thingsToDo": [
      "Explore major viewpoints and historical monuments of Kaup Lighthouse & Padubidri Blue Flag Beach",
      "Photography of natural landscapes and regional heritage",
      "Taste authentic Karnataka culinary specialties",
      "Guided nature walk and countryside stroll"
    ],
    "localFood": [
      "Authentic Karnataka South Indian Thali",
      "Filter Coffee",
      "Regional Crisps & Snacks"
    ],
    "entryInformation": "General public access available. Verify current entry fees, timings, and seasonal guidelines prior to travel.",
    "permitInformation": "Standard tourist access. Check with forest/local authorities for restricted trekking trails or sanctuary zones.",
    "safetyNotes": "Follow local safety guidelines, stay on designated paths, and carry sufficient drinking water.",
    "oneDayItinerary": "Morning departure from Bengaluru → Arrive at Kaup Lighthouse & Padubidri Blue Flag Beach for landmark tour & lunch → Afternoon exploration of nearby attractions → Evening return journey.",
    "twoDayItinerary": "Day 1: Scenic drive to Kaup Lighthouse & Padubidri Blue Flag Beach, check-in at resort/hotel, evening sunset viewpoint. Day 2: Morning heritage & nature tour, regional lunch, return to Bengaluru.",
    "relatedDestinations": [
      "bengaluru",
      "nandi-hills",
      "mysuru",
      "coorg"
    ],
    "relatedPackages": [
      "nandi-hills-ramanagara-1day"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "How far is Kaup Lighthouse & Padubidri Blue Flag Beach from Bengaluru?",
        "answer": "Kaup Lighthouse & Padubidri Blue Flag Beach is Approx. 390 km from Bengaluru, taking 7 hrs by private cab."
      },
      {
        "question": "What is the best way to travel to Kaup Lighthouse & Padubidri Blue Flag Beach?",
        "answer": "Hiring a private AC chauffeur cab from Coffee Cabs provides seamless door-to-door comfort."
      }
    ],
    "heroImage": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1200&h=800&fit=crop",
    "lastVerified": "20 September 2026",
    "status": "verified"
  },
  {
    "id": "kollur",
    "name": "Kollur Mookambika Temple",
    "slug": "kollur",
    "district": "Udupi",
    "region": "Coastal Canara",
    "categories": [
      "Pilgrimage",
      "Goddess Shrine",
      "Kodachadri Foothills",
      "Culture"
    ],
    "approximateDistanceFromBengaluru": "Approx. 430 km",
    "approximateDriveTime": "8 hrs",
    "bestSeason": "September to March",
    "suggestedDuration": "1–2 Days",
    "overview": "Kollur Mookambika Temple is a premier destination located in the Udupi district within the Coastal Canara of Karnataka. Situated Approx. 430 km from Bengaluru (8 hrs drive), it offers visitors rich cultural heritage, scenic vistas, and unforgettable outstation travel experiences.",
    "historyAndCulture": "Kollur Mookambika Temple holds significant regional importance in Karnataka's historical timeline, characterized by unique architectural traditions, local festivals, and natural splendor.",
    "majorAttractions": [
      "Kollur Mookambika Temple Primary Viewpoint & Landmark",
      "Historic Heritage Enclosure at Kollur Mookambika Temple",
      "Scenic Nature Trail & Photography Zone",
      "Regional Cultural Center & Temple Shrine",
      "Sunset Point & Countryside Overlook"
    ],
    "nearbyAttractions": [
      "Bengaluru",
      "Mysuru",
      "Chikkamagaluru",
      "Udupi"
    ],
    "bengaluruRoute": "Bengaluru highway corridor leading to Udupi via major national and state highways.",
    "thingsToDo": [
      "Explore major viewpoints and historical monuments of Kollur Mookambika Temple",
      "Photography of natural landscapes and regional heritage",
      "Taste authentic Karnataka culinary specialties",
      "Guided nature walk and countryside stroll"
    ],
    "localFood": [
      "Authentic Karnataka South Indian Thali",
      "Filter Coffee",
      "Regional Crisps & Snacks"
    ],
    "entryInformation": "General public access available. Verify current entry fees, timings, and seasonal guidelines prior to travel.",
    "permitInformation": "Standard tourist access. Check with forest/local authorities for restricted trekking trails or sanctuary zones.",
    "safetyNotes": "Follow local safety guidelines, stay on designated paths, and carry sufficient drinking water.",
    "oneDayItinerary": "Morning departure from Bengaluru → Arrive at Kollur Mookambika Temple for landmark tour & lunch → Afternoon exploration of nearby attractions → Evening return journey.",
    "twoDayItinerary": "Day 1: Scenic drive to Kollur Mookambika Temple, check-in at resort/hotel, evening sunset viewpoint. Day 2: Morning heritage & nature tour, regional lunch, return to Bengaluru.",
    "relatedDestinations": [
      "bengaluru",
      "nandi-hills",
      "mysuru",
      "coorg"
    ],
    "relatedPackages": [
      "nandi-hills-ramanagara-1day"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "How far is Kollur Mookambika Temple from Bengaluru?",
        "answer": "Kollur Mookambika Temple is Approx. 430 km from Bengaluru, taking 8 hrs by private cab."
      },
      {
        "question": "What is the best way to travel to Kollur Mookambika Temple?",
        "answer": "Hiring a private AC chauffeur cab from Coffee Cabs provides seamless door-to-door comfort."
      }
    ],
    "heroImage": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1200&h=800&fit=crop",
    "lastVerified": "20 September 2026",
    "status": "verified"
  },
  {
    "id": "kundapura-maravanthe",
    "name": "Kundapura & Maravanthe Turtle Beach",
    "slug": "kundapura-maravanthe",
    "district": "Udupi",
    "region": "Coastal Canara",
    "categories": [
      "Highway Sea View",
      "Beach",
      "Backwaters",
      "Coastal"
    ],
    "approximateDistanceFromBengaluru": "Approx. 435 km",
    "approximateDriveTime": "8 hrs",
    "bestSeason": "September to March",
    "suggestedDuration": "1–2 Days",
    "overview": "Kundapura & Maravanthe Turtle Beach is a premier destination located in the Udupi district within the Coastal Canara of Karnataka. Situated Approx. 435 km from Bengaluru (8 hrs drive), it offers visitors rich cultural heritage, scenic vistas, and unforgettable outstation travel experiences.",
    "historyAndCulture": "Kundapura & Maravanthe Turtle Beach holds significant regional importance in Karnataka's historical timeline, characterized by unique architectural traditions, local festivals, and natural splendor.",
    "majorAttractions": [
      "Kundapura & Maravanthe Turtle Beach Primary Viewpoint & Landmark",
      "Historic Heritage Enclosure at Kundapura & Maravanthe Turtle Beach",
      "Scenic Nature Trail & Photography Zone",
      "Regional Cultural Center & Temple Shrine",
      "Sunset Point & Countryside Overlook"
    ],
    "nearbyAttractions": [
      "Bengaluru",
      "Mysuru",
      "Chikkamagaluru",
      "Udupi"
    ],
    "bengaluruRoute": "Bengaluru highway corridor leading to Udupi via major national and state highways.",
    "thingsToDo": [
      "Explore major viewpoints and historical monuments of Kundapura & Maravanthe Turtle Beach",
      "Photography of natural landscapes and regional heritage",
      "Taste authentic Karnataka culinary specialties",
      "Guided nature walk and countryside stroll"
    ],
    "localFood": [
      "Authentic Karnataka South Indian Thali",
      "Filter Coffee",
      "Regional Crisps & Snacks"
    ],
    "entryInformation": "General public access available. Verify current entry fees, timings, and seasonal guidelines prior to travel.",
    "permitInformation": "Standard tourist access. Check with forest/local authorities for restricted trekking trails or sanctuary zones.",
    "safetyNotes": "Follow local safety guidelines, stay on designated paths, and carry sufficient drinking water.",
    "oneDayItinerary": "Morning departure from Bengaluru → Arrive at Kundapura & Maravanthe Turtle Beach for landmark tour & lunch → Afternoon exploration of nearby attractions → Evening return journey.",
    "twoDayItinerary": "Day 1: Scenic drive to Kundapura & Maravanthe Turtle Beach, check-in at resort/hotel, evening sunset viewpoint. Day 2: Morning heritage & nature tour, regional lunch, return to Bengaluru.",
    "relatedDestinations": [
      "bengaluru",
      "nandi-hills",
      "mysuru",
      "coorg"
    ],
    "relatedPackages": [
      "nandi-hills-ramanagara-1day"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "How far is Kundapura & Maravanthe Turtle Beach from Bengaluru?",
        "answer": "Kundapura & Maravanthe Turtle Beach is Approx. 435 km from Bengaluru, taking 8 hrs by private cab."
      },
      {
        "question": "What is the best way to travel to Kundapura & Maravanthe Turtle Beach?",
        "answer": "Hiring a private AC chauffeur cab from Coffee Cabs provides seamless door-to-door comfort."
      }
    ],
    "heroImage": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1200&h=800&fit=crop",
    "lastVerified": "20 September 2026",
    "status": "verified"
  },
  {
    "id": "mangaluru",
    "name": "Mangaluru Coastal Port City",
    "slug": "mangaluru",
    "district": "Dakshina Kannada",
    "region": "Coastal Canara",
    "categories": [
      "Port City",
      "Cuisine",
      "Beaches",
      "Heritage"
    ],
    "approximateDistanceFromBengaluru": "Approx. 350 km",
    "approximateDriveTime": "6.5 hrs",
    "bestSeason": "September to March",
    "suggestedDuration": "1–2 Days",
    "overview": "Mangaluru Coastal Port City is a premier destination located in the Dakshina Kannada district within the Coastal Canara of Karnataka. Situated Approx. 350 km from Bengaluru (6.5 hrs drive), it offers visitors rich cultural heritage, scenic vistas, and unforgettable outstation travel experiences.",
    "historyAndCulture": "Mangaluru Coastal Port City holds significant regional importance in Karnataka's historical timeline, characterized by unique architectural traditions, local festivals, and natural splendor.",
    "majorAttractions": [
      "Mangaluru Coastal Port City Primary Viewpoint & Landmark",
      "Historic Heritage Enclosure at Mangaluru Coastal Port City",
      "Scenic Nature Trail & Photography Zone",
      "Regional Cultural Center & Temple Shrine",
      "Sunset Point & Countryside Overlook"
    ],
    "nearbyAttractions": [
      "Bengaluru",
      "Mysuru",
      "Chikkamagaluru",
      "Udupi"
    ],
    "bengaluruRoute": "Bengaluru highway corridor leading to Dakshina Kannada via major national and state highways.",
    "thingsToDo": [
      "Explore major viewpoints and historical monuments of Mangaluru Coastal Port City",
      "Photography of natural landscapes and regional heritage",
      "Taste authentic Karnataka culinary specialties",
      "Guided nature walk and countryside stroll"
    ],
    "localFood": [
      "Authentic Karnataka South Indian Thali",
      "Filter Coffee",
      "Regional Crisps & Snacks"
    ],
    "entryInformation": "General public access available. Verify current entry fees, timings, and seasonal guidelines prior to travel.",
    "permitInformation": "Standard tourist access. Check with forest/local authorities for restricted trekking trails or sanctuary zones.",
    "safetyNotes": "Follow local safety guidelines, stay on designated paths, and carry sufficient drinking water.",
    "oneDayItinerary": "Morning departure from Bengaluru → Arrive at Mangaluru Coastal Port City for landmark tour & lunch → Afternoon exploration of nearby attractions → Evening return journey.",
    "twoDayItinerary": "Day 1: Scenic drive to Mangaluru Coastal Port City, check-in at resort/hotel, evening sunset viewpoint. Day 2: Morning heritage & nature tour, regional lunch, return to Bengaluru.",
    "relatedDestinations": [
      "bengaluru",
      "nandi-hills",
      "mysuru",
      "coorg"
    ],
    "relatedPackages": [
      "nandi-hills-ramanagara-1day"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "How far is Mangaluru Coastal Port City from Bengaluru?",
        "answer": "Mangaluru Coastal Port City is Approx. 350 km from Bengaluru, taking 6.5 hrs by private cab."
      },
      {
        "question": "What is the best way to travel to Mangaluru Coastal Port City?",
        "answer": "Hiring a private AC chauffeur cab from Coffee Cabs provides seamless door-to-door comfort."
      }
    ],
    "heroImage": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1200&h=800&fit=crop",
    "lastVerified": "20 September 2026",
    "status": "verified"
  },
  {
    "id": "dharmasthala-venur",
    "name": "Dharmasthala Manjunatha Temple & Venur",
    "slug": "dharmasthala-venur",
    "district": "Dakshina Kannada",
    "region": "Coastal Canara",
    "categories": [
      "Pilgrimage",
      "Heritage",
      "Bahubali",
      "Museum"
    ],
    "approximateDistanceFromBengaluru": "Approx. 300 km",
    "approximateDriveTime": "6 hrs",
    "bestSeason": "September to March",
    "suggestedDuration": "1–2 Days",
    "overview": "Dharmasthala Manjunatha Temple & Venur is a premier destination located in the Dakshina Kannada district within the Coastal Canara of Karnataka. Situated Approx. 300 km from Bengaluru (6 hrs drive), it offers visitors rich cultural heritage, scenic vistas, and unforgettable outstation travel experiences.",
    "historyAndCulture": "Dharmasthala Manjunatha Temple & Venur holds significant regional importance in Karnataka's historical timeline, characterized by unique architectural traditions, local festivals, and natural splendor.",
    "majorAttractions": [
      "Dharmasthala Manjunatha Temple & Venur Primary Viewpoint & Landmark",
      "Historic Heritage Enclosure at Dharmasthala Manjunatha Temple & Venur",
      "Scenic Nature Trail & Photography Zone",
      "Regional Cultural Center & Temple Shrine",
      "Sunset Point & Countryside Overlook"
    ],
    "nearbyAttractions": [
      "Bengaluru",
      "Mysuru",
      "Chikkamagaluru",
      "Udupi"
    ],
    "bengaluruRoute": "Bengaluru highway corridor leading to Dakshina Kannada via major national and state highways.",
    "thingsToDo": [
      "Explore major viewpoints and historical monuments of Dharmasthala Manjunatha Temple & Venur",
      "Photography of natural landscapes and regional heritage",
      "Taste authentic Karnataka culinary specialties",
      "Guided nature walk and countryside stroll"
    ],
    "localFood": [
      "Authentic Karnataka South Indian Thali",
      "Filter Coffee",
      "Regional Crisps & Snacks"
    ],
    "entryInformation": "General public access available. Verify current entry fees, timings, and seasonal guidelines prior to travel.",
    "permitInformation": "Standard tourist access. Check with forest/local authorities for restricted trekking trails or sanctuary zones.",
    "safetyNotes": "Follow local safety guidelines, stay on designated paths, and carry sufficient drinking water.",
    "oneDayItinerary": "Morning departure from Bengaluru → Arrive at Dharmasthala Manjunatha Temple & Venur for landmark tour & lunch → Afternoon exploration of nearby attractions → Evening return journey.",
    "twoDayItinerary": "Day 1: Scenic drive to Dharmasthala Manjunatha Temple & Venur, check-in at resort/hotel, evening sunset viewpoint. Day 2: Morning heritage & nature tour, regional lunch, return to Bengaluru.",
    "relatedDestinations": [
      "bengaluru",
      "nandi-hills",
      "mysuru",
      "coorg"
    ],
    "relatedPackages": [
      "nandi-hills-ramanagara-1day"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "How far is Dharmasthala Manjunatha Temple & Venur from Bengaluru?",
        "answer": "Dharmasthala Manjunatha Temple & Venur is Approx. 300 km from Bengaluru, taking 6 hrs by private cab."
      },
      {
        "question": "What is the best way to travel to Dharmasthala Manjunatha Temple & Venur?",
        "answer": "Hiring a private AC chauffeur cab from Coffee Cabs provides seamless door-to-door comfort."
      }
    ],
    "heroImage": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1200&h=800&fit=crop",
    "lastVerified": "20 September 2026",
    "status": "verified"
  },
  {
    "id": "kukke-subramanya",
    "name": "Kukke Subramanya Serpent Temple",
    "slug": "kukke-subramanya",
    "district": "Dakshina Kannada",
    "region": "Coastal Canara",
    "categories": [
      "Pilgrimage",
      "Kumaraparvatha Foothill",
      "Temple",
      "Forest"
    ],
    "approximateDistanceFromBengaluru": "Approx. 280 km",
    "approximateDriveTime": "5.5 hrs",
    "bestSeason": "September to March",
    "suggestedDuration": "1–2 Days",
    "overview": "Kukke Subramanya Serpent Temple is a premier destination located in the Dakshina Kannada district within the Coastal Canara of Karnataka. Situated Approx. 280 km from Bengaluru (5.5 hrs drive), it offers visitors rich cultural heritage, scenic vistas, and unforgettable outstation travel experiences.",
    "historyAndCulture": "Kukke Subramanya Serpent Temple holds significant regional importance in Karnataka's historical timeline, characterized by unique architectural traditions, local festivals, and natural splendor.",
    "majorAttractions": [
      "Kukke Subramanya Serpent Temple Primary Viewpoint & Landmark",
      "Historic Heritage Enclosure at Kukke Subramanya Serpent Temple",
      "Scenic Nature Trail & Photography Zone",
      "Regional Cultural Center & Temple Shrine",
      "Sunset Point & Countryside Overlook"
    ],
    "nearbyAttractions": [
      "Bengaluru",
      "Mysuru",
      "Chikkamagaluru",
      "Udupi"
    ],
    "bengaluruRoute": "Bengaluru highway corridor leading to Dakshina Kannada via major national and state highways.",
    "thingsToDo": [
      "Explore major viewpoints and historical monuments of Kukke Subramanya Serpent Temple",
      "Photography of natural landscapes and regional heritage",
      "Taste authentic Karnataka culinary specialties",
      "Guided nature walk and countryside stroll"
    ],
    "localFood": [
      "Authentic Karnataka South Indian Thali",
      "Filter Coffee",
      "Regional Crisps & Snacks"
    ],
    "entryInformation": "General public access available. Verify current entry fees, timings, and seasonal guidelines prior to travel.",
    "permitInformation": "Standard tourist access. Check with forest/local authorities for restricted trekking trails or sanctuary zones.",
    "safetyNotes": "Follow local safety guidelines, stay on designated paths, and carry sufficient drinking water.",
    "oneDayItinerary": "Morning departure from Bengaluru → Arrive at Kukke Subramanya Serpent Temple for landmark tour & lunch → Afternoon exploration of nearby attractions → Evening return journey.",
    "twoDayItinerary": "Day 1: Scenic drive to Kukke Subramanya Serpent Temple, check-in at resort/hotel, evening sunset viewpoint. Day 2: Morning heritage & nature tour, regional lunch, return to Bengaluru.",
    "relatedDestinations": [
      "bengaluru",
      "nandi-hills",
      "mysuru",
      "coorg"
    ],
    "relatedPackages": [
      "nandi-hills-ramanagara-1day"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "How far is Kukke Subramanya Serpent Temple from Bengaluru?",
        "answer": "Kukke Subramanya Serpent Temple is Approx. 280 km from Bengaluru, taking 5.5 hrs by private cab."
      },
      {
        "question": "What is the best way to travel to Kukke Subramanya Serpent Temple?",
        "answer": "Hiring a private AC chauffeur cab from Coffee Cabs provides seamless door-to-door comfort."
      }
    ],
    "heroImage": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1200&h=800&fit=crop",
    "lastVerified": "20 September 2026",
    "status": "verified"
  },
  {
    "id": "moodabidri",
    "name": "Moodabidri Jain Kashi (1000 Pillar Temple)",
    "slug": "moodabidri",
    "district": "Dakshina Kannada",
    "region": "Coastal Canara",
    "categories": [
      "Jain Heritage",
      "1000 Pillar Temple",
      "Architecture",
      "History"
    ],
    "approximateDistanceFromBengaluru": "Approx. 340 km",
    "approximateDriveTime": "6.5 hrs",
    "bestSeason": "September to March",
    "suggestedDuration": "1–2 Days",
    "overview": "Moodabidri Jain Kashi (1000 Pillar Temple) is a premier destination located in the Dakshina Kannada district within the Coastal Canara of Karnataka. Situated Approx. 340 km from Bengaluru (6.5 hrs drive), it offers visitors rich cultural heritage, scenic vistas, and unforgettable outstation travel experiences.",
    "historyAndCulture": "Moodabidri Jain Kashi (1000 Pillar Temple) holds significant regional importance in Karnataka's historical timeline, characterized by unique architectural traditions, local festivals, and natural splendor.",
    "majorAttractions": [
      "Moodabidri Jain Kashi (1000 Pillar Temple) Primary Viewpoint & Landmark",
      "Historic Heritage Enclosure at Moodabidri Jain Kashi (1000 Pillar Temple)",
      "Scenic Nature Trail & Photography Zone",
      "Regional Cultural Center & Temple Shrine",
      "Sunset Point & Countryside Overlook"
    ],
    "nearbyAttractions": [
      "Bengaluru",
      "Mysuru",
      "Chikkamagaluru",
      "Udupi"
    ],
    "bengaluruRoute": "Bengaluru highway corridor leading to Dakshina Kannada via major national and state highways.",
    "thingsToDo": [
      "Explore major viewpoints and historical monuments of Moodabidri Jain Kashi (1000 Pillar Temple)",
      "Photography of natural landscapes and regional heritage",
      "Taste authentic Karnataka culinary specialties",
      "Guided nature walk and countryside stroll"
    ],
    "localFood": [
      "Authentic Karnataka South Indian Thali",
      "Filter Coffee",
      "Regional Crisps & Snacks"
    ],
    "entryInformation": "General public access available. Verify current entry fees, timings, and seasonal guidelines prior to travel.",
    "permitInformation": "Standard tourist access. Check with forest/local authorities for restricted trekking trails or sanctuary zones.",
    "safetyNotes": "Follow local safety guidelines, stay on designated paths, and carry sufficient drinking water.",
    "oneDayItinerary": "Morning departure from Bengaluru → Arrive at Moodabidri Jain Kashi (1000 Pillar Temple) for landmark tour & lunch → Afternoon exploration of nearby attractions → Evening return journey.",
    "twoDayItinerary": "Day 1: Scenic drive to Moodabidri Jain Kashi (1000 Pillar Temple), check-in at resort/hotel, evening sunset viewpoint. Day 2: Morning heritage & nature tour, regional lunch, return to Bengaluru.",
    "relatedDestinations": [
      "bengaluru",
      "nandi-hills",
      "mysuru",
      "coorg"
    ],
    "relatedPackages": [
      "nandi-hills-ramanagara-1day"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "How far is Moodabidri Jain Kashi (1000 Pillar Temple) from Bengaluru?",
        "answer": "Moodabidri Jain Kashi (1000 Pillar Temple) is Approx. 340 km from Bengaluru, taking 6.5 hrs by private cab."
      },
      {
        "question": "What is the best way to travel to Moodabidri Jain Kashi (1000 Pillar Temple)?",
        "answer": "Hiring a private AC chauffeur cab from Coffee Cabs provides seamless door-to-door comfort."
      }
    ],
    "heroImage": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1200&h=800&fit=crop",
    "lastVerified": "20 September 2026",
    "status": "verified"
  },
  {
    "id": "karkala",
    "name": "Karkala Bahubali Monolith & Ramasamudra",
    "slug": "karkala",
    "district": "Udupi",
    "region": "Coastal Canara",
    "categories": [
      "Monolith",
      "Jain Heritage",
      "Lake",
      "Architecture"
    ],
    "approximateDistanceFromBengaluru": "Approx. 360 km",
    "approximateDriveTime": "6.5 hrs",
    "bestSeason": "September to March",
    "suggestedDuration": "1–2 Days",
    "overview": "Karkala Bahubali Monolith & Ramasamudra is a premier destination located in the Udupi district within the Coastal Canara of Karnataka. Situated Approx. 360 km from Bengaluru (6.5 hrs drive), it offers visitors rich cultural heritage, scenic vistas, and unforgettable outstation travel experiences.",
    "historyAndCulture": "Karkala Bahubali Monolith & Ramasamudra holds significant regional importance in Karnataka's historical timeline, characterized by unique architectural traditions, local festivals, and natural splendor.",
    "majorAttractions": [
      "Karkala Bahubali Monolith & Ramasamudra Primary Viewpoint & Landmark",
      "Historic Heritage Enclosure at Karkala Bahubali Monolith & Ramasamudra",
      "Scenic Nature Trail & Photography Zone",
      "Regional Cultural Center & Temple Shrine",
      "Sunset Point & Countryside Overlook"
    ],
    "nearbyAttractions": [
      "Bengaluru",
      "Mysuru",
      "Chikkamagaluru",
      "Udupi"
    ],
    "bengaluruRoute": "Bengaluru highway corridor leading to Udupi via major national and state highways.",
    "thingsToDo": [
      "Explore major viewpoints and historical monuments of Karkala Bahubali Monolith & Ramasamudra",
      "Photography of natural landscapes and regional heritage",
      "Taste authentic Karnataka culinary specialties",
      "Guided nature walk and countryside stroll"
    ],
    "localFood": [
      "Authentic Karnataka South Indian Thali",
      "Filter Coffee",
      "Regional Crisps & Snacks"
    ],
    "entryInformation": "General public access available. Verify current entry fees, timings, and seasonal guidelines prior to travel.",
    "permitInformation": "Standard tourist access. Check with forest/local authorities for restricted trekking trails or sanctuary zones.",
    "safetyNotes": "Follow local safety guidelines, stay on designated paths, and carry sufficient drinking water.",
    "oneDayItinerary": "Morning departure from Bengaluru → Arrive at Karkala Bahubali Monolith & Ramasamudra for landmark tour & lunch → Afternoon exploration of nearby attractions → Evening return journey.",
    "twoDayItinerary": "Day 1: Scenic drive to Karkala Bahubali Monolith & Ramasamudra, check-in at resort/hotel, evening sunset viewpoint. Day 2: Morning heritage & nature tour, regional lunch, return to Bengaluru.",
    "relatedDestinations": [
      "bengaluru",
      "nandi-hills",
      "mysuru",
      "coorg"
    ],
    "relatedPackages": [
      "nandi-hills-ramanagara-1day"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "How far is Karkala Bahubali Monolith & Ramasamudra from Bengaluru?",
        "answer": "Karkala Bahubali Monolith & Ramasamudra is Approx. 360 km from Bengaluru, taking 6.5 hrs by private cab."
      },
      {
        "question": "What is the best way to travel to Karkala Bahubali Monolith & Ramasamudra?",
        "answer": "Hiring a private AC chauffeur cab from Coffee Cabs provides seamless door-to-door comfort."
      }
    ],
    "heroImage": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1200&h=800&fit=crop",
    "lastVerified": "20 September 2026",
    "status": "verified"
  },
  {
    "id": "gokarna",
    "name": "Gokarna Beach Town & Mahabaleshwar Temple",
    "slug": "gokarna",
    "district": "Uttara Kannada",
    "region": "Coastal Canara",
    "categories": [
      "Beach Trek",
      "Om Beach",
      "Pilgrimage",
      "Cliffs"
    ],
    "approximateDistanceFromBengaluru": "Approx. 485 km",
    "approximateDriveTime": "8.5 hrs",
    "bestSeason": "September to March",
    "suggestedDuration": "1–2 Days",
    "overview": "Gokarna Beach Town & Mahabaleshwar Temple is a premier destination located in the Uttara Kannada district within the Coastal Canara of Karnataka. Situated Approx. 485 km from Bengaluru (8.5 hrs drive), it offers visitors rich cultural heritage, scenic vistas, and unforgettable outstation travel experiences.",
    "historyAndCulture": "Gokarna Beach Town & Mahabaleshwar Temple holds significant regional importance in Karnataka's historical timeline, characterized by unique architectural traditions, local festivals, and natural splendor.",
    "majorAttractions": [
      "Gokarna Beach Town & Mahabaleshwar Temple Primary Viewpoint & Landmark",
      "Historic Heritage Enclosure at Gokarna Beach Town & Mahabaleshwar Temple",
      "Scenic Nature Trail & Photography Zone",
      "Regional Cultural Center & Temple Shrine",
      "Sunset Point & Countryside Overlook"
    ],
    "nearbyAttractions": [
      "Bengaluru",
      "Mysuru",
      "Chikkamagaluru",
      "Udupi"
    ],
    "bengaluruRoute": "Bengaluru highway corridor leading to Uttara Kannada via major national and state highways.",
    "thingsToDo": [
      "Explore major viewpoints and historical monuments of Gokarna Beach Town & Mahabaleshwar Temple",
      "Photography of natural landscapes and regional heritage",
      "Taste authentic Karnataka culinary specialties",
      "Guided nature walk and countryside stroll"
    ],
    "localFood": [
      "Authentic Karnataka South Indian Thali",
      "Filter Coffee",
      "Regional Crisps & Snacks"
    ],
    "entryInformation": "General public access available. Verify current entry fees, timings, and seasonal guidelines prior to travel.",
    "permitInformation": "Standard tourist access. Check with forest/local authorities for restricted trekking trails or sanctuary zones.",
    "safetyNotes": "Follow local safety guidelines, stay on designated paths, and carry sufficient drinking water.",
    "oneDayItinerary": "Morning departure from Bengaluru → Arrive at Gokarna Beach Town & Mahabaleshwar Temple for landmark tour & lunch → Afternoon exploration of nearby attractions → Evening return journey.",
    "twoDayItinerary": "Day 1: Scenic drive to Gokarna Beach Town & Mahabaleshwar Temple, check-in at resort/hotel, evening sunset viewpoint. Day 2: Morning heritage & nature tour, regional lunch, return to Bengaluru.",
    "relatedDestinations": [
      "bengaluru",
      "nandi-hills",
      "mysuru",
      "coorg"
    ],
    "relatedPackages": [
      "nandi-hills-ramanagara-1day"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "How far is Gokarna Beach Town & Mahabaleshwar Temple from Bengaluru?",
        "answer": "Gokarna Beach Town & Mahabaleshwar Temple is Approx. 485 km from Bengaluru, taking 8.5 hrs by private cab."
      },
      {
        "question": "What is the best way to travel to Gokarna Beach Town & Mahabaleshwar Temple?",
        "answer": "Hiring a private AC chauffeur cab from Coffee Cabs provides seamless door-to-door comfort."
      }
    ],
    "heroImage": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1200&h=800&fit=crop",
    "lastVerified": "20 September 2026",
    "status": "verified"
  },
  {
    "id": "murudeshwar",
    "name": "Murudeshwar Shiva Statue & Sea Temple",
    "slug": "murudeshwar",
    "district": "Uttara Kannada",
    "region": "Coastal Canara",
    "categories": [
      "Tallest Shiva Statue",
      "Raja Gopura",
      "Beach",
      "Pilgrimage"
    ],
    "approximateDistanceFromBengaluru": "Approx. 480 km",
    "approximateDriveTime": "8.5 hrs",
    "bestSeason": "September to March",
    "suggestedDuration": "1–2 Days",
    "overview": "Murudeshwar Shiva Statue & Sea Temple is a premier destination located in the Uttara Kannada district within the Coastal Canara of Karnataka. Situated Approx. 480 km from Bengaluru (8.5 hrs drive), it offers visitors rich cultural heritage, scenic vistas, and unforgettable outstation travel experiences.",
    "historyAndCulture": "Murudeshwar Shiva Statue & Sea Temple holds significant regional importance in Karnataka's historical timeline, characterized by unique architectural traditions, local festivals, and natural splendor.",
    "majorAttractions": [
      "Murudeshwar Shiva Statue & Sea Temple Primary Viewpoint & Landmark",
      "Historic Heritage Enclosure at Murudeshwar Shiva Statue & Sea Temple",
      "Scenic Nature Trail & Photography Zone",
      "Regional Cultural Center & Temple Shrine",
      "Sunset Point & Countryside Overlook"
    ],
    "nearbyAttractions": [
      "Bengaluru",
      "Mysuru",
      "Chikkamagaluru",
      "Udupi"
    ],
    "bengaluruRoute": "Bengaluru highway corridor leading to Uttara Kannada via major national and state highways.",
    "thingsToDo": [
      "Explore major viewpoints and historical monuments of Murudeshwar Shiva Statue & Sea Temple",
      "Photography of natural landscapes and regional heritage",
      "Taste authentic Karnataka culinary specialties",
      "Guided nature walk and countryside stroll"
    ],
    "localFood": [
      "Authentic Karnataka South Indian Thali",
      "Filter Coffee",
      "Regional Crisps & Snacks"
    ],
    "entryInformation": "General public access available. Verify current entry fees, timings, and seasonal guidelines prior to travel.",
    "permitInformation": "Standard tourist access. Check with forest/local authorities for restricted trekking trails or sanctuary zones.",
    "safetyNotes": "Follow local safety guidelines, stay on designated paths, and carry sufficient drinking water.",
    "oneDayItinerary": "Morning departure from Bengaluru → Arrive at Murudeshwar Shiva Statue & Sea Temple for landmark tour & lunch → Afternoon exploration of nearby attractions → Evening return journey.",
    "twoDayItinerary": "Day 1: Scenic drive to Murudeshwar Shiva Statue & Sea Temple, check-in at resort/hotel, evening sunset viewpoint. Day 2: Morning heritage & nature tour, regional lunch, return to Bengaluru.",
    "relatedDestinations": [
      "bengaluru",
      "nandi-hills",
      "mysuru",
      "coorg"
    ],
    "relatedPackages": [
      "nandi-hills-ramanagara-1day"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "How far is Murudeshwar Shiva Statue & Sea Temple from Bengaluru?",
        "answer": "Murudeshwar Shiva Statue & Sea Temple is Approx. 480 km from Bengaluru, taking 8.5 hrs by private cab."
      },
      {
        "question": "What is the best way to travel to Murudeshwar Shiva Statue & Sea Temple?",
        "answer": "Hiring a private AC chauffeur cab from Coffee Cabs provides seamless door-to-door comfort."
      }
    ],
    "heroImage": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1200&h=800&fit=crop",
    "lastVerified": "20 September 2026",
    "status": "verified"
  },
  {
    "id": "karwar",
    "name": "Karwar Coastal Border & Kali River Estuary",
    "slug": "karwar",
    "district": "Uttara Kannada",
    "region": "Coastal Canara",
    "categories": [
      "Coastal Border",
      "Kali Estuary",
      "Naval Museum",
      "Rabindranath Beach"
    ],
    "approximateDistanceFromBengaluru": "Approx. 520 km",
    "approximateDriveTime": "9 hrs",
    "bestSeason": "September to March",
    "suggestedDuration": "1–2 Days",
    "overview": "Karwar Coastal Border & Kali River Estuary is a premier destination located in the Uttara Kannada district within the Coastal Canara of Karnataka. Situated Approx. 520 km from Bengaluru (9 hrs drive), it offers visitors rich cultural heritage, scenic vistas, and unforgettable outstation travel experiences.",
    "historyAndCulture": "Karwar Coastal Border & Kali River Estuary holds significant regional importance in Karnataka's historical timeline, characterized by unique architectural traditions, local festivals, and natural splendor.",
    "majorAttractions": [
      "Karwar Coastal Border & Kali River Estuary Primary Viewpoint & Landmark",
      "Historic Heritage Enclosure at Karwar Coastal Border & Kali River Estuary",
      "Scenic Nature Trail & Photography Zone",
      "Regional Cultural Center & Temple Shrine",
      "Sunset Point & Countryside Overlook"
    ],
    "nearbyAttractions": [
      "Bengaluru",
      "Mysuru",
      "Chikkamagaluru",
      "Udupi"
    ],
    "bengaluruRoute": "Bengaluru highway corridor leading to Uttara Kannada via major national and state highways.",
    "thingsToDo": [
      "Explore major viewpoints and historical monuments of Karwar Coastal Border & Kali River Estuary",
      "Photography of natural landscapes and regional heritage",
      "Taste authentic Karnataka culinary specialties",
      "Guided nature walk and countryside stroll"
    ],
    "localFood": [
      "Authentic Karnataka South Indian Thali",
      "Filter Coffee",
      "Regional Crisps & Snacks"
    ],
    "entryInformation": "General public access available. Verify current entry fees, timings, and seasonal guidelines prior to travel.",
    "permitInformation": "Standard tourist access. Check with forest/local authorities for restricted trekking trails or sanctuary zones.",
    "safetyNotes": "Follow local safety guidelines, stay on designated paths, and carry sufficient drinking water.",
    "oneDayItinerary": "Morning departure from Bengaluru → Arrive at Karwar Coastal Border & Kali River Estuary for landmark tour & lunch → Afternoon exploration of nearby attractions → Evening return journey.",
    "twoDayItinerary": "Day 1: Scenic drive to Karwar Coastal Border & Kali River Estuary, check-in at resort/hotel, evening sunset viewpoint. Day 2: Morning heritage & nature tour, regional lunch, return to Bengaluru.",
    "relatedDestinations": [
      "bengaluru",
      "nandi-hills",
      "mysuru",
      "coorg"
    ],
    "relatedPackages": [
      "nandi-hills-ramanagara-1day"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "How far is Karwar Coastal Border & Kali River Estuary from Bengaluru?",
        "answer": "Karwar Coastal Border & Kali River Estuary is Approx. 520 km from Bengaluru, taking 9 hrs by private cab."
      },
      {
        "question": "What is the best way to travel to Karwar Coastal Border & Kali River Estuary?",
        "answer": "Hiring a private AC chauffeur cab from Coffee Cabs provides seamless door-to-door comfort."
      }
    ],
    "heroImage": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1200&h=800&fit=crop",
    "lastVerified": "20 September 2026",
    "status": "verified"
  },
  {
    "id": "yana-kumta",
    "name": "Yana Karst Black Rocks & Kumta Coast",
    "slug": "yana-kumta",
    "district": "Uttara Kannada",
    "region": "Coastal Canara",
    "categories": [
      "Geological Monolith",
      "Black Rock Spire",
      "Cave Temple",
      "Forest"
    ],
    "approximateDistanceFromBengaluru": "Approx. 460 km",
    "approximateDriveTime": "8.5 hrs",
    "bestSeason": "September to March",
    "suggestedDuration": "1–2 Days",
    "overview": "Yana Karst Black Rocks & Kumta Coast is a premier destination located in the Uttara Kannada district within the Coastal Canara of Karnataka. Situated Approx. 460 km from Bengaluru (8.5 hrs drive), it offers visitors rich cultural heritage, scenic vistas, and unforgettable outstation travel experiences.",
    "historyAndCulture": "Yana Karst Black Rocks & Kumta Coast holds significant regional importance in Karnataka's historical timeline, characterized by unique architectural traditions, local festivals, and natural splendor.",
    "majorAttractions": [
      "Yana Karst Black Rocks & Kumta Coast Primary Viewpoint & Landmark",
      "Historic Heritage Enclosure at Yana Karst Black Rocks & Kumta Coast",
      "Scenic Nature Trail & Photography Zone",
      "Regional Cultural Center & Temple Shrine",
      "Sunset Point & Countryside Overlook"
    ],
    "nearbyAttractions": [
      "Bengaluru",
      "Mysuru",
      "Chikkamagaluru",
      "Udupi"
    ],
    "bengaluruRoute": "Bengaluru highway corridor leading to Uttara Kannada via major national and state highways.",
    "thingsToDo": [
      "Explore major viewpoints and historical monuments of Yana Karst Black Rocks & Kumta Coast",
      "Photography of natural landscapes and regional heritage",
      "Taste authentic Karnataka culinary specialties",
      "Guided nature walk and countryside stroll"
    ],
    "localFood": [
      "Authentic Karnataka South Indian Thali",
      "Filter Coffee",
      "Regional Crisps & Snacks"
    ],
    "entryInformation": "General public access available. Verify current entry fees, timings, and seasonal guidelines prior to travel.",
    "permitInformation": "Standard tourist access. Check with forest/local authorities for restricted trekking trails or sanctuary zones.",
    "safetyNotes": "Follow local safety guidelines, stay on designated paths, and carry sufficient drinking water.",
    "oneDayItinerary": "Morning departure from Bengaluru → Arrive at Yana Karst Black Rocks & Kumta Coast for landmark tour & lunch → Afternoon exploration of nearby attractions → Evening return journey.",
    "twoDayItinerary": "Day 1: Scenic drive to Yana Karst Black Rocks & Kumta Coast, check-in at resort/hotel, evening sunset viewpoint. Day 2: Morning heritage & nature tour, regional lunch, return to Bengaluru.",
    "relatedDestinations": [
      "bengaluru",
      "nandi-hills",
      "mysuru",
      "coorg"
    ],
    "relatedPackages": [
      "nandi-hills-ramanagara-1day"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "How far is Yana Karst Black Rocks & Kumta Coast from Bengaluru?",
        "answer": "Yana Karst Black Rocks & Kumta Coast is Approx. 460 km from Bengaluru, taking 8.5 hrs by private cab."
      },
      {
        "question": "What is the best way to travel to Yana Karst Black Rocks & Kumta Coast?",
        "answer": "Hiring a private AC chauffeur cab from Coffee Cabs provides seamless door-to-door comfort."
      }
    ],
    "heroImage": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1200&h=800&fit=crop",
    "lastVerified": "20 September 2026",
    "status": "verified"
  },
  {
    "id": "honnavar",
    "name": "Honnavar Sharavathi Mangrove Backwaters",
    "slug": "honnavar",
    "district": "Uttara Kannada",
    "region": "Coastal Canara",
    "categories": [
      "Backwater Boating",
      "Mangrove Forest",
      "Eco Tourism",
      "River"
    ],
    "approximateDistanceFromBengaluru": "Approx. 460 km",
    "approximateDriveTime": "8 hrs",
    "bestSeason": "September to March",
    "suggestedDuration": "1–2 Days",
    "overview": "Honnavar Sharavathi Mangrove Backwaters is a premier destination located in the Uttara Kannada district within the Coastal Canara of Karnataka. Situated Approx. 460 km from Bengaluru (8 hrs drive), it offers visitors rich cultural heritage, scenic vistas, and unforgettable outstation travel experiences.",
    "historyAndCulture": "Honnavar Sharavathi Mangrove Backwaters holds significant regional importance in Karnataka's historical timeline, characterized by unique architectural traditions, local festivals, and natural splendor.",
    "majorAttractions": [
      "Honnavar Sharavathi Mangrove Backwaters Primary Viewpoint & Landmark",
      "Historic Heritage Enclosure at Honnavar Sharavathi Mangrove Backwaters",
      "Scenic Nature Trail & Photography Zone",
      "Regional Cultural Center & Temple Shrine",
      "Sunset Point & Countryside Overlook"
    ],
    "nearbyAttractions": [
      "Bengaluru",
      "Mysuru",
      "Chikkamagaluru",
      "Udupi"
    ],
    "bengaluruRoute": "Bengaluru highway corridor leading to Uttara Kannada via major national and state highways.",
    "thingsToDo": [
      "Explore major viewpoints and historical monuments of Honnavar Sharavathi Mangrove Backwaters",
      "Photography of natural landscapes and regional heritage",
      "Taste authentic Karnataka culinary specialties",
      "Guided nature walk and countryside stroll"
    ],
    "localFood": [
      "Authentic Karnataka South Indian Thali",
      "Filter Coffee",
      "Regional Crisps & Snacks"
    ],
    "entryInformation": "General public access available. Verify current entry fees, timings, and seasonal guidelines prior to travel.",
    "permitInformation": "Standard tourist access. Check with forest/local authorities for restricted trekking trails or sanctuary zones.",
    "safetyNotes": "Follow local safety guidelines, stay on designated paths, and carry sufficient drinking water.",
    "oneDayItinerary": "Morning departure from Bengaluru → Arrive at Honnavar Sharavathi Mangrove Backwaters for landmark tour & lunch → Afternoon exploration of nearby attractions → Evening return journey.",
    "twoDayItinerary": "Day 1: Scenic drive to Honnavar Sharavathi Mangrove Backwaters, check-in at resort/hotel, evening sunset viewpoint. Day 2: Morning heritage & nature tour, regional lunch, return to Bengaluru.",
    "relatedDestinations": [
      "bengaluru",
      "nandi-hills",
      "mysuru",
      "coorg"
    ],
    "relatedPackages": [
      "nandi-hills-ramanagara-1day"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "How far is Honnavar Sharavathi Mangrove Backwaters from Bengaluru?",
        "answer": "Honnavar Sharavathi Mangrove Backwaters is Approx. 460 km from Bengaluru, taking 8 hrs by private cab."
      },
      {
        "question": "What is the best way to travel to Honnavar Sharavathi Mangrove Backwaters?",
        "answer": "Hiring a private AC chauffeur cab from Coffee Cabs provides seamless door-to-door comfort."
      }
    ],
    "heroImage": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1200&h=800&fit=crop",
    "lastVerified": "20 September 2026",
    "status": "verified"
  },
  {
    "id": "sirsi-banavasi",
    "name": "Sirsi Spice Plantations & Banavasi Kadamba Capital",
    "slug": "sirsi-banavasi",
    "district": "Uttara Kannada",
    "region": "Malnad & Central Ghats",
    "categories": [
      "Ancient Capital",
      "Spice Farms",
      "Sahasralinga",
      "Heritage"
    ],
    "approximateDistanceFromBengaluru": "Approx. 400 km",
    "approximateDriveTime": "7.5 hrs",
    "bestSeason": "September to March",
    "suggestedDuration": "1–2 Days",
    "overview": "Sirsi Spice Plantations & Banavasi Kadamba Capital is a premier destination located in the Uttara Kannada district within the Malnad & Central Ghats of Karnataka. Situated Approx. 400 km from Bengaluru (7.5 hrs drive), it offers visitors rich cultural heritage, scenic vistas, and unforgettable outstation travel experiences.",
    "historyAndCulture": "Sirsi Spice Plantations & Banavasi Kadamba Capital holds significant regional importance in Karnataka's historical timeline, characterized by unique architectural traditions, local festivals, and natural splendor.",
    "majorAttractions": [
      "Sirsi Spice Plantations & Banavasi Kadamba Capital Primary Viewpoint & Landmark",
      "Historic Heritage Enclosure at Sirsi Spice Plantations & Banavasi Kadamba Capital",
      "Scenic Nature Trail & Photography Zone",
      "Regional Cultural Center & Temple Shrine",
      "Sunset Point & Countryside Overlook"
    ],
    "nearbyAttractions": [
      "Bengaluru",
      "Mysuru",
      "Chikkamagaluru",
      "Udupi"
    ],
    "bengaluruRoute": "Bengaluru highway corridor leading to Uttara Kannada via major national and state highways.",
    "thingsToDo": [
      "Explore major viewpoints and historical monuments of Sirsi Spice Plantations & Banavasi Kadamba Capital",
      "Photography of natural landscapes and regional heritage",
      "Taste authentic Karnataka culinary specialties",
      "Guided nature walk and countryside stroll"
    ],
    "localFood": [
      "Authentic Karnataka South Indian Thali",
      "Filter Coffee",
      "Regional Crisps & Snacks"
    ],
    "entryInformation": "General public access available. Verify current entry fees, timings, and seasonal guidelines prior to travel.",
    "permitInformation": "Standard tourist access. Check with forest/local authorities for restricted trekking trails or sanctuary zones.",
    "safetyNotes": "Follow local safety guidelines, stay on designated paths, and carry sufficient drinking water.",
    "oneDayItinerary": "Morning departure from Bengaluru → Arrive at Sirsi Spice Plantations & Banavasi Kadamba Capital for landmark tour & lunch → Afternoon exploration of nearby attractions → Evening return journey.",
    "twoDayItinerary": "Day 1: Scenic drive to Sirsi Spice Plantations & Banavasi Kadamba Capital, check-in at resort/hotel, evening sunset viewpoint. Day 2: Morning heritage & nature tour, regional lunch, return to Bengaluru.",
    "relatedDestinations": [
      "bengaluru",
      "nandi-hills",
      "mysuru",
      "coorg"
    ],
    "relatedPackages": [
      "nandi-hills-ramanagara-1day"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "How far is Sirsi Spice Plantations & Banavasi Kadamba Capital from Bengaluru?",
        "answer": "Sirsi Spice Plantations & Banavasi Kadamba Capital is Approx. 400 km from Bengaluru, taking 7.5 hrs by private cab."
      },
      {
        "question": "What is the best way to travel to Sirsi Spice Plantations & Banavasi Kadamba Capital?",
        "answer": "Hiring a private AC chauffeur cab from Coffee Cabs provides seamless door-to-door comfort."
      }
    ],
    "heroImage": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1200&h=800&fit=crop",
    "lastVerified": "20 September 2026",
    "status": "verified"
  },
  {
    "id": "dandeli",
    "name": "Dandeli Kali Wilderness & White Water Rafting",
    "slug": "dandeli",
    "district": "Uttara Kannada",
    "region": "Malnad & Central Ghats",
    "categories": [
      "Rafting",
      "Adventure",
      "Jungle Safari",
      "Hornbill Reserve"
    ],
    "approximateDistanceFromBengaluru": "Approx. 460 km",
    "approximateDriveTime": "8.5 hrs",
    "bestSeason": "September to March",
    "suggestedDuration": "1–2 Days",
    "overview": "Dandeli Kali Wilderness & White Water Rafting is a premier destination located in the Uttara Kannada district within the Malnad & Central Ghats of Karnataka. Situated Approx. 460 km from Bengaluru (8.5 hrs drive), it offers visitors rich cultural heritage, scenic vistas, and unforgettable outstation travel experiences.",
    "historyAndCulture": "Dandeli Kali Wilderness & White Water Rafting holds significant regional importance in Karnataka's historical timeline, characterized by unique architectural traditions, local festivals, and natural splendor.",
    "majorAttractions": [
      "Dandeli Kali Wilderness & White Water Rafting Primary Viewpoint & Landmark",
      "Historic Heritage Enclosure at Dandeli Kali Wilderness & White Water Rafting",
      "Scenic Nature Trail & Photography Zone",
      "Regional Cultural Center & Temple Shrine",
      "Sunset Point & Countryside Overlook"
    ],
    "nearbyAttractions": [
      "Bengaluru",
      "Mysuru",
      "Chikkamagaluru",
      "Udupi"
    ],
    "bengaluruRoute": "Bengaluru highway corridor leading to Uttara Kannada via major national and state highways.",
    "thingsToDo": [
      "Explore major viewpoints and historical monuments of Dandeli Kali Wilderness & White Water Rafting",
      "Photography of natural landscapes and regional heritage",
      "Taste authentic Karnataka culinary specialties",
      "Guided nature walk and countryside stroll"
    ],
    "localFood": [
      "Authentic Karnataka South Indian Thali",
      "Filter Coffee",
      "Regional Crisps & Snacks"
    ],
    "entryInformation": "General public access available. Verify current entry fees, timings, and seasonal guidelines prior to travel.",
    "permitInformation": "Standard tourist access. Check with forest/local authorities for restricted trekking trails or sanctuary zones.",
    "safetyNotes": "Follow local safety guidelines, stay on designated paths, and carry sufficient drinking water.",
    "oneDayItinerary": "Morning departure from Bengaluru → Arrive at Dandeli Kali Wilderness & White Water Rafting for landmark tour & lunch → Afternoon exploration of nearby attractions → Evening return journey.",
    "twoDayItinerary": "Day 1: Scenic drive to Dandeli Kali Wilderness & White Water Rafting, check-in at resort/hotel, evening sunset viewpoint. Day 2: Morning heritage & nature tour, regional lunch, return to Bengaluru.",
    "relatedDestinations": [
      "bengaluru",
      "nandi-hills",
      "mysuru",
      "coorg"
    ],
    "relatedPackages": [
      "nandi-hills-ramanagara-1day"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "How far is Dandeli Kali Wilderness & White Water Rafting from Bengaluru?",
        "answer": "Dandeli Kali Wilderness & White Water Rafting is Approx. 460 km from Bengaluru, taking 8.5 hrs by private cab."
      },
      {
        "question": "What is the best way to travel to Dandeli Kali Wilderness & White Water Rafting?",
        "answer": "Hiring a private AC chauffeur cab from Coffee Cabs provides seamless door-to-door comfort."
      }
    ],
    "heroImage": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1200&h=800&fit=crop",
    "lastVerified": "20 September 2026",
    "status": "verified"
  },
  {
    "id": "yellapur-magod-falls",
    "name": "Yellapur & Magod-Sathodi Waterfalls",
    "slug": "yellapur-magod-falls",
    "district": "Uttara Kannada",
    "region": "Malnad & Central Ghats",
    "categories": [
      "Cascading Falls",
      "Dense Jungle",
      "Nature",
      "River"
    ],
    "approximateDistanceFromBengaluru": "Approx. 440 km",
    "approximateDriveTime": "8 hrs",
    "bestSeason": "September to March",
    "suggestedDuration": "1–2 Days",
    "overview": "Yellapur & Magod-Sathodi Waterfalls is a premier destination located in the Uttara Kannada district within the Malnad & Central Ghats of Karnataka. Situated Approx. 440 km from Bengaluru (8 hrs drive), it offers visitors rich cultural heritage, scenic vistas, and unforgettable outstation travel experiences.",
    "historyAndCulture": "Yellapur & Magod-Sathodi Waterfalls holds significant regional importance in Karnataka's historical timeline, characterized by unique architectural traditions, local festivals, and natural splendor.",
    "majorAttractions": [
      "Yellapur & Magod-Sathodi Waterfalls Primary Viewpoint & Landmark",
      "Historic Heritage Enclosure at Yellapur & Magod-Sathodi Waterfalls",
      "Scenic Nature Trail & Photography Zone",
      "Regional Cultural Center & Temple Shrine",
      "Sunset Point & Countryside Overlook"
    ],
    "nearbyAttractions": [
      "Bengaluru",
      "Mysuru",
      "Chikkamagaluru",
      "Udupi"
    ],
    "bengaluruRoute": "Bengaluru highway corridor leading to Uttara Kannada via major national and state highways.",
    "thingsToDo": [
      "Explore major viewpoints and historical monuments of Yellapur & Magod-Sathodi Waterfalls",
      "Photography of natural landscapes and regional heritage",
      "Taste authentic Karnataka culinary specialties",
      "Guided nature walk and countryside stroll"
    ],
    "localFood": [
      "Authentic Karnataka South Indian Thali",
      "Filter Coffee",
      "Regional Crisps & Snacks"
    ],
    "entryInformation": "General public access available. Verify current entry fees, timings, and seasonal guidelines prior to travel.",
    "permitInformation": "Standard tourist access. Check with forest/local authorities for restricted trekking trails or sanctuary zones.",
    "safetyNotes": "Follow local safety guidelines, stay on designated paths, and carry sufficient drinking water.",
    "oneDayItinerary": "Morning departure from Bengaluru → Arrive at Yellapur & Magod-Sathodi Waterfalls for landmark tour & lunch → Afternoon exploration of nearby attractions → Evening return journey.",
    "twoDayItinerary": "Day 1: Scenic drive to Yellapur & Magod-Sathodi Waterfalls, check-in at resort/hotel, evening sunset viewpoint. Day 2: Morning heritage & nature tour, regional lunch, return to Bengaluru.",
    "relatedDestinations": [
      "bengaluru",
      "nandi-hills",
      "mysuru",
      "coorg"
    ],
    "relatedPackages": [
      "nandi-hills-ramanagara-1day"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "How far is Yellapur & Magod-Sathodi Waterfalls from Bengaluru?",
        "answer": "Yellapur & Magod-Sathodi Waterfalls is Approx. 440 km from Bengaluru, taking 8 hrs by private cab."
      },
      {
        "question": "What is the best way to travel to Yellapur & Magod-Sathodi Waterfalls?",
        "answer": "Hiring a private AC chauffeur cab from Coffee Cabs provides seamless door-to-door comfort."
      }
    ],
    "heroImage": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1200&h=800&fit=crop",
    "lastVerified": "20 September 2026",
    "status": "verified"
  },
  {
    "id": "hampi",
    "name": "Hampi UNESCO Vijayanagara Empire Realm",
    "slug": "hampi",
    "district": "Vijayanagara",
    "region": "Deccan & North Heritage",
    "categories": [
      "UNESCO World Heritage",
      "Stone Chariot",
      "Ruins",
      "Monuments"
    ],
    "approximateDistanceFromBengaluru": "Approx. 340 km",
    "approximateDriveTime": "5.5 hrs",
    "bestSeason": "September to March",
    "suggestedDuration": "1–2 Days",
    "overview": "Hampi UNESCO Vijayanagara Empire Realm is a premier destination located in the Vijayanagara district within the Deccan & North Heritage of Karnataka. Situated Approx. 340 km from Bengaluru (5.5 hrs drive), it offers visitors rich cultural heritage, scenic vistas, and unforgettable outstation travel experiences.",
    "historyAndCulture": "Hampi UNESCO Vijayanagara Empire Realm holds significant regional importance in Karnataka's historical timeline, characterized by unique architectural traditions, local festivals, and natural splendor.",
    "majorAttractions": [
      "Hampi UNESCO Vijayanagara Empire Realm Primary Viewpoint & Landmark",
      "Historic Heritage Enclosure at Hampi UNESCO Vijayanagara Empire Realm",
      "Scenic Nature Trail & Photography Zone",
      "Regional Cultural Center & Temple Shrine",
      "Sunset Point & Countryside Overlook"
    ],
    "nearbyAttractions": [
      "Bengaluru",
      "Mysuru",
      "Chikkamagaluru",
      "Udupi"
    ],
    "bengaluruRoute": "Bengaluru highway corridor leading to Vijayanagara via major national and state highways.",
    "thingsToDo": [
      "Explore major viewpoints and historical monuments of Hampi UNESCO Vijayanagara Empire Realm",
      "Photography of natural landscapes and regional heritage",
      "Taste authentic Karnataka culinary specialties",
      "Guided nature walk and countryside stroll"
    ],
    "localFood": [
      "Authentic Karnataka South Indian Thali",
      "Filter Coffee",
      "Regional Crisps & Snacks"
    ],
    "entryInformation": "General public access available. Verify current entry fees, timings, and seasonal guidelines prior to travel.",
    "permitInformation": "Standard tourist access. Check with forest/local authorities for restricted trekking trails or sanctuary zones.",
    "safetyNotes": "Follow local safety guidelines, stay on designated paths, and carry sufficient drinking water.",
    "oneDayItinerary": "Morning departure from Bengaluru → Arrive at Hampi UNESCO Vijayanagara Empire Realm for landmark tour & lunch → Afternoon exploration of nearby attractions → Evening return journey.",
    "twoDayItinerary": "Day 1: Scenic drive to Hampi UNESCO Vijayanagara Empire Realm, check-in at resort/hotel, evening sunset viewpoint. Day 2: Morning heritage & nature tour, regional lunch, return to Bengaluru.",
    "relatedDestinations": [
      "bengaluru",
      "nandi-hills",
      "mysuru",
      "coorg"
    ],
    "relatedPackages": [
      "nandi-hills-ramanagara-1day"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "How far is Hampi UNESCO Vijayanagara Empire Realm from Bengaluru?",
        "answer": "Hampi UNESCO Vijayanagara Empire Realm is Approx. 340 km from Bengaluru, taking 5.5 hrs by private cab."
      },
      {
        "question": "What is the best way to travel to Hampi UNESCO Vijayanagara Empire Realm?",
        "answer": "Hiring a private AC chauffeur cab from Coffee Cabs provides seamless door-to-door comfort."
      }
    ],
    "heroImage": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1200&h=800&fit=crop",
    "lastVerified": "20 September 2026",
    "status": "verified"
  },
  {
    "id": "hosapete",
    "name": "Hosapete Tungabhadra Dam City",
    "slug": "hosapete",
    "district": "Vijayanagara",
    "region": "Deccan & North Heritage",
    "categories": [
      "Dam Gardens",
      "Gateway City",
      "Urban"
    ],
    "approximateDistanceFromBengaluru": "Approx. 325 km",
    "approximateDriveTime": "5.5 hrs",
    "bestSeason": "September to March",
    "suggestedDuration": "1–2 Days",
    "overview": "Hosapete Tungabhadra Dam City is a premier destination located in the Vijayanagara district within the Deccan & North Heritage of Karnataka. Situated Approx. 325 km from Bengaluru (5.5 hrs drive), it offers visitors rich cultural heritage, scenic vistas, and unforgettable outstation travel experiences.",
    "historyAndCulture": "Hosapete Tungabhadra Dam City holds significant regional importance in Karnataka's historical timeline, characterized by unique architectural traditions, local festivals, and natural splendor.",
    "majorAttractions": [
      "Hosapete Tungabhadra Dam City Primary Viewpoint & Landmark",
      "Historic Heritage Enclosure at Hosapete Tungabhadra Dam City",
      "Scenic Nature Trail & Photography Zone",
      "Regional Cultural Center & Temple Shrine",
      "Sunset Point & Countryside Overlook"
    ],
    "nearbyAttractions": [
      "Bengaluru",
      "Mysuru",
      "Chikkamagaluru",
      "Udupi"
    ],
    "bengaluruRoute": "Bengaluru highway corridor leading to Vijayanagara via major national and state highways.",
    "thingsToDo": [
      "Explore major viewpoints and historical monuments of Hosapete Tungabhadra Dam City",
      "Photography of natural landscapes and regional heritage",
      "Taste authentic Karnataka culinary specialties",
      "Guided nature walk and countryside stroll"
    ],
    "localFood": [
      "Authentic Karnataka South Indian Thali",
      "Filter Coffee",
      "Regional Crisps & Snacks"
    ],
    "entryInformation": "General public access available. Verify current entry fees, timings, and seasonal guidelines prior to travel.",
    "permitInformation": "Standard tourist access. Check with forest/local authorities for restricted trekking trails or sanctuary zones.",
    "safetyNotes": "Follow local safety guidelines, stay on designated paths, and carry sufficient drinking water.",
    "oneDayItinerary": "Morning departure from Bengaluru → Arrive at Hosapete Tungabhadra Dam City for landmark tour & lunch → Afternoon exploration of nearby attractions → Evening return journey.",
    "twoDayItinerary": "Day 1: Scenic drive to Hosapete Tungabhadra Dam City, check-in at resort/hotel, evening sunset viewpoint. Day 2: Morning heritage & nature tour, regional lunch, return to Bengaluru.",
    "relatedDestinations": [
      "bengaluru",
      "nandi-hills",
      "mysuru",
      "coorg"
    ],
    "relatedPackages": [
      "nandi-hills-ramanagara-1day"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "How far is Hosapete Tungabhadra Dam City from Bengaluru?",
        "answer": "Hosapete Tungabhadra Dam City is Approx. 325 km from Bengaluru, taking 5.5 hrs by private cab."
      },
      {
        "question": "What is the best way to travel to Hosapete Tungabhadra Dam City?",
        "answer": "Hiring a private AC chauffeur cab from Coffee Cabs provides seamless door-to-door comfort."
      }
    ],
    "heroImage": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1200&h=800&fit=crop",
    "lastVerified": "20 September 2026",
    "status": "verified"
  },
  {
    "id": "anegundi",
    "name": "Anegundi Mythological Kishkindha Realm",
    "slug": "anegundi",
    "district": "Vijayanagara",
    "region": "Deccan & North Heritage",
    "categories": [
      "Kishkindha",
      "Anjanadri Hill",
      "Ancient Village",
      "Prehistoric Art"
    ],
    "approximateDistanceFromBengaluru": "Approx. 350 km",
    "approximateDriveTime": "6 hrs",
    "bestSeason": "September to March",
    "suggestedDuration": "1–2 Days",
    "overview": "Anegundi Mythological Kishkindha Realm is a premier destination located in the Vijayanagara district within the Deccan & North Heritage of Karnataka. Situated Approx. 350 km from Bengaluru (6 hrs drive), it offers visitors rich cultural heritage, scenic vistas, and unforgettable outstation travel experiences.",
    "historyAndCulture": "Anegundi Mythological Kishkindha Realm holds significant regional importance in Karnataka's historical timeline, characterized by unique architectural traditions, local festivals, and natural splendor.",
    "majorAttractions": [
      "Anegundi Mythological Kishkindha Realm Primary Viewpoint & Landmark",
      "Historic Heritage Enclosure at Anegundi Mythological Kishkindha Realm",
      "Scenic Nature Trail & Photography Zone",
      "Regional Cultural Center & Temple Shrine",
      "Sunset Point & Countryside Overlook"
    ],
    "nearbyAttractions": [
      "Bengaluru",
      "Mysuru",
      "Chikkamagaluru",
      "Udupi"
    ],
    "bengaluruRoute": "Bengaluru highway corridor leading to Vijayanagara via major national and state highways.",
    "thingsToDo": [
      "Explore major viewpoints and historical monuments of Anegundi Mythological Kishkindha Realm",
      "Photography of natural landscapes and regional heritage",
      "Taste authentic Karnataka culinary specialties",
      "Guided nature walk and countryside stroll"
    ],
    "localFood": [
      "Authentic Karnataka South Indian Thali",
      "Filter Coffee",
      "Regional Crisps & Snacks"
    ],
    "entryInformation": "General public access available. Verify current entry fees, timings, and seasonal guidelines prior to travel.",
    "permitInformation": "Standard tourist access. Check with forest/local authorities for restricted trekking trails or sanctuary zones.",
    "safetyNotes": "Follow local safety guidelines, stay on designated paths, and carry sufficient drinking water.",
    "oneDayItinerary": "Morning departure from Bengaluru → Arrive at Anegundi Mythological Kishkindha Realm for landmark tour & lunch → Afternoon exploration of nearby attractions → Evening return journey.",
    "twoDayItinerary": "Day 1: Scenic drive to Anegundi Mythological Kishkindha Realm, check-in at resort/hotel, evening sunset viewpoint. Day 2: Morning heritage & nature tour, regional lunch, return to Bengaluru.",
    "relatedDestinations": [
      "bengaluru",
      "nandi-hills",
      "mysuru",
      "coorg"
    ],
    "relatedPackages": [
      "nandi-hills-ramanagara-1day"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "How far is Anegundi Mythological Kishkindha Realm from Bengaluru?",
        "answer": "Anegundi Mythological Kishkindha Realm is Approx. 350 km from Bengaluru, taking 6 hrs by private cab."
      },
      {
        "question": "What is the best way to travel to Anegundi Mythological Kishkindha Realm?",
        "answer": "Hiring a private AC chauffeur cab from Coffee Cabs provides seamless door-to-door comfort."
      }
    ],
    "heroImage": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1200&h=800&fit=crop",
    "lastVerified": "20 September 2026",
    "status": "verified"
  },
  {
    "id": "badami",
    "name": "Badami Rock-Cut Cave Temples",
    "slug": "badami",
    "district": "Bagalkote",
    "region": "Deccan & North Heritage",
    "categories": [
      "Chalukya Architecture",
      "Rock-Cut Caves",
      "Sandstone Cliffs",
      "Agastya Lake"
    ],
    "approximateDistanceFromBengaluru": "Approx. 450 km",
    "approximateDriveTime": "7.5 hrs",
    "bestSeason": "September to March",
    "suggestedDuration": "1–2 Days",
    "overview": "Badami Rock-Cut Cave Temples is a premier destination located in the Bagalkote district within the Deccan & North Heritage of Karnataka. Situated Approx. 450 km from Bengaluru (7.5 hrs drive), it offers visitors rich cultural heritage, scenic vistas, and unforgettable outstation travel experiences.",
    "historyAndCulture": "Badami Rock-Cut Cave Temples holds significant regional importance in Karnataka's historical timeline, characterized by unique architectural traditions, local festivals, and natural splendor.",
    "majorAttractions": [
      "Badami Rock-Cut Cave Temples Primary Viewpoint & Landmark",
      "Historic Heritage Enclosure at Badami Rock-Cut Cave Temples",
      "Scenic Nature Trail & Photography Zone",
      "Regional Cultural Center & Temple Shrine",
      "Sunset Point & Countryside Overlook"
    ],
    "nearbyAttractions": [
      "Bengaluru",
      "Mysuru",
      "Chikkamagaluru",
      "Udupi"
    ],
    "bengaluruRoute": "Bengaluru highway corridor leading to Bagalkote via major national and state highways.",
    "thingsToDo": [
      "Explore major viewpoints and historical monuments of Badami Rock-Cut Cave Temples",
      "Photography of natural landscapes and regional heritage",
      "Taste authentic Karnataka culinary specialties",
      "Guided nature walk and countryside stroll"
    ],
    "localFood": [
      "Authentic Karnataka South Indian Thali",
      "Filter Coffee",
      "Regional Crisps & Snacks"
    ],
    "entryInformation": "General public access available. Verify current entry fees, timings, and seasonal guidelines prior to travel.",
    "permitInformation": "Standard tourist access. Check with forest/local authorities for restricted trekking trails or sanctuary zones.",
    "safetyNotes": "Follow local safety guidelines, stay on designated paths, and carry sufficient drinking water.",
    "oneDayItinerary": "Morning departure from Bengaluru → Arrive at Badami Rock-Cut Cave Temples for landmark tour & lunch → Afternoon exploration of nearby attractions → Evening return journey.",
    "twoDayItinerary": "Day 1: Scenic drive to Badami Rock-Cut Cave Temples, check-in at resort/hotel, evening sunset viewpoint. Day 2: Morning heritage & nature tour, regional lunch, return to Bengaluru.",
    "relatedDestinations": [
      "bengaluru",
      "nandi-hills",
      "mysuru",
      "coorg"
    ],
    "relatedPackages": [
      "nandi-hills-ramanagara-1day"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "How far is Badami Rock-Cut Cave Temples from Bengaluru?",
        "answer": "Badami Rock-Cut Cave Temples is Approx. 450 km from Bengaluru, taking 7.5 hrs by private cab."
      },
      {
        "question": "What is the best way to travel to Badami Rock-Cut Cave Temples?",
        "answer": "Hiring a private AC chauffeur cab from Coffee Cabs provides seamless door-to-door comfort."
      }
    ],
    "heroImage": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1200&h=800&fit=crop",
    "lastVerified": "20 September 2026",
    "status": "verified"
  },
  {
    "id": "pattadakal",
    "name": "Pattadakal UNESCO Temple Fusion",
    "slug": "pattadakal",
    "district": "Bagalkote",
    "region": "Deccan & North Heritage",
    "categories": [
      "UNESCO World Heritage",
      "Temple Architecture",
      "Dravidian Nagara",
      "History"
    ],
    "approximateDistanceFromBengaluru": "Approx. 445 km",
    "approximateDriveTime": "7.5 hrs",
    "bestSeason": "September to March",
    "suggestedDuration": "1–2 Days",
    "overview": "Pattadakal UNESCO Temple Fusion is a premier destination located in the Bagalkote district within the Deccan & North Heritage of Karnataka. Situated Approx. 445 km from Bengaluru (7.5 hrs drive), it offers visitors rich cultural heritage, scenic vistas, and unforgettable outstation travel experiences.",
    "historyAndCulture": "Pattadakal UNESCO Temple Fusion holds significant regional importance in Karnataka's historical timeline, characterized by unique architectural traditions, local festivals, and natural splendor.",
    "majorAttractions": [
      "Pattadakal UNESCO Temple Fusion Primary Viewpoint & Landmark",
      "Historic Heritage Enclosure at Pattadakal UNESCO Temple Fusion",
      "Scenic Nature Trail & Photography Zone",
      "Regional Cultural Center & Temple Shrine",
      "Sunset Point & Countryside Overlook"
    ],
    "nearbyAttractions": [
      "Bengaluru",
      "Mysuru",
      "Chikkamagaluru",
      "Udupi"
    ],
    "bengaluruRoute": "Bengaluru highway corridor leading to Bagalkote via major national and state highways.",
    "thingsToDo": [
      "Explore major viewpoints and historical monuments of Pattadakal UNESCO Temple Fusion",
      "Photography of natural landscapes and regional heritage",
      "Taste authentic Karnataka culinary specialties",
      "Guided nature walk and countryside stroll"
    ],
    "localFood": [
      "Authentic Karnataka South Indian Thali",
      "Filter Coffee",
      "Regional Crisps & Snacks"
    ],
    "entryInformation": "General public access available. Verify current entry fees, timings, and seasonal guidelines prior to travel.",
    "permitInformation": "Standard tourist access. Check with forest/local authorities for restricted trekking trails or sanctuary zones.",
    "safetyNotes": "Follow local safety guidelines, stay on designated paths, and carry sufficient drinking water.",
    "oneDayItinerary": "Morning departure from Bengaluru → Arrive at Pattadakal UNESCO Temple Fusion for landmark tour & lunch → Afternoon exploration of nearby attractions → Evening return journey.",
    "twoDayItinerary": "Day 1: Scenic drive to Pattadakal UNESCO Temple Fusion, check-in at resort/hotel, evening sunset viewpoint. Day 2: Morning heritage & nature tour, regional lunch, return to Bengaluru.",
    "relatedDestinations": [
      "bengaluru",
      "nandi-hills",
      "mysuru",
      "coorg"
    ],
    "relatedPackages": [
      "nandi-hills-ramanagara-1day"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "How far is Pattadakal UNESCO Temple Fusion from Bengaluru?",
        "answer": "Pattadakal UNESCO Temple Fusion is Approx. 445 km from Bengaluru, taking 7.5 hrs by private cab."
      },
      {
        "question": "What is the best way to travel to Pattadakal UNESCO Temple Fusion?",
        "answer": "Hiring a private AC chauffeur cab from Coffee Cabs provides seamless door-to-door comfort."
      }
    ],
    "heroImage": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1200&h=800&fit=crop",
    "lastVerified": "20 September 2026",
    "status": "verified"
  },
  {
    "id": "aihole",
    "name": "Aihole Cradle of Indian Temple Architecture",
    "slug": "aihole",
    "district": "Bagalkote",
    "region": "Deccan & North Heritage",
    "categories": [
      "Durga Temple",
      "Rock Inscriptions",
      "Chalukya Capital",
      "Architecture"
    ],
    "approximateDistanceFromBengaluru": "Approx. 450 km",
    "approximateDriveTime": "7.5 hrs",
    "bestSeason": "September to March",
    "suggestedDuration": "1–2 Days",
    "overview": "Aihole Cradle of Indian Temple Architecture is a premier destination located in the Bagalkote district within the Deccan & North Heritage of Karnataka. Situated Approx. 450 km from Bengaluru (7.5 hrs drive), it offers visitors rich cultural heritage, scenic vistas, and unforgettable outstation travel experiences.",
    "historyAndCulture": "Aihole Cradle of Indian Temple Architecture holds significant regional importance in Karnataka's historical timeline, characterized by unique architectural traditions, local festivals, and natural splendor.",
    "majorAttractions": [
      "Aihole Cradle of Indian Temple Architecture Primary Viewpoint & Landmark",
      "Historic Heritage Enclosure at Aihole Cradle of Indian Temple Architecture",
      "Scenic Nature Trail & Photography Zone",
      "Regional Cultural Center & Temple Shrine",
      "Sunset Point & Countryside Overlook"
    ],
    "nearbyAttractions": [
      "Bengaluru",
      "Mysuru",
      "Chikkamagaluru",
      "Udupi"
    ],
    "bengaluruRoute": "Bengaluru highway corridor leading to Bagalkote via major national and state highways.",
    "thingsToDo": [
      "Explore major viewpoints and historical monuments of Aihole Cradle of Indian Temple Architecture",
      "Photography of natural landscapes and regional heritage",
      "Taste authentic Karnataka culinary specialties",
      "Guided nature walk and countryside stroll"
    ],
    "localFood": [
      "Authentic Karnataka South Indian Thali",
      "Filter Coffee",
      "Regional Crisps & Snacks"
    ],
    "entryInformation": "General public access available. Verify current entry fees, timings, and seasonal guidelines prior to travel.",
    "permitInformation": "Standard tourist access. Check with forest/local authorities for restricted trekking trails or sanctuary zones.",
    "safetyNotes": "Follow local safety guidelines, stay on designated paths, and carry sufficient drinking water.",
    "oneDayItinerary": "Morning departure from Bengaluru → Arrive at Aihole Cradle of Indian Temple Architecture for landmark tour & lunch → Afternoon exploration of nearby attractions → Evening return journey.",
    "twoDayItinerary": "Day 1: Scenic drive to Aihole Cradle of Indian Temple Architecture, check-in at resort/hotel, evening sunset viewpoint. Day 2: Morning heritage & nature tour, regional lunch, return to Bengaluru.",
    "relatedDestinations": [
      "bengaluru",
      "nandi-hills",
      "mysuru",
      "coorg"
    ],
    "relatedPackages": [
      "nandi-hills-ramanagara-1day"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "How far is Aihole Cradle of Indian Temple Architecture from Bengaluru?",
        "answer": "Aihole Cradle of Indian Temple Architecture is Approx. 450 km from Bengaluru, taking 7.5 hrs by private cab."
      },
      {
        "question": "What is the best way to travel to Aihole Cradle of Indian Temple Architecture?",
        "answer": "Hiring a private AC chauffeur cab from Coffee Cabs provides seamless door-to-door comfort."
      }
    ],
    "heroImage": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1200&h=800&fit=crop",
    "lastVerified": "20 September 2026",
    "status": "verified"
  },
  {
    "id": "mahakuta-banashankari",
    "name": "Mahakuta Springs & Banashankari Temple",
    "slug": "mahakuta-banashankari",
    "district": "Bagalkote",
    "region": "Deccan & North Heritage",
    "categories": [
      "Sacred Spring",
      "Shaivite Shrines",
      "Banashankari Shrine",
      "Heritage"
    ],
    "approximateDistanceFromBengaluru": "Approx. 440 km",
    "approximateDriveTime": "7.5 hrs",
    "bestSeason": "September to March",
    "suggestedDuration": "1–2 Days",
    "overview": "Mahakuta Springs & Banashankari Temple is a premier destination located in the Bagalkote district within the Deccan & North Heritage of Karnataka. Situated Approx. 440 km from Bengaluru (7.5 hrs drive), it offers visitors rich cultural heritage, scenic vistas, and unforgettable outstation travel experiences.",
    "historyAndCulture": "Mahakuta Springs & Banashankari Temple holds significant regional importance in Karnataka's historical timeline, characterized by unique architectural traditions, local festivals, and natural splendor.",
    "majorAttractions": [
      "Mahakuta Springs & Banashankari Temple Primary Viewpoint & Landmark",
      "Historic Heritage Enclosure at Mahakuta Springs & Banashankari Temple",
      "Scenic Nature Trail & Photography Zone",
      "Regional Cultural Center & Temple Shrine",
      "Sunset Point & Countryside Overlook"
    ],
    "nearbyAttractions": [
      "Bengaluru",
      "Mysuru",
      "Chikkamagaluru",
      "Udupi"
    ],
    "bengaluruRoute": "Bengaluru highway corridor leading to Bagalkote via major national and state highways.",
    "thingsToDo": [
      "Explore major viewpoints and historical monuments of Mahakuta Springs & Banashankari Temple",
      "Photography of natural landscapes and regional heritage",
      "Taste authentic Karnataka culinary specialties",
      "Guided nature walk and countryside stroll"
    ],
    "localFood": [
      "Authentic Karnataka South Indian Thali",
      "Filter Coffee",
      "Regional Crisps & Snacks"
    ],
    "entryInformation": "General public access available. Verify current entry fees, timings, and seasonal guidelines prior to travel.",
    "permitInformation": "Standard tourist access. Check with forest/local authorities for restricted trekking trails or sanctuary zones.",
    "safetyNotes": "Follow local safety guidelines, stay on designated paths, and carry sufficient drinking water.",
    "oneDayItinerary": "Morning departure from Bengaluru → Arrive at Mahakuta Springs & Banashankari Temple for landmark tour & lunch → Afternoon exploration of nearby attractions → Evening return journey.",
    "twoDayItinerary": "Day 1: Scenic drive to Mahakuta Springs & Banashankari Temple, check-in at resort/hotel, evening sunset viewpoint. Day 2: Morning heritage & nature tour, regional lunch, return to Bengaluru.",
    "relatedDestinations": [
      "bengaluru",
      "nandi-hills",
      "mysuru",
      "coorg"
    ],
    "relatedPackages": [
      "nandi-hills-ramanagara-1day"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "How far is Mahakuta Springs & Banashankari Temple from Bengaluru?",
        "answer": "Mahakuta Springs & Banashankari Temple is Approx. 440 km from Bengaluru, taking 7.5 hrs by private cab."
      },
      {
        "question": "What is the best way to travel to Mahakuta Springs & Banashankari Temple?",
        "answer": "Hiring a private AC chauffeur cab from Coffee Cabs provides seamless door-to-door comfort."
      }
    ],
    "heroImage": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1200&h=800&fit=crop",
    "lastVerified": "20 September 2026",
    "status": "verified"
  },
  {
    "id": "almatti-dam",
    "name": "Almatti Dam Krishna Gardens",
    "slug": "almatti-dam",
    "district": "Vijayapura",
    "region": "Deccan & North Heritage",
    "categories": [
      "Rock Garden",
      "Musical Fountains",
      "Krishna River",
      "Dam"
    ],
    "approximateDistanceFromBengaluru": "Approx. 470 km",
    "approximateDriveTime": "8 hrs",
    "bestSeason": "September to March",
    "suggestedDuration": "1–2 Days",
    "overview": "Almatti Dam Krishna Gardens is a premier destination located in the Vijayapura district within the Deccan & North Heritage of Karnataka. Situated Approx. 470 km from Bengaluru (8 hrs drive), it offers visitors rich cultural heritage, scenic vistas, and unforgettable outstation travel experiences.",
    "historyAndCulture": "Almatti Dam Krishna Gardens holds significant regional importance in Karnataka's historical timeline, characterized by unique architectural traditions, local festivals, and natural splendor.",
    "majorAttractions": [
      "Almatti Dam Krishna Gardens Primary Viewpoint & Landmark",
      "Historic Heritage Enclosure at Almatti Dam Krishna Gardens",
      "Scenic Nature Trail & Photography Zone",
      "Regional Cultural Center & Temple Shrine",
      "Sunset Point & Countryside Overlook"
    ],
    "nearbyAttractions": [
      "Bengaluru",
      "Mysuru",
      "Chikkamagaluru",
      "Udupi"
    ],
    "bengaluruRoute": "Bengaluru highway corridor leading to Vijayapura via major national and state highways.",
    "thingsToDo": [
      "Explore major viewpoints and historical monuments of Almatti Dam Krishna Gardens",
      "Photography of natural landscapes and regional heritage",
      "Taste authentic Karnataka culinary specialties",
      "Guided nature walk and countryside stroll"
    ],
    "localFood": [
      "Authentic Karnataka South Indian Thali",
      "Filter Coffee",
      "Regional Crisps & Snacks"
    ],
    "entryInformation": "General public access available. Verify current entry fees, timings, and seasonal guidelines prior to travel.",
    "permitInformation": "Standard tourist access. Check with forest/local authorities for restricted trekking trails or sanctuary zones.",
    "safetyNotes": "Follow local safety guidelines, stay on designated paths, and carry sufficient drinking water.",
    "oneDayItinerary": "Morning departure from Bengaluru → Arrive at Almatti Dam Krishna Gardens for landmark tour & lunch → Afternoon exploration of nearby attractions → Evening return journey.",
    "twoDayItinerary": "Day 1: Scenic drive to Almatti Dam Krishna Gardens, check-in at resort/hotel, evening sunset viewpoint. Day 2: Morning heritage & nature tour, regional lunch, return to Bengaluru.",
    "relatedDestinations": [
      "bengaluru",
      "nandi-hills",
      "mysuru",
      "coorg"
    ],
    "relatedPackages": [
      "nandi-hills-ramanagara-1day"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "How far is Almatti Dam Krishna Gardens from Bengaluru?",
        "answer": "Almatti Dam Krishna Gardens is Approx. 470 km from Bengaluru, taking 8 hrs by private cab."
      },
      {
        "question": "What is the best way to travel to Almatti Dam Krishna Gardens?",
        "answer": "Hiring a private AC chauffeur cab from Coffee Cabs provides seamless door-to-door comfort."
      }
    ],
    "heroImage": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1200&h=800&fit=crop",
    "lastVerified": "20 September 2026",
    "status": "verified"
  },
  {
    "id": "kudalasangama",
    "name": "Kudalasangama Sacred Sangama & Basaveshwara Samadhi",
    "slug": "kudalasangama",
    "district": "Bagalkote",
    "region": "Deccan & North Heritage",
    "categories": [
      "Lingayat Pilgrimage",
      "Sangama",
      "Basavanna Shrine",
      "River"
    ],
    "approximateDistanceFromBengaluru": "Approx. 450 km",
    "approximateDriveTime": "7.5 hrs",
    "bestSeason": "September to March",
    "suggestedDuration": "1–2 Days",
    "overview": "Kudalasangama Sacred Sangama & Basaveshwara Samadhi is a premier destination located in the Bagalkote district within the Deccan & North Heritage of Karnataka. Situated Approx. 450 km from Bengaluru (7.5 hrs drive), it offers visitors rich cultural heritage, scenic vistas, and unforgettable outstation travel experiences.",
    "historyAndCulture": "Kudalasangama Sacred Sangama & Basaveshwara Samadhi holds significant regional importance in Karnataka's historical timeline, characterized by unique architectural traditions, local festivals, and natural splendor.",
    "majorAttractions": [
      "Kudalasangama Sacred Sangama & Basaveshwara Samadhi Primary Viewpoint & Landmark",
      "Historic Heritage Enclosure at Kudalasangama Sacred Sangama & Basaveshwara Samadhi",
      "Scenic Nature Trail & Photography Zone",
      "Regional Cultural Center & Temple Shrine",
      "Sunset Point & Countryside Overlook"
    ],
    "nearbyAttractions": [
      "Bengaluru",
      "Mysuru",
      "Chikkamagaluru",
      "Udupi"
    ],
    "bengaluruRoute": "Bengaluru highway corridor leading to Bagalkote via major national and state highways.",
    "thingsToDo": [
      "Explore major viewpoints and historical monuments of Kudalasangama Sacred Sangama & Basaveshwara Samadhi",
      "Photography of natural landscapes and regional heritage",
      "Taste authentic Karnataka culinary specialties",
      "Guided nature walk and countryside stroll"
    ],
    "localFood": [
      "Authentic Karnataka South Indian Thali",
      "Filter Coffee",
      "Regional Crisps & Snacks"
    ],
    "entryInformation": "General public access available. Verify current entry fees, timings, and seasonal guidelines prior to travel.",
    "permitInformation": "Standard tourist access. Check with forest/local authorities for restricted trekking trails or sanctuary zones.",
    "safetyNotes": "Follow local safety guidelines, stay on designated paths, and carry sufficient drinking water.",
    "oneDayItinerary": "Morning departure from Bengaluru → Arrive at Kudalasangama Sacred Sangama & Basaveshwara Samadhi for landmark tour & lunch → Afternoon exploration of nearby attractions → Evening return journey.",
    "twoDayItinerary": "Day 1: Scenic drive to Kudalasangama Sacred Sangama & Basaveshwara Samadhi, check-in at resort/hotel, evening sunset viewpoint. Day 2: Morning heritage & nature tour, regional lunch, return to Bengaluru.",
    "relatedDestinations": [
      "bengaluru",
      "nandi-hills",
      "mysuru",
      "coorg"
    ],
    "relatedPackages": [
      "nandi-hills-ramanagara-1day"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "How far is Kudalasangama Sacred Sangama & Basaveshwara Samadhi from Bengaluru?",
        "answer": "Kudalasangama Sacred Sangama & Basaveshwara Samadhi is Approx. 450 km from Bengaluru, taking 7.5 hrs by private cab."
      },
      {
        "question": "What is the best way to travel to Kudalasangama Sacred Sangama & Basaveshwara Samadhi?",
        "answer": "Hiring a private AC chauffeur cab from Coffee Cabs provides seamless door-to-door comfort."
      }
    ],
    "heroImage": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1200&h=800&fit=crop",
    "lastVerified": "20 September 2026",
    "status": "verified"
  },
  {
    "id": "vijayapura",
    "name": "Vijayapura (Bijapur Gol Gumbaz Sultanate)",
    "slug": "vijayapura",
    "district": "Vijayapura",
    "region": "Deccan & North Heritage",
    "categories": [
      "Gol Gumbaz",
      "Sultanate Heritage",
      "Whispering Gallery",
      "Ibrahim Rauza"
    ],
    "approximateDistanceFromBengaluru": "Approx. 520 km",
    "approximateDriveTime": "8.5 hrs",
    "bestSeason": "September to March",
    "suggestedDuration": "1–2 Days",
    "overview": "Vijayapura (Bijapur Gol Gumbaz Sultanate) is a premier destination located in the Vijayapura district within the Deccan & North Heritage of Karnataka. Situated Approx. 520 km from Bengaluru (8.5 hrs drive), it offers visitors rich cultural heritage, scenic vistas, and unforgettable outstation travel experiences.",
    "historyAndCulture": "Vijayapura (Bijapur Gol Gumbaz Sultanate) holds significant regional importance in Karnataka's historical timeline, characterized by unique architectural traditions, local festivals, and natural splendor.",
    "majorAttractions": [
      "Vijayapura (Bijapur Gol Gumbaz Sultanate) Primary Viewpoint & Landmark",
      "Historic Heritage Enclosure at Vijayapura (Bijapur Gol Gumbaz Sultanate)",
      "Scenic Nature Trail & Photography Zone",
      "Regional Cultural Center & Temple Shrine",
      "Sunset Point & Countryside Overlook"
    ],
    "nearbyAttractions": [
      "Bengaluru",
      "Mysuru",
      "Chikkamagaluru",
      "Udupi"
    ],
    "bengaluruRoute": "Bengaluru highway corridor leading to Vijayapura via major national and state highways.",
    "thingsToDo": [
      "Explore major viewpoints and historical monuments of Vijayapura (Bijapur Gol Gumbaz Sultanate)",
      "Photography of natural landscapes and regional heritage",
      "Taste authentic Karnataka culinary specialties",
      "Guided nature walk and countryside stroll"
    ],
    "localFood": [
      "Authentic Karnataka South Indian Thali",
      "Filter Coffee",
      "Regional Crisps & Snacks"
    ],
    "entryInformation": "General public access available. Verify current entry fees, timings, and seasonal guidelines prior to travel.",
    "permitInformation": "Standard tourist access. Check with forest/local authorities for restricted trekking trails or sanctuary zones.",
    "safetyNotes": "Follow local safety guidelines, stay on designated paths, and carry sufficient drinking water.",
    "oneDayItinerary": "Morning departure from Bengaluru → Arrive at Vijayapura (Bijapur Gol Gumbaz Sultanate) for landmark tour & lunch → Afternoon exploration of nearby attractions → Evening return journey.",
    "twoDayItinerary": "Day 1: Scenic drive to Vijayapura (Bijapur Gol Gumbaz Sultanate), check-in at resort/hotel, evening sunset viewpoint. Day 2: Morning heritage & nature tour, regional lunch, return to Bengaluru.",
    "relatedDestinations": [
      "bengaluru",
      "nandi-hills",
      "mysuru",
      "coorg"
    ],
    "relatedPackages": [
      "nandi-hills-ramanagara-1day"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "How far is Vijayapura (Bijapur Gol Gumbaz Sultanate) from Bengaluru?",
        "answer": "Vijayapura (Bijapur Gol Gumbaz Sultanate) is Approx. 520 km from Bengaluru, taking 8.5 hrs by private cab."
      },
      {
        "question": "What is the best way to travel to Vijayapura (Bijapur Gol Gumbaz Sultanate)?",
        "answer": "Hiring a private AC chauffeur cab from Coffee Cabs provides seamless door-to-door comfort."
      }
    ],
    "heroImage": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1200&h=800&fit=crop",
    "lastVerified": "20 September 2026",
    "status": "verified"
  },
  {
    "id": "kalaburagi",
    "name": "Kalaburagi (Gulbarga Fort & Sufi Shrines)",
    "slug": "kalaburagi",
    "district": "Kalaburagi",
    "region": "Deccan & North Heritage",
    "categories": [
      "Bahmani Fort",
      "Khwaja Bande Nawaz",
      "Jami Masjid",
      "Heritage"
    ],
    "approximateDistanceFromBengaluru": "Approx. 570 km",
    "approximateDriveTime": "9.5 hrs",
    "bestSeason": "September to March",
    "suggestedDuration": "1–2 Days",
    "overview": "Kalaburagi (Gulbarga Fort & Sufi Shrines) is a premier destination located in the Kalaburagi district within the Deccan & North Heritage of Karnataka. Situated Approx. 570 km from Bengaluru (9.5 hrs drive), it offers visitors rich cultural heritage, scenic vistas, and unforgettable outstation travel experiences.",
    "historyAndCulture": "Kalaburagi (Gulbarga Fort & Sufi Shrines) holds significant regional importance in Karnataka's historical timeline, characterized by unique architectural traditions, local festivals, and natural splendor.",
    "majorAttractions": [
      "Kalaburagi (Gulbarga Fort & Sufi Shrines) Primary Viewpoint & Landmark",
      "Historic Heritage Enclosure at Kalaburagi (Gulbarga Fort & Sufi Shrines)",
      "Scenic Nature Trail & Photography Zone",
      "Regional Cultural Center & Temple Shrine",
      "Sunset Point & Countryside Overlook"
    ],
    "nearbyAttractions": [
      "Bengaluru",
      "Mysuru",
      "Chikkamagaluru",
      "Udupi"
    ],
    "bengaluruRoute": "Bengaluru highway corridor leading to Kalaburagi via major national and state highways.",
    "thingsToDo": [
      "Explore major viewpoints and historical monuments of Kalaburagi (Gulbarga Fort & Sufi Shrines)",
      "Photography of natural landscapes and regional heritage",
      "Taste authentic Karnataka culinary specialties",
      "Guided nature walk and countryside stroll"
    ],
    "localFood": [
      "Authentic Karnataka South Indian Thali",
      "Filter Coffee",
      "Regional Crisps & Snacks"
    ],
    "entryInformation": "General public access available. Verify current entry fees, timings, and seasonal guidelines prior to travel.",
    "permitInformation": "Standard tourist access. Check with forest/local authorities for restricted trekking trails or sanctuary zones.",
    "safetyNotes": "Follow local safety guidelines, stay on designated paths, and carry sufficient drinking water.",
    "oneDayItinerary": "Morning departure from Bengaluru → Arrive at Kalaburagi (Gulbarga Fort & Sufi Shrines) for landmark tour & lunch → Afternoon exploration of nearby attractions → Evening return journey.",
    "twoDayItinerary": "Day 1: Scenic drive to Kalaburagi (Gulbarga Fort & Sufi Shrines), check-in at resort/hotel, evening sunset viewpoint. Day 2: Morning heritage & nature tour, regional lunch, return to Bengaluru.",
    "relatedDestinations": [
      "bengaluru",
      "nandi-hills",
      "mysuru",
      "coorg"
    ],
    "relatedPackages": [
      "nandi-hills-ramanagara-1day"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "How far is Kalaburagi (Gulbarga Fort & Sufi Shrines) from Bengaluru?",
        "answer": "Kalaburagi (Gulbarga Fort & Sufi Shrines) is Approx. 570 km from Bengaluru, taking 9.5 hrs by private cab."
      },
      {
        "question": "What is the best way to travel to Kalaburagi (Gulbarga Fort & Sufi Shrines)?",
        "answer": "Hiring a private AC chauffeur cab from Coffee Cabs provides seamless door-to-door comfort."
      }
    ],
    "heroImage": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1200&h=800&fit=crop",
    "lastVerified": "20 September 2026",
    "status": "verified"
  },
  {
    "id": "bidar",
    "name": "Bidar Bahmani Fort & Mahmud Gawan Madrasa",
    "slug": "bidar",
    "district": "Bidar",
    "region": "Deccan & North Heritage",
    "categories": [
      "Bidar Fort",
      "Solah Khamba",
      "Bidriware Craft",
      "Sultanate"
    ],
    "approximateDistanceFromBengaluru": "Approx. 680 km",
    "approximateDriveTime": "11 hrs",
    "bestSeason": "September to March",
    "suggestedDuration": "1–2 Days",
    "overview": "Bidar Bahmani Fort & Mahmud Gawan Madrasa is a premier destination located in the Bidar district within the Deccan & North Heritage of Karnataka. Situated Approx. 680 km from Bengaluru (11 hrs drive), it offers visitors rich cultural heritage, scenic vistas, and unforgettable outstation travel experiences.",
    "historyAndCulture": "Bidar Bahmani Fort & Mahmud Gawan Madrasa holds significant regional importance in Karnataka's historical timeline, characterized by unique architectural traditions, local festivals, and natural splendor.",
    "majorAttractions": [
      "Bidar Bahmani Fort & Mahmud Gawan Madrasa Primary Viewpoint & Landmark",
      "Historic Heritage Enclosure at Bidar Bahmani Fort & Mahmud Gawan Madrasa",
      "Scenic Nature Trail & Photography Zone",
      "Regional Cultural Center & Temple Shrine",
      "Sunset Point & Countryside Overlook"
    ],
    "nearbyAttractions": [
      "Bengaluru",
      "Mysuru",
      "Chikkamagaluru",
      "Udupi"
    ],
    "bengaluruRoute": "Bengaluru highway corridor leading to Bidar via major national and state highways.",
    "thingsToDo": [
      "Explore major viewpoints and historical monuments of Bidar Bahmani Fort & Mahmud Gawan Madrasa",
      "Photography of natural landscapes and regional heritage",
      "Taste authentic Karnataka culinary specialties",
      "Guided nature walk and countryside stroll"
    ],
    "localFood": [
      "Authentic Karnataka South Indian Thali",
      "Filter Coffee",
      "Regional Crisps & Snacks"
    ],
    "entryInformation": "General public access available. Verify current entry fees, timings, and seasonal guidelines prior to travel.",
    "permitInformation": "Standard tourist access. Check with forest/local authorities for restricted trekking trails or sanctuary zones.",
    "safetyNotes": "Follow local safety guidelines, stay on designated paths, and carry sufficient drinking water.",
    "oneDayItinerary": "Morning departure from Bengaluru → Arrive at Bidar Bahmani Fort & Mahmud Gawan Madrasa for landmark tour & lunch → Afternoon exploration of nearby attractions → Evening return journey.",
    "twoDayItinerary": "Day 1: Scenic drive to Bidar Bahmani Fort & Mahmud Gawan Madrasa, check-in at resort/hotel, evening sunset viewpoint. Day 2: Morning heritage & nature tour, regional lunch, return to Bengaluru.",
    "relatedDestinations": [
      "bengaluru",
      "nandi-hills",
      "mysuru",
      "coorg"
    ],
    "relatedPackages": [
      "nandi-hills-ramanagara-1day"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "How far is Bidar Bahmani Fort & Mahmud Gawan Madrasa from Bengaluru?",
        "answer": "Bidar Bahmani Fort & Mahmud Gawan Madrasa is Approx. 680 km from Bengaluru, taking 11 hrs by private cab."
      },
      {
        "question": "What is the best way to travel to Bidar Bahmani Fort & Mahmud Gawan Madrasa?",
        "answer": "Hiring a private AC chauffeur cab from Coffee Cabs provides seamless door-to-door comfort."
      }
    ],
    "heroImage": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1200&h=800&fit=crop",
    "lastVerified": "20 September 2026",
    "status": "verified"
  },
  {
    "id": "raichur",
    "name": "Raichur Doab Fort & Citadel",
    "slug": "raichur",
    "district": "Raichur",
    "region": "Deccan & North Heritage",
    "categories": [
      "Fortress",
      "Doab Region",
      "Historical Citadel",
      "Heritage"
    ],
    "approximateDistanceFromBengaluru": "Approx. 410 km",
    "approximateDriveTime": "7 hrs",
    "bestSeason": "September to March",
    "suggestedDuration": "1–2 Days",
    "overview": "Raichur Doab Fort & Citadel is a premier destination located in the Raichur district within the Deccan & North Heritage of Karnataka. Situated Approx. 410 km from Bengaluru (7 hrs drive), it offers visitors rich cultural heritage, scenic vistas, and unforgettable outstation travel experiences.",
    "historyAndCulture": "Raichur Doab Fort & Citadel holds significant regional importance in Karnataka's historical timeline, characterized by unique architectural traditions, local festivals, and natural splendor.",
    "majorAttractions": [
      "Raichur Doab Fort & Citadel Primary Viewpoint & Landmark",
      "Historic Heritage Enclosure at Raichur Doab Fort & Citadel",
      "Scenic Nature Trail & Photography Zone",
      "Regional Cultural Center & Temple Shrine",
      "Sunset Point & Countryside Overlook"
    ],
    "nearbyAttractions": [
      "Bengaluru",
      "Mysuru",
      "Chikkamagaluru",
      "Udupi"
    ],
    "bengaluruRoute": "Bengaluru highway corridor leading to Raichur via major national and state highways.",
    "thingsToDo": [
      "Explore major viewpoints and historical monuments of Raichur Doab Fort & Citadel",
      "Photography of natural landscapes and regional heritage",
      "Taste authentic Karnataka culinary specialties",
      "Guided nature walk and countryside stroll"
    ],
    "localFood": [
      "Authentic Karnataka South Indian Thali",
      "Filter Coffee",
      "Regional Crisps & Snacks"
    ],
    "entryInformation": "General public access available. Verify current entry fees, timings, and seasonal guidelines prior to travel.",
    "permitInformation": "Standard tourist access. Check with forest/local authorities for restricted trekking trails or sanctuary zones.",
    "safetyNotes": "Follow local safety guidelines, stay on designated paths, and carry sufficient drinking water.",
    "oneDayItinerary": "Morning departure from Bengaluru → Arrive at Raichur Doab Fort & Citadel for landmark tour & lunch → Afternoon exploration of nearby attractions → Evening return journey.",
    "twoDayItinerary": "Day 1: Scenic drive to Raichur Doab Fort & Citadel, check-in at resort/hotel, evening sunset viewpoint. Day 2: Morning heritage & nature tour, regional lunch, return to Bengaluru.",
    "relatedDestinations": [
      "bengaluru",
      "nandi-hills",
      "mysuru",
      "coorg"
    ],
    "relatedPackages": [
      "nandi-hills-ramanagara-1day"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "How far is Raichur Doab Fort & Citadel from Bengaluru?",
        "answer": "Raichur Doab Fort & Citadel is Approx. 410 km from Bengaluru, taking 7 hrs by private cab."
      },
      {
        "question": "What is the best way to travel to Raichur Doab Fort & Citadel?",
        "answer": "Hiring a private AC chauffeur cab from Coffee Cabs provides seamless door-to-door comfort."
      }
    ],
    "heroImage": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1200&h=800&fit=crop",
    "lastVerified": "20 September 2026",
    "status": "verified"
  },
  {
    "id": "gadag-lakkundi",
    "name": "Gadag & Lakkundi Chalukya Stepwells",
    "slug": "gadag-lakkundi",
    "district": "Gadag",
    "region": "Deccan & North Heritage",
    "categories": [
      "Stepwells",
      "Chalukya Carvings",
      "Trikuteshwara",
      "Architecture"
    ],
    "approximateDistanceFromBengaluru": "Approx. 380 km",
    "approximateDriveTime": "6.5 hrs",
    "bestSeason": "September to March",
    "suggestedDuration": "1–2 Days",
    "overview": "Gadag & Lakkundi Chalukya Stepwells is a premier destination located in the Gadag district within the Deccan & North Heritage of Karnataka. Situated Approx. 380 km from Bengaluru (6.5 hrs drive), it offers visitors rich cultural heritage, scenic vistas, and unforgettable outstation travel experiences.",
    "historyAndCulture": "Gadag & Lakkundi Chalukya Stepwells holds significant regional importance in Karnataka's historical timeline, characterized by unique architectural traditions, local festivals, and natural splendor.",
    "majorAttractions": [
      "Gadag & Lakkundi Chalukya Stepwells Primary Viewpoint & Landmark",
      "Historic Heritage Enclosure at Gadag & Lakkundi Chalukya Stepwells",
      "Scenic Nature Trail & Photography Zone",
      "Regional Cultural Center & Temple Shrine",
      "Sunset Point & Countryside Overlook"
    ],
    "nearbyAttractions": [
      "Bengaluru",
      "Mysuru",
      "Chikkamagaluru",
      "Udupi"
    ],
    "bengaluruRoute": "Bengaluru highway corridor leading to Gadag via major national and state highways.",
    "thingsToDo": [
      "Explore major viewpoints and historical monuments of Gadag & Lakkundi Chalukya Stepwells",
      "Photography of natural landscapes and regional heritage",
      "Taste authentic Karnataka culinary specialties",
      "Guided nature walk and countryside stroll"
    ],
    "localFood": [
      "Authentic Karnataka South Indian Thali",
      "Filter Coffee",
      "Regional Crisps & Snacks"
    ],
    "entryInformation": "General public access available. Verify current entry fees, timings, and seasonal guidelines prior to travel.",
    "permitInformation": "Standard tourist access. Check with forest/local authorities for restricted trekking trails or sanctuary zones.",
    "safetyNotes": "Follow local safety guidelines, stay on designated paths, and carry sufficient drinking water.",
    "oneDayItinerary": "Morning departure from Bengaluru → Arrive at Gadag & Lakkundi Chalukya Stepwells for landmark tour & lunch → Afternoon exploration of nearby attractions → Evening return journey.",
    "twoDayItinerary": "Day 1: Scenic drive to Gadag & Lakkundi Chalukya Stepwells, check-in at resort/hotel, evening sunset viewpoint. Day 2: Morning heritage & nature tour, regional lunch, return to Bengaluru.",
    "relatedDestinations": [
      "bengaluru",
      "nandi-hills",
      "mysuru",
      "coorg"
    ],
    "relatedPackages": [
      "nandi-hills-ramanagara-1day"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "How far is Gadag & Lakkundi Chalukya Stepwells from Bengaluru?",
        "answer": "Gadag & Lakkundi Chalukya Stepwells is Approx. 380 km from Bengaluru, taking 6.5 hrs by private cab."
      },
      {
        "question": "What is the best way to travel to Gadag & Lakkundi Chalukya Stepwells?",
        "answer": "Hiring a private AC chauffeur cab from Coffee Cabs provides seamless door-to-door comfort."
      }
    ],
    "heroImage": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1200&h=800&fit=crop",
    "lastVerified": "20 September 2026",
    "status": "verified"
  },
  {
    "id": "hubballi-dharwad",
    "name": "Hubballi–Dharwad Twin Cultural Cities",
    "slug": "hubballi-dharwad",
    "district": "Dharwad",
    "region": "Deccan & North Heritage",
    "categories": [
      "Peda Sweet City",
      "Unkal Lake",
      "Literature Hub",
      "Urban"
    ],
    "approximateDistanceFromBengaluru": "Approx. 410 km",
    "approximateDriveTime": "6.5 hrs",
    "bestSeason": "September to March",
    "suggestedDuration": "1–2 Days",
    "overview": "Hubballi–Dharwad Twin Cultural Cities is a premier destination located in the Dharwad district within the Deccan & North Heritage of Karnataka. Situated Approx. 410 km from Bengaluru (6.5 hrs drive), it offers visitors rich cultural heritage, scenic vistas, and unforgettable outstation travel experiences.",
    "historyAndCulture": "Hubballi–Dharwad Twin Cultural Cities holds significant regional importance in Karnataka's historical timeline, characterized by unique architectural traditions, local festivals, and natural splendor.",
    "majorAttractions": [
      "Hubballi–Dharwad Twin Cultural Cities Primary Viewpoint & Landmark",
      "Historic Heritage Enclosure at Hubballi–Dharwad Twin Cultural Cities",
      "Scenic Nature Trail & Photography Zone",
      "Regional Cultural Center & Temple Shrine",
      "Sunset Point & Countryside Overlook"
    ],
    "nearbyAttractions": [
      "Bengaluru",
      "Mysuru",
      "Chikkamagaluru",
      "Udupi"
    ],
    "bengaluruRoute": "Bengaluru highway corridor leading to Dharwad via major national and state highways.",
    "thingsToDo": [
      "Explore major viewpoints and historical monuments of Hubballi–Dharwad Twin Cultural Cities",
      "Photography of natural landscapes and regional heritage",
      "Taste authentic Karnataka culinary specialties",
      "Guided nature walk and countryside stroll"
    ],
    "localFood": [
      "Authentic Karnataka South Indian Thali",
      "Filter Coffee",
      "Regional Crisps & Snacks"
    ],
    "entryInformation": "General public access available. Verify current entry fees, timings, and seasonal guidelines prior to travel.",
    "permitInformation": "Standard tourist access. Check with forest/local authorities for restricted trekking trails or sanctuary zones.",
    "safetyNotes": "Follow local safety guidelines, stay on designated paths, and carry sufficient drinking water.",
    "oneDayItinerary": "Morning departure from Bengaluru → Arrive at Hubballi–Dharwad Twin Cultural Cities for landmark tour & lunch → Afternoon exploration of nearby attractions → Evening return journey.",
    "twoDayItinerary": "Day 1: Scenic drive to Hubballi–Dharwad Twin Cultural Cities, check-in at resort/hotel, evening sunset viewpoint. Day 2: Morning heritage & nature tour, regional lunch, return to Bengaluru.",
    "relatedDestinations": [
      "bengaluru",
      "nandi-hills",
      "mysuru",
      "coorg"
    ],
    "relatedPackages": [
      "nandi-hills-ramanagara-1day"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "How far is Hubballi–Dharwad Twin Cultural Cities from Bengaluru?",
        "answer": "Hubballi–Dharwad Twin Cultural Cities is Approx. 410 km from Bengaluru, taking 6.5 hrs by private cab."
      },
      {
        "question": "What is the best way to travel to Hubballi–Dharwad Twin Cultural Cities?",
        "answer": "Hiring a private AC chauffeur cab from Coffee Cabs provides seamless door-to-door comfort."
      }
    ],
    "heroImage": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1200&h=800&fit=crop",
    "lastVerified": "20 September 2026",
    "status": "verified"
  },
  {
    "id": "belagavi",
    "name": "Belagavi Fort & Rajhansgad Fortress",
    "slug": "belagavi",
    "district": "Belagavi",
    "region": "Deccan & North Heritage",
    "categories": [
      "Kamal Basti",
      "Kithoor History",
      "Suvarna Soudha",
      "Ghats"
    ],
    "approximateDistanceFromBengaluru": "Approx. 500 km",
    "approximateDriveTime": "8 hrs",
    "bestSeason": "September to March",
    "suggestedDuration": "1–2 Days",
    "overview": "Belagavi Fort & Rajhansgad Fortress is a premier destination located in the Belagavi district within the Deccan & North Heritage of Karnataka. Situated Approx. 500 km from Bengaluru (8 hrs drive), it offers visitors rich cultural heritage, scenic vistas, and unforgettable outstation travel experiences.",
    "historyAndCulture": "Belagavi Fort & Rajhansgad Fortress holds significant regional importance in Karnataka's historical timeline, characterized by unique architectural traditions, local festivals, and natural splendor.",
    "majorAttractions": [
      "Belagavi Fort & Rajhansgad Fortress Primary Viewpoint & Landmark",
      "Historic Heritage Enclosure at Belagavi Fort & Rajhansgad Fortress",
      "Scenic Nature Trail & Photography Zone",
      "Regional Cultural Center & Temple Shrine",
      "Sunset Point & Countryside Overlook"
    ],
    "nearbyAttractions": [
      "Bengaluru",
      "Mysuru",
      "Chikkamagaluru",
      "Udupi"
    ],
    "bengaluruRoute": "Bengaluru highway corridor leading to Belagavi via major national and state highways.",
    "thingsToDo": [
      "Explore major viewpoints and historical monuments of Belagavi Fort & Rajhansgad Fortress",
      "Photography of natural landscapes and regional heritage",
      "Taste authentic Karnataka culinary specialties",
      "Guided nature walk and countryside stroll"
    ],
    "localFood": [
      "Authentic Karnataka South Indian Thali",
      "Filter Coffee",
      "Regional Crisps & Snacks"
    ],
    "entryInformation": "General public access available. Verify current entry fees, timings, and seasonal guidelines prior to travel.",
    "permitInformation": "Standard tourist access. Check with forest/local authorities for restricted trekking trails or sanctuary zones.",
    "safetyNotes": "Follow local safety guidelines, stay on designated paths, and carry sufficient drinking water.",
    "oneDayItinerary": "Morning departure from Bengaluru → Arrive at Belagavi Fort & Rajhansgad Fortress for landmark tour & lunch → Afternoon exploration of nearby attractions → Evening return journey.",
    "twoDayItinerary": "Day 1: Scenic drive to Belagavi Fort & Rajhansgad Fortress, check-in at resort/hotel, evening sunset viewpoint. Day 2: Morning heritage & nature tour, regional lunch, return to Bengaluru.",
    "relatedDestinations": [
      "bengaluru",
      "nandi-hills",
      "mysuru",
      "coorg"
    ],
    "relatedPackages": [
      "nandi-hills-ramanagara-1day"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "How far is Belagavi Fort & Rajhansgad Fortress from Bengaluru?",
        "answer": "Belagavi Fort & Rajhansgad Fortress is Approx. 500 km from Bengaluru, taking 8 hrs by private cab."
      },
      {
        "question": "What is the best way to travel to Belagavi Fort & Rajhansgad Fortress?",
        "answer": "Hiring a private AC chauffeur cab from Coffee Cabs provides seamless door-to-door comfort."
      }
    ],
    "heroImage": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1200&h=800&fit=crop",
    "lastVerified": "20 September 2026",
    "status": "verified"
  },
  {
    "id": "kittur",
    "name": "Kittur Rani Chennamma Fort",
    "slug": "kittur",
    "district": "Belagavi",
    "region": "Deccan & North Heritage",
    "categories": [
      "Rani Chennamma",
      "Freedom Struggle",
      "Palace Ruins",
      "History"
    ],
    "approximateDistanceFromBengaluru": "Approx. 470 km",
    "approximateDriveTime": "7.5 hrs",
    "bestSeason": "September to March",
    "suggestedDuration": "1–2 Days",
    "overview": "Kittur Rani Chennamma Fort is a premier destination located in the Belagavi district within the Deccan & North Heritage of Karnataka. Situated Approx. 470 km from Bengaluru (7.5 hrs drive), it offers visitors rich cultural heritage, scenic vistas, and unforgettable outstation travel experiences.",
    "historyAndCulture": "Kittur Rani Chennamma Fort holds significant regional importance in Karnataka's historical timeline, characterized by unique architectural traditions, local festivals, and natural splendor.",
    "majorAttractions": [
      "Kittur Rani Chennamma Fort Primary Viewpoint & Landmark",
      "Historic Heritage Enclosure at Kittur Rani Chennamma Fort",
      "Scenic Nature Trail & Photography Zone",
      "Regional Cultural Center & Temple Shrine",
      "Sunset Point & Countryside Overlook"
    ],
    "nearbyAttractions": [
      "Bengaluru",
      "Mysuru",
      "Chikkamagaluru",
      "Udupi"
    ],
    "bengaluruRoute": "Bengaluru highway corridor leading to Belagavi via major national and state highways.",
    "thingsToDo": [
      "Explore major viewpoints and historical monuments of Kittur Rani Chennamma Fort",
      "Photography of natural landscapes and regional heritage",
      "Taste authentic Karnataka culinary specialties",
      "Guided nature walk and countryside stroll"
    ],
    "localFood": [
      "Authentic Karnataka South Indian Thali",
      "Filter Coffee",
      "Regional Crisps & Snacks"
    ],
    "entryInformation": "General public access available. Verify current entry fees, timings, and seasonal guidelines prior to travel.",
    "permitInformation": "Standard tourist access. Check with forest/local authorities for restricted trekking trails or sanctuary zones.",
    "safetyNotes": "Follow local safety guidelines, stay on designated paths, and carry sufficient drinking water.",
    "oneDayItinerary": "Morning departure from Bengaluru → Arrive at Kittur Rani Chennamma Fort for landmark tour & lunch → Afternoon exploration of nearby attractions → Evening return journey.",
    "twoDayItinerary": "Day 1: Scenic drive to Kittur Rani Chennamma Fort, check-in at resort/hotel, evening sunset viewpoint. Day 2: Morning heritage & nature tour, regional lunch, return to Bengaluru.",
    "relatedDestinations": [
      "bengaluru",
      "nandi-hills",
      "mysuru",
      "coorg"
    ],
    "relatedPackages": [
      "nandi-hills-ramanagara-1day"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "How far is Kittur Rani Chennamma Fort from Bengaluru?",
        "answer": "Kittur Rani Chennamma Fort is Approx. 470 km from Bengaluru, taking 7.5 hrs by private cab."
      },
      {
        "question": "What is the best way to travel to Kittur Rani Chennamma Fort?",
        "answer": "Hiring a private AC chauffeur cab from Coffee Cabs provides seamless door-to-door comfort."
      }
    ],
    "heroImage": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1200&h=800&fit=crop",
    "lastVerified": "20 September 2026",
    "status": "verified"
  },
  {
    "id": "gokak-falls",
    "name": "Gokak Falls & Suspension Cable Bridge",
    "slug": "gokak-falls",
    "district": "Belagavi",
    "region": "Deccan & North Heritage",
    "categories": [
      "Niagara of KA",
      "Suspension Bridge",
      "Ghataprabha",
      "Waterfalls"
    ],
    "approximateDistanceFromBengaluru": "Approx. 540 km",
    "approximateDriveTime": "9 hrs",
    "bestSeason": "September to March",
    "suggestedDuration": "1–2 Days",
    "overview": "Gokak Falls & Suspension Cable Bridge is a premier destination located in the Belagavi district within the Deccan & North Heritage of Karnataka. Situated Approx. 540 km from Bengaluru (9 hrs drive), it offers visitors rich cultural heritage, scenic vistas, and unforgettable outstation travel experiences.",
    "historyAndCulture": "Gokak Falls & Suspension Cable Bridge holds significant regional importance in Karnataka's historical timeline, characterized by unique architectural traditions, local festivals, and natural splendor.",
    "majorAttractions": [
      "Gokak Falls & Suspension Cable Bridge Primary Viewpoint & Landmark",
      "Historic Heritage Enclosure at Gokak Falls & Suspension Cable Bridge",
      "Scenic Nature Trail & Photography Zone",
      "Regional Cultural Center & Temple Shrine",
      "Sunset Point & Countryside Overlook"
    ],
    "nearbyAttractions": [
      "Bengaluru",
      "Mysuru",
      "Chikkamagaluru",
      "Udupi"
    ],
    "bengaluruRoute": "Bengaluru highway corridor leading to Belagavi via major national and state highways.",
    "thingsToDo": [
      "Explore major viewpoints and historical monuments of Gokak Falls & Suspension Cable Bridge",
      "Photography of natural landscapes and regional heritage",
      "Taste authentic Karnataka culinary specialties",
      "Guided nature walk and countryside stroll"
    ],
    "localFood": [
      "Authentic Karnataka South Indian Thali",
      "Filter Coffee",
      "Regional Crisps & Snacks"
    ],
    "entryInformation": "General public access available. Verify current entry fees, timings, and seasonal guidelines prior to travel.",
    "permitInformation": "Standard tourist access. Check with forest/local authorities for restricted trekking trails or sanctuary zones.",
    "safetyNotes": "Follow local safety guidelines, stay on designated paths, and carry sufficient drinking water.",
    "oneDayItinerary": "Morning departure from Bengaluru → Arrive at Gokak Falls & Suspension Cable Bridge for landmark tour & lunch → Afternoon exploration of nearby attractions → Evening return journey.",
    "twoDayItinerary": "Day 1: Scenic drive to Gokak Falls & Suspension Cable Bridge, check-in at resort/hotel, evening sunset viewpoint. Day 2: Morning heritage & nature tour, regional lunch, return to Bengaluru.",
    "relatedDestinations": [
      "bengaluru",
      "nandi-hills",
      "mysuru",
      "coorg"
    ],
    "relatedPackages": [
      "nandi-hills-ramanagara-1day"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "How far is Gokak Falls & Suspension Cable Bridge from Bengaluru?",
        "answer": "Gokak Falls & Suspension Cable Bridge is Approx. 540 km from Bengaluru, taking 9 hrs by private cab."
      },
      {
        "question": "What is the best way to travel to Gokak Falls & Suspension Cable Bridge?",
        "answer": "Hiring a private AC chauffeur cab from Coffee Cabs provides seamless door-to-door comfort."
      }
    ],
    "heroImage": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1200&h=800&fit=crop",
    "lastVerified": "20 September 2026",
    "status": "verified"
  },
  {
    "id": "saundatti",
    "name": "Saundatti Yellamma Temple & Parasgad Fort",
    "slug": "saundatti",
    "district": "Belagavi",
    "region": "Deccan & North Heritage",
    "categories": [
      "Renuka Yellamma",
      "Pilgrimage",
      "Parasgad Fort",
      "Culture"
    ],
    "approximateDistanceFromBengaluru": "Approx. 460 km",
    "approximateDriveTime": "7.5 hrs",
    "bestSeason": "September to March",
    "suggestedDuration": "1–2 Days",
    "overview": "Saundatti Yellamma Temple & Parasgad Fort is a premier destination located in the Belagavi district within the Deccan & North Heritage of Karnataka. Situated Approx. 460 km from Bengaluru (7.5 hrs drive), it offers visitors rich cultural heritage, scenic vistas, and unforgettable outstation travel experiences.",
    "historyAndCulture": "Saundatti Yellamma Temple & Parasgad Fort holds significant regional importance in Karnataka's historical timeline, characterized by unique architectural traditions, local festivals, and natural splendor.",
    "majorAttractions": [
      "Saundatti Yellamma Temple & Parasgad Fort Primary Viewpoint & Landmark",
      "Historic Heritage Enclosure at Saundatti Yellamma Temple & Parasgad Fort",
      "Scenic Nature Trail & Photography Zone",
      "Regional Cultural Center & Temple Shrine",
      "Sunset Point & Countryside Overlook"
    ],
    "nearbyAttractions": [
      "Bengaluru",
      "Mysuru",
      "Chikkamagaluru",
      "Udupi"
    ],
    "bengaluruRoute": "Bengaluru highway corridor leading to Belagavi via major national and state highways.",
    "thingsToDo": [
      "Explore major viewpoints and historical monuments of Saundatti Yellamma Temple & Parasgad Fort",
      "Photography of natural landscapes and regional heritage",
      "Taste authentic Karnataka culinary specialties",
      "Guided nature walk and countryside stroll"
    ],
    "localFood": [
      "Authentic Karnataka South Indian Thali",
      "Filter Coffee",
      "Regional Crisps & Snacks"
    ],
    "entryInformation": "General public access available. Verify current entry fees, timings, and seasonal guidelines prior to travel.",
    "permitInformation": "Standard tourist access. Check with forest/local authorities for restricted trekking trails or sanctuary zones.",
    "safetyNotes": "Follow local safety guidelines, stay on designated paths, and carry sufficient drinking water.",
    "oneDayItinerary": "Morning departure from Bengaluru → Arrive at Saundatti Yellamma Temple & Parasgad Fort for landmark tour & lunch → Afternoon exploration of nearby attractions → Evening return journey.",
    "twoDayItinerary": "Day 1: Scenic drive to Saundatti Yellamma Temple & Parasgad Fort, check-in at resort/hotel, evening sunset viewpoint. Day 2: Morning heritage & nature tour, regional lunch, return to Bengaluru.",
    "relatedDestinations": [
      "bengaluru",
      "nandi-hills",
      "mysuru",
      "coorg"
    ],
    "relatedPackages": [
      "nandi-hills-ramanagara-1day"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "How far is Saundatti Yellamma Temple & Parasgad Fort from Bengaluru?",
        "answer": "Saundatti Yellamma Temple & Parasgad Fort is Approx. 460 km from Bengaluru, taking 7.5 hrs by private cab."
      },
      {
        "question": "What is the best way to travel to Saundatti Yellamma Temple & Parasgad Fort?",
        "answer": "Hiring a private AC chauffeur cab from Coffee Cabs provides seamless door-to-door comfort."
      }
    ],
    "heroImage": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1200&h=800&fit=crop",
    "lastVerified": "20 September 2026",
    "status": "verified"
  },
  {
    "id": "haveri",
    "name": "Haveri Cardamom City & Siddhesvara Temple",
    "slug": "haveri",
    "district": "Haveri",
    "region": "Deccan & North Heritage",
    "categories": [
      "Siddhesvara Temple",
      "Cardamom Trading",
      "Kalyani Chalukya"
    ],
    "approximateDistanceFromBengaluru": "Approx. 340 km",
    "approximateDriveTime": "5.5 hrs",
    "bestSeason": "September to March",
    "suggestedDuration": "1–2 Days",
    "overview": "Haveri Cardamom City & Siddhesvara Temple is a premier destination located in the Haveri district within the Deccan & North Heritage of Karnataka. Situated Approx. 340 km from Bengaluru (5.5 hrs drive), it offers visitors rich cultural heritage, scenic vistas, and unforgettable outstation travel experiences.",
    "historyAndCulture": "Haveri Cardamom City & Siddhesvara Temple holds significant regional importance in Karnataka's historical timeline, characterized by unique architectural traditions, local festivals, and natural splendor.",
    "majorAttractions": [
      "Haveri Cardamom City & Siddhesvara Temple Primary Viewpoint & Landmark",
      "Historic Heritage Enclosure at Haveri Cardamom City & Siddhesvara Temple",
      "Scenic Nature Trail & Photography Zone",
      "Regional Cultural Center & Temple Shrine",
      "Sunset Point & Countryside Overlook"
    ],
    "nearbyAttractions": [
      "Bengaluru",
      "Mysuru",
      "Chikkamagaluru",
      "Udupi"
    ],
    "bengaluruRoute": "Bengaluru highway corridor leading to Haveri via major national and state highways.",
    "thingsToDo": [
      "Explore major viewpoints and historical monuments of Haveri Cardamom City & Siddhesvara Temple",
      "Photography of natural landscapes and regional heritage",
      "Taste authentic Karnataka culinary specialties",
      "Guided nature walk and countryside stroll"
    ],
    "localFood": [
      "Authentic Karnataka South Indian Thali",
      "Filter Coffee",
      "Regional Crisps & Snacks"
    ],
    "entryInformation": "General public access available. Verify current entry fees, timings, and seasonal guidelines prior to travel.",
    "permitInformation": "Standard tourist access. Check with forest/local authorities for restricted trekking trails or sanctuary zones.",
    "safetyNotes": "Follow local safety guidelines, stay on designated paths, and carry sufficient drinking water.",
    "oneDayItinerary": "Morning departure from Bengaluru → Arrive at Haveri Cardamom City & Siddhesvara Temple for landmark tour & lunch → Afternoon exploration of nearby attractions → Evening return journey.",
    "twoDayItinerary": "Day 1: Scenic drive to Haveri Cardamom City & Siddhesvara Temple, check-in at resort/hotel, evening sunset viewpoint. Day 2: Morning heritage & nature tour, regional lunch, return to Bengaluru.",
    "relatedDestinations": [
      "bengaluru",
      "nandi-hills",
      "mysuru",
      "coorg"
    ],
    "relatedPackages": [
      "nandi-hills-ramanagara-1day"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "How far is Haveri Cardamom City & Siddhesvara Temple from Bengaluru?",
        "answer": "Haveri Cardamom City & Siddhesvara Temple is Approx. 340 km from Bengaluru, taking 5.5 hrs by private cab."
      },
      {
        "question": "What is the best way to travel to Haveri Cardamom City & Siddhesvara Temple?",
        "answer": "Hiring a private AC chauffeur cab from Coffee Cabs provides seamless door-to-door comfort."
      }
    ],
    "heroImage": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1200&h=800&fit=crop",
    "lastVerified": "20 September 2026",
    "status": "verified"
  },
  {
    "id": "chitradurga",
    "name": "Chitradurga Fort of Seven Circles",
    "slug": "chitradurga",
    "district": "Chitradurga",
    "region": "Deccan & North Heritage",
    "categories": [
      "Stone Fortress",
      "Obavva Secret Passage",
      "7-Tier Walls",
      "History"
    ],
    "approximateDistanceFromBengaluru": "Approx. 200 km",
    "approximateDriveTime": "3.5 hrs",
    "bestSeason": "September to March",
    "suggestedDuration": "1–2 Days",
    "overview": "Chitradurga Fort of Seven Circles is a premier destination located in the Chitradurga district within the Deccan & North Heritage of Karnataka. Situated Approx. 200 km from Bengaluru (3.5 hrs drive), it offers visitors rich cultural heritage, scenic vistas, and unforgettable outstation travel experiences.",
    "historyAndCulture": "Chitradurga Fort of Seven Circles holds significant regional importance in Karnataka's historical timeline, characterized by unique architectural traditions, local festivals, and natural splendor.",
    "majorAttractions": [
      "Chitradurga Fort of Seven Circles Primary Viewpoint & Landmark",
      "Historic Heritage Enclosure at Chitradurga Fort of Seven Circles",
      "Scenic Nature Trail & Photography Zone",
      "Regional Cultural Center & Temple Shrine",
      "Sunset Point & Countryside Overlook"
    ],
    "nearbyAttractions": [
      "Bengaluru",
      "Mysuru",
      "Chikkamagaluru",
      "Udupi"
    ],
    "bengaluruRoute": "Bengaluru highway corridor leading to Chitradurga via major national and state highways.",
    "thingsToDo": [
      "Explore major viewpoints and historical monuments of Chitradurga Fort of Seven Circles",
      "Photography of natural landscapes and regional heritage",
      "Taste authentic Karnataka culinary specialties",
      "Guided nature walk and countryside stroll"
    ],
    "localFood": [
      "Authentic Karnataka South Indian Thali",
      "Filter Coffee",
      "Regional Crisps & Snacks"
    ],
    "entryInformation": "General public access available. Verify current entry fees, timings, and seasonal guidelines prior to travel.",
    "permitInformation": "Standard tourist access. Check with forest/local authorities for restricted trekking trails or sanctuary zones.",
    "safetyNotes": "Follow local safety guidelines, stay on designated paths, and carry sufficient drinking water.",
    "oneDayItinerary": "Morning departure from Bengaluru → Arrive at Chitradurga Fort of Seven Circles for landmark tour & lunch → Afternoon exploration of nearby attractions → Evening return journey.",
    "twoDayItinerary": "Day 1: Scenic drive to Chitradurga Fort of Seven Circles, check-in at resort/hotel, evening sunset viewpoint. Day 2: Morning heritage & nature tour, regional lunch, return to Bengaluru.",
    "relatedDestinations": [
      "bengaluru",
      "nandi-hills",
      "mysuru",
      "coorg"
    ],
    "relatedPackages": [
      "nandi-hills-ramanagara-1day"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "How far is Chitradurga Fort of Seven Circles from Bengaluru?",
        "answer": "Chitradurga Fort of Seven Circles is Approx. 200 km from Bengaluru, taking 3.5 hrs by private cab."
      },
      {
        "question": "What is the best way to travel to Chitradurga Fort of Seven Circles?",
        "answer": "Hiring a private AC chauffeur cab from Coffee Cabs provides seamless door-to-door comfort."
      }
    ],
    "heroImage": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1200&h=800&fit=crop",
    "lastVerified": "20 September 2026",
    "status": "verified"
  },
  {
    "id": "davanagere-harihar",
    "name": "Davanagere Benne Dosa & Harihar Temple",
    "slug": "davanagere-harihar",
    "district": "Davanagere",
    "region": "Deccan & North Heritage",
    "categories": [
      "Butter Dosa Capital",
      "Harihareshwara",
      "Tungabhadra",
      "Cuisine"
    ],
    "approximateDistanceFromBengaluru": "Approx. 260 km",
    "approximateDriveTime": "4.5 hrs",
    "bestSeason": "September to March",
    "suggestedDuration": "1–2 Days",
    "overview": "Davanagere Benne Dosa & Harihar Temple is a premier destination located in the Davanagere district within the Deccan & North Heritage of Karnataka. Situated Approx. 260 km from Bengaluru (4.5 hrs drive), it offers visitors rich cultural heritage, scenic vistas, and unforgettable outstation travel experiences.",
    "historyAndCulture": "Davanagere Benne Dosa & Harihar Temple holds significant regional importance in Karnataka's historical timeline, characterized by unique architectural traditions, local festivals, and natural splendor.",
    "majorAttractions": [
      "Davanagere Benne Dosa & Harihar Temple Primary Viewpoint & Landmark",
      "Historic Heritage Enclosure at Davanagere Benne Dosa & Harihar Temple",
      "Scenic Nature Trail & Photography Zone",
      "Regional Cultural Center & Temple Shrine",
      "Sunset Point & Countryside Overlook"
    ],
    "nearbyAttractions": [
      "Bengaluru",
      "Mysuru",
      "Chikkamagaluru",
      "Udupi"
    ],
    "bengaluruRoute": "Bengaluru highway corridor leading to Davanagere via major national and state highways.",
    "thingsToDo": [
      "Explore major viewpoints and historical monuments of Davanagere Benne Dosa & Harihar Temple",
      "Photography of natural landscapes and regional heritage",
      "Taste authentic Karnataka culinary specialties",
      "Guided nature walk and countryside stroll"
    ],
    "localFood": [
      "Authentic Karnataka South Indian Thali",
      "Filter Coffee",
      "Regional Crisps & Snacks"
    ],
    "entryInformation": "General public access available. Verify current entry fees, timings, and seasonal guidelines prior to travel.",
    "permitInformation": "Standard tourist access. Check with forest/local authorities for restricted trekking trails or sanctuary zones.",
    "safetyNotes": "Follow local safety guidelines, stay on designated paths, and carry sufficient drinking water.",
    "oneDayItinerary": "Morning departure from Bengaluru → Arrive at Davanagere Benne Dosa & Harihar Temple for landmark tour & lunch → Afternoon exploration of nearby attractions → Evening return journey.",
    "twoDayItinerary": "Day 1: Scenic drive to Davanagere Benne Dosa & Harihar Temple, check-in at resort/hotel, evening sunset viewpoint. Day 2: Morning heritage & nature tour, regional lunch, return to Bengaluru.",
    "relatedDestinations": [
      "bengaluru",
      "nandi-hills",
      "mysuru",
      "coorg"
    ],
    "relatedPackages": [
      "nandi-hills-ramanagara-1day"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "How far is Davanagere Benne Dosa & Harihar Temple from Bengaluru?",
        "answer": "Davanagere Benne Dosa & Harihar Temple is Approx. 260 km from Bengaluru, taking 4.5 hrs by private cab."
      },
      {
        "question": "What is the best way to travel to Davanagere Benne Dosa & Harihar Temple?",
        "answer": "Hiring a private AC chauffeur cab from Coffee Cabs provides seamless door-to-door comfort."
      }
    ],
    "heroImage": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1200&h=800&fit=crop",
    "lastVerified": "20 September 2026",
    "status": "verified"
  },
  {
    "id": "kudremukh-national-park",
    "name": "Kudremukh National Park Reserve",
    "slug": "kudremukh-national-park",
    "district": "Chikkamagaluru",
    "region": "Malnad & Central Ghats",
    "categories": [
      "Shola Grasslands",
      "Biodiversity",
      "Trekking",
      "Forest"
    ],
    "approximateDistanceFromBengaluru": "Approx. 330 km",
    "approximateDriveTime": "6.5 hrs",
    "bestSeason": "September to March",
    "suggestedDuration": "1–2 Days",
    "overview": "Kudremukh National Park Reserve is a premier destination located in the Chikkamagaluru district within the Malnad & Central Ghats of Karnataka. Situated Approx. 330 km from Bengaluru (6.5 hrs drive), it offers visitors rich cultural heritage, scenic vistas, and unforgettable outstation travel experiences.",
    "historyAndCulture": "Kudremukh National Park Reserve holds significant regional importance in Karnataka's historical timeline, characterized by unique architectural traditions, local festivals, and natural splendor.",
    "majorAttractions": [
      "Kudremukh National Park Reserve Primary Viewpoint & Landmark",
      "Historic Heritage Enclosure at Kudremukh National Park Reserve",
      "Scenic Nature Trail & Photography Zone",
      "Regional Cultural Center & Temple Shrine",
      "Sunset Point & Countryside Overlook"
    ],
    "nearbyAttractions": [
      "Bengaluru",
      "Mysuru",
      "Chikkamagaluru",
      "Udupi"
    ],
    "bengaluruRoute": "Bengaluru highway corridor leading to Chikkamagaluru via major national and state highways.",
    "thingsToDo": [
      "Explore major viewpoints and historical monuments of Kudremukh National Park Reserve",
      "Photography of natural landscapes and regional heritage",
      "Taste authentic Karnataka culinary specialties",
      "Guided nature walk and countryside stroll"
    ],
    "localFood": [
      "Authentic Karnataka South Indian Thali",
      "Filter Coffee",
      "Regional Crisps & Snacks"
    ],
    "entryInformation": "General public access available. Verify current entry fees, timings, and seasonal guidelines prior to travel.",
    "permitInformation": "Standard tourist access. Check with forest/local authorities for restricted trekking trails or sanctuary zones.",
    "safetyNotes": "Follow local safety guidelines, stay on designated paths, and carry sufficient drinking water.",
    "oneDayItinerary": "Morning departure from Bengaluru → Arrive at Kudremukh National Park Reserve for landmark tour & lunch → Afternoon exploration of nearby attractions → Evening return journey.",
    "twoDayItinerary": "Day 1: Scenic drive to Kudremukh National Park Reserve, check-in at resort/hotel, evening sunset viewpoint. Day 2: Morning heritage & nature tour, regional lunch, return to Bengaluru.",
    "relatedDestinations": [
      "bengaluru",
      "nandi-hills",
      "mysuru",
      "coorg"
    ],
    "relatedPackages": [
      "nandi-hills-ramanagara-1day"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "How far is Kudremukh National Park Reserve from Bengaluru?",
        "answer": "Kudremukh National Park Reserve is Approx. 330 km from Bengaluru, taking 6.5 hrs by private cab."
      },
      {
        "question": "What is the best way to travel to Kudremukh National Park Reserve?",
        "answer": "Hiring a private AC chauffeur cab from Coffee Cabs provides seamless door-to-door comfort."
      }
    ],
    "heroImage": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1200&h=800&fit=crop",
    "lastVerified": "20 September 2026",
    "status": "verified"
  },
  {
    "id": "brahmagiri-wildlife-sanctuary",
    "name": "Brahmagiri Wildlife Sanctuary",
    "slug": "brahmagiri-wildlife-sanctuary",
    "district": "Kodagu",
    "region": "Kodagu (Coorg)",
    "categories": [
      "Brahmagiri Peak",
      "Iruppu Falls",
      "Wildlife",
      "Trekking"
    ],
    "approximateDistanceFromBengaluru": "Approx. 270 km",
    "approximateDriveTime": "6 hrs",
    "bestSeason": "September to March",
    "suggestedDuration": "1–2 Days",
    "overview": "Brahmagiri Wildlife Sanctuary is a premier destination located in the Kodagu district within the Kodagu (Coorg) of Karnataka. Situated Approx. 270 km from Bengaluru (6 hrs drive), it offers visitors rich cultural heritage, scenic vistas, and unforgettable outstation travel experiences.",
    "historyAndCulture": "Brahmagiri Wildlife Sanctuary holds significant regional importance in Karnataka's historical timeline, characterized by unique architectural traditions, local festivals, and natural splendor.",
    "majorAttractions": [
      "Brahmagiri Wildlife Sanctuary Primary Viewpoint & Landmark",
      "Historic Heritage Enclosure at Brahmagiri Wildlife Sanctuary",
      "Scenic Nature Trail & Photography Zone",
      "Regional Cultural Center & Temple Shrine",
      "Sunset Point & Countryside Overlook"
    ],
    "nearbyAttractions": [
      "Bengaluru",
      "Mysuru",
      "Chikkamagaluru",
      "Udupi"
    ],
    "bengaluruRoute": "Bengaluru highway corridor leading to Kodagu via major national and state highways.",
    "thingsToDo": [
      "Explore major viewpoints and historical monuments of Brahmagiri Wildlife Sanctuary",
      "Photography of natural landscapes and regional heritage",
      "Taste authentic Karnataka culinary specialties",
      "Guided nature walk and countryside stroll"
    ],
    "localFood": [
      "Authentic Karnataka South Indian Thali",
      "Filter Coffee",
      "Regional Crisps & Snacks"
    ],
    "entryInformation": "General public access available. Verify current entry fees, timings, and seasonal guidelines prior to travel.",
    "permitInformation": "Standard tourist access. Check with forest/local authorities for restricted trekking trails or sanctuary zones.",
    "safetyNotes": "Follow local safety guidelines, stay on designated paths, and carry sufficient drinking water.",
    "oneDayItinerary": "Morning departure from Bengaluru → Arrive at Brahmagiri Wildlife Sanctuary for landmark tour & lunch → Afternoon exploration of nearby attractions → Evening return journey.",
    "twoDayItinerary": "Day 1: Scenic drive to Brahmagiri Wildlife Sanctuary, check-in at resort/hotel, evening sunset viewpoint. Day 2: Morning heritage & nature tour, regional lunch, return to Bengaluru.",
    "relatedDestinations": [
      "bengaluru",
      "nandi-hills",
      "mysuru",
      "coorg"
    ],
    "relatedPackages": [
      "nandi-hills-ramanagara-1day"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "How far is Brahmagiri Wildlife Sanctuary from Bengaluru?",
        "answer": "Brahmagiri Wildlife Sanctuary is Approx. 270 km from Bengaluru, taking 6 hrs by private cab."
      },
      {
        "question": "What is the best way to travel to Brahmagiri Wildlife Sanctuary?",
        "answer": "Hiring a private AC chauffeur cab from Coffee Cabs provides seamless door-to-door comfort."
      }
    ],
    "heroImage": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1200&h=800&fit=crop",
    "lastVerified": "20 September 2026",
    "status": "verified"
  },
  {
    "id": "pilikula-nisargadhama",
    "name": "Pilikula Nisargadhama Eco Heritage Village",
    "slug": "pilikula-nisargadhama",
    "district": "Dakshina Kannada",
    "region": "Coastal Canara",
    "categories": [
      "Eco Park",
      "Science Center",
      "Biological Park",
      "Culture"
    ],
    "approximateDistanceFromBengaluru": "Approx. 350 km",
    "approximateDriveTime": "6.5 hrs",
    "bestSeason": "September to March",
    "suggestedDuration": "1–2 Days",
    "overview": "Pilikula Nisargadhama Eco Heritage Village is a premier destination located in the Dakshina Kannada district within the Coastal Canara of Karnataka. Situated Approx. 350 km from Bengaluru (6.5 hrs drive), it offers visitors rich cultural heritage, scenic vistas, and unforgettable outstation travel experiences.",
    "historyAndCulture": "Pilikula Nisargadhama Eco Heritage Village holds significant regional importance in Karnataka's historical timeline, characterized by unique architectural traditions, local festivals, and natural splendor.",
    "majorAttractions": [
      "Pilikula Nisargadhama Eco Heritage Village Primary Viewpoint & Landmark",
      "Historic Heritage Enclosure at Pilikula Nisargadhama Eco Heritage Village",
      "Scenic Nature Trail & Photography Zone",
      "Regional Cultural Center & Temple Shrine",
      "Sunset Point & Countryside Overlook"
    ],
    "nearbyAttractions": [
      "Bengaluru",
      "Mysuru",
      "Chikkamagaluru",
      "Udupi"
    ],
    "bengaluruRoute": "Bengaluru highway corridor leading to Dakshina Kannada via major national and state highways.",
    "thingsToDo": [
      "Explore major viewpoints and historical monuments of Pilikula Nisargadhama Eco Heritage Village",
      "Photography of natural landscapes and regional heritage",
      "Taste authentic Karnataka culinary specialties",
      "Guided nature walk and countryside stroll"
    ],
    "localFood": [
      "Authentic Karnataka South Indian Thali",
      "Filter Coffee",
      "Regional Crisps & Snacks"
    ],
    "entryInformation": "General public access available. Verify current entry fees, timings, and seasonal guidelines prior to travel.",
    "permitInformation": "Standard tourist access. Check with forest/local authorities for restricted trekking trails or sanctuary zones.",
    "safetyNotes": "Follow local safety guidelines, stay on designated paths, and carry sufficient drinking water.",
    "oneDayItinerary": "Morning departure from Bengaluru → Arrive at Pilikula Nisargadhama Eco Heritage Village for landmark tour & lunch → Afternoon exploration of nearby attractions → Evening return journey.",
    "twoDayItinerary": "Day 1: Scenic drive to Pilikula Nisargadhama Eco Heritage Village, check-in at resort/hotel, evening sunset viewpoint. Day 2: Morning heritage & nature tour, regional lunch, return to Bengaluru.",
    "relatedDestinations": [
      "bengaluru",
      "nandi-hills",
      "mysuru",
      "coorg"
    ],
    "relatedPackages": [
      "nandi-hills-ramanagara-1day"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "How far is Pilikula Nisargadhama Eco Heritage Village from Bengaluru?",
        "answer": "Pilikula Nisargadhama Eco Heritage Village is Approx. 350 km from Bengaluru, taking 6.5 hrs by private cab."
      },
      {
        "question": "What is the best way to travel to Pilikula Nisargadhama Eco Heritage Village?",
        "answer": "Hiring a private AC chauffeur cab from Coffee Cabs provides seamless door-to-door comfort."
      }
    ],
    "heroImage": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1200&h=800&fit=crop",
    "lastVerified": "20 September 2026",
    "status": "verified"
  },
  {
    "id": "panambur-beach",
    "name": "Panambur Beach & Port Corridor",
    "slug": "panambur-beach",
    "district": "Dakshina Kannada",
    "region": "Coastal Canara",
    "categories": [
      "Jet Skiing",
      "Camel Rides",
      "Kite Festival",
      "Beach"
    ],
    "approximateDistanceFromBengaluru": "Approx. 355 km",
    "approximateDriveTime": "6.5 hrs",
    "bestSeason": "September to March",
    "suggestedDuration": "1–2 Days",
    "overview": "Panambur Beach & Port Corridor is a premier destination located in the Dakshina Kannada district within the Coastal Canara of Karnataka. Situated Approx. 355 km from Bengaluru (6.5 hrs drive), it offers visitors rich cultural heritage, scenic vistas, and unforgettable outstation travel experiences.",
    "historyAndCulture": "Panambur Beach & Port Corridor holds significant regional importance in Karnataka's historical timeline, characterized by unique architectural traditions, local festivals, and natural splendor.",
    "majorAttractions": [
      "Panambur Beach & Port Corridor Primary Viewpoint & Landmark",
      "Historic Heritage Enclosure at Panambur Beach & Port Corridor",
      "Scenic Nature Trail & Photography Zone",
      "Regional Cultural Center & Temple Shrine",
      "Sunset Point & Countryside Overlook"
    ],
    "nearbyAttractions": [
      "Bengaluru",
      "Mysuru",
      "Chikkamagaluru",
      "Udupi"
    ],
    "bengaluruRoute": "Bengaluru highway corridor leading to Dakshina Kannada via major national and state highways.",
    "thingsToDo": [
      "Explore major viewpoints and historical monuments of Panambur Beach & Port Corridor",
      "Photography of natural landscapes and regional heritage",
      "Taste authentic Karnataka culinary specialties",
      "Guided nature walk and countryside stroll"
    ],
    "localFood": [
      "Authentic Karnataka South Indian Thali",
      "Filter Coffee",
      "Regional Crisps & Snacks"
    ],
    "entryInformation": "General public access available. Verify current entry fees, timings, and seasonal guidelines prior to travel.",
    "permitInformation": "Standard tourist access. Check with forest/local authorities for restricted trekking trails or sanctuary zones.",
    "safetyNotes": "Follow local safety guidelines, stay on designated paths, and carry sufficient drinking water.",
    "oneDayItinerary": "Morning departure from Bengaluru → Arrive at Panambur Beach & Port Corridor for landmark tour & lunch → Afternoon exploration of nearby attractions → Evening return journey.",
    "twoDayItinerary": "Day 1: Scenic drive to Panambur Beach & Port Corridor, check-in at resort/hotel, evening sunset viewpoint. Day 2: Morning heritage & nature tour, regional lunch, return to Bengaluru.",
    "relatedDestinations": [
      "bengaluru",
      "nandi-hills",
      "mysuru",
      "coorg"
    ],
    "relatedPackages": [
      "nandi-hills-ramanagara-1day"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "How far is Panambur Beach & Port Corridor from Bengaluru?",
        "answer": "Panambur Beach & Port Corridor is Approx. 355 km from Bengaluru, taking 6.5 hrs by private cab."
      },
      {
        "question": "What is the best way to travel to Panambur Beach & Port Corridor?",
        "answer": "Hiring a private AC chauffeur cab from Coffee Cabs provides seamless door-to-door comfort."
      }
    ],
    "heroImage": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1200&h=800&fit=crop",
    "lastVerified": "20 September 2026",
    "status": "verified"
  },
  {
    "id": "kavaledurga",
    "name": "Kavaledurga Hill Fort Ruins",
    "slug": "kavaledurga",
    "district": "Shivamogga",
    "region": "Malnad & Central Ghats",
    "categories": [
      "Mossy Fort",
      "Stone Steps",
      "Trekking",
      "Sunset"
    ],
    "approximateDistanceFromBengaluru": "Approx. 340 km",
    "approximateDriveTime": "6 hrs",
    "bestSeason": "September to March",
    "suggestedDuration": "1–2 Days",
    "overview": "Kavaledurga Hill Fort Ruins is a premier destination located in the Shivamogga district within the Malnad & Central Ghats of Karnataka. Situated Approx. 340 km from Bengaluru (6 hrs drive), it offers visitors rich cultural heritage, scenic vistas, and unforgettable outstation travel experiences.",
    "historyAndCulture": "Kavaledurga Hill Fort Ruins holds significant regional importance in Karnataka's historical timeline, characterized by unique architectural traditions, local festivals, and natural splendor.",
    "majorAttractions": [
      "Kavaledurga Hill Fort Ruins Primary Viewpoint & Landmark",
      "Historic Heritage Enclosure at Kavaledurga Hill Fort Ruins",
      "Scenic Nature Trail & Photography Zone",
      "Regional Cultural Center & Temple Shrine",
      "Sunset Point & Countryside Overlook"
    ],
    "nearbyAttractions": [
      "Bengaluru",
      "Mysuru",
      "Chikkamagaluru",
      "Udupi"
    ],
    "bengaluruRoute": "Bengaluru highway corridor leading to Shivamogga via major national and state highways.",
    "thingsToDo": [
      "Explore major viewpoints and historical monuments of Kavaledurga Hill Fort Ruins",
      "Photography of natural landscapes and regional heritage",
      "Taste authentic Karnataka culinary specialties",
      "Guided nature walk and countryside stroll"
    ],
    "localFood": [
      "Authentic Karnataka South Indian Thali",
      "Filter Coffee",
      "Regional Crisps & Snacks"
    ],
    "entryInformation": "General public access available. Verify current entry fees, timings, and seasonal guidelines prior to travel.",
    "permitInformation": "Standard tourist access. Check with forest/local authorities for restricted trekking trails or sanctuary zones.",
    "safetyNotes": "Follow local safety guidelines, stay on designated paths, and carry sufficient drinking water.",
    "oneDayItinerary": "Morning departure from Bengaluru → Arrive at Kavaledurga Hill Fort Ruins for landmark tour & lunch → Afternoon exploration of nearby attractions → Evening return journey.",
    "twoDayItinerary": "Day 1: Scenic drive to Kavaledurga Hill Fort Ruins, check-in at resort/hotel, evening sunset viewpoint. Day 2: Morning heritage & nature tour, regional lunch, return to Bengaluru.",
    "relatedDestinations": [
      "bengaluru",
      "nandi-hills",
      "mysuru",
      "coorg"
    ],
    "relatedPackages": [
      "nandi-hills-ramanagara-1day"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "How far is Kavaledurga Hill Fort Ruins from Bengaluru?",
        "answer": "Kavaledurga Hill Fort Ruins is Approx. 340 km from Bengaluru, taking 6 hrs by private cab."
      },
      {
        "question": "What is the best way to travel to Kavaledurga Hill Fort Ruins?",
        "answer": "Hiring a private AC chauffeur cab from Coffee Cabs provides seamless door-to-door comfort."
      }
    ],
    "heroImage": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1200&h=800&fit=crop",
    "lastVerified": "20 September 2026",
    "status": "verified"
  },
  {
    "id": "kundadri-hill",
    "name": "Kundadri Hill Jain Shrine & Sunrise",
    "slug": "kundadri-hill",
    "district": "Shivamogga",
    "region": "Malnad & Central Ghats",
    "categories": [
      "Lotus Ponds",
      "Jain Shrine",
      "Sunrise",
      "Hilltop"
    ],
    "approximateDistanceFromBengaluru": "Approx. 350 km",
    "approximateDriveTime": "6.5 hrs",
    "bestSeason": "September to March",
    "suggestedDuration": "1–2 Days",
    "overview": "Kundadri Hill Jain Shrine & Sunrise is a premier destination located in the Shivamogga district within the Malnad & Central Ghats of Karnataka. Situated Approx. 350 km from Bengaluru (6.5 hrs drive), it offers visitors rich cultural heritage, scenic vistas, and unforgettable outstation travel experiences.",
    "historyAndCulture": "Kundadri Hill Jain Shrine & Sunrise holds significant regional importance in Karnataka's historical timeline, characterized by unique architectural traditions, local festivals, and natural splendor.",
    "majorAttractions": [
      "Kundadri Hill Jain Shrine & Sunrise Primary Viewpoint & Landmark",
      "Historic Heritage Enclosure at Kundadri Hill Jain Shrine & Sunrise",
      "Scenic Nature Trail & Photography Zone",
      "Regional Cultural Center & Temple Shrine",
      "Sunset Point & Countryside Overlook"
    ],
    "nearbyAttractions": [
      "Bengaluru",
      "Mysuru",
      "Chikkamagaluru",
      "Udupi"
    ],
    "bengaluruRoute": "Bengaluru highway corridor leading to Shivamogga via major national and state highways.",
    "thingsToDo": [
      "Explore major viewpoints and historical monuments of Kundadri Hill Jain Shrine & Sunrise",
      "Photography of natural landscapes and regional heritage",
      "Taste authentic Karnataka culinary specialties",
      "Guided nature walk and countryside stroll"
    ],
    "localFood": [
      "Authentic Karnataka South Indian Thali",
      "Filter Coffee",
      "Regional Crisps & Snacks"
    ],
    "entryInformation": "General public access available. Verify current entry fees, timings, and seasonal guidelines prior to travel.",
    "permitInformation": "Standard tourist access. Check with forest/local authorities for restricted trekking trails or sanctuary zones.",
    "safetyNotes": "Follow local safety guidelines, stay on designated paths, and carry sufficient drinking water.",
    "oneDayItinerary": "Morning departure from Bengaluru → Arrive at Kundadri Hill Jain Shrine & Sunrise for landmark tour & lunch → Afternoon exploration of nearby attractions → Evening return journey.",
    "twoDayItinerary": "Day 1: Scenic drive to Kundadri Hill Jain Shrine & Sunrise, check-in at resort/hotel, evening sunset viewpoint. Day 2: Morning heritage & nature tour, regional lunch, return to Bengaluru.",
    "relatedDestinations": [
      "bengaluru",
      "nandi-hills",
      "mysuru",
      "coorg"
    ],
    "relatedPackages": [
      "nandi-hills-ramanagara-1day"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "How far is Kundadri Hill Jain Shrine & Sunrise from Bengaluru?",
        "answer": "Kundadri Hill Jain Shrine & Sunrise is Approx. 350 km from Bengaluru, taking 6.5 hrs by private cab."
      },
      {
        "question": "What is the best way to travel to Kundadri Hill Jain Shrine & Sunrise?",
        "answer": "Hiring a private AC chauffeur cab from Coffee Cabs provides seamless door-to-door comfort."
      }
    ],
    "heroImage": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1200&h=800&fit=crop",
    "lastVerified": "20 September 2026",
    "status": "verified"
  },
  {
    "id": "netrani-island",
    "name": "Netrani Island Scuba Diving Realm",
    "slug": "netrani-island",
    "district": "Uttara Kannada",
    "region": "Coastal Canara",
    "categories": [
      "Scuba Diving",
      "Coral Reef",
      "Heart Shaped Island",
      "Adventure"
    ],
    "approximateDistanceFromBengaluru": "Approx. 490 km",
    "approximateDriveTime": "8.5 hrs",
    "bestSeason": "September to March",
    "suggestedDuration": "1–2 Days",
    "overview": "Netrani Island Scuba Diving Realm is a premier destination located in the Uttara Kannada district within the Coastal Canara of Karnataka. Situated Approx. 490 km from Bengaluru (8.5 hrs drive), it offers visitors rich cultural heritage, scenic vistas, and unforgettable outstation travel experiences.",
    "historyAndCulture": "Netrani Island Scuba Diving Realm holds significant regional importance in Karnataka's historical timeline, characterized by unique architectural traditions, local festivals, and natural splendor.",
    "majorAttractions": [
      "Netrani Island Scuba Diving Realm Primary Viewpoint & Landmark",
      "Historic Heritage Enclosure at Netrani Island Scuba Diving Realm",
      "Scenic Nature Trail & Photography Zone",
      "Regional Cultural Center & Temple Shrine",
      "Sunset Point & Countryside Overlook"
    ],
    "nearbyAttractions": [
      "Bengaluru",
      "Mysuru",
      "Chikkamagaluru",
      "Udupi"
    ],
    "bengaluruRoute": "Bengaluru highway corridor leading to Uttara Kannada via major national and state highways.",
    "thingsToDo": [
      "Explore major viewpoints and historical monuments of Netrani Island Scuba Diving Realm",
      "Photography of natural landscapes and regional heritage",
      "Taste authentic Karnataka culinary specialties",
      "Guided nature walk and countryside stroll"
    ],
    "localFood": [
      "Authentic Karnataka South Indian Thali",
      "Filter Coffee",
      "Regional Crisps & Snacks"
    ],
    "entryInformation": "General public access available. Verify current entry fees, timings, and seasonal guidelines prior to travel.",
    "permitInformation": "Standard tourist access. Check with forest/local authorities for restricted trekking trails or sanctuary zones.",
    "safetyNotes": "Follow local safety guidelines, stay on designated paths, and carry sufficient drinking water.",
    "oneDayItinerary": "Morning departure from Bengaluru → Arrive at Netrani Island Scuba Diving Realm for landmark tour & lunch → Afternoon exploration of nearby attractions → Evening return journey.",
    "twoDayItinerary": "Day 1: Scenic drive to Netrani Island Scuba Diving Realm, check-in at resort/hotel, evening sunset viewpoint. Day 2: Morning heritage & nature tour, regional lunch, return to Bengaluru.",
    "relatedDestinations": [
      "bengaluru",
      "nandi-hills",
      "mysuru",
      "coorg"
    ],
    "relatedPackages": [
      "nandi-hills-ramanagara-1day"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "How far is Netrani Island Scuba Diving Realm from Bengaluru?",
        "answer": "Netrani Island Scuba Diving Realm is Approx. 490 km from Bengaluru, taking 8.5 hrs by private cab."
      },
      {
        "question": "What is the best way to travel to Netrani Island Scuba Diving Realm?",
        "answer": "Hiring a private AC chauffeur cab from Coffee Cabs provides seamless door-to-door comfort."
      }
    ],
    "heroImage": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1200&h=800&fit=crop",
    "lastVerified": "20 September 2026",
    "status": "verified"
  },
  {
    "id": "supa-dam",
    "name": "Supa Dam Reservoir & Backwaters",
    "slug": "supa-dam",
    "district": "Uttara Kannada",
    "region": "Malnad & Central Ghats",
    "categories": [
      "Kali River Dam",
      "Backwaters",
      "Jungle View",
      "Nature"
    ],
    "approximateDistanceFromBengaluru": "Approx. 470 km",
    "approximateDriveTime": "8.5 hrs",
    "bestSeason": "September to March",
    "suggestedDuration": "1–2 Days",
    "overview": "Supa Dam Reservoir & Backwaters is a premier destination located in the Uttara Kannada district within the Malnad & Central Ghats of Karnataka. Situated Approx. 470 km from Bengaluru (8.5 hrs drive), it offers visitors rich cultural heritage, scenic vistas, and unforgettable outstation travel experiences.",
    "historyAndCulture": "Supa Dam Reservoir & Backwaters holds significant regional importance in Karnataka's historical timeline, characterized by unique architectural traditions, local festivals, and natural splendor.",
    "majorAttractions": [
      "Supa Dam Reservoir & Backwaters Primary Viewpoint & Landmark",
      "Historic Heritage Enclosure at Supa Dam Reservoir & Backwaters",
      "Scenic Nature Trail & Photography Zone",
      "Regional Cultural Center & Temple Shrine",
      "Sunset Point & Countryside Overlook"
    ],
    "nearbyAttractions": [
      "Bengaluru",
      "Mysuru",
      "Chikkamagaluru",
      "Udupi"
    ],
    "bengaluruRoute": "Bengaluru highway corridor leading to Uttara Kannada via major national and state highways.",
    "thingsToDo": [
      "Explore major viewpoints and historical monuments of Supa Dam Reservoir & Backwaters",
      "Photography of natural landscapes and regional heritage",
      "Taste authentic Karnataka culinary specialties",
      "Guided nature walk and countryside stroll"
    ],
    "localFood": [
      "Authentic Karnataka South Indian Thali",
      "Filter Coffee",
      "Regional Crisps & Snacks"
    ],
    "entryInformation": "General public access available. Verify current entry fees, timings, and seasonal guidelines prior to travel.",
    "permitInformation": "Standard tourist access. Check with forest/local authorities for restricted trekking trails or sanctuary zones.",
    "safetyNotes": "Follow local safety guidelines, stay on designated paths, and carry sufficient drinking water.",
    "oneDayItinerary": "Morning departure from Bengaluru → Arrive at Supa Dam Reservoir & Backwaters for landmark tour & lunch → Afternoon exploration of nearby attractions → Evening return journey.",
    "twoDayItinerary": "Day 1: Scenic drive to Supa Dam Reservoir & Backwaters, check-in at resort/hotel, evening sunset viewpoint. Day 2: Morning heritage & nature tour, regional lunch, return to Bengaluru.",
    "relatedDestinations": [
      "bengaluru",
      "nandi-hills",
      "mysuru",
      "coorg"
    ],
    "relatedPackages": [
      "nandi-hills-ramanagara-1day"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "How far is Supa Dam Reservoir & Backwaters from Bengaluru?",
        "answer": "Supa Dam Reservoir & Backwaters is Approx. 470 km from Bengaluru, taking 8.5 hrs by private cab."
      },
      {
        "question": "What is the best way to travel to Supa Dam Reservoir & Backwaters?",
        "answer": "Hiring a private AC chauffeur cab from Coffee Cabs provides seamless door-to-door comfort."
      }
    ],
    "heroImage": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1200&h=800&fit=crop",
    "lastVerified": "20 September 2026",
    "status": "verified"
  },
  {
    "id": "sathodi-falls",
    "name": "Sathodi Falls Jungle Cascade",
    "slug": "sathodi-falls",
    "district": "Uttara Kannada",
    "region": "Malnad & Central Ghats",
    "categories": [
      "Jungle Cascade",
      "Natural Pool",
      "Waterfalls",
      "Nature"
    ],
    "approximateDistanceFromBengaluru": "Approx. 450 km",
    "approximateDriveTime": "8 hrs",
    "bestSeason": "September to March",
    "suggestedDuration": "1–2 Days",
    "overview": "Sathodi Falls Jungle Cascade is a premier destination located in the Uttara Kannada district within the Malnad & Central Ghats of Karnataka. Situated Approx. 450 km from Bengaluru (8 hrs drive), it offers visitors rich cultural heritage, scenic vistas, and unforgettable outstation travel experiences.",
    "historyAndCulture": "Sathodi Falls Jungle Cascade holds significant regional importance in Karnataka's historical timeline, characterized by unique architectural traditions, local festivals, and natural splendor.",
    "majorAttractions": [
      "Sathodi Falls Jungle Cascade Primary Viewpoint & Landmark",
      "Historic Heritage Enclosure at Sathodi Falls Jungle Cascade",
      "Scenic Nature Trail & Photography Zone",
      "Regional Cultural Center & Temple Shrine",
      "Sunset Point & Countryside Overlook"
    ],
    "nearbyAttractions": [
      "Bengaluru",
      "Mysuru",
      "Chikkamagaluru",
      "Udupi"
    ],
    "bengaluruRoute": "Bengaluru highway corridor leading to Uttara Kannada via major national and state highways.",
    "thingsToDo": [
      "Explore major viewpoints and historical monuments of Sathodi Falls Jungle Cascade",
      "Photography of natural landscapes and regional heritage",
      "Taste authentic Karnataka culinary specialties",
      "Guided nature walk and countryside stroll"
    ],
    "localFood": [
      "Authentic Karnataka South Indian Thali",
      "Filter Coffee",
      "Regional Crisps & Snacks"
    ],
    "entryInformation": "General public access available. Verify current entry fees, timings, and seasonal guidelines prior to travel.",
    "permitInformation": "Standard tourist access. Check with forest/local authorities for restricted trekking trails or sanctuary zones.",
    "safetyNotes": "Follow local safety guidelines, stay on designated paths, and carry sufficient drinking water.",
    "oneDayItinerary": "Morning departure from Bengaluru → Arrive at Sathodi Falls Jungle Cascade for landmark tour & lunch → Afternoon exploration of nearby attractions → Evening return journey.",
    "twoDayItinerary": "Day 1: Scenic drive to Sathodi Falls Jungle Cascade, check-in at resort/hotel, evening sunset viewpoint. Day 2: Morning heritage & nature tour, regional lunch, return to Bengaluru.",
    "relatedDestinations": [
      "bengaluru",
      "nandi-hills",
      "mysuru",
      "coorg"
    ],
    "relatedPackages": [
      "nandi-hills-ramanagara-1day"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "How far is Sathodi Falls Jungle Cascade from Bengaluru?",
        "answer": "Sathodi Falls Jungle Cascade is Approx. 450 km from Bengaluru, taking 8 hrs by private cab."
      },
      {
        "question": "What is the best way to travel to Sathodi Falls Jungle Cascade?",
        "answer": "Hiring a private AC chauffeur cab from Coffee Cabs provides seamless door-to-door comfort."
      }
    ],
    "heroImage": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1200&h=800&fit=crop",
    "lastVerified": "20 September 2026",
    "status": "verified"
  },
  {
    "id": "hidkal-dam",
    "name": "Hidkal Dam Reservoir & Ghataprabha",
    "slug": "hidkal-dam",
    "district": "Belagavi",
    "region": "Deccan & North Heritage",
    "categories": [
      "Raja Lakhamagouda Dam",
      "Ghataprabha",
      "Birdwatching",
      "Reservoir"
    ],
    "approximateDistanceFromBengaluru": "Approx. 520 km",
    "approximateDriveTime": "8.5 hrs",
    "bestSeason": "September to March",
    "suggestedDuration": "1–2 Days",
    "overview": "Hidkal Dam Reservoir & Ghataprabha is a premier destination located in the Belagavi district within the Deccan & North Heritage of Karnataka. Situated Approx. 520 km from Bengaluru (8.5 hrs drive), it offers visitors rich cultural heritage, scenic vistas, and unforgettable outstation travel experiences.",
    "historyAndCulture": "Hidkal Dam Reservoir & Ghataprabha holds significant regional importance in Karnataka's historical timeline, characterized by unique architectural traditions, local festivals, and natural splendor.",
    "majorAttractions": [
      "Hidkal Dam Reservoir & Ghataprabha Primary Viewpoint & Landmark",
      "Historic Heritage Enclosure at Hidkal Dam Reservoir & Ghataprabha",
      "Scenic Nature Trail & Photography Zone",
      "Regional Cultural Center & Temple Shrine",
      "Sunset Point & Countryside Overlook"
    ],
    "nearbyAttractions": [
      "Bengaluru",
      "Mysuru",
      "Chikkamagaluru",
      "Udupi"
    ],
    "bengaluruRoute": "Bengaluru highway corridor leading to Belagavi via major national and state highways.",
    "thingsToDo": [
      "Explore major viewpoints and historical monuments of Hidkal Dam Reservoir & Ghataprabha",
      "Photography of natural landscapes and regional heritage",
      "Taste authentic Karnataka culinary specialties",
      "Guided nature walk and countryside stroll"
    ],
    "localFood": [
      "Authentic Karnataka South Indian Thali",
      "Filter Coffee",
      "Regional Crisps & Snacks"
    ],
    "entryInformation": "General public access available. Verify current entry fees, timings, and seasonal guidelines prior to travel.",
    "permitInformation": "Standard tourist access. Check with forest/local authorities for restricted trekking trails or sanctuary zones.",
    "safetyNotes": "Follow local safety guidelines, stay on designated paths, and carry sufficient drinking water.",
    "oneDayItinerary": "Morning departure from Bengaluru → Arrive at Hidkal Dam Reservoir & Ghataprabha for landmark tour & lunch → Afternoon exploration of nearby attractions → Evening return journey.",
    "twoDayItinerary": "Day 1: Scenic drive to Hidkal Dam Reservoir & Ghataprabha, check-in at resort/hotel, evening sunset viewpoint. Day 2: Morning heritage & nature tour, regional lunch, return to Bengaluru.",
    "relatedDestinations": [
      "bengaluru",
      "nandi-hills",
      "mysuru",
      "coorg"
    ],
    "relatedPackages": [
      "nandi-hills-ramanagara-1day"
    ],
    "relatedRoutes": [
      "bengaluru-to-mysuru"
    ],
    "faqs": [
      {
        "question": "How far is Hidkal Dam Reservoir & Ghataprabha from Bengaluru?",
        "answer": "Hidkal Dam Reservoir & Ghataprabha is Approx. 520 km from Bengaluru, taking 8.5 hrs by private cab."
      },
      {
        "question": "What is the best way to travel to Hidkal Dam Reservoir & Ghataprabha?",
        "answer": "Hiring a private AC chauffeur cab from Coffee Cabs provides seamless door-to-door comfort."
      }
    ],
    "heroImage": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1200&h=800&fit=crop",
    "lastVerified": "20 September 2026",
    "status": "verified"
  }
];
