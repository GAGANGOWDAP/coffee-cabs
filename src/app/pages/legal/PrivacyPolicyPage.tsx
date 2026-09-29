import LegalPageLayout, { TocItem } from "../../components/legal/LegalPageLayout";

const TOC_ITEMS: TocItem[] = [
  { id: "information-collected", label: "Information We May Collect" },
  { id: "how-we-use-information", label: "How We Use Information" },
  { id: "communication", label: "Communication" },
  { id: "sharing-information", label: "Sharing Information" },
  { id: "payment-information", label: "Payment Information" },
  { id: "location-information", label: "Location Information" },
  { id: "cookies-analytics", label: "Cookies & Analytics" },
  { id: "data-retention", label: "Data Retention" },
  { id: "data-security", label: "Data Security" },
  { id: "user-rights", label: "User Rights" },
  { id: "withdrawal-consent", label: "Withdrawal of Consent" },
  { id: "childrens-privacy", label: "Children's Privacy" },
  { id: "external-links", label: "External Links" },
  { id: "data-breaches", label: "Data Breaches" },
  { id: "policy-updates", label: "Policy Updates" },
  { id: "privacy-contact", label: "Privacy Contact" },
  { id: "grievance-contact", label: "Grievance Contact" },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      subtitle="This Privacy Policy explains how Coffee Cabs collects, uses, protects, and handles personal information submitted through our website and travel reservation channels."
      effectiveDate="[EFFECTIVE DATE]"
      lastUpdated="[LAST UPDATED DATE]"
      jurisdiction="[BENGALURU, KARNATAKA]"
      tocItems={TOC_ITEMS}
      seoTitle="Coffee Cabs | Privacy Policy"
      seoDescription="Coffee Cabs Privacy Policy explaining how personal information submitted through our website and travel services is handled, protected, and processed."
      canonicalPath="/privacy-policy"
      activeTab="privacy"
    >
      {/* 1. Information We May Collect */}
      <section id="information-collected" className="scroll-mt-32">
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#4A3025] mb-3 pb-2 border-b border-[#DDD5C8]">
          1. Information We May Collect
        </h2>
        <p className="text-sm sm:text-base text-[#252525] leading-relaxed mb-4">
          Coffee Cabs collects only personal information submitted directly by users or automatically transmitted during standard web browser interactions:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-[#252525] mb-4">
          <li><strong>Contact Details:</strong> Full name, primary mobile phone number, and email address</li>
          <li><strong>Booking Details:</strong> Pickup address, drop-off destination, travel date, time, passenger count, and preferred vehicle category</li>
          <li><strong>Customer Support Messages:</strong> Inquiries, special travel requests, or notes submitted via booking forms or contact pages</li>
          <li><strong>Technical Data:</strong> Browser type, operating system, IP address, page interaction data, and diagnostic logs</li>
        </ul>
      </section>

      {/* 2. How We Use Information */}
      <section id="how-we-use-information" className="scroll-mt-32">
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#4A3025] mb-3 pb-2 border-b border-[#DDD5C8]">
          2. How We Use Information
        </h2>
        <p className="text-sm sm:text-base text-[#252525] leading-relaxed mb-4">
          Personal information collected is utilized strictly for legitimate transportation and travel service purposes, including:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-[#252525]">
          <li>Responding to trip enquiries and providing fare quotations</li>
          <li>Processing and confirming cab booking requests</li>
          <li>Coordinating driver assignment and pickup logistics</li>
          <li>Communicating travel updates and driver assignment details</li>
          <li>Providing customer support and handling modifications</li>
          <li>Maintaining website security and preventing fraudulent usage</li>
          <li>Meeting applicable legal, tax, or regulatory recordkeeping obligations</li>
        </ul>
      </section>

      {/* 3. Communication */}
      <section id="communication" className="scroll-mt-32">
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#4A3025] mb-3 pb-2 border-b border-[#DDD5C8]">
          3. Communication
        </h2>
        <p className="text-sm sm:text-base text-[#252525] leading-relaxed mb-4">
          Coffee Cabs uses customer contact information primarily for service-related communications (such as fare quotes, booking confirmation, driver details, or pickup updates). Promotional communications are sent only where permitted by law or consented to by the user.
        </p>
      </section>

      {/* 4. Sharing Information */}
      <section id="sharing-information" className="scroll-mt-32">
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#4A3025] mb-3 pb-2 border-b border-[#DDD5C8]">
          4. Sharing Information
        </h2>
        <p className="text-sm sm:text-base text-[#252525] leading-relaxed mb-4">
          Coffee Cabs does not sell, rent, or trade customer personal information. Information may be shared only with necessary service partners:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-[#252525]">
          <li>Assigned chauffeurs and fleet operational partners for pickup coordination</li>
          <li>Technology hosting providers (GitHub Pages) and analytics providers (Google Analytics 4)</li>
          <li>Legal or government authorities when required under court orders or statutory regulations</li>
        </ul>
      </section>

      {/* 5. Payment Information */}
      <section id="payment-information" className="scroll-mt-32">
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#4A3025] mb-3 pb-2 border-b border-[#DDD5C8]">
          5. Payment Information
        </h2>
        <p className="text-sm sm:text-base text-[#252525] leading-relaxed mb-4">
          Where online payments are processed, transactions are handled securely by authorized third-party payment gateways. Coffee Cabs does not store credit card numbers, CVVs, or bank account passwords on its servers.
        </p>
      </section>

      {/* 6. Location Information */}
      <section id="location-information" className="scroll-mt-32">
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#4A3025] mb-3 pb-2 border-b border-[#DDD5C8]">
          6. Location Information
        </h2>
        <p className="text-sm sm:text-base text-[#252525] leading-relaxed mb-4">
          Coffee Cabs collects pickup and drop-off addresses manually submitted by users in booking forms. The website does not perform continuous background GPS tracking of users.
        </p>
      </section>

      {/* 7. Cookies & Analytics */}
      <section id="cookies-analytics" className="scroll-mt-32">
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#4A3025] mb-3 pb-2 border-b border-[#DDD5C8]">
          7. Cookies & Analytics
        </h2>
        <p className="text-sm sm:text-base text-[#252525] leading-relaxed mb-4">
          The website uses standard technical cookies and Google Analytics 4 (gtag.js) to monitor web traffic and page interaction metrics. No sensitive financial or health data is tracked.
        </p>
      </section>

      {/* 8. Data Retention */}
      <section id="data-retention" className="scroll-mt-32">
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#4A3025] mb-3 pb-2 border-b border-[#DDD5C8]">
          8. Data Retention
        </h2>
        <p className="text-sm sm:text-base text-[#252525] leading-relaxed mb-4">
          Personal information is retained only as long as reasonably necessary to provide requested travel services, fulfill tax/accounting obligations, resolve disputes, and maintain operational logs.
        </p>
      </section>

      {/* 9. Data Security */}
      <section id="data-security" className="scroll-mt-32">
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#4A3025] mb-3 pb-2 border-b border-[#DDD5C8]">
          9. Data Security
        </h2>
        <p className="text-sm sm:text-base text-[#252525] leading-relaxed mb-4">
          Coffee Cabs implements technical and organizational safeguards (including HTTPS encryption, input sanitization, and access controls) to protect personal data against unauthorized access.
        </p>
      </section>

      {/* 10. User Rights */}
      <section id="user-rights" className="scroll-mt-32">
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#4A3025] mb-3 pb-2 border-b border-[#DDD5C8]">
          10. User Rights
        </h2>
        <p className="text-sm sm:text-base text-[#252525] leading-relaxed mb-4">
          Subject to applicable data protection legislation in India, users may request access, correction, or deletion of their submitted personal information by contacting our privacy officer.
        </p>
      </section>

      {/* 11. Withdrawal of Consent */}
      <section id="withdrawal-consent" className="scroll-mt-32">
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#4A3025] mb-3 pb-2 border-b border-[#DDD5C8]">
          11. Withdrawal of Consent
        </h2>
        <p className="text-sm sm:text-base text-[#252525] leading-relaxed mb-4">
          Users may withdraw consent for optional communications at any time by contacting Coffee Cabs, subject to legitimate legal and contractual service requirements.
        </p>
      </section>

      {/* 12. Children's Privacy */}
      <section id="childrens-privacy" className="scroll-mt-32">
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#4A3025] mb-3 pb-2 border-b border-[#DDD5C8]">
          12. Children's Privacy
        </h2>
        <p className="text-sm sm:text-base text-[#252525] leading-relaxed mb-4">
          Coffee Cabs does not knowingly collect personal data from minors under the age of 18 without parental or legal guardian supervision.
        </p>
      </section>

      {/* 13. External Links */}
      <section id="external-links" className="scroll-mt-32">
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#4A3025] mb-3 pb-2 border-b border-[#DDD5C8]">
          13. External Links
        </h2>
        <p className="text-sm sm:text-base text-[#252525] leading-relaxed mb-4">
          Our website may contain links to third-party travel resources or map tools. Coffee Cabs is not responsible for the privacy practices of external websites.
        </p>
      </section>

      {/* 14. Data Breaches */}
      <section id="data-breaches" className="scroll-mt-32">
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#4A3025] mb-3 pb-2 border-b border-[#DDD5C8]">
          14. Data Breaches
        </h2>
        <p className="text-sm sm:text-base text-[#252525] leading-relaxed mb-4">
          In the event of a security incident affecting personal data, Coffee Cabs will take prompt remediation steps in accordance with applicable statutory reporting procedures.
        </p>
      </section>

      {/* 15. Policy Updates */}
      <section id="policy-updates" className="scroll-mt-32">
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#4A3025] mb-3 pb-2 border-b border-[#DDD5C8]">
          15. Policy Updates
        </h2>
        <p className="text-sm sm:text-base text-[#252525] leading-relaxed mb-4">
          We may update this Privacy Policy to reflect operational changes or regulatory guidance. Updates will be posted on this page with a revised date.
        </p>
      </section>

      {/* 16. Privacy Contact */}
      <section id="privacy-contact" className="scroll-mt-32">
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#4A3025] mb-3 pb-2 border-b border-[#DDD5C8]">
          16. Privacy Contact
        </h2>
        <p className="text-sm sm:text-base text-[#252525] leading-relaxed mb-4">
          For privacy-related inquiries, please email: <strong>[PRIVACY EMAIL ADDRESS]</strong>
        </p>
      </section>

      {/* 17. Grievance Contact */}
      <section id="grievance-contact" className="scroll-mt-32">
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#4A3025] mb-3 pb-2 border-b border-[#DDD5C8]">
          17. Grievance Contact
        </h2>
        <div className="bg-[#F7F3EC] p-6 rounded-2xl border border-[#DDD5C8] space-y-2 text-sm text-[#252525]">
          <p><strong>Grievance Officer:</strong> [GRIEVANCE OFFICER NAME]</p>
          <p><strong>Designation:</strong> [GRIEVANCE OFFICER DESIGNATION]</p>
          <p><strong>Email:</strong> [GRIEVANCE EMAIL ADDRESS]</p>
          <p><strong>Phone:</strong> [OFFICIAL PHONE NUMBER]</p>
        </div>
      </section>
    </LegalPageLayout>
  );
}
