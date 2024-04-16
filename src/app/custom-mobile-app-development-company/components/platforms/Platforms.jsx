import Image from "next/image"
import hybrid from "media/landing-page-5/mobile-app-development/platforms/d-hybrid.webp"
import native from "media/landing-page-5/mobile-app-development/platforms/d-native.webp"
import CTA from "../cta/cta";
const Platforms = () => {
    return (
        <div className="bg-[#000000] xl:py-[80px] lg:py-[60px] py-[40px]">
            <div className="container">
                <div className="text-white text-center font-sans">
                    <span className="lg:text-xl md:text-lg text-base leading-tight font-semibold tracking-widest">Platforms</span>
                    <h2 className="xl:text-[45px] lg:text-[40px] md:text-[30px] text-[22px] leading-normal font-bold my-1"><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#eb335b] to-[#4a78ef]">Best App Making Company</span> <br className="xl:block hidden" /> Technologies We Used</h2>
                    <p className="md:text-base text-sm font-normal">Bitswits turns inventive ideas into groundbreaking mobile apps! Our award-winning app developers know hybrid and native technologies, so your project is in <br className="xl:block hidden" />good hands. With us, your project will be a success from start to finish!</p>
                </div>
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 items-center text-white font-sans mt-10">
                    {
                        [
                            [`Hybrid <br /> <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#eb335b] to-[#4a78ef]">App Development</span>`,
                                "BitsWits take pride in developing hybrid apps that are visually stunning and perform exceptionally well. Our team of skilled hybrid app developers leverages the latest technologies to create fast, secure, and user-friendly apps, ensuring your business stays ahead of the curve with:"
                                , hybrid, [
                                    "Cross-platform Compatibility.",
                                    "Accelerated Development Cycle",
                                    "Customizable UI/UX Design.",
                                    "Cost-Effective Single Codebase Solution.",
                                ]],
                            [`Native <br /> <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#eb335b] to-[#4a78ef]">App Development</span>`,
                                "BitsWits specializes in creating native applications that provide users with the best experience. With our native app developers, we deeply understand the most popular operating systems and programming languages to ensure that any app developed with us will have professional performance. Our key focus includes:",
                                native, [
                                    "High Performance Platform-Optimization.",
                                    "Access To Device Features & Integration.",
                                    "Customized UI/UX Application Design.",
                                    "Robust & Adaptable Mobile Application.",
                                ]]
                        ].map(([title, desc, icons, list], i) => (
                            <div key={i} className="border-2 border-white md:px-10 px-5 md:py-10 py-5">
                                <h3 className="text-[30px] leading-tight font-bold" dangerouslySetInnerHTML={{ __html: title }} />
                                <Image src={icons} alt="d-hybrid" className="block me-auto brightness-0 invert mt-6" />
                                <p className="md:text-base text-sm font-normal pt-6 xl:min-h-[160px] lg:min-h-[192px]">{desc}</p>
                                <ol className="list-decimal md:text-sm text-xs pl-3 py-4">
                                    {list && list?.map((e, i) => (
                                        <li key={i}>{e}</li>
                                    ))}
                                </ol>
                                <CTA
                                    text="Talk To Our Experts"
                                    bg="bg-transparent"
                                    border="border-none"
                                    color="text-transparent bg-clip-text bg-gradient-to-r from-[#eb335b] to-[#4a78ef] text-start"
                                    padding="p-0"
                                    textSize="md:text-base text-sm"
                                    rounded="rounded-none"
                                    width="w-max"
                                    margin="m-0"
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Platforms;