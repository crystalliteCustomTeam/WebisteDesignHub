// Import Page Components
import Hero from "@/components/hero/hero";
import Services from "@/components/marketing-collateral/services/services";
import SmallBanner from "@/components/smallbanner/smallbanner";
import Portfolios from "@/components/portfolios/portfolios";
import Letstalk from "@/components/letstalk/letstalk";
import Reviews from "@/components/reviews/reviews";
import Weare from "@/components/weare/weare";
import Contact from "@/components/contact/contact";
// Import Images
import banner from "media/marketing-collateral/hero/stationary.png";
import smallBannerImage from "media/marketing-collateral/smallBanner.png";
import portfolioOne from "media/marketing-collateral/portfolios/one.png";
import portfolioTwo from "media/marketing-collateral/portfolios/two.png";
import portfolioThree from "media/marketing-collateral/portfolios/three.png";
import portfolioFour from "media/marketing-collateral/portfolios/four.png";
import portfolioFive from "media/marketing-collateral/portfolios/five.png";

const Page = () => {
    // Array for Hero Component Props
    const hero = {
        page: "marketingCollateral",
        subtitle: "Extend The Sphere Of Influence",
        title: "Engage your customer and Generate Traffic",
        desc: "Urban Web Designers has the greatest content writers and marketers in the business, so you can count on them to create engaging material and distribute it effectively to retain and grow.",
        points: ["Personalized", "Uniquely", "Interesting", "Disseminated"],
        banner,
        bg: "bg-[url('../../public/marketing-collateral/hero/bg.png')] bg-cover bg-no-repeat bg-left-top",
        isForm: true,
        btnBg: "bg-[#223C5A]",
        btnBorder: "border-[#223C5A]",
        btnHover: "hover:bg-[#223C5A]"
    };
    // Array for Small Banner Component Props
    const smallbanner = {
        page: "marketingCollateral",
        title: "Allow us to assist you in developing a web presence.",
        desc: "Our web development team is here to assist you in reaching your business goals through the creation of an interesting and functional website.",
        img: smallBannerImage,
        bgColor: "__marketingCollateralHeroGradientBg",
        btnBg: "bg-[#223C5A]",
        btnBorder: "border-[#223C5A]",
        btnHover: "hover:bg-[#223C5A]",
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

export default Page;