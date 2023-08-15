// Import Page Components
import Hero from "@/components/hero/hero";
import SmallBanner from "@/components/smallbanner/smallbanner";
import Services from "@/components/services/services";
import Portfolios from "@/components/porfolios/porfolios";
import Reviews from "@/components/reviews/reviews";
import Weare from "@/components/weare/weare";
import Contact from "@/components/contact/contact";
import Letstalk from "@/components/letstalk/letstalk";
import Packages from "@/components/packages/packages";
// Import Images
import banner from "media/logo-design/hero/screen.png";
import bannerIconOne from "media/logo-design/hero/iconOne.png";
import bannerIconTwo from "media/logo-design/hero/iconTwo.png";
import bannerIconThree from "media/logo-design/hero/iconThree.png";
import smallBannerImage from "media/logo-design/smallBanner.png";
import serviceTabOne from "media/logo-design/services/serviceTabOne.png";
import portfolioOne from "media/logo-design/portfolios/one.png";
import portfolioTwo from "media/logo-design/portfolios/two.png";
import portfolioThree from "media/logo-design/portfolios/three.png";
import portfolioFour from "media/logo-design/portfolios/four.png";
import portfolioFive from "media/logo-design/portfolios/five.png";

const Page = () => {
    // Array for Hero Component Props
    const hero = {
        page: "logoDesign",
        subtitle: "Distinctive Logos",
        title: "Crafting Your Vision \n into Memorable Icons",
        desc: "Are you looking to make a lasting impression with your brand? \n Our logo design services blend creativity and strategy to create \n powerful visual identities that resonate with your audience.",
        points: ["Brand Recognition", "Brand Identity", "Brand Loyalty", "Competitive Edge"],
        banner,
        icons: [bannerIconOne, bannerIconTwo, bannerIconThree]
    };
    // Array for Small Banner Component Props
    const smallbanner = {
        page: "logoDesign",
        title: "Allow us to assist you in \n developing a web presence.",
        desc: "Our web development team is here to assist you in reaching your business goals through the creation of an interesting and functional website.",
        img: smallBannerImage
    };
    // Array for Services Component Props
    const services = {
        title: "Our Approach",
        desc: "Urban Web Designers works with a team of enthusiastic designers and developers who \n  are dedicated professionals in delivering the best websites for any business. Our \n websites are:",
        tabs: [
            {
                value: "abstractLogoMarks",
                label: "abstract logo marks",
                image: serviceTabOne,
            },
            {
                value: "mascotLogos",
                label: "mascot logos",
                image: serviceTabOne,
            },
            {
                value: "combinationLogos",
                label: "combination logos",
                image: serviceTabOne,
            },
            {
                value: "emblemLogos",
                label: "emblem logos",
                image: serviceTabOne,
            },
            {
                value: "lettermarksLogos",
                label: "lettermarks logos",
                image: serviceTabOne,
            }
        ]
    };
    // Array for Portfolios Component Props
    const portfolios = {
        title: "See it. You Must Have Faith",
        desc: "Urban Web Designers counts itself incredibly fortunate to have worked with such wonderful customers and provided \n them with excellent service.",
        images: [portfolioOne, portfolioTwo, portfolioThree, portfolioFour, portfolioFive]
    };
    return (
        <>
            <Hero content={hero} />
            <Services content={services} />
            <SmallBanner content={smallbanner} />
            <Packages />
            <Portfolios content={portfolios} />
            <Letstalk />
            <Reviews />
            <Weare />
            <Contact />
        </>
    );
}

export default Page;