"use client"
import { useState } from "react";
// Imports Components
import Image from "next/image";
import { Tab, TabPanel, Tabs, TabsBody, TabsHeader } from "@material-tailwind/react";
// Import Images
import websiteDevelopmnet from "media/home/services/websiteDevelopmnet.png";
import tabsArrow from "media/home/tabsArrow.svg";
import Button from "@/components/button/Button";

const Services = () => {
    const [activeTab, setActiveTab] = useState("logoDesign");
    const data = [
        {
            value: "logoDesign",
            label: "logo design",
            icon: tabsArrow,
            image: websiteDevelopmnet,
        },
        {
            value: "websiteDevelopment",
            label: "website development",
            icon: tabsArrow,
            image: websiteDevelopmnet,
        },
        {
            value: "digitalMarketing",
            label: "digital marketing",
            icon: tabsArrow,
            image: websiteDevelopmnet,
        },
        {
            value: "seoServices",
            label: "seo services",
            icon: tabsArrow,
            image: websiteDevelopmnet,
        },
        {
            value: "applicationDesign",
            label: "application design",
            icon: tabsArrow,
            image: websiteDevelopmnet,
        },
        {
            value: "creativeCopywriting",
            label: "creative copywriting",
            icon: tabsArrow,
            image: websiteDevelopmnet,
        },
    ]
    return (
        <section>
            <div className="bg-[#EFEFEF] py-10 md:py-20">
                <div className="container">
                    <div className="flex">
                        <div className="basis-full">
                            <h2 className="text-2xl sm:text-4xl xl:text-5xl font-megat text-[#202020] text-center font-normal leading-none mb-3">
                                SERVICES WE PROVIDE
                            </h2>
                            <p className="text-base text-[#202020] font-normal text-center mb-10">Urban Web Designers works with a team of enthusiastic designers and developers who <br className="hidden md:block" /> are dedicated professionals in delivering the best websites for any business. Our <br className="hidden md:block" /> websites are:</p>
                            <Tabs value="logoDesign" orientation="vertical" className="block">
                                <div className="flex items-end gap-x-5 flex-wrap md:flex-nowrap">
                                    <div className="basis-full md:w-3/6 mb-5 md:mb-0">
                                        <TabsHeader indicatorProps={{ className: "shadow-none bg-transparent rounded-none" }} className="p-0">
                                            {data.map(({ value, label, icon }) => (
                                                <Tab key={value}
                                                    value={value}
                                                    onClick={() => setActiveTab(value)}
                                                    className="border-b-2 border-[#e3e3e3] px-0 py-4 lg:py-2 xl:py-5 block">
                                                    <div className="flex items-center justify-between gap-2">
                                                        <h3 className={`text-3xl xl:text-5xl font-light leading-none ${activeTab === value ? "text-[#7337BB]" : "text-[#202020]"}`}>
                                                            {label}
                                                        </h3>
                                                        <Image src={icon} alt={icon} className={`${activeTab === value ? "brightness-100" : "brightness-0"} hidden lg:block`} />
                                                    </div>
                                                </Tab>
                                            ))}
                                        </TabsHeader>
                                    </div>
                                    <div className="basis-full md:w-3/6">
                                        <TabsBody>
                                            {data.map(({ value, image }) => (
                                                <TabPanel key={value} value={value} className="p-0">
                                                    <Image src={image} alt={image} />
                                                </TabPanel>
                                            ))}
                                        </TabsBody>
                                    </div>
                                </div>
                            </Tabs>
                            <div className="flex items-center gap-3 justify-center mt-10">
                                <Button text="Start Live Chat"
                                    icon={true}
                                    color="bg-[#7337BB] text-white"
                                    hover="hover:bg-[#000000]"
                                    link="#" />
                                <Button text="Book Demo"
                                    color="bg-transparent text-[#202020]"
                                    border="border-2 border-[#7337BB]"
                                    hover="hover:bg-[#7337BB] hover:text-white"
                                    link="tel:123654789" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}

export default Services;