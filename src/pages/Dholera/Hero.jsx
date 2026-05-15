export default function Hero() {
    return (
        <div class="min-h-[94vh] flex items-center relative overflow-hidden bg-white pt-[72px]">

            {/* <!-- Background --> */}
            <div class="absolute inset-0 pointer-events-none"
                style={{ background:"linear-gradient(135deg,#EAF0FF 0%,#fff 52%,#F5F8EE 100%)" }}></div>
            <div class="absolute inset-0 grid-overlay opacity-[.042] pointer-events-none"></div>
            <div class="absolute top-0 right-0 w-[620px] h-[620px] rounded-full pointer-events-none"
                style={{ background:"radial-gradient(circle at 70% 30%,rgba(26,77,179,.07) 0%,transparent 65%)" }}></div>
            <div class="absolute bottom-[-60px] left-[-60px] w-[480px] h-[480px] rounded-full pointer-events-none"
                style={{ background:"radial-gradient(circle,rgba(176,136,64,.06) 0%,transparent 65%)" }}></div>
            {/* <!-- <div class="absolute bottom-[0px] left-[0px] w-[100%] h-[100%] rounded-none pointer-events-none"
                style={{ background:"url('assets/images/projects/dholera-smart-city.jpg') no-repeat center / cover" }}></div> --> */}

            <div class="relative z-10 min-w-[100%] bg-white/75">
                <div
                    class="relative z-10 max-w-[1240px] mx-auto px-7 md:px-16 w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center py-16">

                    {/* <!-- Left --> */}
                    <div style={{ animation:"fadeUpIn .95s ease both" }}>
                        {/* <!-- Breadcrumb --> */}
                        <div class="text-[.6rem] tracking-[.3em] uppercase text-rmuted mb-6">
                            <span>Rising Nexus Infra</span>
                            <span class="text-gold">/</span>
                            <span>Portfolio</span>
                            <span class="text-gold">/</span>
                            <span class="text-gold">Dholera</span>
                        </div>

                        <h1 class="font-sans font-light leading-[1.04] text-navy mb-2"
                            style={{ fontSize:"clamp(2.9rem,6vw,5.4rem)" }}> Dholera<br/><em class="not-italic text-gold">Smart
                                City</em>
                        </h1>
                        <p class="font-sans text-[1.35rem] text-gold font-light tracking-[.04em] mb-5">India's First
                            Greenfield
                            Smart City</p>
                        <p class="text-[1.02rem] leading-[1.9] text-rtxt2 mb-7">At the intersection of government ambition
                            and
                            global capital stands Dholera — a 920 km² master-planned city rising from the ground up in
                            Gujarat.
                            As part of the Delhi-Mumbai Industrial Corridor, this is not a redevelopment. It is India
                            building
                            an entirely new city, and the investment window is now.</p>

                        {/* <!-- Chips --> */}
                        <div class="flex flex-wrap gap-[.65rem] mb-8">
                            <span
                                class="text-[.6rem] tracking-[.15em] uppercase bg-rgnpal border border-rgreen/30 text-rgreen px-[.82rem] py-[.35rem]">●
                                Active Development</span>
                            <span
                                class="text-[.6rem] tracking-[.15em] uppercase bg-rlt border border-rmid/25 text-rmid px-[.82rem] py-[.35rem]">★
                                Airport Phase 1 — 2026</span>
                            <span
                                class="text-[.6rem] tracking-[.15em] uppercase border border-rbdr text-rtxt2 px-[.82rem] py-[.35rem]">Gujarat,
                                India</span>
                            <span
                                class="text-[.6rem] tracking-[.15em] uppercase border border-rbdr text-rtxt2 px-[.82rem] py-[.35rem]">DMIC
                                Corridor</span>
                            <span
                                class="text-[.6rem] tracking-[.15em] uppercase border border-rbdr text-rtxt2 px-[.82rem] py-[.35rem]">Plots
                                &amp; Villas Available</span>
                        </div>

                        {/* <!-- CTAs --> */}
                        <div class="flex gap-1 flex-wrap">
                            <a href="#contact"
                                class="text-[.7rem] tracking-[.17em] uppercase bg-gold hover:bg-white hover:bg-gold hover:text-navy hover:border-gold border-[1.5px] text-white px-4 md:px-9 py-4 no-underline font-medium hover:bg-rblue transition-colors duration-200">Book
                                a Consultation</a>
                            <a href="#map"
                                class="text-[.7rem] tracking-[.17em] uppercase border-[1.5px] border-gold text-navy px-4 md:px-9 py-4 no-underline hover:bg-gold hover:text-white transition-all duration-200">Explore
                                the Map</a>
                        </div>
                    </div>

                    {/* <!-- Right --> */}
                    <div style={{ animation:"fadeUpIn 1.1s ease both" }}>
                        {/* <!-- Stats 2×2 --> */}
                        <div class="grid grid-cols-2 gap-4 mb-4">
                            <div class="stat-card border border-rbdr bg-white p-6 relative overflow-hidden cursor-default">
                                <div class="stat-top absolute top-0 left-0 right-0 h-[3px]"></div>
                                <div class="font-sans font-light text-[2.4rem] text-navy leading-[1] mb-1">920<span
                                    class="text-[1.3rem]">km²</span></div>
                                <div class="text-[.62rem] tracking-[.18em] uppercase text-rmuted">Total Planned Area</div>
                            </div>
                            <div class="stat-card border border-rbdr bg-white p-6 relative overflow-hidden cursor-default">
                                <div class="stat-top absolute top-0 left-0 right-0 h-[3px]"></div>
                                <div class="font-sans font-light text-[2.4rem] text-navy leading-[1] mb-1">22.5<span
                                    class="text-[1.3rem]">km²</span></div>
                                <div class="text-[.62rem] tracking-[.18em] uppercase text-rmuted">Activation Zone Active
                                </div>
                            </div>
                            <div class="stat-card border border-rbdr bg-white p-6 relative overflow-hidden cursor-default">
                                <div class="stat-top absolute top-0 left-0 right-0 h-[3px]"></div>
                                <div class="font-sans font-light text-[2.4rem] text-navy leading-[1] mb-1">₹2.5L<span
                                    class="text-[1.3rem]">Cr+</span></div>
                                <div class="text-[.62rem] tracking-[.18em] uppercase text-rmuted">Committed Investments
                                </div>
                            </div>
                            <div class="stat-card border border-rbdr bg-white p-6 relative overflow-hidden cursor-default">
                                <div class="stat-top absolute top-0 left-0 right-0 h-[3px]"></div>
                                <div class="font-sans font-light text-[2.4rem] text-navy leading-[1] mb-1">10×</div>
                                <div class="text-[.62rem] tracking-[.18em] uppercase text-rmuted">Land Value Growth (10 Yrs)
                                </div>
                            </div>
                        </div>

                        {/* <!-- Live bar --> */}
                        <div class="bg-rgnpal border border-rgreen/22 px-5 py-3 flex items-center gap-3 mb-3">
                            <span class="w-[9px] h-[9px] rounded-full bg-rgreen status-pulse-dot flex-shrink-0"></span>
                            <span class="text-[.7rem] tracking-[.1em] uppercase text-rgreen font-medium">Infrastructure
                                Actively
                                Underway</span>
                        </div>

                        {/* <!-- Breaking news badge --> */}
                        <div class="bg-rlt border border-rmid/20 px-4 py-3 flex items-start gap-3">
                            <span class="w-[7px] h-[7px] rounded-full bg-rmid flex-shrink-0 mt-[.42rem]"></span>
                            <p class="text-[.78rem] text-rtxt2 leading-[1.55] m-0"><strong
                                class="text-navy">Latest:</strong>
                                Tata Electronics broke ground on India's first semiconductor fab at Dholera — a ₹91,000
                                crore
                                facility with PM Modi laying the foundation stone.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Scroll indicator --> */}
            <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
                <div class="w-px h-12 scroll-pulse" style={{ background:"linear-gradient(to bottom,#0D1B3E,transparent)" }}></div>
                <span class="text-[.55rem] tracking-[.2em] uppercase text-rmuted">Scroll</span>
            </div>
        </div>
    )
}