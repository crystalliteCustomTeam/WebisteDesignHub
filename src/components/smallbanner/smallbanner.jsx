// Import Components
import Image from "next/image";
import Button from "@/components/button/Button";

const SmallBanner = ({ content }) => {
    const { title, desc, img, page } = content;
    return (
        <section>
            <div className={`${page === "home" ? "bg-[#0F2847]" : ""} ${page === "digitalMarketing" ? "bg-[#829E05]" : ""} ${page === "logoDesign" ? "bg-[#ABF0FC]" : ""} ${page === "creativeCopywriting" ? "bg-[#B8C4FA]" : ""}`}>
                <div className="container  pt-10 lg:py-10 xl:py-20 relative">
                    <div className="flex">
                        <div className="basis-full lg:basis-7/12">
                            <h2 className={`text-2xl sm:text-4xl xl:text-5xl font-megat ${page === "creativeCopywriting" || page === "logoDesign" ? "text-black" : "text-white"} font-normal leading-none mb-3`} dangerouslySetInnerHTML={{ __html: title.replace(/\n/g, "<br />") }} />
                            <p className={`text-base ${page === "creativeCopywriting" || page === "logoDesign" ? "text-black" : "text-white"} font-normal mb-5`} dangerouslySetInnerHTML={{ __html: desc.replace(/\n/g, "<br className='hidden md:block lg:hidden xl:block' />") }} />
                            <div className="flex items-center gap-3 mb-5 lg:mb-0">
                                <Button text="Start Live Chat"
                                    icon={true}
                                    color="bg-[#216385] text-white"
                                    hover="hover:bg-[#000000]"
                                    link="#" />
                                <Button text="Book Demo"
                                    color={`bg-transparent ${page === "logoDesign" || page === "creativeCopywriting" ? "text-black" : "text-white"}`}
                                    border="border-2 border-[#216385]"
                                    hover="hover:bg-[#216385] hover:text-white"
                                    link="tel:123654789" />
                            </div>
                        </div>
                    </div>
                    <div className="lg:absolute lg:bottom-0 lg:right-0 m-auto w-max">
                        <Image src={img} alt="img" className="max-w-xs lg:max-w-md  xl:max-w-full" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SmallBanner;