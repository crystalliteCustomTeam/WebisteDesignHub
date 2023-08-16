// Import Page Components
import Hero from "@/components/hero/hero";
import Services from "@/components/creative-copywriting/services/services";
import SmallBanner from "@/components/smallbanner/smallbanner";
import Reviews from "@/components/reviews/reviews";
import Weare from "@/components/weare/weare";
import Contact from "@/components/contact/contact";
import Letstalk from "@/components/letstalk/letstalk";
// Import Images
import banner from "media/creative-copywriting/hero/deskGirl.png";
import smallBannerImage from "media/creative-copywriting/smallBanner.png";

const Page = () => {
    // Array for Hero Component Props
    const hero = {
        page: "creativeCopywriting",
        subtitle: "Writing for Publicationt",
        title: "Going Above and Beyond for Our Customers",
        desc: "Content that not only satisfies but also surpasses the needs of our clients is what our team of devoted specialists excels at providing. One of the defining features of our copywriting is:",
        points: ["Prompt", "Exceptional", "Insightful", "Competitive Edge"],
        banner,
        bg: "__creativeCopywritingHeroGradientBg"
    };
    // Array for Small Banner Component Props
    const smallbanner = {
        page: "creativeCopywriting",
        title: "Allow us to assist you in developing a web presence.",
        desc: "Our web development team is here to assist you in reaching your business goals through the creation of an interesting and functional website.",
        img: smallBannerImage,
        bgColor: "bg-[#B8C1FB]",
        btnBg: "bg-[#0F2847]",
        btnBorder: "border-[#0F2847]",
        btnHover: "hover:bg-[#0F2847]",
        btnColor: "text-[#0F2847]",
        theme: "light"
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