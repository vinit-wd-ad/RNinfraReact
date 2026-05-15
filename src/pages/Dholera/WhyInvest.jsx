export default function WhyInvest() {
    return (
        <section id="why-invest" className="bg-white py-[3rem] lg:py-[6rem] px-7 md:px-16">
            <div className="max-w-[1240px] mx-auto grid grid-cols-1 xl:grid-cols-12 gap-[2rem] items-start">

                {/* <!-- Left: text --> */}
                <div className="xl:col-span-5">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="sec-label-line"></span>
                        <span className="text-[.65rem] tracking-[.35em] uppercase text-rblue font-semibold">The
                            Opportunity</span>
                    </div>
                    <h2 className="font-sans font-light leading-[1.08] text-navy mb-6"
                        style={{ fontSize:"clamp(2.3rem,4vw,3.5rem)" }}>
                        Why Invest in<br/><em className="not-italic text-gold">Dholera SIR?</em>
                    </h2>
                    <div className="w-14 h-[2px] accent-rule mb-9"></div>
                    <div className="space-y-5 text-[1.02rem] leading-[1.9] text-rtxt2">
                        <p>Dholera SIR is not a residential project layered on top of existing urban sprawl. It is a <strong
                            className="text-navy">designed-from-scratch city</strong> — roads, drainage, power grids,
                            utilities, and metro — all installed before the population arrives. That sequencing is precisely
                            what creates compounding investment value.</p>
                        <p>The key insight for investors: when infrastructure leads habitation, early land ownership
                            produces extraordinary returns as the city fills around it. Dholera is already well past
                            speculation — the Tata semiconductor fab, the operational expressway, the near-complete airport,
                            and over ₹2.5 lakh crore in confirmed commitments make this one of India's most de-risked
                            emerging market bets.</p>
                        {/* <!-- <p>Rising Nexus Infra's presence in this market since 2014 means our clients are guided by people
                            who have watched the city's evolution through every phase — not newcomers riding the current
                            wave.</p> --> */}
                    </div>
                </div>

                {/* <!-- Right: 4 pillar cards --> */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:col-span-7 gap-5">

                    <div className="pillar-card border border-rbdr bg-rs2 p-6 relative overflow-hidden">
                        <div className="pillar-bar"></div>
                        <div className="text-[1.6rem] mb-3">🏛️</div>
                        <h3 className="font-sans text-[1.28rem] text-navy font-normal leading-[1.25] mb-3">Government-Backed at
                            Every Level</h3>
                        <p className="text-[.87rem] leading-[1.8] text-rtxt2">Central and Gujarat state governments are active
                            investors in Dholera's infrastructure, with ₹2 lakh crore+ committed through the DMIC framework.
                            This is government-initiated development with private participation — not the other way around.
                        </p>
                    </div>

                    <div className="pillar-card border border-rbdr bg-rs2 p-6 relative overflow-hidden">
                        <div className="pillar-bar"></div>
                        <div className="text-[1.6rem] mb-3">📈</div>
                        <h3 className="font-sans text-[1.28rem] text-navy font-normal leading-[1.25] mb-3">Proven Land
                            Appreciation</h3>
                        <p className="text-[.87rem] leading-[1.8] text-rtxt2">Land prices have grown approximately ten-fold in a
                            decade. Early investors in the Phase 1 activation area have seen returns of 200–300% since 2019.
                            With the airport, semiconductor fab, and expressway all converging, the next appreciation cycle
                            is already underway.</p>
                    </div>

                    <div className="pillar-card border border-rbdr bg-rs2 p-6 relative overflow-hidden">
                        <div className="pillar-bar"></div>
                        <div className="text-[1.6rem] mb-3">🔌</div>
                        <h3 className="font-sans text-[1.28rem] text-navy font-normal leading-[1.25] mb-3">Self-Sufficient
                            Smart Infrastructure</h3>
                        <p className="text-[.87rem] leading-[1.8] text-rtxt2">Asia's largest solar park powers the city. Smart
                            grids, underground wiring, treated water supply, and green building mandates are built into the
                            development code. Dholera's infrastructure is a specification being built to contract — not a
                            promise.</p>
                    </div>

                    <div className="pillar-card border border-rbdr bg-rs2 p-6 relative overflow-hidden">
                        <div className="pillar-bar"></div>
                        <div className="text-[1.6rem] mb-3">🌐</div>
                        <h3 className="font-sans text-[1.28rem] text-navy font-normal leading-[1.25] mb-3">Global Industrial
                            Endorsement</h3>
                        <p className="text-[.87rem] leading-[1.8] text-rtxt2">Tata Electronics, Tokyo Electron, NextGen, Jabil,
                            Grew Energy, Mahindra Lifespaces, and Reliance are already committed. When global semiconductor
                            and technology giants anchor their India manufacturing strategy to one location, the signal to
                            investors is unambiguous.</p>
                    </div>

                </div>
            </div>
        </section>
    )
}