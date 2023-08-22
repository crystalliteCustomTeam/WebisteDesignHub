// Import Page Components
import Hero from "@/components/hero/hero";
import Services from "@/components/seo-services/services/services";
import SmallBanner from "@/components/smallbanner/smallbanner";
import Packages from "@/components/packages/packages";
import Letstalk from "@/components/letstalk/letstalk";
import Reviews from "@/components/reviews/reviews";
import Weare from "@/components/weare/weare";
import Contact from "@/components/contact/contact";
// Import Images
import smallBannerImage from "media/seo-services/smallBanner.png";

const Page = () => {
    // Array for Hero Component Props
    const hero = {
        page: "seoServices",
        subtitle: "Extend The Sphere Of Influence",
        title: "Engage your customer and Generate Traffic",
        desc: "Urban Web Designers has the greatest content writers and marketers in the business, so you can count on them to create engaging material and distribute it effectively to retain and grow.",
        points: ["Personalized", "Uniquely", "Interesting", "Disseminated"],
        bg: "__seoServicesHeroGradientBg",
        isForm: true,
        btnBg: "bg-[#577981]",
        btnBorder: "border-[#577981]",
        btnHover: "hover:bg-[#577981]"
    };
    // Array for Small Banner Component Props
    const smallbanner = {
        page: "ecommerce",
        title: "Allow us to assist you in developing a web presence.",
        desc: "Our web development team is here to assist you in reaching your business goals through the creation of an interesting and functional website.",
        img: smallBannerImage,
        bgColor: "__seoServicesHeroGradientBg",
        btnBg: "bg-[#577981]",
        btnBorder: "border-[#577981]",
        btnHover: "hover:bg-[#577981]",
        theme: "dark"
    };
    return (
        <>
            <Hero content={hero} />
            <Services />
            <SmallBanner content={smallbanner} />
            <Packages />
            <Letstalk />
            <Reviews />
            <Weare />
            <Contact />
        </>
    );
}

export default Page;