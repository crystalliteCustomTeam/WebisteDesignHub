import CTA from "../cta/cta";

const Success = () => {
    return (
        <div className="xl:py-[80px] lg:py-[60px] py-[40px]">
            <div className="container">
                <div className="text-center font-sans">
                    <h2 className="xl:text-[45px] lg:text-[40px] md:text-[30px] text-[22px] leading-normal font-bold my-1"><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#eb335b] to-[#4a78ef]">Ready For Success?</span> <br className="lg:block hidden" /> Brace Yourself for What Happens Next</h2>
                    <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-5">
                        {
                            [
                                [`Talk To Our <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#eb335b] to-[#4a78ef]">Experts</span>`, "Contact us without obligation by email or phone and secure your free consultation.", "Get Free Consultation"],
                                [`Get A <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#eb335b] to-[#4a78ef]">Quote</span>`, "Get an exact cost breakdown structure <br/> of your app", "Chat Now"],
                                [`Build An <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#eb335b] to-[#4a78ef]">MVP</span>`, "We develop MVPs that are ready <br/> to tap the market", "Call Now"],
                            ].map(([title, desc, ctaText], i) => (
                                <div key={i} className="md:mt-10 mt-6 lg:w-[90%] w-full mx-auto">
                                    <h2 className="xl:text-[70px] lg:text-[60px] md:text-[50px] text-[40px] leading-tight font-bold">0{++i}</h2>
                                    <h4 className="md:text-[30px] text-[22px] leading-tight font-bold my-3" dangerouslySetInnerHTML={{ __html: title }} />
                                    <p className="md:text-base text-sm leading-normal py-2 lg:min-h-0 md:min-h-[90px]" dangerouslySetInnerHTML={{ __html: desc }} />
                                    <CTA
                                        text={ctaText}
                                        bg="bg-transparent"
                                        border="border-2 border-black"
                                        color="text-black"
                                        padding="lg:px-16 px-4"
                                        textSize="md:text-base text-sm"
                                        rounded="rounded-none"
                                        width="w-[85%]"
                                        margin="mx-auto mt-3"
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Success;