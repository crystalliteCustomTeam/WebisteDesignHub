// Import Page Components
import Hero from "@/components/hero/hero";
import Services from "@/components/website-development/services/services";
import SmallBanner from "@/components/smallbanner/smallbanner";
import Packages from "@/components/packages/packages";
import Portfolios from "@/components/portfolios/portfolios";
import Reviews from "@/components/reviews/reviews";
import Weare from "@/components/weare/weare";
import Contact from "@/components/contact/contact";
import Letstalk from "@/components/letstalk/letstalk";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
// Import Images
import smallBannerImage from "media/website-development/smallBanner.png";
import portfolioOne from "media/logo-design/portfolios/one.png";
import portfolioTwo from "media/logo-design/portfolios/two.png";
import portfolioThree from "media/logo-design/portfolios/three.png";
import portfolioFour from "media/logo-design/portfolios/four.png";
import portfolioFive from "media/logo-design/portfolios/five.png";

const Page = () => {
    // Array for Hero Component Props
    const hero = {
        page: "websiteDevelopment",
        subtitle: "Website Design & Development",
        title: "100% Original and Creative Websites",
        desc: "Urban Web Designers works with a team of enthusiastic designers and developers who are dedicated professionals in delivering the best websites for any business. Our websites are:",
        points: ["Interactive", "Mobile Friendly", "Optimized", "Responsive"],
        bg: "bg-[#0f1013]",
        video: "videos/websiteDevelopment.mp4",
        isForm: true,
        btnBg: "bg-[#283C3C]",
        btnBorder: "border-[#283C3C]",
        btnHover: "hover:bg-[#283C3C]"
    };
    // Array for Small Banner Component Props
    const smallbanner = {
        page: "websiteDevelopment",
        title: "Allow us to assist you in developing a web presence.",
        desc: "Our web development team is here to assist you in reaching your business goals through the creation of an interesting and functional website.",
        img: smallBannerImage,
        bgColor: "bg-[#0f1013]",
        btnBg: "bg-[#283C3C]",
        btnBorder: "border-[#283C3C]",
        btnHover: "hover:bg-[#283C3C]",
        theme: "dark"
    };
    // Array for Portfolios Component Props
    const portfolios = {
        title: "See it. You Must Have Faith",
        desc: "Urban Web Designers counts itself incredibly fortunate to have worked with such wonderful customers and provided \n them with excellent service.",
        images: [portfolioOne, portfolioTwo, portfolioThree, portfolioFour, portfolioFive],
        theme: "light"
    };
    // Array for Packages Component Props
    const packages = {
        subtitle: "Reasonable Prices",
        title: "That Fits Your Budget",
        desc: "With affordable prices, we have exclusive digital art and design facilities, customized for your individual needs",
        key: 6,
        name: "Website Development"
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

export default Page;