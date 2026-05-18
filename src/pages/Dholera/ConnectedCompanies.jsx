import React from 'react';

export default function ConnectedCompanies() {
    return (
        <section className="bg-white py-[3rem] lg:py-[6rem] px-7 md:px-16">
            <div className="max-w-[1240px] mx-auto">

                {/* Section Label */}
                <div className="flex items-center gap-3 mb-4">
                    <span className="sec-label-line"></span>
                    <span className="text-[.65rem] tracking-[.35em] uppercase text-rblue font-semibold">
                        Market Validation
                    </span>
                </div>

                {/* Section Heading */}
                <h2 className="font-sans font-light leading-[1.08] text-navy mb-6" style={{ fontSize: 'clamp(2.3rem, 4vw, 3.5rem)' }}>
                    Who Has Already <em className="not-italic text-gold">Committed</em>
                </h2>

                {/* Description Paragraph */}
                <p className="text-[1rem] text-rtxt2 leading-[1.9] max-w-[680px] mb-12">
                    The roster of organisations that have moved capital into Dholera SIR is perhaps the clearest indicator
                    of its credibility. When India's largest conglomerate, global semiconductor equipment leaders, and
                    renewable energy giants choose the same location — it removes ambiguity for every other investor who follows.
                </p>

                {/* 3-column company cards grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-9">
                    {companiesData.map((company) => (
                        <div key={company.id} className="co-card border border-rbdr bg-rs2 p-6">
                            <div className="text-[1.7rem] mb-2">{company.icon}</div>
                            <div className="font-sans text-[1.22rem] text-navy font-normal mb-1">
                                {company.name}
                            </div>
                            <div className="text-[.6rem] tracking-[.18em] uppercase text-rmuted mb-3">
                                {company.category}
                            </div>
                            <p className="text-[.85rem] leading-[1.78] text-rtxt2">
                                {company.description}
                            </p>
                            <div className="text-[.72rem] font-semibold text-rblue mt-3">
                                {company.commitment}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pipeline chips section */}
                <div className="text-[.6rem] tracking-[.28em] uppercase text-rmuted mb-3 font-semibold">
                    Also In Active Discussions or Exploration
                </div>

                <div className="flex flex-wrap gap-[.7rem]">
                    {pipelineData.map((item) => (
                        <span
                            key={item.id}
                            className="text-[.65rem] tracking-[.1em] uppercase bg-rlt border border-rmid/20 text-rmid px-4 py-[.44rem]"
                        >
                            {item.text}
                        </span>
                    ))}
                </div>

            </div>
        </section>
    );
}

// 2. Data Variables at the Bottom of the File
const companiesData = [
    {
        id: "tata-electronics",
        icon: "🔬",
        name: "Tata Electronics",
        category: "Semiconductor Manufacturing",
        description: "Groundbreaking with PM Modi. India's first semiconductor fab — advanced chip production lines and tech labs for domestic and global markets. Trial production expected 2026.",
        commitment: "₹91,000 Crore committed"
    },
    {
        id: "tata-power",
        icon: "⚡",
        name: "Tata Power",
        category: "Renewable Energy",
        description: "Developing Asia's largest solar park at 5,000 MW within Dholera SIR. With 1,200 MW already live, Tata Power's presence makes the city's clean energy credentials among the most credible of any industrial zone in Asia.",
        commitment: "5,000 MW Solar Park"
    },
    {
        id: "inox-air",
        icon: "💨",
        name: "INOX Air Products",
        category: "Industrial Gases • Semiconductor Support",
        description: "Construction underway on a ₹500 crore electronic specialty gas hub producing ultra-high purity nitrogen, oxygen, argon, and hydrogen — essential supply-chain infrastructure for chip fabrication.",
        commitment: "₹500 Crore • Under Construction"
    },
    {
        id: "nextgen-semi",
        icon: "💡",
        name: "NextGen Semiconductor",
        category: "Advanced Electronics",
        description: "A major commitment to build an advanced semiconductor and optoelectronics manufacturing plant — producing high-end components for domestic consumption and export, deepening Dholera's chip-making ecosystem.",
        commitment: "₹8,800 Crore committed"
    },
    {
        id: "grew-energy",
        icon: "🔆",
        name: "Grew Energy",
        category: "Solar Components Manufacturing",
        description: "Building a large-scale solar panels and module manufacturing unit — contributing to India's push for domestic solar equipment production and reducing dependence on imported renewable energy components.",
        commitment: "₹3,800 Crore committed"
    },
    {
        id: "tokyo-electron",
        icon: "🌏",
        name: "Tokyo Electron",
        category: "Semiconductor Equipment • Japan",
        description: "The Japanese semiconductor equipment giant opened a dedicated Dholera office in 2025. Their physical presence signals confidence at the highest levels of the global chip supply chain.",
        commitment: "Dedicated Dholera Office • 2025"
    },
    {
        id: "jabil-india",
        icon: "💻",
        name: "Jabil India",
        category: "Silicon Photonics",
        description: "A global manufacturing services company establishing a silicon photonics manufacturing unit — introducing cutting-edge optical semiconductor technology and expanding India's advanced electronics capability.",
        commitment: "₹1,000 Crore committed"
    },
    {
        id: "l-and-t",
        icon: "🔩",
        name: "L&T (Larsen & Toubro)",
        category: "Engineering • EPC • Infrastructure",
        description: "India's premier engineering and construction firm is the execution backbone for Dholera's civic infrastructure — town planning, sewage treatment, and utility systems. Their involvement is a quality assurance signal for the entire development.",
        commitment: "Civic Infrastructure EPC"
    },
    {
        id: "mahindra-lifespaces",
        icon: "🏘️",
        name: "Mahindra Lifespaces",
        category: "Urban Development • Real Estate",
        description: "Developing core city zones with a focus on sustainable, integrated urban planning. Mahindra Lifespaces brings institutional-grade residential and commercial development — raising the quality bar for the overall city ecosystem.",
        commitment: "Core Zone Development"
    }
];

const pipelineData = [
    { id: "pipe-1", text: "Reliance Industries — Data Centres & Green Energy" },
    { id: "pipe-2", text: "Adani Group — Logistics Parks & Infrastructure" },
    { id: "pipe-3", text: "NEC Corporation (Japan) — Smart City ICT" },
    { id: "pipe-4", text: "Wipro — IT Development Centre" },
    { id: "pipe-5", text: "Tech Mahindra — Technology Campus" },
    { id: "pipe-6", text: "ReNew Power — Renewable Manufacturing" },
    { id: "pipe-7", text: "Vedanta Group — Industrial Operations" },
    { id: "pipe-8", text: "Tsingshan Group — Steel & EV Battery Plant" }
];