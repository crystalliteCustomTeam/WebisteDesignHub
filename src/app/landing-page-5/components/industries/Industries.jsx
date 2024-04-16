"use client"
import Image from "next/image"
// Hooke
import { useEffect, useRef } from "react";
// Swiper
import { register } from 'swiper/element/bundle';
import Check from "media/landing-page-5/mobile-app-development/industries/tick-point.png"
import fintech from "media/landing-page-5/mobile-app-development/industries/fintech.png"
import realState from "media/landing-page-5/mobile-app-development/industries/real-state.png"
import eCommerce from "media/landing-page-5/mobile-app-development/industries/ecommerce.png"
import fitness from "media/landing-page-5/mobile-app-development/industries/fitness.png"
import restaurant from "media/landing-page-5/mobile-app-development/industries/resturant.png"
import travel from "media/landing-page-5/mobile-app-development/industries/travel.png"
import sports from "media/landing-page-5/mobile-app-development/industries/sports.png"
import social from "media/landing-page-5/mobile-app-development/industries/social.png"
import business from "media/landing-page-5/mobile-app-development/industries/business.png"
import education from "media/landing-page-5/mobile-app-development/industries/education.png"
import entertanmnt from "media/landing-page-5/mobile-app-development/industries/entertnment.png"
import logistic from "media/landing-page-5/mobile-app-development/industries/logistic.png"
import health from "media/landing-page-5/mobile-app-development/industries/health.png"
const Industries = () => {
    const swiperRef = useRef(null);
    useEffect(() => {
        register();
        const params = {
            slidesPerGroupSkip: 1,
            loop: true,
            injectStyles: [`
                .swiper {
                    overflow: hidden;
                }
                .swiper::after {
                    right: 0;
                    margin-right: 0px;
                    -webkit-backdrop-filter: blur(5px);
                    backdrop-filter: blur(5px);
                    background-color: rgba(38, 38, 38, .4);
                    content: "";
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    display: block;
                    z-index: 1;
                    height:80%;
                }
                @media only screen and (min-width: 1300px) {
                .swiper::after {
                   width: 49%;
                    }
                }
                .swiper-wrapper{
                    align-items:center;
                }
                .swiper-button-next, .swiper-button-prev {
                    top: inherit;
                    bottom: 0px;
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
                },
                1024: {
                    slidesPerView: 1,
                },
                1300: {
                    slidesPerView: 2,
                },
            },
        };
        // Assign it to swiper element
        Object.assign(swiperRef.current, params);
        // initialize swiper
        swiperRef.current.initialize();
    }, []);
    return (
        <section id="our-Industries">
            <div className="xl:pt-[80px] lg:pt-[60px] lg:pb-[60px] py-[40px] bg-[#1f1f1f]">
                <div className="container">
                    <div className="text-center font-sans text-white">
                        <span className="lg:text-xl md:text-lg text-base leading-tight font-semibold tracking-widest">Industries</span>
                        <p className="text-sm tracking-wider pt-2">WE SERVE A RANGE OF SECTORS</p>
                        <h2 className="xl:text-[45px] lg:text-[40px] md:text-[30px] text-[22px] leading-tight font-bold mt-2"><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#eb335b] to-[#4a78ef]">Mobile Application Development</span> Company For Everyone Out There</h2>
                    </div>
                </div>
                <div className="relative lg:pt-[60px] pt-[40px]">
                    <div className="container">
                        <swiper-container init={false} ref={swiperRef} navigation="true" free-mode="false" space-between="20" >
                            {
                                [
                                    [
                                        "Fintech",
                                        fintech,
                                        [
                                            "Digital Payment Systems",
                                            "Digital Payment Systems",
                                            "Digital Payment Systems",
                                            "Digital Payment Systems",
                                            "Digital Payment Systems",
                                        ]
                                    ],
                                    [
                                        "Real Estate",
                                        realState,
                                        [
                                            "MLS Solutions for Real Estate",
                                            "Virtual Property Tours",
                                            "Property Valuation Tools",
                                            "Real Estate Investment Platforms",
                                            "Property Management Solutions",
                                        ]
                                    ],
                                    [
                                        "E-Commerce",
                                        eCommerce,
                                        [
                                            "Custom eCommerce Store Development",
                                            "Shipping and fulfillment Solution",
                                            "Grocery E-Commerce Apps",
                                            "End to End MarketPlace",
                                            "AR-based eCommerce solutions",
                                        ]
                                    ],
                                    [
                                        "Fitness",
                                        fitness,
                                        [
                                            "Online Workout Coach Apps",
                                            "Fitness Tracker (with wearable integration)",
                                            "Gym Management Solutions",
                                            "Online Fitness Supplement Store Development",
                                            "Wellness Apps",
                                        ]
                                    ],
                                    [
                                        "Restaurant",
                                        restaurant,
                                        [
                                            "Food Delivery App Development",
                                            "Cloud Kitchen Delivery Solutions",
                                            "Grocery Delivery Solutions",
                                            "Direct delivery Solutions",
                                            "Restaurant PoS Software Development",
                                        ]
                                    ],
                                    [
                                        "Travel",
                                        travel,
                                        [
                                            "Travel Planning Solution",
                                            "Itinerary Management Platform",
                                            "Ticket & Hotel Booking Solutions",
                                            "Travel Loyalty & Rewards Solutions",
                                            "Car Booking Solutions",
                                        ]
                                    ],
                                    [
                                        "Sports",
                                        sports,
                                        [
                                            "Sports Training and Coaching Apps",
                                            "Sports Live Streaming Solutions",
                                            "Fantasy Sports Games Development",
                                            "Sports Betting Platforms",
                                            "AR/VR-based Game Development",
                                        ]
                                    ],
                                    [
                                        "Social Networking",
                                        social,
                                        [
                                            "Community App Development",
                                            "Dating & Matrimony App Development",
                                            "Social Networking App Development",
                                            "Messaging App Development",
                                            "Media Sharing App Development",
                                        ]
                                    ],
                                    [
                                        "Business",
                                        business,
                                        [
                                            "Sales & Marketing (CRMS)",
                                            "Employee Management (HRMS)",
                                            "HR Portals (Recruitment Platforms)",
                                            "Cloud Solutions",
                                            "Business Process Automation Solutions",
                                        ]
                                    ],
                                    [
                                        "Education",
                                        education,
                                        [
                                            "Education App Development",
                                            "E2C eLearning App Development",
                                            "Virtual Classrooms & Video Conferencing",
                                            "Learning Management System (LMS)",
                                            "Online Exam Management System",
                                        ]
                                    ],
                                    [
                                        "Entertainment",
                                        entertanmnt,
                                        [
                                            "Video Streaming Solutions",
                                            "Storyboarding and Collaboration Solutions",
                                            "Live Event Ticketing Platforms",
                                            "ML Solution for Large Data",
                                            "VFX Solutions",
                                        ]
                                    ],
                                    [
                                        "Logistics",
                                        logistic,
                                        [
                                            "Delivery Management",
                                            "Shipping Logistics Management",
                                            "Fleet Management Software",
                                            "Inventory Management Software",
                                            "Telematics Software Development",
                                        ]
                                    ],
                                    [
                                        "Healthcare",
                                        health,
                                        [
                                            "Telemedicine Solution",
                                            "Electronic Health Records (EHR)",
                                            "Practice Management Systems",
                                            "Clinical Software Solutions",
                                            "Medical Device Integrations Solutions",
                                        ]
                                    ],
                                ].map(([title, icon, list], i) => (
                                    <swiper-slide key={i} class="md:pb-[80px] sm:pb-[40px] pb-[20px]">
                                        <div className="font-sans text-white bg-[#262626] backdrop-blur-xl p-[40px]">
                                            <div className="grid sm:grid-cols-12 grid-cols-1 sm:gap-0 gap-5 items-center">
                                                <div className="col-span-7">
                                                    <h3 className="lg:text-[40px] md:text-[30px] text-[25px] leading-tight font-bold mb-5">{title}</h3>
                                                    <ul>
                                                        {list && list?.map((e, i) => (
                                                            <li key={i} className="pb-5 text-sm leading-normal"><Image src={Check} alt="Check" className="inline-block invert-[.1] mr-3" />{e}</li>
                                                        ))}
                                                    </ul>
                                                    <a href="tel:(855) 888-8399" className="block font-bold md:text-lg text-sm">BOOK A CALL</a>
                                                </div>
                                                <div className="col-span-5">
                                                    <Image src={icon} alt="fintech" className="block mx-auto" />
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

export default Industries;