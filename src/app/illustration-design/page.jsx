// Import Page Components
import Hero from "@/components/hero/hero";
import Services from "@/components/illustration-design/services/services";
import SmallBanner from "@/components/smallbanner/smallbanner";
import Portfolios from "@/components/portfolios/portfolios";
import Letstalk from "@/components/letstalk/letstalk";
import Reviews from "@/components/reviews/reviews";
import Weare from "@/components/weare/weare";
import Contact from "@/components/contact/contact";
// Import Images
import banner from "media/illustration-design/hero/man.png";
import smallBannerImage from "media/illustration-design/smallBanner.png";
import portfolioOne from "media/illustration-design/portfolios/one.png";
import portfolioTwo from "media/illustration-design/portfolios/two.png";
import portfolioThree from "media/illustration-design/portfolios/three.png";
import portfolioFour from "media/illustration-design/portfolios/four.png";
import portfolioFive from "media/illustration-design/portfolios/five.png";

const Page = () => {
    // Array for Hero Component Props
    const hero = {
        page: "illustrationDesign",
        subtitle: "Supplier of Digital Illustrationsr",
        title: "Bringing Concepts to Fruition",
        desc: "We make hard-to-grasp concepts and material more interesting and accessible through clear visual representations. At Urban Web Designers, our goal is to create visual representations of concepts that complement the written material for which they were created.",
        points: ["Specially original", "Imaginatively", "Bursting with life", "Utterly original"],
        isForm: true,
        banner,
        bg: "bg-[url('../../public/illustration-design/hero/bg.png')] bg-cover bg-no-repeat bg-left-top",
        btnBg: "bg-[#A4637A]",
        btnBorder: "border-[#A4637A]",
        btnHover: "hover:bg-[#A4637A]"
    };
    // Array for Small Banner Component Props
    const smallbanner = {
        page: "ecommerce",
        title: "Allow us to assist you in developing a web presence.",
        desc: "Our web development team is here to assist you in reaching your business goals through the creation of an interesting and functional website.",
        img: smallBannerImage,
        bgColor: "bg-[#241C1B] lg:bg-[url('../../public/illustration-design/smallBannerClip.png')] bg-contain bg-no-repeat bg-right-top",
        btnBg: "bg-[#A4637A]",
        btnBorder: "border-[#A4637A]",
        btnHover: "hover:bg-[#A4637A]",
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