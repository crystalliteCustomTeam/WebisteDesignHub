// Next
import Image from "next/image";
// Media
import Map from "media/landing-page-4/map.png"
import Location from "media/landing-page-4/location.png"
import Review1 from "media/landing-page-4/review1.png"
import Review2 from "media/landing-page-4/review2.png"
import Review3 from "media/landing-page-4/review3.png"
import Review4 from "media/landing-page-4/review4.png"
import Review5 from "media/landing-page-4/review5.png"
import Verified from "media/landing-page-4/verified.png"
// Components
import CTA from "../cta/cta";
import style from "../hero/hero.module.css"
const Testimonial = () => {
    return (
        <div className="lg:py-16 md:py-14 py-10">
            <div className="container">
                <div className="flex justify-center">
                    <div className="md:basis-[60%] basis-full">
                        <div className="text-center text-black font-sans mb-5">
                            <h2 className="xl:text-[50px] lg:text-[40px] md:text-[30px] text-[25px] leading-tight font-bold">Our Clients Testimonials</h2>
                            <p className="text-normal md:text-base text-sm">We Craft Websites Beyond Boundaries - From Informative Portfolios to Powerful Business Sites, <br className="xl:block hidden" /> Using the Dynamic Trio of HTML, CSS, and JavaScript on a Visual Canvas.</p>
                        </div>
                    </div>
                </div>
                <div className="realtive md:block hidden md:h-[450px] lg:h-[650px] xl:h-[800px]">
                    <Image src={Map} alt="Icons" className="block mx-auto relative" />
                    <div className="relative xl:bottom-[650px] lg:bottom-[550px] md:bottom-[400px] xl:left-[150px] lg:left-[150px] md:left-[150px] w-[10%] flex items-center justify-center group">
                        <Image src={Location} alt="Icons" width={30} height={30} />
                        <div className="absolute rounded-xl shadow-2xl bottom-[10px] xl:left-[3px] lg:-left-2 -left-6 flex-col items-center hidden mb-5 bg-white text-black group-hover:flex">
                            <div className="relative z-10 px-6 py-3 w-[500px] text-sm leading-none whitespace-no-wrap">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <Image src={Review1} alt="Icons" width={60} height={60} className="rounded-full shadow-[5px_5px_6px_rgba(0,0,0,0.18)] mb-3" />
                                    </div>
                                    <div>
                                        <Image src={Verified} alt="Icons" />
                                    </div>
                                </div>
                                <h4 className="text-xl font-bold my-1">James Paul</h4>
                                <p className="text-[12px] leading-[18px] text-justify">Our experience with their team was satisfactory because initially, we had some communication gaps, and I got my website after a couple of days of their committed time. However, the website works seamlessly and is designed per my requirements.</p>
                                {/* <span className="text-xs">Digital Marketing Consultant of Asia School of Business</span> */}
                            </div>
                            <div className="relative right-[190px] -bottom-[10px] w-6 h-6 -mt-2 -rotate-45 bg-white"></div>
                        </div>
                    </div>
                    <div className="relative xl:bottom-[550px] lg:bottom-[450px] md:bottom-[350px] xl:left-[350px] lg:left-[350px] md:left-[350px] w-[10%] flex items-center justify-center group">
                        <Image src={Location} alt="Icons" width={30} height={30} />
                        <div className="absolute rounded-xl shadow-2xl bottom-[10px] xl:left-[3px] lg:-left-2 -left-6 flex-col items-center hidden mb-5 bg-white text-black group-hover:flex">
                            <div className="relative z-10  px-6 py-3 w-[500px] text-sm leading-none whitespace-no-wrap">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <Image src={Review2} alt="Icons" width={60} height={60} className="rounded-full shadow-[5px_5px_6px_rgba(0,0,0,0.18)] mb-3" />
                                    </div>
                                    <div>
                                        <Image src={Verified} alt="Icons" />
                                    </div>
                                </div>
                                <h4 className="text-xl font-bold my-1">Bella Thompson</h4>
                                <p className="text-[12px] leading-[18px] text-justify">I collaborated with Web Design Hub, and I’m satisfied with my decision. They designed a highly responsive and visually stunning website for my business, and their SEO services have made a world of difference. My website now ranks prominently on search engines, and I've witnessed a significant increase in online leads and sales.</p>
                                {/* <span className="text-xs">Digital Marketing Consultant of Asia School of Business</span> */}
                            </div>
                            <div className="relative right-[190px] -bottom-[10px] w-6 h-6 -mt-2 -rotate-45 bg-white"></div>
                        </div>
                    </div>
                    <div className="relative xl:bottom-[400px] lg:bottom-[300px] md:bottom-[220px] xl:left-[450px] lg:left-[450px] md:left-[450px] w-[10%] flex items-center justify-center group">
                        <Image src={Location} alt="Icons" width={30} height={30} />
                        <div className="absolute rounded-xl shadow-2xl bottom-[10px] xl:left-[3px] z-20 lg:-left-2 -left-6 flex-col items-center hidden mb-5 bg-white text-black group-hover:flex">
                            <div className="relative z-10  px-6 py-3 w-[500px] text-sm leading-none whitespace-no-wrap">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <Image src={Review3} alt="Icons" width={60} height={60} className="rounded-full shadow-[5px_5px_6px_rgba(0,0,0,0.18)] mb-3" />
                                    </div>
                                    <div>
                                        <Image src={Verified} alt="Icons" />
                                    </div>
                                </div>
                                <h4 className="text-xl font-bold my-1">Will Smith</h4>
                                <p className="text-[12px] leading-[18px] text-justify">I was at my wit's end with the high maintenance costs from my previous provider. Then I switched to Web Design Hub, and it got rid of every issue of maintenance & updates. Their team took care of my website beautifully and managed to do it at a fraction of the cost I was paying before.</p>
                                {/* <span className="text-xs">Digital Marketing Consultant of Asia School of Business</span> */}
                            </div>
                            <div className="relative right-[190px] -bottom-[10px] w-6 h-6 -mt-2 -rotate-45 bg-white"></div>
                        </div>
                    </div>
                    <div className="relative xl:bottom-[550px] lg:bottom-[450px] md:bottom-[320px] xl:left-[600px] lg:left-[600px] md:left-[320px] w-[10%] flex items-center justify-center group">
                        <Image src={Location} alt="Icons" width={30} height={30} />
                        <div className="absolute rounded-xl shadow-2xl bottom-[10px] xl:left-[3px] lg:-left-2 -left-6 flex-col items-center hidden mb-5 bg-white text-black group-hover:flex">
                            <div className="relative z-10  px-6 py-3 w-[500px] text-sm leading-none whitespace-no-wrap">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <Image src={Review4} alt="Icons" width={60} height={60} className="rounded-full shadow-[5px_5px_6px_rgba(0,0,0,0.18)] mb-3" />
                                    </div>
                                    <div>
                                        <Image src={Verified} alt="Icons" />
                                    </div>
                                </div>
                                <h4 className="text-xl font-bold my-1">Sarah Anderson</h4>
                                <p className="text-[12px] leading-[18px] text-justify">For years, Web Design Hub has been our dependable website development partner, and they never cease to wow us. It's amazing how well they can translate complicated concepts into web pages that are easy to use. The team's commitment to comprehending our brand and goals has produced websites that are an ideal representation of us. Their superb post-launch assistance makes them the ideal long-term partner. I am quite pleased with their services.</p>
                                {/* <span className="text-xs">Digital Marketing Consultant of Asia School of Business</span> */}
                            </div>
                            <div className="relative right-[190px] -bottom-[10px] w-6 h-6 -mt-2 -rotate-45 bg-white"></div>
                        </div>
                    </div>
                    <div className="relative xl:bottom-[400px] lg:bottom-[330px] md:bottom-[300px] xl:left-[740px] lg:left-[600px] md:left-[200px] w-[10%] flex items-center justify-center group">
                        <Image src={Location} alt="Icons" width={30} height={30} />
                        <div className="absolute rounded-xl shadow-2xl bottom-[10px] xl:left-[3px] lg:-left-2 -left-6 flex-col items-center hidden mb-5 bg-white text-black group-hover:flex">
                            <div className="relative z-10  px-6 py-3 w-[500px] text-sm leading-none whitespace-no-wrap">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <Image src={Review5} alt="Icons" width={60} height={60} className="rounded-full shadow-[5px_5px_6px_rgba(0,0,0,0.18)]" />
                                    </div>
                                    <div>
                                        <Image src={Verified} alt="Icons" />
                                    </div>
                                </div>
                                <h4 className="text-xl font-bold my-1">John Mitchell</h4>
                                <p className="text-[12px] leading-[18px] text-justify">The experience of working with Web Design Hub has been wonderful. They have surpassed our expectations at every turn, starting with the initial consultation and ending with the launch. Their team's dedication to detail, originality, and technological expertise were essential to realizing our vision. Due to their dedication to quality, our website not only looks amazing but also runs without a hitch. Anyone looking for top-notch web development services should get in contact with them immediately.</p>
                                {/* <span className="text-xs">Digital Marketing Consultant of Asia School of Business</span> */}
                            </div>
                            <div className="relative right-[190px] -bottom-[10px] w-6 h-6 -mt-2 -rotate-45 bg-white"></div>
                        </div>
                    </div>
                </div>
                <CTA
                    text="Begin Your Sucesss Story : Connect Now"
                    bg={style.ctaBG}
                    padding="lg:px-12 px-6"
                    rounded="rounded-lg"
                    margin="lg:mt-0 mt-5 mx-auto"
                    textSize="md:text-base text-sm"
                />
            </div>
        </div>
    )
}

export default Testimonial;
