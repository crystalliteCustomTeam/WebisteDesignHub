"use client"
// Import Components
import { Input, Option, Select, Textarea, ThemeProvider } from "@material-tailwind/react";

const From = () => {
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
                                borderWidth: "border-2 placeholder-shown:border-0",
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
                                        // bg: "bg-[#06050538]"
                                    },
                                    open: {
                                        borderColor: "border-white",
                                        borderTopColor: "border-t-transparent",
                                        // bg: "bg-[#06050538]"
                                    },
                                    withValue: {
                                        borderColor: "border-white",
                                        borderTopColor: "border-t-transparent",
                                        // bg: "bg-[#06050538]"
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
    return (
        <ThemeProvider value={theme}>
            <div className="lg:absolute lg:top-[95%] lg:left-0 lg:right-0 z-10 pb-10 lg:pb-0">
                <div className="container">
                    <div className="bg-[#0000006b] backdrop-blur-sm py-10 md:p-10 rounded-[50px] brightness-[-4]">
                        <form action="">
                            <div className="flex flex-col gap-y-3 lg:gap-y-0 lg:flex-row lg:gap-5 mb-3 w-[90%] lg:w-full m-auto">
                                <div className="basis-full lg:basis-1/3">
                                    <Input label="Name" type="text" id="" name="" className="backdrop-blur-sm" />
                                </div>
                                <div className="basis-full lg:basis-1/3">
                                    <Input label="Telephone Number" type="tel" id="" name="" className="backdrop-blur-sm" />
                                </div>
                                <div className="basis-full lg:basis-1/3">
                                    <Input label="Email" type="email" id="" name="" className="backdrop-blur-sm" />
                                </div>
                            </div>
                            <div className="flex flex-col lg:flex-row lg:gap-5 gap-y-3 lg:gap-y-0 w-[90%] lg:w-full m-auto">
                                <div className="basis-full lg:basis-1/3">
                                    <Select label="Tell Us your story" id="" name="" className="backdrop-blur-sm">
                                        <Option>Logo Design</Option>
                                        <Option>Website Design</Option>
                                        <Option>Branding Design</Option>
                                        <Option>Application Design</Option>
                                    </Select>
                                </div>
                                <div className="basis-full lg:basis-1/3">
                                    <Textarea label="leave your message" variant="outlined" size="lg" id="" name="" rows={1} className="min-h-full backdrop-blur-sm" />
                                </div>
                                <div className="basis-full lg:basis-1/3">
                                    <button type="button" className="text-sm sm:text-lg font-medium pr-8 pl-8 h-11 rounded-md bg-[#0F2847] w-full text-white ">Submit Form</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </ThemeProvider>
    );
}

export default From;