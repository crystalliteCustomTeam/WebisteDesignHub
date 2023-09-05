// Import Components
import Image from "next/image";
import Button from "@/components/button/Button";
// Import Images
import laptop from "media/website-development/services/laptop.png";

const Services = () => {
    return (
        <section>
            <div className="bg-[#EBEBEB] py-10 lg:py-[200px]">
                <div className="container">
                    <div className="text-center mb-10">
                        <span className="text-base font-normal text-[#00B4FF]">Website Design Services</span>
                        <h2 className="font-megat font-normal text-3xl sm:text-4xl lg:text-5xl text-black mb-2">Custom Web Development</h2>
                        <p className="text-base text-black font-normal">Having a website is important for gaining digital visibility and expanding business reach. Therefore at Urban Web Designers, we not only create a visually appealing website but also take into account the technical side too. We develop a website with SEO optimized content, faster loading time, interactive features and a mobile-friendly layout to improve user experience. </p>
                    </div>
                    <Image src={laptop} alt="laptop" className="block m-auto" />
                    <div className="flex items-center gap-3 justify-center mt-10 relative z-10">
                        <Button text="Start Live Chat"
                            icon={true}
                            color="bg-[#283C3C] text-white"
                            hover="hover:bg-[#000000]"
                            link="#" />
                        <Button text="(123)-000-0000"
                            color="bg-transparent text-[#202020]"
                            border="border-2 border-[#283C3C]"
                            hover="hover:bg-[#283C3C] hover:text-white"
                            link="tel:123654789" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;