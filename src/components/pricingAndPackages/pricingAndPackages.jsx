"use client"
// Import Components
import Image from "next/image";
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel, ThemeProvider, Input } from "@material-tailwind/react";
import Button from "@/components/button/Button";
// Import Theme
import theme from "./theme";
// Import Images
import checkCircle from "media/packages/checkCircle.png";
// Import Packages
import data from "./data";

const PricingAndPackages = () => {
    return (
        <ThemeProvider value={theme}>
            <section>
                <div className="bg-purple-blue py-10 md:py-20">
                    <div className="container">
                        <div className="text-center mb-10">
                            <span className="text-base font-normal text-[#A497F5]">Reasonable Prices</span>
                            <h2 className="font-megat font-normal text-4xl lg:text-5xl text-white mb-2">That Fits Your Budget</h2>
                            <p className="text-base text-white font-normal">With affordable prices, we have exclusive digital art and design facilities, <br /> customized for your individual needs</p>
                        </div>
                        <Tabs value="logo">
                            <TabsHeader>
                                {data.map(({ label, value }) => {
                                    return <Tab key={value} value={value}>
                                        {label}
                                    </Tab>
                                })}
                            </TabsHeader>
                            <TabsBody>
                                {data.map(({ value, packages, label }) => {
                                    return <TabPanel key={value} value={value}>
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4">
                                            {packages.map(({ name, discountedPrice, originalPrice, list, note }, i) => {
                                                return <div key={i} className="shadow-lg bg-[#B8C5FA] p-4 rounded-xl">
                                                    <div className="bg-[#665FF3] rounded-xl text-center py-5 shadow-lg">
                                                        <h4 className="font-megat font-normal text-white text-3xl">{name}</h4>
                                                    </div>
                                                    <p className="text-sm text-black font-normal my-5 leading-[24px] text-center">
                                                        {note}
                                                    </p>
                                                    <h5 className="font-sans text-center font-bold text-5xl text-black my-10">
                                                        ${discountedPrice} <sup className="opacity-50 text-4xl"><del>{originalPrice}</del></sup>
                                                    </h5>
                                                    <ul className="overflow-y-auto h-64 mb-5">
                                                        {list.map((e, i) => {
                                                            return (
                                                                <li className="text-sm md:text-base text-black font-normal flex items-start gap-2 leading-[24px] mb-3"
                                                                    key={i}>
                                                                    <Image src={checkCircle} alt="checkCircle" className="mt-1 brightness-0 invert-0" />
                                                                    <span>{e}</span>
                                                                </li>
                                                            );
                                                        })}
                                                    </ul>
                                                    <div className="flex items-center gap-2 xl:gap-3 justify-evenly xl:justify-between">
                                                        <Button text="Order Now"
                                                            icon={true}
                                                            color="btnBg bg-[#5750E4] text-white"
                                                            hover="hover:bg-[#000000]"
                                                            link={`order/${(label + " " + name).toLowerCase().replace(/\s/g, '-')}?price=$${discountedPrice}`} />
                                                        <Button text="(855) 888-8399"
                                                            color="btnColor text-black bg-transparent"
                                                            border="border-2 border-[#5750E4]"
                                                            hover="hover:bg-[#5750E4] hover:text-white"
                                                            link="tel:(855)888-8399" />
                                                    </div>
                                                </div>
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