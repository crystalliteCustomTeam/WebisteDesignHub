// Import Components
import Image from "next/image";
// Import Images
import one from "media/digital-marketing/steps/one.png";
import two from "media/digital-marketing/steps/two.png";
import three from "media/digital-marketing/steps/three.png";
import four from "media/digital-marketing/steps/four.png";

const Steps = () => {
    return (
        <section>
            <div className="bg-[#EBEBEB] py-10 lg:py-20">
                <div className="container">
                    <div className="text-center mb-5 lg:mb-10">
                        <span className="text-base font-normal text-[#00B4FF]">Strategy Builder</span>
                        <h2 className="font-megat font-normal text-3xl sm:text-4xl lg:text-5xl text-black">
                            Driven by Passion, Innovation and Focus
                        </h2>
                    </div>
                    <div className="flex lg:gap-2 xl:gap-4 flex-wrap lg:flex-nowrap justify-between gap-y-4">
                        <div className="basis-full md:basis-[49%] lg:basis-1/4 bg-white shadow-md p-4 lg:p-2 xl:p-4 rounded-xl">
                            <div className="text-center">
                                <p className="text-black text-base font-light">We conduct thorough research in understanding the requirements of each client and suggest ways how digital marketing can help them.</p>
                                <span className="block h-[1px] bg-[#707070] w-[80%] m-auto mt-3 mb-3"></span>
                                <h3 className="font-semibold text-lg xl:text-lg text-black mb-3">Research</h3>
                                <Image src={one} alt="one" className="inline-block" />
                            </div>
                        </div>
                        <div className="basis-full md:basis-[49%] lg:basis-1/4 bg-white shadow-md p-4 lg:p-2 xl:p-4 rounded-xl">
                            <div className="text-center">
                                <Image src={two} alt="two" className="inline-block" />
                                <h3 className="font-semibold text-lg xl:text-lg text-black mt-3">Strategy Creation</h3>
                                <span className="block h-[1px] bg-[#707070] w-[80%] m-auto mt-3 mb-3"></span>
                                <p className="text-black text-base font-light">We then create tailored strategies in the form of email marketing, social media marketing and PPC AdWords in alignment with the business needs.</p>
                            </div>
                        </div>
                        <div className="basis-full md:basis-[49%] lg:basis-1/4 bg-white shadow-md p-4 lg:p-2 xl:p-4 rounded-xl">
                            <div className="text-center">
                                <p className="text-black text-base font-light">We choose the best strategy which is result-driven and impactful. We keep the processes transparent and notify the client of their outcome.</p>
                                <span className="block h-[1px] bg-[#707070] w-[80%] m-auto mt-3 mb-3"></span>
                                <h3 className="font-semibold text-lg xl:text-lg text-black mb-3">Strategy Implementation</h3>
                                <Image src={three} alt="three" className="inline-block" />
                            </div>
                        </div>
                        <div className="basis-full md:basis-[49%] lg:basis-1/4 bg-white shadow-md p-4 lg:p-2 xl:p-4 rounded-xl">
                            <div className="text-center">
                                <Image src={four} alt="four" className="inline-block" />
                                <h3 className="font-semibold text-lg xl:text-lg text-black mt-3">Monitoring</h3>
                                <span className="block h-[1px] bg-[#707070] w-[80%] m-auto mt-3 mb-3"></span>
                                <p className="text-black text-base font-light">Once the strategy is implemented we monitor the effectiveness of the strategy if it`s bearing any fruit. If required we revise the strategy.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Steps;