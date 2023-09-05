// Imports Components
import Image from "next/image";
import Link from "next/link";
import Sidebuttons from "../sidebuttons/sidebuttons";
import { usePathname } from "next/navigation";
// Import Images
import logo from "media/logo.svg";
import mapmarker from "media/mapmarker.svg";
import telephone from "media/telephone.svg";
import envelope from "media/envelope.svg";
import facebook from "media/social/facebook.svg";
import twitter from "media/social/twitter.svg";
import instagram from "media/social/instagram.svg";
import linkedin from "media/social/linkedin.svg";
import cards from "media/footer/cards.svg";
import certification from "media/footer/certification.svg";
import logo2 from "media/landing-pages/website-design-develop/logo.svg";

const Footer = () => {
    const path = usePathname();
    const quickLinks = [
        {
            text: "Home",
            link: "/"
        },
        {
            text: "About",
            link: "/about-us"
        },
        {
            text: "Blogs",
            link: "/contact-us"
        },
        {
            text: "Pricing/Packages",
            link: "/pricing-and-packages"
        },
        {
            text: "Contact",
            link: "/contact-us"
        },
        {
            text: "Privacy Policy",
            link: "/contact-us"
        },
        {
            text: "Terms & Conditions",
            link: "/contact-us"
        },
    ];
    const servicesLinks = [
        {
            text: "Logo Design",
            link: "/"
        },
        {
            text: "Creative Copywriting",
            link: "/"
        },

        {
            text: "Digital Marketing",
            link: "/"
        },

        {
            text: "Ecommerce Web Solutions",
            link: "/"
        },

        {
            text: "Website Development",
            link: "/"
        },
        {
            text: "Motion Graphics",
            link: "/"
        },
        {
            text: "Illustration Design",
            link: "/"
        },
        {
            text: "Marketing Collateral",
            link: "/"
        },
        {
            text: "App Design",
            link: "/"
        },
        {
            text: "SEO Services",
            link: "/"
        },
    ];
    const contactLinks = [
        {
            text: "Unit Level 13 A, Financial Park, Labuan, Jalan Merdeka, 87000, Malaysia",
            link: "/",
            icon: mapmarker
        },
        {
            text: "(123)-000-0000",
            link: "tel:(123)-000-0000",
            icon: telephone
        },
        {
            text: "info@gmail.com",
            link: "mailto:info@gmail.com",
            icon: envelope
        },
    ];
    const socialLinks = [
        {
            icon: facebook,
            link: "/"
        },
        {
            icon: twitter,
            link: "/"
        },
        {
            icon: instagram,
            link: "/"
        },
        {
            icon: linkedin,
            link: "/"
        },
    ]
    return (
        <footer>
            <div className="bg-[#0F2847] pt-20">
                <div className="container">
                    <div className="flex gap-x-5 pb-10 xl:pb-20 border-b-[1px] border-[#707070] flex-wrap lg:flex-nowrap justify-between gap-y-5 lg:gap-y-0">
                        <div className="basis-full sm:basis-[48%] lg:basis-[30%]">
                            <Link href="/" className="mb-5 block">
                                {path !== "/website-design-develop-landing" ? <Image src={logo} alt="logo" /> : <Image src={logo2} alt="logo2" />}
                            </Link>
                            <p className="text-sm xl:text-base font-normal text-white">We are a team of creative thinkers and problem solvers dedicated to expanding the limits of what is possible by helping brands achieve their goals.</p>
                            <Image src={certification} alt="certification" className="mt-3" />
                        </div>
                        <div className="basis-full sm:basis-[48%] lg:basis-[20%]">
                            <h4 className="text-3xl font-megat font-normal text-white leading-none mb-3">Quick Links</h4>
                            <ul>
                                {
                                    quickLinks.map((e, i) => {
                                        return (
                                            <li key={i}>
                                                <Link href={e.link} className="text-sm xl:text-base text-white font-normal hover:opacity-50 leading-8 xl:leading-8">
                                                    {e.text}
                                                </Link>
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                        </div>
                        <div className="basis-full sm:basis-[48%] lg:basis-1/4">
                            <h4 className="text-3xl font-megat font-normal text-white leading-none mb-3">Services</h4>
                            <ul>
                                {
                                    servicesLinks.map((e, i) => {
                                        return (
                                            <li key={i}>
                                                <Link href={e.link} className="text-sm xl:text-base text-white font-normal hover:opacity-50 leading-8 xl:leading-8">
                                                    {e.text}
                                                </Link>
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                        </div>
                        <div className="basis-full sm:basis-[48%] lg:basis-1/4">
                            <h4 className="text-3xl font-megat font-normal text-white leading-none mb-3">Contact</h4>
                            <ul>
                                {
                                    contactLinks.map((e, i) => {
                                        return (
                                            <li key={i} className="flex items-center gap-2 mb-3 last:mb-0">
                                                <Image src={e.icon} alt={e.icon} />
                                                <Link href={e.link} className="text-sm xl:text-base text-white font-normal hover:opacity-50">
                                                    {e.text}
                                                </Link>
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                            <Image src={cards} alt="cards" className="mt-3" />
                        </div>
                    </div>
                    <div className="flex gap-x-5 py-5 flex-wrap sm:flex-nowrap gap-y-5 sm:gap-y-0 items-center">
                        <div className="basis-full sm:basis-1/2">
                            <p className="text-sm xl:text-base font-light text-white leading-6 text-center sm:text-left">Copyright © 2023 Logo.</p>
                        </div>
                        <div className="basis-full sm:basis-1/2">
                            <ul className="flex items-center justify-center sm:justify-end gap-4">
                                {
                                    socialLinks.map((e, i) => {
                                        return (
                                            <li key={i} className="bg-[#375a85] w-7 h-7 flex items-center justify-center p-1 hover:opacity-50">
                                                <Link href={e.link}>
                                                    <Image src={e.icon} alt={e.icon} />
                                                </Link>
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Sidebuttons />
        </footer>
    );
}

export default Footer;