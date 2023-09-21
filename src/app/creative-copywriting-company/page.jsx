// Import Page Components
import Hero from "@/components/hero/hero";
import Services from "@/components/creative-copywriting/services/services";
import SmallBanner from "@/components/smallbanner/smallbanner";
import Reviews from "@/components/reviews/reviews";
import Weare from "@/components/weare/weare";
import Contact from "@/components/contact/contact";
import Letstalk from "@/components/letstalk/letstalk";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Packages from "@/components/packages/packages";
import Script from "next/script";
// Import Images
import banner from "media/creative-copywriting/hero/deskGirl.png";
import smallBannerImage from "media/creative-copywriting/smallBanner.png";

const Page = () => {
    // Array for Hero Component Props
    const hero = {
        page: "creativeCopywriting",
        subtitle: "Top Copywriters For Hire Dominate",
        title: "Your Market with Our Creative Copywriting Company",
        desc: "Web Design Hub shapes your words and ideas into perfectly persuasive tales and narratives. As a highly competitive copywriting company, we grab the attention of your audience, driving positive outcomes. Our team comprises of experienced;",
        points: ["SEO Copywriters", "Website Copywriters", "Technical Copywriters", "Landing Page Copywriters"],
        banner,
        bg: "__creativeCopywritingHeroGradientBg",
        isForm: true,
        btnBg: "bg-[#768DF1]",
        btnBorder: "border-[#768DF1]",
        btnHover: "hover:bg-[#768DF1]"
    };
    // Array for Small Banner Component Props
    const smallbanner = {
        page: "creativeCopywriting",
        title: "Weave Your Digital Dreams with Our Professional Copywriters",
        desc: "Top copywriters at Web Design Hub write the best content distinguishing your business from others. Our strategic finesse helps create the web presence everyone wishes for.",
        img: smallBannerImage,
        bgColor: "__creativeCopywritingHeroGradientBg",
        btnBg: "bg-[#768DF1]",
        btnBorder: "border-[#768DF1]",
        btnHover: "hover:bg-[#768DF1]",
        theme: "dark"
    };
    // Array for Packages Component Props
    const packages = {
        subtitle: "Reasonable Prices",
        title: "That Fits Your Budget",
        desc: "With affordable prices, we have exclusive digital art and design facilities, customized for your individual needs",
        key: 9,
        name: "Creative Copy Writing"
    }
    // Array for Letstalk Component Props
    const letstalk = {
        title: "Let’s Talk.",
        desc: "Connect with us and let our professional copywriters help you to achieve your business goals without facing any hassles."
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
                            "serviceType": "Creative Copywriting Company",
                            "provider": {
                                "@type": "Organization",
                                "name": "WebDesignHub",
                                "telephone": "+1-855 888-8399",
                                "logo": "https://www.webdesignhub.co/_next/static/media/logo.0278bd76.svg",
                                "url": "https://webdesignhub.co/creative-copywriting-company",
                                "sameAs": [
                                    "https://www.facebook.com/webdesignhubofficial",
                                    "https://twitter.com/webdesignhub_",
                                    "https://www.instagram.com/webdesignhubofficial"
                                ]
                            },
                            "description": "WebDesignHub offers expert creative copywriting services, delivering persuasive and captivating content that engages audiences and drives brand success.",
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