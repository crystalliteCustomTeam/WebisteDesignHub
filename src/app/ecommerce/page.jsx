// Import Page Components
import Hero from "@/components/hero/hero";
import Services from "@/components/ecommerce/services/services";
// Import Images
import banner from "media/ecommerce/hero/store.png";

const Page = () => {
    // Array for Hero Component Props
    const hero = {
        page: "ecommerce",
        subtitle: "Internet Business Answers",
        title: "Technology and Business Working Together",
        desc: "Business and cutting-edge technology come together in the e-commerce stores that Urban Web Designers creates. Our e-commerce platforms are rigorously tested to assure they:",
        points: ["Secure", "Reliable", "Scalable", "Mobile Friendly"],
        banner,
        bg: "__ecommerceHeroGradientBg"
    };
    return (
        <>
            <Hero content={hero} />
            <Services />
        </>
    );
}

export default Page;