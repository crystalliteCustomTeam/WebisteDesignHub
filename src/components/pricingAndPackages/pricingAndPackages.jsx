"use client"
// Import Components
import Image from "next/image";
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel, ThemeProvider, Input } from "@material-tailwind/react";
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
                <div>
                    <div className="container">
                        <Tabs value="logo">
                            <TabsHeader>
                                {
                                    data.map(({ label, value }) => {
                                        return <Tab key={value} value={value}>
                                            {label}
                                        </Tab>
                                    })
                                }
                                {/* <Tab value="illustrationDesign">
                                    Illustration Design
                                </Tab>
                                <Tab value="web">
                                    Web
                                </Tab>
                                <Tab value="branding">
                                    Branding
                                </Tab>
                                <Tab value="video">
                                    Video
                                </Tab>
                                <Tab value="seo">
                                    SEO
                                </Tab>
                                <Tab value="ecommerce">
                                    Ecommerce
                                </Tab>
                                <Tab value="digitalMarketing">
                                    Digital Marketing
                                </Tab>
                                <Tab value="socialMediaMarketing">
                                    Social Media Marketing
                                </Tab>
                                <Tab value="copyWriting">
                                    Copy Writing
                                </Tab>
                                <Tab value="comboPackages">
                                    Combo Packages
                                </Tab> */}
                            </TabsHeader>
                            <TabsBody>
                                {
                                    data.map(({ value, packages }) => {
                                        return <TabPanel key={value} value={value}>
                                            <div className="flex gap-4">
                                                {
                                                    packages.map(({ name, discountedPrice, originalPrice, list }, i) => {
                                                        return <div key={i} className="basis-1/3 shadow-lg">
                                                            <div className="bg-gray-500 rounded-xl text-center py-5">
                                                                <h4 className="font-megat font-normal text-white text-3xl">{name}</h4>
                                                            </div>
                                                            <h5 className="font-sans text-center font-bold text-5xl text-black mt-5">
                                                                ${discountedPrice} <sup className="text-gray-500 text-4xl"><del>${originalPrice}</del></sup>
                                                            </h5>
                                                            <ul className="overflow-y-auto h-64">
                                                                {
                                                                    list.map((e, i) => {
                                                                        return (
                                                                            <li className="text-base text-black font-normal flex gap-2 leading-8" key={i}>
                                                                                <Image src={checkCircle} alt="checkCircle" />
                                                                                <span>{e}</span>
                                                                            </li>
                                                                        );
                                                                    })
                                                                }
                                                            </ul>
                                                        </div>
                                                    })
                                                }
                                            </div>
                                        </TabPanel>
                                    })
                                }
                                {/* <TabPanel value="illustrationDesign">
                                    Illustration Design
                                </TabPanel>
                                <TabPanel value="web">
                                    Web
                                </TabPanel>
                                <TabPanel value="branding">
                                    Branding
                                </TabPanel>
                                <TabPanel value="video">
                                    Video
                                </TabPanel>
                                <TabPanel value="seo">
                                    SEO
                                </TabPanel>
                                <TabPanel value="ecommerce">
                                    Ecommerce
                                </TabPanel>
                                <TabPanel value="digitalMarketing">
                                    Digital Marketing
                                </TabPanel>
                                <TabPanel value="socialMediaMarketing">
                                    Social Media Marketing
                                </TabPanel>
                                <TabPanel value="copyWriting">
                                    Copy Writing
                                </TabPanel>
                                <TabPanel value="comboPackages">
                                    Combo Packages
                                </TabPanel> */}
                            </TabsBody>
                        </Tabs>
                    </div>
                </div>
            </section>
        </ThemeProvider>
    );
}

export default PricingAndPackages;