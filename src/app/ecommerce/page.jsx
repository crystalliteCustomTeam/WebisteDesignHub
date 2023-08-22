// Import Page Components
import Hero from "@/components/hero/hero";
import Services from "@/components/ecommerce/services/services";
import SmallBanner from "@/components/smallbanner/smallbanner";
import Portfolios from "@/components/portfolios/portfolios";
import Packages from "@/components/packages/packages";
import Reviews from "@/components/reviews/reviews";
import Letstalk from "@/components/letstalk/letstalk";
import Weare from "@/components/weare/weare";
import Contact from "@/components/contact/contact";
// Import Images
import banner from "media/ecommerce/hero/store.png";
import smallBannerImage from "media/ecommerce/smallBanner.png";
import portfolioOne from "media/ecommerce/portfolios/one.png";
import portfolioTwo from "media/ecommerce/portfolios/two.png";
import portfolioThree from "media/ecommerce/portfolios/three.png";
import portfolioFour from "media/ecommerce/portfolios/four.png";
import portfolioFive from "media/ecommerce/portfolios/five.png";

const Page = () => {
    // Array for Hero Component Props
    const hero = {
        page: "ecommerce",
        subtitle: "Internet Business Answers",
        title: "Technology and Business Working Together",
        desc: "Business and cutting-edge technology come together in the e-commerce stores that Urban Web Designers creates. Our e-commerce platforms are rigorously tested to assure they:",
        points: ["Secure", "Reliable", "Scalable", "Mobile Friendly"],
        banner,
        bg: "__ecommerceHeroGradientBg",
        isForm: true,
        btnBg: "bg-[#005368]",
        btnBorder: "border-[#005368]",
        btnHover: "hover:bg-[#005368]"
    };
    // Array for Small Banner Component Props
    const smallbanner = {
        page: "ecommerce",
        title: "Allow us to assist you in developing a web presence.",
        desc: "Our web development team is here to assist you in reaching your business goals through the creation of an interesting and functional website.",
        img: smallBannerImage,
        bgColor: "__ecommerceHeroGradientBg",
        btnBg: "bg-[#005368]",
        btnBorder: "border-[#005368]",
        btnHover: "hover:bg-[#005368]",
        theme: "dark"
    };
    // Array for Portfolios Component Props
    const portfolios = {
        title: "See it .Believe it",
        desc: "Urban Web Designers has been extremely privileged to work with such great clients and offer them quality service. \n We have developed astounding layouts and interactive designs to give the best user experience.",
        images: [portfolioOne, portfolioTwo, portfolioThree, portfolioFour, portfolioFive],
        theme: "light"
    };
    return (
        <>
            <Hero content={hero} />
            <Services />
            <SmallBanner content={smallbanner} />
            <Portfolios content={portfolios} />
            <Packages />
            <Reviews />
            <Letstalk />
            <Weare />
            <Contact />
        </>
    );
}

export default Page;