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
import Script from "next/script";
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
        title: "Logo Design Company That's Designing Brand’s Signature",
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
        title: "Let us develop a responsive website to help you attract more visitors",
        desc: "Our professional web development team is at your service, dedicated to design and develop dynamic websites that urges visitors to take your desired action on the website.",
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
                value: "2d",
                label: "2D Logos",
                images: [
                    "/logo-design/services/2d/1.png",
                    "/logo-design/services/2d/2.jpg",
                    "/logo-design/services/2d/3.jpg",
                    "/logo-design/services/2d/4.jpg",
                    "/logo-design/services/2d/5.jpg",
                    "/logo-design/services/2d/6.jpg",
                ],
            },
            {
                value: "3d",
                label: "3D Logos",
                images: [
                    "/logo-design/services/3d/1.png",
                    "/logo-design/services/3d/2.jpg",
                    "/logo-design/services/3d/3.png",
                    "/logo-design/services/3d/4.png",
                    "/logo-design/services/3d/5.png",
                    "/logo-design/services/3d/6.png",
                ],
            },
            {
                value: "emblem",
                label: "Emblem Logos",
                images: [
                    "/logo-design/services/emblem/1.jpg",
                    "/logo-design/services/emblem/2.jpg",
                    "/logo-design/services/emblem/3.png",
                    "/logo-design/services/emblem/4.jpg",
                    "/logo-design/services/emblem/5.png",
                    "/logo-design/services/emblem/6.png",
                ],
            },
            {
                value: "illustrative",
                label: "Illustrative Logos",
                images: [
                    "/logo-design/services/illustrative/1.jpg",
                    "/logo-design/services/illustrative/2.jpg",
                    "/logo-design/services/illustrative/3.jpg",
                    "/logo-design/services/illustrative/4.png",
                    "/logo-design/services/illustrative/5.png",
                    "/logo-design/services/illustrative/6.jpg",
                ],
            },
            {
                value: "letter",
                label: "Letter Logos",
                images: [
                    "/logo-design/services/letter/1.jpg",
                    "/logo-design/services/letter/2.jpg",
                    "/logo-design/services/letter/3.png",
                    "/logo-design/services/letter/4.png",
                    "/logo-design/services/letter/5.jpg",
                    "/logo-design/services/letter/6.png",
                ],
            },
            {
                value: "mascot",
                label: "Mascot Logos",
                images: [
                    "/logo-design/services/mascot/1.png",
                    "/logo-design/services/mascot/2.jpg",
                    "/logo-design/services/mascot/3.jpg",
                    "/logo-design/services/mascot/4.png",
                    "/logo-design/services/mascot/5.jpg",
                    "/logo-design/services/mascot/6.png",
                ],
            },
            {
                value: "wordmark",
                label: "Wordmark Logos",
                images: [
                    "/logo-design/services/wordmark/1.png",
                    "/logo-design/services/wordmark/2.jpg",
                    "/logo-design/services/wordmark/3.png",
                    "/logo-design/services/wordmark/4.png",
                    "/logo-design/services/wordmark/5.png",
                    "/logo-design/services/wordmark/6.png",
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
        subtitle: "Logo Design Packages",
        title: "Gain the Upper Hand with Our Creative Logo Designs",
        desc: "Our top logo design service packages are thoughtfully customized to match your brand's voice and budget, giving you a competitive edge in the market.",
        key: 0,
        name: "logo-design"
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
                <Services content={services} />
                <SmallBanner content={smallbanner} />
                <Portfolios content={portfolios} />
                <Packages content={packages} />
                <Combo />
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
                            "serviceType": "Logo Design Company",
                            "provider": {
                                "@type": "Organization",
                                "name": "WebDesignHub",
                                "telephone": "+1-855 888-8399",
                                "logo": "https://www.webdesignhub.co/_next/static/media/logo.0278bd76.svg",
                                "url": "https://webdesignhub.co/logo-design-company",
                                "sameAs": [
                                    "https://www.facebook.com/webdesignhubofficial",
                                    "https://twitter.com/webdesignhub_",
                                    "https://www.instagram.com/webdesignhubofficial"
                                ]
                            },
                            "description": "WebDesignHub specializes in professional logo design services, creating distinct and memorable brand identities that resonate with audiences and stand out in the market.",
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