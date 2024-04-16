"use client"
import Image from "next/image"
// Hooke
import { useEffect, useRef } from "react";
// Swiper
import { register } from 'swiper/element/bundle';
import Publication1 from "media/landing-page-5/mobile-app-development/publications/1.webp"
import Publication2 from "media/landing-page-5/mobile-app-development/publications/2.webp"
import Publication3 from "media/landing-page-5/mobile-app-development/publications/3.webp"
import Publication4 from "media/landing-page-5/mobile-app-development/publications/4.webp"
import Publication5 from "media/landing-page-5/mobile-app-development/publications/5.webp"
import Publication6 from "media/landing-page-5/mobile-app-development/publications/6.webp"
import Publication7 from "media/landing-page-5/mobile-app-development/publications/7.webp"
import Publication8 from "media/landing-page-5/mobile-app-development/publications/8.webp"
import Publication9 from "media/landing-page-5/mobile-app-development/publications/9.webp"
import Publication10 from "media/landing-page-5/mobile-app-development/publications/10.webp"
import Publication11 from "media/landing-page-5/mobile-app-development/publications/11.webp"
import Publication12 from "media/landing-page-5/mobile-app-development/publications/12.webp"
const Publications = () => {
    const swiperRef = useRef(null);
    useEffect(() => {
        register();
        const params = {
            slidesPerGroupSkip: 1,
            loop: false,
            breakpoints: {
                300: {
                    slidesPerView: 2,
                    pagination:"true",
                },
            },
        };
        // Assign it to swiper element
        Object.assign(swiperRef.current, params);
        // initialize swiper
        swiperRef.current.initialize();
    }, []);
    return (
        <div className="xl:py-[80px] lg:py-[60px] py-[40px]">
            <div className="container">
                <div className="font-sans text-center">
                    <span className="lg:text-xl md:text-lg text-base leading-tight font-semibold tracking-widest">Publications</span>
                    <h2 className="xl:text-[45px] lg:text-[40px] md:text-[30px] text-[22px] leading-tight font-bold my-1">Many <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#eb335b] to-[#4a78ef]">Got Featured In Major</span> <br /> Publications Just By Working With Us.</h2>
                    <div className="sm:flex hidden mt-10 gap-5 flex-wrap justify-center items-center overflow-hidden">
                        {
                            [
                                [Publication1],
                                [Publication2],
                                [Publication3],
                                [Publication4],
                                [Publication5],
                                [Publication6],
                                [Publication7],
                                [Publication8],
                                [Publication9],
                                [Publication10],
                                [Publication11],
                                [Publication12]
                            ].map(([icon], i) => (
                                <div key={i} className="border border-[#000] group flex items-center justify-center h-[115px] w-[180px]">
                                    <Image src={icon} alt="icons" className="block transition-all ease-in-out duration-500 mx-auto grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100" />
                                </div>
                            ))
                        }
                    </div>
                    <swiper-container init={false} ref={swiperRef} space-between="20" class="sm:hidden block mt-10" >
                        {
                            [
                                [Publication1],
                                [Publication2],
                                [Publication3],
                                [Publication4],
                                [Publication5],
                                [Publication6],
                                [Publication7],
                                [Publication8],
                                [Publication9],
                                [Publication10],
                                [Publication11],
                                [Publication12]
                            ].map(([icon], i) => (
                                <swiper-slide key={i}>
                                    <div className="border border-[#000] group flex items-center justify-center sm:h-[115px] h-[90px] sm:w-[180px] w-[160px]">
                                        <Image src={icon} alt="icons" className="block transition-all ease-in-out duration-500 mx-auto md:grayscale md:opacity-50 group-hover:md:grayscale-0 group-hover:md:opacity-100" />
                                    </div>
                                </swiper-slide>
                            ))
                        }
                    </swiper-container>
                </div>
            </div>
        </div>
    )
}

export default Publications;