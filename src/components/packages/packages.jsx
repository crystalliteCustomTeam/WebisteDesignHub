"use client"
// Import Components
import Image from "next/image";
import { Input, ThemeProvider } from "@material-tailwind/react";
// Import Images
import checkCircle from "media/packages/checkCircle.png";

const Packages = () => {
    const theme = {
        input: {
            defaultProps: {
                color: "white",
                size: "lg",
                variant: "outlined",
            },
            styles: {
                base: {
                    input: {
                        bg: "bg-[#7972F9]"
                    }
                },
                variants: {
                    outlined: {
                        base: {
                            input: {
                                borderWidth: "border-2 placeholder-shown:border-0",
                                borderColor: "placeholder-shown:border-white placeholder-shown:border-t-white",
                                floated: {
                                    borderWidth: "border-2 focus:border-2",
                                    borderColor: "border-t-transparent focus:border-t-transparent",
                                },
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
        },
        select: {
            defaultProps: {
                variant: "outlined",
                size: "lg",
                color: "white", // Black is not available thts's why i use blue to override black
            },
            styles: {
                base: {
                    select: {
                        color: "text-white",
                    },
                    arrow: {
                        initial: {
                            color: "text-white",
                        },
                    },
                },
                variants: {
                    outlined: {
                        colors: {
                            select: {
                                blue: {
                                    close: {
                                        borderColor: "border-white",
                                        bg: "bg-[#7972F9]"
                                    },
                                    open: {
                                        borderColor: "border-white",
                                        borderTopColor: "border-t-transparent",
                                        bg: "bg-[#7972F9]"
                                    },
                                    withValue: {
                                        borderColor: "border-white",
                                        borderTopColor: "border-t-transparent",
                                        bg: "bg-[#7972F9]"
                                    },
                                },
                            },
                            label: {
                                blue: {
                                    close: {
                                        color: "text-white",
                                        before: "before:border-transparent",
                                        after: "after:border-transparent",
                                    },
                                    open: {
                                        color: "text-white",
                                        before: "before:border-white",
                                        after: "after:border-white",
                                    },
                                    withValue: {
                                        color: "text-white",
                                        before: "before:border-white",
                                        after: "after:border-white",
                                    },
                                },
                            }
                        },
                        states: {
                            close: {
                                select: {
                                    borderWidth: "border-0",
                                },
                            },
                            withValue: {
                                select: {
                                    borderWidth: "border-2",
                                },
                                label: {
                                    fontSize: "text-[11px]",
                                    disabled: "peer-disabled:text-transparent",
                                    before: {
                                        bt: "before:border-t-2",
                                        bl: "before:border-l-2",
                                    },
                                    after: {
                                        bt: "after:border-t-2",
                                        br: "after:border-r-2",
                                    },
                                },
                            },
                        }
                    }
                }
            }
        },
        textarea: {
            defaultProps: {
                variant: "outlined",
                size: "",
                color: "blue", // Black is not available thts's why i use blue to override black
            },
            styles: {
                base: {
                    textarea: {
                        bg: "bg-[#7972F9]"
                    }
                },
                variants: {
                    outlined: {
                        base: {
                            textarea: {
                                borderWidth: "border-2 placeholder-shown:border-0",
                                borderColor: "placeholder-shown:border-white placeholder-shown:border-t-white",
                                floated: {
                                    borderWidth: "border-2 focus:border-2",
                                    borderColor: "border-t-transparent focus:border-t-transparent",
                                },
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
                        },
                        colors: {
                            textarea: {
                                blue: {
                                    color: "text-white",
                                    borderColor: "border-white",
                                    borderColorFocused: "focus:border-white",
                                },
                            },
                            label: {
                                blue: {
                                    color: "!text-white peer-focus:white",
                                    after: "after:border-white peer-focus:after:border-white",
                                    before: "before:border-white peer-focus:before:border-white",
                                },
                            }
                        }
                    }
                }
            }
        }
    }
    // Array for Basic Logo List
    const listBasicLogo = [
        "3 Custom Logo Design Concepts",
        "1 Dedicated Designer",
        "4 Revisions",
        "48 to 72 hours TAT",
        "100% Unique Design Guarantee",
        "100% Satisfaction Guarantee",
        "100% Money Back Guarantee *",
        "Design Guarantee",
        "4 Dedicated Designer",
        "Stationary Design 100% Unique",
    ];
    // Array for Basic Logo List
    const listProfessionalLogo = [
        "3 Custom Logo Design Concepts",
        "1 Dedicated Designer",
        "4 Revisions",
        "48 to 72 hours TAT",
        "100% Unique Design Guarantee",
        "100% Satisfaction Guarantee",
        "100% Money Back Guarantee *",
        "Design Guarantee",
        "4 Dedicated Designer",
        "Stationary Design 100% Unique",
    ];
    // Array for Basic Logo List
    const listBusinessLogo = [
        "3 Custom Logo Design Concepts",
        "1 Dedicated Designer",
        "4 Revisions",
        "48 to 72 hours TAT",
        "100% Unique Design Guarantee",
        "100% Satisfaction Guarantee",
        "100% Money Back Guarantee *",
        "Design Guarantee",
        "4 Dedicated Designer",
        "Stationary Design 100% Unique",
    ];
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
                        <div className="bg-[#665FF3] py-10 px-3 lg:px-5 xl:p-20 rounded-[50px]">
                            <div className="flex lg:divide-x-2 lg:gap-3 xl:gap-5 lg:divide-[#9EE7F3] flex-wrap lg:flex-nowrap justify-center lg:justify-normal">
                                <div className="basis-full px-5 lg:p-0 md:basis-6/12 lg:basis-1/3">
                                    <div className="bg-gradient-to-b from-[#5750E4] to-[#2E2A78] h-16 flex items-center justify-center rounded-xl">
                                        <h4 className="font-megat font-normal text-white text-center text-3xl">Basic Logo</h4>
                                    </div>
                                    <h5 className="font-sans text-center font-bold text-5xl text-white mt-5 mb-5">
                                        $25 <sup className="text-[#A497F5] text-4xl"><del>$50</del></sup>
                                    </h5>
                                    <ul className="overflow-y-auto h-64">
                                        {
                                            listBasicLogo.map((e, i) => {
                                                return (
                                                    <li className="text-base text-white font-normal flex items-center gap-2 leading-8" key={i}>
                                                        <Image src={checkCircle} alt="checkCircle" />
                                                        <span>{e}</span>
                                                    </li>
                                                );
                                            })
                                        }
                                    </ul>
                                    <p className="text-sm text-white font-normal my-5 text-center lg:text-left">
                                        Send us a message below & we’ll get in touch!
                                    </p>
                                    <form action="">
                                        <div className="flex flex-col gap-y-4">
                                            <div className="basis-full">
                                                <Input label="Name" type="text" id="" name="" />
                                            </div>
                                            <div className="basis-full">
                                                <Input label="Email" type="email" id="" name="" />
                                            </div>
                                            <div className="basis-full lg:basis-1/3">
                                                <Input label="Telephone Number" type="tel" id="" name="" />
                                            </div>
                                            <div className="basis-full">
                                                <Input label="Meesage..." type="text" id="" name="" />
                                            </div>
                                            <div className="basis-full">
                                                <button type="button" className="text-sm sm:text-lg font-medium border-[#96E1EE] h-11 rounded-md bg-transparent border-2 w-full text-white hover:bg-[#96E1EE]">Select Package</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="basis-full px-5 mt-4 md:mt-0 lg:p-0 md:basis-6/12 lg:basis-1/3 lg:pl-3 xl:pl-5">
                                    <div className="bg-gradient-to-b from-[#94DFEC] to-[#007488] h-16 flex items-center justify-center rounded-xl">
                                        <h4 className="font-megat font-normal text-white text-center text-3xl">Professional Logo</h4>
                                    </div>
                                    <h5 className="font-sans text-center font-bold text-5xl text-white mt-5 mb-5">
                                        $99 <sup className="text-[#A497F5] text-4xl"><del>$198</del></sup>
                                    </h5>
                                    <ul className="overflow-y-auto h-64">
                                        {
                                            listProfessionalLogo.map((e, i) => {
                                                return (
                                                    <li className="text-base text-white font-normal flex items-center gap-2 leading-8" key={i}>
                                                        <Image src={checkCircle} alt="checkCircle" />
                                                        <span>{e}</span>
                                                    </li>
                                                );
                                            })
                                        }
                                    </ul>
                                    <p className="text-sm text-white font-normal my-5 text-center lg:text-left">
                                        Send us a message below & we’ll get in touch!
                                    </p>
                                    <form action="">
                                        <div className="flex flex-col gap-y-4">
                                            <div className="basis-full">
                                                <Input label="Name" type="text" id="" name="" />
                                            </div>
                                            <div className="basis-full">
                                                <Input label="Email" type="email" id="" name="" />
                                            </div>
                                            <div className="basis-full lg:basis-1/3">
                                                <Input label="Telephone Number" type="tel" id="" name="" />
                                            </div>
                                            <div className="basis-full">
                                                <Input label="Meesage..." type="text" id="" name="" />
                                            </div>
                                            <div className="basis-full">
                                                <button type="button" className="text-sm sm:text-lg font-medium border-[#96E1EE] h-11 rounded-md bg-transparent border-2 w-full text-white hover:bg-[#96E1EE]">Select Package</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="basis-full px-5 mt-4 lg:mt-0 lg:p-0 md:basis-6/12 lg:basis-1/3 lg:pl-3 xl:pl-5">
                                    <div className="bg-gradient-to-b from-[#0F2847] to-[#03080E] h-16 flex items-center justify-center rounded-xl">
                                        <h4 className="font-megat font-normal text-white text-center text-3xl">Business Logo</h4>
                                    </div>
                                    <h5 className="font-sans text-center font-bold text-5xl text-white mt-5 mb-5">
                                        $199 <sup className="text-[#A497F5] text-4xl"><del>$398</del></sup>
                                    </h5>
                                    <ul className="overflow-y-auto h-64">
                                        {
                                            listBusinessLogo.map((e, i) => {
                                                return (
                                                    <li className="text-base text-white font-normal flex items-center gap-2 leading-8" key={i}>
                                                        <Image src={checkCircle} alt="checkCircle" />
                                                        <span>{e}</span>
                                                    </li>
                                                );
                                            })
                                        }
                                    </ul>
                                    <p className="text-sm text-white font-normal my-5 text-center lg:text-left">
                                        Send us a message below & we’ll get in touch!
                                    </p>
                                    <form action="">
                                        <div className="flex flex-col gap-y-4">
                                            <div className="basis-full">
                                                <Input label="Name" type="text" id="" name="" />
                                            </div>
                                            <div className="basis-full">
                                                <Input label="Email" type="email" id="" name="" />
                                            </div>
                                            <div className="basis-full lg:basis-1/3">
                                                <Input label="Telephone Number" type="tel" id="" name="" />
                                            </div>
                                            <div className="basis-full">
                                                <Input label="Meesage..." type="text" id="" name="" />
                                            </div>
                                            <div className="basis-full">
                                                <button type="button" className="text-sm sm:text-lg font-medium border-[#96E1EE] h-11 rounded-md bg-transparent border-2 w-full text-white hover:bg-[#96E1EE]">Select Package</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            {/* <form action="">
                                <div className="flex flex-col gap-y-3 lg:gap-y-0 lg:flex-row lg:gap-5 mb-3 w-[90%] lg:w-full m-auto">
                                    <div className="basis-full lg:basis-1/3">
                                        <Input label="Name" type="text" id="" name="" />
                                    </div>
                                    <div className="basis-full lg:basis-1/3">
                                        <Input label="Telephone Number" type="tel" id="" name="" />
                                    </div>
                                    <div className="basis-full lg:basis-1/3">
                                        <Input label="Email" type="email" id="" name="" />
                                    </div>
                                </div>
                                <div className="flex flex-col lg:flex-row lg:gap-5 gap-y-3 lg:gap-y-0 w-[90%] lg:w-full m-auto">
                                    <div className="basis-full lg:basis-1/3">
                                        <Select label="Select Package" id="" name="">
                                            <Option>Logo Design</Option>
                                            <Option>Website Design</Option>
                                            <Option>Branding Design</Option>
                                            <Option>Application Design</Option>
                                        </Select>
                                    </div>
                                    <div className="basis-full lg:basis-1/3">
                                        <Textarea label="leave your message" variant="outlined" size="lg" id="" name="" rows={1} className="min-h-full" />
                                    </div>
                                    <div className="basis-full lg:basis-1/3">
                                        <button type="button" className="text-sm sm:text-lg font-medium border-[#96E1EE] pr-8 pl-8 h-11 rounded-md bg-transparent border-2 w-full text-white hover:bg-[#96E1EE]">Submit Form</button>
                                    </div>
                                </div>
                            </form> */}
                        </div>
                    </div>
                </div>
            </section>
        </ThemeProvider>
    );
}

export default Packages;