"use client"
// Next
import Image from "next/image";
// React
import { useEffect, useRef } from 'react';
// Media
import Award1 from "media/landing-page-5/mobile-app-development/awards/award1.png"
import Award2 from "media/landing-page-5/mobile-app-development/awards/award2.png"
import Award3 from "media/landing-page-5/mobile-app-development/awards/award3.png"
import Award4 from "media/landing-page-5/mobile-app-development/awards/award4.png"
import Award5 from "media/landing-page-5/mobile-app-development/awards/award5.png"
import Award6 from "media/landing-page-5/mobile-app-development/awards/award6.png"
import Award7 from "media/landing-page-5/mobile-app-development/awards/award7.png"
import Award8 from "media/landing-page-5/mobile-app-development/awards/award8.png"
import Award9 from "media/landing-page-5/mobile-app-development/awards/award9.png"
import Award10 from "media/landing-page-5/mobile-app-development/awards/award10.png"
import Award11 from "media/landing-page-5/mobile-app-development/awards/award11.png"
import Card from "media/footer/cards.svg"
import Facebook from "media/social/facebook.svg"
import Instagram from "media/social/instagram.svg"
import Linkedin from "media/social/linkedin.svg"
import Twitter from "media/social/twitter.svg"
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle'
import Link from "next/link";
const Footer = () => {
    const swiperRef = useRef(null);
    useEffect(() => {
        register();
        const params = {
            loop: "true",
            direction: "horizontal",
            slidesPerView: 5,
            centeredSlides: "true",
            spaceBetween: "20",
            speed: 3000,
            roundLengths: true,
            mousewheel: true,
            grabCursor: true,
            autoplay: true,
            injectStyles: [`
                .swiper {
                    overflow: hidden;
                }
                .swiper-wrapper{
                    align-items:center;
                    transition-timing-function: linear;
                }
            `],
            breakpoints: {
                1024: {
                    slidesPerView: 5,
                },
                576: {
                    slidesPerView: 3,
                },
                300: {
                    slidesPerView: 1,
                },
            },
        };
        Object.assign(swiperRef.current, params);
        swiperRef.current.initialize();
    }, []);
    return (
        <section>
            <div className="lg:pt-[50px] pt-[40px] pb-[20px] bg-[#000000]">
                <div className="container">
                    <div className="text-center font-sans text-white">
                        <h2 className="xl:text-[45px] lg:text-[40px] md:text-[30px] text-[22px] leading-tight font-bold pb-[50px]"><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#eb335b] to-[#4a78ef]">Our Partnerships</span> <br /> and Appraisals!</h2>
                        <swiper-container ref={swiperRef} init={false}>
                            {
                                [
                                    [Award1],
                                    [Award2],
                                    [Award3],
                                    [Award4],
                                    [Award5],
                                    [Award6],
                                    [Award7],
                                    [Award8],
                                    [Award9],
                                    [Award10],
                                    [Award11]
                                ].map(([Awards], i) => (
                                    <swiper-slide key={i}>
                                        <Image src={Awards} alt="Awards" width={120} height={100} className="block mx-auto" />
                                    </swiper-slide>
                                ))
                            }
                        </swiper-container>
                        <div className="flex lg:flex-nowrap flex-wrap lg:gap-0 gap-5 items-center lg:justify-between justify-center mt-14 py-5 border-t-2 border-b-2 border-black">
                            <div className="flex items-center gap-x-3 text-sm">
                                <Link href="/terms-and-conditions" className="block">Terms & Conditions</Link>
                                <span className="block">|</span>
                                <Link href="/privacy-policy" className="block">Privacy Policy</Link>
                            </div>
                            <div className="text-sm">
                                <p>Copyright © 2024 <Link href="/">webdevelopershub.co</Link> - JQTEL </p>
                            </div>
                            <div>
                                <Image src={Card} alt="card" className="block mx-auto" />
                            </div>
                        </div>
                        <div className="flex md:flex-nowrap flex-wrap md:gap-0 gap-5 md:justify-between justify-center pt-10">
                            <div className="md:basis-[75%]">
                                <p className="md:text-start sm:text-center text-justify font-light text-xs"><span className="font-semibold">Disclaimer</span>: Logo, name, and graphic representation of Web Developers Hub and its products and services are trademarks of Web Design Hub. All other company names, trademarks, and logos mentioned on this website are the property of their respective owners and do not represent or imply endorsement, sponsorship, or recommendation by Web Developers Hub or JQTEL. Furthermore, these do not constitute or imply endorsement, sponsorship, or recommendation thereof by Web Developers Hub or JQTEL, and do not constitute or imply endorsement, sponsorship, or recommendation of Web Developers Hub or JQTEL by the respective trademark owner.</p>
                            </div>
                            <div className="md:basis-[25%]">
                                <ul className="flex items-center justify-end gap-x-5">
                                {
                                    [
                                        ["https://www.facebook.com/webdesignhubofficial/", Facebook],
                                        ["https://twitter.com/webdesignhub_", Twitter],
                                        ["https://www.instagram.com/webdesignhubofficial", Instagram],
                                        ["/contact-us", Linkedin]
                                    ].map(([links, icons], i) => (
                                    <li key={i}><a href={links} target="_blank" className="bg-[#375a85] w-7 h-7 flex items-center justify-center p-1 hover:opacity-50"><Image src={icons} alt="icons" className="block" />
                                    </a></li>
                                    ))
                                }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;