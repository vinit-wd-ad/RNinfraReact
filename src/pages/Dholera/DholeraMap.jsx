import { useState } from "react";

export default function DholeraMap() {

  const [mapSrc, setMapSrc] = useState(
    "https://maps.google.com/maps?q=Dholera+Special+Investment+Region+Gujarat+India&output=embed&z=12"
  );

  const [showToast, setShowToast] = useState(false);

  const [activeIndex, setActiveIndex] = useState(null);

  const locations = [
    {
      title: "ABCD Building — Admin Core",
      subtitle: "Activation Zone headquarters",
      color: "#1A4DB3",
      q: "ABCD Building Dholera SIR Gujarat India",
      zoom: 14,
      type: "location",
    },

    {
      title: "Dholera International Airport",
      subtitle: "Near Navagam • Phase 1 complete",
      color: "#16A34A",
      q: "Dholera International Airport Navagam Gujarat India",
      zoom: 13,
      type: "location",
    },

    {
      title: "Tata Semiconductor Fab",
      subtitle: "₹91,000 Cr • India's first chip fab",
      color: "#F59E0B",
      q: "Tata Electronics Semiconductor Fab Dholera Gujarat India",
      zoom: 14,
      type: "location",
    },

    {
      title: "Solar Park (5,000 MW)",
      subtitle: "Asia's largest • 1,200 MW live",
      color: "#D97706",
      q: "Dholera Solar Park Gujarat India",
      zoom: 13,
      type: "location",
    },

    {
      title: "Residential & Plot Zones",
      subtitle: "TP4B2, TP5B • Active",
      color: "#7C3AED",
      q: "TP Scheme 4B2 Dholera SIR Residential Plots Gujarat",
      zoom: 14,
      type: "location",
    },

    {
      title: "Industrial Zone A",
      subtitle: "Manufacturing & logistics hub",
      color: "#DB2777",
      q: "Industrial Zone A Dholera SIR Gujarat India",
      zoom: 13,
      type: "location",
    },

    {
      title: "Ahmedabad City",
      subtitle: "~45 min via Expressway",
      color: "#6B7280",
      type: "route",
    },
  ];

  const handleLocationClick = (item, index) => {

    setActiveIndex(index);

    if (item.type === "route") {

      setShowToast(true);

      setMapSrc(
        "https://maps.google.com/maps?saddr=Dholera+SIR+Gujarat+India&daddr=Ahmedabad+Gujarat+India&output=embed"
      );

    } else {

      setShowToast(false);

      const q = encodeURIComponent(item.q);

      setMapSrc(
        `https://maps.google.com/maps?q=${q}&output=embed&z=${item.zoom}`
      );
    }
  };

  return (
    <section
      id="map"
      className="bg-rs2 py-[3rem] lg:py-[6rem] px-7 md:px-16"
    >
      <div className="max-w-[1240px] mx-auto">

        {/* Heading */}

        <div className="flex items-center gap-3 mb-4">
          <span className="sec-label-line"></span>

          <span className="text-[.65rem] tracking-[.35em] uppercase text-rblue font-semibold">
            Explore the Region
          </span>
        </div>

        <h2
          className="font-sans font-light leading-[1.08] text-navy mb-4"
          style={{
            fontSize: "clamp(2.3rem,4vw,3.5rem)",
          }}
        >
          Dholera SIR —{" "}
          <em className="not-italic text-gold">
            Interactive Map
          </em>
        </h2>

        <p className="text-[1rem] text-rtxt2 leading-[1.9] max-w-[90%] mb-7">
          Explore the key zones, infrastructure sites, and investment
          locations within and around Dholera Special Investment Region.
          Click any marker for details, or use the legend to fly to a
          specific location.
        </p>

        {/* Layout */}

        <div className="map-layout grid grid-cols-1 lg:grid-cols-4 gap-6">

          {/* Sidebar */}

          <div className="bg-white border border-rbdr grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1">

            <div className="col-span-1 md:col-span-2 lg:col-span-1 text-[.6rem] tracking-[.24em] uppercase text-rmuted px-4 py-3 border-b border-rbdr font-semibold">
              Map Layers
            </div>

            {locations.map((item, index) => (

              <div
                key={index}
                onClick={() => handleLocationClick(item, index)}
                className={`flex items-start gap-3 px-4 py-[.82rem] border-b border-rbdr cursor-pointer transition-colors duration-200 hover:bg-gray-50 ${
                  activeIndex === index
                    ? "bg-[rgba(26,77,179,0.06)] border-l-[3px] border-l-rblue"
                    : ""
                }`}
              >

                <span
                  className="w-3 h-3 rounded-full flex-shrink-0 mt-1"
                  style={{ background: item.color }}
                ></span>

                <div>
                  <div className="text-[.82rem] text-navy font-medium leading-[1.3]">
                    {item.title}
                  </div>

                  <div className="text-[.7rem] text-rmuted mt-[2px]">
                    {item.subtitle}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Map Area */}

          <div className="lg:col-span-3 flex flex-col">

            {/* Toast */}

            {showToast && (
              <div className="relative mb-3 px-5 py-4 bg-navy border border-yellow-500 text-white">

                <button
                  onClick={() => setShowToast(false)}
                  className="absolute top-2 right-3 text-white/40 hover:text-white text-lg leading-none"
                >
                  ✕
                </button>

                <div className="text-[.6rem] tracking-[.2em] uppercase text-yellow-400 mb-1">
                  Dholera SIR → Ahmedabad
                </div>

                <div className="font-serif text-[1.2rem] font-normal mb-1">
                  Ahmedabad City
                </div>

                <div className="text-[.9rem] text-white/70 mb-3">
                  Road Distance:{" "}
                  <strong className="text-yellow-400 font-serif text-[1.2rem]">
                    ~80 km
                  </strong>
                  &nbsp;·&nbsp; ~45 min via Expressway
                </div>

                <a
                  href="https://maps.google.com/maps?saddr=Dholera+SIR+Gujarat+India&daddr=Ahmedabad+Gujarat+India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[.7rem] tracking-[.15em] uppercase font-bold px-4 py-2 text-navy"
                  style={{
                    background:
                      "linear-gradient(135deg,#B08840,#E8C97A)",
                  }}
                >
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>

                  View Route on Google Maps
                </a>
              </div>
            )}

            {/* Map */}

            <iframe
              src={mapSrc}
              className="w-full border-0 block"
              style={{
                minHeight: "480px",
                flex: 1,
              }}
              allowFullScreen
              loading="lazy"
              title="Explore the key zones"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            {/* Bottom Note */}

            <div className="mt-3 px-4 py-3 bg-white border border-rbdr border-l-[3px] border-l-rblue text-[.72rem] text-rtxt2 leading-[1.7]">
              📍 Markers are approximate zone indicators based on publicly
              available planning data. Exact plot coordinates are provided
              during site consultation. Click any legend item to highlight
              on map.
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}