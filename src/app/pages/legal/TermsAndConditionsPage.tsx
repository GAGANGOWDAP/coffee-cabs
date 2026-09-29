import LegalPageLayout, { TocItem } from "../../components/legal/LegalPageLayout";

const TOC_ITEMS: TocItem[] = [
  { id: "about", label: "About Coffee Cabs" },
  { id: "use-of-website", label: "Use of the Website" },
  { id: "booking-requests", label: "Booking Requests" },
  { id: "customer-information", label: "Customer Information" },
  { id: "fares-pricing", label: "Fares and Pricing" },
  { id: "vehicle-information", label: "Vehicle Information" },
  { id: "pickup-drop", label: "Pickup and Drop" },
  { id: "customer-conduct", label: "Customer Conduct" },
  { id: "luggage", label: "Luggage" },
  { id: "travel-delays", label: "Travel Delays" },
  { id: "cancellation-modification", label: "Cancellation and Modification" },
  { id: "safety", label: "Safety" },
  { id: "third-party-services", label: "Third-Party Services" },
  { id: "intellectual-property", label: "Intellectual Property" },
  { id: "website-availability", label: "Website Availability" },
  { id: "force-majeure", label: "Force Majeure" },
  { id: "complaints", label: "Complaints" },
  { id: "changes-to-terms", label: "Changes to These Terms" },
  { id: "governing-law", label: "Governing Law" },
  { id: "contact", label: "Contact Information" },
];

export default function TermsAndConditionsPage() {
  return (
    <LegalPageLayout
      title="Terms & Conditions"
      subtitle="Please read these Terms & Conditions carefully before making booking enquiries or using Coffee Cabs chauffeur-driven transportation services."
      effectiveDate="[EFFECTIVE DATE]"
      lastUpdated="[LAST UPDATED DATE]"
      jurisdiction="[BENGALURU, KARNATAKA]"
      tocItems={TOC_ITEMS}
      seoTitle="Coffee Cabs | Terms & Conditions"
      seoDescription="Terms & Conditions for Coffee Cabs cab bookings, outstation transportation services, enquiries and website usage."
      canonicalPath="/terms-and-conditions"
      activeTab="terms"
    >
      {/* 1. About Coffee Cabs */}
      <section id="about" className="scroll-mt-32">
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#4A3025] mb-3 pb-2 border-b border-[#DDD5C8]">
          1. About Coffee Cabs
        </h2>
        <p className="text-sm sm:text-base text-[#252525] leading-relaxed mb-4">
          Coffee Cabs provides chauffeur-driven cab and travel-related transportation services across Bengaluru and South India, including, where available:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-[#252525] mb-4">
          <li>Local city cab and sightseeing travel</li>
          <li>Kempegowda International Airport (BLR) transfers</li>
          <li>Outstation one-way travel</li>
          <li>Outstation round-trip travel</li>
          <li>Corporate and group transportation</li>
          <li>Custom sightseeing and tour itineraries</li>
          <li>Travel destination information and route guidance</li>
          <li>Vehicle reservation and fare enquiry services</li>
        </ul>
        <p className="text-sm text-[#6F6A63] italic">
          Actual services, fleet options, and route coverage may vary depending on vehicle availability, seasonal demand, and operational feasibility.
        </p>
      </section>

      {/* 2. Use of the Website */}
      <section id="use-of-website" className="scroll-mt-32">
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#4A3025] mb-3 pb-2 border-b border-[#DDD5C8]">
          2. Use of the Website
        </h2>
        <p className="text-sm sm:text-base text-[#252525] leading-relaxed mb-4">
          Users must access and use this website exclusively for lawful travel planning and booking enquiry purposes. Users must not:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-[#252525]">
          <li>Use the website for fraudulent, unlawful, or unauthorized activities</li>
          <li>Submit false, misleading, or abusive booking requests or contact details</li>
          <li>Attempt unauthorized access to website servers, databases, or network infrastructure</li>
          <li>Interfere with or disrupt the security, performance, or proper functioning of the website</li>
          <li>Introduce viruses, malware, trojans, or malicious code</li>
          <li>Scrape, extract, or harvest website content, tariffs, or route data using automated tools</li>
          <li>Impersonate another individual, passenger, or business entity</li>
        </ul>
      </section>

      {/* 3. Booking Requests */}
      <section id="booking-requests" className="scroll-mt-32">
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#4A3025] mb-3 pb-2 border-b border-[#DDD5C8]">
          3. Booking Requests
        </h2>
        <p className="text-sm sm:text-base text-[#252525] leading-relaxed mb-4">
          Submitting a booking form, online enquiry, WhatsApp message, phone request, or other communication through this website <strong>does not automatically constitute a confirmed booking</strong>.
        </p>
        <p className="text-sm sm:text-base text-[#252525] leading-relaxed mb-4">
          A booking becomes binding and confirmed only after Coffee Cabs explicitly verifies passenger requirements and issues a booking confirmation through an authorized communication channel (such as WhatsApp, SMS, phone call, or email).
        </p>
        <div className="bg-[#FFFDF7] p-4 rounded-2xl border border-[#DCC7AA] text-xs sm:text-sm text-[#6F4E37]">
          <strong>Booking Confirmation Factors:</strong> Vehicle availability, requested route, travel date/time, passenger count, luggage capacity, toll/permit feasibility, and operational road conditions.
        </div>
      </section>

      {/* 4. Customer Information */}
      <section id="customer-information" className="scroll-mt-32">
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#4A3025] mb-3 pb-2 border-b border-[#DDD5C8]">
          4. Customer Information
        </h2>
        <p className="text-sm sm:text-base text-[#252525] leading-relaxed mb-4">
          Customers are required to provide complete, truthful, and accurate trip information during the enquiry or booking process, including:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-[#252525] mb-4">
          <li>Full name and valid primary mobile phone number</li>
          <li>Email address (for booking receipts or itinerary details)</li>
          <li>Precise pickup address and drop destination</li>
          <li>Confirmed travel date, pickup time, and passenger count</li>
          <li>Special vehicle requirements or luggage notes</li>
        </ul>
        <p className="text-sm text-[#6F6A63]">
          Coffee Cabs is not liable for service delays, missed pickups, or route issues resulting from inaccurate contact details or incorrect pickup locations provided by the customer.
        </p>
      </section>

      {/* 5. Fares and Pricing */}
      <section id="fares-pricing" className="scroll-mt-32">
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#4A3025] mb-3 pb-2 border-b border-[#DDD5C8]">
          5. Fares and Pricing
        </h2>
        <p className="text-sm sm:text-base text-[#252525] leading-relaxed mb-4">
          Trip fares display owner-approved estimates or owner-approved rates per kilometer. Applicable trip fares depend on multiple operational factors:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-[#252525] mb-4">
          <li>Travel distance, route terrain, and trip type (one-way or round-trip)</li>
          <li>Vehicle category selected (e.g., Innova Crysta, Force Urbania, Tempo Traveller)</li>
          <li>Interstate permit fees, state entry taxes, national highway toll charges</li>
          <li>Airport parking fees, commercial parking charges, driver night allowances</li>
          <li>Additional waiting time beyond agreed trip package hours</li>
        </ul>
        <div className="p-4 bg-[#F5E6CA] rounded-2xl border border-[#DCC7AA] text-xs sm:text-sm text-[#4B3832] font-medium">
          <em>Fare Disclaimer:</em> Where custom route pricing or seasonal rates apply, <strong>Owner-approved fare is available on enquiry</strong> prior to trip departure.
        </div>
      </section>

      {/* 6. Vehicle Information */}
      <section id="vehicle-information" className="scroll-mt-32">
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#4A3025] mb-3 pb-2 border-b border-[#DDD5C8]">
          6. Vehicle Information
        </h2>
        <p className="text-sm sm:text-base text-[#252525] leading-relaxed mb-4">
          Vehicle photographs displayed on the website are representative of commercial fleet categories (Innova Crysta, Force Urbania, Tempo Traveller, Executive Sedans).
        </p>
        <p className="text-sm sm:text-base text-[#252525] leading-relaxed">
          The actual vehicle supplied for your trip may vary slightly in exterior color or model trim based on real-time operational availability, but Coffee Cabs will supply a clean, well-maintained commercial vehicle matching the confirmed seating capacity and AC specifications.
        </p>
      </section>

      {/* 7. Pickup and Drop */}
      <section id="pickup-drop" className="scroll-mt-32">
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#4A3025] mb-3 pb-2 border-b border-[#DDD5C8]">
          7. Pickup and Drop
        </h2>
        <p className="text-sm sm:text-base text-[#252525] leading-relaxed mb-4">
          Passengers must be present at the designated pickup location at the scheduled departure time.
        </p>
        <p className="text-sm sm:text-base text-[#252525] leading-relaxed">
          Unannounced location changes, extended passenger delays, unnavigable narrow lanes, extreme traffic jams, or weather disruptions outside reasonable control may affect pickup timings or require alternative boarding points.
        </p>
      </section>

      {/* 8. Customer Conduct */}
      <section id="customer-conduct" className="scroll-mt-32">
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#4A3025] mb-3 pb-2 border-b border-[#DDD5C8]">
          8. Customer Conduct
        </h2>
        <p className="text-sm sm:text-base text-[#252525] leading-relaxed mb-4">
          Passengers must maintain respectful, courteous behavior toward drivers, highway staff, fellow passengers, and vehicles throughout the journey. Prohibited activities include:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-[#252525]">
          <li>Carrying illegal substances, hazardous goods, or prohibited weapons</li>
          <li>Smoking, vaping, or consuming prohibited substances inside commercial vehicles</li>
          <li>Abusive language, physical threats, or harassment of drivers</li>
          <li>Intentional damage, soilage, or defacement of vehicle interiors</li>
          <li>Pressuring drivers to exceed legal speed limits or violate traffic regulations</li>
        </ul>
      </section>

      {/* 9. Luggage */}
      <section id="luggage" className="scroll-mt-32">
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#4A3025] mb-3 pb-2 border-b border-[#DDD5C8]">
          9. Luggage
        </h2>
        <p className="text-sm sm:text-base text-[#252525] leading-relaxed mb-4">
          Luggage allowance corresponds to standard vehicle luggage compartment capacities (e.g., 3-4 suitcases for Innova Crysta, 8-12 bags for Tempo Traveller).
        </p>
        <p className="text-sm sm:text-base text-[#252525] leading-relaxed">
          Passengers are responsible for their personal belongings, valuables, cash, and electronic devices. Coffee Cabs is not liable for items left behind in vehicles, except where required by law.
        </p>
      </section>

      {/* 10. Travel Delays */}
      <section id="travel-delays" className="scroll-mt-32">
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#4A3025] mb-3 pb-2 border-b border-[#DDD5C8]">
          10. Travel Delays
        </h2>
        <p className="text-sm sm:text-base text-[#252525] leading-relaxed mb-4">
          Travel durations and arrival times quoted on the website or during booking are <strong>approximate estimates</strong> based on normal highway conditions.
        </p>
        <p className="text-sm sm:text-base text-[#252525] leading-relaxed">
          Coffee Cabs does not guarantee exact journey durations where delays arise from peak traffic congestion, highway construction, monsoon rains, ghat section landslides, police checkpoints, or road diversions.
        </p>
      </section>

      {/* 11. Cancellation and Modification */}
      <section id="cancellation-modification" className="scroll-mt-32">
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#4A3025] mb-3 pb-2 border-b border-[#DDD5C8]">
          11. Cancellation and Modification
        </h2>
        <p className="text-sm sm:text-base text-[#252525] leading-relaxed mb-4">
          Trip cancellation or itinerary modifications are governed by the specific booking conditions communicated by Coffee Cabs upon booking confirmation.
        </p>
        <p className="text-sm sm:text-base text-[#252525] leading-relaxed">
          Passengers wishing to modify pickup time, vehicle type, or travel date should notify Coffee Cabs as early as possible to check vehicle reallocation feasibility.
        </p>
      </section>

      {/* 12. Safety */}
      <section id="safety" className="scroll-mt-32">
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#4A3025] mb-3 pb-2 border-b border-[#DDD5C8]">
          12. Safety
        </h2>
        <p className="text-sm sm:text-base text-[#252525] leading-relaxed mb-4">
          All passengers must wear seat belts where equipped in accordance with Motor Vehicles Act regulations. Children and vulnerable travellers must be appropriately supervised by adult companions.
        </p>
      </section>

      {/* 13. Third-Party Services */}
      <section id="third-party-services" className="scroll-mt-32">
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#4A3025] mb-3 pb-2 border-b border-[#DDD5C8]">
          13. Third-Party Services
        </h2>
        <p className="text-sm sm:text-base text-[#252525] leading-relaxed mb-4">
          The website may utilize third-party technology services for analytics (Google Analytics 4), maps, hosting (GitHub Pages), and messaging (WhatsApp API). Users interact with third-party tools subject to their respective terms.
        </p>
      </section>

      {/* 14. Intellectual Property */}
      <section id="intellectual-property" className="scroll-mt-32">
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#4A3025] mb-3 pb-2 border-b border-[#DDD5C8]">
          14. Intellectual Property
        </h2>
        <p className="text-sm sm:text-base text-[#252525] leading-relaxed mb-4">
          All website content, logos, custom graphics, destination descriptions, route guides, and UI designs are protected by applicable copyright and intellectual property laws. Unauthorized copying or commercial reproduction is prohibited.
        </p>
      </section>

      {/* 15. Website Availability */}
      <section id="website-availability" className="scroll-mt-32">
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#4A3025] mb-3 pb-2 border-b border-[#DDD5C8]">
          15. Website Availability
        </h2>
        <p className="text-sm sm:text-base text-[#252525] leading-relaxed mb-4">
          Coffee Cabs strives to ensure continuous website availability but does not guarantee uninterrupted, error-free operation during routine server maintenance or network outages.
        </p>
      </section>

      {/* 16. Force Majeure */}
      <section id="force-majeure" className="scroll-mt-32">
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#4A3025] mb-3 pb-2 border-b border-[#DDD5C8]">
          16. Force Majeure
        </h2>
        <p className="text-sm sm:text-base text-[#252525] leading-relaxed mb-4">
          Coffee Cabs is not liable for trip delays or non-performance caused by events beyond reasonable control, including natural disasters, flash floods, civil strikes, road blockades, severe weather, or government travel restrictions.
        </p>
      </section>

      {/* 17. Complaints */}
      <section id="complaints" className="scroll-mt-32">
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#4A3025] mb-3 pb-2 border-b border-[#DDD5C8]">
          17. Complaints
        </h2>
        <p className="text-sm sm:text-base text-[#252525] leading-relaxed mb-4">
          For booking inquiries, feedback, or service concerns, customers may reach Coffee Cabs via phone at <strong>+91 76767 26209</strong> or email at <strong>info@coffeecabs.in</strong>.
        </p>
      </section>

      {/* 18. Changes to These Terms */}
      <section id="changes-to-terms" className="scroll-mt-32">
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#4A3025] mb-3 pb-2 border-b border-[#DDD5C8]">
          18. Changes to These Terms
        </h2>
        <p className="text-sm sm:text-base text-[#252525] leading-relaxed mb-4">
          Coffee Cabs reserves the right to modify these Terms & Conditions. Revisions will be published on this page with an updated "Last Updated" date.
        </p>
      </section>

      {/* 19. Governing Law */}
      <section id="governing-law" className="scroll-mt-32">
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#4A3025] mb-3 pb-2 border-b border-[#DDD5C8]">
          19. Governing Law
        </h2>
        <p className="text-sm sm:text-base text-[#252525] leading-relaxed mb-4">
          These Terms & Conditions are governed by the laws of India. Courts in <strong>[BENGALURU, KARNATAKA]</strong> shall have exclusive jurisdiction over legal disputes.
        </p>
      </section>

      {/* 20. Contact Information */}
      <section id="contact" className="scroll-mt-32">
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#4A3025] mb-3 pb-2 border-b border-[#DDD5C8]">
          20. Contact Information
        </h2>
        <div className="bg-[#F5E6CA] p-6 rounded-2xl border border-[#DCC7AA] space-y-2 text-sm text-[#4B3832]">
          <p><strong>Business Name:</strong> [LEGAL BUSINESS NAME]</p>
          <p><strong>Email:</strong> [OFFICIAL EMAIL ADDRESS]</p>
          <p><strong>Phone:</strong> [OFFICIAL PHONE NUMBER]</p>
          <p><strong>Address:</strong> [FULL BUSINESS ADDRESS]</p>
        </div>
      </section>
    </LegalPageLayout>
  );
}
