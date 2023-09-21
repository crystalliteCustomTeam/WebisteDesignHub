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
import Script from "next/script";
// Import Images
import banner from "media/ecommerce/hero/store.png";
import smallBannerImage from "media/ecommerce/smallBanner.png";
import portfolioOne from "media/ecommerce/portfolios/one.png";
import portfolioTwo from "media/ecommerce/portfolios/two.png";
import portfolioThree from "media/ecommerce/portfolios/three.png";
import portfolioFour from "media/ecommerce/portfolios/four.png";
import portfolioFive from "media/ecommerce/portfolios/five.png";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

const Page = () => {
    // Array for Hero Component Props
    const hero = {
        page: "ecommerce",
        subtitle: "Ecommerce Website Design Company",
        title: "Revamping Retail Space With Ecommerce Solutions",
        desc: "As an Ecommerce Solutions Company, we excel in revamping websites across various ecommerce platforms, crafting tailored solutions that drive success on Shopify, WooCommerce, Magento, and more.",
        points: ["Website Design", "Analytics & Tracking", "Conversion Optimization ", "Website Development"],
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
        title: "The Masters of eCommerce Website Design",
        desc: "At Web Design Hub,we design ecommerce websites that not only look fantastic but also generate results that distinguish your company in the market.",
        img: smallBannerImage,
        bgColor: "__ecommerceHeroGradientBg",
        btnBg: "bg-[#005368]",
        btnBorder: "border-[#005368]",
        btnHover: "hover:bg-[#005368]",
        theme: "dark"
    };
    // Array for Portfolios Component Props
    const portfolios = {
        title: "Crafting Digital Storefront Dreams",
        desc: "See how we skillfully create digital stores that grab attention, turn visitors into customers. and \n also drive substantial sales growth.",
        images: [portfolioOne, portfolioTwo, portfolioThree, portfolioFour, portfolioFive],
        theme: "light"
    };
    // Array for Packages Component Props
    const packages = {
        subtitle: "Affordable Packages",
        title: "Finding Value in Every Dollar",
        desc: "our eCommerce solutions company, we prioritize affordability, and delivering top-quality services that won't strain your budget. Experience excellence without compromise.",
        key: 6,
        name: "E-Commerce"
    }
    // Array for Letstalk Component Props
    const letstalk = {
        title: "Design Consultation",
        desc: "Contact us for a free consultation, and let's design your captivating logo, website, and mobile app together!"
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
                <Letstalk content={letstalk} />
                <Footer />
                <Script id="general-schema" type="application/ld+json">
                    {`
                        {
                            "@context": "http://schema.org",
                            "@type": "Service",
                            "serviceType": "eCommerce Website Design Company",
                            "provider": {
                                "@type": "Organization",
                                "name": "WebDesignHub",
                                "telephone": "+1-855 888-8399",
                                "logo": "https://www.webdesignhub.co/_next/static/media/logo.0278bd76.svg",
                                "url": "https://webdesignhub.co/ecommerce-website-design-company",
                                "sameAs": [
                                    "https://www.facebook.com/webdesignhubofficial",
                                    "https://twitter.com/webdesignhub_",
                                    "https://www.instagram.com/webdesignhubofficial"
                                ]
                            },
                            "description": "WebDesignHub offers specialized eCommerce website design services, crafting intuitive and responsive online stores that maximize conversions and enhance user experience.",
                            "areaServed": {
                                "@type": "Country",
                                "name": "US"
                            },
                            "image": "https://www.webdesignhub.co/_next/static/media/logo.0278bd76.svg",
                            "brand": "WebDesignHub",
                            "aggregateRating": {
                                "@type": "AggregateRating",
                                "ratingValue": "5",
                                "reviewCount": "70"
                            }
                        }
                    `}
                </Script>
            </main>
        </>
    );
}

export default Page;