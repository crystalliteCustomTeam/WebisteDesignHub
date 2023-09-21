// Import Page Components
import Hero from "@/components/hero/hero";
import Services from "@/components/seo-services/services/services";
import SmallBanner from "@/components/smallbanner/smallbanner";
import Packages from "@/components/packages/packages";
import Letstalk from "@/components/letstalk/letstalk";
import Reviews from "@/components/reviews/reviews";
import Weare from "@/components/weare/weare";
import Contact from "@/components/contact/contact";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Script from "next/script";
// Import Images
import smallBannerImage from "media/seo-services/smallBanner.png";

const Page = () => {
    // Array for Hero Component Props
    const hero = {
        page: "seoServices",
        subtitle: "From Rankings to Revenue",
        title: "Turbocharge Your Traffic with Our SEO Company!",
        desc: "Witness the change as our professional SEO company, Web Design Hub, moves you from search engine ranks to higher income. We'll boost website traffic using our tested techniques so you can connect with your target market and experience real company success.",
        points: ["Research & Analysis ", "E-Commerce SEO", "Technical SEO Audit", "On-Page & Off-Page"],
        bg: "__seoServicesHeroGradientBg",
        isForm: true,
        btnBg: "bg-[#577981]",
        btnBorder: "border-[#577981]",
        btnHover: "hover:bg-[#577981]"
    };
    // Array for Small Banner Component Props
    const smallbanner = {
        page: "ecommerce",
        title: "Dominate Search Engine Results With Our SEO Services",
        desc: "Don't delay your digital success, contact us today and schedule an obligation-free  SEO Consultation with us!",
        img: smallBannerImage,
        bgColor: "__seoServicesHeroGradientBg",
        btnBg: "bg-[#577981]",
        btnBorder: "border-[#577981]",
        btnHover: "hover:bg-[#577981]",
        theme: "dark"
    };
    // Array for Packages Component Props
    const packages = {
        subtitle: "SEO Packages",
        title: "Increased Profit on a Budget with Our SEO Agency",
        desc: "Our affordable SEO agency will increase your profit margin without overspending – hire us to rank on search results in 30 days.",
        key: 5,
        name: "SEO"
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
                            "serviceType": "Seo Company",
                            "provider": {
                                "@type": "Organization",
                                "name": "WebDesignHub",
                                "telephone": "+1-855 888-8399",
                                "logo": "https://www.webdesignhub.co/_next/static/media/logo.0278bd76.svg",
                                "url": "https://webdesignhub.co/seo-company",
                                "sameAs": [
                                    "https://www.facebook.com/webdesignhubofficial",
                                    "https://twitter.com/webdesignhub_",
                                    "https://www.instagram.com/webdesignhubofficial"
                                ]
                            },
                            "description": "WebDesignHub offers advanced SEO services, employing cutting-edge techniques and strategies to enhance website visibility, drive organic traffic, and boost conversions.",
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