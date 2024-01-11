"use client"
// Import Components
import { Tab, TabPanel, Tabs, TabsBody, TabsHeader } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
// Import Images
// Portfolios
// Custom Website
import customWebsiteOne from "media/landing-page-4/portfolios/custom-website/one.png";
import customWebsiteTwo from "media/landing-page-4/portfolios/custom-website/two.png";
import customWebsiteThree from "media/landing-page-4/portfolios/custom-website/three.png";
import customWebsiteFour from "media/landing-page-4/portfolios/custom-website/four.png";
import customWebsiteFive from "media/landing-page-4/portfolios/custom-website/five.png";
import customWebsiteSix from "media/landing-page-4/portfolios/custom-website/six.png";

const Portfolios = () => {
    // Portfolios
    const [activePortfolio, setActivePortfolio] = useState("custom-website");
    const portfolioData = [
        {
            value: "wordpress",
            label: "WordPress",
            desc: "WordPress",
            images: [customWebsiteOne, customWebsiteTwo, customWebsiteThree, customWebsiteFour, customWebsiteFive, customWebsiteSix]
        },
        {
            value: "shopify",
            label: "Shopify",
            desc: "Shopify",
            images: [customWebsiteOne, customWebsiteTwo, customWebsiteThree, customWebsiteFour, customWebsiteFive, customWebsiteSix]
        },
        {
            value: "custom-website",
            label: "Custom Website",
            desc: "Custom Website",
            images: [customWebsiteOne, customWebsiteTwo, customWebsiteThree, customWebsiteFour, customWebsiteFive, customWebsiteSix]
        },
        {
            value: "ecommerce",
            label: "Ecommerce",
            desc: "Ecommerce",
            images: [customWebsiteOne, customWebsiteTwo, customWebsiteThree, customWebsiteFour, customWebsiteFive, customWebsiteSix]
        },
        {
            value: "magento",
            label: "Magento",
            desc: "Magento",
            images: [customWebsiteOne, customWebsiteTwo, customWebsiteThree, customWebsiteFour, customWebsiteFive, customWebsiteSix]
        }
    ]
    return (
        <section>
            <div className="py-[100px]" id="Portfolios">
                <div className="container">
                    <div className="text-center mb-10">
                        <h2 className="text-[30px] lg:text-[40px] leading-[40px] lg:leading-[50px] text-black font-sans font-bold mb-3">
                            The Professionals’ Portfolio
                        </h2>
                        <p className="text-sm md:text-base text-[#202020] font-normal">
                            Dive into the diverse portfolio of Atlantic Website Pros, a leading custom website development firm. <br className="hidden lg:block" /> Witness our prowess in various digital services—let our work inspire your unique ideas!
                        </p>
                    </div>
                    <Tabs value={activePortfolio}>
                        <TabsHeader indicatorProps={{ className: "hidden" }} className="bg-transparent p-0 flex justify-center gap-3 md:gap-0 flex-wrap md:flex-nowrap md:justify-evenly">
                            {
                                portfolioData.map(({ value, label }) => {
                                    return (
                                        <Tab value={value} key={value} onClick={() => setActivePortfolio(value)}
                                            className={`${activePortfolio === value ? "text-white border-[#9E4BFF] bg-[#9E4BFF]" : "border-[#707070]"} border-2 font-sans font-medium text-base rounded-lg w-max lg:w-[150px] xl:w-[200px] py-[0.5rem] px-[0.8rem] lg:px-0 hover:bg-[#9E4BFF] hover:border-[#9E4BFF] hover:text-white`}>
                                            {label}
                                        </Tab>
                                    );
                                })
                            }
                        </TabsHeader>
                        <TabsBody>
                            {
                                portfolioData.map(({ value, images, links }) => {
                                    return (
                                        <TabPanel value={value} key={value} className="p-0">
                                            <div className="grid grid-cols-3 gap-x-5 gap-y-5 mt-10">
                                                {images?.map((e, i) => (
                                                    <div key={i} className="rounded-[10px] h-[200px] overflow-hidden group relative hover:cursor-pointer">
                                                        <Image src={e} alt="portfolios" className="rounded-[10px] w-full" />
                                                        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-0 group-hover:opacity-50">
                                                        </div>
                                                    </div>
                                                ))}
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
    );
}

export default Portfolios;