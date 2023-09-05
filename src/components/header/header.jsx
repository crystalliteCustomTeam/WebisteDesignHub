"use client"
// Import Components
import { Collapse, IconButton, MobileNav, Navbar } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/button/Button";
import { usePathname } from "next/navigation";
// Import Images
import logo from "media/logo.svg";
import logoDesign from "media/menu/logoDesign.png";
import creativeCopywriting from "media/menu/creativeCopywriting.png";
import digitalMarketing from "media/menu/digitalMarketing.png";
import ecommerce from "media/menu/ecommerce.png";
import illustrationDesign from "media/menu/illustrationDesign.png";
import marketingCollateral from "media/menu/marketingCollateral.png";
import mobileApplication from "media/menu/mobileApplication.png";
import motionGraphics from "media/menu/motionGraphics.png";
import seoServices from "media/menu/seoServices.png";
import websiteDevelopment from "media/menu/websiteDevelopment.png";
import down from "media/menu/down.png";
import { useState } from "react";
import logo2 from "media/landing-pages/website-design-develop/logo.svg";

const Header = () => {
    const [openNav, setOpenNav] = useState(false);
    const [openSubMenu, setOpenSubMenu] = useState(false);
    const router = usePathname();
    const navList = (
        <ul className="lg:flex lg:items-center gap-6 lg:h-full rounded-2xl bg-black lg:bg-transparent lg:rounded-none py-5 lg:py-0 px-5 lg:px-0">
            <li className="lg:h-full lg:flex lg:items-center"><Link href="/" className="text-lg font-medium leading-10">Home</Link></li>
            <li className="lg:h-full lg:flex lg:items-center"><Link href="/about-us" className="text-lg font-medium leading-10">About</Link></li>
            <li className="lg:h-full lg:flex lg:items-center group relative">
                <button href="/" className="text-lg font-medium leading-10 flex items-center gap-3">
                    Services
                    <Image src={down} alt="down" className="brightness-0 invert" onClick={() => setOpenSubMenu((prev) => !prev)} />
                </button>
                <div className="lg:absolute lg:flex lg:opacity-0 lg:invisible group-hover:visible group-hover:opacity-100 top-full w-full lg:w-[600px] lg:justify-between lg:left-[-200px]  xl:left-[-100px] rounded-2xl right-0 bg-white lg:p-3 lg:mt-[-20px]">
                    <ul className="hidden lg:block w-1/2">
                        <li className="flex p-3 items-center text-black gap-3 rounded-2xl hover:bg-[#e9e9e9]">
                            <Image src={logoDesign} alt="logoDesign" />
                            <Link className="text-base" href="/logo-design">Logo Design</Link>
                        </li>
                        <li className="flex p-3 items-center text-black gap-3 rounded-2xl hover:bg-[#e9e9e9]">
                            <Image src={creativeCopywriting} alt="creativeCopywriting" />
                            <Link className="text-base" href="/creative-copywriting">Creative Copywriting</Link>
                        </li>
                        <li className="flex p-3 items-center text-black gap-3 rounded-2xl hover:bg-[#e9e9e9]">
                            <Image src={digitalMarketing} alt="digitalMarketing" />
                            <Link className="text-base" href="/digital-marketing">Digital Marketing</Link>
                        </li>
                        <li className="flex p-3 items-center text-black gap-3 rounded-2xl hover:bg-[#e9e9e9]">
                            <Image src={ecommerce} alt="ecommerce" />
                            <Link className="text-base" href="/ecommerce">Ecommerce Web Solutions</Link>
                        </li>
                        <li className="flex p-3 items-center text-black gap-3 rounded-2xl hover:bg-[#e9e9e9]">
                            <Image src={websiteDevelopment} alt="websiteDevelopment" />
                            <Link className="text-base" href="/website-development">Website Development</Link>
                        </li>
                    </ul>
                    <ul className="hidden lg:block w-1/2">
                        <li className="flex p-3 items-center text-black gap-3 rounded-2xl hover:bg-[#e9e9e9]">
                            <Image src={motionGraphics} alt="motionGraphics" />
                            <Link className="text-base" href="/motion-graphics">Motion Graphics</Link>
                        </li>
                        <li className="flex p-3 items-center text-black gap-3 rounded-2xl hover:bg-[#e9e9e9]">
                            <Image src={illustrationDesign} alt="illustrationDesign" />
                            <Link className="text-base" href="/illustration-design">Illustration Design</Link>
                        </li>
                        <li className="flex p-3 items-center text-black gap-3 rounded-2xl hover:bg-[#e9e9e9]">
                            <Image src={marketingCollateral} alt="marketingCollateral" />
                            <Link className="text-base" href="/marketing-collateral">Marketing Collateral</Link>
                        </li>
                        <li className="flex p-3 items-center text-black gap-3 rounded-2xl hover:bg-[#e9e9e9]">
                            <Image src={mobileApplication} alt="mobileApplication" />
                            <Link className="text-base" href="/mobile-application">App Design</Link>
                        </li>
                        <li className="flex p-3 items-center text-black gap-3 rounded-2xl hover:bg-[#e9e9e9]">
                            <Image src={seoServices} alt="seoServices" />
                            <Link className="text-base" href="/seo-services">SEO Services</Link>
                        </li>
                    </ul>
                    <Collapse open={openSubMenu} className="block lg:hidden">
                        <ul>
                            <li className="flex p-3 items-center text-black gap-3 rounded-2xl hover:bg-[#e9e9e9]">
                                <Image src={logoDesign} alt="logoDesign" />
                                <Link className="text-base" href="/logo-design">Logo Design</Link>
                            </li>
                            <li className="flex p-3 items-center text-black gap-3 rounded-2xl hover:bg-[#e9e9e9]">
                                <Image src={creativeCopywriting} alt="creativeCopywriting" />
                                <Link className="text-base" href="/creative-copywriting">Creative Copywriting</Link>
                            </li>
                            <li className="flex p-3 items-center text-black gap-3 rounded-2xl hover:bg-[#e9e9e9]">
                                <Image src={digitalMarketing} alt="digitalMarketing" />
                                <Link className="text-base" href="/digital-marketing">Digital Marketing</Link>
                            </li>
                            <li className="flex p-3 items-center text-black gap-3 rounded-2xl hover:bg-[#e9e9e9]">
                                <Image src={ecommerce} alt="ecommerce" />
                                <Link className="text-base" href="/ecommerce">Ecommerce Web Solutions</Link>
                            </li>
                            <li className="flex p-3 items-center text-black gap-3 rounded-2xl hover:bg-[#e9e9e9]">
                                <Image src={websiteDevelopment} alt="websiteDevelopment" />
                                <Link className="text-base" href="/website-development">Website Development</Link>
                            </li>
                            <li className="flex p-3 items-center text-black gap-3 rounded-2xl hover:bg-[#e9e9e9]">
                                <Image src={motionGraphics} alt="motionGraphics" />
                                <Link className="text-base" href="/motion-graphics">Motion Graphics</Link>
                            </li>
                            <li className="flex p-3 items-center text-black gap-3 rounded-2xl hover:bg-[#e9e9e9]">
                                <Image src={illustrationDesign} alt="illustrationDesign" />
                                <Link className="text-base" href="/illustration-design">Illustration Design</Link>
                            </li>
                            <li className="flex p-3 items-center text-black gap-3 rounded-2xl hover:bg-[#e9e9e9]">
                                <Image src={marketingCollateral} alt="marketingCollateral" />
                                <Link className="text-base" href="/marketing-collateral">Marketing Collateral</Link>
                            </li>
                            <li className="flex p-3 items-center text-black gap-3 rounded-2xl hover:bg-[#e9e9e9]">
                                <Image src={mobileApplication} alt="mobileApplication" />
                                <Link className="text-base" href="/mobile-application">App Design</Link>
                            </li>
                            <li className="flex p-3 items-center text-black gap-3 rounded-2xl hover:bg-[#e9e9e9]">
                                <Image src={seoServices} alt="seoServices" />
                                <Link className="text-base" href="/seo-services">SEO Services</Link>
                            </li>

                        </ul>
                    </Collapse>
                </div>
            </li>
            <li className="lg:h-full lg:flex lg:items-center"><Link href="/pricing-and-packages" className="text-lg font-medium leading-10">Pricing/Packages</Link></li>
            <li className="lg:h-full lg:flex lg:items-center"><Link href="/contact-us" className="text-lg font-medium leading-10">Contact</Link></li>
        </ul>
    );
    return (
        <header>
            <Navbar className="max-w-none px-0 py-0 absolute top-0 left-0 z-[9999] rounded-none bg-transparent shadow-none backdrop-saturate-100 backdrop-blur-none border-none">
                <div className="container">
                    <div className="flex items-center h-24">
                        <Link href="/">
                                {router !== "/website-design-develop-landing" ? <Image src={logo} alt="logo" /> : <Image src={logo2} alt="logo2" />}
                        </Link>
                        <div className="hidden lg:flex ml-auto xl:m-auto h-full items-center">
                            {navList}
                        </div>
                        <div className="hidden xl:flex items-center gap-3">
                            <Button text="Start Live Chat"
                                icon={true}
                                color={`${(() => {
                                    switch (router) {
                                        case '/logo-design':
                                            return "bg-[#7598F2]"
                                        case '/creative-copywriting':
                                            return "bg-[#768DF1]"
                                        case '/digital-marketing':
                                            return "bg-[#8A6EA5]"
                                        case '/ecommerce':
                                            return "bg-[#005368]"
                                        case '/website-development':
                                            return "bg-[#283C3C]"
                                        case '/motion-graphics':
                                            return "bg-[#195A47]"
                                        case '/illustration-design':
                                            return "bg-[#A4637A]"
                                        case '/marketing-collateral':
                                            return "bg-[#223C5A]"
                                        case '/mobile-application':
                                            return "bg-[#7AAF60]"
                                        case '/seo-services':
                                            return "bg-[#577981]"
                                        case '/contact-us':
                                            return "bg-[#005368]"
                                        case '/pricing-and-packages':
                                            return "bg-[#8A6EA5]"
                                        case '/website-design-develop-landing':
                                            return "bg-[#3283FF] pl-4 pr-4"
                                        default:
                                            return "bg-[#9E7DE9]"
                                    }
                                })()} text-white`}
                                hover="hover:bg-[#000000]"
                                link="#" />
                            <Button text="(123)-000-0000"
                                color="bg-transparent text-white"
                                border={`border-2 ${(() => {
                                    switch (router) {
                                        case '/logo-design':
                                            return "border-[#7598F2]"
                                        case '/creative-copywriting':
                                            return "border-[#768DF1]"
                                        case '/digital-marketing':
                                            return "border-[#8A6EA5]"
                                        case '/ecommerce':
                                            return "border-[#005368]"
                                        case '/website-development':
                                            return "border-[#283C3C]"
                                        case '/motion-graphics':
                                            return "border-[#195A47]"
                                        case '/illustration-design':
                                            return "border-[#A4637A]"
                                        case '/marketing-collateral':
                                            return "border-[#223C5A]"
                                        case '/mobile-application':
                                            return "border-[#7AAF60]"
                                        case '/seo-services':
                                            return "border-[#577981]"
                                        case '/contact-us':
                                            return "border-[#005368]"
                                        case '/pricing-and-packages':
                                            return "border-[#8A6EA5]"
                                        case '/website-design-develop-landing':
                                            return "border-[#00FFEF] pl-4 pr-4"
                                        default:
                                            return " border-[#9E7DE9]"
                                    }
                                })()}`}
                                hover={`${(() => {
                                    switch (router) {
                                        case '/logo-design':
                                            return "hover:bg-[#7598F2]"
                                        case '/creative-copywriting':
                                            return "hover:bg-[#768DF1]"
                                        case '/digital-marketing':
                                            return "hover:bg-[#8A6EA5]"
                                        case '/ecommerce':
                                            return "hover:bg-[#005368]"
                                        case '/website-development':
                                            return "hover:bg-[#283C3C]"
                                        case '/motion-graphics':
                                            return "hover:bg-[#195A47]"
                                        case '/illustration-design':
                                            return "hover:bg-[#A4637A]"
                                        case '/marketing-collateral':
                                            return "hover:bg-[#223C5A]"
                                        case '/mobile-application':
                                            return "hover:bg-[#7AAF60]"
                                        case '/seo-services':
                                            return "hover:bg-[#577981]"
                                        case '/contact-us':
                                            return "hover:bg-[#005368]"
                                        case '/pricing-and-packages':
                                            return "hover:bg-[#8A6EA5]"
                                        case '/website-design-develop-landing':
                                            return "hover:bg-[#00FFEF]"
                                        default:
                                            return "hover:bg-[#9E7DE9]"
                                    }
                                })()}`}
                                link="tel:123654789" rounded="rounded-[100px]" />
                        </div>
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