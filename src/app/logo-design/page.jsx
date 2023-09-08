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
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
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
        subtitle: "Custom Logo Designs",
        title: "Logo Design Company That's Designing & Creating Your Brand’s",
        desc: "At Web Design Hub, we employ the best logo designers and illustrators to make creative logos for big companies and small businesses. As an affordable logo design company, we promise to create a logo that delivers impressive outcomes for your brand.",
        points: ["Visual Identity", "Brand Recognition", "Increased Credibility", "Brand Identification"],
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
        title: "Our Logo Design Agency Shines \n Across All Design Territories",
        desc: "Our logo designers offer a diverse range of premium design solutions to enhance your brand's \n visual identity. We create logos that capture your brand's unique spirit and also grab \n the attention of your target audience.",
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
        title: "A Glimpse into Our Corporate Logo Designs",
        desc: "At Web Design Hub, we are passionately devoted to achieving excellence across the spectrum of design \n including creative logo design, logo redesign, web design, and many more.",
        images: [portfolioOne, portfolioTwo, portfolioThree, portfolioFour, portfolioFive],
        theme: "light"
    };
    // Array for Packages Component Props
    const packages = {
        subtitle: "Reasonable Prices",
        title: "That Fits Your Budget",
        desc: "With affordable prices, we have exclusive digital art and design facilities, customized for your individual needs",
        key: 0
    }
    return (
        <>
            <main>
                <Header />
                <Hero content={hero} />
                <Services content={services} />
                <SmallBanner content={smallbanner} />
                <Portfolios content={portfolios} />
                <Packages content={packages} />
                <Combo />
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