// Next
import Image from "next/image";
// Media
import Screen from "media/landing-page-4/screen.png"
// Components
import Button from "@/components/button/button";
import style from "./collaboration.module.css"
const Collaboration = () => {
    return (
        <div className="lg:py-0 py-10 bg-[url('../../public/landing-page-4/backgroundBanner.png')] bg-cover bg-center bg-no-repeat lg:mt-[100px] xl:mt-[150px]">
            <div className="container">
                <div className="grid lg:grid-cols-2 gap-x-5 grid-cols-1 items-center">
                    <div className="text-white font-sans">
                        <h2 className="xl:text-[50px] lg:text-[40px] md:text-[30px] text-[25px] leading-tight font-bold mb-3">We eagerly anticipate every collaboration.</h2>
                        <p className="xl:text-base text-sm">Whether You Have A Well-Thought-Out Plan Or A Simple Concept In Need Of Professional Assistance, We Are Your Ideal Partner In Both Scenarios. Our Proficient Web Creators Precisely Know How To Translate Your Ideas Into Elegant Visuals, Combining Our Expertise With Your Unique Thought Process.</p>
                        <div className="flex items-center gap-3 mt-8">
                            <Button text="Start Live Chat"
                                icon={true}
                                color={`bg-[#9E4BFF] text-white`}
                                hover="hover:bg-[#000000]"
                                link="javascript:$zopim.livechat.window.show();" />
                            <Button text="0346-8280101"
                                color={`text-white bg-transparent`}
                                hover="hover:bg-[#000000] hover:border-[#000000]"
                                border="border border-white"
                                link="tel:0346-8280101" />
                        </div>
                    </div>
                    <div className="lg:mt-0 mt-10">
                        <Image src={Screen} alt="Icons" className="lg:mt-[-100px] xl:mt-[-150px] block m-auto" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Collaboration;
