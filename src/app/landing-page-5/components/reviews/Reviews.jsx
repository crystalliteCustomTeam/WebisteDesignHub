"use client"
// Next
import Image from "next/image";
// Hooke
import { useEffect, useRef } from "react";
// Swiper
import { register } from 'swiper/element/bundle';
import Client1 from "media/landing-page-5/mobile-app-development/testimonials/client1.png"
import Client2 from "media/landing-page-5/mobile-app-development/testimonials/client2.png"
import Client3 from "media/landing-page-5/mobile-app-development/testimonials/client3.png"
import Client4 from "media/landing-page-5/mobile-app-development/testimonials/client4.png"
import Client5 from "media/landing-page-5/mobile-app-development/testimonials/client5.png"
import Client6 from "media/landing-page-5/mobile-app-development/testimonials/client6.jpg"
import Client7 from "media/landing-page-5/mobile-app-development/testimonials/client7.jpg"
import Stars from "media/landing-page-5/mobile-app-development/testimonials/stars.png"
const Reviews = () => {
    const swiperRef = useRef(null);
    useEffect(() => {
        register();
        const params = {
            slidesPerGroupSkip: 1,
            loop: false,
            injectStyles: [`
                .swiper {
                    overflow: hidden;
                }
                .swiper-wrapper{
                    align-items:center;
                }.swiper-button-next, .swiper-button-prev {
                    top: 20px;
                    width: calc(var(--swiper-navigation-size) / 44* 18);
                    color: #4a78ef;
                }
                .swiper-button-prev{
                    left: var(--swiper-navigation-sides-offset, 91%);
                    right: auto;
                }
                .swiper-button-next {
                    right: var(--swiper-navigation-sides-offset, 40px);
                    left: auto;
                }
                @media only screen and (max-width: 1023px) {
                    .swiper-button-prev{
                        left: var(--swiper-navigation-sides-offset, 87%);
                        right: auto;
                    }
                }
                @media only screen and (max-width: 767px) {
                    .swiper-button-prev{
                        left: var(--swiper-navigation-sides-offset, 84%);
                        right: auto;
                    }
                }
                @media only screen and (max-width: 639px) {
                    .swiper-button-next, .swiper-button-prev {
                        display: none;
                    }
                }
                `
            ],
            breakpoints: {
                300: {
                    slidesPerView: 1,
                },
                1024: {
                    slidesPerView: 1,
                },
                1300: {
                    slidesPerView: 1,
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
            <div className="xl:py-[80px] lg:py-[60px] py-[40px]">
                <div className="container">
                    <div className="font-sans text-center">
                        <span className="lg:text-xl md:text-lg text-base leading-tight font-semibold tracking-widest">Reviews</span>
                        <h2 className="xl:text-[45px] lg:text-[40px] md:text-[30px] text-[25px] leading-tight font-bold my-3">Feedback From <br /> <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#eb335b] to-[#4a78ef]">Our Valued Clients!</span></h2>
                        <swiper-container init={false} ref={swiperRef} navigation="true" free-mode="false">
                            {
                                [
                                    [Client1,
                                        "BitsWits was a lifesaver for our business. We needed to create an app that could be used on multiple platforms, but we didn’t have a lot of technical know-how or additional development resources. Their team made it easy for us and delivered exactly what we needed. They stayed on top of our project and kept us informed throughout the process. We wouldn't hesitate to recommend them for any of your app development needs!",
                                        "Bryce Carlos",
                                        "CEO / Founder Soul Sound",
                                        "Soul Sound Application",
                                        "2021",
                                        "Mobile App Development"],
                                    [Client2,
                                        "We hired mobile app developers to create a completely new mobile app for our company. The team at BitsWits was really professional, efficient, and knowledgeable in the latest technologies and trends. We couldn't be happier with the results and will definitely be recommending them to anyone looking for top-notch mobile app development company.",
                                        "Aden Ward",
                                        "CO-FOUNDER PRO HEALTH",
                                        "Pro Health Application",
                                        "2018",
                                        "Web Design & Mobile Development"],
                                    [Client3,
                                        "We hired mobile app developers to create a completely new mobile app for our company. The team at BitsWits was really professional, efficient, and knowledgeable in the latest technologies and trends. We couldn't be happier with the results and will definitely be recommending them to anyone looking for top-notch mobile app development company.",
                                        "Aden Ward",
                                        "CO-FOUNDER PRO HEALTH",
                                        "Pro Health Application",
                                        "2018",
                                        "Web Design & Mobile Development"],
                                    [Client4,
                                        "We hired mobile app developers to create a completely new mobile app for our company. The team at BitsWits was really professional, efficient, and knowledgeable in the latest technologies and trends. We couldn't be happier with the results and will definitely be recommending them to anyone looking for top-notch mobile app development company.",
                                        "Aden Ward",
                                        "CO-FOUNDER PRO HEALTH",
                                        "Pro Health Application",
                                        "2018",
                                        "Web Design & Mobile Development"],
                                    [Client5,
                                        "We hired mobile app developers to create a completely new mobile app for our company. The team at BitsWits was really professional, efficient, and knowledgeable in the latest technologies and trends. We couldn't be happier with the results and will definitely be recommending them to anyone looking for top-notch mobile app development company.",
                                        "Aden Ward",
                                        "CO-FOUNDER PRO HEALTH",
                                        "Pro Health Application",
                                        "2018",
                                        "Web Design & Mobile Development"],
                                    [Client6,
                                        "We hired mobile app developers to create a completely new mobile app for our company. The team at BitsWits was really professional, efficient, and knowledgeable in the latest technologies and trends. We couldn't be happier with the results and will definitely be recommending them to anyone looking for top-notch mobile app development company.",
                                        "Aden Ward",
                                        "CO-FOUNDER PRO HEALTH",
                                        "Pro Health Application",
                                        "2018",
                                        "Web Design & Mobile Development"],
                                    [Client7,
                                        "We hired mobile app developers to create a completely new mobile app for our company. The team at BitsWits was really professional, efficient, and knowledgeable in the latest technologies and trends. We couldn't be happier with the results and will definitely be recommending them to anyone looking for top-notch mobile app development company.",
                                        "Aden Ward",
                                        "CO-FOUNDER PRO HEALTH",
                                        "Pro Health Application",
                                        "2018",
                                        "Web Design & Mobile Development"],
                                ].map(([clientImg, desc, title, work, client, year, scopeOfWork], i) => (
                                    <swiper-slide key={i} class="md:pt-[80px] sm:pt-[40px] pt-[20px]">
                                        <div className="flex justify-center">
                                            <div className="md:basis-[30%]">
                                                <div className="relative md:block hidden">
                                                    <Image src={clientImg} alt="Clients" className="absolute top-0 left-0 right-0 bottom-0 w-full 2xl:h-[350px] h-[334px] object-cover object-bottom" />
                                                </div>
                                            </div>
                                            <div className="md:basis-[65%]">
                                                <div className="border border-black text-start">
                                                    <div className="px-5 pt-5">
                                                        <Image src={Stars} alt="Stars" className="block mb-4 object-cover" />
                                                        <p className="md:text-base text-sm h-[80px] overflow-y-scroll leading-normal">{desc}</p>
                                                        <h5 className="md:text-base text-sm font-semibold mt-4 mb-2">{title}</h5>
                                                        <span className="block md:text-base text-sm font-normal leading-tight pb-2">{work}</span>
                                                    </div>
                                                    <ul>
                                                        <li className="py-[10px] px-5 border-t border-black md:text-base text-sm leading-tight flex justify-between items-center"><span className="block font-normal">Client</span><span className="block font-bold">{client}</span></li>
                                                        <li className="py-[10px] px-5 border-t border-black md:text-base text-sm leading-tight flex justify-between items-center"><span className="block font-normal">Year</span><span className="block font-bold">{year}</span></li>
                                                        <li className="py-[10px] px-5 border-t border-black md:text-base text-sm leading-tight flex justify-between items-center"><span className="block font-normal">Scope of work</span><span className="block font-bold">{scopeOfWork}</span></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
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

export default Reviews;