// Import Components
import Image from "next/image";
import Button from "@/components/button/Button";
// Import Images
import laptop from "media/illustration-design/services/laptop.png";

const Services = () => {
    return (
        <section>
            <div className="bg-[#EBEBEB] py-10 lg:py-[200px]">
                <div className="container">
                    <div className="text-center mb-10">
                        <span className="text-base font-normal text-[#00B4FF]">Professional Custom Drawings</span>
                        <h2 className="font-megat font-normal text-3xl sm:text-4xl lg:text-5xl text-black mb-2">Delivering High Quality</h2>
                        <p className="text-base text-black font-normal">Because "a picture is worth a thousand words," it's important to provide high-quality illustrations with your material. It's common practice in advertising to use them to draw attention to key messages and make an impression on the reader.</p>
                    </div>
                    <Image src={laptop} alt="laptop" className="block m-auto" />
                    <div className="flex items-center gap-3 justify-center mt-10 relative z-10">
                        <Button text="Start Live Chat"
                            icon={true}
                            color="bg-[#A4637A] text-white"
                            hover="hover:bg-[#000000]"
                            link="#" />
                        <Button text="(123)-000-0000"
                            color="bg-transparent text-[#202020]"
                            border="border-2 border-[#A4637A]"
                            hover="hover:bg-[#A4637A] hover:text-white"
                            link="tel:123654789" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;