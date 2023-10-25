"use client"
// Import Components
import Image from "next/image";
import { ThemeProvider, Input } from "@material-tailwind/react";
import Button from "@/components/button/button";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Axios from "axios";
// Import Theme
import theme from "../pricingAndPackages/theme";
// Import Images
import checkCircle from "media/packages/checkCircle.png";
// Import Packages
import dataPackages from "../pricingAndPackages/data";

const PricingAndPackages = ({ content }) => {
    return (
        <ThemeProvider value={theme}>
            <section>
                <div className="bg-white py-10 md:py-20">
                    <div className="container">
                        <div className="text-center mb-10">
                            <span className="text-lg font-normal text-black">
                                {content.subtitle}
                            </span>
                            <h2 className="font-megat font-normal text-4xl lg:text-5xl text-black mb-2">
                                {content.title}
                            </h2>
                            <p className="text-base text-black font-normal">
                                {content.desc}
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4">
                            {dataPackages[content.key].packages.map((e, i) => {
                                return <div key={i} className="shadow-lg bg-[#f4f5f6] p-4 rounded-xl">
                                    <div className="__btnGredient rounded-xl text-center py-5 shadow-lg">
                                        <h4 className="font-megat font-normal text-white text-3xl">{e.name}</h4>
                                        <p className="capitalize leading-[1]">{e.recomdation}</p>
                                    </div>
                                    <p className="text-sm text-black font-normal my-5 leading-[24px] text-center">
                                        {e.note}
                                    </p>
                                    <h5 className="font-sans text-center font-bold text-5xl text-black my-10">
                                        {e.discountedPrice} <sup className="opacity-50 text-4xl"><del>{e.originalPrice}</del></sup>
                                    </h5>
                                    <ul className="overflow-y-auto h-64 mb-5">
                                        {e.list.map((e, i) => {
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
                                            color="btnBg bg-[#300034] text-white"
                                            hover="hover:bg-[#000000]"
                                            // link={`order/${(content.name + " " + e.name).toLowerCase().replace(/\s/g, '-')}?price=$${e.discountedPrice}`}
                                            link={`order/package?value=${dataPackages[content.key].value}&id=${e.id}&label=${dataPackages[content.key].label}`} />
                                        <Button text="(855) 888-8399"
                                            color="btnColor text-black bg-transparent"
                                            border="border-2 border-[#300034]"
                                            hover="hover:bg-[#300034] hover:text-white"
                                            link="tel:(855)888-8399" />
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </ThemeProvider>
    );
}

export default PricingAndPackages;