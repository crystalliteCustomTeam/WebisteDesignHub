// Import Components
import Image from "next/image";
import Button from "@/components/button/Button";
// Import Images
import stationary from "media/marketing-collateral/services/stationary.png";

const Services = () => {
    return (
        <section>
            <div className="bg-[#EBEBEB] py-10 lg:py-[200px]">
                <div className="container">
                    <div className="text-center mb-10">
                        <span className="text-base font-normal text-[#00B4FF]">Designs For Marketing Collateral</span>
                        <h2 className="font-megat font-normal text-3xl sm:text-4xl lg:text-5xl text-black mb-2">Providing Superior Content</h2>
                        <p className="text-base text-black font-normal">Brochures used to be the only option for marketing materials, but that's no longer the case. Blog posts, case studies, newsletters, emails, press releases, white papers, product guides, catalogues, and so on are just some of the many different types of marketing collateral that have emerged alongside the proliferation of marketing channels.</p>
                    </div>
                    <Image src={stationary} alt="stationary" className="block m-auto" />
                    <div className="flex items-center gap-3 justify-center mt-10 relative z-10">
                        <Button text="Start Live Chat"
                            icon={true}
                            color="bg-[#223C5A] text-white"
                            hover="hover:bg-[#000000]"
                            link="#" />
                        <Button text="(123)-000-0000"
                            color="bg-transparent text-[#202020]"
                            border="border-2 border-[#223C5A]"
                            hover="hover:bg-[#223C5A] hover:text-white"
                            link="tel:123654789" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;