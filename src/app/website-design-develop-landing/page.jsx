"use client"
// Import Components
import Image from "next/image";
import { Input, Tab, TabPanel, Tabs, TabsBody, TabsHeader, Textarea } from "@material-tailwind/react";
import Slider from "react-slick";
import Button from "@/components/button/Button";
import { useState } from "react";
// Import Packages
import packagesData from "@/components/pricingAndPackages/data";
// Import Css
import styles from './page.module.css'
// Import Images
// Hero
import heroDesigns from "media/landing-pages/website-design-develop/hero/designs.png";
import heroAwards from "media/landing-pages/website-design-develop/hero/awards.png";
import heroStars from "media/landing-pages/website-design-develop/hero/stars.png";
// Awards
import awardsOne from "media/landing-pages/website-design-develop/awards/One.svg";
import awardsTwo from "media/landing-pages/website-design-develop/awards/Two.svg";
import awardsThree from "media/landing-pages/website-design-develop/awards/Three.svg";
import awardsFour from "media/landing-pages/website-design-develop/awards/Four.svg";
import awardsFive from "media/landing-pages/website-design-develop/awards/Five.svg";
// Third
import thirdDeskLaptop from "media/landing-pages/website-design-develop/third/deskLaptop.png";
// Portfolios
// All
import allOne from "media/landing-pages/website-design-develop/portfolios/all/one.png";
import allTwo from "media/landing-pages/website-design-develop/portfolios/all/two.png";
import allThree from "media/landing-pages/website-design-develop/portfolios/all/three.png";
import allFour from "media/landing-pages/website-design-develop/portfolios/all/four.png";
// Banner
import bannerOne from "media/landing-pages/website-design-develop/banner/one.png";
// Packages
import checkCircle from "media/landing-pages/website-design-develop/packages/checkCircle.svg";
import comboLaptop from "media/landing-pages/website-design-develop/packages/comboLaptop.png";
// Top Services
import topServiceOne from "media/landing-pages/website-design-develop/top-services/one.png";
import topServiceTwo from "media/landing-pages/website-design-develop/top-services/two.png";
import topServiceThree from "media/landing-pages/website-design-develop/top-services/three.png";
import topServiceFour from "media/landing-pages/website-design-develop/top-services/four.png";
// Reviews
import ladyReviews from "media/landing-pages/website-design-develop/reviews/lady.png";
import logosReviews from "media/landing-pages/website-design-develop/reviews/logos.png";
import quoteReviews from "media/landing-pages/website-design-develop/reviews/quote.png";
// Reviews
import screensContactUs from "media/landing-pages/website-design-develop/contact-us/screens.png";

const Page = () => {
    // Awards Slider
    let awardsSlider = {
        dots: false,
        arrows: false,
        slidesToShow: 5,
        infinite: true,
        speed: 1000,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
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
                    slidesToScroll: 1,
                }
            }
        ]
    };
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
    // Combo 
    const comboData = [
        [
            "3 Page Website Design",
            "Custom Layout Design",
            "Contact/Query Form",
            "1 Banner Design",
            "2 Stock Photos",
            "FREE Favicon Design",
            "Cross Browser Compatible",
            "Complete W3C Certified HTML",
            "Website Initial Concepts in 48 Hours",
            "Complete Design & Deployment",
            "– Value Added Services",
            "Complete Source Files",
            "Dedicated Project Manager",
            "100% Unique Design",
            "100% Satisfaction Guarantee",
            "100% Money Back Guarantee",
            "*NO MONTHLY OR ANY HIDDEN FEE*"
        ],
        [
            "Online Payment Integration (Optional)",
            "Multi Lingual (Optional)",
            "Custom Dynamic Forms (Optional)",
            "Shopping Cart Integration (Optional)",
            "Complete Database Creation",
            "Signup Automated Email Authentication",
            "Web Traffic Analytics Integration",
            "3rd Party API Integrations",
            "Signup Area (For Newsletters, Offers etc.)",
            "Search Bar for Easy Search",
            "Live Feeds of Social Networks integration (Optional)",
            "Search Engine Submission",
            "Module-wise Architecture",
            "Extensive Admin Panel"
        ]
    ]
    //
    let topServicesSlider = {
        dots: true,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };
    //
    let reviewsSlider = {
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
    };
    return (
        <>
            <section>
                <div className="bg-[#000024] bg-[url('../../public/landing-pages/website-design-develop/hero/bg.png')] bg-cover bg-no-repeat bg-center">
                    <div className="pt-[120px] md:pt-[100px] lg:pt-[150px]">
                        <div className="container">
                            <div className="grid grid-cols-2 md:grid-cols-5 items-end">
                                <div className="col-span-2 md:col-span-3">
                                    <span className="text-[20px] leading-none font-medium text-white block mb-2">
                                        Welcome to
                                    </span>
                                    <h1 className="text-[40px] lg:text-[60px] font-megat text-[#08FAE5] font-normal leading-none">
                                        Web design Hunt
                                    </h1>
                                    <p className="text-[15px] md:text-[18px] leading-[26px] font-medium text-white mt-2 mb-5">
                                        Our Destination For Innovative Website Design And <br className="block md:hidden lg:block" /> Development Services!
                                    </p>
                                    <Image src={heroDesigns} alt="heroDesigns" className="max-w-[80%] xl:max-w-full hidden md:block" />
                                </div>
                                <div className="col-span-2 md:col-span-2">
                                    <Image src={heroStars} alt="heroStars" className="block m-auto" />
                                    <p className="text-[14px] md:text-[10px] lgtext-[14px] xl:text-[16px] leading-[24px] font-medium text-white text-center my-3 xl:my-5">
                                        We are rated 4.5 among 2,478 satisfied customers
                                    </p>
                                    <Image src={heroAwards} alt="heroAwards" className="block m-auto" />
                                    <div className="border-2 border-[#00FFED] rounded-t-lg border-b-0 p-3 xl:p-5 backdrop-blur-sm bg-[#272727]/30 mt-3 xl:mt-5">
                                        <div className="text-white text-center">
                                            <span className="text-[18px] leading-none font-medium block mb-2">
                                                Avail upto
                                            </span>
                                            <h3 className="text-[30px] lg:text-[40px] font-megat font-normal leading-none">
                                                <span className="text-[#08FAE5]">70%</span> Discount
                                            </h3>
                                            <form>
                                                <Input placeholder="Enter Your Full Name*" type="text"
                                                    className="border-none backdrop-blur-sm bg-[#272727]/30 placeholder:text-white text-white rounded-xl font-[300] focus:ring-4"
                                                    labelProps={{
                                                        className: "hidden",
                                                    }}
                                                    containerProps={{ className: "m-h-[30px] xl:min-h-[45px] mt-3 xl:mt-5" }} />
                                                <Input placeholder="Enter Your Email*" type="email"
                                                    className="border-none backdrop-blur-sm bg-[#272727]/30 placeholder:text-white text-white rounded-xl font-[300]"
                                                    labelProps={{
                                                        className: "hidden",
                                                    }}
                                                    containerProps={{ className: "m-h-[30px] xl:min-h-[45px] mt-3 xl:mt-5" }} />
                                                <Input placeholder="Phone*" type="text"
                                                    className="border-none backdrop-blur-sm bg-[#272727]/30 placeholder:text-white text-white rounded-xl font-[300]"
                                                    labelProps={{
                                                        className: "hidden",
                                                    }}
                                                    containerProps={{ className: "m-h-[30px] xl:min-h-[45px] mt-3 xl:mt-5" }} />
                                                <Textarea placeholder="Enter Your Message"
                                                    className="border-none my-3 xl:my-5 backdrop-blur-sm bg-[#272727]/30 placeholder:text-white text-white rounded-xl font-[300]"
                                                    labelProps={{
                                                        className: "hidden",
                                                    }}>
                                                </Textarea>
                                                <button type="button" className="bg-transparent text-base xl:text-lg font-medium text-white w-[100%] hover:bg-[#00FFED] border-2 border-[#00FFED] h-[40px] xl:h-[45px] rounded-lg">Submit Now</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> {/* Hero Section */}
            <section>
                <div className="bg-[#E9E9E9] py-[50px] __awardsSlider">
                    <div className="container">
                        <Slider {...awardsSlider} >
                            <Image src={awardsOne} alt="awardsOne" />
                            <Image src={awardsTwo} alt="awardsTwo" />
                            <Image src={awardsThree} alt="awardsThree" />
                            <Image src={awardsFour} alt="awardsFour" />
                            <Image src={awardsFive} alt="awardsFive" />
                        </Slider>
                    </div>
                </div>
            </section> {/* Awards Section */}
            <section>
                <div className="py-[50px] lg:py-[100px]">
                    <div className="container">
                        <div className="text-center mb-5 lg:mb-10">
                            <h2 className="text-2xl sm:text-4xl xl:text-5xl font-megat text-[#202020] font-normal leading-none mb-3">
                                Build up your online Limelight With <span className="text-[#3283FF]">USA's #1</span> <br />
                                Web Development Company
                            </h2>
                            <p className="text-sm md:text-base text-[#202020] font-normal">
                                We Have A Team Of Professional And Energetic Web Developers With Lots Of Experience In The Field. We Work For Quality. Service Is Our Main Purpose. We Admire Our Smart Customers. Everyone Promises Good Services But No One Really Serves. We Believe In Serving Our Customers With Astounding Web Designs. We Are Not Only Producing An Identity For Your Brand But Strive To Offer You The Designing Solutions Which Always Keep You In Limelight In The Market. Our Professionals Are Fully Equipped With The Updated Tools And Imaginative Techniques Which Can Add An Elegant Look To Your Brand. We Always Strive To Increase Your Communication With Your Prospective Clients.
                            </p>
                        </div>
                        <Image src={thirdDeskLaptop} alt="thirdDeskLaptop" className="block m-auto" />
                        <div className="bg-[#14122D] text-center py-[50px] lg:py-[100px] rounded-3xl bg-[url('../../public/landing-pages/website-design-develop/third/bg.png')] bg-contain bg-no-repeat bg-bottom">
                            <span className="text-[16px] lg:text-[20px] leading-none font-medium text-white block mb-2">
                                Promote your business with your
                            </span>
                            <h2 className="text-2xl sm:text-4xl xl:text-5xl font-megat text-[#00FFEF] font-normal leading-none mb-3">
                                Custom Website
                            </h2>
                            <p className="text-sm md:text-base text-white font-normal">
                                Rectify Your Prospect Worries By Employing Web Design Innovative
                            </p>
                            <div className="flex items-center gap-3 justify-center mt-5 md:mt-10 relative z-10">
                                <Button text="Start Live Chat"
                                    icon={true}
                                    color="bg-[#3283FF] text-white"
                                    hover="hover:bg-[#000000]"
                                    link="#" />
                                <Button text="(123)-000-0000"
                                    color="text-white bg-transparent"
                                    border="border-2 border-[#00FFEF]"
                                    hover="hover:bg-[#00FFEF]"
                                    link="tel:123654789" />
                            </div>
                        </div>
                    </div>
                </div>
            </section> {/* Third Section */}
            <section>
                <div className="bg-[#E9E9E9] py-[50px] lg:py-[100px]">
                    <div className="container">
                        <div className="text-center mb-10">
                            <h2 className="text-2xl sm:text-4xl xl:text-5xl font-megat text-[#202020] font-normal leading-none mb-3">
                                Our Masterpiece Projects
                            </h2>
                            <p className="text-sm md:text-base text-[#202020] font-normal">
                                View Our Distinct Portfolio Of Websites We Have Designed And Developed For Our Clients.
                                <br className="md:hidden lg:block" />
                                We Enabled Their Distinctive Idea Which Suits Their Website Requirements.
                            </p>
                        </div>
                        <Tabs value={activePortfolio}>
                            <TabsHeader indicatorProps={{ className: "hidden" }} className="bg-transparent p-0 flex justify-center gap-3 md:gap-0 flex-wrap md:flex-nowrap md:justify-between">
                                {
                                    portfolioData.map(({ value, label }) => {
                                        return (
                                            <Tab value={value} key={value} onClick={() => setActivePortfolio(value)}
                                                className={`${activePortfolio === value ? "text-white border-[#3283FF] bg-[#3283FF]" : "border-[#707070]"} border-2 font-sans font-medium text-base rounded-[50px] w-max lg:w-[150px] xl:w-[200px] py-[0.5rem] px-[0.8rem] lg:px-0 hover:bg-[#3283FF] hover:border-[#3283FF] hover:text-white`}>
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
            </section> {/* Portfolios Section */}
            <section>
                <div className="bg-[#3283FF] py-10 xl:py-20">
                    <div className="container relative z-10">
                        <h2 className="text-2xl md:text-3xl xl:text-4xl font-sans text-white font-normal mb-5">
                            Web Design Innovative <br /> offers comprehensive <br /> Website Services for <br /> Startups, Entrepreneurs & <br /> Corporations
                        </h2>
                        <div className="flex items-center gap-3">
                            <Button text="Start Live Chat"
                                icon={true}
                                color="btnBg bg-[#00FFEF] text-white"
                                hover="hover:bg-[#000000]"
                                link="#" />
                            <Button text="(123)-000-0000"
                                color="btnColor text-white bg-transparent"
                                border="border-2 border-[#00FFEF]"
                                hover="hover:bg-[#00FFEF]"
                                link="tel:123654789" />
                        </div>
                        <div className="absolute right-0 bottom-[-2rem] xl:bottom-[-4rem]">
                            <Image src={bannerOne} alt="bannerOne" className="max-w-[60%] lg:max-w-[80%] xl:max-w-full hidden md:block ml-auto" />
                        </div>
                    </div>
                </div>
            </section> {/* Banner Section */}
            <section>
                <div className="bg-[#14122D] py-10 lg:py-20 xl:pb-[200px] pricingAndPackages">
                    <div className="container">
                        <div className="text-center mb-10">
                            <h2 className="text-2xl sm:text-4xl xl:text-5xl font-megat text-white font-normal leading-none mb-3">
                                Our <span className="text-[#3283FF]">Packages</span>
                            </h2>
                            <p className="text-sm md:text-base text-white font-normal">
                                Have A Glance At Our Variety Of Packages As Per Requirement Of Our Clients
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4">
                            {
                                packagesData[2].packages.map(({ name, originalPrice, list, note }) => {
                                    return (
                                        <div key={name} className="border-2 border-white rounded-xl p-3 xl:p-5">
                                            <div className="text-center">
                                                <h3 className="font-sans font-normal text-white text-3xl mb-3">
                                                    {name}
                                                </h3>
                                                <p className="text-sm xl::text-base text-white font-normal mb-3">
                                                    Suitable For Potential Super-Startups <br /> And Brand Revamps For Companies.
                                                </p>
                                                <span className="font-sans font-bold text-5xl text-[#08F4DF] block mb-5">
                                                    ${originalPrice}
                                                </span>
                                            </div>
                                            <ul className={`overflow-y-auto h-64 mb-5 ${styles.pricingAndPackagesList}`} >
                                                {list.map((e, i) => {
                                                    return (
                                                        <li className="text-sm md:text-base text-white font-normal flex items-start gap-2 leading-[24px] mb-3" key={i}>
                                                            <Image src={checkCircle} alt="checkCircle" className="mt-1" />
                                                            <span>{e}</span>
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                            <div className="flex items-center gap-2 xl:gap-3 justify-evenly xl:justify-between">
                                                <Button text="Order Now"
                                                    icon={true}
                                                    color="btnBg bg-[#3283FF] text-white"
                                                    hover="hover:bg-[#000000]"
                                                    link="#" />
                                                <Button text="(123)-000-0000"
                                                    color="btnColor text-white bg-transparent"
                                                    border="border-2 border-[#3283FF]"
                                                    hover="hover:bg-[#3283FF]"
                                                    link="tel:123654789" />
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </section> {/* Packages Section */}
            <section>
                <div className="bg-[#E9E9E9] pt-10 xl:pt-0">
                    <div className="container">
                        <div className="text-center md:pt-[50px] pb-[70px] md:pb-[50px] md:px-[50px] w-max m-auto md:bg-[url('../../public/landing-pages/website-design-develop/packages/comboTitleBg.png')] bg-cover bg-no-repeat bg-top relative xl:top-[-150px]">
                            <span className="text-[16px] lg:text-[20px] leading-none font-medium text-[#3283FF] md:text-white block mb-2">
                                Combo Package
                            </span>
                            <h2 className="text-2xl sm:text-4xl xl:text-5xl font-sans text-black md:text-white font-normal leading-none">
                                Customized Web Portal
                            </h2>
                        </div>
                        <div className="py-[30px] xl:py-[50px] px-3 xl:px-5 bg-[url('../../public/landing-pages/website-design-develop/packages/comboBg.png')] bg-cover bg-no-repeat bg-center rounded-3xl relative top-[-45px] xl:top-[-180px]">
                            <div className="flex flex-wrap lg:flex-nowrap gap-3 xl:gap-5 items-baseline">
                                <div className="w-full lg:w-[28%] xl:w-[30%] backdrop-blur-sm bg-[#D5D4D4]/30 p-3 rounded-3xl">
                                    <ul className={`mb-5 overflow-y-auto h-48 lg:h-auto ${styles.pricingAndPackagesList}`} >
                                        {comboData[0].map((e, i) => {
                                            return (
                                                <li className="text-sm xl:text-base text-[#14122D] font-normal flex items-start gap-2 leading-[24px] mb-3" key={i}>
                                                    <Image src={checkCircle} alt="checkCircle" className="mt-1" />
                                                    <span>{e}</span>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                                <div className="w-full lg:w-[38%] xl:w-[40%] backdrop-blur-sm bg-[#D5D4D4]/30 p-3 rounded-3xl">
                                    <ul className={`mb-5 overflow-y-auto h-48 lg:h-auto ${styles.pricingAndPackagesList}`} >
                                        {comboData[1].map((e, i) => {
                                            return (
                                                <li className="text-sm md:text-base text-[#14122D] font-normal flex items-start gap-2 leading-[24px] mb-3" key={i}>
                                                    <Image src={checkCircle} alt="checkCircle" className="mt-1" />
                                                    <span>{e}</span>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                                <div className="w-full lg:w-[35%] xl:w-[30%]">
                                    <h2 className="text-2xl sm:text-4xl xl:text-5xl font-sans text-black font-normal leading-none">
                                        Price
                                    </h2>
                                    <h5 className="font-sans font-bold text-7xl text-[#3283FF] mt-5 mb-5">
                                        $4999
                                    </h5>
                                    <div className="flex gap-4 items-center">
                                        <a href="tel:123654789" className="bg-[#3283FF] rounded-[50px] text-white inline-flex group items-center gap-3 w-max pr-4 pl-4 h-12  hover:bg-transparent font-medium border-2 border-[#3283FF] hover:text-[#3283FF]">
                                            <Image src={checkCircle} alt="checkCircle" className="brightness-0 invert group-hover:brightness-100 group-hover:invert-0" />
                                            <span>Order Now</span>
                                        </a>
                                        <a href="tel:123654789" className="bg-transparent rounded-[50px] text-black inline-flex items-center gap-3 w-max pr-4 pl-4 h-12  hover:bg-[#3283FF] hover:text-white hover:border-[#3283FF] font-medium border-2 border-black">
                                            <span>(123)-000-0000</span>
                                        </a>
                                    </div>
                                    <Image src={comboLaptop} alt="comboLaptop" className="relative bottom-[-50px] hidden lg:block m-auto" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> {/* Combo Section */}
            <section>
                <div className="bg-[#010431] py-10 xl:py-20">
                    <div className="container">
                        <div className="text-center mb-10">
                            <span className="text-[10px] sm:text-[14px] lg:text-[16px] leading-none font-light text-white block mb-3 w-max m-auto px-2 sm:px-4 py-3 rounded-[50px] bg-[#153987]">
                                Structured And Organized Technique To Achieve Better Commitment
                            </span>
                            <h2 className="text-2xl sm:text-4xl xl:text-5xl font-megat text-white font-normal leading-none">
                                Our most fascinating top-Notch Services
                            </h2>
                        </div>
                        <div className="hidden grid-cols-4 bg-[url('../../public/landing-pages/website-design-develop/top-services/line.png')] bg-no-repeat  bg-contain xl:bg-auto lg:grid" style={{ backgroundPosition: "center 50px" }}>
                            <div className="text-center">
                                <Image src={topServiceOne} alt="topServiceOne" className="inline-block" />
                                <h3 className="text-2xl font-sans font-normal text-white mt-5">Web <br /> Development</h3>
                            </div>
                            <div className="text-center">
                                <Image src={topServiceTwo} alt="topServiceTwo" className="inline-block" />
                                <h3 className="text-2xl font-sans font-normal text-white mt-5">Web <br /> Designing</h3>
                            </div>
                            <div className="text-center">
                                <Image src={topServiceThree} alt="topServiceThree" className="inline-block" />
                                <h3 className="text-2xl font-sans font-normal text-white mt-5">Graphics <br /> Designing</h3>
                            </div>
                            <div className="text-center">
                                <Image src={topServiceFour} alt="topServiceFour" className="inline-block" />
                                <h3 className="text-2xl font-sans font-normal text-white mt-5">E-Commerce <br /> Solutions</h3>
                            </div>
                        </div>
                        <Slider {...topServicesSlider} className="lg:hidden ">
                            <div className="text-center">
                                <Image src={topServiceOne} alt="topServiceOne" className="m-auto" />
                                <h3 className="text-xl sm:text-2xl font-sans font-normal text-white mt-5">Web <br /> Development</h3>
                            </div>
                            <div className="text-center">
                                <Image src={topServiceTwo} alt="topServiceTwo" className="m-auto" />
                                <h3 className="text-xl sm:text-2xl font-sans font-normal text-white mt-5">Web <br /> Designing</h3>
                            </div>
                            <div className="text-center">
                                <Image src={topServiceThree} alt="topServiceThree" className="m-auto" />
                                <h3 className="text-xl sm:text-2xl font-sans font-normal text-white mt-5">Graphics <br /> Designing</h3>
                            </div>
                            <div className="text-center">
                                <Image src={topServiceFour} alt="topServiceFour" className="m-auto" />
                                <h3 className="text-xl sm:text-2xl font-sans font-normal text-white mt-5">E-Commerce <br /> Solutions</h3>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section> {/* Top Services Section */}
            <section>
                <div className="bg-[#F3F3F3] py-10 xl:py-20">
                    <div className="container relative z-10">
                        <div className="text-center mb-10">
                            <h2 className="text-2xl sm:text-4xl xl:text-5xl font-megat text-black font-normal leading-none mb-3">
                                Our Client Simply Loves Our Work
                            </h2>
                            <p className="text-sm md:text-base text-black font-normal">
                                Web Design Innovative Is Specialized To Provide Its IT Solutions From Web Content Writing To Customer Interface.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-5 items-center gap-5 xl:gap-0">
                            <div className="hidden md:block md:col-span-2">
                                <Image src={ladyReviews} alt="ladyReviews" className="block m-auto" />
                            </div>
                            <div className="md:col-span-3 xl:px-10">
                                <Slider {...reviewsSlider} className="__reviewsSlider">
                                    <div>
                                        <h3 className="text-xl xl:text-2xl font-sans font-bold text-black leading-8 mb-3">
                                            A Delighted Client Shares Their Experience <br />
                                            With <span className="text-[#3283FF]">Web Design Hunt</span>
                                        </h3>
                                        <p className="text-sm lg:text-[18px] leading-[22px] xl:leading-[28px] font-normal  text-gray-600">
                                            "I couldn't be happier with the logo design and landing page that Web Design Hub created for my business. The team's creativity and attention to detail truly exceeded my expectations. From the initial concept discussions to the final execution, their professionalism and commitment were evident at every step. The logo perfectly captures the essence of my brand, and the landing page has significantly increased user engagement. Thank you, Web Design Hub, for your exceptional work and for bringing my vision to life!"
                                        </p>
                                        <span className="text-[10px] sm:text-[14px] lg:text-[16px] leading-none font-light text-white block mt-3 w-max px-2 sm:px-4 py-3 rounded-[50px] bg-[#3283FF]">
                                            — Sarah Thompson, Founder Of Sparktech Solutions
                                        </span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl xl:text-2xl font-sans font-bold text-black leading-8 mb-3">
                                            A Delighted Client Shares Their Experience <br />
                                            With <span className="text-[#3283FF]">Web Design Hunt</span>
                                        </h3>
                                        <p className="text-sm lg:text-[18px] leading-[22px] xl:leading-[28px] font-font-normal  text-gray-600">
                                            "I couldn't be happier with the logo design and landing page that Web Design Hub created for my business. The team's creativity and attention to detail truly exceeded my expectations. From the initial concept discussions to the final execution, their professionalism and commitment were evident at every step. The logo perfectly captures the essence of my brand, and the landing page has significantly increased user engagement. Thank you, Web Design Hub, for your exceptional work and for bringing my vision to life!"
                                        </p>
                                        <span className="text-[10px] sm:text-[14px] lg:text-[16px] leading-none font-light text-white block mt-3 w-max px-2 sm:px-4 py-3 rounded-[50px] bg-[#3283FF]">
                                            — Sarah Thompson, Founder Of Sparktech Solutions
                                        </span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl xl:text-2xl font-sans font-bold text-black leading-8 mb-3">
                                            A Delighted Client Shares Their Experience <br />
                                            With <span className="text-[#3283FF]">Web Design Hunt</span>
                                        </h3>
                                        <p className="text-sm lg:text-[18px] leading-[22px] xl:leading-[28px] font-font-normal  text-gray-600">
                                            "I couldn't be happier with the logo design and landing page that Web Design Hub created for my business. The team's creativity and attention to detail truly exceeded my expectations. From the initial concept discussions to the final execution, their professionalism and commitment were evident at every step. The logo perfectly captures the essence of my brand, and the landing page has significantly increased user engagement. Thank you, Web Design Hub, for your exceptional work and for bringing my vision to life!"
                                        </p>
                                        <span className="text-[10px] sm:text-[14px] lg:text-[16px] leading-none font-light text-white block mt-3 w-max px-2 sm:px-4 py-3 rounded-[50px] bg-[#3283FF]">
                                            — Sarah Thompson, Founder Of Sparktech Solutions
                                        </span>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                        <Image src={logosReviews} alt="logosReviews" className="mx-auto mt-10 block" />
                        <Image src={quoteReviews} alt="quoteReviews" className="absolute top-[100px] right-0 -z-10" />
                    </div>
                </div>
            </section> {/* Reviews Section */}
            <section>
                <div className={`${styles.__contactUs} py-10 xl:py-20`}>
                    <div className="container">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
                            <div>
                                <div className="mb-10">
                                    <h2 className="text-2xl sm:text-4xl xl:text-5xl font-megat text-white font-normal leading-none mb-3">
                                        Contact Us
                                    </h2>
                                    <p className="text-sm md:text-base text-white font-normal">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a 
                                        suscipit odio. Etiam nunc nisl, fermentum quis sagittis non.
                                    </p>
                                </div>
                                <form>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div>
                                            <Input placeholder="Enter Your Full Name*" type="text"
                                                className="border-none bg-[#00296B]/30 placeholder:text-white text-white rounded-xl font-[300]"
                                                labelProps={{
                                                    className: "hidden",
                                                }}
                                                containerProps={{ className: "m-h-[30px] xl:min-h-[45px]" }} />
                                        </div>
                                        <div>
                                            <Input placeholder="Enter Your Email*" type="email"
                                                className="border-none bg-[#00296B]/30 placeholder:text-white text-white rounded-xl font-[300]"
                                                labelProps={{
                                                    className: "hidden",
                                                }}
                                                containerProps={{ className: "m-h-[30px] xl:min-h-[45px]" }} />
                                        </div>
                                        <div>
                                            <Input placeholder="Phone*" type="text"
                                                className="border-none bg-[#00296B]/30 placeholder:text-white text-white rounded-xl font-[300]"
                                                labelProps={{
                                                    className: "hidden",
                                                }}
                                                containerProps={{ className: "m-h-[30px] xl:min-h-[45px]" }} />
                                        </div>
                                        <div>
                                            <Input placeholder="Subject*" type="text"
                                                className="border-none bg-[#00296B]/30 placeholder:text-white text-white rounded-xl font-[300]"
                                                labelProps={{
                                                    className: "hidden",
                                                }}
                                                containerProps={{ className: "m-h-[30px] xl:min-h-[45px]" }} />
                                        </div>
                                    </div>
                                    <Textarea placeholder="Enter Your Message"
                                        className="border-none my-5 bg-[#00296B]/30 placeholder:text-white text-white rounded-xl font-[300]"
                                        labelProps={{
                                            className: "hidden",
                                        }}>
                                    </Textarea>
                                    <button type="button" className="bg-[#00296B] text-base xl:text-lg font-medium text-white hover:bg-transparent border-2 border-[#00296B] h-[40px] xl:h-[45px] rounded-[50px] px-5">Submit Now</button>
                                </form>
                            </div>
                            <div>
                                <Image src={screensContactUs} alt="screensContactUs" className="m-auto block" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Page;