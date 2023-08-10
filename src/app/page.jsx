import Image from "next/image";
// Import Images
import halfmobile from "media/halfmobile.png";
// Import Components
import Button from "@/components/button/Button";
import Hero from "@/components/home/hero/Hero";
import Dssigns from "@/components/home/designs/Designs";
import Services from "@/components/home/services/Services";
import Portfolios from "@/components/home/porfolios/Portfolios";
import Weare from "@/components/home/weare/Weare";
import Contact from "@/components/home/contact/Contact";
import Letstalk from "@/components/home/letstalk/Letstalk";
import Reviews from "@/components/home/reviews/Reviews";

const Home = () => {
  return (
    <main>
      <Hero />
      <Dssigns />
      <section>
        <div className="bg-[#0F2847]">
          <div className="container  pt-10 lg:py-10 xl:py-20 relative">
            <div className="flex">
              <div className="basis-full lg:basis-7/12">
                <h2 className="text-2xl sm:text-4xl xl:text-5xl font-megat text-white font-normal leading-none mb-3">
                  Allow us to assist you in  <br className="hidden sm:block" /> developing a web presence.
                </h2>
                <p className="text-base text-white font-normal mb-5">Our web development team is here to assist you in reaching your business goals <br className="hidden md:block lg:hidden xl:block" /> through the creation of an interesting and functional website.</p>
                <div className="flex items-center gap-3 mb-5 lg:mb-0">
                  <Button text="Start Live Chat"
                    icon={true}
                    color="bg-[#216385] text-white"
                    hover="hover:bg-[#000000]"
                    link="#" />
                  <Button text="Book Demo"
                    color="bg-transparent text-white"
                    border="border-2 border-[#216385]"
                    hover="hover:bg-[#216385]"
                    link="tel:123654789" />
                </div>
              </div>
            </div>
            <div className="lg:absolute lg:bottom-0 lg:right-0 m-auto w-max">
              <Image src={halfmobile} alt="halfmobile" className="max-w-xs lg:max-w-md  xl:max-w-full" />
            </div>
          </div>
        </div>
      </section>
      <Services />
      <Portfolios />
      <Reviews />
      <Weare />
      <Contact />
      <Letstalk />
    </main>
  );
}

export default Home;