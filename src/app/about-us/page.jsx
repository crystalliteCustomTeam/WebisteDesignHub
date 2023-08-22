// Import Page Components
import Hero from "@/components/hero/hero";
import Services from "@/components/about-us/services/services";
import SmallBanner from "@/components/smallbanner/smallbanner";
import Reviews from "@/components/reviews/reviews";
import Weare from "@/components/weare/weare";
import Contact from "@/components/contact/contact";
import Letstalk from "@/components/letstalk/letstalk";
// Import Images
import banner from "media/about-us/hero/banner.png";
import smallBannerImage from "media/home/smallBanner.png";

const Page = () => {
    // Array for Hero Component Props
    const hero = {
        page: "single",
        subtitle: "Top Notch",
        title: "Web Developers and Designers",
        desc: "For all of your company's web development needs, you can count on us. Our online platforms flaunt nimbleness, quickness, uniqueness, and high quality.",
        bg: "__homeHeroGradientBg",
        banner,
        points: ["Customized", "Optimized", "Result Driven", "Measurable"],
        btnBg: "bg-[#7F6CC7]",
        btnBorder: "border-[#7F6CC7]",
        btnHover: "hover:bg-[#7F6CC7]"
    };
    // Array for Small Banner Component Props
    const smallbanner = {
        page: "home",
        title: "Allow us to assist you in developing a web presence.",
        desc: "Our web development team is here to assist you in reaching your business goals through the creation of an interesting and functional website.",
        img: smallBannerImage,
        bgColor: "__homeHeroGradientBg",
        btnBg: "bg-[#7F6CC7]",
        btnBorder: "border-[#7F6CC7]",
        btnHover: "hover:bg-[#7F6CC7]",
        theme: "dark"
    };
    return (
        <>
            <Hero content={hero} />
            <Services />
            <SmallBanner content={smallbanner} />
            <Reviews />
            <Weare />
            <Contact />
            <Letstalk />
        </>
    );
}

export default Page;