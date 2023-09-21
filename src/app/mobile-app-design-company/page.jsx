// Import Page Components
import Hero from "@/components/hero/hero";
import Services from "@/components/mobile-application/services/services";
import SmallBanner from "@/components/smallbanner/smallbanner";
import Portfolios from "@/components/portfolios/portfolios";
import Letstalk from "@/components/letstalk/letstalk";
import Reviews from "@/components/reviews/reviews";
import Weare from "@/components/weare/weare";
import Contact from "@/components/contact/contact";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Packages from "@/components/packages/packages";
import Script from "next/script";
// Import Images
import banner from "media/mobile-application/hero/mobile.png";
import smallBannerImage from "media/mobile-application/smallBanner.png";
import portfolioOne from "media/mobile-application/portfolios/one.png";
import portfolioTwo from "media/mobile-application/portfolios/two.png";
import portfolioThree from "media/mobile-application/portfolios/three.png";
import portfolioFour from "media/mobile-application/portfolios/four.png";
import portfolioFive from "media/mobile-application/portfolios/five.png";

const page = () => {
    // Array for Hero Component Props
    const hero = {
        page: "mobileApplication",
        subtitle: "Mobile App Design Company",
        title: "Experience Building A Mobile App At Its Finest",
        desc: "Web Design Hub is leading the way in mobile app design and development innovation. Our expertise extends beyond  design, and we provide mobile app developers with the essential resources, enabling them to build efficient mobile applications for businesses.",
        points: ["Multi Device Integration", "Scalability", "Easy Monetization", "Interactivity"],
        banner,
        bg: "__mobileApplicationHeroGradientBg",
        isForm: true,
        btnBg: "bg-[#7AAF60]",
        btnBorder: "border-[#7AAF60]",
        btnHover: "hover:bg-[#7AAF60]"
    };
    // Array for Small Banner Component Props
    const smallbanner = {
        page: "mobileApplication",
        title: "Let us develop a responsive website to help you attract more visitors",
        desc: "Our professional web development team is at your service, dedicated to design and develop dynamic websites that urges visitors to take your desired action on the website.",
        img: smallBannerImage,
        bgColor: "__mobileApplicationHeroGradientBg",
        btnBg: "bg-[#7AAF60]",
        btnBorder: "border-[#7AAF60]",
        btnHover: "hover:bg-[#7AAF60]",
        theme: "dark"
    };
    // Array for Portfolios Component Props
    const portfolios = {
        title: "Creativity Knows No Bounds At Our Mobile App Agency",
        desc: "At Web Design Hub, our expertise shine through custom layouts and interactive designs, ensuring a superlative user \n experience with our responsive mobile app designs.",
        images: [portfolioOne, portfolioTwo, portfolioThree, portfolioFour, portfolioFive],
        theme: "light"
    };
    // Array for Packages Component Props
    const packages = {
        subtitle: "Reasonable Prices",
        title: "That Fits Your Budget",
        desc: "With affordable prices, we have exclusive digital art and design facilities, customized for your individual needs",
        key: 2,
        name: "Mobile Application"
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
                <Letstalk content={letstalk} />
                <Reviews />
                <Weare />
                <Contact />
                <Footer />
                <Script id="general-schema" type="application/ld+json">
                    {`
                        {
                            "@context": "http://schema.org",
                            "@type": "Service",
                            "serviceType": "Mobile App Design Company",
                            "provider": {
                                "@type": "Organization",
                                "name": "WebDesignHub",
                                "telephone": "+1-855 888-8399",
                                "logo": "https://www.webdesignhub.co/_next/static/media/logo.0278bd76.svg",
                                "url": "https://webdesignhub.co/mobile-app-design-company",
                                "sameAs": [
                                    "https://www.facebook.com/webdesignhubofficial",
                                    "https://twitter.com/webdesignhub_",
                                    "https://www.instagram.com/webdesignhubofficial"
                                ]
                            },
                            "description": "WebDesignHub is at the forefront of mobile app design, creating innovative and user-centric app interfaces that foster engagement and elevate user experience.",
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

export default page;