export default function Infrastructure() {
    return (
        <section className="bg-white py-[3rem] lg:py-[6rem] px-7 md:px-16">
            <div className="max-w-[1240px] mx-auto">

                <div className="flex items-center gap-3 mb-4">
                    <span className="sec-label-line"></span>
                    <span className="text-[.65rem] tracking-[.35em] uppercase text-rblue font-semibold">What's Being
                        Built</span>
                </div>
                <h2 className="font-sans font-light leading-[1.08] text-navy mb-4" style={{ fontSize: "clamp(2.3rem,4vw,3.5rem)" }}>
                    World-className <em className="not-italic text-gold">Infrastructure</em>
                </h2>
                <p className="text-[1rem] text-rtxt2 leading-[1.9] max-w-[90%] mb-12">Every major connectivity and utility
                    system is either operational, in final commissioning, or under active construction. Dholera is not
                    waiting for infrastructure — it is being defined by it.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center">

                    {/* <!-- Airport — spans full width --> */}
                    <div className="col-span-1 md:col-span-2 lg:col-span-3 grid grid-cols-1 md:grid-cols-4 bg-gray-700 border border-transparent overflow-hidden">
                        {/* <!-- Left panel --> */}
                        <div className="flex flex-col items-center justify-center text-center px-8 py-8"
                            style={{ background: "rgba(176,136,64,.15)", borderRight: "1px solid rgba(255,255,255,.08)" }}>
                            <div className="text-[2.8rem] mb-3">✈️</div>
                            <span
                                className="inline-block text-[.57rem] tracking-[.22em] uppercase text-goldlt border border-gold/40 px-[.7rem] py-[.28rem] mb-3">Phase
                                1 Complete</span>
                            <div className="font-sans text-[3rem] font-light text-goldlt leading-[1]">2026</div>
                            <div className="text-[.6rem] tracking-[.15em] uppercase text-white/45 mt-1">Commercial Ops Target
                            </div>
                        </div>
                        {/* <!-- Right panel --> */}
                        <div className="p-5 md:p-10 md:col-span-3">
                            <h3 className="font-sans text-[1.75rem] font-light text-white leading-[1.2] mb-4">Dholera
                                International Airport</h3>
                            <p className="text-[.93rem] leading-[1.88] text-white/[.6] mb-6 ">Phase 1 construction of Dholera's
                                international airport reached completion in December 2025. The airport — built near Navagam
                                village, 80 km from Ahmedabad on a 1,426-hectare site — has been declared a customs port
                                since April 2025. Calibration flights and systems trials are underway, with commercial
                                passenger and cargo services targeted for 2026. The 3.2 km runway is capable of handling
                                aircraft as large as the Airbus A380. Designed ultimately for 50 million passengers per year
                                across phases, it is the logistical anchor for the Tata semiconductor fab and the wider
                                industrial corridor.</p>
                            <div className="flex flex-wrap gap-3">
                                <div className="bg-white/[.06] border border-white/10 px-3 py-2">
                                    <div className="text-[.5rem] tracking-[.2em] uppercase text-white/40 mb-1">Site Area</div>
                                    <div className="text-[.83rem] text-white/85 font-medium">1,426 Hectares</div>
                                </div>
                                <div className="bg-white/[.06] border border-white/10 px-3 py-2">
                                    <div className="text-[.5rem] tracking-[.2em] uppercase text-white/40 mb-1">Runway</div>
                                    <div className="text-[.83rem] text-white/85 font-medium">3.2 km • A380 Capable</div>
                                </div>
                                <div className="bg-white/[.06] border border-white/10 px-3 py-2">
                                    <div className="text-[.5rem] tracking-[.2em] uppercase text-white/40 mb-1">Phase 1 Capacity
                                    </div>
                                    <div className="text-[.83rem] text-white/85 font-medium">1.2M Passengers / yr</div>
                                </div>
                                <div className="bg-white/[.06] border border-white/10 px-3 py-2">
                                    <div className="text-[.5rem] tracking-[.2em] uppercase text-white/40 mb-1">Customs Port
                                    </div>
                                    <div className="text-[.83rem] text-white/85 font-medium">Declared April 2025</div>
                                </div>
                                <div className="bg-white/[.06] border border-white/10 px-3 py-2">
                                    <div className="text-[.5rem] tracking-[.2em] uppercase text-white/40 mb-1">Distance from SIR
                                    </div>
                                    <div className="text-[.83rem] text-white/85 font-medium">~20 km</div>
                                </div>
                                <div className="bg-white/[.06] border border-white/10 px-3 py-2">
                                    <div className="text-[.5rem] tracking-[.2em] uppercase text-white/40 mb-1">From Ahmedabad
                                    </div>
                                    <div className="text-[.83rem] text-white/85 font-medium">~80 km • 45 min</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {infraData.map((item) => (
                        <div key={item.id} className="infra-card border border-rbdr bg-rs2 p-7">
                            <div className="text-[1.85rem] mb-4">{item.icon}</div>
                            <h3 className="font-sans text-[1.28rem] text-navy font-normal leading-[1.25] mb-3">
                                {item.title}
                            </h3>
                            <p className="text-[.87rem] leading-[1.82] text-rtxt2">
                                {item.description}
                            </p>
                            <span className={`inline-block mt-4 text-[.57rem] tracking-[.2em] uppercase border px-[.7rem] py-[.28rem] ${item.statusClass}`}>
                                {item.status}
                            </span>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}

const infraData = [
    {
        id: "expressway",
        icon: "🛣️",
        title: "Ahmedabad–Dholera Expressway",
        description: "A 109 km access-controlled expressway running directly from Ahmedabad to Dholera SIR — 98% complete as of 2025 and functionally operational across key stretches. Travel time drops to under 45 minutes, fundamentally changing the city's market access.",
        status: "Operational",
        statusClass: "text-rgreen border-rgreen/25 bg-rgnpal"
    },
    {
        id: "solar-park",
        icon: "☀️",
        title: "Asia's Largest Solar Park",
        description: "A 5,000 MW solar installation — Asia's largest — being developed within the SIR by Tata Power. Phase I of 1,000 MW has been commissioned, with 1,200 MW total already live as of 2025. Powers the industrial zones with clean, cost-effective energy that global manufacturers increasingly demand.",
        status: "1,200 MW Live",
        statusClass: "text-rgreen border-rgreen/25 bg-rgnpal"
    },
    {
        id: "metro",
        icon: "🚇",
        title: "Metro Rail — MRTS",
        description: "A Mass Rapid Transit System designed within the SIR's central road-of-way, connecting the activation zone to residential, industrial, and airport precincts. Forms a critical part of Dholera's zero-dependency-on-cars smart mobility vision.",
        status: "Planned • In ROW",
        statusClass: "text-ramber border-ramber/25 bg-rambpal"
    },
    {
        id: "dfc",
        icon: "🚂",
        title: "Dedicated Freight Corridor Link",
        description: "The Bhimnath–Dholera freight railway line connects the city directly to India's Western Dedicated Freight Corridor — providing uninterrupted rail access to major ports and manufacturing hubs essential for just-in-time semiconductor logistics.",
        status: "DFC Connected",
        statusClass: "text-rblue border-rblue/22 bg-rlt"
    },
    {
        id: "abcd",
        icon: "🏭",
        title: "Smart Utilities & ABCD Building",
        description: "Dholera's administrative and civic core — the ABCD Building — is operational. Smart grids, 24/7 treated water supply, underground wiring, and an intelligent command centre monitoring water, power, waste, and traffic in real time.",
        status: "Operational",
        statusClass: "text-rgreen border-rgreen/25 bg-rgnpal"
    }
];