// Import Page Components
import Hero from "@/components/hero/hero";
import Services from "@/components/motion-graphics/services/services";
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
        subtitle: "Experience Motion Magic With",
        title: "Top Motion Graphic Design Company",
        desc: "Our creative motion graphics designers, with a strong combination of skills and innovative equipment create attractive, profitable 3D animations that will enrich your business with success.",
        points: ["Custom Animation", "Visual Effects (VFX)", "Character Animation", "Logo Animation"],
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
        title: "power of Visual by our Motion Graphics Designers.",
        desc: "We use animation, 3D modeling, and fascinating effects to give your stories a twist of practical life. Our work captivates the audience by enduring narratives.",
        img: smallBannerImage,
        bgColor: "bg-[#0B2218]",
        btnBg: "bg-[#195A47]",
        btnBorder: "border-[#195A47]",
        btnHover: "hover:bg-[#195A47]",
        theme: "dark"
    };
    // Array for Portfolios Component Props
    const portfolios = {
        title: "We Turn Visions into Animation",
        desc: "Channeling your imagination with our expert motion graphics team,we turn your ideas into \n mesmerizing animations that captivate and convert.",
        images: [portfolioOne, portfolioTwo, portfolioThree, portfolioFour, portfolioFive],
        theme: "light"
    };
    // Array for Packages Component Props
    const packages = {
        subtitle: "Reasonable Prices",
        title: "That Fits Your Budget",
        desc: "With affordable prices, we have exclusive digital art and design facilities, customized for your individual needs",
        key: 4,
        name: "Motion Graphics"
    }
    // Array for Letstalk Component Props
    const letstalk = {
        title: "Design Consultation",
        desc: "Discuss with us and let us design motion graphics for you without facing any hassles."
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
                            "serviceType": "Motion Graphic Design Company",
                            "provider": {
                                "@type": "Organization",
                                "name": "WebDesignHub",
                                "telephone": "+1-855 888-8399",
                                "logo": "https://www.webdesignhub.co/_next/static/media/logo.0278bd76.svg",
                                "url": "https://webdesignhub.co/motion-graphic-design-company",
                                "sameAs": [
                                    "https://www.facebook.com/webdesignhubofficial",
                                    "https://twitter.com/webdesignhub_",
                                    "https://www.instagram.com/webdesignhubofficial"
                                ]
                            },
                            "description": "WebDesignHub offers cutting-edge motion graphic design services, producing captivating animations that engage, entertain, and effectively convey your brand message.",
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
                <Script id="general-schema-2" type="application/ld+json">
                    {`
                        {
                            "@context": "http://schema.org",
                            "@type": "Product",
                            "name": "Motion Graphic Design Company",
                            "description": "WebDesignHub is your cutting-edge motion graphic design company, producing captivating animations that engage, entertain, and effectively convey your brand message.",
                            "brand": {
                                "@type": "brand",
                                "name": "WebDesignHub"
                            },
                            "aggregateRating": {
                                "@type": "AggregateRating",
                                "ratingValue": "5",
                                "ratingCount": "147"
                            }
                        }
                    `}
                </Script>
            </main>
        </>
    );
}

export default Page;