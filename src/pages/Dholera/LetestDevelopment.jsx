const developments = [
    {
        date: "December 2025",
        title: "Airport Phase 1 Construction Complete",
        description:
            "Dholera International Airport's Phase 1 construction reached completion in December 2025 as confirmed by the Ministry of Civil Aviation. The project — spanning 1,426 hectares near Navagam village — has moved into its licensing, calibration, and operational trial phase. Commercial passenger and cargo services are targeted to begin in 2026.",
        tag: "Aviation",
    },

    {
        date: "2025",
        title:
            "Tata Electronics Breaks Ground on ₹91,000 Cr Semiconductor Fab",
        description:
            "In one of India's most significant industrial announcements in decades, Tata Electronics Private Limited commenced groundbreaking on its semiconductor fabrication facility at Dholera SIR. Prime Minister Narendra Modi laid the foundation stone virtually. The facility positions Dholera as India's first chip manufacturing hub. Trial production is expected from 2026.",
        tag: "Semiconductor • Manufacturing",
    },

    {
        date: "2025",
        title: "Customs Port Status & Global Investment Wave",
        description:
            "Dholera Airport was officially declared a customs port in April 2025, enabling international cargo operations ahead of commercial launch. Simultaneously, Tokyo Electron opened a dedicated Dholera office, NextGen committed ₹8,800 crore for advanced chip manufacturing, Jabil committed ₹1,000 crore for silicon photonics, and INOX Air Products began construction of a ₹500 crore specialty gas hub.",
        tag: "Global Investments",
    },

    {
        date: "2025",
        title: "Expressway Operational & Solar at 1,200 MW",
        description:
            "The Ahmedabad–Dholera Expressway — a 109 km access-controlled corridor — reached near-complete status, cutting road time from Ahmedabad to under 45 minutes. India's largest solar park within Dholera SIR simultaneously crossed 1,200 MW of commissioned capacity, with its 5,000 MW target powered by Tata Power.",
        tag: "Connectivity • Energy",
    },

    {
        date: "2025",
        title:
            "1,500 Residential Apartments Built for Industrial Workforce",
        description:
            "To house the workforce arriving for the Tata semiconductor fab and surrounding industrial units, the state government has built 1,500 serviced apartments within Dholera SIR — with 275 already completed and occupied. This marks the transition from a development zone into a genuinely inhabited smart city.",
        tag: "Residential • Smart City",
    },

    {
        date: "Ongoing",
        title: "Land Values Up ~10× in a Decade",
        description:
            "According to developers and market reports, land prices across Dholera SIR have risen approximately ten-fold over the past decade, with early Phase 1 investors recording returns of 200–300% since 2019. Analysts project 15–25% annual appreciation continuing through the infrastructure commissioning phase into 2027.",
        tag: "Market Intelligence",
    },
];

export default function LetestDevelopment() {
    return (
        <section className="bg-gray-800 py-[3rem] lg:py-[6rem] px-7 md:px-16 relative overflow-hidden">

            {/* bg grid */}
            <div
                className="absolute inset-0 opacity-[.035] pointer-events-none"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,.6) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.6) 1px,transparent 1px)",
                    backgroundSize: "58px 58px",
                }}
            ></div>

            <div className="max-w-[1240px] mx-auto relative z-10">

                {/* Header */}
                <div className="text-center mb-6 md:mb-12">

                    <div className="flex items-center justify-center gap-4 mb-4">
                        <span className="block w-7 h-px bg-gold"></span>

                        <span className="text-[.63rem] tracking-[.34em] uppercase text-goldlt font-semibold">
                            Dholera in 2025–26
                        </span>

                        <span className="block w-7 h-px bg-gold"></span>
                    </div>

                    <h2
                        className="font-sans font-light leading-[1.1] text-white"
                        style={{
                            fontSize: "clamp(2rem,3.5vw,3rem)",
                        }}
                    >
                        What's Happening{" "}
                        <em className="not-italic text-goldlt">
                            Right Now
                        </em>
                    </h2>
                </div>

                {/* Cards */}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

                    {developments.map((item, index) => (

                        <div
                            key={index}
                            className="news-card bg-white/[.05] border border-white/10 p-7"
                        >

                            <div className="text-[.58rem] tracking-[.2em] uppercase text-goldlt mb-3">
                                {item.date}
                            </div>

                            <h3 className="font-sans text-[1.4rem] font-light text-white leading-[1.3] mb-3">
                                {item.title}
                            </h3>

                            <p className="text-[.89rem] leading-[1.82] text-white/[.7]">
                                {item.description}
                            </p>

                            <span className="inline-block mt-4 text-[.55rem] tracking-[.2em] uppercase text-goldlt border border-gold/40 px-[.7rem] py-[.28rem]">
                                {item.tag}
                            </span>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}