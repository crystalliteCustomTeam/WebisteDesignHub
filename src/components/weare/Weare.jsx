// Imports Components
import Image from "next/image";
import Link from "next/link";
// Import Images
import one from "media/weare/one.svg";
import two from "media/weare/two.svg";
import three from "media/weare/three.svg";
import four from "media/weare/four.svg";
import five from "media/weare/five.svg";

const Weare = () => {
    return (
        <section>
            <div className="__gradientBg2 py-10 md:py-20 ">
                <div className="container">
                    <div className="flex">
                        <div className="basis-full">
                            <h2 className="text-2xl sm:text-4xl xl:text-5xl font-megat text-white text-center font-normal leading-none mb-3">
                                We are here to rock the stage with <br className="hidden lg:block" /> innovation and creativity of all sorts.
                            </h2>
                            <p className="text-base text-white text-center font-normal mb-10 lg:mb-20">We believe in utter professionalism, communication, innovation and client satisfaction. We stick to this code and serve you with the best of our <br className="hidden xl:block" /> abilities. We do not only cater successful business, we also work for small business logo design services.</p>
                            <div className="flex lg:divide-x lg:divide-[#1E73DB] mb-10 lg:mb-20 gap-5 flex-wrap lg:flex-nowrap justify-center">
                                <div className="basis-[46%] md:basis-[30%] lg:basis-1/5">
                                    <Image src={one} alt={one} className="block m-auto mb-3" />
                                    <h3 className="text-basis md:text-lg xl:text-xl font-light font-sans text-white text-center">Constant Client <br /> Coordination</h3>
                                </div>
                                <div className="basis-[46%] md:basis-[30%] lg:basis-1/5">
                                    <Image src={two} alt={two} className="block m-auto mb-3" />
                                    <h3 className="text-basis md:text-lg xl:text-xl font-light font-sans text-white text-center">Supreme Customer <br /> Satisfaction</h3>
                                </div>
                                <div className="basis-[46%] md:basis-[30%] lg:basis-1/5">
                                    <Image src={three} alt={three} className="block m-auto" />
                                    <h3 className="text-basis md:text-lg xl:text-xl font-light font-sans text-white text-center">100% Ownership <br /> Rights</h3>
                                </div>
                                <div className="basis-[46%] md:basis-[30%] lg:basis-1/5 border-l-5">
                                    <Image src={four} alt={four} className="block m-auto mb-3" />
                                    <h3 className="text-basis md:text-lg xl:text-xl font-light font-sans text-white text-center">Secure Money Back <br /> Guarantee</h3>
                                </div>
                                <div className="basis-[46%] md:basis-[30%] lg:basis-1/5">
                                    <Image src={five} alt={five} className="block m-auto mb-3" />
                                    <h3 className="text-basis md:text-lg xl:text-xl font-light font-sans text-white text-center">Industry Proven <br /> Professionals</h3>
                                </div>
                            </div>
                            <div className="flex border-2 rounded-2xl border-[#1E73DB] items-center justify-evenly py-5 flex-wrap md:flex-nowrap text-center md:text-left flex-col md:flex-row gap-5">
                                <div className="basis-full md:basis-[30%]">
                                    <h3 className="text-xl lg:text-2xl font-medium font-sans text-white">Call Us And Discuss <br /> Your Project With <br /> Our Experts Today.</h3>
                                </div>
                                <div className="basis-full md:basis-[30%]">
                                    <Link href="tel:(123)456-7890" className="text-xl lg:text-2xl font-medium font-sans text-white">Call Us (TOLL FREE) <br /> (123) 456-7890</Link>
                                </div>
                                <div className="basis-full md:basis-[30%]">
                                    <Link href="mailto:info@buisnessname.com" className="text-xl lg:text-2xl font-medium font-sans text-white">Discuss Your Ideas <br />Info@Buisnessname.Com</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Weare;