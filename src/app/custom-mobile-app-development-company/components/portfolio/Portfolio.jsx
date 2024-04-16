"use client"
import Image from "next/image"
// Hooke
import { useEffect, useRef } from "react";
// Swiper
import { register } from 'swiper/element/bundle';
import portfolio1 from "media/landing-page-5/mobile-app-development/portfolios/1.jpg"
import portfolio2 from "media/landing-page-5/mobile-app-development/portfolios/2.jpg"
import portfolio3 from "media/landing-page-5/mobile-app-development/portfolios/3.jpg"
import portfolio4 from "media/landing-page-5/mobile-app-development/portfolios/4.jpg"
import portfolio5 from "media/landing-page-5/mobile-app-development/portfolios/5.jpg"
import portfolio6 from "media/landing-page-5/mobile-app-development/portfolios/6.jpg"
import portfolio7 from "media/landing-page-5/mobile-app-development/portfolios/7.jpg"
const Portfolio = () => {
    const swiperRef = useRef(null);
    useEffect(() => {
        register();
        const params = {
            slidesPerGroupSkip: 1,
            loop: false,
            injectStyles: [`
            .swiper-button-next, .swiper-button-prev {
                top: inherit;
                bottom: -00px;
                width: calc(var(--swiper-navigation-size) / 44* 18);
                color: #4a78ef;
            }
            .swiper-button-prev{
                left: var(--swiper-navigation-sides-offset, 93%);
                right: auto;
            }
            @media only screen and (max-width: 1023px) {
                .swiper-button-prev{
                    left: var(--swiper-navigation-sides-offset, 90%);
                    right: auto;
                }
                }
                @media only screen and (max-width: 639px) {
                    .swiper-button-next, .swiper-button-prev {
                        display: none;
                    }
                }
                `],
            breakpoints: {
                300: {
                    slidesPerView: 1,
                    navigation: false,
                },
                1024: {
                    slidesPerView: 2,
                    autoplayDelay: "2500",
                    autoplayDisableOnInteraction: "false",
                },
                1300: {
                    slidesPerView: 3,
                },
            },
        };
        // Assign it to swiper element
        Object.assign(swiperRef.current, params);
        // initialize swiper
        swiperRef.current.initialize();
    }, []);
    return (
        <section id="our-work">
            <div className="xl:pt-[80px] lg:pt-[60px] pt-[40px] pb-[40px]">
                <div className="container">
                    <div className="text-center font-sans">
                        <span className="lg:text-xl md:text-lg text-base leading-tight font-semibold tracking-widest">Work</span>
                        <h2 className="xl:text-[45px] lg:text-[40px] md:text-[30px] text-[25px] leading-tight font-bold my-3">Our <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#eb335b] to-[#4a78ef]">Portfolio</span> </h2>
                        <swiper-container init={false} ref={swiperRef} navigation="true" free-mode="false" space-between="20" class="md:pt-[40px] pt-[30px]" >
                            {
                                [
                                    [portfolio1],
                                    [portfolio2],
                                    [portfolio3],
                                    [portfolio4],
                                    [portfolio5],
                                    [portfolio6],
                                    [portfolio7],
                                ].map(([portfolios], i) => (
                                    <swiper-slide key={i} class="md:pb-[80px] sm:pb-[40px] pb-[20px]">
                                        <Image src={portfolios} alt="portfolios" className="block mx-auto" />
                                        <a href="#" className="mt-5 lg:text-2xl md:text-xl text-base font-bold flex justify-between items-center">View Case Studies <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="Ourportfoliolp_arrow__HdGxD" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path></svg></a>
                                    </swiper-slide>
                                ))
                            }
                        </swiper-container>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio;