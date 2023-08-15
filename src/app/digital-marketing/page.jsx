// Import Page Components
import Hero from "@/components/hero/hero";
import Services from "@/components/digital-marketing/services/services";
import SmallBanner from "@/components/smallbanner/smallbanner";
import Reviews from "@/components/reviews/reviews";
import Weare from "@/components/weare/weare";
import Contact from "@/components/contact/contact";
import Letstalk from "@/components/letstalk/letstalk";
// Import Images
import banner from "media/digital-marketing/hero/hand.png";
import smallBannerImage from "media/digital-marketing/smallBanner.png";

const Page = () => {
    // Array for Hero Component Props
    const hero = {
        page: "digitalMarketing",
        subtitle: "Expert in Marketing",
        title: "Controlling the Client's \n Digital Expansion",
        desc: "The goal of our digital services is to facilitate and oversee \n the expansion of our customers' digital presence. We test out and \n make use of a wide variety of tools that produce excellent \n outcomes for both private and commercial endeavors.",
        points: ["Relevant", "Flexible", "Measurable", "Interactive"],
        banner,
    };
    // Array for Small Banner Component Props
    const smallbanner = {
        page: "digitalMarketing",
        title: "Allow us to assist you in \n developing a web presence.",
        desc: "Our web development team is here to assist you in reaching your business goals through the creation of an interesting and functional website.",
        img: smallBannerImage
    };
    return (
        <>
            <Hero content={hero} />
            <Services />
            <SmallBanner content={smallbanner} />
            <Reviews />
            <Letstalk />
            <Weare />
            <Contact />
        </>
    );
}

export default Page;