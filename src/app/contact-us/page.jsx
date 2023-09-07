// Import Page Components
import Hero from "@/components/hero/hero";
import Letstalk from "@/components/letstalk/letstalk";
import Contact from "@/components/contact/contact";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
// Import Images
import banner from "media/about-us/hero/banner.png";

const Page = () => {
    // Array for Hero Component Props
    const hero = {
        page: "single",
        subtitle: "Get in Touch With Us",
        title: "Services for Creating Amazing Websites",
        desc: "For all of your company's web development needs, you can count on us. Our online platforms flaunt nimbleness, quickness, uniqueness, and high quality.",
        bg: "__ecommerceHeroGradientBg",
        banner,
        points: ["Customized", "Optimized", "Result Driven", "Measurable"],
        btnBg: "bg-[#005368]",
        btnBorder: "border-[#005368]",
        btnHover: "hover:bg-[#005368]"
    };
    return (
        <>
            <main>
                <Header />
                <Hero content={hero} />
                <Contact />
                <Letstalk />
                <Footer />
            </main>
        </>
    );
}

export default Page;