"use client"
// Import Components
import Image from "next/image";
import Button from "@/components/button/Button";
import From from "./form/form";
// Import Css
import styles from "./hero.module.css";
// Import Images
import downArrow from "media/hero/downArrow.svg";
import circleCheck from "media/hero/circleCheck.svg";
import reviewPlatforms from "media/hero/reviewPlatforms.svg";

const Hero = ({ content }) => {
    const { subtitle, title, desc, points, banner, page, icons } = content;
    return (
        <section>
            <div className={`${page === "home" ? '__homeHeroGradientBg' : ''} ${page === "logoDesign" ? '__logoDesignHeroGradientBg' : ''} ${page === "creativeCopywriting" ? '__creativeCopywritingHeroGradientBg' : ''} ${page === "digitalMarketing" ? '__digitalMarketingHeroGradientBg' : ''} pt-44 lg:pt-0 relative`}>
                <div className="container relative z-[1]">
                    {/* For Home Page */}
                    {page === "home" ? <div className="absolute bottom-0 md:right-0 lg:right-[-50px] xl:right-[-50px] z-[-1] hidden md:block">
                        <Image src={banner} alt="banner" priority className="object-cover h-auto md:max-w-xs lg:max-w-lg xl:max-w-screen-sm" />
                    </div> : ""}
                    {page === "home" ? <>
                        <div className={`absolute lg:top-[420px] xl:top-[450px] lg:right-[460px] xl:right-[560px] 2xl:right-[580px] hidden lg:block ${styles.__fadeInDown}`}>
                            <Image src={icons[0]} alt="icon" />
                        </div>
                        <div className={`absolute lg:top-[250px] xl:top-[350px] lg:right-[0] xl:right-[50px] hidden lg:block ${styles.__fadeInDown}`}>
                            <Image src={icons[1]} alt="icon" />
                        </div>
                        <div className={`absolute lg:top-[600px] xl:top-[700px] lg:right-[0] xl:right-[50px] hidden lg:block ${styles.__fadeInDown}`}>
                            <Image src={icons[2]} alt="icon" />
                        </div></> : ""}
                    {/* For Logo Design Page */}
                    {page === "logoDesign" ? <div className="absolute right-0 xl:right-[100px] bottom-[50px] z-[-1] hidden md:block">
                        <Image src={banner} alt="banner" priority className="object-cover h-auto md:w-80 lg:w-10/12 block ml-auto xl:w-full" />
                    </div> : ""}
                    {page === "logoDesign" ? <>
                        <div className={`absolute lg:top-[420px] xl:top-[450px] lg:right-[430px] xl:right-[590px] 2xl:right-[610px] hidden lg:block ${styles.__fadeInDown}`}>
                            <Image src={icons[0]} alt="icon" />
                        </div>
                        <div className={`absolute lg:top-[250px] xl:top-[350px] lg:right-[-40px] xl:right-[50px] hidden lg:block ${styles.__fadeInDown}`}>
                            <Image src={icons[1]} alt="icon" />
                        </div>
                        <div className={`absolute lg:top-[550px] xl:top-[600px] lg:right-[-70px] xl:right-0 hidden lg:block ${styles.__fadeInDown}`}>
                            <Image src={icons[2]} alt="icon" />
                        </div></> : ""}
                    {/* For Creative Copywriting Page */}
                    {page === "creativeCopywriting" ? <div className="absolute right-0 bottom-0 z-[-1] hidden md:block">
                        <Image src={banner} alt="banner" priority className="object-cover h-auto md:w-80 lg:w-10/12 block ml-auto xl:w-full" />
                    </div> : ""}
                    {/* For Digital Marketing Page */}
                    {page === "digitalMarketing" ? <div className="absolute right-0 bottom-0 z-[-1] hidden md:block">
                        <Image src={banner} alt="banner" priority className="object-cover h-auto md:w-80 lg:w-10/12 block ml-auto xl:w-full" />
                    </div> : ""}
                    <div className="flex lg:h-[750px] xl:h-[820px] lg:items-end lg:pb-20">
                        <div className="basis-full">
                            <div className="relative w-max mb-10">
                                <span className="text-sm sm:text-base xl:text-lg font-normal leading-none text-white inline-block">
                                    {subtitle}
                                </span>
                                <Image src={downArrow} alt="downArrow" className="absolute top-2/4 left-full ml-5 sm:ml-10" />
                            </div>
                            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-megat text-white font-normal leading-none mb-2"
                                dangerouslySetInnerHTML={{ __html: title.replace(/\n/g, "<br />") }} />
                            <p className="text-sm sm:text-base xl:text-lg text-white font-normal mb-3 sm:mb-5"
                                dangerouslySetInnerHTML={{ __html: desc.replace(/\n/g, "<br />") }} />
                            <div className="flex mb-5 xl:mb-8">
                                <div className="md:basis-3/4 lg:basis-6/12">
                                    <div className="flex flex-wrap">
                                        <div className="basis-[43%] p-3 border-brown-10 px-0 border-r-2 border-b-2">
                                            <div className="flex items-center gap-x-3">
                                                <Image src={circleCheck} alt="circleCheck" />
                                                <p className="text-xs sm:text-lg xl:text-xl text-white font-normal">{points[0]}</p>
                                            </div>
                                        </div>
                                        <div className="basis-[43%] p-3 border-brown-100 pr-0 border-b-2">
                                            <div className="flex items-center gap-x-3">
                                                <Image src={circleCheck} alt="circleCheck" />
                                                <p className="text-xs sm:text-lg xl:text-xl text-white font-normal">{points[1]}</p>
                                            </div>
                                        </div>
                                        <div className="basis-[43%] p-3 border-brown-100 pl-0 border-r-2">
                                            <div className="flex items-center gap-x-3">
                                                <Image src={circleCheck} alt="circleCheck" />
                                                <p className="text-xs sm:text-lg xl:text-xl text-white font-normal">{points[2]}</p>
                                            </div>
                                        </div>
                                        <div className="basis-[43%] p-3 pr-0">
                                            <div className="flex items-center gap-x-3">
                                                <Image src={circleCheck} alt="circleCheck" />
                                                <p className="text-xs sm:text-lg xl:text-xl text-white font-normal">{points[3]}</p>
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
                {
                    page === "digitalMarketing" || page === "creativeCopywriting" ? <From /> : null
                }
            </div>
        </section>
    );
}

export default Hero;