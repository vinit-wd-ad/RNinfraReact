import React from 'react';


export default function Advantage() {
    return (
        <section className="bg-rs2 py-[3rem] lg:py-[6rem] px-7 md:px-16">
            <div className="max-w-[1240px] mx-auto">

                {/* Section Label */}
                <div className="flex items-center gap-3 mb-4">
                    <span className="sec-label-line"></span>
                    <span className="text-[.65rem] tracking-[.35em] uppercase text-rblue font-semibold">
                        Our Edge
                    </span>
                </div>

                {/* Section Heading */}
                <h2 className="font-sans font-light leading-[1.08] text-navy mb-4" style={{ fontSize: 'clamp(2.3rem, 4vw, 3.5rem)' }}>
                    The Rising Nexus <em className="not-italic text-gold">Advantage</em>
                </h2>

                {/* Description Paragraph */}
                <p className="text-[1rem] text-rtxt2 leading-[1.9] max-w-[660px] mb-12">
                    Choosing Rising Nexus Infra as your Dholera partner means accessing a decade of on-ground intelligence —
                    not just the general case for the city, but the specific knowledge of zones, developers, and timing
                    that separates a good investment from a great one.
                </p>

                {/* 2x2 Grid for Advantage Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {advantageData.map((item) => (
                        <div
                            key={item.id}
                            className="adv-light bg-white border border-rbdr p-9 relative overflow-hidden"
                        >
                            {/* Radial Glow Background Effect */}
                            <div
                                className="absolute top-[-40px] right-[-40px] w-[160px] h-[160px] rounded-full pointer-events-none"
                                style={{ background: item.glowColor }}
                            ></div>

                            {/* Card Content */}
                            <div className="text-[1.8rem] mb-4 relative z-10">{item.icon}</div>
                            <h3 className={`font-sans text-[1.45rem] font-light leading-[1.2] mb-3 relative z-10 ${item.titleClass || ''}`}>
                                {item.title}
                            </h3>
                            <p className={`text-[.93rem] leading-[1.85] relative z-10 ${item.descClass || ''}`}>
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

// 2. Data Variable at the Bottom of the File
const advantageData = [
    {
        id: "active-since-2014",
        icon: "📍",
        title: "In Dholera Since 2014",
        description: "Our real estate leadership has been active in India's investment corridors since 2014 — long before Dholera became a headline. That history means we understand which zones to target, which developers to trust, and which plots carry the best risk-adjusted appreciation profile for our clients.",
        glowColor: "radial-gradient(circle,rgba(176,136,64,.14) 0%,transparent 70%)"
    },
    {
        id: "authority-relationships",
        icon: "🤝",
        title: "Developer & Authority Relationships",
        description: "We engage directly with project developers, land authorities, and planning bodies in Dholera — not as a reseller, but as a trusted transaction partner. This gives our clients access to pre-launch inventory, accurate documentation review, and the kind of deal access that does not come from a brochure.",
        glowColor: "radial-gradient(circle,rgba(37,99,235,.07) 0%,transparent 70%)",
        titleClass: "text-navy",
        descClass: "text-rtxt2"
    },
    {
        id: "international-access",
        icon: "🌐",
        title: "International Investor Access",
        description: "Through our network spanning India, Dubai, and beyond — including high-net-worth individuals and investment communities across markets — we bring Dholera's opportunity to a global investor base. NRIs, UAE-based investors, and international buyers are increasingly active in Dholera, and we are their most direct route in.",
        glowColor: "radial-gradient(circle,rgba(37,99,235,.07) 0%,transparent 70%)",
        titleClass: "text-navy",
        descClass: "text-rtxt2"
    },
    {
        id: "full-cycle-advisory",
        icon: "🧠",
        title: "Full-Cycle Advisory",
        description: "From the first conversation about suitability, through documentation, site visits, legal checks, investment structuring, and post-purchase support — our team is present at every stage. We treat each client's capital as if it were our own, because our reputation is built entirely on outcomes, not transactions.",
        glowColor: "radial-gradient(circle,rgba(176,136,64,.14) 0%,transparent 70%)"
    }
];