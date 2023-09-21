// Import Page Components
import Hero from "@/components/hero/hero";
import Services from "@/components/digital-marketing/services/services";
import SmallBanner from "@/components/smallbanner/smallbanner";
import Steps from "@/components/digital-marketing/steps/steps";
import Reviews from "@/components/reviews/reviews";
import Weare from "@/components/weare/weare";
import Contact from "@/components/contact/contact";
import Letstalk from "@/components/letstalk/letstalk";
import Packages from "@/components/packages/packages";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
// Import Images
import banner from "media/digital-marketing/hero/hand.png";
import smallBannerImage from "media/digital-marketing/smallBanner.png";
import Script from "next/script";

const Page = () => {
    // Array for Hero Component Props
    const hero = {
        page: "digitalMarketing",
        subtitle: "Hire Top Digital Marketing Company",
        title: "Achieve Maximum ROI in Just 30 Days",
        desc: "Are you looking to see actual, noticeable results with marketing in no time? That's our specialty at top digital marketing company. We design smart campaigns using creative thinking and accurate data to make your brand more visible online. Our services include;",
        points: ["SEO Content Marketing", "Pay Per Click Ads", "Social Media Marketing", "Conversion Rate"],
        banner,
        bg: "__digitalMarketingHeroGradientBg",
        isForm: true,
        btnBg: "bg-[#8A6EA5]",
        btnBorder: "border-[#8A6EA5]",
        btnHover: "hover:bg-[#8A6EA5]"
    };
    // Array for Small Banner Component Props
    const smallbanner = {
        page: "digitalMarketing",
        title: "Get Noticed Online Our Creative Digital Marketing Company",
        desc: "Let Web Design Hub be your point of reference as you create and improve your digital presence.",
        img: smallBannerImage,
        bgColor: "__digitalMarketingHeroGradientBg",
        btnBg: "bg-[#8A6EA5]",
        btnBorder: "border-[#8A6EA5]",
        btnHover: "hover:bg-[#8A6EA5]",
        theme: "dark"
    };
    // Array for Packages Component Props
    const packages = {
        subtitle: "Digital Marketing Packages",
        title: "Budget-Friendly Digital Brilliance",
        desc: "Our affordable packages never fail to provide the highest quality digital marketing services. What else do you need?",
        key: 7,
        name: "Digital Marketing"
    }
    // Array for Letstalk Component Props
    const letstalk = {
        title: "Let’s Talk",
        desc: "Connect with us and let our professional digital marketing experts help you to achieve your business goals without facing any hassles."
    }
    return (
        <>
            <main>
                <Header />
                <Hero content={hero} />
                <Services />
                <SmallBanner content={smallbanner} />
                <Steps />
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
                            "serviceType": "Digital Marketing Company",
                            "provider": {
                                "@type": "Organization",
                                "name": "WebDesignHub",
                                "telephone": "+1-855 888-8399",
                                "logo": "https://www.webdesignhub.co/_next/static/media/logo.0278bd76.svg",
                                "url": "https://webdesignhub.co/digital-marketing-company",
                                "sameAs": [
                                    "https://www.facebook.com/webdesignhubofficial",
                                    "https://twitter.com/webdesignhub_",
                                    "https://www.instagram.com/webdesignhubofficial"
                                ]
                            },
                            "description": "WebDesignHub is a leading digital marketing company, specializing in data-driven strategies that amplify brand presence, engage target audiences, and drive business growth.",
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