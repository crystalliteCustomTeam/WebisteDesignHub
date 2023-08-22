// Import Page Components
import Hero from "@/components/hero/hero";
import Services from "@/components/motion-graphics/services/services";
import SmallBanner from "@/components/smallbanner/smallbanner";
import Portfolios from "@/components/portfolios/portfolios";
import Letstalk from "@/components/letstalk/letstalk";
import Reviews from "@/components/reviews/reviews";
import Weare from "@/components/weare/weare";
import Contact from "@/components/contact/contact";
// Import Images
import smallBannerImage from "media/motion-graphics/smallBanner.png";
import portfolioOne from "media/motion-graphics/portfolios/one.png";
import portfolioTwo from "media/motion-graphics/portfolios/two.png";
import portfolioThree from "media/motion-graphics/portfolios/three.png";
import portfolioFour from "media/motion-graphics/portfolios/four.png";
import portfolioFive from "media/motion-graphics/portfolios/five.png";

const Page = () => {
    // Array for Hero Component Props
    const hero = {
        page: "motionGraphics",
        subtitle: "Animation Expert",
        title: "Master of Animation Producing Engaging",
        desc: "The talented minds and cutting-edge tools at Urban Web Designers allow us to bring any content to life with captivating animations. We create commercially viable animations. High-definition, eye-catching, interactive 3D visuals",
        points: ["High Resolution", "Engaging", "Interactive", "3D graphics"],
        bg: "bg-[#0B2218]",
        video: "videos/motionGraphics.mp4",
        isForm: true,
        btnBg: "bg-[#195A47]",
        btnBorder: "border-[#195A47]",
        btnHover: "hover:bg-[#195A47]"
    };
    // Array for Small Banner Component Props
    const smallbanner = {
        page: "ecommerce",
        title: "Allow us to assist you in developing a web presence.",
        desc: "Our web development team is here to assist you in reaching your business goals through the creation of an interesting and functional website.",
        img: smallBannerImage,
        bgColor: "bg-[#0B2218]",
        btnBg: "bg-[#195A47]",
        btnBorder: "border-[#195A47]",
        btnHover: "hover:bg-[#195A47]",
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
            <Letstalk />
            <Reviews />
            <Weare />
            <Contact />
        </>
    );
}

export default Page;