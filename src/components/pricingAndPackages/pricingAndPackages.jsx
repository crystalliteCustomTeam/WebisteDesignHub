"use client"
// Import Components
import Image from "next/image";
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel, ThemeProvider, Input } from "@material-tailwind/react";
// Import Theme
import theme from "./theme";
// Import Images
import checkCircle from "media/packages/checkCircle.png";
// Import Packages
import PricingAndPackagesArray from "./pricingAndPackages.json";
import { useState } from "react";

const PricingAndPackages = () => {
    const [data, setData] = useState(PricingAndPackagesArray);
    console.log(data);
    return (
        <ThemeProvider value={theme}>
            <section>
                <div>
                    <div className="container">
                        <Tabs value="logo">
                            <TabsHeader>
                                {
                                    data.map(({value, label}) => {
                                        <Tab value={value}>
                                            {label}
                                        </Tab>
                                    })
                                }
                                {/* <Tab value="logo">
                                    Logo
                                </Tab>
                                <Tab value="illustrationDesign">
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
                                <TabPanel value="illustrationDesign">
                                    Illustration Design
                                </TabPanel>
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