// Import Page Components
import Hero from "@/components/hero/hero";
import SmallBanner from "@/components/smallbanner/smallbanner";
import Services from "@/components/services/services";
import Portfolios from "@/components/portfolios/portfolios";
import Reviews from "@/components/reviews/reviews";
import Weare from "@/components/weare/weare";
import Contact from "@/components/contact/contact";
import Letstalk from "@/components/letstalk/letstalk";
import Packages from "@/components/packages/packages";
import Combo from "@/components/logo-design/combo/combo";
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
        title: "Crafting Your Vision into Memorable Icons",
        desc: "Are you looking to make a lasting impression with your brand? Our logo design services blend creativity and strategy to create powerful visual identities that resonate with your audience.",
        points: ["Brand Recognition", "Brand Identity", "Brand Loyalty", "Competitive Edge"],
        banner,
        icons: [bannerIconOne, bannerIconTwo, bannerIconThree],
        bg: "__logoDesignHeroGradientBg",
        btnBg: "bg-[#7598F2]",
        btnBorder: "border-[#7598F2]",
        btnHover: "hover:bg-[#7598F2]"
    };
    // Array for Small Banner Component Props
    const smallbanner = {
        page: "logoDesign",
        title: "Allow us to assist you in developing a web presence.",
        desc: "Our web development team is here to assist you in reaching your business goals through the creation of an interesting and functional website.",
        img: smallBannerImage,
        bgColor: "__logoDesignHeroGradientBg",
        btnBg: "bg-[#7598F2]",
        btnBorder: "border-[#7598F2]",
        btnHover: "hover:bg-[#7598F2]",
        theme: "dark"
    };
    // Array for Services Component Props
    const services = {
        title: "SERVICES WE PROVIDE",
        desc: "Urban Web Designers works with a team of enthusiastic designers and developers who \n  are dedicated professionals in delivering the best websites for any business. Our \n websites are:",
        btnBg: "bg-[#7F6CC7]",
        btnBorder: "border-[#7F6CC7]",
        btnHover: "hover:bg-[#7F6CC7]",
        btnColor: "text-black",
        tabs: [
            {
                value: "logoDesign",
                label: "logo design",
                images: [
                    "https://www.logodesignscenter.com/images/sample1.jpg",
                    "https://www.logodesignscenter.com/images/sample2.jpg",
                    "https://www.logodesignscenter.com/images/sample3.jpg",
                    "https://www.logodesignscenter.com/images/sample%204.jpg",
                    "https://www.logodesignscenter.com/images/sample5.jpg",
                    "https://www.logodesignscenter.com/images/sample6.jpg"
                ],
            },
            {
                value: "websiteDevelopment",
                label: "website development",
                images: [
                    "https://www.logodesignscenter.com/images/sample1.jpg",
                    "https://www.logodesignscenter.com/images/sample2.jpg",
                    "https://www.logodesignscenter.com/images/sample3.jpg",
                    "https://www.logodesignscenter.com/images/sample%204.jpg",
                    "https://www.logodesignscenter.com/images/sample5.jpg",
                    "https://www.logodesignscenter.com/images/sample6.jpg"
                ],
            },
            {
                value: "digitalMarketing",
                label: "digital marketing",
                images: [
                    "https://www.logodesignscenter.com/images/sample1.jpg",
                    "https://www.logodesignscenter.com/images/sample2.jpg",
                    "https://www.logodesignscenter.com/images/sample3.jpg",
                    "https://www.logodesignscenter.com/images/sample%204.jpg",
                    "https://www.logodesignscenter.com/images/sample5.jpg",
                    "https://www.logodesignscenter.com/images/sample6.jpg"
                ],
            },
            {
                value: "seoServices",
                label: "seo services",
                images: [
                    "https://www.logodesignscenter.com/images/sample1.jpg",
                    "https://www.logodesignscenter.com/images/sample2.jpg",
                    "https://www.logodesignscenter.com/images/sample3.jpg",
                    "https://www.logodesignscenter.com/images/sample%204.jpg",
                    "https://www.logodesignscenter.com/images/sample5.jpg",
                    "https://www.logodesignscenter.com/images/sample6.jpg"
                ],
            },
            {
                value: "applicationDesign",
                label: "application design",
                images: [
                    "https://www.logodesignscenter.com/images/sample1.jpg",
                    "https://www.logodesignscenter.com/images/sample2.jpg",
                    "https://www.logodesignscenter.com/images/sample3.jpg",
                    "https://www.logodesignscenter.com/images/sample%204.jpg",
                    "https://www.logodesignscenter.com/images/sample5.jpg",
                    "https://www.logodesignscenter.com/images/sample6.jpg"
                ],
            },
            {
                value: "creativeCopywriting",
                label: "creative copywriting",
                images: [
                    "https://www.logodesignscenter.com/images/sample1.jpg",
                    "https://www.logodesignscenter.com/images/sample2.jpg",
                    "https://www.logodesignscenter.com/images/sample3.jpg",
                    "https://www.logodesignscenter.com/images/sample%204.jpg",
                    "https://www.logodesignscenter.com/images/sample5.jpg",
                    "https://www.logodesignscenter.com/images/sample6.jpg"
                ],
            }
        ]
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
            <Services content={services} />
            <SmallBanner content={smallbanner} />
            <Packages />
            <Portfolios content={portfolios} />
            <Combo />
            <Letstalk />
            <Reviews />
            <Weare />
            <Contact />
        </>
    );
}

export default Page;