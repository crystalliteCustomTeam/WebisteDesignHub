// Imports Components
import Image from "next/image";
import Link from "next/link";
// Import Images
import mapmarker from "media/mapmarker.svg";
import telephone from "media/telephone.svg";
import envelope from "media/envelope.svg";
import facebook from "media/social/facebook.svg";
import twitter from "media/social/twitter.svg";
import instagram from "media/social/instagram.svg";
import linkedin from "media/social/linkedin.svg";

const Footer = () => {
    const quickLinks = [
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
            text: "Reviews",
            link: "/"
        },

        {
            text: "Contact",
            link: "/"
        },
    ];
    const servicesLinks = [
        {
            text: "SEO Services",
            link: "/"
        },
        {
            text: "Website Services",
            link: "/"
        },

        {
            text: "Social Media Marketing",
            link: "/"
        },

        {
            text: "Content Writing",
            link: "/"
        },

        {
            text: "Pay per Click",
            link: "/"
        },
        {
            text: "Reputation Services",
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
                            <h4 className="text-3xl font-megat font-normal text-white leading-none mb-3">Logo</h4>
                            <p className="text-sm xl:text-base font-normal text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a suscipit odio. Etiam nunc nisl, fermentum quis sagittis non, posuere sit amet diam. Maecenas porttitor, felis vel iaculis volutpat, nibh dolor vulputate ex, nec consectetur dui felis id nisl.</p>
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
                                            <li key={i} className="flex items-center gap-2 mb-5 last:mb-0">
                                                <Image src={e.icon} alt={e.icon} />
                                                <Link href={e.link} className="text-sm xl:text-base text-white font-normal hover:opacity-50">
                                                    {e.text}
                                                </Link>
                                            </li>
                                        );
                                    })
                                }
                            </ul>
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
        </footer>
    );
}

export default Footer;