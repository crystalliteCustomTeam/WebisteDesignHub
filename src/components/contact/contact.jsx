"use client"
// Imports Components
import Image from "next/image";
import Link from "next/link";
import { Input, Select, Option, Textarea } from "@material-tailwind/react";
import { ThemeProvider } from "@material-tailwind/react";
// Import Images
import contactGirl from "media/contactGirl.png";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Axios from "axios";

const Contact = () => {
    const [selectedService, setSelectedService] = useState("Web Design Development");
    const [data, setData] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
        services: selectedService,
        pageURL: usePathname()
    });

    const handleDataChange = (e) => {
        setData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }

    const handleSelectServices = (e) => {
        setSelectedService(e);
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        let headersList = {
            "Accept": "*/*",
            "Content-Type": "application/json"
        }

        let bodyContent = { ...data, services: selectedService };
        let reqOptions = {
            url: "/api/email",
            method: "POST",
            headers: headersList,
            data: JSON.stringify(bodyContent),
        }
        let res = await Axios.request(reqOptions);
        console.log(res.data);
        window.location.href = "/thank-you";
    }

    const theme = {
        input: {
            defaultProps: {
                color: "black",
                size: "lg",
                variant: "outlined",
            }
        },
        select: {
            defaultProps: {
                variant: "outlined",
                size: "lg",
                color: "blue", // Black is not available thts's why i use blue to override black
            },
            styles: {
                base: {
                    select: {

                    }
                },
                variants: {
                    outlined: {
                        colors: {
                            select: {
                                blue: {
                                    open: {
                                        borderColor: "border-black",
                                        borderTopColor: "border-t-transparent",
                                    },
                                    withValue: {
                                        borderColor: "border-black",
                                        borderTopColor: "border-t-transparent",
                                    },
                                },
                            },
                            label: {
                                blue: {
                                    close: {
                                        color: "text-black",
                                        before: "before:border-transparent",
                                        after: "after:border-transparent",
                                    },
                                    open: {
                                        color: "text-gray-500",
                                        before: "before:border-black",
                                        after: "after:border-black",
                                    },
                                    withValue: {
                                        color: "text-black",
                                        before: "before:border-black",
                                        after: "after:border-black",
                                    },
                                },
                            }
                        }
                    }
                }
            }
        },
        textarea: {
            defaultProps: {
                variant: "outlined",
                size: "md",
                color: "blue", // Black is not available thts's why i use blue to override black
            },
            styles: {
                base: {
                    textarea: {

                    }
                },
                variants: {
                    outlined: {
                        colors: {
                            textarea: {
                                blue: {
                                    color: "text-black",
                                    borderColor: "border-black",
                                    borderColorFocused: "focus:border-black",
                                },
                            },
                            label: {
                                blue: {
                                    color: "!text-black peer-focus:black",
                                    after: "after:border-black peer-focus:after:border-black",
                                    before: "before:border-black peer-focus:before:border-black",
                                },
                            }
                        }
                    }
                }
            }
        }
    }
    return (
        <ThemeProvider value={theme}>
            <section>
                <div className="bg-[#F5F5F5]">
                    <div className="container py-10 md:py-20 relative">
                        <div className="flex">
                            <div className="basis-full md:basis-10/12 lg:basis-8/12">
                                <h2 className="text-2xl sm:text-4xl xl:text-5xl font-megat text-black font-normal leading-none mb-3">
                                    Arrange a Meeting Anytime at Your Convenience
                                </h2>
                                <p className="text-base text-black font-normal mb-10">We understand the value of time! That’s why we let you set the schedule and arrange the meeting at your convenience with us. </p>
                                <form autoComplete="off">
                                    <div className="flex gap-5 flex-wrap md:flex-nowrap">
                                        <div className="basis-full md:basis-6/12 lg:basis-5/12  xl:basis-6/12 flex space-y-6 flex-col">
                                            <Input label="Name" type="text" name="name" onChange={handleDataChange} />
                                            <Input label="Telephone Number" name="phone" type="tel" onChange={handleDataChange} />
                                            <Input label="Email" type="email" name="email" onChange={handleDataChange} />
                                            <Select label="You're Interested in" onChange={handleSelectServices}>
                                                <Option value="SEO">SEO</Option>
                                                <Option value="PPC Marketing">PPC Marketing</Option>
                                                <Option value="Social Media Management">Social Media Management</Option>
                                                <Option value="Reputation Management">Reputation Management</Option>
                                                <Option value="Content Marketing">Content Marketing</Option>
                                                <Option value="Web Design Development">Web Design Development</Option>
                                                <Option value="Other">Other</Option>
                                            </Select>
                                            <button type="button" className="text-sm sm:text-lg font-medium w-max pr-8 pl-8 h-10 rounded-md bg-[#0F2847] text-white hover:bg-black hidden md:block" onClick={handleFormSubmit}>Submit Form</button>
                                        </div>
                                        <div className="basis-full md:basis-6/12 lg:basis-5/12  xl:basis-6/12">
                                            <Textarea label="leave your message" variant="outlined" size="lg" id="" rows={11} className="h-[50px] md:h-full" name="message" onChange={handleDataChange} />
                                            <button type="button" className="text-sm sm:text-lg font-medium w-max pr-8 pl-8 h-10 rounded-md bg-[#0F2847] text-white hover:bg-black block md:hidden mt-3" onClick={handleFormSubmit}>Submit Form</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="hidden lg:block absolute bottom-0 right-0">
                            <Image src={contactGirl} alt="contactGirl" />
                        </div>
                    </div>
                </div>
            </section>
        </ThemeProvider>
    );
}

export default Contact;