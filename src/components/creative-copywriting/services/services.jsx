// Import Components
import Image from "next/image";
import Button from "@/components/button/Button";
// Import Images
import screens from "media/creative-copywriting/services/screens.png";

const Services = () => {
    return (
        <section>
            <div className="bg-[#EBEBEB] py-10 lg:pb-20 lg:pt-[200px]">
                <div className="container">
                    <div className="text-center mb-10">
                        <span className="text-base font-normal text-[#00B4FF]">Services of Expert Copywriters</span>
                        <h2 className="font-megat font-normal text-3xl sm:text-4xl lg:text-5xl text-black mb-2">Outstanding Material</h2>
                        <p className="text-base text-black font-normal">Our staff of professional and appealing copywriters is here to maintain the flow of visitors steady. Our team can assist with writing for websites, promotional materials, blogs, social media, and more. We did in-depth research on the issue at hand before beginning the drafting process, and the resulting content is wholly unique.</p>
                    </div>
                    <Image src={screens} alt="screens" className="block m-auto" />
                    <div className="flex items-center gap-3 justify-center mt-10 relative z-10">
                        <Button text="Start Live Chat"
                            icon={true}
                            color="bg-[#768DF1] text-white"
                            hover="hover:bg-[#000000]"
                            link="#" />
                        <Button text="(123)-000-0000"
                            color="bg-transparent text-[#202020]"
                            border="border-2 border-[#768DF1]"
                            hover="hover:bg-[#768DF1] hover:text-white"
                            link="tel:123654789" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;