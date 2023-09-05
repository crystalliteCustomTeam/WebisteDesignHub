// Import Components
import Image from "next/image";
import Button from "@/components/button/Button";
// Import Images
import screens from "media/mobile-application/services/screens.png";

const Services = () => {
    return (
        <section>
            <div className="bg-[#EBEBEB] py-10 lg:py-[200px]">
                <div className="container">
                    <div className="text-center mb-10">
                        <span className="text-base font-normal text-[#00B4FF]">Developing Applications for Mobile Devices</span>
                        <h2 className="font-megat font-normal text-3xl sm:text-4xl lg:text-5xl text-black mb-2">Mobile Applications with a High Degree of Agility</h2>
                        <p className="text-base text-black font-normal">NexoDesign is the answer if you want to expand your company's customer base using mobile technologies. When you work with us, we'll develop an app that helps you interact with your ideal customers and raises your company's profile. Our development staff is highly skilled in all facets of the business development life cycle, including analysis, design, development, support, and maintenance. </p>
                    </div>
                    <Image src={screens} alt="screens" className="block m-auto" />
                    <div className="flex items-center gap-3 justify-center mt-10 relative z-10">
                        <Button text="Start Live Chat"
                            icon={true}
                            color="bg-[#7AAF60] text-white"
                            hover="hover:bg-[#000000]"
                            link="#" />
                        <Button text="(123)-000-0000"
                            color="bg-transparent text-[#202020]"
                            border="border-2 border-[#7AAF60]"
                            hover="hover:bg-[#7AAF60] hover:text-white"
                            link="tel:123654789" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;