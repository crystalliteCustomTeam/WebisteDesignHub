"use client"
// Import Components
import Image from "next/image";
import Link from "next/link";
import { Tab, TabPanel, Tabs, TabsBody, TabsHeader } from "@material-tailwind/react";
import { useState } from "react";
import Slider from "react-slick";
// Import Css
import styles from "./page.module.css";
// JSON Data
import ultimatepackage from "./ultimatepackage.json"
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
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";



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
        adaptiveHeight: true
    };
    return (
        <main>
            <section>
                <div className="bg-[#15233b] py-[100px] bg-[url('../../public/landing-pages/website-design-develop-usa/hero/bg.png')] bg-cover">
                    <div className="container">
                        <div className="flex">
                            <div className="basis-3/5">
                                <h1 className="text-[50px] leading-[60px] text-[#ffffff] font-megat font-normal mb-5">
                                    Stunning, <span className="text-[#f17724]">Responsive <br /> Websites</span> That Drive Sales!
                                </h1>
                                <ul className="grid grid-cols-2 w-max gap-x-5 gap-y-4">
                                    <li className="text-[16px] text-[#ffffff] font-sans font-medium flex items-center gap-x-3">
                                        <Image src={heroCheck} alt="heroCheck" />
                                        <span>Fully Responsive Websites</span>
                                    </li>
                                    <li className="text-[16px] text-[#ffffff] font-sans font-medium flex items-center gap-x-3">
                                        <Image src={heroCheck} alt="heroCheck" />
                                        <span>Conversion Driven Designs</span>
                                    </li>
                                    <li className="text-[16px] text-[#ffffff] font-sans font-medium flex items-center gap-x-3">
                                        <Image src={heroCheck} alt="heroCheck" />
                                        <span>Ready for SEO & Google Ads</span>
                                    </li>
                                    <li className="text-[16px] text-[#ffffff] font-sans font-medium flex items-center gap-x-3">
                                        <Image src={heroCheck} alt="heroCheck" />
                                        <span>Reliable 24/7 Support</span>
                                    </li>
                                    <li className="text-[16px] text-[#ffffff] font-sans font-medium flex items-center gap-x-3">
                                        <Image src={heroCheck} alt="heroCheck" />
                                        <span>Hosting Plans Available</span>
                                    </li>
                                    <li className="text-[16px] text-[#ffffff] font-sans font-medium flex items-center gap-x-3">
                                        <Image src={heroCheck} alt="heroCheck" />
                                        <span>100% Satisfaction Gurantee</span>
                                    </li>
                                </ul>
                                <div className="flex items-center gap-x-3 mt-5">
                                    <h3 className="text-[30px] leading-none text-[#ffffff] font-sans font-semibold">
                                        Packages Start From
                                    </h3>
                                    <span className={`py-3 px-6 bg-[#f17724] text-[30px] leading-none font-sans font-bold text-[#ffffff] ${styles.__pulse}`}
                                        style={{ clipPath: 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)' }}>
                                        $299
                                    </span>
                                </div>
                                <div className="flex items-center gap-x-3 mt-5">
                                    <Image src={heroCallEnvelope} alt="heroCallEnvelope" />
                                    <div>
                                        <Link href="tel:XXX-XXX-XXXX" className="text-[40px] leading-7 text-[#ffffff] font-sans font-bold block mb-3">
                                            XXX-XXX-XXXX
                                        </Link>
                                        <div className="flex items-center gap-x-3">
                                            <Link href="/" className="text-[16px] font-sans leading-none font-medium text-[#f2791e] hover:underline">
                                                Start Live Chat
                                            </Link>
                                            <Link href="/" className="text-[16px] font-sans leading-none font-medium text-[#f2791e] hover:underline">
                                                Request A Quote
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="basis-2/5 relative">
                                <div className="bg-[#2069ae] p-5 w-[80%] ml-auto">
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
                                <Image src={heroPointingGirl} alt="heroPointingGirl" className="absolute top-[50px] left-[-130px]" />
                            </div>
                        </div>
                        <div className="flex divide-x-2 divide-[#2069ae] mt-10">
                            <div className="basis-1/5">
                                <div className="text-center">
                                    <h4 className="text-[50px] leading-none text-[#f17724] font-sans font-bold mb-3">
                                        4000+
                                    </h4>
                                    <p className="text-[16px] text-[#ffffff] font-sans font-light">
                                        Projects Completed <br /> Successfully
                                    </p>
                                </div>
                            </div>
                            <div className="basis-1/5">
                                <div className="text-center">
                                    <h4 className="text-[50px] leading-none text-[#f17724] font-sans font-bold mb-3">
                                        2000+
                                    </h4>
                                    <p className="text-[16px] text-[#ffffff] font-sans font-light">
                                        Websites <br /> Developed
                                    </p>
                                </div>
                            </div>
                            <div className="basis-1/5">
                                <div className="text-center">
                                    <h4 className="text-[50px] leading-none text-[#f17724] font-sans font-bold mb-3">
                                        1000’s
                                    </h4>
                                    <p className="text-[16px] text-[#ffffff] font-sans font-light">
                                        of Brand Logos <br /> Designed
                                    </p>
                                </div>
                            </div>
                            <div className="basis-1/5">
                                <div className="text-center">
                                    <h4 className="text-[50px] leading-none text-[#f17724] font-sans font-bold mb-3">
                                        10+
                                    </h4>
                                    <p className="text-[16px] text-[#ffffff] font-sans font-light">
                                        Years in Web <br /> Development
                                    </p>
                                </div>
                            </div>
                            <div className="basis-1/5">
                                <div className="text-center">
                                    <h4 className="text-[50px] leading-none text-[#f17724] font-sans font-bold mb-3">
                                        100%
                                    </h4>
                                    <p className="text-[16px] text-[#ffffff] font-sans font-light">
                                        Satisfaction <br /> Guaranteed
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className={`py-[100px] ${styles.__topRatedBg}`}>
                    <div className="container">
                        <div className="text-center mb-10">
                            <h2 className="text-[40px] leading-[50px] text-[#0d3163] font-megat font-normal">
                                Hire Top Rated Website <span className="text-[#f17724]">Designers & Developers</span>
                            </h2>
                        </div>
                        <div className="grid grid-cols-6 items-center gap-x-10">
                            <div>
                                <Image src={topRatedOne} alt="topRatedOne" />
                            </div>
                            <div>
                                <Image src={topRatedTwo} alt="topRatedTwo" />
                            </div>
                            <div>
                                <Image src={topRatedThree} alt="topRatedThree" />
                            </div>
                            <div>
                                <Image src={topRatedFour} alt="topRatedFour" />
                            </div>
                            <div>
                                <Image src={topRatedFive} alt="topRatedFive" />
                            </div>
                            <div>
                                <Image src={topRatedSix} alt="topRatedSix" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="py-[100px]">
                    <div className="container">
                        <div className="text-center mb-10">
                            <h2 className="text-[40px] leading-[50px] text-black font-megat font-normal mb-3">
                                Affordable Web <span className="text-[#f17724]">Design & Development <br /> Packages</span> At Your Fingertips!
                            </h2>
                            <p className="text-[16px] leading-[26px] text-black font-sans font-normal">
                                Get beautifully designed, conversion driven websites at competitive pricing.
                            </p>
                        </div>
                        <h2 className="text-[25px] leading-none text-[#2069ae] text-center font-sans font-semibold underline mb-10">
                            STANDARD PACKAGES
                        </h2>
                        <div className="flex gap-x-5">
                            <div className="basis-1/3">
                                <div className="p-5 border-2 border-[#0d3163] rounded-2xl overflow-hidden relative">
                                    <h4 className="text-[30px] leading-none font-sans font-semibold text-[#ffffff] w-max relative pr-[50px] py-[15px]">
                                        Templated
                                        <span className="absolute top-0 right-0 bottom-0 left-0 bg-[#0d3163] -z-10 rounded-r-full ml-[-30px]"></span>
                                    </h4>
                                    <h5 className="text-[40px] leading-none text-[#0d3163] font-sans font-bold my-5">
                                        $299 <sup className="font-medium text-[#747474]"><del>$599</del></sup>
                                    </h5>
                                    <p className="text-[16px] leading-none text-black font-sans font-semibold">
                                        Great for Individuals & Startups!
                                    </p>
                                    <div className={`overflow-y-auto h-52 my-10 ${styles.__packagesBlueScroll}`}>
                                        <span className="text-[20px] leading-none text-[#0d3163] font-sans font-semibold">
                                            Deliverables
                                        </span>
                                        <ul className="mt-5">
                                            <li className="text-[16px] text-black font-normal flex items-start gap-2 leading-[24px] mb-3">
                                                <Image src={packagesCheckBlue} alt="packagesCheckBlue" />
                                                <span>3 Page Website</span>
                                            </li>
                                            <li className="text-[16px] text-black font-normal flex items-start gap-2 leading-[24px] mb-3">
                                                <Image src={packagesCheckBlue} alt="packagesCheckBlue" />
                                                <span>Theme Based Design</span>
                                            </li>
                                            <li className="text-[16px] text-black font-normal flex items-start gap-2 leading-[24px] mb-3">
                                                <Image src={packagesCheckBlue} alt="packagesCheckBlue" />
                                                <span>Stock Photography</span>
                                            </li>
                                            <li className="text-[16px] text-black font-normal flex items-start gap-2 leading-[24px] mb-3">
                                                <Image src={packagesCheckBlue} alt="packagesCheckBlue" />
                                                <span>Responsive Design</span>
                                            </li>
                                            <li className="text-[16px] text-black font-normal flex items-start gap-2 leading-[24px] mb-3">
                                                <Image src={packagesCheckBlue} alt="packagesCheckBlue" />
                                                <span>Turnaround 3 Days</span>
                                            </li>
                                            <li className="text-[16px] text-black font-normal flex items-start gap-2 leading-[24px] mb-3">
                                                <Image src={packagesCheckBlue} alt="packagesCheckBlue" />
                                                <span>Social Media Integration</span>
                                            </li>
                                            <li className="text-[16px] text-black font-normal flex items-start gap-2 leading-[24px] mb-3">
                                                <Image src={packagesCheckBlue} alt="packagesCheckBlue" />
                                                <span>Contact Forms Included</span>
                                            </li>
                                            <li className="text-[16px] text-black font-normal flex items-start gap-2 leading-[24px] mb-3">
                                                <Image src={packagesCheckBlue} alt="packagesCheckBlue" />
                                                <span>Content Not Included!</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <button type="button" className="w-max px-10 rounded-full h-[50px] block bg-[#0d3163] text-[#ffffff] text-[18px] font-sans font-semibold hover:ring-4 hover:bg-transparent ring-[#0d3163] mx-auto hover:text-[#0d3163] mb-5">
                                        Order Now!
                                    </button>
                                    <span className="block h-[2px] bg-[#eaeaea]"></span>
                                    <div className="flex justify-between mt-5 divide-x-2 divide-[#eaeaea] gap-x-5">
                                        <div className="basis-1/2">
                                            <p className="text-[12px] leading-[22px] text-[#0d3163] font-semibold">
                                                Hosting Plans Available
                                            </p>
                                            <p className="text-[12px] leading-[22px] text-black font-semibold">
                                                Call for Maintenance Plans
                                            </p>
                                            <Link href="/" className="flex items-center gap-1 text-[12px] leading-[22px] font-semibold text-[#0d3163]">
                                                <Image src={packagesChatIconBlue} alt="packagesChatIconBlue" />
                                                <span>Live Chat Now</span>
                                            </Link>
                                        </div>
                                        <div className="basis-1/2 text-end">
                                            <p className="text-[12px] leading-[22px] text-[#0d3163] font-semibold">
                                                Call for Custom Pricing
                                            </p>
                                            <p className="text-[12px] leading-[22px] text-black font-semibold">
                                                Free 30 Min Consultation
                                            </p>
                                            <Link href="/" className="flex items-center justify-end gap-1 text-[12px] leading-[22px] font-semibold text-[#0d3163]">
                                                <span>XXX-XXX-XXXX</span>
                                                <Image src={packagesCallIconBlue} alt="packagesCallIconBlue" />
                                            </Link>
                                        </div>
                                    </div>
                                    <Image src={packagesBadge} alt="packagesBadge" className="absolute top-3 right-3" />
                                </div>
                            </div>
                            <div className="basis-1/3">
                                <div className="p-5 border-2 border-[#f17724] rounded-2xl overflow-hidden relative">
                                    <h4 className="text-[30px] leading-none font-sans font-semibold text-[#ffffff] w-max relative pr-[50px] py-[15px]">
                                        Professional
                                        <span className="absolute top-0 right-0 bottom-0 left-0 bg-[#f17724] -z-10 rounded-r-full ml-[-30px]"></span>
                                    </h4>
                                    <h5 className="text-[40px] leading-none text-[#f17724] font-sans font-bold my-5">
                                        $299 <sup className="font-medium text-[#747474]"><del>$599</del></sup>
                                    </h5>
                                    <p className="text-[16px] leading-none text-black font-sans font-semibold">
                                        Great for Individuals & Startups!
                                    </p>
                                    <div className={`overflow-y-auto h-52 my-10 ${styles.__packagesOrangeScroll}`}>
                                        <span className="text-[20px] leading-none text-[#f17724] font-sans font-semibold">
                                            Deliverables
                                        </span>
                                        <ul className="mt-5">
                                            <li className="text-[16px] text-black font-normal flex items-start gap-2 leading-[24px] mb-3">
                                                <Image src={packagesCheckOrange} alt="packagesCheckOrange" />
                                                <span>3 Page Website</span>
                                            </li>
                                            <li className="text-[16px] text-black font-normal flex items-start gap-2 leading-[24px] mb-3">
                                                <Image src={packagesCheckOrange} alt="packagesCheckOrange" />
                                                <span>Theme Based Design</span>
                                            </li>
                                            <li className="text-[16px] text-black font-normal flex items-start gap-2 leading-[24px] mb-3">
                                                <Image src={packagesCheckOrange} alt="packagesCheckOrange" />
                                                <span>Stock Photography</span>
                                            </li>
                                            <li className="text-[16px] text-black font-normal flex items-start gap-2 leading-[24px] mb-3">
                                                <Image src={packagesCheckOrange} alt="packagesCheckOrange" />
                                                <span>Responsive Design</span>
                                            </li>
                                            <li className="text-[16px] text-black font-normal flex items-start gap-2 leading-[24px] mb-3">
                                                <Image src={packagesCheckOrange} alt="packagesCheckOrange" />
                                                <span>Turnaround 3 Days</span>
                                            </li>
                                            <li className="text-[16px] text-black font-normal flex items-start gap-2 leading-[24px] mb-3">
                                                <Image src={packagesCheckOrange} alt="packagesCheckOrange" />
                                                <span>Social Media Integration</span>
                                            </li>
                                            <li className="text-[16px] text-black font-normal flex items-start gap-2 leading-[24px] mb-3">
                                                <Image src={packagesCheckOrange} alt="packagesCheckOrange" />
                                                <span>Contact Forms Included</span>
                                            </li>
                                            <li className="text-[16px] text-black font-normal flex items-start gap-2 leading-[24px] mb-3">
                                                <Image src={packagesCheckOrange} alt="packagesCheckOrange" />
                                                <span>Content Not Included!</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <button type="button" className="w-max px-10 rounded-full h-[50px] block bg-[#f17724] text-[#ffffff] text-[18px] font-sans font-semibold hover:ring-4 hover:bg-transparent ring-[#f17724] mx-auto hover:text-[#f17724] mb-5">
                                        Order Now!
                                    </button>
                                    <span className="block h-[2px] bg-[#eaeaea]"></span>
                                    <div className="flex justify-between mt-5 divide-x-2 divide-[#eaeaea] gap-x-5">
                                        <div className="basis-1/2">
                                            <p className="text-[12px] leading-[22px] text-[#f17724] font-semibold">
                                                Hosting Plans Available
                                            </p>
                                            <p className="text-[12px] leading-[22px] text-black font-semibold">
                                                Call for Maintenance Plans
                                            </p>
                                            <Link href="/" className="flex items-center gap-1 text-[12px] leading-[22px] font-semibold text-[#f17724]">
                                                <Image src={packagesChatIconOrange} alt="packagesChatIconOrange" />
                                                <span>Live Chat Now</span>
                                            </Link>
                                        </div>
                                        <div className="basis-1/2 text-end">
                                            <p className="text-[12px] leading-[22px] text-[#f17724] font-semibold">
                                                Call for Custom Pricing
                                            </p>
                                            <p className="text-[12px] leading-[22px] text-black font-semibold">
                                                Free 30 Min Consultation
                                            </p>
                                            <Link href="/" className="flex items-center justify-end gap-1 text-[12px] leading-[22px] font-semibold text-[#f17724]">
                                                <span>XXX-XXX-XXXX</span>
                                                <Image src={packagesCallIconOrange} alt="packagesCallIconOrange" />
                                            </Link>
                                        </div>
                                    </div>
                                    <Image src={packagesBadge} alt="packagesBadge" className="absolute top-3 right-3" />
                                </div>
                            </div>
                            <div className="basis-1/3">
                                <div className="p-5 border-2 border-[#0d3163] rounded-2xl overflow-hidden relative">
                                    <h4 className="text-[30px] leading-none font-sans font-semibold text-[#ffffff] w-max relative pr-[50px] py-[15px]">
                                        Templated
                                        <span className="absolute top-0 right-0 bottom-0 left-0 bg-[#0d3163] -z-10 rounded-r-full ml-[-30px]"></span>
                                    </h4>
                                    <h5 className="text-[40px] leading-none text-[#0d3163] font-sans font-bold my-5">
                                        $299 <sup className="font-medium text-[#747474]"><del>$599</del></sup>
                                    </h5>
                                    <p className="text-[16px] leading-none text-black font-sans font-semibold">
                                        Great for Individuals & Startups!
                                    </p>
                                    <div className={`overflow-y-auto h-52 my-10 ${styles.__packagesBlueScroll}`}>
                                        <span className="text-[20px] leading-none text-[#0d3163] font-sans font-semibold">
                                            Deliverables
                                        </span>
                                        <ul className="mt-5">
                                            <li className="text-[16px] text-black font-normal flex items-start gap-2 leading-[24px] mb-3">
                                                <Image src={packagesCheckBlue} alt="packagesCheckBlue" />
                                                <span>3 Page Website</span>
                                            </li>
                                            <li className="text-[16px] text-black font-normal flex items-start gap-2 leading-[24px] mb-3">
                                                <Image src={packagesCheckBlue} alt="packagesCheckBlue" />
                                                <span>Theme Based Design</span>
                                            </li>
                                            <li className="text-[16px] text-black font-normal flex items-start gap-2 leading-[24px] mb-3">
                                                <Image src={packagesCheckBlue} alt="packagesCheckBlue" />
                                                <span>Stock Photography</span>
                                            </li>
                                            <li className="text-[16px] text-black font-normal flex items-start gap-2 leading-[24px] mb-3">
                                                <Image src={packagesCheckBlue} alt="packagesCheckBlue" />
                                                <span>Responsive Design</span>
                                            </li>
                                            <li className="text-[16px] text-black font-normal flex items-start gap-2 leading-[24px] mb-3">
                                                <Image src={packagesCheckBlue} alt="packagesCheckBlue" />
                                                <span>Turnaround 3 Days</span>
                                            </li>
                                            <li className="text-[16px] text-black font-normal flex items-start gap-2 leading-[24px] mb-3">
                                                <Image src={packagesCheckBlue} alt="packagesCheckBlue" />
                                                <span>Social Media Integration</span>
                                            </li>
                                            <li className="text-[16px] text-black font-normal flex items-start gap-2 leading-[24px] mb-3">
                                                <Image src={packagesCheckBlue} alt="packagesCheckBlue" />
                                                <span>Contact Forms Included</span>
                                            </li>
                                            <li className="text-[16px] text-black font-normal flex items-start gap-2 leading-[24px] mb-3">
                                                <Image src={packagesCheckBlue} alt="packagesCheckBlue" />
                                                <span>Content Not Included!</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <button type="button" className="w-max px-10 rounded-full h-[50px] block bg-[#0d3163] text-[#ffffff] text-[18px] font-sans font-semibold hover:ring-4 hover:bg-transparent ring-[#0d3163] mx-auto hover:text-[#0d3163] mb-5">
                                        Order Now!
                                    </button>
                                    <span className="block h-[2px] bg-[#eaeaea]"></span>
                                    <div className="flex justify-between mt-5 divide-x-2 divide-[#eaeaea] gap-x-5">
                                        <div className="basis-1/2">
                                            <p className="text-[12px] leading-[22px] text-[#0d3163] font-semibold">
                                                Hosting Plans Available
                                            </p>
                                            <p className="text-[12px] leading-[22px] text-black font-semibold">
                                                Call for Maintenance Plans
                                            </p>
                                            <Link href="/" className="flex items-center gap-1 text-[12px] leading-[22px] font-semibold text-[#0d3163]">
                                                <Image src={packagesChatIconBlue} alt="packagesChatIconBlue" />
                                                <span>Live Chat Now</span>
                                            </Link>
                                        </div>
                                        <div className="basis-1/2 text-end">
                                            <p className="text-[12px] leading-[22px] text-[#0d3163] font-semibold">
                                                Call for Custom Pricing
                                            </p>
                                            <p className="text-[12px] leading-[22px] text-black font-semibold">
                                                Free 30 Min Consultation
                                            </p>
                                            <Link href="/" className="flex items-center justify-end gap-1 text-[12px] leading-[22px] font-semibold text-[#0d3163]">
                                                <span>XXX-XXX-XXXX</span>
                                                <Image src={packagesCallIconBlue} alt="packagesCallIconBlue" />
                                            </Link>
                                        </div>
                                    </div>
                                    <Image src={packagesBadge} alt="packagesBadge" className="absolute top-3 right-3" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="py-[100px] bg-[url('../../public/landing-pages/website-design-develop-usa/packages/bg.jpg')] bg-cover overflow-hidden rounded-2xl px-5">
                        <div className="flex gap-x-5">
                            <div className="basis-3/4">
                                <h2 className="text-[40px] leading-none font-sans font-semibold text-[#ffffff] w-max relative pr-[50px] py-[15px] z-10 mb-10">
                                    The Ultimate
                                    <span className="absolute top-0 right-0 bottom-0 left-0 bg-[#f17724] -z-10 rounded-r-full ml-[-30px]"></span>
                                </h2>
                                <p className="text-[16px] leading-[26px] text-[#ffffff] font-sans font-normal">
                                    Experience the ultimate internet marketing package available! From SEO and PPC to Social Media and Branding, our all-inclusive solution provides website owners with the tools to maximize and monetize every facet of their digital marketing strategy, resulting in a surge of leads and revenue.
                                </p>
                                <div className="flex gap-x-2 mt-10">
                                    <div className="basis-1/3">
                                        <h5 className="text-[22px] leading-none text-[#ffffff] font-sans font-semibold mb-3">
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
                                        <h5 className="text-[22px] leading-none text-[#ffffff] font-sans font-semibold mb-3">
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
                                        <h5 className="text-[22px] leading-none text-[#ffffff] font-sans font-semibold my-3">
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
                                        <h5 className="text-[22px] leading-none text-[#ffffff] font-sans font-semibold mb-3">
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
                                        <h5 className="text-[22px] leading-none text-[#ffffff] font-sans font-semibold my-3">
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
                                        <h5 className="text-[22px] leading-none text-[#ffffff] font-sans font-semibold my-3">
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
                            </div>
                            <div className="basis-3/12">
                                <Image src={packagesBadgeTwo} alt="packagesBadgeTwo" className="block mx-auto mb-10" />
                                <div className="relative z-10 p-5 pr-0 mb-5">
                                    <h5 className="text-[22px] leading-none text-[#ffffff] font-sans font-semibold mb-3">
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
                                    <span className="absolute top-0 right-0 bottom-0 left-0 bg-[#0e2d63] -z-10  mr-[-30px]"></span>
                                </div>
                                <h5 className="text-[22px] leading-[32px] text-[#ffffff] font-sans font-semibold mb-5">
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
            </section>
            <section>
                <div className="bg-[#E9E9E9] py-[100px] mt-[100px]">
                    <div className="container">
                        <div className="text-center mb-10">
                            <h2 className="text-[40px] leading-[50px] text-black font-megat font-normal mb-3">
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
                <div className="py-[100px] bg-[url('../../public/landing-pages/website-design-develop-usa/banner/bg.jpg')] bg-cover bg-no-repeat">
                    <div className="container">
                        <h2 className="text-[40px] leading-[50px] text-[#ffffff] font-sans font-bold text-center">
                            Connect With Us to Get <span className="text-[#f17724]">Custom Quote</span> <br />
                            On Your Web Project <span className="text-[#f17724]">Today!</span>
                        </h2>
                        <div className="flex items-center justify-center w-[80%] m-auto mt-10 divide-x-2 divide-[#2069ae]">
                            <div className="basis-1/3">
                                <Link href="/" className="flex items-center justify-center gap-3 text-[20px] leading-none font-semibold text-[#ffffff] mb-3">
                                    <Image src={bannerCallIcon} alt="bannerCallIcon" />
                                    <span>XXX-XXX-XXXX</span>
                                </Link>
                            </div>
                            <div className="basis-1/3">
                                <Link href="/" className="flex items-center justify-center gap-3 text-[20px] leading-none font-semibold text-[#ffffff] mb-3">
                                    <Image src={bannerChatIcon} alt="bannerChatIcon" />
                                    <span>Live Chat Now</span>
                                </Link>
                            </div>
                            <div className="basis-1/3">
                                <Link href="/" className="flex items-center justify-center gap-3 text-[20px] leading-none font-semibold text-[#ffffff] mb-3">
                                    <Image src={bannerArrowIcon} alt="bannerArrowIcon" />
                                    <span>Request A Quote</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="py-[100px]">
                    <div className="container">
                        <div className="text-center mb-10">
                            <h2 className="text-[40px] leading-[50px] text-black font-megat font-normal mb-3">
                                Here is how our <span className="text-[#f17724]">Web Design <br /> & Development</span> Process Works!
                            </h2>
                            <p className="text-[16px] leading-[26px] text-black font-sans font-normal">
                                We'll have your new website up-and-running within a master of weeks! Here's how the process works:
                            </p>
                        </div>
                        <div className="grid gap-5 grid-cols-3">
                            {
                                processData.map(({ title, content, image }, i) => {
                                    return (
                                        <div className="text-center" key={i}>
                                            <Image src={image} alt={title} width={128} height={128} className="inline-block mb-3" />
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
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="py-[100px] bg-[url('../../public/landing-pages/website-design-develop-usa/comprehensive-platform/bg.jpg')] bg-cover bg-no-repeat">
                    <div className="container">
                        <div className="text-center mb-10">
                            <h2 className="text-[40px] leading-[50px] text-[#ffffff] font-megat font-normal mb-3">
                                A Comprehensive <span className="text-[#f17724]">Web Design & Development</span> Process <br />
                                to Rule Every Platform
                            </h2>
                            <p className="text-[16px] leading-[26px] text-[#ffffff] font-sans font-normal">
                                Your target audience will have a smooth and positive user experience on all <br />
                                platforms including mobile devices, tablets and desktop PC's
                            </p>
                        </div>
                        <Image src={comprehensivePlatformbannerScreens} alt="comprehensivePlatformbannerScreens" className="block m-auto" />
                    </div>
                </div>
            </section>
            <section>
                <div className="bg-[#f6f6f6] py-[100px]">
                    <div className="container relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-6 items-center gap-5 xl:gap-0">
                            <div className="hidden md:block md:col-span-2">
                                <Image src={googleReviews} alt="googleReviews" />
                            </div>
                            <div className="md:col-span-4 xl:px-10">
                                <h2 className="text-[40px] leading-[50px] text-black font-sans font-bold mb-3">
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
                <div className="py-[100px] bg-[url('../../public/landing-pages/website-design-develop-usa/banner/bg.jpg')] bg-cover bg-no-repeat">
                    <div className="container">
                        <h2 className="text-[40px] leading-[50px] text-[#ffffff] font-sans font-bold text-center">
                            Connect With Us to Get <span className="text-[#f17724]">Custom Quote</span> <br />
                            On Your Web Project <span className="text-[#f17724]">Today!</span>
                        </h2>
                        <div className="flex items-center justify-center w-[80%] m-auto mt-10 divide-x-2 divide-[#2069ae]">
                            <div className="basis-1/3">
                                <Link href="/" className="flex items-center justify-center gap-3 text-[20px] leading-none font-semibold text-[#ffffff] mb-3">
                                    <Image src={bannerCallIcon} alt="bannerCallIcon" />
                                    <span>XXX-XXX-XXXX</span>
                                </Link>
                            </div>
                            <div className="basis-1/3">
                                <Link href="/" className="flex items-center justify-center gap-3 text-[20px] leading-none font-semibold text-[#ffffff] mb-3">
                                    <Image src={bannerChatIcon} alt="bannerChatIcon" />
                                    <span>Live Chat Now</span>
                                </Link>
                            </div>
                            <div className="basis-1/3">
                                <Link href="/" className="flex items-center justify-center gap-3 text-[20px] leading-none font-semibold text-[#ffffff] mb-3">
                                    <Image src={bannerArrowIcon} alt="bannerArrowIcon" />
                                    <span>Request A Quote</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="py-[100px]">
                    <div className="container">
                        <div className="text-center mb-10">
                            <h2 className="text-[40px] leading-[50px] text-black font-megat font-normal mb-3">
                                we build websites that bring <br /> <span className="text-[#f17724]">new visitors & increase sales!</span>
                            </h2>
                            <p className="text-[16px] leading-[26px] text-black font-sans font-normal">
                                We'll have your new website up-and-running within a master of weeks! Here's how the process works:
                            </p>
                        </div>
                        <div className="grid gap-5 grid-cols-3">
                            {
                                whatweData.map(({ title, content, image }, i) => {
                                    return (
                                        <div className="flex gap-5 items-start" key={i}>
                                            <Image src={image} alt={title} width={65} height={65} />
                                            <div>
                                                <h4 className="text-[20px] leading-none text-black font-sans font-semibold mb-3">
                                                    {title}
                                                </h4>
                                                <p className="text-[16px] leading-[26px] text-[#747474] font-sans font-normal">
                                                    {content}
                                                </p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="py-[100px] bg-[#f6f6f6]">
                    <div className="container">
                        <div className="text-center mb-10">
                            <h2 className="text-[40px] leading-[50px] text-black font-megat font-normal mb-3">
                                Ready to Start Your <span className="text-[#f17724]">FREE 30 Min</span> Session
                            </h2>
                            <p className="text-[16px] leading-[26px] text-black font-sans font-normal">
                                We'd love to hear from you. Fill out the form and well be in touch within 24 hours.
                            </p>
                        </div>
                        <div className="flex gap-x-5">
                            <div className="basis-1/2">
                                <h3 className="text-[30px] leading-[40px] text-[#0d3163] font-sans font-semibold">
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
                            <div className="basis-1/2">
                                <form>
                                    <div className="grid grid-cols-2 gap-3">
                                        <input type="text" placeholder="Full Name*" className="w-full h-[40px] px-3 focus-visible:outline-none font-sans font-medium text-[16px] text-black placeholder:text[#f17724] focus-visible:ring-4 ring-[#f17724]" />
                                        <input type="email" placeholder="Email Address*" className="w-full h-[40px] px-3 focus-visible:outline-none font-sans font-medium text-[16px] text-black placeholder:text[#f17724] focus-visible:ring-4 ring-[#f17724]" />
                                        <input type="tel" placeholder="Phone No*" className="w-full h-[40px] px-3 focus-visible:outline-none font-sans font-medium text-[16px] text-black placeholder:text[#f17724] focus-visible:ring-4 ring-[#f17724]" />
                                        <input type="text" placeholder="Company / Website URL" className="w-full h-[40px] px-3 focus-visible:outline-none font-sans font-medium text-[16px] text-black placeholder:text[#f17724] focus-visible:ring-4 ring-[#f17724]" />
                                    </div>
                                    <select name="" id="" className="w-full h-[40px] px-3 mt-3 focus-visible:outline-none font-sans font-medium text-[16px] text-black placeholder:text[#f17724] focus-visible:ring-4 ring-[#f17724]">
                                        <option disabled selected>Desired Services.*</option>
                                        <option value="1">Item 1</option>
                                        <option value="2">Item 2</option>
                                        <option value="3">Item 3</option>
                                    </select>
                                    <textarea placeholder="Please tell us more how can we help you..." className="w-full h-[100px] p-3 resize-none focus-visible:outline-none font-sans font-medium text-[16px] text-black my-3 placeholder:text[#f17724] focus-visible:ring-4 ring-[#f17724]"></textarea>
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
                            <h2 className="text-[40px] leading-[50px] text-[#0d3163] font-megat font-normal">
                                our awards & <span className="text-[#f17724]">partnerships</span>
                            </h2>
                        </div>
                        <div className="grid grid-cols-6 items-center gap-x-10">
                            <div>
                                <Image src={topRatedOne} alt="topRatedOne" />
                            </div>
                            <div>
                                <Image src={topRatedTwo} alt="topRatedTwo" />
                            </div>
                            <div>
                                <Image src={topRatedThree} alt="topRatedThree" />
                            </div>
                            <div>
                                <Image src={topRatedFour} alt="topRatedFour" />
                            </div>
                            <div>
                                <Image src={topRatedFive} alt="topRatedFive" />
                            </div>
                            <div>
                                <Image src={topRatedSix} alt="topRatedSix" />
                            </div>
                        </div>
                        <div className="grid grid-cols-5 items-center gap-x-10 mt-10">
                            <div>
                                <Image src={topRatedSeven} alt="topRatedSeven" className="block m-auto" />
                            </div>
                            <div>
                                <Image src={topRatedEight} alt="topRatedEight" className="block m-auto" />
                            </div>
                            <div>
                                <Image src={topRatedNine} alt="topRatedNine" className="block m-auto" />
                            </div>
                            <div>
                                <Image src={topRatedTen} alt="topRatedTen" className="block m-auto" />
                            </div>
                            <div>
                                <Image src={topRatedEleven} alt="topRatedEleven" className="block m-auto" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}

export default Page;