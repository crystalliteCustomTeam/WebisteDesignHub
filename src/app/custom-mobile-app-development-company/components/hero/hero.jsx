"use client"
// Next
import Image from "next/image"
// Hooke
import { useEffect, useRef } from "react";
// Swiper
import { register } from 'swiper/element/bundle';
// Components
import CTA from "../cta/cta"
import style from "./hero.module.css"
import Form from "../form/form";
// Media
import heroBanner from "media/landing-page-5/banner.png"
import partner1 from "media/landing-page-5/1.webp"
import partner2 from "media/landing-page-5/2.webp"
import partner3 from "media/landing-page-5/3.webp"
import partner4 from "media/landing-page-5/4.webp"
import icon1 from "media/landing-page-5/mobile-app-development/banner/icon1.png"
import icon2 from "media/landing-page-5/mobile-app-development/banner/icon2.png"
import icon4 from "media/landing-page-5/mobile-app-development/banner/icon4.png"
import Image1 from "media/landing-page-5/mobile-app-development/bottomBar/1.webp"
import Image2 from "media/landing-page-5/mobile-app-development/bottomBar/2.webp"
import Image3 from "media/landing-page-5/mobile-app-development/bottomBar/3.webp"
import Image4 from "media/landing-page-5/mobile-app-development/bottomBar/4.webp"
import Image5 from "media/landing-page-5/mobile-app-development/bottomBar/5.webp"
import Image6 from "media/landing-page-5/mobile-app-development/bottomBar/6.webp"
import Image7 from "media/landing-page-5/mobile-app-development/bottomBar/7.webp"
import Image8 from "media/landing-page-5/mobile-app-development/bottomBar/8.webp"
import Image9 from "media/landing-page-5/mobile-app-development/bottomBar/9.webp"
const Hero = () => {
    const swiperRef = useRef(null);
    useEffect(() => {
        register();
        const params = {
            slidesPerGroupSkip: 1,
            loop: "true",
            injectStyles: [`
                .swiper {
                    overflow: hidden;
                }
                .swiper-wrapper{
                    align-items:center;
                }
            `],
            breakpoints: {
                300: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
                1300: {
                    slidesPerView: 6,
                },
            },
        };
        // Assign it to swiper element
        Object.assign(swiperRef.current, params);
        // initialize swiper
        swiperRef.current.initialize();
    }, []);
    return (
        <section>
            <div className={`relative bg-[rgba(0,_0,_0,_.6)] 2xl:pt-48 md:pt-36 pt-28 md:pb-24 pb-16`}>
                <Image src={heroBanner} alt="heroBG" className="absolute top-0 left-0 right-0 bottom-0 -z-10 w-full h-full object-cover object-bottom" priority />
                <div className="container">
                    <div className="lg:flex lg:gap-x-5 items-center justify-between">
                        <div className="lg:basis-[60%] basis-full lg:mb-0 mb-10">
                            <div className="w-[85%] text-white font-sans pb-8">
                                <span className="md:text-base text-sm leading-tight font-bold mb-4 block">Transform Your Business With Our Revolutionary</span>
                                <h1 className="xl:text-[45px] lg:text-[40px] md:text-[30px] text-[23px] leading-tight font-bold mb-3">Mobile App <br /> Development Company</h1>
                                <span className="md:text-base text-sm leading-tight font-bold mb-4 block">We Don't Just Create Apps; We Create Experiences</span>
                                <p className="md:text-base text-sm md:text-start text-justify font-normal">At BitsWits, we develop innovative and user - friendly apps that have a visually appealing design and function seamlessly, meeting the specific needs of our clients.Our focus on delivering high - quality mobile apps is unwavering; as a result, we have earned a reputation as the industry's best mobile app development company.</p>
                            </div>
                            <div className="flex sm:flex-nowrap flex-wrap items-center gap-5">
                                <CTA
                                    text="Live Chat"
                                    bg="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"
                                    padding="px-16"
                                    textSize="md:text-base text-sm"
                                    rounded="rounded-none"
                                    width="sm:w-max w-full"
                                />
                                <CTA
                                    text="(855)888-8399"
                                    href="tel:(855)888-8399"
                                    bg="bg-[#000000]"
                                    padding="px-9"
                                    textSize="md:text-base text-sm"
                                    rounded="rounded-none"
                                    width="sm:w-max w-full"
                                    hover="hover:bg-white hover:text-black"
                                />
                            </div>
                            <div className="md:flex hidden xl:flex-nowrap flex-wrap items-center justify-between gap-x-5 mt-12">
                                {
                                    [
                                        [partner1],
                                        [partner2],
                                        [partner3],
                                        [partner4],
                                    ].map(([icons], i) => (
                                        <Image key={i} src={icons} alt="Partners" className="block mx-auto" />
                                    ))
                                }
                            </div>
                        </div>
                        <div className="relative lg:basis-[35%] basis-full">
                            <div className="xl:w-[90%] w-full mx-auto text-white text-center">
                                <div className={`bg-gradient-to-b from-[#7560bd] via-[#f32fc2] to-[#f32f53] xl:px-0 px-2 pt-4 pb-[160px] border-4 border-[#ee9acf] font-sans rounded-xl`}>
                                    <h2 className="xl:text-lg text-base font-bold">MAKE AN OBLIGATION-FREE ENQUIRY</h2>
                                    <Form />
                                </div>
                                <div className="bg-[#000000] rounded-b-xl border-4 border-[#f32f5e] xl:w-[89.5%] w-full mx-auto absolute left-0 right-0 bottom-0 py-5">
                                    <h4 className="font-semibold">OUR OFFICES</h4>
                                    <div className="flex items-end justify-between">
                                        {
                                            [
                                                [icon1, "USA"],
                                                [icon2, "Middle East"],
                                                [icon4, "Asia"],
                                            ].map(([icons, text], i) => (
                                                <div key={i} className="w-[80%]">
                                                    <Image src={icons} alt="icons" className="block mx-auto" />
                                                    <span className="block font-semibold text-xs mt-3">{text}</span>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#000000]">
                <div className="container">
                    <swiper-container init={false} ref={swiperRef} autoplay-delay="2500" autoplay-disable-on-interaction="false" free-mode="true" class="divide-x-2 divide-white">
                        {
                            [
                                [Image1, "Skilled Team"],
                                [Image2, "Guaranteed <br /> Innovation"],
                                [Image3, "Result-Driven <br /> Approach"],
                                [Image4, "Quality & Security"],
                                [Image5, "Increase ROI"],
                                [Image6, "12+ Years <br /> Of Experience"],
                                [Image6, "500+ <br /> Dedicated Developers"],
                                [Image6, "6500+ <br /> Happy Clients"],
                                [Image6, "10000+ <br /> PROJECTS DELIVERED"],
                                [Image7, "In-Depth Domain <br /> Knowledge"],
                                [Image8, "Integrity <br /> Transparency"],
                                [Image9, "Quick and Easy  <br /> Communication"],
                            ].map(([icons, text], i) => (
                                <swiper-slide key={i} class="py-5">
                                    <div className="text-white text-center">
                                        <Image src={icons} width={35} height={35} alt="icon" className="block mx-auto brightness-0 invert" />
                                        <span className="block text-sm mt-2 leading-snug" dangerouslySetInnerHTML={{ __html: text }} />
                                    </div>
                                </swiper-slide>
                            ))
                        }
                    </swiper-container>
                </div>
            </div>
        </section>
    )
}

export default Hero