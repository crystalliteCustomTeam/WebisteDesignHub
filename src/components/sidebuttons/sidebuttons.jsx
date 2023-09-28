"use client"
// Import Components
import Image from "next/image";
import Link from "next/link";
import { Input, ThemeProvider } from "@material-tailwind/react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Axios from "axios";
// Import Images
import chat from "media/chatIcon.svg";
import call from "media/callIcon.svg";

const Sidebuttons = () => {
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

        let bodyContent = JSON.stringify(data);
        let reqOptions = {
            url: "/api/email",
            method: "POST",
            headers: headersList,
            data: bodyContent,
        }
        await Axios.request(reqOptions);
        e.target.value = "Submit Form";
        window.location.href = "/thank-you";
    }
    const theme = {
        input: {
            defaultProps: {
                color: "white",
                size: "lg",
                variant: "outlined",
            },
            styles: {
                variants: {
                    outlined: {
                        base: {
                            input: {
                                borderWidth: "border-2 placeholder-shown:border-2",
                                borderColor: "placeholder-shown:border-white placeholder-shown:border-t-white",
                                floated: {
                                    borderWidth: "border-2 focus:border-2",
                                    borderColor: "border-t-transparent focus:border-t-transparent",
                                },
                                bg: "bg-[#06050538]"
                            },
                            label: {
                                before: {
                                    floated: {
                                        bt: "before:border-t-2 peer-focus:before:border-t-2",
                                        bl: "before:border-l-2 peer-focus:before:border-l-2",
                                    },
                                },
                                after: {
                                    floated: {
                                        bt: "after:border-t-2 peer-focus:after:border-t-2",
                                        br: "after:border-r-2 peer-focus:after:border-r-2",
                                    },
                                },
                            },
                        }
                    }
                }
            }
        }
    }
    return (
        // <div className="fixed right-0 bottom-0 top-0 z-50 gap-y-4 hidden lg:flex flex-col justify-center w-[245px]">
        <>
            <Link href="javascript:$zopim.livechat.window.show();" className="cursor-pointer hidden lg:flex items-center rounded-tl-[50px] rounded-bl-[50px] py-2 px-4 gap-4 translate-x-[75%] hover:translate-x-[1%] bg-[#0F2847] fixed top-[25%] right-0 z-50">
                <Image src={chat} alt="chat" />
                <span className="text-white font-semibold text-lg block" href="#">Start Live Chat</span>
            </Link>
            <Link href="tel:(855)888-8399" className="cursor-pointer hidden lg:flex items-center rounded-tl-[50px] rounded-bl-[50px] py-2 px-4 gap-4 translate-x-[75%] hover:translate-x-[1%] bg-[#0F2847] fixed top-[37%] right-0 z-50">
                <Image src={call} alt="call" />
                <span className="text-white font-semibold text-lg">(855) 888-8399</span>
            </Link>
            <div className="cursor-pointer hidden lg:flex items-center translate-x-[100%] hover:translate-x-[1%] fixed top-[49%] right-0 z-50">
                <span className="text-white font-normal text-lg bg-[#0F2847] tracking-wide rotate-[-90deg] absolute top-[45%] left-[-137px] rounded-tr-[30px] rounded-tl-[30px] py-2 px-3 ">60% off on all services</span>
                <ThemeProvider value={theme}>
                    <form className="w-[400px] p-4 bg-black" autoComplete="off">
                        <div className="mb-3">
                            <Input label="Name" type="text" id="" onChange={handleDataChange} name="name" />
                        </div>
                        <div className="mb-3">
                            <Input label="Telephone Number" type="tel" id="" onChange={handleDataChange} name="phone" />
                        </div>
                        <div className="mb-3">
                            <Input label="Email" type="email" id="" onChange={handleDataChange} name="email" />
                        </div>
                        <div className="mb-3">
                            <Input label="leave your message" type="text" id="" onChange={handleDataChange} name="message" />
                        </div>
                        <input type="button" onClick={handleFormSubmit} className="cursor-pointer  text-lg font-medium pr-8 pl-8 h-11 rounded-md bg-[#A497F5] w-full text-white hover:bg-[#C165CB]" value="Submit Form" />
                    </form>
                </ThemeProvider>
            </div>
        </>
    );
}

export default Sidebuttons;