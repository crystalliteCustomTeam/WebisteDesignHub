// Import Page Components
import Hero from "@/components/hero/hero";
import Services from "@/components/marketing-collateral/services/services";
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
import banner from "media/marketing-collateral/hero/stationary.png";
import smallBannerImage from "media/marketing-collateral/smallBanner.png";
import portfolioOne from "media/marketing-collateral/portfolios/one.png";
import portfolioTwo from "media/marketing-collateral/portfolios/two.png";
import portfolioThree from "media/marketing-collateral/portfolios/three.png";
import portfolioFour from "media/marketing-collateral/portfolios/four.png";
import portfolioFive from "media/marketing-collateral/portfolios/five.png";

const Page = () => {
    // Array for Hero Component Props
    const hero = {
        page: "marketingCollateral",
        subtitle: "Top Marketing Collateral Company",
        title: "Hire Marketing Collateral Company For Superior Engagement",
        desc: "Looking for experts to enhance your content and reach your audience effectively? At Web Design Hub, our team consists of top-notch content writers and marketers who can create engaging content to grow and retain your customer base with confidence.",
        points: ["Measurable Results", "Enhanced Brand Image", "Save Time & Resources", "Comprehensive Solutions"],
        banner,
        bg: "bg-[url('../../public/marketing-collateral/hero/bg.png')] bg-cover bg-no-repeat bg-left-top",
        isForm: true,
        btnBg: "bg-[#223C5A]",
        btnBorder: "border-[#223C5A]",
        btnHover: "hover:bg-[#223C5A]"
    };
    // Array for Small Banner Component Props
    const smallbanner = {
        page: "marketingCollateral",
        title: "Hire Us For Powerful Marketing Collateral Service",
        desc: "With the help of effective Marketing Collateral Services at Web Design Hub, start your digital adventure. ",
        img: smallBannerImage,
        bgColor: "__marketingCollateralHeroGradientBg",
        btnBg: "bg-[#223C5A]",
        btnBorder: "border-[#223C5A]",
        btnHover: "hover:bg-[#223C5A]",
        theme: "dark"
    };
    // Array for Portfolios Component Props
    const portfolios = {
        title: "Boosting Brands with Creative Hands",
        desc: "We empower brands to reach new heights. Our marketing experts design custom marketing collateral \n solutions that captivates your target and boosts conversions. ",
        images: [portfolioOne, portfolioTwo, portfolioThree, portfolioFour, portfolioFive],
        theme: "light"
    };
    // Array for Packages Component Props
    const packages = {
        subtitle: "Reasonable Prices",
        title: "That Fits Your Budget",
        desc: "With affordable prices, we have exclusive digital art and design facilities, customized for your individual needs",
        key: 3,
        name: "Marketing Collateral"
    }
    // Array for Letstalk Component Props
    const letstalk = {
        title: "Let’s Talk",
        desc: "Connect with us and let our professional copywriters help you to achieve your business goals without facing any hassles."
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
                            "serviceType": "Marketing Collateral Company",
                            "provider": {
                                "@type": "Organization",
                                "name": "WebDesignHub",
                                "telephone": "+1-855 888-8399",
                                "logo": "https://www.webdesignhub.co/_next/static/media/logo.0278bd76.svg",
                                "url": "https://webdesignhub.co/marketing-collateral-company",
                                "sameAs": [
                                    "https://www.facebook.com/webdesignhubofficial",
                                    "https://twitter.com/webdesignhub_",
                                    "https://www.instagram.com/webdesignhubofficial"
                                ]
                            },
                            "description": "WebDesignHub specializes in creating compelling marketing collateral that effectively communicates your brand's message, engages audiences, and supports sales efforts.",
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