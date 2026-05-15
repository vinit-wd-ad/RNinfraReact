import { useState } from "react"

export default function Leadership() {
    const [show, setShow] = useState(false);
    return (
        <section id="team" className="bg-rs2 py-[5rem] px-5 md:px-16">
            <div className="max-w-[1240px] mx-auto">

                {/* <!-- Header --> */}
                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="sec-label-line"></span>
                        <span className="text-[.65rem] tracking-[.35em] uppercase text-rblue font-semibold">Our People</span>
                    </div>
                    <h2 className="font-sans font-light leading-[1.08] text-navy" style={{ fontSize: "clamp(2.4rem,4vw,3.6rem)" }}>
                        Leadership &amp; <em className="not-italic text-gold">Expertise</em>
                    </h2>
                    <div className="w-14 h-[2px] accent-rule mt-6"></div>
                </div>

                {/* <!-- Unified narrative block --> */}
                <div className="bg-white border border-rbdr border-t-[3px] border-t-navy">

                    {/* <!-- Narrative text --> */}
                    <div
                        className="p-5 md:p-8 md:px-10 text-justify border-b border-rbdr space-y-3 text-[1rem] leading-[1.95] text-rtxt2">
                        <p>
                            Rising Nexus Infra is led by a founding team whose combined professional experience spans well
                            over six decades — across real estate, logistics, sales, energy, and global consulting. Rather
                            than operate as specialists in silos, our leadership functions as a unified force: each domain
                            of expertise informing and amplifying the others, creating a firm that is genuinely capable
                            across the full spectrum of infrastructure investment and development.
                        </p>
                        <p>
                            In real estate, our active presence in India's growth corridors dates to 2014, with an
                            additional five-plus years of direct market experience in Dubai — including working
                            relationships with
                            every significant developer in the UAE. In logistics and operations, our leadership brings
                            more
                            than two decades of understanding how physical networks are built, how they move, and how
                            they
                            create lasting asset value. In sales and business development, twenty-plus years of
                            high-level
                            commercial engagement has resulted in an unusually broad reach across industries,
                            institutions,
                            and decision-makers. And in energy and global strategy, our consulting expertise — earned
                            advising large corporations on cross-border transactions and high-value mergers and
                            acquisitions
                            — anchors our ambitions in the sectors that will define the next generation of
                            infrastructure.
                        </p>
                        <div
                            className={`space-y-6 overflow-hidden transition-all duration-700 ease-in-out ${show
                                ? "opacity-100 mt-6"
                                : "max-h-0 opacity-0"
                                }`}
                        >
                            <p>
                                What unifies this team, beyond credentials, is a network that has been carefully built
                                over many years across multiple industries and geographies. Our relationships extend to
                                senior
                                business leaders, institutional decision-makers, sovereign-level stakeholders, and a wider
                                community of high-net-worth individuals who trust us with their interests across markets.
                                This
                                network is not incidental to what we do — it is integral to how we identify opportunity,
                                structure
                                deals, and deliver outcomes that most firms simply cannot.
                            </p>

                            <p className="text-rmuted text-[.93rem] leading-[1.9] italic">
                                Collectively, the team is equipped not just to develop infrastructure assets — but to
                                connect
                                people, capital, and opportunity in ways that create compounding value over time.
                            </p>
                        </div>


                        <div className="flex items-center gap-6 pt-4 border-t border-gray-50">
                            <button
                                onClick={() => setShow(!show)}
                                className="flex items-center gap-2 text-[.7rem] tracking-[.2em] uppercase text-rblue font-bold bg-transparent border-none cursor-pointer group">
                                <span>
                                    {(show) ? 'Read Less' : 'Read More'}
                                </span>
                                <span
                                    className={`text-[1.2rem] transition-transform duration-300 ${show ? "rotate-45" : ""
                                        }`}
                                >
                                    +
                                </span>
                            </button>


                        </div>

                    </div>

                    {/* <!-- Domain pillars strip --> */}
                    <div className="grid grid-cols-2 md:grid-cols-4">
                        <div className="team-pillar flex items-start gap-3 p-4 md:-6 border-r border-rbdr cursor-default">
                            <span className="text-[1.4rem] mt-[2px] flex-shrink-0">🏙️</span>
                            <div>
                                <div className="text-[.78rem] font-semibold text-navy leading-[1.4]">Real Estate</div>
                                <div className="text-[.62rem] text-rmuted mt-[3px]">India &amp; Dubai • 10+ Yrs</div>
                            </div>
                        </div>
                        <div className="team-pillar flex items-start gap-3 p-4 md:-6 border-r border-rbdr cursor-default">
                            <span className="text-[1.4rem] mt-[2px] flex-shrink-0">🚚</span>
                            <div>
                                <div className="text-[.78rem] font-semibold text-navy leading-[1.4]">Logistics &amp; Ops</div>
                                <div className="text-[.62rem] text-rmuted mt-[3px]">20+ Years</div>
                            </div>
                        </div>
                        <div className="team-pillar flex items-start gap-3 p-4 md:-6 border-r border-rbdr cursor-default">
                            <span className="text-[1.4rem] mt-[2px] flex-shrink-0">📈</span>
                            <div>
                                <div className="text-[.78rem] font-semibold text-navy leading-[1.4]">Sales &amp; Growth</div>
                                <div className="text-[.62rem] text-rmuted mt-[3px]">20+ Years</div>
                            </div>
                        </div>
                        <div className="team-pillar flex items-start gap-3 p-4 md:-6 cursor-default">
                            <span className="text-[1.4rem] mt-[2px] flex-shrink-0">⚡</span>
                            <div>
                                <div className="text-[.78rem] font-semibold text-navy leading-[1.4]">Energy &amp; Global
                                    Strategy</div>
                                <div className="text-[.62rem] text-rmuted mt-[3px]">Billion-Dollar M&amp;A</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}