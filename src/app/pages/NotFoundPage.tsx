import { Link } from "react-router";
import { ArrowLeft, Compass, Car, Phone, HelpCircle } from "lucide-react";
import SEO from "../components/SEO";

export default function NotFoundPage() {
  return (
    <div className="pt-28 pb-20 min-h-screen bg-[#FFFDF7] text-[#4B3832] flex items-center justify-center px-4">
      <SEO
        title="404 — Page Not Found | Coffee Cabs"
        description="The requested page could not be found. Explore 100 Karnataka destinations, outstation tour packages, and luxury fleet with Coffee Cabs."
        canonicalUrl="https://gagangowdap.github.io/coffee-cabs/404"
        robots="noindex, follow"
      />
      <div className="max-w-xl mx-auto text-center bg-[#FFFDF7] p-8 sm:p-12 rounded-3xl border border-[#DCC7AA] shadow-md space-y-6">
        <div className="w-16 h-16 rounded-full bg-[#F5E6CA] border border-[#DCC7AA] flex items-center justify-center mx-auto text-[#6F4E37]">
          <HelpCircle size={32} />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#6F4E37] bg-[#F5E6CA] px-3.5 py-1 rounded-full border border-[#DCC7AA]">
            ERROR 404
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#4B3832]">
            Page Not Found
          </h1>
          <p className="text-sm text-[#6F4E37] max-w-md mx-auto leading-relaxed">
            The page or route you are looking for does not exist or has been moved. Explore our Karnataka travel guide or fleet options below.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
          <Link
            to="/"
            className="flex items-center justify-center gap-2 bg-[#6F4E37] text-[#FFFDF7] font-extrabold text-xs px-5 py-3 rounded-xl hover:bg-[#4B3832] transition-all"
          >
            <ArrowLeft size={16} />
            <span>RETURN TO HOME</span>
          </Link>

          <Link
            to="/travel"
            className="flex items-center justify-center gap-2 bg-[#F5E6CA] text-[#4B3832] font-bold text-xs px-5 py-3 rounded-xl border border-[#DCC7AA] hover:border-[#6F4E37] transition-all"
          >
            <Compass size={16} className="text-[#6F4E37]" />
            <span>EXPLORE KARNATAKA</span>
          </Link>

          <Link
            to="/fleet"
            className="flex items-center justify-center gap-2 bg-[#F5E6CA] text-[#4B3832] font-bold text-xs px-5 py-3 rounded-xl border border-[#DCC7AA] hover:border-[#6F4E37] transition-all"
          >
            <Car size={16} className="text-[#6F4E37]" />
            <span>VIEW FLEET</span>
          </Link>

          <Link
            to="/contact"
            className="flex items-center justify-center gap-2 bg-[#F5E6CA] text-[#4B3832] font-bold text-xs px-5 py-3 rounded-xl border border-[#DCC7AA] hover:border-[#6F4E37] transition-all"
          >
            <Phone size={16} className="text-[#6F4E37]" />
            <span>CONTACT & ENQUIRE</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
