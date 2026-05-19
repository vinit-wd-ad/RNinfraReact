import React, { useEffect, useRef, useState } from "react";
import Logo from "../assets/logos/logo1.png";
import {
    FaWhatsapp,
    FaInstagram,
    FaFacebook,
    FaLinkedin,
    FaYoutube,
} from "react-icons/fa";
import { NavLink } from "react-router";

export default function Nav() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const [aboutOpen, setAboutOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [projectsOpen, setProjectsOpen] = useState(false);

    const aboutTimeoutRef = useRef(null);
    const servicesTimeoutRef = useRef(null);
    const projectsTimeoutRef = useRef(null);

    const [dotsOpen, setDotsOpen] = useState(false);

    const dotsRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dotsRef.current && !dotsRef.current.contains(event.target)) {
                setDotsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const downloadBrochure = () => {
        console.log("Download brochure");
    };

    const sharePage = async () => {
        try {
            if (navigator.share) {
                await navigator.share({
                    title: document.title,
                    url: window.location.href,
                });
            } else {
                await navigator.clipboard.writeText(window.location.href);
                alert("Link copied!");
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <nav className="fixed top-0 left-0 right-0 w-full z-[600] bg-white/95 backdrop-blur-md border-b border-rbdr shadow-[0_1px_24px_rgba(13,27,62,.06)]">
            <div className="flex items-center justify-between px-5 md:px-14 py-[1rem] min-w-0">
                {/* LOGO */}
                <NavLink to="/" className="flex flex-col no-underline">
                    <span className="font-serif text-[1.1rem] md:text-[1.4rem] font-semibold tracking-[.07em] text-navy uppercase">
                        <img
                            src={Logo}
                            className="w-14 md:w-20"
                            alt="RisingNegusInfra Logo"
                        />
                    </span>
                </NavLink>

                {/* DESKTOP MENU */}
                <ul className="hidden lg:flex items-center gap-[.1rem] list-none">
                    {/* ABOUT */}
                    <li
                        className="relative"
                        onMouseEnter={() => {
                            clearTimeout(aboutTimeoutRef.current);
                            setAboutOpen(true);
                        }}
                        onMouseLeave={() => {
                            aboutTimeoutRef.current = setTimeout(() => {
                                setAboutOpen(false);
                            }, 200);
                        }}
                    >
                        <button
                            onClick={() => setAboutOpen(!aboutOpen)}
                            className="flex items-center gap-1 text-[.7rem] tracking-[.13em] uppercase text-rtxt2 hover:text-rmid px-[.9rem] py-2 bg-transparent border-none cursor-pointer font-sans transition-colors duration-200"
                        >
                            About

                            <svg
                                className={`w-2 h-2 transition-transform duration-200 ${aboutOpen ? "rotate-180" : ""
                                    }`}
                                viewBox="0 0 8 5"
                                fill="currentColor"
                            >
                                <path d="M0 0l4 5 4-5z" />
                            </svg>
                        </button>

                        {aboutOpen && (
                            <div className="dropdown-panel">
                                <a
                                    href="./#about"
                                    className="flex items-center gap-3 px-5 py-3 text-[.68rem] tracking-[.1em] uppercase text-rtxt2 border-b border-rbdr hover:bg-rlt hover:text-rblue no-underline transition-colors"
                                >
                                    <span>🏛</span>
                                    Our Story
                                </a>

                                <a
                                    href="./#team"
                                    className="flex items-center gap-3 px-5 py-3 text-[.68rem] tracking-[.1em] uppercase text-rtxt2 border-b border-rbdr hover:bg-rlt hover:text-rblue no-underline transition-colors"
                                >
                                    <span>👥</span>
                                    Our Leadership
                                </a>
                            </div>
                        )}
                    </li>

                    {/* SERVICES */}
                    <li
                        className="relative"
                        onMouseEnter={() => {
                            clearTimeout(servicesTimeoutRef.current);
                            setServicesOpen(true);
                        }}
                        onMouseLeave={() => {
                            servicesTimeoutRef.current = setTimeout(() => {
                                setServicesOpen(false);
                            }, 200);
                        }}
                    >
                        <button
                            onClick={() => setServicesOpen(!servicesOpen)}
                            className="flex items-center gap-1 text-[.7rem] tracking-[.13em] uppercase text-rtxt2 hover:text-rmid px-[.9rem] py-2 bg-transparent border-none cursor-pointer font-sans transition-colors duration-200"
                        >
                            Services

                            <svg
                                className={`w-2 h-2 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""
                                    }`}
                                viewBox="0 0 8 5"
                                fill="currentColor"
                            >
                                <path d="M0 0l4 5 4-5z" />
                            </svg>
                        </button>

                        {servicesOpen && (
                            <div className="dropdown-panel">
                                <a
                                    href="./#services"
                                    className="flex items-center gap-3 px-5 py-3 text-[.68rem] tracking-[.1em] uppercase text-rtxt2 border-b border-rbdr hover:bg-rlt hover:text-rblue no-underline transition-colors"
                                >
                                    <span>🏗</span>
                                    Real Estate
                                </a>

                                <a
                                    href="./#services"
                                    className="flex items-center gap-3 px-5 py-3 text-[.68rem] tracking-[.1em] uppercase text-rtxt2 border-b border-rbdr hover:bg-rlt hover:text-rblue no-underline transition-colors"
                                >
                                    <span>⚡</span>
                                    Energy Sector
                                </a>

                                <a
                                    href="./#services"
                                    className="flex items-center gap-3 px-5 py-3 text-[.68rem] tracking-[.1em] uppercase text-rtxt2 border-b border-rbdr hover:bg-rlt hover:text-rblue no-underline transition-colors"
                                >
                                    <span>🖥</span>
                                    Data Centers
                                </a>

                                <a
                                    href="./#contact"
                                    className="flex items-center gap-3 px-5 py-3 text-[.68rem] tracking-[.1em] uppercase text-rtxt2 hover:bg-rlt hover:text-rblue no-underline transition-colors"
                                >
                                    <span>🤝</span>
                                    Investment Opportunities
                                </a>
                            </div>
                        )}
                    </li>

                    {/* PROJECTS */}
                    <li
                        className="relative"
                        onMouseEnter={() => {
                            clearTimeout(projectsTimeoutRef.current);
                            setProjectsOpen(true);
                        }}
                        onMouseLeave={() => {
                            projectsTimeoutRef.current = setTimeout(() => {
                                setProjectsOpen(false);
                            }, 200);
                        }}
                    >
                        <button
                            onClick={() => setProjectsOpen(!projectsOpen)}
                            className="flex items-center gap-1 text-[.7rem] tracking-[.13em] uppercase text-rtxt2 hover:text-rmid px-[.9rem] py-2 bg-transparent border-none cursor-pointer font-sans transition-colors duration-200"
                        >
                            Projects

                            <svg
                                className={`w-2 h-2 transition-transform duration-200 ${projectsOpen ? "rotate-180" : ""
                                    }`}
                                viewBox="0 0 8 5"
                                fill="currentColor"
                            >
                                <path d="M0 0l4 5 4-5z" />
                            </svg>
                        </button>

                        {projectsOpen && (
                            <ul className="dropdown-panel">
                                <li>
                                    <NavLink to="/dholera" className="flex items-center gap-3 px-5 py-3 text-[.68rem] tracking-[.1em] uppercase text-rtxt2 border-b border-rbdr hover:bg-rlt hover:text-rblue no-underline transition-colors" end>
                                        <span>🌿</span>
                                        Dholera Smart City
                                    </NavLink>
                                </li>

                                <li>
                                    <a
                                        href="harison-barog"
                                        className="flex items-center gap-3 px-5 py-3 text-[.68rem] tracking-[.1em] uppercase text-rtxt2 border-b border-rbdr hover:bg-rlt hover:text-rblue no-underline transition-colors"
                                    >
                                        <span>🏔</span>
                                        Barog, Himachal Pradesh
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="dubai"
                                        className="flex items-center gap-3 px-5 py-3 text-[.68rem] tracking-[.1em] uppercase text-rtxt2 border-b border-rbdr hover:bg-rlt hover:text-rblue no-underline transition-colors"
                                    >
                                        <span>🏙</span>
                                        Dubai Real Estate
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="energy-data"
                                        className="flex items-center gap-3 px-5 py-3 text-[.68rem] tracking-[.1em] uppercase text-rtxt2 border-b border-rbdr hover:bg-rlt hover:text-rblue no-underline transition-colors"
                                    >
                                        <span>🔮</span>
                                        Energy & Data (Upcoming)
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="./#projects"
                                        className="flex items-center gap-3 px-5 py-3 text-[.68rem] tracking-[.1em] uppercase text-rtxt2 hover:bg-rlt hover:text-rblue no-underline transition-colors"
                                    >
                                        <span>📂</span>
                                        All Projects
                                    </a>
                                </li>
                            </ul>
                        )}
                    </li>

                    {/* CONTACT */}
                    <li className="relative">
                        <a
                            href="./#contact"
                            className="flex items-center gap-3 px-5 py-3 text-[.68rem] tracking-[.1em] uppercase text-rtxt2 hover:bg-rlt hover:text-rblue no-underline transition-colors"
                        >
                            Contact
                        </a>
                    </li>
                </ul>

                {/* RIGHT SIDE */}
                <div className="flex items-center gap-1 md:gap-4 flex-shrink-0">
                    <a
                        href="#contact"
                        className="hidden sm:block text-[.7rem] md:text-[.65rem] tracking-[.16em] uppercase bg-white text-black px-[1rem] md:px-[1.3rem] py-[.58rem] no-underline hover:border-gold border-[1.5px] border-navy/20 hover:text-navy hover:bg-gold/10 transition-colors duration-200 font-medium"
                    >
                        Enquire Now
                    </a>

                    {/* DOTS MENU */}
                    <div className="relative hidden md:block" ref={dotsRef}>
                        <button
                            onClick={() => setDotsOpen(!dotsOpen)}
                            className="w-9 h-9 flex flex-col items-center justify-center gap-[4px] border border-rbds bg-transparent cursor-pointer hover:border-navy transition-colors"
                        >
                            <span
                                className={`w-1 h-1 rounded-full bg-rmuted ${dotsOpen ? "bg-navy" : ""
                                    }`}
                            ></span>

                            <span
                                className={`w-1 h-1 rounded-full bg-rmuted ${dotsOpen ? "bg-navy" : ""
                                    }`}
                            ></span>

                            <span
                                className={`w-1 h-1 rounded-full bg-rmuted ${dotsOpen ? "bg-navy" : ""
                                    }`}
                            ></span>
                        </button>

                        {dotsOpen && (
                            <div className="dots-panel">
                                <div className="px-5 py-[.6rem] text-[.52rem] tracking-[.28em] uppercase text-rblue border-b border-rbdr font-semibold">
                                    Quick Links
                                </div>

                                <a
                                    href="./"
                                    className="flex items-center gap-3 px-5 py-[.7rem] text-[.65rem] tracking-[.08em] uppercase text-rtxt2 border-b border-rbdr hover:bg-rlt hover:text-rblue no-underline transition-colors"
                                >
                                    <span className="w-[18px] text-center text-[.9rem]">
                                        🏠
                                    </span>
                                    Home
                                </a>

                                <a
                                    href="./#contact"
                                    className="flex items-center gap-3 px-5 py-[.7rem] text-[.65rem] tracking-[.08em] uppercase text-rtxt2 border-b border-rbdr hover:bg-rlt hover:text-rblue no-underline transition-colors"
                                >
                                    <span className="w-[18px] text-center text-[.9rem]">
                                        ✉️
                                    </span>
                                    Contact Us
                                </a>

                                <div className="text-[.47rem] tracking-[.24em] uppercase text-rmuted bg-rs2 px-5 py-[.42rem]">
                                    Connect With Us
                                </div>

                                <a
                                    href="https://wa.me/919910587006"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-3 px-5 py-[.7rem] text-[.65rem] tracking-[.08em] uppercase text-rtxt2 border-b border-rbdr hover:bg-rlt hover:text-rblue no-underline transition-colors"
                                >
                                    <span className="w-[18px] text-center text-[.9rem]">
                                        <FaWhatsapp className="w-4 h-4 text-green-500" />
                                    </span>
                                    WhatsApp Us
                                </a>

                                <a
                                    href="https://www.instagram.com/risingnexusinfra.official/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-3 px-5 py-[.7rem] text-[.65rem] tracking-[.08em] uppercase text-rtxt2 border-b border-rbdr hover:bg-rlt hover:text-rblue no-underline transition-colors"
                                >
                                    <span className="w-[18px] text-center text-[.9rem]">
                                        <FaInstagram className="w-4 h-4 text-pink-600" />
                                    </span>
                                    Instagram
                                </a>

                                <a
                                    href="https://www.facebook.com/risingnexusinfra.official"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-3 px-5 py-[.7rem] text-[.65rem] tracking-[.08em] uppercase text-rtxt2 border-b border-rbdr hover:bg-rlt hover:text-rblue no-underline transition-colors"
                                >
                                    <span className="w-[18px] text-center text-[.9rem]">
                                        <FaFacebook className="w-4 h-4 text-blue-700" />
                                    </span>
                                    Facebook
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/vast-tyagi/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-3 px-5 py-[.7rem] text-[.65rem] tracking-[.08em] uppercase text-rtxt2 border-b border-rbdr hover:bg-rlt hover:text-rblue no-underline transition-colors"
                                >
                                    <span className="w-[18px] text-center text-[.9rem]">
                                        <FaLinkedin className="w-4 h-4 text-blue-600" />
                                    </span>
                                    LinkedIn
                                </a>

                                <a
                                    href="https://www.youtube.com/@RishngNexusInfra"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-3 px-5 py-[.7rem] text-[.65rem] tracking-[.08em] uppercase text-rtxt2 border-b border-rbdr hover:bg-rlt hover:text-rblue no-underline transition-colors"
                                >
                                    <span className="w-[18px] text-center text-[.9rem]">
                                        <FaYoutube className="w-4 h-4 text-red-600" />
                                    </span>
                                    YouTube
                                </a>

                                <div className="text-[.47rem] tracking-[.24em] uppercase text-rmuted bg-rs2 px-5 py-[.42rem]">
                                    Resources
                                </div>

                                <button
                                    onClick={downloadBrochure}
                                    className="flex items-center gap-3 w-full px-5 py-[.7rem] text-[.65rem] tracking-[.08em] uppercase text-rtxt2 border-b border-rbdr hover:bg-rlt hover:text-rblue bg-transparent border-l-0 border-r-0 border-t-0 cursor-pointer font-sans text-left transition-colors"
                                >
                                    <span className="w-[18px] text-center text-[.9rem]">
                                        📄
                                    </span>
                                    Download Brochure
                                </button>

                                <button
                                    onClick={sharePage}
                                    className="flex items-center gap-3 w-full px-5 py-[.7rem] text-[.65rem] tracking-[.08em] uppercase text-rtxt2 hover:bg-rlt hover:text-rblue bg-transparent border-none cursor-pointer font-sans text-left transition-colors"
                                >
                                    <span className="w-[18px] text-center text-[.9rem]">
                                        ↗
                                    </span>
                                    Share This Page
                                </button>
                            </div>
                        )}
                    </div>

                    {/* MOBILE BUTTON */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-[5px] border border-rbdr bg-transparent cursor-pointer"
                    >
                        <span
                            className={`w-5 h-[2px] bg-navy transition-all ${mobileMenuOpen ? "rotate-45 translate-y-[7px]" : ""
                                }`}
                        ></span>

                        <span
                            className={`w-5 h-[2px] bg-navy transition-all ${mobileMenuOpen ? "opacity-0" : ""
                                }`}
                        ></span>

                        <span
                            className={`w-5 h-[2px] bg-navy transition-all ${mobileMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""
                                }`}
                        ></span>
                    </button>
                </div>
            </div>

            {/* MOBILE MENU */}
            {mobileMenuOpen && (
                <div className="lg:hidden bg-white border-b border-rbdr absolute w-full left-0 shadow-xl overflow-y-auto max-h-[80vh]">
                    <div className="flex flex-col p-6 space-y-4">
                        <div className="text-[.55rem] tracking-[.2em] text-rmuted uppercase border-b border-gray-100 pb-2">
                            Menu
                        </div>

                        <a
                            href="./#about"
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-[.75rem] tracking-[.12em] uppercase text-navy no-underline py-1"
                        >
                            About Us
                        </a>

                        <a
                            href="./#services"
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-[.75rem] tracking-[.12em] uppercase text-navy no-underline py-1"
                        >
                            Services
                        </a>

                        <a
                            href="./#projects"
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-[.75rem] tracking-[.12em] uppercase text-navy no-underline py-1"
                        >
                            Projects
                        </a>

                        <a
                            href="./#contact"
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-[.75rem] tracking-[.12em] uppercase text-navy no-underline py-1"
                        >
                            Contact
                        </a>

                        <div className="pt-4">
                            <a
                                href="./#contact"
                                onClick={() => setMobileMenuOpen(false)}
                                className="block text-center text-[.7rem] tracking-[.15em] uppercase bg-navy text-white py-3 no-underline"
                            >
                                Enquire Now
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}