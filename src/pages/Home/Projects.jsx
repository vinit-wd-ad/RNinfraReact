export default function Projects() {
    return (
        <>
            <section id="projects" className="bg-yellow-50 py-[5rem] px-5 md:px-16">
                <div className="max-w-[1240px] mx-auto">

                    {/* <!-- Header --> */}
                    <div className="mb-8">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="sec-label-line"></span>
                            <span className="text-[.65rem] tracking-[.35em] uppercase text-rblue font-semibold">Portfolio</span>
                        </div>
                        <h2 className="font-sans font-light leading-[1.08] text-navy" style={{ fontSize:"clamp(2.4rem,4vw,3.6rem)" }}>
                            Featured <em className="not-italic text-goldlt">Projects</em>
                        </h2>
                    </div>

                    {/* <!-- Projects grid --> */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-7">

                        {/* <!-- Dubai — WIDE --> */}
                        <div className="col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-2 proj-card bg-white border border-rbdr cursor-pointer"
                        // @click="window.location='dubai'"
                        >
                            <div className="relative overflow-hidden min-h-[240px]"
                                style={{ background:"url('public/images/projects/dubai-image.jpg') no-repeat center / cover" }}>
                                {/* <!-- <img src="assets/images/projects/dubai-image.jpg" alt="" className="w-100 p-0 m-0"> --> */}
                                <div className="geo-grid"></div>
                                <span
                                    className="absolute top-4 left-4 z-10 text-[.57rem] tracking-[.18em] uppercase bg-white/85 text-navy border border-rbdr px-3 py-[5px]">Real
                                    Estate • Dubai, UAE</span>
                                <span
                                    className="absolute bottom-4 right-4 z-10 text-[.57rem] tracking-[.15em] uppercase bg-white/70 text-rtxt2 px-2 py-1">Dubai,
                                    UAE</span>
                            </div>
                            <div className="p-9 flex flex-col justify-center">
                                <h3 className="font-sans text-[1.65rem] font-normal text-navy mb-3">Dubai Real Estate</h3>
                                <p className="text-[.94rem] leading-[1.85] text-rtxt2 mb-4 hidden lg:block">Through our exclusive
                                    Dubai partnership
                                    with HOD Real Estate, we offer direct access to all of the UAE's most prominent developers.
                                    A gateway for Indian and global investors seeking to participate in one of the world's most
                                    dynamic property markets — from luxury off-plan to prime commercial.</p>
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="w-[7px] h-[7px] rounded-full bg-rmid"
                                        style={{ boxShadow:"0 0 7px rgba(37,99,235,.4)" }}></span>
                                    <span className="text-[.63rem] tracking-[.15em] uppercase text-rmid">Active • Partnership Office
                                        in Dubai</span>
                                </div>
                                <div className="flex items-center gap-2 py-[.7rem] px-3 bg-goldpal border border-goldlt/60">
                                    <span className="text-[.72rem] text-rtxt2">🤝 In association with <strong className="text-gold">HOD
                                        Real Estate, Dubai</strong> — connected to every leading UAE developer</span>
                                </div>
                                <button
                                    className="mt-4 flex items-center gap-2 text-[.6rem] tracking-[.18em] uppercase text-rblue bg-transparent border-none p-0 cursor-pointer font-sans hover:gap-4 transition-all duration-200">View
                                    Project Details →</button>
                            </div>
                        </div>

                        {/* <!-- Dholera --> */}
                        <div className="col-span-1 proj-card bg-white border border-rbdr overflow-hidden cursor-pointer"
                        // @click="window.location='dholera'"
                        >
                            <div className="relative h-[200px] overflow-hidden"
                                style={{ background:"url('public/images/projects/dholera-smart-city.jpg') no-repeat center / cover" }}>
                                <div className="geo-grid"></div>
                                <span
                                    className="absolute top-4 left-4 z-10 text-[.57rem] tracking-[.18em] uppercase bg-white/85 text-navy border border-rbdr px-3 py-[5px]">Real
                                    Estate • India</span>
                                <span
                                    className="absolute bottom-4 right-4 z-10 text-[.57rem] tracking-[.15em] uppercase bg-white/70 text-rtxt2 px-2 py-1">Gujarat,
                                    India</span>
                            </div>
                            <div className="p-8">
                                <h3 className="font-sans text-[1.6rem] font-normal text-navy mb-3">Dholera Smart City</h3>
                                <p className="text-[.93rem] leading-[1.85] text-rtxt2 mb-4 hidden lg:block">A landmark development
                                    within India's
                                    first greenfield smart city and Special Investment Region, along the Delhi-Mumbai Industrial
                                    Corridor.</p>
                                <div className="flex items-center gap-2">
                                    <span className="w-[7px] h-[7px] rounded-full bg-rgreen status-pulse-dot"></span>
                                    <span className="text-[.63rem] tracking-[.15em] uppercase text-rgreen">Active Development</span>
                                </div>
                                <button
                                    className="mt-3 flex items-center gap-2 text-[.6rem] tracking-[.18em] uppercase text-rblue bg-transparent border-none p-0 cursor-pointer font-sans hover:gap-4 transition-all duration-200">View
                                    Project Details →</button>
                            </div>
                        </div>

                        {/* <!-- Barog --> */}
                        <div className="col-span-1 proj-card bg-white border border-rbdr overflow-hidden cursor-pointer"
                        // @click="window.location='harison-barog'"
                        >
                            <div className="relative h-[200px] overflow-hidden"
                                style={{ background:"url('public/images/projects/barog.jpg') no-repeat center / cover" }}>
                                <div className="geo-grid"></div>
                                <span
                                    className="absolute top-4 left-4 z-10 text-[.57rem] tracking-[.18em] uppercase bg-white/85 text-navy border border-rbdr px-3 py-[5px]">Real
                                    Estate • India</span>
                                <span
                                    className="absolute bottom-4 right-4 z-10 text-[.57rem] tracking-[.15em] uppercase bg-white/70 text-rtxt2 px-2 py-1">Himachal
                                    Pradesh, India</span>
                            </div>
                            <div className="p-8">
                                <h3 className="font-sans text-[1.6rem] font-normal text-navy mb-3">Barog, Near Solan</h3>
                                <p className="text-[.93rem] leading-[1.85] text-rtxt2 mb-4 hidden lg:block">Premium development in
                                    the serene hills
                                    of Barog, near Solan — combining Himalayan natural beauty with modern infrastructure for
                                    residential and hospitality use.</p>
                                <div className="flex items-center gap-2">
                                    <span className="w-[7px] h-[7px] rounded-full bg-rgreen status-pulse-dot"></span>
                                    <span className="text-[.63rem] tracking-[.15em] uppercase text-rgreen">Active Development</span>
                                </div>
                                <button
                                    className="mt-3 flex items-center gap-2 text-[.6rem] tracking-[.18em] uppercase text-rblue bg-transparent border-none p-0 cursor-pointer font-sans hover:gap-4 transition-all duration-200">View
                                    Project Details →</button>
                            </div>
                        </div>

                        {/* <!-- Energy & Data — WIDE --> */}
                        <div className="col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-2 proj-card bg-white border border-rbdr cursor-pointer"
                        // @click="openModal('future')"
                        >
                            <div className="relative overflow-hidden min-h-[200px]"
                                style={{ background:"url('public/images/projects/energy-data.jpg') no-repeat center / cover" }}>
                                <div className="geo-grid"></div>
                                <span
                                    className="absolute top-4 left-4 z-10 text-[.57rem] tracking-[.18em] uppercase bg-white/85 text-navy border border-rbdr px-3 py-[5px]">Energy
                                    • Data Centers</span>
                                <span
                                    className="absolute bottom-4 right-4 z-10 text-[.57rem] tracking-[.15em] uppercase bg-white/70 text-rtxt2 px-2 py-1">Pan
                                    India</span>
                            </div>
                            <div className="p-9 flex flex-col justify-center">
                                <h3 className="font-sans text-[1.65rem] font-normal text-navy mb-3">Energy &amp; Data
                                    Infrastructure</h3>
                                <p className="text-[.94rem] leading-[1.85] text-rtxt2 mb-4 hidden lg:block">Our upcoming pipeline in
                                    renewable
                                    energy and data center development — the next frontier of Rising Nexus Infra's expansion,
                                    anchored by world-className expertise, powerful industry networks, and strategic site selection
                                    across India.</p>
                                <div className="flex items-center gap-2">
                                    <span className="w-[7px] h-[7px] rounded-full bg-ramber"
                                        style={{ boxShadow:"0 0 7px rgba(217,119,6,.4)" }}></span>
                                    <span className="text-[.63rem] tracking-[.15em] uppercase text-ramber">Coming Soon — Register
                                        Interest</span>
                                </div>
                                <button
                                    className="mt-3 flex items-center gap-2 text-[.6rem] tracking-[.18em] uppercase text-rblue bg-transparent border-none p-0 cursor-pointer font-sans hover:gap-4 transition-all duration-200">View
                                    Project Details →</button>
                            </div>
                        </div >

                    </div >
                </div >
            </section >
        </>
    )
}