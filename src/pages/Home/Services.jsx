export default function Services() {
    return (
        <section id="services" className="bg-white py-[5rem] px-5 md:px-16">
            <div className="max-w-[1240px] mx-auto">

                {/* <!-- Header --> */}
                <div className="text-center mb-8 md:mb-16">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <span className="sec-label-line"></span>
                        <span className="text-[.65rem] tracking-[.35em] uppercase text-rblue font-semibold">What We Do</span>
                        <span className="sec-label-line"></span>
                    </div>
                    <h2 className="font-sans font-light leading-[1.08] text-navy" style={{ fontSize:"clamp(2.4rem,4vw,3.6rem)" }}>
                        Our Core <em className="not-italic text-gold">Sectors</em>
                    </h2>
                </div>

                {/* <!-- 3-col grid --> */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-[2px] bg-rbdr">

                    {/* <!-- Card 01 --> */}
                    <div
                        className="svc-card bg-white p-5 md:p-10 relative overflow-hidden hover:bg-[#fdfdfd85] transition-colors duration-300">
                        <div className="svc-bar absolute bottom-0 left-0 right-0 h-[2px]"></div>
                        <div
                            className="absolute top-5 right-7 font-serif text-[4.5rem] font-light leading-[1] text-navy/[.05] select-none">
                            01</div>
                        <div className="text-[1.9rem] mb-5">🏛️</div>
                        <h3 className="font-sans text-[1.80rem] font-normal text-navy leading-[1.2] mb-4">Real Estate
                            Development</h3>
                        <p className="text-[.95rem] leading-[1.9] text-rtxt2">Strategic land and property development across
                            India's fastest-growing investment corridors and Dubai's world-className real estate market. From
                            Dholera's greenfield smart city to Himachal Pradesh's hills — and across Dubai's skyline — we
                            identify and develop premium assets positioned at the forefront of the next growth wave.</p>
                        <span
                            className="inline-block mt-6 text-[.6rem] tracking-[.22em] uppercase text-rblue border border-rblue/25 bg-rlt px-[.85rem] py-[.34rem]">India
                            • Dubai • Residential • Commercial</span>
                    </div>

                    {/* <!-- Card 02 --> */}
                    <div
                        className="svc-card bg-white p-5 md:p-10 relative overflow-hidden hover:bg-[#fdfdfd85] transition-colors duration-300">
                        <div className="svc-bar absolute bottom-0 left-0 right-0 h-[2px]"></div>
                        <div
                            className="absolute top-5 right-7 font-serif text-[4.5rem] font-light leading-[1] text-navy/[.05] select-none">
                            02</div>
                        <div className="text-[1.9rem] mb-5">⚡</div>
                        <h3 className="font-sans text-[1.80rem] font-normal text-navy leading-[1.2] mb-4">Energy Sector</h3>
                        <p className="text-[.95rem] leading-[1.9] text-rtxt2">Building India's energy future. Our energy
                            vertical — anchored by world-className consulting and deal-making experience — focuses on
                            sustainable power infrastructure, renewable integration, and energy-efficient assets aligned
                            with India's net-zero commitments and surging power demand.</p>
                        <span
                            className="inline-block mt-6 text-[.6rem] tracking-[.22em] uppercase text-rblue border border-rblue/25 bg-rlt px-[.85rem] py-[.34rem]">Renewable
                            • Sustainable • Future-ready</span>
                    </div>

                    {/* <!-- Card 03 --> */}
                    <div
                        className="svc-card bg-white p-5 md:p-10 relative overflow-hidden hover:bg-[#fdfdfd85] transition-colors duration-300">
                        <div className="svc-bar absolute bottom-0 left-0 right-0 h-[2px]"></div>
                        <div
                            className="absolute top-5 right-7 font-serif text-[4.5rem] font-light leading-[1] text-navy/[.05] select-none">
                            03</div>
                        <div className="text-[1.9rem] mb-5">🖥️</div>
                        <h3 className="font-sans text-[1.80rem] font-normal text-navy leading-[1.2] mb-4">Data Centers</h3>
                        <p className="text-[.95rem] leading-[1.9] text-rtxt2">Engineering the digital backbone of tomorrow. As
                            demand for cloud computing, AI infrastructure, and data sovereignty surges across India, Rising
                            Nexus Infra is positioning itself at the heart of this revolution — with scalable,
                            energy-efficient, and high-availability data center facilities.</p>
                        <span
                            className="inline-block mt-6 text-[.6rem] tracking-[.22em] uppercase text-rblue border border-rblue/25 bg-rlt px-[.85rem] py-[.34rem]">Cloud
                            • Colocation • AI-Ready</span>
                    </div>

                </div>
            </div>
        </section>
    )
}