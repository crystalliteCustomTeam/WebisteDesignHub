"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
// Import Css
import styles from "./Navbar.module.css";
// Import Images
import logo from "media/logo.png";
// Components
import Button from "../button/Button";
// Import Images
const Navbar = () => {
    // Navigations Array
    let navigationsArray = [
        {
            text: "Home",
            link: "/"
        },
        {
            text: "About",
            link: "/"
        },
        {
            text: "Services",
            link: "/"
        },
        {
            text: "FAQ",
            link: "/"
        },
        {
            text: "Pricing/Packages",
            link: "/"
        },
        {
            text: "Contact",
            link: "/"
        }
    ];
    // Mobile State
    const [toggle, setToggle] = useState(true);
    return (
        <header className="absolute top-0 left-0 right-0 z-20">
            <div className="py-6">
                <div className="container">
                    <nav className="flex items-center">
                        <Link href="/" className="block">
                            <Image src={logo} alt="logo" priority />
                        </Link>
                        <div className={`__naviagtionWrapper ${toggle ?
                            'fixed top-0 left-0 right-0 bg-black h-screen max-w-xs px-4 py-4 overflow-y-scroll'
                            : 'ml-auto'}`}>
                            <Link href="/" className={`${toggle ? 'block w-max mx-auto mb-4' : 'hidden'}`}>
                                <Image src={logo} alt="logo" />
                            </Link>
                            <ul className={`flex gap-5 lg:gap-3 xl:gap-5 ${toggle ?
                                'flex-col'
                                : 'items-center'}`}>
                                {
                                    navigationsArray && Array.isArray(navigationsArray) && navigationsArray.map((e, i) => {
                                        return (
                                            <li key={i}>
                                                <Link href={e.link}
                                                    className="text-base leading-none xl:text-lg font-medium text-white hover:opacity-50 active:opacity-50">
                                                    {e.text}
                                                </Link>
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                        </div>
                        <div className="hidden lg:flex items-center lg:gap-3 xl:gap-5 lg:ml-5 xl:ml-10">
                            <Button text="Start Live Chat"
                                icon={true}
                                color="bg-[#7E6BC6] text-white"
                                hover="hover:bg-[#000000]"
                                link="#" />
                            <Button text="Book Demo"
                                color="bg-transparent text-white"
                                border="border-2 border-[#7E6BC6]"
                                hover="hover:bg-[#7E6BC6]"
                                link="tel:123654789" />
                        </div>
                        <button className="flex md:hidden" onClick={() => {
                            (e) => setToggle(!e)
                            console.log(toggle)
                        }}>hello</button>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Navbar;