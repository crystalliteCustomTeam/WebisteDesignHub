"use client"
// Import Components
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Axios from "axios";
import { usePathname, useSearchParams } from 'next/navigation'
import { useState } from "react";

const Package = ({ params }) => {
    const [data, setData] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
        services: "no-need",
        pageURL: usePathname()
    });

    const handleDataChange = (e) => {
        setData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        e.target.value = "Processing...";
        let headersList = {
            "Accept": "*/*",
            "Content-Type": "application/json"
        }

        let bodyContent = data;
        let reqOptions = {
            url: "https://brandsapi.cryscampus.com/public/api/leadform/webdesginhub",
            method: "POST",
            headers: headersList,
            data: JSON.stringify(bodyContent),
        }
        let res = await Axios.request(reqOptions);
        e.target.value = "Next";
        // window.location.href = "/thank-you";
    }
    const searchParams = useSearchParams();
    const price = searchParams.get('price');

    return (
        <main>
            {/* {params.package.replace(/\-/g, ' ').toUpperCase()} */}
            <Header />
            <section>
                <div className="__homeHeroGradientBg pt-[150px] pb-[50px] relative z-[1]">
                    <div className="container text-center">
                        <h1 className="text-4xl xl:text-6xl font-sans text-white font-bold leading-none mb-3">
                            Order Now!
                        </h1>
                        <p className="text-sm sm:text-base xl:text-lg font-normal leading-none text-white mb-3">
                            Submit Your Detailed Order Below
                        </p>
                        <h2 className="text-2xl xl:text-3xl font-sans text-[#be9ae9] font-bold leading-none mb-3">
                            {params.package.replace(/\-/g, ' ').toUpperCase()}
                        </h2>
                        <h3 className="text-4xl xl:text-6xl font-sans text-white font-bold leading-none mb-3">
                            {price}
                        </h3>
                        <form autoComplete="off" className="w-[90%] lg:w-[40%] m-auto">
                            <input type="text" placeholder="Full Name*" className="w-full h-[40px] px-3 focus-visible:outline-none font-sans font-medium text-[16px] text-black mb-5 placeholder:text[#f17724] ring-4 ring-[#f17724]"
                                name="name" onChange={handleDataChange} />
                            <input type="email" placeholder="Email Address*" className="w-full h-[40px] px-3 focus-visible:outline-none font-sans font-medium text-[16px] text-black mb-5 placeholder:text[#f17724] ring-4 ring-[#f17724]"
                                name="email" onChange={handleDataChange} />
                            <input type="tel" placeholder="Phone*" className="w-full h-[40px] px-3 focus-visible:outline-none font-sans font-medium text-[16px] text-black mb-5 placeholder:text[#f17724] ring-4 ring-[#f17724]"
                                name="phone" onChange={handleDataChange} />
                            <input type="button" className="w-max px-5 h-[40px] bg-[#f17724] text-[#ffffff] text-[18px] font-sans font-semibold hover:ring-4 hover:bg-transparent ring-[#f17724] cursor-pointer" onClick={handleFormSubmit} value="Next" />
                        </form>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    )
}

export default Package