// Import Page Components
import Hero from "@/components/hero/hero";
import Services from "@/components/mobile-application/services/services";
import SmallBanner from "@/components/smallbanner/smallbanner";
import Portfolios from "@/components/portfolios/portfolios";
import Letstalk from "@/components/letstalk/letstalk";
import Reviews from "@/components/reviews/reviews";
import Weare from "@/components/weare/weare";
import Contact from "@/components/contact/contact";
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
        subtitle: "Software Engineering and Design",
        title: "Leaders in Mobile App Creation",
        desc: "By providing developers with the tools they need, Urban Web Designers helps businesses and individuals find unique and effective mobile app solutions.",
        points: ["Easily Navigable", "Rapidly", "Converging", "Interactive"],
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
        title: "See it. You Must Have Faith",
        desc: "Urban Web Designers counts itself incredibly fortunate to have worked with such wonderful customers and provided \n them with excellent service.",
        images: [portfolioOne, portfolioTwo, portfolioThree, portfolioFour, portfolioFive],
        theme: "light"
    };
    return (
        <>
            <Hero content={hero} />
            <Services />
            <SmallBanner content={smallbanner} />
            <Portfolios content={portfolios} />
            <Letstalk />
            <Reviews />
            <Weare />
            <Contact />
        </>
    );
}

export default page;