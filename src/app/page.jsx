// Import Page Components
import Hero from "@/components/hero/hero";
import Approach from "@/components/home/approach/approach";
import SmallBanner from "@/components/smallbanner/smallbanner";
import Services from "@/components/services/services";
import Portfolios from "@/components/porfolios/porfolios";
import Reviews from "@/components/reviews/reviews";
import Weare from "@/components/weare/weare";
import Contact from "@/components/contact/contact";
import Letstalk from "@/components/letstalk/letstalk";
// Import Images
import banner from "media/home/hero/chair.png";
import bannerIconOne from "media/home/hero/iconOne.png";
import bannerIconTwo from "media/home/hero/iconTwo.png";
import bannerIconThree from "media/home/hero/iconThree.png";
import smallBannerImage from "media/home/smallBanner.png";
import serviceTabOne from "media/home/services/serviceTabOne.png";
import portfolioOne from "media/home/portfolios/one.png";
import portfolioTwo from "media/home/portfolios/two.png";
import portfolioThree from "media/home/portfolios/three.png";
import portfolioFour from "media/home/portfolios/four.png";
import portfolioFive from "media/home/portfolios/five.png";

const Page = () => {
    // Array for Hero Component Props
    const hero = {
        page: "home",
        subtitle: "A Place Where",
        title: "100% Original and \n Creative Websites",
        desc: "Urban Web Designers works with a team of enthusiastic designers and \n developers who are dedicated professionals in delivering the best \n websites for any business. Our websites are:",
        points: ["Customized", "Optimized", "Result Driven", "Measurable"],
        banner,
        icons: [bannerIconOne, bannerIconTwo, bannerIconThree]
    };
    // Array for Small Banner Component Props
    const smallbanner = {
        page: "home",
        title: "Allow us to assist you in \n developing a web presence.",
        desc: "Our web development team is here to assist you in reaching your business goals \n through the creation of an interesting and functional website.",
        img: smallBannerImage
    };
    // Array for Services Component Props
    const services = {
        title: "SERVICES WE PROVIDE",
        desc: "Urban Web Designers works with a team of enthusiastic designers and developers who \n  are dedicated professionals in delivering the best websites for any business. Our \n websites are:",
        tabs: [
            {
                value: "logoDesign",
                label: "logo design",
                image: serviceTabOne,
            },
            {
                value: "websiteDevelopment",
                label: "website development",
                image: serviceTabOne,
            },
            {
                value: "digitalMarketing",
                label: "digital marketing",
                image: serviceTabOne,
            },
            {
                value: "seoServices",
                label: "seo services",
                image: serviceTabOne,
            },
            {
                value: "applicationDesign",
                label: "application design",
                image: serviceTabOne,
            },
            {
                value: "creativeCopywriting",
                label: "creative copywriting",
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
            <Approach />
            <SmallBanner content={smallbanner} />
            <Services content={services} />
            <Portfolios content={portfolios} />
            <Reviews />
            <Weare />
            <Contact />
            <Letstalk />
        </>
    );
}

export default Page;