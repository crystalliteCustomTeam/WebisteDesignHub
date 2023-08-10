import Image from "next/image";
// Import Css
import styles from "./Hero.module.css";
// Import Images
import downArrow from "media/home/downArrow.svg";
import circleCheck from "media/home/circleCheck.svg";
import reviewPlatforms from "media/home/reviewPlatforms.svg";
import chair from "media/home/chair.svg";
import designBubble from "media/home/designBubble.svg";
import minimalBubble from "media/home/minimalBubble.svg";
import uiuxBubble from "media/home/uiuxBubble.svg";
// import heroVideo from "media/home/heroVideo.mp4";
// Import Components
import Button from "@/components/button/Button";

const Hero = () => {
    return (
        <section>
            <div className="__gradientBg overflow-hidden pt-44 lg:pt-0">
                <div className="container relative z-[1]">
                    <div className="absolute bottom-0 md:right-0 lg:right-[-50px] xl:right-[-50px] z-[-1] hidden md:block">
                        <Image src={chair} alt="chair" priority className="object-cover h-auto md:max-w-xs lg:max-w-lg xl:max-w-screen-sm" />
                    </div>
                    <div className={`absolute lg:top-[420px] xl:top-[450px] lg:right-[460px] xl:right-[560px] 2xl:right-[580px] hidden lg:block ${styles.__fadeInDown}`}>
                        <Image src={designBubble} alt="designBubble" />
                    </div>
                    <div className={`absolute lg:top-[250px] xl:top-[350px] lg:right-[0] xl:right-[50px] hidden lg:block ${styles.__fadeInDown}`}>
                        <Image src={minimalBubble} alt="minimalBubble" />
                    </div>
                    <div className={`absolute lg:top-[600px] xl:top-[700px] lg:right-[0] xl:right-[50px] hidden lg:block ${styles.__fadeInDown}`}>
                        <Image src={uiuxBubble} alt="uiuxBubble" />
                    </div>
                    <div className="flex lg:h-[750px] xl:h-[820px] lg:items-end lg:pb-20">
                        <div className="basis-full">
                            <div className="relative w-max mb-10">
                                <span className="text-sm sm:text-base xl:text-lg font-normal leading-none text-white inline-block">
                                    A Place Where
                                </span>
                                <Image src={downArrow} alt="downArrow" className="absolute top-2/4 left-full ml-5 sm:ml-10" />
                            </div>
                            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-megat text-white font-normal leading-none mb-2">
                                100% Original and <br className="hidden sm:block" /> Creative Websites
                            </h1>
                            <p className="text-sm sm:text-base xl:text-lg text-white font-normal mb-3 sm:mb-5">Urban Web Designers works with a team of enthusiastic designers and <br className="hidden sm:block" /> developers who are dedicated professionals in delivering the best <br className="hidden sm:block" /> websites for any business. Our websites are:</p>
                            <div className="flex mb-5 xl:mb-8">
                                <div className="md:basis-3/4 lg:basis-5/12">
                                    <div className="flex flex-wrap">
                                        <div className="basis-5/12 p-3 border-r-[#843ED5] border-b-[#843ED5] px-0 border-r-2 border-b-2">
                                            <div className="flex items-center gap-x-3">
                                                <Image src={circleCheck} alt="circleCheck" />
                                                <p className="text-xs sm:text-lg xl:text-2xl text-white font-normal">Customized</p>
                                            </div>
                                        </div>
                                        <div className="basis-5/12 p-3 border-b-[#843ED5] pr-0 border-b-2">
                                            <div className="flex items-center gap-x-3">
                                                <Image src={circleCheck} alt="circleCheck" />
                                                <p className="text-xs sm:text-lg xl:text-2xl text-white font-normal">Optimized</p>
                                            </div>
                                        </div>
                                        <div className="basis-5/12 p-3 border-r-[#843ED5] pl-0 pb-0 border-r-2">
                                            <div className="flex items-center gap-x-3">
                                                <Image src={circleCheck} alt="circleCheck" />
                                                <p className="text-xs sm:text-lg xl:text-2xl text-white font-normal">Result Driven</p>
                                            </div>
                                        </div>
                                        <div className="basis-5/12 p-3 pr-0 pb-0">
                                            <div className="flex items-center gap-x-3">
                                                <Image src={circleCheck} alt="circleCheck" />
                                                <p className="text-xs sm:text-lg xl:text-2xl text-white font-normal">Measurable</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Image src={reviewPlatforms} alt="reviewPlatforms" />
                            <div className="flex items-center gap-3 mt-5 xl:mt-8 pb-8 lg:pb-0">
                                <Button text="Start Live Chat"
                                    icon={true}
                                    color="bg-[#7E6BC6] text-white"
                                    hover="hover:bg-[#000000]"
                                    link="#" />
                                <Button text="Book Demo"
                                    color="bg-transparent text-white"
                                    border="border-2 border-[#7E6BC6]"
                                    hover="hover:bg-[#7E6BC6]"
                                    link="tel:123654789" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;