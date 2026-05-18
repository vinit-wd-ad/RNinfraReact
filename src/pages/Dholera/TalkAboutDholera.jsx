import React, { useState } from 'react';


export default function TalkAboutDholera() {
    // React State to manage dynamic form values and submission status
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        investmentBudget: '',
        propertyInterest: '',
        preferredSiteVisit: '',
        message: '',
        sub: 'Dholera !',
        redirectUrl: '/dholera'
    });

    const [isSent, setIsSent] = useState(false);

    // Handle generic input transitions
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Process your submission handling logic here (e.g., API call or traditional fetch)
        console.log('Form Submitted Data:', formData);

        // Trigger successful visibility switch
        setIsSent(true);
    };

    return (
        <section id="contact" className="bg-gray-700 py-[3rem] lg:py-[6rem] px-7 md:px-16 relative overflow-hidden">
            {/* Background Subtle Grid Pattern Overlay */}
            <div
                className="absolute inset-0 opacity-[.04] pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,.8) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.8) 1px,transparent 1px)',
                    backgroundSize: '60px 60px'
                }}
            ></div>

            <div className="max-w-[900px] mx-auto text-center relative z-10">

                {/* Section Header */}
                <div className="flex items-center justify-center gap-4 mb-4">
                    <span className="block w-7 h-px bg-gold"></span>
                    <span className="text-[.63rem] tracking-[.34em] uppercase text-goldlt font-semibold">Get Started</span>
                    <span className="block w-7 h-px bg-gold"></span>
                </div>

                <h2 className="font-sans font-light leading-[1.1] text-white mb-3" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}>
                    Let's Talk About <em className="not-italic text-goldlt">Dholera</em>
                </h2>

                <p className="text-[.97rem] text-white/45 mb-12">
                    Fill in your details and our Dholera specialist will reach out personally within 24 hours.
                </p>

                {/* Interactive Form Context */}
                <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-2 md:gap-5 text-left">

                    {/* Full Name Field */}
                    <div className="flex flex-col gap-[.5rem]">
                        <label htmlFor="user_name" className="text-[.7rem] tracking-[.22em] uppercase text-white font-semibold">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            id="user_name"
                            required
                            placeholder="Your name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="bg-white/[.06] border border-white/11 text-white text-[.93rem] px-4 py-[.9rem] outline-none focus:border-gold/50 focus:bg-white/[.09] transition-colors duration-200 placeholder-white/22 font-sans"
                        />
                    </div>

                    {/* Phone Number Field */}
                    <div className="flex flex-col gap-[.5rem]">
                        <label htmlFor="user_phone" className="text-[.7rem] tracking-[.22em] uppercase text-white font-semibold">Phone Number</label>
                        <input
                            type="tel"
                            name="phone"
                            id="user_phone"
                            required
                            placeholder="+91 XXXXX XXXXX"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="bg-white/[.06] border border-white/11 text-white text-[.93rem] px-4 py-[.9rem] outline-none focus:border-gold/50 focus:bg-white/[.09] transition-colors duration-200 placeholder-white/22 font-sans"
                        />
                    </div>

                    {/* Email Address Field */}
                    <div className="flex flex-col gap-[.5rem]">
                        <label htmlFor="user_email" className="text-[.7rem] tracking-[.22em] uppercase text-white font-semibold">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            id="user_email"
                            placeholder="your@email.com"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="bg-white/[.06] border border-white/11 text-white text-[.93rem] px-4 py-[.9rem] outline-none focus:border-gold/50 focus:bg-white/[.09] transition-colors duration-200 placeholder-white/22 font-sans"
                        />
                    </div>

                    {/* Investment Budget Select Menu */}
                    <div className="flex flex-col gap-[.5rem]">
                        <label htmlFor="investment_budget" className="text-[.7rem] tracking-[.22em] uppercase text-white font-semibold">Investment Budget</label>
                        <select
                            name="investmentBudget"
                            id="investment_budget"
                            value={formData.investmentBudget}
                            onChange={handleInputChange}
                            className="bg-white/[.06] border border-white/11 text-white text-[.9rem] px-4 py-[.9rem] outline-none focus:border-gold/50 transition-colors duration-200 appearance-none cursor-pointer font-sans"
                            style={{ backgroundColor: 'rgba(255,255,255,.06)' }}
                        >
                            <option value="" style={{ background: '#0D1B3E' }}>Select range</option>
                            {budgetRanges.map((range, idx) => (
                                <option key={idx} value={range} style={{ background: '#0D1B3E' }}>{range}</option>
                            ))}
                        </select>
                    </div>

                    {/* Property Interest Select Menu */}
                    <div className="flex flex-col gap-[.5rem]">
                        <label htmlFor="property_interest" className="text-[.7rem] tracking-[.22em] uppercase text-white font-semibold">Property Interest</label>
                        <select
                            name="propertyInterest"
                            id="property_interest"
                            value={formData.propertyInterest}
                            onChange={handleInputChange}
                            className="bg-white/[.06] border border-white/11 text-white text-[.9rem] px-4 py-[.9rem] outline-none focus:border-gold/50 transition-colors duration-200 appearance-none cursor-pointer font-sans"
                            style={{ backgroundColor: 'rgba(255,255,255,.06)' }}
                        >
                            <option value="" style={{ background: '#0D1B3E' }}>Select type</option>
                            {propertyTypes.map((type, idx) => (
                                <option key={idx} value={type} style={{ background: '#0D1B3E' }}>{type}</option>
                            ))}
                        </select>
                    </div>

                    {/* Preferred Site Visit Select Menu */}
                    <div className="flex flex-col gap-[.5rem]">
                        <label htmlFor="preferred_site_visit" className="text-[.7rem] tracking-[.22em] uppercase text-white font-semibold">Preferred Site Visit</label>
                        <select
                            name="preferredSiteVisit"
                            id="preferred_site_visit"
                            value={formData.preferredSiteVisit}
                            onChange={handleInputChange}
                            className="bg-white/[.06] border border-white/11 text-white text-[.9rem] px-4 py-[.9rem] outline-none focus:border-gold/50 transition-colors duration-200 appearance-none cursor-pointer font-sans"
                            style={{ backgroundColor: 'rgba(255,255,255,.06)' }}
                        >
                            <option value="" style={{ background: '#0D1B3E' }}>When works for you?</option>
                            {timelineOptions.map((time, idx) => (
                                <option key={idx} value={time} style={{ background: '#0D1B3E' }}>{time}</option>
                            ))}
                        </select>
                    </div>

                    {/* Message Textarea */}
                    <div className="col-span-2 flex flex-col gap-[.5rem]">
                        <label htmlFor="user_message" className="text-[.7rem] tracking-[.22em] uppercase text-white font-semibold">Message (Optional)</label>
                        <textarea
                            rows="4"
                            name="message"
                            id="user_message"
                            placeholder="Any specific zones, plot sizes, or questions you'd like us to address…"
                            value={formData.message}
                            onChange={handleInputChange}
                            className="bg-white/[.06] border border-white/11 text-white text-[.93rem] px-4 py-[.9rem] outline-none focus:border-gold/50 focus:bg-white/[.09] transition-colors duration-200 resize-y placeholder-white/22 font-sans"
                        ></textarea>
                    </div>

                    {/* Action Trigger Area Toggle */}
                    <div className="col-span-2 flex justify-start">
                        {!isSent ? (
                            <button
                                type="submit"
                                className="text-[.7rem] tracking-[.2em] uppercase bg-gold hover:bg-white hover:text-navy hover:border-gold border-[1.5px] text-navy px-12 py-4 font-semibold transition-colors duration-200 border-none cursor-pointer font-sans"
                            >
                                Submit Enquiry →
                            </button>
                        ) : (
                            <p className="text-[.87rem] text-goldlt tracking-[.07em]">
                                ✓ Received. Our Dholera specialist will be in touch within 24 hours.
                            </p>
                        )}
                    </div>

                </form>
            </div>
        </section>
    );
}

// 2. Controlled Option Datasets at the Bottom of the File
const budgetRanges = [
    "Under ₹20 Lakhs",
    "₹20 – ₹50 Lakhs",
    "₹50 Lakhs – ₹1 Crore",
    "₹1 Crore – ₹2 Crore",
    "₹2 Crore+",
    "Prefer to discuss"
];

const propertyTypes = [
    "Residential Plot",
    "Villa / Township",
    "Commercial Plot",
    "Industrial / Logistics Land",
    "Not sure — need guidance"
];

const timelineOptions = [
    "Within 2 weeks",
    "Within a month",
    "In 1–3 months",
    "Virtual consultation first"
];