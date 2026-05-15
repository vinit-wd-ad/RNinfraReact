export default function About() {
    return (
        <section id="about" className="bg-white py-[5rem] px-5 md:px-16">
            <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[6rem] items-center">

                {/* <!-- Left: Text --> */}
                <div className="about-text">
                    {/* <!-- Section label --> */}
                    <div className="flex items-center gap-3 mb-4">
                        <span className="sec-label-line"></span>
                        <span className="text-[.65rem] tracking-[.35em] uppercase text-rblue font-semibold">About Us</span>
                    </div>
                    <h2 className="font-sans font-light leading-[1.08] text-navy mb-5"
                        style={{ fontSize:"clamp(2.4rem,4vw,3.6rem)" }}>
                        A Vision Built on<br /><em className="not-italic text-gold">Enduring Foundations</em>
                    </h2>
                    <div className="w-14 h-[2px] accent-rule mb-7"></div>

                    <div className="space-y-5 text-[1.02rem] leading-[1.95] text-rtxt2">
                        <p><strong className="text-navy font-semibold">Rising Nexus Infra</strong> is a forward-thinking
                            infrastructure development firm operating across India's most strategically significant growth
                            corridors, with an active international presence in Dubai's real estate market.</p>
                        <p>From transformative real estate in Dholera's greenfield smart city and the scenic highlands of
                            Himachal Pradesh, to a thriving Dubai property portfolio, and future ambitions in energy and
                            data center infrastructure — we build where it matters most.</p>
                        <p>Our leadership team's collective expertise spans decades across real estate, logistics, energy,
                            sales, and global consulting — giving Rising Nexus Infra a uniquely multi-dimensional edge. Over
                            the years, we have cultivated a quiet but far-reaching network of relationships across
                            industries, institutions, and geographies that few organisations of our size can claim.</p>
                        {/* <!-- Subtle co-investment note --> */}
                    </div>
                </div>

                {/* <!-- Right: Stats grid --> */}
                <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
                    <div
                        className="stat-card border border-rbdr bg-white p-4 md:p-8 relative overflow-hidden cursor-default">
                        <div className="stat-top absolute top-0 left-0 right-0 h-[3px]"></div>
                        <div className="font-sans font-light text-[2rem] md:text-[3rem] text-navy leading-[1] mb-2">3+</div>
                        <div className="text-[.65rem] tracking-[.2em] uppercase text-rmuted">Active Sectors</div>
                    </div>
                    <div
                        className="stat-card border border-rbdr bg-white p-4 md:p-8 relative overflow-hidden cursor-default">
                        <div className="stat-top absolute top-0 left-0 right-0 h-[3px]"></div>
                        <div className="font-sans font-light text-[2rem] md:text-[3rem] text-navy leading-[1] mb-2">2</div>
                        <div className="text-[.65rem] tracking-[.2em] uppercase text-rmuted">Markets — India &amp; Dubai</div>
                    </div>
                    <div
                        className="stat-card border border-rbdr bg-white p-4 md:p-8 relative overflow-hidden cursor-default">
                        <div className="stat-top absolute top-0 left-0 right-0 h-[3px]"></div>
                        <div className="font-sans font-light text-[2rem] md:text-[3rem] text-navy leading-[1] mb-2">10+</div>
                        <div className="text-[.65rem] tracking-[.2em] uppercase text-rmuted">Years in Real Estate</div>
                    </div>
                    <div
                        className="stat-card border border-rbdr bg-white p-4 md:p-8 relative overflow-hidden cursor-default">
                        <div className="stat-top absolute top-0 left-0 right-0 h-[3px]"></div>
                        <div className="font-sans font-light text-[2rem] md:text-[3rem] text-navy leading-[1] mb-2">60+</div>
                        <div className="text-[.65rem] tracking-[.2em] uppercase text-rmuted">Combined Years of Expertise</div>
                    </div>

                    <div className="col-span-2">
                        <p className="text-[.92rem] text-rmuted leading-[1.9] border-l-2 border-rbds pl-5 mt-4">
                            We are equally open to growing alongside the right people — whether through co-investment,
                            strategic partnership, or backing new ideas that align with our long-term vision. If you see an
                            opportunity where our combined strengths can create something exceptional, we would like to hear
                            about it.
                        </p>
                        {/* <!-- Address block --> */}
                        <div className="mt-8 pl-5 py-5 pr-5 border-l-[3px] border-gold bg-goldpal">
                            <p className="text-[.92rem] leading-[1.85] text-rtxt2 m-0">
                                <strong className="text-navy font-semibold block mb-1">Corporate Office</strong>
                                B-743, Tower B, IThum<br />
                                Sector 62, Noida, Uttar Pradesh, India
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}