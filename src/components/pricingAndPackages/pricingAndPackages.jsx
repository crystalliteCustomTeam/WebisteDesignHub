"use client"
// Import Components
import Image from "next/image";
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel, ThemeProvider, Input, IconButton } from "@material-tailwind/react";
import Button from "@/components/button/button";
// Import Theme
import theme from "./theme";
// Import Images
import checkCircle from "media/packages/checkCircle.png";
import planeIcon from 'public/plane-icon.png'
import liveChatIcon from "media/liveChatIcon.svg";
import Plane from 'public/plane.png'
import Rocket from 'public/rocket.png'

// Import Packages
import data from "./data";
import Link from "next/link";

const PricingAndPackages = () => {
    let count = 0;
    return (
        <ThemeProvider value={theme}>
            <section>
                <div className="bg-white-blue py-10 md:py-20">
                    <div className="container">
                        <div className="text-center mb-10">
                            <span className="text-base font-normal text-black">
                                Reasonable Prices
                            </span>
                            <h2 className="font-megat font-normal text-4xl lg:text-5xl text-black mb-2">
                                That Fits Your Budget
                            </h2>
                            <p className="text-base text-black font-normal">
                                Our commitment to affordability means you can have a stunning, professionally designed website that perfectly suits your budget.
                            </p>
                        </div>
                        <Tabs value="seo">
                            <TabsHeader>
                                {data.map(({ label, value }, i) => {
                                    count++;
                                    if (count < 13) {
                                        return <Tab key={value} value={value}>
                                            {label}
                                        </Tab>
                                    }
                                })}
                            </TabsHeader>
                            <TabsBody>
                                {data.map(({ value, packages, label }, i) => {
                                    return <TabPanel key={value} value={value}>
                                        <div className="grid grid-cols-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 mt-8">
                                            {packages.map(({ name, largePrice, icons, smallPrice, cardStyle, list }, i) => {
                                                const isPopularCard = cardStyle && cardStyle.includes("bg-gradient-to-t to-[#fb6a44] from-[#fa2b7f]");
                                                return (
                                                    <div key={i} className={`card_body rounded-[30px] px-4 py-5 h-full overflow-hidden ${cardStyle}`}>
                                                        {isPopularCard && (
                                                            <div className="popular relative w-full">
                                                                <p className="text-[14px] text-center leading-[14px] font-bold uppercase py-3 text-white bg-gradient-to-r from-[#b76cd2] to-[#4c3bb3] rotate-[45deg] absolute right-[-109px] top-[12px] w-[281px] block">Popular</p>
                                                            </div>
                                                        )}
                                                        <div className={`card_header relative`}>
                                                            <div className='icon-bg'>
                                                                <Image src={icons} alt={`${name}-icon`} width={40} height={40} className="mx-auto" />
                                                            </div>
                                                        </div>
                                                        <div className="card_body flex flex-col justify-between h-full">
                                                            <h4 className="text-center mt-[110px] text-[22px] text-[#f7f7f7f7] font-[400] mb-[-5px] font-megat relative before:content-[''] before:absolute before:mx-auto before:h-[2px] before:w-[70%] before:left-0 before:right-0 before:top-[35px] h2_before">{name}</h4>
                                                            <ul className="text-center max-h-[150px] overflow-y-scroll mt-10 overflow-x-hidden">
                                                                {list.map((item, index) => (
                                                                    <li key={index}>
                                                                        <p className="text-white font-[600] text-[12px] leading-[30px] tracking-[0.1rem] mb-0">{item}</p>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                            <div>
                                                                <div className="price mt-6">
                                                                    <p className="text-white text-[50px] font-bold relative z-1 leading-[45px] text-center mb-0">
                                                                        <span className="text-[15px] font-[400] py-[5px]">$</span>{largePrice}
                                                                        <span className="text-[15px] font-[400] py-[5px]">/ {smallPrice}</span>
                                                                    </p>
                                                                </div>
                                                                <div className="btn mt-4 flex items-center justify-center">
                                                                    <Link className="bg-[#300034B8] text-white inline-flex items-center justify-center gap-3 pr-3.5 pl-3.5 h-14 rounded-full hover:bg-[#300034] w-full" href="javascript:;">
                                                                        <span className="text-sm xl:text-lg font-medium">Chat Now</span>
                                                                        <Image src={liveChatIcon} alt="liveChatIcon" />
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </TabPanel>
                                })}
                            </TabsBody>
                        </Tabs>
                    </div>
                </div>
            </section>
        </ThemeProvider>
    );
}

export default PricingAndPackages;