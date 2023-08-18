"use client"
// Import Components
import Button from "@/components/button/Button";

const Services = () => {
    return (
        <section>
            <div className="bg-[#EBEBEB] py-10 lg:pb-20 lg:pt-[200px]">
                <div className="container">
                    <div className="text-center mb-10">
                        <span className="text-base font-normal text-[#00B4FF]">Specialist SEO Services</span>
                        <h2 className="font-megat font-normal text-3xl sm:text-4xl lg:text-5xl text-black mb-2">Excellent search engine optimization</h2>
                        <p className="text-base text-black font-normal">The digital marketing strategy relies heavily on search engine optimization. It's useful for raising a company's profile online. There's no point in having a beautiful website if visitors can't find you when searching the web for products or services.</p>
                    </div>
                    <video src="videos/seoServices.mp4" autoPlay loop muted controls={false} ></video>
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