export default function Hero() {
    return (
        <section id="home" className="min-h-[calc(100vh-5rem)] flex items-center justify-center relative overflow-hidden bg-white pt-24 md:pt-20">

            <div className="absolute inset-0 pointer-events-none"
                style={{ background:"linear-gradient(135deg,#EAF0FF 0%,#fff 52%,#F5F8EE 100%)" }}></div>
            <div className="absolute inset-0 grid-overlay opacity-[.042] pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-[620px] h-[620px] rounded-full pointer-events-none"
                style={{ background:"radial-gradient(circle at 70% 30%,rgba(26,77,179,.07) 0%,transparent 65%)" }}></div>
            <div className="absolute bottom-[-60px] left-[-60px] w-[480px] h-[480px] rounded-full pointer-events-none"
                style={{ background:"radial-gradient(circle,rgba(176,136,64,.06) 0%,transparent 65%)" }}></div>

            <div className="relative z-10 max-w-[980px] px-6 md:px-8 text-center">
                <div className="flex items-center justify-center gap-3 md:gap-5 mb-6 md:mb-8">
                    <span className="block w-6 md:w-10 h-px bg-goldlt"></span>
                    <span
                        className="text-[.6rem] md:text-[.7rem] tracking-[.2em] md:tracking-[.38em] uppercase text-gold font-sans">Infrastructure
                        • Investment • Innovation</span>
                    <span className="block w-6 md:w-10 h-px bg-goldlt"></span>
                </div>

                <h1
                    className="font-sans font-light leading-[1.1] md:leading-[1.04] tracking-[.01em] text-navy mb-6 text-[2.8rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[6rem]">
                    Building the <em className="not-italic text-gold">Infrastructure</em> <br className="hidden md:block" /> of
                        Tomorrow
                </h1>

                <p
                    className="text-[.75rem] md:text-[.88rem] tracking-[.15em] md:tracking-[.22em] uppercase text-rmuted mb-5 font-sans">
                    Where Infra Connects Future & Growth</p>

                <div className="w-16 md:w-20 h-[3px] accent-rule mx-auto mb-8 md:mb-10"></div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a href="#projects"
                        className="w-full sm:w-auto text-[.7rem] tracking-[.18em] uppercase bg-gold text-white px-10 py-4 font-medium hover:bg-gold hover:text-navy hover:border-gold border-[1.5px] transition-colors duration-200 no-underline text-center">
                        Explore Projects
                    </a>
                    <a href="#contact"
                        className="w-full sm:w-auto text-[.7rem] tracking-[.18em] uppercase border-[1.5px] border-gold text-navy px-10 py-4 hover:bg-gold hover:text-white transition-all duration-200 no-underline text-center">
                        Get in Touch
                    </a>
                </div>
            </div>
        </section>
    )
}