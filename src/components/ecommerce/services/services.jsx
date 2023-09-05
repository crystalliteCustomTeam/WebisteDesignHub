// Import Components
import Image from "next/image";
import Button from "@/components/button/Button";
// Import Images
import shoe from "media/ecommerce/services/shoe.png";

const Services = () => {
    return (
        <section>
            <div className="bg-[#EBEBEB] py-10 lg:py-[200px]">
                <div className="container">
                    <div className="text-center mb-10">
                        <span className="text-base font-normal text-[#00B4FF]">Internet Merchant Creators</span>
                        <h2 className="font-megat font-normal text-3xl sm:text-4xl lg:text-5xl text-black mb-2">Developing E-Commerce Platforms</h2>
                        <p className="text-base text-black font-normal">Our team is well-versed in providing safe e-commerce options for businesses like yours. If you`re a new company in need of an e-commerce platform, or an established company trying to expand into new markets, Urban Web Designers can help.</p>
                    </div>
                    <Image src={shoe} alt="shoe" className="block m-auto" />
                    <div className="flex items-center gap-3 justify-center mt-10 relative z-10">
                        <Button text="Start Live Chat"
                            icon={true}
                            color="bg-[#005368] text-white"
                            hover="hover:bg-[#000000]"
                            link="#" />
                        <Button text="(123)-000-0000"
                            color="bg-transparent text-[#202020]"
                            border="border-2 border-[#005368]"
                            hover="hover:bg-[#005368] hover:text-white"
                            link="tel:123654789" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;