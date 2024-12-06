// Media
import HTML from "media/landing-page-4/html.png"
// Next
import Image from "next/image";
// Components
import Button from "@/components/button/button";
const Developers = () => {
    return (
        <div className="xl:py-24 lg:py-16 md:py-14 py-12">
            <div className="container">
                <div className="text-center font-sans lg:mb-10 mb-5">
                    <h2 className="lg:text-[30px] text-[25px]  xl:text-[40px] font-bold leading-tight">Our website developers deliver<span className="text-[#9E4BFF]"> 100% guaranteed</span> <br /> results with simple yet enticing designs that <br /> captivate and perform.</h2>
                </div>
                <div className="grid lg:grid-cols-2 grid-col-1 gap-x-5 items-center">
                    <div className="lg:mb-0 mb-10">
                        <Image src={HTML} alt="Icons" />
                    </div>
                    <div className="text-black font-sans">
                        <h2 className="xl:text-[40px] lg:text-[30px] text-[25px] leading-tight font-bold mb-3">Custom Shopify Website With Exquisite User Interface.</h2>
                        <p className="md:text-base text-sm">At Web Developers Hub, our focus is on specialized website design and development services. We implement strategic and market-proven tactics to provide optimal web experiences for your customers, ensuring your enterprise reaps the rewards of enhanced customer loyalty.</p>
                        <div className="flex items-center gap-3 mt-8">
                            <Button text="Start Live Chat"
                                icon={true}
                                color={`bg-[#9E4BFF] text-white`} border="border-2"
                                hover="hover:bg-[#000000]"
                                link="javascript:$zopim.livechat.window.show();" />
                            <Button text="0346-8280111"
                                color={`text-white bg-black`}
                                border={`border-2 border-[#ffffff]`}
                                hover="hover:bg-[#9E4BFF]"
                                link="tel:0346-8280111" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Developers;