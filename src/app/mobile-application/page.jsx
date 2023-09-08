// Import Page Components
import Hero from "@/components/hero/hero";
import Services from "@/components/mobile-application/services/services";
import SmallBanner from "@/components/smallbanner/smallbanner";
import Portfolios from "@/components/portfolios/portfolios";
import Letstalk from "@/components/letstalk/letstalk";
import Reviews from "@/components/reviews/reviews";
import Weare from "@/components/weare/weare";
import Contact from "@/components/contact/contact";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Packages from "@/components/packages/packages";
// Import Images
import banner from "media/mobile-application/hero/mobile.png";
import smallBannerImage from "media/mobile-application/smallBanner.png";
import portfolioOne from "media/mobile-application/portfolios/one.png";
import portfolioTwo from "media/mobile-application/portfolios/two.png";
import portfolioThree from "media/mobile-application/portfolios/three.png";
import portfolioFour from "media/mobile-application/portfolios/four.png";
import portfolioFive from "media/mobile-application/portfolios/five.png";

const page = () => {
    // Array for Hero Component Props
    const hero = {
        page: "mobileApplication",
        subtitle: "Mobile App Design Company",
        title: "Experience Building A Mobile App At Its Finest",
        desc: "Web Design Hub is leading the way in mobile app design and development innovation. Our expertise extends beyond  design, and we provide mobile app developers with the essential resources, enabling them to build efficient mobile applications for businesses.  ",
        points: ["Multi Device Integration", "Scalability", "Easy Monetization", "Interactivity"],
        banner,
        bg: "__mobileApplicationHeroGradientBg",
        isForm: true,
        btnBg: "bg-[#7AAF60]",
        btnBorder: "border-[#7AAF60]",
        btnHover: "hover:bg-[#7AAF60]"
    };
    // Array for Small Banner Component Props
    const smallbanner = {
        page: "mobileApplication",
        title: "Allow us to assist you in developing a web presence.",
        desc: "Our web development team is here to assist you in reaching your business goals through the creation of an interesting and functional website.",
        img: smallBannerImage,
        bgColor: "__mobileApplicationHeroGradientBg",
        btnBg: "bg-[#7AAF60]",
        btnBorder: "border-[#7AAF60]",
        btnHover: "hover:bg-[#7AAF60]",
        theme: "dark"
    };
    // Array for Portfolios Component Props
    const portfolios = {
        title: "Creativity Knows No Bounds At Our Mobile App Agency",
        desc: "At Web Design Hub, our expertise shine through custom layouts and interactive designs, ensuring a superlative user \n experience with our responsive mobile app designs.",
        images: [portfolioOne, portfolioTwo, portfolioThree, portfolioFour, portfolioFive],
        theme: "light"
    };
    // Array for Packages Component Props
    const packages = {
        subtitle: "Reasonable Prices",
        title: "That Fits Your Budget",
        desc: "With affordable prices, we have exclusive digital art and design facilities, customized for your individual needs",
        key: 2
    }
    return (
        <>
            <main>
                <Header />
                <Hero content={hero} />
                <Services />
                <SmallBanner content={smallbanner} />
                <Portfolios content={portfolios} />
                <Packages content={packages} />
                <Reviews />
                <Weare />
                <Contact />
                <Letstalk />
                <Footer />
            </main>
        </>
    );
}

export default page;