import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import About from "./About";
import Contact from "./Contact";
import Hero from "./Hero";
import Leadership from "./Leadership";
import Projects from "./Projects";
import Services from "./Services";

export default function Home () {
    return (
        <>
            <Nav />
            <Hero />
            <About />
            <Leadership />
            <Services />
            <Projects />
            <Contact />

            <Footer />
        </>
    )
}