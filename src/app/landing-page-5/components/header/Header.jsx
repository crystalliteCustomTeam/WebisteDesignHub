"use client"
// Import Components
import { Collapse, IconButton, Navbar } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/button/button";
// Import Images
import logo from "media/logo.svg";
import { useState } from "react";
const Header = () => {
    const [openNav, setOpenNav] = useState(false);
    const navList = (
        <ul className="lg:flex lg:items-center xl:gap-x-10 gap-x-5 lg:h-full rounded-2xl bg-black lg:bg-transparent lg:rounded-none py-5 lg:py-0 px-5 lg:px-0">
            <li className="lg:h-full lg:flex lg:items-center"><a href="#" className="text-lg font-medium leading-10 hover:text-[#860c91]">Home</a></li>
            <li className="lg:h-full lg:flex lg:items-center relative">
                <a href="#services" className="text-lg font-medium leading-10 hover:text-[#860c91]">
                    Services
                </a>
            </li>
            <li className="lg:h-full lg:flex lg:items-center"><a href="#our-work" className="text-lg font-medium leading-10 hover:text-[#860c91]">Our Work</a></li>
            <li className="lg:h-full lg:flex lg:items-center"><a href="#our-Industries" className="text-lg font-medium leading-10 hover:text-[#860c91]">Our Industries</a></li>
            <li className="lg:h-full lg:flex lg:items-center"><a href="#about-us" className="text-lg font-medium leading-10 hover:text-[#860c91]">About</a></li>
            <li className="lg:h-full lg:flex lg:items-center"><a href="#contact-us" className="text-lg font-medium leading-10 hover:text-[#860c91]">Contact</a></li>
        </ul>
    );
    return (
        <header>
            <Navbar className="max-w-none px-0 py-0 absolute top-0 left-0 z-[9999] rounded-none bg-[#000000] shadow-none backdrop-saturate-100 backdrop-blur-none border-none">
                <div className="container">
                    <div className="flex items-center h-24">
                        <Link href="/">
                            <Image src={logo} alt="logo" />
                        </Link>
                        <div className="hidden lg:flex ml-auto xl:ms-auto xl:pe-10 pe-5 h-full items-center">
                            {navList}
                        </div>
                        <Button text="Start Live Chat"
                            icon={true}
                            color={`bg-[#9E7DE9] text-white lg:flex hidden`}
                            hover="hover:bg-[#000000]"
                            link="javascript:$zopim.livechat.window.show();" />
                        <IconButton
                            variant="text"
                            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                            ripple={false}
                            onClick={() => setOpenNav(!openNav)} >
                            {openNav ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    className="h-6 w-6"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2} >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </IconButton>
                    </div>
                </div>
                <Collapse open={openNav} className="block xl:hidden">
                    <div className="container mx-auto">
                        {navList}
                    </div>
                </Collapse>
            </Navbar>
        </header>
    );
}

export default Header;