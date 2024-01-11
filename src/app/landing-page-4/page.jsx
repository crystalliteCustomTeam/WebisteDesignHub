// Import Page Components
import Header from "@/components/header/header";
import Hero from "./components/hero/hero";
import Seen from "./components/seen/seen";
import Testimonial from "./components/testimonials/testimonial";
import Services from "./components/services/services";
import Collaboration from "./components/collaboration/collaboration";
import Developers from "./components/developers/developers";
import Packages from "./components/packages/packages";
import Weare from "@/components/weare/weare";
import Contact from "@/components/contact/contact";
import Footer from "@/components/footer/footer";
import Portfolios from "./components/portfolios/portfolios";

const page = () => {
    // Array for Packages Component Props
    const packages = {
        subtitle: "Web Design & Development Packages",
        title: "Budget-Friendly",
        desc: "Our commitment to affordability means you can have a stunning, professionally designed website that perfectly suits your budget.",
        key: 1,
        name: "Website Development",
    };
    return (
        <main>
            <Header />
            <Hero />
            <Seen />
            <Testimonial />
            <Services />
            <Portfolios />
            <Collaboration />
            <Developers />
            <Packages content={packages} />
            <Weare/>
            <Contact />
            <Footer/>
        </main>
    )
}

export default page