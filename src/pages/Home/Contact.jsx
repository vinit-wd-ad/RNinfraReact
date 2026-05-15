export default function Contact() {
    return (
        <section id="contact" className="bg-white py-[5rem] px-5 md:px-16">
            <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-[5.5rem] items-start">

                {/* <!-- Left: Info --> */}
                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <span className="sec-label-line"></span>
                        <span className="text-[.65rem] tracking-[.35em] uppercase text-rblue font-semibold">Get in Touch</span>
                    </div>
                    <h2 className="font-sans font-light leading-[1.08] text-navy mb-5"
                        style={{ fontSize:"clamp(2.2rem,3.8vw,3.4rem)" }}>
                        Let's Build <em className="not-italic text-gold">Together</em>
                    </h2>
                    <div className="w-14 h-[2px] accent-rule mb-8"></div>
                    <p className="text-[1rem] leading-[1.9] text-rmuted mb-5">Whether you're an investor seeking high-growth
                        opportunities, a partner with a complementary vision, or a buyer looking for premium assets in India
                        or Dubai — we'd like to hear from you.</p>
                    <p className="text-[.88rem] leading-[1.9] text-rmuted border-l-2 border-rbds pl-4 mb-8 italic">We are also
                        open to co-investment and joint ventures — in new ventures or existing businesses where the right
                        partnership can accelerate growth for everyone involved. If you believe there's a fit, the
                        conversation starts here.</p>

                    {/* <!-- Office chips --> */}
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-3 p-[.82rem] border border-rbdr bg-rs2">
                            <span className="text-[1.1rem] flex-shrink-0">🇮🇳</span>
                            <div>
                                <span className="block text-[.52rem] tracking-[.2em] uppercase text-rblue mb-[2px]">Corporate
                                    Office</span>
                                <span className="text-[.82rem] text-rtxt2">B-743, Tower B, IThum, Sector 62, Noida</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 p-[.82rem] border border-rbdr bg-rs2">
                            <span className="text-[1.1rem] flex-shrink-0">🇦🇪</span>
                            <div>
                                <span className="block text-[.52rem] tracking-[.2em] uppercase text-rblue mb-[2px]">Dubai
                                    Office</span>
                                <span className="text-[.82rem] text-rtxt2">Building 11 - 606 - Business Bay - Bay Square - Dubai - United Arab Emirates</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-10 p-[.82rem] border border-rbdr bg-rs2">
                            <div className="flex gap-3">
                                <span className="text-[1.1rem] flex-shrink-0">&#128231;</span>
                                <div>
                                    <span className="block text-[.52rem] tracking-[.2em] uppercase text-rblue mb-[2px]">Email
                                        Id</span>
                                    <span className="text-[.82rem] text-rtxt2"><a
                                        href="mailto:sales@risingnexusinfra.com">sales@risingnexusinfra.com</a></span>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <span className="text-[1.1rem] flex-shrink-0">&#128222;</span>
                                <div>
                                    <span className="block text-[.52rem] tracking-[.2em] uppercase text-rblue mb-[2px]">Contact
                                        No.</span>
                                    <span className="text-[.82rem] text-rtxt2"><a href="tel:+919910587006">+91
                                        9910587006</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Right: Form --> */}
                <form action="mailer/contact-message.php" method="POST" className="flex flex-col gap-5">
                    <input type="hidden" name="sub" value="Contact Form !" />
                    <input type="hidden" name="redirect_url" value="<?= BASE_URL . '#contact' ?>" />
                    <div className="grid grid-cols-2 gap-x-2 gap-5">
                        <div className="flex flex-col gap-2">
                            <label for="user_name" className="text-[.6rem] tracking-[.2em] uppercase text-rmuted font-semibold">Full Name</label>
                            <input type="text" name="name" id="user_name" placeholder="Your name" required
                                className="bg-rg border border-rbdr text-rtxt text-[.95rem] px-4 py-[.9rem] outline-none focus:border-rmid focus:bg-white transition-colors duration-200 placeholder-rmuted/60" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label for="user_email" className="text-[.6rem] tracking-[.2em] uppercase text-rmuted font-semibold">Email Address</label>
                            <input type="email" name="email" id="user_email" placeholder="your@email.com" required
                                className="bg-rg border border-rbdr text-rtxt text-[.95rem] px-4 py-[.9rem] outline-none focus:border-rmid focus:bg-white transition-colors duration-200 placeholder-rmuted/60" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-x-2 gap-5">
                        <div className="flex flex-col gap-2">
                            <label for="user_phone" className="text-[.6rem] tracking-[.2em] uppercase text-rmuted font-semibold">Phone Number</label>
                            <input type="tel" name="phone" id="user_phone" placeholder="+91 / +971 XXXXX XXXXX"
                                className="bg-rg border border-rbdr text-rtxt text-[.95rem] px-4 py-[.9rem] outline-none focus:border-rmid focus:bg-white transition-colors duration-200 placeholder-rmuted/60" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label for="area_of_interest" className="text-[.6rem] tracking-[.2em] uppercase text-rmuted font-semibold">Area of Interest</label>
                            <select name="area_of_interest" id="area_of_interest"
                                className="bg-rg border border-rbdr text-rtxt2 text-[.93rem] px-4 py-[.9rem] outline-none focus:border-rmid focus:bg-white transition-colors duration-200 appearance-none cursor-pointer">
                                <option value="">Select sector / purpose</option>
                                <option>Real Estate — Dholera, India</option>
                                <option>Real Estate — Barog, Himachal Pradesh</option>
                                <option>Real Estate — Dubai, UAE</option>
                                <option>Energy Sector</option>
                                <option>Data Centers</option>
                                <option>Investment Partnership</option>
                                <option>Co-Investment / Joint Venture</option>
                                <option>General Enquiry</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label for="user_message" className="text-[.6rem] tracking-[.2em] uppercase text-rmuted font-semibold">Message</label>
                        <textarea rows="5" name="messgae" id="user_message" placeholder="Tell us about your interest or requirement…"
                            className="bg-rg border border-rbdr text-rtxt text-[.95rem] px-4 py-[.9rem] outline-none focus:border-rmid focus:bg-white transition-colors duration-200 resize-y placeholder-rmuted/60"></textarea>
                    </div>
                    <div>
                        <button type="submit"
                            className="text-[.7rem] tracking-[.2em] uppercase bg-gold text-white px-11 py-4 font-medium hover:bg-white hover:bg-gold hover:text-navy hover:border-gold border-[1.5px] transition-colors duration-200 cursor-pointer font-sans">
                            Send Enquiry →
                        </button>
                    </div>
                </form>

            </div>
        </section>
    )
}