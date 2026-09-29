import LegalPageLayout, { TocItem } from "../../components/legal/LegalPageLayout";

const TOC_ITEMS: TocItem[] = [
  { id: "acceptance", label: "Acceptance" },
  { id: "eligibility", label: "Eligibility" },
  { id: "user-responsibilities", label: "User Responsibilities" },
  { id: "booking-acceptance", label: "Booking Acceptance" },
  { id: "service-availability", label: "Service Availability" },
  { id: "information-accuracy", label: "Information Accuracy" },
  { id: "website-content", label: "Website Content" },
  { id: "user-submitted-information", label: "User-Submitted Information" },
  { id: "third-party-services", label: "Third-Party Services" },
  { id: "cancellation-changes", label: "Cancellation and Changes" },
  { id: "prohibited-activities", label: "Prohibited Activities" },
  { id: "suspension-restriction", label: "Suspension or Restriction" },
  { id: "privacy", label: "Privacy" },
  { id: "relationship-documents", label: "Relationship Between Documents" },
  { id: "updates", label: "Updates" },
  { id: "contact", label: "Contact Information" },
];

export default function UserAgreementPage() {
  return (
    <LegalPageLayout
      title="User Agreement"
      subtitle="This User Agreement governs your access to and usage of the Coffee Cabs website, booking enquiry platform, and travel reservation services."
      effectiveDate="[EFFECTIVE DATE]"
      lastUpdated="[LAST UPDATED DATE]"
      jurisdiction="[BENGALURU, KARNATAKA]"
      tocItems={TOC_ITEMS}
      seoTitle="Coffee Cabs | User Agreement"
      seoDescription="Coffee Cabs User Agreement covering website use, booking requests, customer responsibilities and travel service conditions."
      canonicalPath="/user-agreement"
      activeTab="user-agreement"
    >
      {/* 1. Acceptance */}
      <section id="acceptance" className="scroll-mt-32">
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#4B3832] mb-3 pb-2 border-b border-[#DCC7AA]">
          1. Acceptance
        </h2>
        <p className="text-sm sm:text-base text-[#4B3832] leading-relaxed mb-4">
          By accessing, browsing, or using the Coffee Cabs website, users acknowledge that they have read, understood, and agreed to comply with all terms set forth in this User Agreement.
        </p>
      </section>

      {/* 2. Eligibility */}
      <section id="eligibility" className="scroll-mt-32">
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#4B3832] mb-3 pb-2 border-b border-[#DCC7AA]">
          2. Eligibility
        </h2>
        <p className="text-sm sm:text-base text-[#4B3832] leading-relaxed mb-4">
          Users must be at least 18 years of age or possess legal authority to enter into binding agreements. Users must provide truthful, accurate contact information when submitting booking requests.
        </p>
      </section>

      {/* 3. User Responsibilities */}
      <section id="user-responsibilities" className="scroll-mt-32">
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#4B3832] mb-3 pb-2 border-b border-[#DCC7AA]">
          3. User Responsibilities
        </h2>
        <p className="text-sm sm:text-base text-[#4B3832] leading-relaxed mb-4">
          Users agree to fulfill all passenger obligations throughout the trip booking and travel process:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-[#4B3832]">
          <li>Provide accurate pickup location, drop destination, and passenger counts</li>
          <li>Maintain valid primary contact phone numbers for driver communication</li>
          <li>Be present at the agreed boarding point at the scheduled departure time</li>
          <li>Pay confirmed trip charges, tolls, parking, and permit fees</li>
          <li>Treat assigned drivers, vehicle fleet, and regional highway staff with respect</li>
          <li>Refrain from unlawful, abusive, or dangerous conduct during trips</li>
        </ul>
      </section>

      {/* 4. Booking Acceptance */}
      <section id="booking-acceptance" className="scroll-mt-32">
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#4B3832] mb-3 pb-2 border-b border-[#DCC7AA]">
          4. Booking Acceptance
        </h2>
        <p className="text-sm sm:text-base text-[#4B3832] leading-relaxed mb-4">
          Submitting an enquiry or booking form does not guarantee vehicle reservation. Coffee Cabs reserves the right to accept or decline booking requests based on fleet availability, route feasibility, and schedule constraints.
        </p>
      </section>

      {/* 5. Service Availability */}
      <section id="service-availability" className="scroll-mt-32">
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#4B3832] mb-3 pb-2 border-b border-[#DCC7AA]">
          5. Service Availability
        </h2>
        <p className="text-sm sm:text-base text-[#4B3832] leading-relaxed mb-4">
          Services are offered subject to vehicle availability, geographic coverage, seasonal demand, and local road permits in Karnataka and neighboring states.
        </p>
      </section>

      {/* 6. Information Accuracy */}
      <section id="information-accuracy" className="scroll-mt-32">
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#4B3832] mb-3 pb-2 border-b border-[#DCC7AA]">
          6. Information Accuracy
        </h2>
        <p className="text-sm sm:text-base text-[#4B3832] leading-relaxed mb-4">
          Users are responsible for ensuring that all addresses, passenger counts, and travel dates submitted via forms or messaging channels are accurate.
        </p>
      </section>

      {/* 7. Website Content */}
      <section id="website-content" className="scroll-mt-32">
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#4B3832] mb-3 pb-2 border-b border-[#DCC7AA]">
          7. Website Content
        </h2>
        <p className="text-sm sm:text-base text-[#4B3832] leading-relaxed mb-4">
          Coffee Cabs strives to maintain accurate destination, route, and fleet information. Route durations, distance figures, and local attraction timings are provided for travel planning guidance.
        </p>
      </section>

      {/* 8. User-Submitted Information */}
      <section id="user-submitted-information" className="scroll-mt-32">
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#4B3832] mb-3 pb-2 border-b border-[#DCC7AA]">
          8. User-Submitted Information
        </h2>
        <p className="text-sm sm:text-base text-[#4B3832] leading-relaxed mb-4">
          Users must not submit malicious code, fraudulent contact information, spam, or unauthorized personal data belonging to third parties.
        </p>
      </section>

      {/* 9. Third-Party Services */}
      <section id="third-party-services" className="scroll-mt-32">
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#4B3832] mb-3 pb-2 border-b border-[#DCC7AA]">
          9. Third-Party Services
        </h2>
        <p className="text-sm sm:text-base text-[#4B3832] leading-relaxed mb-4">
          Website functionality may rely on third-party services (such as Google Analytics or GitHub Pages). Third-party services operate subject to their respective terms.
        </p>
      </section>

      {/* 10. Cancellation and Changes */}
      <section id="cancellation-changes" className="scroll-mt-32">
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#4B3832] mb-3 pb-2 border-b border-[#DCC7AA]">
          10. Cancellation and Changes
        </h2>
        <p className="text-sm sm:text-base text-[#4B3832] leading-relaxed mb-4">
          Cancellations or itinerary modifications are governed by the specific booking terms communicated upon trip confirmation.
        </p>
      </section>

      {/* 11. Prohibited Activities */}
      <section id="prohibited-activities" className="scroll-mt-32">
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#4B3832] mb-3 pb-2 border-b border-[#DCC7AA]">
          11. Prohibited Activities
        </h2>
        <p className="text-sm sm:text-base text-[#4B3832] leading-relaxed mb-4">
          Users must not attempt unauthorized server access, scrape proprietary tariffs, distribute malware, or disrupt website operations.
        </p>
      </section>

      {/* 12. Suspension or Restriction */}
      <section id="suspension-restriction" className="scroll-mt-32">
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#4B3832] mb-3 pb-2 border-b border-[#DCC7AA]">
          12. Suspension or Restriction
        </h2>
        <p className="text-sm sm:text-base text-[#4B3832] leading-relaxed mb-4">
          Coffee Cabs reserves the right to restrict website access or decline service where fraudulent requests, abuse, or policy violations occur.
        </p>
      </section>

      {/* 13. Privacy */}
      <section id="privacy" className="scroll-mt-32">
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#4B3832] mb-3 pb-2 border-b border-[#DCC7AA]">
          13. Privacy
        </h2>
        <p className="text-sm sm:text-base text-[#4B3832] leading-relaxed mb-4">
          Handling of personal information submitted through the website is governed by our <a href="/coffee-cabs/privacy-policy" className="text-[#6F4E37] font-bold underline">Privacy Policy</a>.
        </p>
      </section>

      {/* 14. Relationship Between Documents */}
      <section id="relationship-documents" className="scroll-mt-32">
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#4B3832] mb-3 pb-2 border-b border-[#DCC7AA]">
          14. Relationship Between Documents
        </h2>
        <p className="text-sm sm:text-base text-[#4B3832] leading-relaxed mb-4">
          This User Agreement operates alongside our Terms & Conditions and Privacy Policy.
        </p>
      </section>

      {/* 15. Updates */}
      <section id="updates" className="scroll-mt-32">
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#4B3832] mb-3 pb-2 border-b border-[#DCC7AA]">
          15. Updates
        </h2>
        <p className="text-sm sm:text-base text-[#4B3832] leading-relaxed mb-4">
          Coffee Cabs may update this User Agreement periodically. Continued use of the website indicates acceptance of revised terms.
        </p>
      </section>

      {/* 16. Contact Information */}
      <section id="contact" className="scroll-mt-32">
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#4B3832] mb-3 pb-2 border-b border-[#DCC7AA]">
          16. Contact Information
        </h2>
        <div className="bg-[#F5E6CA] p-6 rounded-2xl border border-[#DCC7AA] space-y-2 text-sm text-[#4B3832]">
          <p><strong>Business Name:</strong> Coffee Cabs</p>
          <p><strong>Email:</strong> info@coffeecabs.in</p>
          <p><strong>Phone:</strong> +91 76767 26209</p>
          <p><strong>Address:</strong> Bengaluru, Karnataka, India</p>
        </div>
      </section>
    </LegalPageLayout>
  );
}
