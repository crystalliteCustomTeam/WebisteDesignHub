"use client"
// Import Components
import Image from "next/image";
import Link from "next/link";
import { Tab, TabPanel, Tabs, TabsBody, TabsHeader } from "@material-tailwind/react";
import { useState } from "react";
import Slider from "react-slick";
import Footer from "@/components/footer/footer";
// Import Css
import styles from "./page.module.css";
// JSON Data
import ultimatepackage from "./ultimatepackage.json"
import affordablepackages from "./affordablepackages.json"
import processData from "./process.json"
import whatweData from "./whatwe.json"
// Import Images
// Hero
import heroCheck from "media/landing-pages/website-design-develop-usa/hero/check.svg";
import heroCallEnvelope from "media/landing-pages/website-design-develop-usa/hero/callEnvelope.png";
import heroPointingGirl from "media/landing-pages/website-design-develop-usa/hero/pointingGirl.png";
// Top Rated
import topRatedOne from "media/landing-pages/website-design-develop-usa/top-rated/1.png";
import topRatedTwo from "media/landing-pages/website-design-develop-usa/top-rated/2.png";
import topRatedThree from "media/landing-pages/website-design-develop-usa/top-rated/3.png";
import topRatedFour from "media/landing-pages/website-design-develop-usa/top-rated/4.png";
import topRatedFive from "media/landing-pages/website-design-develop-usa/top-rated/5.png";
import topRatedSix from "media/landing-pages/website-design-develop-usa/top-rated/6.png";
import topRatedSeven from "media/landing-pages/website-design-develop-usa/top-rated/7.png";
import topRatedEight from "media/landing-pages/website-design-develop-usa/top-rated/8.png";
import topRatedNine from "media/landing-pages/website-design-develop-usa/top-rated/9.png";
import topRatedTen from "media/landing-pages/website-design-develop-usa/top-rated/10.png";
import topRatedEleven from "media/landing-pages/website-design-develop-usa/top-rated/11.png";
// Packages
import packagesCheckBlue from "media/landing-pages/website-design-develop-usa/packages/checkBlue.svg";
import packagesCheckOrange from "media/landing-pages/website-design-develop-usa/packages/checkOrange.svg";
import packagesChatIconBlue from "media/landing-pages/website-design-develop-usa/packages/chatIconBlue.svg";
import packagesChatIconOrange from "media/landing-pages/website-design-develop-usa/packages/chatIconOrange.svg";
import packagesCallIconBlue from "media/landing-pages/website-design-develop-usa/packages/callIconBlue.svg";
import packagesCallIconOrange from "media/landing-pages/website-design-develop-usa/packages/callIconOrange.svg";
import packagesBadge from "media/landing-pages/website-design-develop-usa/packages/badge.png";
import packagesBadgeTwo from "media/landing-pages/website-design-develop-usa/packages/badgeTwo.png";
// Portfolios
// All
import allOne from "media/landing-pages/website-design-develop/portfolios/all/one.png";
import allTwo from "media/landing-pages/website-design-develop/portfolios/all/two.png";
import allThree from "media/landing-pages/website-design-develop/portfolios/all/three.png";
import allFour from "media/landing-pages/website-design-develop/portfolios/all/four.png";
// Banner
import bannerCallIcon from "media/landing-pages/website-design-develop-usa/banner/callIcon.svg";
import bannerChatIcon from "media/landing-pages/website-design-develop-usa/banner/chatIcon.svg";
import bannerArrowIcon from "media/landing-pages/website-design-develop-usa/banner/arrowIcon.svg";
// Comprehensive Platform
import comprehensivePlatformbannerScreens from "media/landing-pages/website-design-develop-usa/comprehensive-platform/screens.png";
// Reviewss
import quoteReviews from "media/landing-pages/website-design-develop/reviews/quote.png";
import googleReviews from "media/landing-pages/website-design-develop-usa/reviews/google.png";



const Page = () => {
    // Portfolios
    const [activePortfolio, setActivePortfolio] = useState("all");
    const portfolioData = [
        {
            value: "all",
            label: "All Portfolio",
            desc: "All Portfolio",
            images: [allOne, allTwo, allThree, allFour]
        },
        {
            value: "ecommerce",
            label: "E-Commerce",
            desc: "E-Commerce",
            images: [allOne, allTwo, allThree, allFour]
        },
        {
            value: "fashion",
            label: "Fashion",
            desc: "Fashion",
            images: [allOne, allTwo, allThree, allFour]
        },
        {
            value: "food",
            label: "Food",
            desc: "Food",
            images: [allOne, allTwo, allThree, allFour]
        },
        {
            value: "real-estate",
            label: "Real Estate",
            desc: "Real Estate",
            images: [allOne, allTwo, allThree, allFour]
        },
        {
            value: "automotive",
            label: "Automotive",
            desc: "Automotive",
            images: [allOne, allTwo, allThree, allFour]
        }
    ]
    // Reviewss
    let reviewsSlider = {
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 3000,
        adaptiveHeight: false
    };
    // Hero Numbers
    let smallDeviceSliderOne = {
        dots: false,
        arrows: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        fade: false,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 3000,
        infinite: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };
    let smallDeviceSliderTwo = {
        dots: true,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        fade: false,
        autoplay: false,
        speed: 500,
        autoplaySpeed: 3000,
        infinite: false,
        responsive: [
            {
                breakpoint: 1299,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    let smallDeviceSliderThree = {
        dots: true,
        arrows: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        fade: false,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 3000,
        infinite: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    // Hero Points Array
    let heroPoints = [
        "Fully Responsive Websites",
        "Conversion Driven Designs",
        "Ready for SEO & Google Ads",
        "Reliable 24/7 Support",
        "Hosting Plans Available",
        "100% Satisfaction Gurantee"
    ]
    // Hero Counter Array
    let heroCounter = [
        {
            number: "4000+",
            content: "Projects Completed \n Successfully"
        },
        {
            number: "2000+",
            content: "Websites \n Developed"
        },
        {
            number: "1000’s",
            content: "of Brand Logos \n Designed"
        },
        {
            number: "10+",
            content: "Years in Web \n Development"
        },
        {
            number: "100%",
            content: "Satisfaction \n Guaranteed"
        },
    ]
    // Top Rated Logos Array 
    let topRatedLogos = [
        topRatedOne,
        topRatedTwo,
        topRatedThree,
        topRatedFour,
        topRatedFive,
        topRatedSix
    ]
    // Top Rated Logos Array 
    let awardsLogo = [
        topRatedSeven,
        topRatedEight,
        topRatedNine,
        topRatedTen,
        topRatedEleven
    ]
    return (
        <main>
            <section>
                <div className="bg-[#15233b] py-[100px] bg-[url('../../public/landing-pages/website-design-develop-usa/hero/bg.png')] bg-cover">
                    <div className="container">
                        <div className="flex flex-wrap lg:flex-nowrap gap-y-10 lg:gap-y-0">
                            <div className="basis-full lg:basis-3/5">
                                <h1 className="text-[35px] sm:text-[50px] lg:text-[40px] xl:text-[50px] leading-[45px] sm:leading-[60px] lg:leading-[50px] xl:leading-[60px] text-[#ffffff] font-megat font-normal mb-5">
                                    Stunning, <span className="text-[#f17724]">Responsive <br /> Websites</span> That Drive Sales!
                                </h1>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 w-max gap-x-5 gap-y-4">
                                    {
                                        heroPoints.map((e, i) => {
                                            return (<li key={i} className="text-[14px] sm:text-[16px] lg:text-[14px] xl:text-[16px] text-[#ffffff] font-sans font-medium flex items-center gap-x-3">
                                                <Image src={heroCheck} alt="heroCheck" />
                                                <span>{e}</span>
                                            </li>
                                            )
                                        })
                                    }
                                </ul>
                                <div className="flex items-center gap-x-3 mt-5">
                                    <h3 className="text-[20px] sm:text-[25px] xl:text-[30px] leading-none text-[#ffffff] font-sans font-semibold">
                                        Packages Start From
                                    </h3>
                                    <span className={`py-3 px-6 bg-[#f17724] text-[20px] sm:text-[25px] xl:text-[30px] leading-none font-sans font-bold text-[#ffffff] ${styles.__pulse}`}
                                        style={{ clipPath: 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)' }}>
                                        $299
                                    </span>
                                </div>
                                <div className="flex items-center gap-x-3 mt-5">
                                    <Image src={heroCallEnvelope} alt="heroCallEnvelope" />
                                    <div>
                                        <Link href="tel:XXX-XXX-XXXX" className="text-[20px] sm:text-[40px] leading-7 text-[#ffffff] font-sans font-bold block mb-3">
                                            XXX-XXX-XXXX
                                        </Link>
                                        <div className="flex items-center gap-x-3">
                                            <Link href="/" className="text-[14px] sm:text-[16px] font-sans leading-none font-medium text-[#f2791e] hover:underline">
                                                Start Live Chat
                                            </Link>
                                            <Link href="/" className="text-[14px] sm:text-[16px] font-sans leading-none font-medium text-[#f2791e] hover:underline">
                                                Request A Quote
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="basis-full lg:basis-2/5 relative">
                                <div className="bg-[#2069ae] p-5 xl:w-[80%] ml-auto">
                                    <h2 className="text-[20px] leading-none text-[#ffffff] font-sans font-light text-center mb-3">
                                        CALL: <span className="text-[#f17724]">XXX-XXX-XXXX</span>
                                    </h2>
                                    <p className="text-[16px] text-[#ffffff] font-sans font-light text-center mb-3">
                                        Or fill in the form below & we'll call you
                                    </p>
                                    <form>
                                        <input type="text" placeholder="Full Name*" className="w-full h-[40px] px-3 focus-visible:outline-none font-sans font-medium text-[16px] text-black mb-3 placeholder:text[#f17724] focus-visible:ring-4 ring-[#f17724]" />
                                        <input type="email" placeholder="Email Address*" className="w-full h-[40px] px-3 focus-visible:outline-none font-sans font-medium text-[16px] text-black mb-3 placeholder:text[#f17724] focus-visible:ring-4 ring-[#f17724]" />
                                        <input type="tel" placeholder="Phone*" className="w-full h-[40px] px-3 focus-visible:outline-none font-sans font-medium text-[16px] text-black mb-3 placeholder:text[#f17724] focus-visible:ring-4 ring-[#f17724]" />
                                        <textarea placeholder="Message*" className="w-full h-[100px] p-3 resize-none focus-visible:outline-none font-sans font-medium text-[16px] text-black mb-3 placeholder:text[#f17724] focus-visible:ring-4 ring-[#f17724]"></textarea>
                                        <button type="submit" className="w-full h-[40px] bg-[#f17724] text-[#ffffff] text-[18px] font-sans font-semibold hover:ring-4 hover:bg-transparent ring-[#f17724]">
                                            Get A Free Consultation
                                        </button>
                                    </form>
                                </div>
                                <Image src={heroPointingGirl} alt="heroPointingGirl" className="absolute top-[50px] left-[-130px] hidden xl:block" />
                            </div>
                        </div>
                        {/* For Desktop */}
                        <div className="hidden lg:flex lg:divide-x-2 lg:divide-[#2069ae] lg:mt-10">
                            {
                                heroCounter.map((e, i) => {
                                    return (<div key={i} className="lg:basis-1/5">
                                        <div className="text-center">
                                            <h4 className="text-[40px] xl:text-[50px] leading-none text-[#f17724] font-sans font-bold mb-3">
                                                {e.number}
                                            </h4>
                                            <p className="text-[16px] text-[#ffffff] font-sans font-light"
                                                dangerouslySetInnerHTML={{ __html: e.content.replace(/\n/g, "<br />") }} />
                                        </div>
                                    </div>
                                    )
                                })
                            }
                        </div>
                        {/* For Mobile */}
                        <div className="lg:hidden mt-10">
                            <Slider {...smallDeviceSliderOne} className="w-full">
                                {
                                    heroCounter.map((e, i) => {
                                        return (<div key={i}>
                                            <div className="text-center">
                                                <h4 className="text-[40px] xl:text-[50px] leading-none text-[#f17724] font-sans font-bold mb-3">
                                                    {e.number}
                                                </h4>
                                                <p className="text-[16px] text-[#ffffff] font-sans font-light"
                                                    dangerouslySetInnerHTML={{ __html: e.content.replace(/\n/g, "<br />") }} />
                                            </div>
                                        </div>
                                        )
                                    })
                                }
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className={`py-[100px] ${styles.__topRatedBg}`}>
                    <div className="container">
                        <div className="text-center mb-10">
                            <h2 className="text-[30px] lg:text-[40px] leading-[40px] lg:leading-[50px] text-[#0d3163] font-megat font-normal">
                                Hire Top Rated Website <br className="lg:hidden" /> <span className="text-[#f17724]">Designers & Developers</span>
                            </h2>
                        </div>
                        <div className="hidden lg:grid lg:grid-cols-6 lg:items-center lg:gap-x-10">
                            {
                                topRatedLogos.map((e, i) => {
                                    return (<div key={i}>
                                        <Image src={e} alt={e} className="block m-auto" />
                                    </div>
                                    )
                                })
                            }
                        </div>
                        <div className="lg:hidden">
                            <Slider {...smallDeviceSliderOne} className="w-full text-center">
                                {
                                    topRatedLogos.map((e, i) => {
                                        return (<Image key={i} src={e} alt={e} className="max-w-[50%]" />)
                                    })
                                }
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="py-[100px]">
                    <div className="container">
                        <div className="text-center mb-10">
                            <h2 className="text-[30px] lg:text-[40px] leading-[40px] lg:leading-[50px] text-black font-megat font-normal mb-3">
                                Affordable Web <span className="text-[#f17724]">Design & Development <br /> Packages</span> At Your Fingertips!
                            </h2>
                            <p className="text-[16px] leading-[26px] text-black font-sans font-normal">
                                Get beautifully designed, conversion driven websites at competitive pricing.
                            </p>
                        </div>
                        {
                            affordablepackages.map(({ title, packages }) => {
                                return (<div key={title}>
                                    <h2 className="text-[25px] leading-none text-[#2069ae] text-center font-sans font-semibold underline mb-10">
                                        {title}
                                    </h2>
                                    <div className="xl:hidden">
                                        <Slider {...smallDeviceSliderTwo} className="w-full">
                                            {
                                                packages.map((e, i) => {
                                                    return (<div key={i}><div className="md:w-[95%] lg:w-[80%] m-auto">
                                                        <div className={`p-5 md:p-3 lg:p-5 border-2 ${e.borderColor} rounded-2xl overflow-hidden relative`}>
                                                            <h4 className="text-[24px] md:text-[30px] leading-none font-sans font-semibold text-[#ffffff] w-max relative pr-[50px] py-[15px]">
                                                                {e.name}
                                                                <span className={`absolute top-0 right-0 bottom-0 left-0 ${e.bgColor} -z-10 rounded-r-full ml-[-30px]`}></span>
                                                            </h4>
                                                            <h5 className={`text-[40px] leading-none ${e.textColor} font-sans font-bold my-5`}>
                                                                ${e.discountedPrice} <sup className="font-medium text-[#747474]"><del>${e.originalPrice}</del></sup>
                                                            </h5>
                                                            <p className="text-[16px] leading-none text-black font-sans font-semibold">
                                                                Great for Individuals & Startups!
                                                            </p>
                                                            <div className={`overflow-y-auto h-52 my-10 ${e.theme === "blue" ? styles.__packagesBlueScroll : styles.__packagesOrangeScroll}`}>
                                                                <span className={`text-[20px] leading-none ${e.textColor} font-sans font-semibold`}>
                                                                    Deliverables
                                                                </span>
                                                                <ul className="mt-5">
                                                                    {
                                                                        e.list.map((a, i) => {
                                                                            return (<li key={i}
                                                                                className="text-[14px] text-black font-normal flex items-start gap-2 leading-[22px] mb-3">
                                                                                <Image src={e.icon} alt={e.icon} width={23} height={23} />
                                                                                <span>{a}</span>
                                                                            </li>)
                                                                        })
                                                                    }
                                                                </ul>
                                                            </div>
                                                            <button type="button"
                                                                className={`w-max px-10 rounded-full h-[50px] block ${e.bgColor} text-[#ffffff] text-[18px] font-sans font-semibold hover:ring-4 hover:bg-transparent ring-[#000000] mx-auto hover:${e.textColor} mb-5`}>
                                                                Order Now!
                                                            </button>
                                                            <span className="block h-[2px] bg-[#eaeaea]"></span>
                                                            <div className="flex justify-between mt-5 divide-x-2 divide-[#eaeaea] gap-x-5">
                                                                <div className="basis-1/2">
                                                                    <p className={`text-[10px] lg:text-[12px] leading-[22px] ${e.textColor} font-semibold`}>
                                                                        Hosting Plans Available
                                                                    </p>
                                                                    <p className="text-[10px] lg:text-[12px] leading-[22px] text-black font-semibold">
                                                                        Call for Maintenance Plans
                                                                    </p>
                                                                    <Link href="/" className={`flex items-center gap-1 text-[12px] leading-[22px] font-semibold ${e.textColor}`}>
                                                                        <Image src={e.chatIcon} alt="packagesChatIconBlue" width={30} height={30} />
                                                                        <span>Live Chat Now</span>
                                                                    </Link>
                                                                </div>
                                                                <div className="basis-1/2 text-end">
                                                                    <p className={`text-[10px] lg:text-[12px] leading-[22px] ${e.textColor} font-semibold`}>
                                                                        Call for Custom Pricing
                                                                    </p>
                                                                    <p className="text-[10px] lg:text-[12px] leading-[22px] text-black font-semibold">
                                                                        Free 30 Min Consultation
                                                                    </p>
                                                                    <Link href="/" className={`flex items-center justify-end gap-1 text-[12px] leading-[22px] font-semibold ${e.textColor}`}>
                                                                        <span>XXX-XXX-XXXX</span>
                                                                        <Image src={e.callIcon} alt="packagesCallIconBlue" width={30} height={30} />
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                            <Image src={e.badge} alt="badge" width={120} height={121} className="absolute top-3 right-3" />
                                                        </div>
                                                    </div></div>)
                                                })
                                            }
                                        </Slider>
                                    </div>
                                    <div className="hidden xl:flex xl:gap-5">
                                        {
                                            packages.map((e, i) => {
                                                return (<div className="hidden xl:block xl:basis-1/3" key={i}>
                                                    <div className={`p-5 border-2 ${e.borderColor} rounded-2xl overflow-hidden relative`}>
                                                        <h4 className="text-[30px] leading-none font-sans font-semibold text-[#ffffff] w-max relative pr-[50px] py-[15px]">
                                                            {e.name}
                                                            <span className={`absolute top-0 right-0 bottom-0 left-0 ${e.bgColor} -z-10 rounded-r-full ml-[-30px]`}></span>
                                                        </h4>
                                                        <h5 className={`text-[40px] leading-none ${e.textColor} font-sans font-bold my-5`}>
                                                            ${e.discountedPrice} <sup className="font-medium text-[#747474]"><del>${e.originalPrice}</del></sup>
                                                        </h5>
                                                        <p className="text-[16px] leading-none text-black font-sans font-semibold">
                                                            Great for Individuals & Startups!
                                                        </p>
                                                        <div className={`overflow-y-auto h-52 my-10 ${e.theme === "blue" ? styles.__packagesBlueScroll : styles.__packagesOrangeScroll}`}>
                                                            <span className={`text-[20px] leading-none ${e.textColor} font-sans font-semibold`}>
                                                                Deliverables
                                                            </span>
                                                            <ul className="mt-5">
                                                                {
                                                                    e.list.map((a, i) => {
                                                                        return (<li key={i}
                                                                            className="text-[14px] text-black font-normal flex items-start gap-2 leading-[22px] mb-3">
                                                                            <Image src={e.icon} alt={e.icon} width={23} height={23} />
                                                                            <span>{a}</span>
                                                                        </li>)
                                                                    })
                                                                }
                                                            </ul>
                                                        </div>
                                                        <button type="button"
                                                            className={`w-max px-10 rounded-full h-[50px] block ${e.bgColor} text-[#ffffff] text-[18px] font-sans font-semibold hover:ring-4 hover:bg-transparent ring-[#000000] mx-auto hover:${e.textColor} mb-5`}>
                                                            Order Now!
                                                        </button>
                                                        <span className="block h-[2px] bg-[#eaeaea]"></span>
                                                        <div className="flex justify-between mt-5 divide-x-2 divide-[#eaeaea] gap-x-5">
                                                            <div className="basis-1/2">
                                                                <p className={`text-[12px] leading-[22px] ${e.textColor} font-semibold`}>
                                                                    Hosting Plans Available
                                                                </p>
                                                                <p className="text-[12px] leading-[22px] text-black font-semibold">
                                                                    Call for Maintenance Plans
                                                                </p>
                                                                <Link href="/" className={`flex items-center gap-1 text-[12px] leading-[22px] font-semibold ${e.textColor}`}>
                                                                    <Image src={e.chatIcon} alt="packagesChatIconBlue" width={30} height={30} />
                                                                    <span>Live Chat Now</span>
                                                                </Link>
                                                            </div>
                                                            <div className="basis-1/2 text-end">
                                                                <p className={`text-[12px] leading-[22px] ${e.textColor} font-semibold`}>
                                                                    Call for Custom Pricing
                                                                </p>
                                                                <p className="text-[12px] leading-[22px] text-black font-semibold">
                                                                    Free 30 Min Consultation
                                                                </p>
                                                                <Link href="/" className={`flex items-center justify-end gap-1 text-[12px] leading-[22px] font-semibold ${e.textColor}`}>
                                                                    <span>XXX-XXX-XXXX</span>
                                                                    <Image src={e.callIcon} alt="packagesCallIconBlue" width={30} height={30} />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                        <Image src={e.badge} alt="badge" width={120} height={121} className="absolute top-3 right-3" />
                                                    </div>
                                                </div>)
                                            })
                                        }
                                    </div>
                                </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="py-[50px] md:py-[100px] bg-[url('../../public/landing-pages/website-design-develop-usa/packages/bg.jpg')] bg-cover overflow-hidden rounded-2xl px-5 relative">
                        <div className="xl:flex xl:gap-x-5">
                            <div className="xl:basis-3/4">
                                <h2 className="text-[30px] lg:text-[40px] leading-none font-sans font-semibold text-[#ffffff] w-max relative pr-[50px] py-[15px] z-10 mb-10">
                                    The Ultimate
                                    <span className="absolute top-0 right-0 bottom-0 left-0 bg-[#f17724] -z-10 rounded-r-full ml-[-30px]"></span>
                                </h2>
                                <p className="text-[16px] leading-[26px] text-[#ffffff] font-sans font-normal text-justify md:text-left">
                                    Experience the ultimate internet marketing package available! From SEO and PPC to Social Media and Branding, our all-inclusive solution provides website owners with the tools to maximize and monetize every facet of their digital marketing strategy, resulting in a surge of leads and revenue.
                                </p>
                                <div className="hidden xl:flex gap-x-2 mt-10">
                                    <div className="basis-1/3">
                                        <h5 className="text-[18px] xl:text-[22px] leading-none text-[#ffffff] font-sans font-semibold mb-3">
                                            {ultimatepackage[0].name}
                                        </h5>
                                        <ul>
                                            {
                                                ultimatepackage[0].lists.map((e, i) => {
                                                    return (
                                                        <li key={i}
                                                            className="text-[14px] text-[#ffffff] font-normal flex items-start gap-2 leading-[22px] mb-2">
                                                            <Image src={packagesCheckOrange} alt="packagesCheckOrange" />
                                                            <span>{e}</span>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                    <div className="basis-1/3">
                                        <h5 className="text-[18px] xl:text-[22px] leading-none text-[#ffffff] font-sans font-semibold mb-3">
                                            {ultimatepackage[1].name}
                                        </h5>
                                        <ul>
                                            {
                                                ultimatepackage[1].lists.map((e, i) => {
                                                    return (
                                                        <li key={i}
                                                            className="text-[14px] text-[#ffffff] font-normal flex items-start gap-2 leading-[22px] mb-2">
                                                            <Image src={packagesCheckOrange} alt="packagesCheckOrange" />
                                                            <span>{e}</span>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                        <h5 className="text-[18px] xl:text-[22px] leading-none text-[#ffffff] font-sans font-semibold my-3">
                                            {ultimatepackage[2].name}
                                        </h5>
                                        <ul>
                                            {
                                                ultimatepackage[2].lists.map((e, i) => {
                                                    return (
                                                        <li key={i}
                                                            className="text-[14px] text-[#ffffff] font-normal flex items-start gap-2 leading-[22px] mb-2">
                                                            <Image src={packagesCheckOrange} alt="packagesCheckOrange" />
                                                            <span>{e}</span>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                    <div className="basis-1/3">
                                        <h5 className="text-[18px] xl:text-[22px] leading-none text-[#ffffff] font-sans font-semibold mb-3">
                                            {ultimatepackage[3].name}
                                        </h5>
                                        <ul>
                                            {
                                                ultimatepackage[3].lists.map((e, i) => {
                                                    return (
                                                        <li key={i}
                                                            className="text-[14px] text-[#ffffff] font-normal flex items-start gap-2 leading-[22px] mb-2">
                                                            <Image src={packagesCheckOrange} alt="packagesCheckOrange" />
                                                            <span>{e}</span>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                        <h5 className="text-[18px] xl:text-[22px] leading-none text-[#ffffff] font-sans font-semibold my-3">
                                            {ultimatepackage[4].name}
                                        </h5>
                                        <ul>
                                            {
                                                ultimatepackage[4].lists.map((e, i) => {
                                                    return (
                                                        <li key={i}
                                                            className="text-[14px] text-[#ffffff] font-normal flex items-start gap-2 leading-[22px] mb-2">
                                                            <Image src={packagesCheckOrange} alt="packagesCheckOrange" />
                                                            <span>{e}</span>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                        <h5 className="text-[18px] xl:text-[22px] leading-none text-[#ffffff] font-sans font-semibold my-3">
                                            {ultimatepackage[5].name}
                                        </h5>
                                        <ul>
                                            {
                                                ultimatepackage[5].lists.map((e, i) => {
                                                    return (
                                                        <li key={i}
                                                            className="text-[14px] text-[#ffffff] font-normal flex items-start gap-2 leading-[22px] mb-2">
                                                            <Image src={packagesCheckOrange} alt="packagesCheckOrange" />
                                                            <span>{e}</span>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                </div>
                                <div className="xl:hidden my-10">
                                    <Slider {...smallDeviceSliderTwo} className="w-full">
                                        <div>
                                            <h5 className="text-[18px] xl:text-[22px] leading-none text-[#ffffff] font-sans font-semibold mb-3">
                                                {ultimatepackage[0].name}
                                            </h5>
                                            <ul>
                                                {
                                                    ultimatepackage[0].lists.map((e, i) => {
                                                        return (
                                                            <li key={i}
                                                                className="text-[14px] text-[#ffffff] font-normal flex items-start gap-2 leading-[22px] mb-2">
                                                                <Image src={packagesCheckOrange} alt="packagesCheckOrange" />
                                                                <span>{e}</span>
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </div>
                                        <div>
                                            <h5 className="text-[18px] xl:text-[22px] leading-none text-[#ffffff] font-sans font-semibold mb-3">
                                                {ultimatepackage[1].name}
                                            </h5>
                                            <ul>
                                                {
                                                    ultimatepackage[1].lists.map((e, i) => {
                                                        return (
                                                            <li key={i}
                                                                className="text-[14px] text-[#ffffff] font-normal flex items-start gap-2 leading-[22px] mb-2">
                                                                <Image src={packagesCheckOrange} alt="packagesCheckOrange" />
                                                                <span>{e}</span>
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                            <h5 className="text-[18px] xl:text-[22px] leading-none text-[#ffffff] font-sans font-semibold my-3">
                                                {ultimatepackage[2].name}
                                            </h5>
                                            <ul>
                                                {
                                                    ultimatepackage[2].lists.map((e, i) => {
                                                        return (
                                                            <li key={i}
                                                                className="text-[14px] text-[#ffffff] font-normal flex items-start gap-2 leading-[22px] mb-2">
                                                                <Image src={packagesCheckOrange} alt="packagesCheckOrange" />
                                                                <span>{e}</span>
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </div>
                                        <div>
                                            <h5 className="text-[18px] xl:text-[22px] leading-none text-[#ffffff] font-sans font-semibold mb-3">
                                                {ultimatepackage[3].name}
                                            </h5>
                                            <ul>
                                                {
                                                    ultimatepackage[3].lists.map((e, i) => {
                                                        return (
                                                            <li key={i}
                                                                className="text-[14px] text-[#ffffff] font-normal flex items-start gap-2 leading-[22px] mb-2">
                                                                <Image src={packagesCheckOrange} alt="packagesCheckOrange" />
                                                                <span>{e}</span>
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                            <h5 className="text-[18px] xl:text-[22px] leading-none text-[#ffffff] font-sans font-semibold my-3">
                                                {ultimatepackage[4].name}
                                            </h5>
                                            <ul>
                                                {
                                                    ultimatepackage[4].lists.map((e, i) => {
                                                        return (
                                                            <li key={i}
                                                                className="text-[14px] text-[#ffffff] font-normal flex items-start gap-2 leading-[22px] mb-2">
                                                                <Image src={packagesCheckOrange} alt="packagesCheckOrange" />
                                                                <span>{e}</span>
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                            <h5 className="text-[18px] xl:text-[22px] leading-none text-[#ffffff] font-sans font-semibold my-3">
                                                {ultimatepackage[5].name}
                                            </h5>
                                            <ul>
                                                {
                                                    ultimatepackage[5].lists.map((e, i) => {
                                                        return (
                                                            <li key={i}
                                                                className="text-[14px] text-[#ffffff] font-normal flex items-start gap-2 leading-[22px] mb-2">
                                                                <Image src={packagesCheckOrange} alt="packagesCheckOrange" />
                                                                <span>{e}</span>
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    </Slider>
                                </div>
                            </div>
                            <div className="xl:basis-3/12 sm:grid xl:block sm:grid-cols-2 sm:gap-5">
                                <Image src={packagesBadgeTwo} alt="packagesBadgeTwo" className="block mx-auto mb-10 md:absolute xl:relative top-3 right-5" />
                                <div className="relative z-10 p-5 pr-0 mb-5">
                                    <h5 className="text-[18px] xl: leading-none text-[#ffffff] font-sans font-semibold mb-3">
                                        {ultimatepackage[6].name}
                                    </h5>
                                    <ul>
                                        {
                                            ultimatepackage[6].lists.map((e, i) => {
                                                return (
                                                    <li key={i}
                                                        className="text-[14px] text-[#ffffff] font-normal flex items-start gap-2 leading-[22px] mb-2">
                                                        <Image src={packagesCheckOrange} alt="packagesCheckOrange" />
                                                        <span>{e}</span>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                    <span className="absolute top-0 right-0 bottom-0 left-0 bg-[#0e2d63] -z-10  xl:mr-[-30px]"></span>
                                </div>
                                <div>
                                    <h5 className="text-[18px] xl:text-[22px] leading-[32px] text-[#ffffff] font-sans font-semibold mb-5">
                                        CALL FOR CUSTOM <br /> PRICING & STRATEGY
                                    </h5>
                                    <p className="text-[16px] leading-[22px] text-[#f17724] font-semibold mb-3">
                                        Free 30 Min Consultation
                                    </p>
                                    <Link href="/" className="flex items-center gap-1 text-[16px] leading-[26px] font-semibold text-[#ffffff] mb-3">
                                        <Image src={packagesChatIconOrange} alt="packagesChatIconOrange" />
                                        <span>Live Chat Now</span>
                                    </Link>
                                    <Link href="/" className="flex items-center gap-1 text-[16px] leading-[26px] font-semibold text-[#ffffff] mb-3">
                                        <Image src={packagesCallIconOrange} alt="packagesCallIconOrange" />
                                        <span>XXX-XXX-XXXX</span>
                                    </Link>
                                    <button type="button" className="w-full rounded-full h-[50px] block bg-[#f17724] text-[#ffffff] text-[18px] font-sans font-semibold hover:ring-4 hover:bg-transparent ring-[#f17724] mx-auto hover:text-[#f17724] mb-5">
                                        Request A Quote Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="bg-[#E9E9E9] py-[100px] mt-[100px]">
                    <div className="container">
                        <div className="text-center mb-10">
                            <h2 className="text-[30px] lg:text-[40px] leading-[40px] lg:leading-[50px] text-black font-megat font-normal mb-3">
                                Explore Our Collection of <span className="text-[#f17724]">Web <br /> Design & Development</span> Projects!
                            </h2>
                            <p className="text-[16px] leading-[26px] text-black font-sans font-normal">
                                Get beautifully designed, conversion driven websites at competitive pricing.
                            </p>
                        </div>
                        <Tabs value={activePortfolio}>
                            <TabsHeader indicatorProps={{ className: "hidden" }} className="bg-transparent p-0 flex justify-center gap-3 md:gap-0 flex-wrap md:flex-nowrap md:justify-between">
                                {
                                    portfolioData.map(({ value, label }) => {
                                        return (
                                            <Tab value={value} key={value} onClick={() => setActivePortfolio(value)}
                                                className={`${activePortfolio === value ? "text-white border-[#0d3163] bg-[#0d3163]" : "border-[#707070]"} border-2 font-sans font-medium text-base rounded-[50px] w-max lg:w-[150px] xl:w-[200px] py-[0.5rem] px-[0.8rem] lg:px-0 hover:bg-[#0d3163] hover:border-[#0d3163] hover:text-white`}>
                                                {label}
                                            </Tab>
                                        );
                                    })
                                }
                            </TabsHeader>
                            <TabsBody>
                                {
                                    portfolioData.map(({ value, images }) => {
                                        return (
                                            <TabPanel value={value} key={value} className="p-0">
                                                <div className="grid grid-cols-2 gap-x-5 gap-y-5 mt-10">
                                                    <div className="col-span-2 md:col-span-1">
                                                        <div className="rounded-[10px] mb-5 h-[300px] lg:h-[400px] xl:h-[600px] overflow-hidden">
                                                            <Image src={images[0]} alt="" className="rounded-[10px] w-full" />
                                                        </div>
                                                        <div className="rounded-[10px] h-[200px] lg:h-[250px] xl:h-[400px] overflow-hidden">
                                                            <Image src={images[1]} alt="" className="rounded-[10px] w-full" />
                                                        </div>
                                                    </div>
                                                    <div className="col-span-2 md:col-span-1">
                                                        <div className="rounded-[10px] h-[520px] lg:h-[670px] xl:h-[1020px] overflow-hidden">
                                                            <Image src={images[2]} alt="" className="rounded-[10px] w-full" />
                                                        </div>
                                                    </div>
                                                    <div className="col-span-2">
                                                        <div className="rounded-[10px] h-[150px] lg:h-[400px] xl:h-[600px] overflow-hidden">
                                                            <Image src={images[3]} alt="" className="rounded-[10px] w-full" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </TabPanel>
                                        );
                                    })
                                }
                            </TabsBody>
                        </Tabs>
                    </div>
                </div>
            </section>
            <section>
                <div className="py-[50px] md:py-[100px] bg-[url('../../public/landing-pages/website-design-develop-usa/banner/bg.jpg')] bg-cover bg-no-repeat">
                    <div className="container">
                        <h2 className="text-[30px] lg:text-[40px] leading-[40px] lg:leading-[50px] text-[#ffffff] font-sans font-bold text-center">
                            Connect With Us to Get <span className="text-[#f17724]">Custom Quote</span> <br />
                            On Your Web Project <span className="text-[#f17724]">Today!</span>
                        </h2>
                        <div className="flex items-center justify-center flex-wrap gap-y-10 md:flex-nowrap xl:w-[80%] m-auto mt-10 lg:divide-x-2 lg:divide-[#2069ae]">
                            <div className="basis-full sm:basis-1/2 md:basis-1/3">
                                <Link href="/" className="flex items-center justify-center gap-3 text-[16px] lg:text-[20px] leading-none font-semibold text-[#ffffff] mb-3">
                                    <Image src={bannerCallIcon} alt="bannerCallIcon" />
                                    <span>XXX-XXX-XXXX</span>
                                </Link>
                            </div>
                            <div className="basis-full sm:basis-1/2 md:basis-1/3">
                                <Link href="/" className="flex items-center justify-center gap-3 text-[16px] lg:text-[20px] leading-none font-semibold text-[#ffffff] mb-3">
                                    <Image src={bannerChatIcon} alt="bannerChatIcon" />
                                    <span>Live Chat Now</span>
                                </Link>
                            </div>
                            <div className="basis-full sm:basis-1/2 md:basis-1/3">
                                <Link href="/" className="flex items-center justify-center gap-3 text-[16px] lg:text-[20px] leading-none font-semibold text-[#ffffff] mb-3">
                                    <Image src={bannerArrowIcon} alt="bannerArrowIcon" />
                                    <span>Request A Quote</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="py-[50px] md:py-[100px]">
                    <div className="container">
                        <div className="text-center mb-10">
                            <h2 className="text-[30px] lg:text-[40px] leading-[40px] lg:leading-[50px] text-black font-megat font-normal mb-3">
                                Here is how our <span className="text-[#f17724]">Web Design <br /> & Development</span> Process Works!
                            </h2>
                            <p className="text-[16px] leading-[26px] text-black font-sans font-normal">
                                We'll have your new website up-and-running within a master of weeks! Here's how the process works:
                            </p>
                        </div>
                        <div className="hidden lg:grid lg:gap-5 lg:grid-cols-3">
                            {
                                processData.map(({ title, content, image }, i) => {
                                    return (
                                        <div className="text-center" key={i}>
                                            <Image src={image} alt={title} width={128} height={128} className="inline-block mb-3" />
                                            <h4 className="text-[18px] xl:text-[20px] leading-[28px] xl:leading-[30px] w-max mx-auto text-black font-sans font-semibold mb-3 relative z-10">
                                                {title}
                                                <span className="absolute top-0 left-[-40px] bg-[#f17724] -z-10 rounded-[100px] text-white w-[30px] h-[30px] leading-[30px]">
                                                    {i + 1}
                                                </span>
                                            </h4>
                                            <p className="text-[14px] xl:text-[16px] leading-[26px] text-[#747474] font-sans font-normal">
                                                {content}
                                            </p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="lg:hidden">
                            <Slider {...smallDeviceSliderThree}>
                                {
                                    processData.map(({ title, content, image }, i) => {
                                        return (
                                            <div className="text-center" key={i}>
                                                <div className="w-[80%] m-auto mb-5">
                                                    <Image src={image} alt={title} width={128} height={128} className="inline-block mx-auto mb-3" />
                                                    <h4 className="text-[20px] leading-[30px] w-max mx-auto text-black font-sans font-semibold mb-3 relative z-10">
                                                        {title}
                                                        <span className="absolute top-0 left-[-40px] bg-[#f17724] -z-10 rounded-[100px] text-white w-[30px] h-[30px] leading-[30px]">
                                                            {i + 1}
                                                        </span>
                                                    </h4>
                                                    <p className="text-[16px] leading-[26px] text-[#747474] font-sans font-normal">
                                                        {content}
                                                    </p>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="py-[50px] md:py-[100px] bg-[#123380] md:bg-[url('../../public/landing-pages/website-design-develop-usa/comprehensive-platform/bg.jpg')] bg-cover bg-no-repeat">
                    <div className="container">
                        <div className="text-center mb-10">
                            <h2 className="text-[30px] lg:text-[40px] leading-[40px] lg:leading-[50px] text-[#ffffff] font-megat font-normal mb-3">
                                A Comprehensive <span className="text-[#f17724]">Web Design & Development</span> Process <br />
                                to Rule Every Platform
                            </h2>
                            <p className="text-[14px] lg:text-[16px] leading-[26px] text-[#ffffff] font-sans font-normal">
                                Your target audience will have a smooth and positive user experience on all <br />
                                platforms including mobile devices, tablets and desktop PC's
                            </p>
                        </div>
                        <Image src={comprehensivePlatformbannerScreens} alt="comprehensivePlatformbannerScreens" className="block m-auto" />
                    </div>
                </div>
            </section>
            <section>
                <div className="bg-[#f6f6f6] py-[50px] md:py-[100px]">
                    <div className="container relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-6 items-center gap-5 xl:gap-0">
                            <div className="hidden md:block md:col-span-2">
                                <Image src={googleReviews} alt="googleReviews" />
                            </div>
                            <div className="md:col-span-4 xl:px-10">
                                <h2 className="text-[30px] lg:text-[40px] leading-[40px] lg:leading-[50px] text-black font-sans font-bold mb-3">
                                    Check Out What Our <span className="text-[#f17724]">Clients <br /> Say About Us!</span>
                                </h2>
                                <Slider {...reviewsSlider} className="__reviewsSlider">
                                    <div>
                                        <p className="text-[16px] leading-[26px] font-sans font-normal  text-gray-600">
                                            "Web Design Hub created a special and eye-catching custom logo design that perfectly shows what our financial consulting firm is about. Our team and clients love it, thanks to their amazing logo design skills."
                                        </p>
                                        <span className="text-[10px] sm:text-[14px] lg:text-[16px] leading-none font-light text-white block mt-3 w-max px-2 sm:px-4 py-3 rounded-[50px] bg-[#2069ae]">
                                            — Jennifer Mitchell, Senior Financial Advisor
                                        </span>
                                    </div>
                                    <div>
                                        <p className="text-[16px] leading-[26px] font-sans font-normal  text-gray-600">
                                            “Their UI/UX web design service has significantly improved the visual appeal and functionality of our ecommerce website across devices. The user engagement on our website has increased a lot as well. Web Design Hub is the best web design company I have ever worked with.”
                                        </p>
                                        <span className="text-[10px] sm:text-[14px] lg:text-[16px] leading-none font-light text-white block mt-3 w-max px-2 sm:px-4 py-3 rounded-[50px] bg-[#2069ae]">
                                            — Sarah Johnson, E-commerce Manager
                                        </span>
                                    </div>
                                    <div>
                                        <p className="text-[16px] leading-[26px] font-sans font-normal  text-gray-600">
                                            “Hiring Web Design Hub for our tech startup web design and development has been one of the best decisions. It's not just about aesthetics; the functionality and user experience they delivered are nothing short of exceptional.”
                                        </p>
                                        <span className="text-[10px] sm:text-[14px] lg:text-[16px] leading-none font-light text-white block mt-3 w-max px-2 sm:px-4 py-3 rounded-[50px] bg-[#2069ae]">
                                            — Emily Parker, Co-founder
                                        </span>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                        <Image src={quoteReviews} alt="quoteReviews" className="absolute top-0 right-0 -z-10" />
                    </div>
                </div>
            </section>
            <section>
                <div className="py-[50px] md:py-[100px] bg-[url('../../public/landing-pages/website-design-develop-usa/banner/bg.jpg')] bg-cover bg-no-repeat">
                    <div className="container">
                        <h2 className="text-[30px] lg:text-[40px] leading-[40px] lg:leading-[50px] text-[#ffffff] font-sans font-bold text-center">
                            Connect With Us to Get <span className="text-[#f17724]">Custom Quote</span> <br />
                            On Your Web Project <span className="text-[#f17724]">Today!</span>
                        </h2>
                        <div className="flex items-center justify-center flex-wrap gap-y-10 md:flex-nowrap xl:w-[80%] m-auto mt-10 lg:divide-x-2 lg:divide-[#2069ae]">
                            <div className="basis-full sm:basis-1/2 md:basis-1/3">
                                <Link href="/" className="flex items-center justify-center gap-3 text-[16px] lg:text-[20px] leading-none font-semibold text-[#ffffff] mb-3">
                                    <Image src={bannerCallIcon} alt="bannerCallIcon" />
                                    <span>XXX-XXX-XXXX</span>
                                </Link>
                            </div>
                            <div className="basis-full sm:basis-1/2 md:basis-1/3">
                                <Link href="/" className="flex items-center justify-center gap-3 text-[16px] lg:text-[20px] leading-none font-semibold text-[#ffffff] mb-3">
                                    <Image src={bannerChatIcon} alt="bannerChatIcon" />
                                    <span>Live Chat Now</span>
                                </Link>
                            </div>
                            <div className="basis-full sm:basis-1/2 md:basis-1/3">
                                <Link href="/" className="flex items-center justify-center gap-3 text-[16px] lg:text-[20px] leading-none font-semibold text-[#ffffff] mb-3">
                                    <Image src={bannerArrowIcon} alt="bannerArrowIcon" />
                                    <span>Request A Quote</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="py-[50px] md:py-[100px]">
                    <div className="container">
                        <div className="text-center mb-10">
                            <h2 className="text-[30px] lg:text-[40px] leading-[40px] lg:leading-[50px] text-black font-megat font-normal mb-3">
                                we build websites that bring <br /> <span className="text-[#f17724]">new visitors & increase sales!</span>
                            </h2>
                            <p className="text-[16px] leading-[26px] text-black font-sans font-normal">
                                We'll have your new website up-and-running within a master of weeks! Here's how the process works:
                            </p>
                        </div>
                        <div className="hidden lg:grid lg:gap-5 lg:grid-cols-3">
                            {
                                whatweData.map(({ title, content, image }, i) => {
                                    return (
                                        <div className="flex gap-5 items-start" key={i}>
                                            <Image src={image} alt={title} width={65} height={65} />
                                            <div>
                                                <h4 className="text-[18px] xl:text-[20px] leading-none text-black font-sans font-semibold mb-3">
                                                    {title}
                                                </h4>
                                                <p className="text-[14px] xl:text-[16px] leading-[26px] text-[#747474] font-sans font-normal">
                                                    {content}
                                                </p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="lg:hidden">
                            <Slider {...smallDeviceSliderThree}>
                                {
                                    whatweData.map(({ title, content, image }, i) => {
                                        return (
                                            <div key={i}>
                                                <div className="w-[80%] m-auto mb-5 text-center">
                                                    <Image src={image} alt={title} width={65} height={65} className="m-auto" />
                                                    <div>
                                                        <h4 className="text-[18px] leading-none text-black font-sans font-semibold my-3">
                                                            {title}
                                                        </h4>
                                                        <p className="text-[14px leading-[24px] text-[#747474] font-sans font-normal">
                                                            {content}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="py-[50px] md:py-[100px] bg-[#f6f6f6]">
                    <div className="container">
                        <div className="text-center mb-10">
                            <h2 className="text-[30px] lg:text-[40px] leading-[40px] lg:leading-[50px] text-black font-megat font-normal mb-3">
                                Ready to Start Your <span className="text-[#f17724]">FREE 30 Min</span> Session
                            </h2>
                            <p className="text-[16px] leading-[26px] text-black font-sans font-normal">
                                We'd love to hear from you. Fill out the form and well be in touch within 24 hours.
                            </p>
                        </div>
                        <div className="flex flex-wrap lg:flex-nowrap gap-5">
                            <div className="basis-full lg:basis-1/2">
                                <h3 className="text-[20px] xl:text-[30px] leading-[30px] xl:leading-[40px] text-[#0d3163] font-sans font-semibold">
                                    Get A Free Digital Marketing <br /> Consultation & Get More Leads, Grow <br /> Revenue and Increase Sales
                                </h3>
                                <ul className="grid grid-cols-1 gap-y-5 mt-5">
                                    <li className="text-[16px] text-black font-sans font-normal flex items-center gap-x-3">
                                        <Image src={heroCheck} alt="heroCheck" />
                                        <span>Website audit to improve the online presence. </span>
                                    </li>
                                    <li className="text-[16px] text-black font-sans font-normal flex items-center gap-x-3">
                                        <Image src={heroCheck} alt="heroCheck" />
                                        <span>Generate qualified leads.</span>
                                    </li>
                                    <li className="text-[16px] text-black font-sans font-normal flex items-center gap-x-3">
                                        <Image src={heroCheck} alt="heroCheck" />
                                        <span>Let the experts work for you.</span>
                                    </li>
                                    <li className="text-[16px] text-black font-sans font-normal flex items-center gap-x-3">
                                        <Image src={heroCheck} alt="heroCheck" />
                                        <span>Get more visits of your business online.</span>
                                    </li>
                                    <li className="text-[16px] text-black font-sans font-normal flex items-center gap-x-3">
                                        <Image src={heroCheck} alt="heroCheck" />
                                        <span>Increase sales and grow revenue.</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="basis-full lg:basis-1/2">
                                <form>
                                    <div className="grid grid-cols-1  md:grid-cols-2 gap-3">
                                        <input type="text" placeholder="Full Name*" className="w-full h-[40px] px-3 focus-visible:outline-none font-sans font-medium text-[14px] md:text-[16px] text-black placeholder:text[#f17724] focus-visible:ring-4 ring-[#f17724]" />
                                        <input type="email" placeholder="Email Address*" className="w-full h-[40px] px-3 focus-visible:outline-none font-sans font-medium text-[14px] md:text-[16px] text-black placeholder:text[#f17724] focus-visible:ring-4 ring-[#f17724]" />
                                        <input type="tel" placeholder="Phone No*" className="w-full h-[40px] px-3 focus-visible:outline-none font-sans font-medium text-[14px] md:text-[16px] text-black placeholder:text[#f17724] focus-visible:ring-4 ring-[#f17724]" />
                                        <input type="text" placeholder="Company / Website URL" className="w-full h-[40px] px-3 focus-visible:outline-none font-sans font-medium text-[14px] md:text-[16px] text-black placeholder:text[#f17724] focus-visible:ring-4 ring-[#f17724]" />
                                    </div>
                                    <select defaultValue="Desired Services.*" className="w-full h-[40px] px-3 mt-3 focus-visible:outline-none font-sans font-medium text-[14px] md:text-[16px] text-black placeholder:text[#f17724] focus-visible:ring-4 ring-[#f17724]">
                                        <option disabled>Desired Services.*</option>
                                        <option value="1">Item 1</option>
                                        <option value="2">Item 2</option>
                                        <option value="3">Item 3</option>
                                    </select>
                                    <textarea placeholder="Please tell us more how can we help you..." className="w-full h-[100px] p-3 resize-none focus-visible:outline-none font-sans font-medium text-[14px] md:text-[16px] text-black my-3 placeholder:text[#f17724] focus-visible:ring-4 ring-[#f17724]"></textarea>
                                    <button type="submit" className="w-full h-[40px] bg-[#f17724] hover:text-black text-[#ffffff] text-[18px] font-sans font-semibold hover:ring-4 hover:bg-transparent ring-[#f17724]">
                                        Get A Free Consultation
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className={`py-[100px] ${styles.__topRatedBg}`}>
                    <div className="container">
                        <div className="text-center mb-10">
                            <h2 className="text-[30px] lg:text-[40px] leading-[40px] lg:leading-[50px] text-[#0d3163] font-megat font-normal">
                                our awards & <span className="text-[#f17724]">partnerships</span>
                            </h2>
                        </div>
                        <div className="hidden lg:grid lg:grid-cols-6 lg:items-center lg:gap-x-10">
                            {
                                topRatedLogos.map((e, i) => {
                                    return (<div key={i}>
                                        <Image src={e} alt={e} className="block m-auto" />
                                    </div>
                                    )
                                })
                            }
                        </div>
                        <div className="lg:hidden">
                            <Slider {...smallDeviceSliderOne} className="w-full text-center">
                                {
                                    topRatedLogos.map((e, i) => {
                                        return (<Image key={i} src={e} alt={e} className="max-w-[50%]" />)
                                    })
                                }
                            </Slider>
                        </div>
                        <div className="hidden lg:grid lg:grid-cols-5 items-center gap-x-10 mt-10">
                            {
                                awardsLogo.map((e, i) => {
                                    return (<div key={i}>
                                        <Image src={e} alt={e} className="block m-auto" />
                                    </div>
                                    )
                                })
                            }
                        </div>
                        <div className="lg:hidden">
                            <Slider {...smallDeviceSliderOne}>
                                {
                                    awardsLogo.map((e, i) => {
                                        return (<div key={i}>
                                            <Image src={e} alt={e} className="block m-auto max-w-[80%]" />
                                        </div>
                                        )
                                    })
                                }
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}

export default Page;