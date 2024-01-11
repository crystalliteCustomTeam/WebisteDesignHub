// Next
import Image from "next/image"
// Components
import CTA from "../cta/cta"
import style from "./hero.module.css"
import Form from "../form/form";
// Media
import Rating from "media/landing-page-4/rating.png"
import TrustPoilot from "media/landing-page-4/trustPoilot.png"
import Clutch from "media/landing-page-4/clutch.png"
import Goodfirms from "media/landing-page-4/goodfirms.png"
const Hero = () => {
    return (
        <section>
            <div className={`${style.bg} md:pt-36 pt-28 md:pb-24 pb-16`}>
                <div className="container">
                    <div className="lg:flex gap-x-5 justify-between">
                        <div className="lg:basis-[60%] basis-full lg:mb-0 mb-5">
                            <div className="text-white font-sans pb-8">
                                <h1 className="xl:text-[45px] lg:text-[40px] md:text-[30px] text-[25px] leading-tight font-bold mb-3">Top Web Design & <br className="xl:block hidden" /> Web Development Company</h1>
                                <span className="text-[#FFDC2E] xl:text-[25px] lg:text-[20px] md:text-[16px] text-sm leading-tight font-bold block pb-2">Award-Winning Web Design Agency In The USA,</span>
                                <p className="text-[25px] lg:text-[20px] md:text-[16px] text-sm xl:leading-[35px] lg:leading-[30px] font-normal">Revitalize Your Online Presence: Expert Website Designers <br className="xl:block hidden" /> Transform Your Digital Space, Turning Your Website Into A <br className="xl:block hidden" /> Powerful Asset For Business Growth.</p>
                            </div>
                            <CTA
                                text="Take The First Step - Sign Up Now!"
                                bg={style.ctaBG}
                                padding="px-8"
                                textSize="md:text-base text-sm"
                                rounded="rounded-lg"
                            />
                            <div className="">
                                <Image src={Rating} alt="Icons" />
                            </div>
                            <div className="md:grid hidden grid-cols-3 gap-x-3 xl:gap-x-0 items-end">
                                <Image src={TrustPoilot} alt="trustPoilot" className="block h-[100px] xl:h-auto object-contain" />
                                <Image src={Clutch} alt="clutch" className="block h-[100px] xl:h-auto" />
                                <Image src={Goodfirms} alt="goodfirms" className="block h-[100px] xl:h-auto object-contain" />
                            </div>
                        </div>
                        <div className="lg:basis-[35%] basis-full">
                            <div className={`${style.formBG} p-4 text-white text-center border rounded-xl font-sans`}>
                                <h2 className="lg:text-2xl text-xl font-bold">Hire #1 Website Design <br className="xl:block hidden" /> Agency in USA and Canada.</h2>
                                <Form />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero