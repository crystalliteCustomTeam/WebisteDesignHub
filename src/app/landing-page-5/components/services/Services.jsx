"use client"
// Import Components
import { Tab, TabPanel, Tabs, TabsBody, TabsHeader } from "@material-tailwind/react";
import { useState } from "react";
import Image from "next/image";
import service1 from "media/landing-page-5/mobile-app-development/services/artifical.png";
import service2 from "media/landing-page-5/mobile-app-development/services/sideimg.png";
import service3 from "media/landing-page-5/mobile-app-development/services/web30.png";
import service4 from "media/landing-page-5/mobile-app-development/services/game.png";
import service5 from "media/landing-page-5/mobile-app-development/services/webflow.png";
import service6 from "media/landing-page-5/mobile-app-development/services/blockchain.png";
import arrowUp from "media/landing-page-5/mobile-app-development/services/before.png";
import arrowDown from "media/landing-page-5/mobile-app-development/services/after.png";
const Services = () => {
    const [questions, setQuestions] = useState("iOS-development");
    const portfolioData = [
        {
            value: "iOS-development",
            label: "iOS App Development",
            images: [service1],
            desc: "As a leading iOS app development company, we're experts at turning ideas into App Store sensations. Our iOS app solutions are tailored to give users an experience they'll adore. Trust our skilled iOS app developers to build an app that's both delightful and efficient."
        },
        {
            value: "android-development",
            label: "Android App Development",
            images: [service2],
            desc: "Flutter is more than a buzzword for us; it's our passion. As a pioneering Flutter app development company, we employ the latest tools and techniques to offer innovative app solutions. Rely on our Flutter app developers to craft apps that resonate with your audience."
        },
        {
            value: "flutter-development",
            label: "Flutter App Development",
            images: [service3],
            desc: "Flutter is more than a buzzword for us; it's our passion. As a pioneering Flutter app development company, we employ the latest tools and techniques to offer innovative app solutions. Rely on our Flutter app developers to craft apps that resonate with your audience."
        },
        {
            value: "app-development",
            label: "Web App Development",
            images: [service4],
            desc: "Make your mark on the web with Bitswits, the web app development company that understands your vision. Our web app solutions are designed for impact, ensuring you make the right impression. Our web app developers are here to turn your dream into a digital reality."
        },
        {
            value: "custom",
            label: "Custom App Development",
            images: [service5],
            desc: "Every brand is distinct, and so should be its app. As your chosen custom app development company, we offer tailor-made app solutions that mirror your brand's essence. With a team of adept custom app developers, we promise a product that stands out."
        },
        {
            value: "native",
            label: "React Native App Development",
            images: [service6],
            desc: "Embrace the best of both iOS and Android with React Native. As a seasoned React Native app development company, our app solutions ensure consistent performance across devices. Our skilled React Native app developers craft apps that spell perfection."
        }
    ]
    return (
        <section id="services">
            <div className="bg-[#000000] xl:py-[80px] lg:py-[60px] py-[40px]">
                <div className="container">
                    <div className="font-sans text-center text-white">
                        <span className="lg:text-xl md:text-lg text-base leading-tight font-semibold tracking-widest">Services</span>
                        <h2 className="xl:text-[45px] lg:text-[40px] md:text-[30px] text-[22px] leading-normal font-bold my-1">Transforming Visions into Reality with Exceptional <br className="xl:block hidden" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#eb335b] to-[#4a78ef]">Mobile App Solutions</span></h2>
                        <p className="md:text-base text-sm leading-normal font-normal">At BitsWits, our expert team specializes in professional app development. Whether you want to build an app from scratch or make an <br className="xl:block hidden" /> app that stands out, we're here to turn your ideas into reality.</p>
                    </div>
                    <Tabs value={questions} className="grid lg:grid-cols-2 grid-cols-1 gap-x-5 items-center pt-[50px]">
                        <TabsHeader indicatorProps={{ className: "hidden" }} className={`overflow-hidden bg-transparent p-0 flex-col __list`}>
                            {
                                portfolioData.map(({ value, label, desc }) => {
                                    return (
                                        <>
                                            <Tab value={value} key={value} onClick={() => setQuestions(value)}
                                                className={`${questions === value ? "text-white border-b-2 border-[#4d4c4c] bg-transparent outline-0" : " border-[#707070]"} justify-between border-b-2 font-sans font-medium text-base text-white w-full py-[0.5rem] px-[0.8rem] lg:px-0 mb-10 hover:bg-transparent hover:border-[#4d4c4c] hover:text-white`}>
                                                <div className="flex justify-between items-center w-full">
                                                    <span>{label}</span>
                                                    {questions === value ? <Image src={arrowDown} alt="icons" className="block ms-auto" /> : <Image src={arrowUp} alt="icons" className="block ms-auto" />}
                                                </div>
                                            </Tab>
                                            <TabPanel value={value} key={value} className="p-0">
                                                <div className="mb-5">
                                                    <p className="text-sm text-[#b2b2b2]">{desc}</p>
                                                </div>
                                            </TabPanel>
                                        </>
                                    );
                                })
                            }
                        </TabsHeader>
                        <TabsBody>
                            {
                                portfolioData.map(({ value, images }) => {
                                    return (
                                        <TabPanel value={value} key={value} className="p-0">
                                            <div className="mt-10">
                                                {images?.map((e, i) => (
                                                    <div key={i} className="group relative hover:cursor-pointer">
                                                        <Image src={e} alt="portfolios" className="block mx-auto" />
                                                    </div>
                                                ))}
                                            </div>
                                        </TabPanel>
                                    );
                                })
                            }
                        </TabsBody>
                    </Tabs>
                </div>
            </div>
        </section>
    )
}
export default Services;