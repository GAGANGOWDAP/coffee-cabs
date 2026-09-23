import { useState, useRef, useEffect } from "react";
import { Link } from "react-router";
import { Search, MapPin, Package as PackageIcon, Route as RouteIcon, X, ArrowRight } from "lucide-react";
import { DESTINATIONS } from "../data/destinations";
import { PACKAGES } from "../data/packages";
import { ROUTES } from "../data/routes";

interface SearchResultItem {
  type: "destination" | "package" | "route";
  id: string;
  title: string;
  subtitle: string;
  url: string;
}

export default function TravelSearch({ placeholder = "Search 100+ destinations, tour packages or cab routes..." }: { placeholder?: string }) {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const trimmed = query.trim().toLowerCase();

  const results: SearchResultItem[] = [];

  if (trimmed.length >= 2) {
    // Search Destinations
    DESTINATIONS.forEach((d) => {
      if (
        d.name.toLowerCase().includes(trimmed) ||
        d.district.toLowerCase().includes(trimmed) ||
        d.region.toLowerCase().includes(trimmed) ||
        d.categories.some((c) => c.toLowerCase().includes(trimmed))
      ) {
        results.push({
          type: "destination",
          id: d.id,
          title: d.name,
          subtitle: `${d.district}, Karnataka • ${d.approximateDistanceFromBengaluru}`,
          url: `/travel/destinations/${d.slug}`
        });
      }
    });

    // Search Packages
    PACKAGES.forEach((p) => {
      if (
        p.title.toLowerCase().includes(trimmed) ||
        p.category.toLowerCase().includes(trimmed) ||
        p.route.toLowerCase().includes(trimmed)
      ) {
        results.push({
          type: "package",
          id: p.id,
          title: p.title,
          subtitle: `Package • ${p.duration} • ${p.category}`,
          url: `/travel/packages/${p.slug}`
        });
      }
    });

    // Search Routes
    ROUTES.forEach((r) => {
      if (
        r.title.toLowerCase().includes(trimmed) ||
        r.to.toLowerCase().includes(trimmed) ||
        r.from.toLowerCase().includes(trimmed)
      ) {
        results.push({
          type: "route",
          id: r.id,
          title: r.title,
          subtitle: `Taxi Route • ${r.approximateDistance} • ${r.approximateDriveTime}`,
          url: `/routes/${r.slug}`
        });
      }
    });
  }

  const limitedResults = results.slice(0, 10);

  return (
    <div ref={searchRef} className="relative w-full max-w-2xl mx-auto z-40">
      {/* Search Bar Input */}
      <div className="relative flex items-center">
        <Search className="absolute left-4 text-[#C6A15B] shrink-0" size={20} />
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          placeholder={placeholder}
          className="w-full bg-[#132333] border border-[#AEB7C2]/25 focus:border-[#C6A15B] text-[#F4F1E8] placeholder-[#AEB7C2]/60 rounded-2xl pl-12 pr-10 py-3.5 text-sm md:text-base outline-none transition-all shadow-xl"
        />
        {query && (
          <button
            onClick={() => {
              setQuery("");
              setIsOpen(false);
            }}
            className="absolute right-3.5 text-[#AEB7C2] hover:text-[#F4F1E8] p-1"
          >
            <X size={18} />
          </button>
        )}
      </div>

      {/* Search Results Dropdown */}
      {isOpen && trimmed.length >= 2 && (
        <div className="absolute left-0 right-0 top-full mt-2 bg-[#132333] border border-[#C6A15B]/30 rounded-2xl shadow-2xl overflow-hidden max-h-96 overflow-y-auto z-50 divide-y divide-[#AEB7C2]/10 backdrop-blur-xl">
          {limitedResults.length > 0 ? (
            limitedResults.map((item) => (
              <Link
                key={`${item.type}-${item.id}`}
                to={item.url}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between p-4 hover:bg-[#08111C]/80 transition-colors group"
              >
                <div className="flex items-start gap-3 min-w-0 pr-2">
                  <div className="p-2 rounded-xl bg-[#08111C] border border-[#AEB7C2]/15 text-[#C6A15B] shrink-0 mt-0.5">
                    {item.type === "destination" && <MapPin size={16} />}
                    {item.type === "package" && <PackageIcon size={16} />}
                    {item.type === "route" && <RouteIcon size={16} />}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-bold text-[#F4F1E8] group-hover:text-[#C6A15B] transition-colors truncate">
                        {item.title}
                      </h4>
                      <span
                        className={`text-[10px] uppercase tracking-wider font-extrabold px-2 py-0.5 rounded ${
                          item.type === "destination"
                            ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                            : item.type === "package"
                            ? "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                            : "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                        }`}
                      >
                        {item.type}
                      </span>
                    </div>
                    <p className="text-xs text-[#AEB7C2] truncate mt-0.5">{item.subtitle}</p>
                  </div>
                </div>

                <ArrowRight size={16} className="text-[#AEB7C2] group-hover:text-[#C6A15B] group-hover:translate-x-1 transition-all shrink-0" />
              </Link>
            ))
          ) : (
            <div className="p-6 text-center text-[#AEB7C2] text-sm">
              No matching destinations, packages or routes found for &quot;{query}&quot;.
            </div>
          )}
        </div>
      )}
    </div>
  );
}
