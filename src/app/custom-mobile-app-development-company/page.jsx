// Import Page Components
import Hero from "./components/hero/hero";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Platforms from "./components/platforms/Platforms";
import Publications from "./components/publications/Publications";
import Industries from "./components/industries/Industries";
import WhyHire from "./components/whyHire/WhyHire";
import Portfolio from "./components/portfolio/Portfolio";
import Accordions from "./components/accordions/Accordions";
import Success from "./components/success/Success";
import Header from "./components/header/Header";
import CTA from "./components/cta/cta";
import Reviews from "./components/reviews/Reviews";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const page = () => {
    return (
        <main>
            <Header />
            <Hero />
            <About />
            <Services />
            <Success />
            <Platforms />
            <Publications />
            <Industries />
            <WhyHire
                span="Why Hire Us?"
                title={`What Makes <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#eb335b] to-[#4a78ef]">Web Developers Hub The Most Recommended <br class="xl:block hidden"/> Mobile App Development</span>  Company?`}
                desc="As the leading mobile app development agency, we've gathered top-notch resources to create exceptional solutions for mobile applications. We have been crafting and will continue to develop unique apps across various platforms, including iOS, Android, Xamarin, and beyond. Our unbridled passion for the most cutting-edge technologies fuels us to continually evolve and innovate, allowing us to instantly provide unparalleled solutions to our valued clients.">
                <CTA text="GET FREE CONSULTATION"
                    border="border-2 border-[#000000]"
                    color="text-black"
                    padding="px-10"
                    margin="mx-auto mt-10" /></WhyHire>
            <WhyHire
                bg="bg-[#000000] text-white"
                span="GET A FREE CONSULTATION"
                spanColor="text-transparent bg-clip-text bg-gradient-to-r from-[#eb335b] to-[#4a78ef]"
                title={`Looking For Expert Guidance On Your  <br class="xl:block hidden"/> <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#eb335b] to-[#4a78ef]">Mobile App Development</span>  Project?`}>
                <CTA text="Claim Your Complimentary Consultancy Session Today"
                    bg="bg-white"
                    color="text-black"
                    padding="sm:px-10 px-1"
                    height="h-18"
                    textSize="lg:text-base sm:text-sm text-xs"
                    rounded="rounded-full shadow-md shadow-white"
                    margin="mx-auto mt-10" /></WhyHire>
            <Portfolio />
            <WhyHire
                bg="bg-[#000000] text-white"
                span="Need Help?"
                spanColor="text-transparent bg-clip-text bg-gradient-to-r from-[#eb335b] to-[#4a78ef]"
                title={`Looking For Expert Guidance On Your <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#eb335b] to-[#4a78ef]">Mobile App <br class="xl:block hidden"/> Development</span>  Project?`}>
                <CTA text="Get A Free Consultation"
                    bg="bg-white"
                    color="text-black"
                    padding="px-10"
                    height="h-18"
                    rounded="rounded-full shadow-md shadow-white"
                    margin="mx-auto mt-10" /></WhyHire>
            <Reviews />
            <Accordions />
            <Contact />
            <Footer />
        </main>
    )
}

export default page