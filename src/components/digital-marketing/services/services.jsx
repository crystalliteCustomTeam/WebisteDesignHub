// Import Components
import Image from "next/image";
import Button from "@/components/button/Button";
// Import Images
import services from "media/digital-marketing/services/services.png";

const Services = () => {
    return (
        <section>
            <div className="bg-[#EBEBEB] py-10 lg:pb-20 lg:pt-[200px]">
                <div className="container">
                    <div className="text-center mb-10">
                        <span className="text-base font-normal text-[#00B4FF]">Adept at Online Promotion</span>
                        <h2 className="font-megat font-normal text-3xl sm:text-4xl lg:text-5xl text-black mb-2">Individualized Digital Products</h2>
                        <p className="text-base text-black font-normal">In the realm of digital marketing, Urban Web Designers has earned a stellar reputation as an innovative and creative firm. Delivering digital strategies that are specific to each brand is where our expertise rests. In order to reach the dispersed, digital audience, we use a variety of platforms.</p>
                    </div>
                    <Image src={services} alt="services" className="block m-auto" />
                    <div className="flex items-center gap-3 justify-center mt-10 relative z-10">
                        <Button text="Start Live Chat"
                            icon={true}
                            color="bg-[#7337BB] text-white"
                            hover="hover:bg-[#000000]"
                            link="#" />
                        <Button text="Book Demo"
                            color="bg-transparent text-[#202020]"
                            border="border-2 border-[#7337BB]"
                            hover="hover:bg-[#7337BB] hover:text-white"
                            link="tel:123654789" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;