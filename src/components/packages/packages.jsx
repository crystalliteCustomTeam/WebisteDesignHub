"use client"
// Import Components
import Image from "next/image";
import { ThemeProvider, Input } from "@material-tailwind/react";
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
    const [data, setData] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
        pageURL: usePathname()
    });

    const handleDataChange = (e) => {
        setData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        let headersList = {
            "Accept": "*/*",
            "Content-Type": "application/json"
        }

        let bodyContent = JSON.stringify(data);
        let reqOptions = {
            url: "https://brandsapi.cryscampus.com/public/api/leadform/webdesginhub",
            method: "POST",
            headers: headersList,
            data: bodyContent,
        }
        let res = await Axios.request(reqOptions);
        window.location.href = "/thank-you";
    }
    return (
        <ThemeProvider value={theme}>
            <section>
                <div className="bg-purple-blue py-10 md:py-20">
                    <div className="container">
                        <div className="text-center mb-10">
                            <span className="text-lg font-normal text-[#A497F5]">
                                {content.subtitle}
                            </span>
                            <h2 className="font-megat font-normal text-4xl lg:text-5xl text-white mb-2">
                                {content.title}
                            </h2>
                            <p className="text-base text-white font-normal">
                                {content.desc}
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4">
                            {dataPackages[content.key].packages.map((e, i) => {
                                return <div key={i} className="shadow-lg bg-[#B8C5FA] p-4 rounded-xl">
                                    <div className="bg-[#0F2847] rounded-xl text-center py-5 shadow-lg">
                                        <h4 className="font-megat font-normal text-white text-3xl">{e.name}</h4>
                                    </div>
                                    <p className="text-sm text-black font-normal my-5 leading-[24px] text-center">
                                        {e.note}
                                    </p>
                                    <h5 className="font-sans text-center font-bold text-5xl text-black my-10">
                                        ${e.discountedPrice} <sup className="opacity-50 text-4xl"><del>{e.originalPrice}</del></sup>
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
                                    <form autoComplete="off">
                                        <div className="flex flex-col gap-y-4">
                                            <div className="basis-full">
                                                <Input label="Name" type="text" id="" onChange={handleDataChange} name="name" />
                                            </div>
                                            <div className="basis-full">
                                                <Input label="Email" type="email" id="" onChange={handleDataChange} name="email" />
                                            </div>
                                            <div className="basis-full">
                                                <Input label="Telephone Number" type="tel" id="" onChange={handleDataChange} name="phone" />
                                            </div>
                                            <div className="basis-full">
                                                <Input type="hidden" id="" name="message" value={`Package : ${e.name}`} onChange={handleDataChange} />
                                            </div>
                                            <div className="basis-full">
                                                <button type="button" onClick={handleFormSubmit} className="text-lg font-medium h-11 rounded-md bg-[#0F2847] w-full text-white ">Select Package</button>
                                            </div>
                                        </div>
                                    </form>
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