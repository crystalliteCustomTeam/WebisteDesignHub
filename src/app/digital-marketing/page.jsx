// Import Page Components
import Hero from "@/components/hero/hero";
import Services from "@/components/digital-marketing/services/services";
import SmallBanner from "@/components/smallbanner/smallbanner";
import Reviews from "@/components/reviews/reviews";
import Weare from "@/components/weare/weare";
import Contact from "@/components/contact/contact";
import Letstalk from "@/components/letstalk/letstalk";
import Packages from "@/components/packages/packages";
// Import Images
import banner from "media/digital-marketing/hero/hand.png";
import smallBannerImage from "media/digital-marketing/smallBanner.png";

const Page = () => {
    // Array for Hero Component Props
    const hero = {
        page: "digitalMarketing",
        subtitle: "Expert in Marketing",
        title: "Controlling the Client's Digital Expansion",
        desc: "The goal of our digital services is to facilitate and oversee the expansion of our customers' digital presence. We test out and make use of a wide variety of tools that produce excellent outcomes for both private and commercial endeavors.",
        points: ["Relevant", "Flexible", "Measurable", "Interactive"],
        banner,
        bg: "__digitalMarketingHeroGradientBg",
        isForm: true
    };
    // Array for Small Banner Component Props
    const smallbanner = {
        page: "digitalMarketing",
        title: "Allow us to assist you in developing a web presence.",
        desc: "Our web development team is here to assist you in reaching your business goals through the creation of an interesting and functional website.",
        img: smallBannerImage,
        bgColor: "bg-[#829E05]",
        btnBg: "bg-[#C5DF00]",
        btnBorder: "border-[#C5DF00]",
        btnHover: "hover:bg-[#C5DF00]",
        theme: "dark"
    };
    return (
        <>
            <Hero content={hero} />
            <Services />
            <SmallBanner content={smallbanner} />
            <Packages />
            <Reviews />
            <Letstalk />
            <Weare />
            <Contact />
        </>
    );
}

export default Page;