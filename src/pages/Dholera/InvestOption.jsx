import React from 'react';


export default function InvestOption() {
    return (
        <section id="invest" className="bg-rs2 py-[3rem] lg:py-[6rem] px-7 md:px-16">
            <div className="max-w-[1240px] mx-auto">

                {/* Section Heading */}
                <div className="flex items-center gap-3 mb-4">
                    <span className="sec-label-line"></span>
                    <span className="text-[.65rem] tracking-[.35em] uppercase text-rblue font-semibold">
                        Investment Options
                    </span>
                </div>
                <h2 className="font-sans font-light leading-[1.08] text-navy mb-12" style={{ fontSize: 'clamp(2.3rem, 4vw, 3.5rem)' }}>
                    Where to <em className="not-italic text-gold">Invest</em> in Dholera
                </h2>

                {/* Stats banner */}
                <div className="bg-gray-700 relative overflow-hidden mb-12 py-[2rem] md:py-[3.2rem] px-6 md:px-16">
                    <div
                        className="absolute inset-0 opacity-[.04] pointer-events-none"
                        style={{
                            backgroundImage: 'linear-gradient(rgba(255,255,255,.6) 1px,transparent 1px), linear-gradient(90deg,rgba(255,255,255,.6) 1px,transparent 1px)',
                            backgroundSize: '44px 44px'
                        }}
                    ></div>
                    <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 text-center">
                        <div className="border md:border-0 lg:py-2">
                            <div className="font-sans text-[2.2rem] md:text-[3.2rem] font-light text-goldlt leading-[1] mb-1">
                                920<span class="text-[1.6rem]">km²</span>
                            </div>
                            <div className="text-[.62rem] tracking-[.18em] uppercase text-white/45">Total SIR Area</div>
                        </div>
                        <div className="border md:border-0 lg:py-2">
                            <div className="font-sans text-[2.2rem] md:text-[3.2rem] font-light text-goldlt leading-[1] mb-1">
                                144–300
                            </div>
                            <div className="text-[.62rem] tracking-[.18em] uppercase text-white/45">Plot Sizes (sq.yd.)</div>
                        </div>
                        <div className="border md:border-0 lg:py-2">
                            <div className="font-sans text-[2.2rem] md:text-[3.2rem] font-light text-goldlt leading-[1] mb-1">
                                ₹15L+
                            </div>
                            <div className="text-[.62rem] tracking-[.18em] uppercase text-white/45">Entry Investment</div>
                        </div>
                        <div className="border md:border-0 lg:py-2">
                            <div className="font-sans text-[2.2rem] md:text-[3.2rem] font-light text-goldlt leading-[1] mb-1">
                                15–25<span class="text-[1.6rem]">%</span>
                            </div>
                            <div className="text-[.62rem] tracking-[.18em] uppercase text-white/45">Projected Annual Appreciation</div>
                        </div>
                    </div>
                </div>

                {/* 4 zone cards loop — 2×2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {investData.map((zone) => (
                        <div key={zone.id} className="zone-card border border-rbdr bg-white p-8">
                            <div className="flex items-start justify-between mb-5 gap-4">
                                <h3 className="font-sans text-[1.48rem] text-navy font-normal leading-[1.2]">
                                    {zone.title}
                                </h3>
                                <span className="flex-shrink-0 text-[.57rem] tracking-[.16em] uppercase text-rgreen border border-rgreen/30 bg-rgnpal px-[.7rem] py-[.3rem]">
                                    {zone.status}
                                </span>
                            </div>
                            <p className="text-[.93rem] leading-[1.85] text-rtxt2 mb-5">
                                {zone.description}
                            </p>

                            {/* Dynamic Grid for Details */}
                            <div className="grid grid-cols-2 gap-2">
                                {zone.details.map((detail, index) => (
                                    <div key={index} className="bg-rs2 px-3 py-[.72rem]">
                                        <div className="text-[.5rem] tracking-[.2em] uppercase text-rmuted mb-1">
                                            {detail.label}
                                        </div>
                                        <div className="text-[.85rem] text-navy font-medium">
                                            {detail.value}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

// 2. Data Variable at the Bottom
const investData = [
    {
        id: "residential-plots",
        title: "Residential Plots",
        status: "Active",
        description: "NA-converted residential plots within the activation zone — the most liquid and consistently appreciated asset class in Dholera. Early investors here have seen 200–300% returns since 2019. With the expressway operational and the airport approaching commercial launch, the next demand wave has already begun.",
        details: [
            { label: "Plot Size", value: "144 – 300 sq.yd." },
            { label: "Type", value: "NA Residential" },
            { label: "Zone", value: "Activation Area" },
            { label: "Entry Price", value: "₹72 Lakhs" }
        ]
    },
    {
        id: "villas-township",
        title: "Villas & Township Communities",
        status: "Active",
        description: "Integrated township developments — plots and villas within gated, master-planned communities with built-in amenities. With 275 serviced apartments for the semiconductor workforce already occupied and 1,500 total units underway, the residential city within Dholera is taking real shape.",
        details: [
            { label: "Offering", value: "Plots & Villas" },
            { label: "Type", value: "Gated • Township" },
            { label: "Amenities", value: "Master Planned" },
            { label: "Price", value: "₹ 40 Lack" }
        ]
    },
    {
        id: "commercial-mixed",
        title: "Commercial & Mixed-Use",
        status: "Active",
        description: "Commercial plots within and adjacent to the activation zone — business parks, service retail, hospitality, and mixed-use developments catering to the growing industrial workforce and investor community. Demand is actively rising with the acceleration of the semiconductor and solar ecosystem.",
        details: [
            { label: "Use", value: "Commercial • Mixed" },
            { label: "Investor Type", value: "HNI • Institutional" },
            { label: "Zone", value: "Business District • Near Ariport" },
            { label: "Size", value: "178 – 2462 sq.yd." },
            { label: "Price", value: "From ₹ 50 lack" }
        ]
    },
    {
        id: "industrial-logistics",
        title: "Industrial & Logistics Parcels",
        status: "Active",
        description: "Industrial land within Zone A — the preferred zone for manufacturing, warehousing, and logistics operations. With the Tata fab under construction, INOX Air Products building its gas hub, and Grew Energy erecting solar component manufacturing, the industrial zone is no longer speculative. It is operational.",
        details: [
            { label: "Use", value: "Industrial • Warehouse" },
            { label: "Access", value: "DFC • Expressway" },
            { label: "Power", value: "Solar Grid 1,200 MW" },
            { label: "Price", value: "Request for price" },
            { label: "Size", value: "10,000 sq. yd." }
        ]
    }
];