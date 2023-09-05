// Import Components
import Image from "next/image";
import Button from "@/components/button/Button";
// Import Images
import peoples from "media/about-us/services/peoples.png";

const Services = () => {
    return (
        <section>
            <div className="bg-[#EBEBEB] py-10 lg:pt-20 pb-28">
                <div className="container">
                    <div className="text-center mb-10">
                        <span className="text-base font-normal text-[#00B4FF]">Web Developers in the City: Leveraging</span>
                        <h2 className="font-megat font-normal text-3xl sm:text-4xl lg:text-5xl text-black mb-2">Resources Available on the Internet</h2>
                        <p className="text-base text-black font-normal">The professionals who make up Urban Online Designers' team of web experts include the best in the fields of web design, development, strategy, and marketing. We also provide digital marketing services like as content creation, email marketing, social media marketing, and search engine optimization. When it comes to creating a website, we do everything from the initial layout and graphics to the final optimization of the content and even the promotion and marketing of the site on social media.</p>
                    </div>
                    <Image src={peoples} alt="peoples" className="block m-auto" />
                    <div className="flex items-center gap-3 justify-center mt-10 relative z-10">
                        <Button text="Start Live Chat"
                            icon={true}
                            color="bg-[#7337BB] text-white"
                            hover="hover:bg-[#000000]"
                            link="#" />
                        <Button text="(123)-000-0000"
                            color="bg-transparent text-[#202020]"
                            border="border-2 border-[#7337BB]"
                            hover="hover:bg-[#7337BB] hover:text-white"
                            link="tel:123654789" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;