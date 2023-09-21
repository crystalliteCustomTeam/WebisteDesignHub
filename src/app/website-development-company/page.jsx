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
import Script from "next/script";
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
        title: "100% Custom Websites By Top Website Development Company",
        desc: "Tired of generic websites that don't make an impact? Experience the difference with our top design and website development company where we uniquely represent your brand and drive results.",
        points: ["Optimized Performance", "Responsive Design", "Brand Consistency", "Search Engine Visibility"],
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
        title: "Let us develop a responsive website to help you attract more visitors",
        desc: "Our professional web development team is at your service, dedicated to design and develop dynamic websites that urges visitors to take your desired action on the website.",
        img: smallBannerImage,
        bgColor: "bg-[#0f1013]",
        btnBg: "bg-[#283C3C]",
        btnBorder: "border-[#283C3C]",
        btnHover: "hover:bg-[#283C3C]",
        theme: "dark"
    };
    // Array for Portfolios Component Props
    const portfolios = {
        title: "Reliability Guaranteed At Our Web Development Company",
        desc: "Take a look at our web design and development projects. They're like examples of our work, showing how we bring ideas to life on the internet. ",
        images: [portfolioOne, portfolioTwo, portfolioThree, portfolioFour, portfolioFive],
        theme: "light"
    };
    // Array for Packages Component Props
    const packages = {
        subtitle: "Web Development Packages",
        title: "Budget-Friendly Website Development Company",
        desc: "Our commitment to affordability means you can have a stunning, professionally designed website that perfectly suits your budget.",
        key: 2,
        name: "Website Development"
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
                            "serviceType": "Website Development Company",
                            "provider": {
                                "@type": "Organization",
                                "name": "WebDesignHub",
                                "telephone": "+1-855 888-8399",
                                "logo": "https://www.webdesignhub.co/_next/static/media/logo.0278bd76.svg",
                                "url": "https://webdesignhub.co/website-development-company",
                                "sameAs": [
                                    "https://www.facebook.com/webdesignhubofficial",
                                    "https://twitter.com/webdesignhub_",
                                    "https://www.instagram.com/webdesignhubofficial"
                                ]
                            },
                            "description": "WebDesignHub provides top-tier website development services, leveraging the latest technologies to build scalable, responsive, and user-friendly websites tailored to meet the unique needs of businesses.",
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