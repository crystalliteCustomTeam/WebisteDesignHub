// Import Page Components
import Hero from "@/components/hero/hero";
import Services from "@/components/illustration-design/services/services";
import SmallBanner from "@/components/smallbanner/smallbanner";
import Portfolios from "@/components/portfolios/portfolios";
import Letstalk from "@/components/letstalk/letstalk";
import Reviews from "@/components/reviews/reviews";
import Weare from "@/components/weare/weare";
import Contact from "@/components/contact/contact";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
// Import Images
import banner from "media/illustration-design/hero/man.png";
import smallBannerImage from "media/illustration-design/smallBanner.png";
import portfolioOne from "media/illustration-design/portfolios/one.png";
import portfolioTwo from "media/illustration-design/portfolios/two.png";
import portfolioThree from "media/illustration-design/portfolios/three.png";
import portfolioFour from "media/illustration-design/portfolios/four.png";
import portfolioFive from "media/illustration-design/portfolios/five.png";

const Page = () => {
    // Array for Hero Component Props
    const hero = {
        page: "illustrationDesign",
        subtitle: "Best Illustration Designers",
        title: "5-Star Rated Illustration Design Company",
        desc: "When you hire Web Design Hub,  you gain access to the best character illustrators, and gaming artwork. We make custom character designs, immersive gaming illustrations, and any related creative illustrations. Our skill in illustration design combines unique qualities that make us a distinctive illustration company. ",
        points: ["Unique Artistry", "Time Efficiency", "Attention to Detail", "Original Art"],
        isForm: true,
        banner,
        bg: "bg-[url('../../public/illustration-design/hero/bg.png')] bg-cover bg-no-repeat bg-left-top",
        btnBg: "bg-[#A4637A]",
        btnBorder: "border-[#A4637A]",
        btnHover: "hover:bg-[#A4637A]"
    };
    // Array for Small Banner Component Props
    const smallbanner = {
        page: "ecommerce",
        title: "Allow us to assist you in developing a web presence.",
        desc: "Our web development team is here to assist you in reaching your business goals through the creation of an interesting and functional website.",
        img: smallBannerImage,
        bgColor: "bg-[#241C1B] lg:bg-[url('../../public/illustration-design/smallBannerClip.png')] bg-contain bg-no-repeat bg-right-top",
        btnBg: "bg-[#A4637A]",
        btnBorder: "border-[#A4637A]",
        btnHover: "hover:bg-[#A4637A]",
        theme: "dark"
    };
    // Array for Portfolios Component Props
    const portfolios = {
        title: "Our Illustration Agency’s Artwork Creation",
        desc: "Our illustration artists work closely with clients to capture a design's personality, conveying emotions, and brand identity. \n We create character designs with depth and meaning.",
        images: [portfolioOne, portfolioTwo, portfolioThree, portfolioFour, portfolioFive],
        theme: "light"
    };
    return (
        <>
            <main>
                <Header />
                <Hero content={hero} />
                <Services />
                <SmallBanner content={smallbanner} />
                <Portfolios content={portfolios} />
                <Letstalk />
                <Reviews />
                <Weare />
                <Contact />
                <Footer />
            </main>
        </>
    );
}

export default Page;