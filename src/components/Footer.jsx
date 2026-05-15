import Logo from "../assets/logos/logo1.png"
import {
    FaWhatsapp,
    FaInstagram,
    FaFacebook,
    FaLinkedin,
    FaYoutube,
} from "react-icons/fa";

export default function Footer() {
    return (
        <>
            <footer className="bg-gray-900 py-[3rem] px-5 md:px-16 text-white/90">
                <div className="max-w-[1240px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

                    {/* <!-- Column 1: Logo & Copyright --> */}
                    <div className="flex flex-col gap-3">
                        <a href="./#home" className="flex flex-col no-underline">
                            <img src={Logo} className="w-14 md:w-20" alt="RisingNegusInfra Logo" />
                        </a>
                        <p className="text-[.9rem] text-white/50 leading-relaxed">
                            Building the future with excellence and innovation in infrastructure.
                        </p>
                        <span className="text-[.8rem] text-white/35 tracking-[.1em] mt-2">
                            © 2026 Rising Nexus Infra. <br /> All rights reserved.
                        </span>
                    </div>

                    {/* <!-- Column 2: Quick Links --> */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-[.8rem] font-bold tracking-[.15em] uppercase text-white">Company</h4>
                        <nav className="flex flex-col gap-3">
                            <a href="./#about" aria-label="Jump to About section on home page" className="text-[.7rem] tracking-[.1em] uppercase text-white/45 hover:text-white/90 transition-colors no-underline">About Us</a>
                            <a href="./#team" aria-label="Jump to Leadership section on home page" className="text-[.7rem] tracking-[.1em] uppercase text-white/45 hover:text-white/90 transition-colors no-underline">Leadership</a>
                            <a href="./#services" aria-label="Jump to Service section on home page" className="text-[.7rem] tracking-[.1em] uppercase text-white/45 hover:text-white/90 transition-colors no-underline">Services</a>
                            <a href="./#projects" aria-label="Jump to Project section on home page" className="text-[.7rem] tracking-[.1em] uppercase text-white/45 hover:text-white/90 transition-colors no-underline">Projects</a>
                            <a href="./#contact" aria-label="Jump to Contact section on home page" className="text-[.7rem] tracking-[.1em] uppercase text-white/45 hover:text-white/90 transition-colors no-underline">Contact</a>
                        </nav>
                    </div>

                    {/* <!-- Column 3: Project Types --> */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-[.8rem] font-bold tracking-[.15em] uppercase text-white">Our Projects</h4>
                        <ul className="flex flex-col gap-3 list-none p-0">
                            <li>
                                <a href="dholera" className="text-[.7rem] tracking-[.1em] uppercase text-white/45 hover:text-white/90 transition-colors no-underline">Dholera Smart City</a>
                            </li>
                            <li>
                                <a href="harison-barog" className="text-[.7rem] tracking-[.1em] uppercase text-white/45 hover:text-white/90 transition-colors no-underline">Barog, Himachal Pradesh</a>
                            </li>
                            <li>
                                <a href="dubai" className="text-[.7rem] tracking-[.1em] uppercase text-white/45 hover:text-white/90 transition-colors no-underline">Dubai Real Estate</a>
                            </li>
                            <li>
                                <a href="energy-data" className="text-[.7rem] tracking-[.1em] uppercase text-white/45 hover:text-white/90 transition-colors no-underline">Energy &amp; Data (Upcoming)</a>
                            </li>
                            <li>
                                <a href="./#projects" aria-label="Jump to Project section on home page" className="text-[.7rem] tracking-[.1em] uppercase text-white/45 hover:text-white/90 transition-colors no-underline">All Projects</a>
                            </li>
                        </ul>
                    </div>

                    {/* <!-- Column 4: Contact & Socials --> */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-[.8rem] font-bold tracking-[.15em] uppercase text-white">Get In Touch</h4>
                        <div className="flex gap-3">
                            <span className="text-[1.1rem] flex-shrink-0">&#128231;</span>
                            <div>
                                <span className="block text-[.52rem] tracking-[.2em] uppercase text-white/90 mb-[2px]">Email Id</span>
                                <span className="text-[.9rem] text-white/70"><a href="mailto:sales@risingnexusinfra.com">sales@risingnexusinfra.com</a></span>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <span className="text-[1.1rem] flex-shrink-0">&#128222;</span>
                            <div>
                                <span className="block text-[.52rem] tracking-[.2em] uppercase text-white/90 mb-[2px]">Contact No.</span>
                                <span className="text-[.9rem] text-white/70"><a href="tel:+919910587006">+91 9910587006</a></span>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            {/* <!-- Social Icons (Placeholder using SVGs) --> */}
                            <a href="https://www.facebook.com/risingnexusinfra.official" aria-label="Follow Us on Facebook" target="_blank" className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center hover:bg-white/70 transition-all">
                                <span className="w-full text-center text-[1.5rem]">
                                    <FaFacebook className="w-full text-blue-500" />
                                </span>
                            </a>
                            <a href="https://www.instagram.com/risingnexusinfra.official/" aria-label="Follow Us on Instagram" className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center hover:bg-white/70 transition-all">
                                <span className="w-full text-center text-[1.5rem]">
                                    <FaInstagram className="w-full text-pink-500" />
                                </span>
                            </a>
                            <a href="https://www.linkedin.com/in/vast-tyagi/" aria-label="Follow Us on LInkedIn" target="_blank" className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center hover:bg-white/70 transition-all">
                                <span className="w-full text-center text-[1.5rem]">
                                    <FaLinkedin className="w-full text-blue-500" />
                                </span>
                            </a>
                            <a href="https://www.youtube.com/@RishngNexusInfra" aria-label="Follow Us on Youtube" target="_blank" className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center hover:bg-white/70 transition-all">
                                <span className="w-full text-center text-[1.5rem]">
                                    <FaYoutube className="w-full text-red-500" />
                                </span>
                            </a>
                            <a href="https://wa.me/919910587006" aria-label="Follow Us on WhatsApp" target="_blank" className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center hover:bg-white/70 transition-all">
                                <span className="w-full text-center text-[1.5rem]">
                                    <FaWhatsapp className="w-full text-green-500" />
                                </span>
                            </a>
                        </div>
                    </div>

                </div>
            </footer>

             {/* FLOATING WHATSAPP BUTTON */}
            <a href="https://wa.me/+919910587006" aria-label="Follow Us on Whatsapp" target="_blank"
                className="fixed bottom-4 md:bottom-8 left-8 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:bg-[#20ba5a] hover:-translate-y-1 transition-all duration-300 group">

                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path
                        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.938 3.659 1.435 5.63 1.435h.008c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>

                <span
                    className="absolute left-16 bg-white text-gray-800 px-3 py-1 rounded-lg shadow-md text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                    Chat with us
                </span>
            </a>

            {/* FLOATING ACTION BUTTONS */}
            <div
                className="fixed bottom-7 right-6 z-[600] flex-col gap-[.7rem] items-end md:flex hidden"
                aria-label="Quick contact"
            >

                {/* Book Site Visit */}
                <a
                    href="#contact"
                    aria-label="Book a site visit"
                    className="flex items-center gap-[.6rem] px-5 py-[.7rem] font-bold text-[.8rem] tracking-[.1em] uppercase text-navy shadow-[0_4px_22px_rgba(0,0,0,.22)] transition-transform duration-200 hover:-translate-x-1"
                    style={{
                        background:
                            "linear-gradient(135deg,#B08840,#E8C97A)",
                    }}
                >
                    <svg
                        className="w-[18px] h-[18px] flex-shrink-0"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        aria-hidden="true"
                    >
                        <rect x="3" y="4" width="18" height="18" rx="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>

                    Book Site Visit
                </a>
            </div>
        </>
    )
}