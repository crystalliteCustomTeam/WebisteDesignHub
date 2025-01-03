"use client"
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
            link: "/pricing"
        },
        {
            text: "Contact",
            link: "/contact-us"
        },
        {
            text: "Privacy Policy",
            link: "/privacy-policy"
        },
        {
            text: "Terms & Conditions",
            link: "/terms-and-conditions"
        },
    ];
    const servicesLinks = [
        {
            text: "Logo Design",
            link: "/logo-design-company"
        },
        {
            text: "Creative Copywriting",
            link: "/creative-copywriting-company"
        },

        {
            text: "Digital Marketing",
            link: "/digital-marketing-company"
        },

        {
            text: "Ecommerce Web Solutions",
            link: "/ecommerce-solutions"
        },

        {
            text: "Website Development",
            link: "/website-development-company"
        },
        {
            text: "Motion Graphics",
            link: "/motion-graphic-design-company"
        },
        {
            text: "Illustration Design",
            link: "/illustration-design-company"
        },
        {
            text: "Marketing Collateral",
            link: "/marketing-collateral-company"
        },
        {
            text: "App Design",
            link: "/mobile-app-design-company"
        },
        {
            text: "SEO Services",
            link: "/seo-company"
        },
    ];
    const contactLinks = [
        {
            text: "1206-1209 , Ceasers Tower , Main Shar e Faisal Karachi - Pakistan",
            link: "/contact-us",
            icon: mapmarker
        },
        {
            text: "0346-8280111",
            link: "tel:0346-8280111",
            icon: telephone
        },
        {
            text: "info@WebDevelopersHub.co",
            link: "mailto:info@WebDevelopersHub.co",
            icon: envelope
        },
    ];
    const socialLinks = [
        {
            icon: facebook,
            link: "https://www.facebook.com/webdesignhubofficial/"
        },
        {
            icon: twitter,
            link: "https://twitter.com/webdesignhub_"
        },
        {
            icon: instagram,
            link: "https://www.instagram.com/webdesignhubofficial"
        },
        {
            icon: linkedin,
            link: "/contact-us"
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
                            <p className="text-sm xl:text-base font-normal text-white">Web Developers Hub excels in making custom logos, responsive website design and development. Our expert UI/UX designers contribute to your brand’s success with visually stunning and functional designs.</p>
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
                    <div className="flex gap-x-5 py-5 flex-wrap sm:flex-nowrap gap-y-5 sm:gap-y-0 items-center border-b-[1px] border-[#707070]">
                        <div className="basis-full sm:basis-1/2">
                            <p className="text-sm font-light text-white leading-6 text-center sm:text-left">
                                Copyright © 2024 <Link href="/">webdevelopershub.co</Link> - JQTEL
                            </p>
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
                    <div className="py-5">
                        <p className="text-[12px] font-light text-white leading-[22px]">
                            <span className="font-semibold">Disclaimer</span>: Logo, name, and graphic representation of Web Developers Hub and its products and services are trademarks of Web Design Hub. All other company names, trademarks, and logos mentioned on this website are the property of their respective owners and do not represent or imply endorsement, sponsorship, or recommendation by Web Developers Hub or JQTEL. Furthermore, these do not constitute or imply endorsement, sponsorship, or recommendation thereof by Web Developers Hub or JQTEL, and do not constitute or imply endorsement, sponsorship, or recommendation of Web Developers Hub or JQTEL by the respective trademark owner.
                        </p>
                    </div>
                </div>
            </div>
            <Sidebuttons />
        </footer>
    );
}

export default Footer;