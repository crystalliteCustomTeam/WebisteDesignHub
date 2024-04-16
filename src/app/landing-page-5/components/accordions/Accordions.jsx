"use client"
import { useState } from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
const Accordions = () => {

    const [open, setOpen] = useState(null);

    const handleOpen = (index) => {
        setOpen(open === index ? null : index);
    };
    return (
        <section>
            <div className="xl:py-[80px] lg:py-[60px] py-[40px] bg-[#000000]">
                <div className="container">
                    <div className="font-sans text-center">
                        <h2 className="xl:text-[45px] lg:text-[40px] md:text-[30px] text-[25px] leading-tight font-bold my-3 text-transparent bg-clip-text bg-gradient-to-r from-[#eb335b] to-[#4a78ef]">Frequently Asked Questions</h2>
                        <div className="mt-16 lg:w-[90%] w-full mx-auto">
                            {
                                [
                                    ["What is mobile application development?", "Mobile application development creates software applications that run on mobile devices and other connected devices, such as wearables, automotive systems, cameras, and more. It requires skill sets in design, development, testing, deployment, and maintenance to create innovative user experiences across multiple platforms. With that being said, businesses hire mobile app developers to stay ahead of the competition and deliver market-leading products to their customers."],
                                    ["Does bitswits offers hybrid and native app development?", "BitsWits has a team of the best mobile app developers expert in providing customized development solutions, whether Hybrid or Native mobile application development is required. Our developers always come up with creative and innovative app ideas that are best in your interest."],
                                    ["Why choose bitswits as a mobile app development company?", "BitsWits is a top mobile app development company due to its decent clientele, commitment to excellence, and innovative mobile app development solutions. We enjoy the top spot in the application development industry with affordable packages and professional services."],
                                    ["Is there any customer support available?", "Yes, BitsWits offers 24/7 incredible customer support, even post-mobile apps development USA. We do not let our customers hang in the middle with any query that may bring trouble to them."],
                                    ["How to choose a mobile app development company?", "Checking client portfolios, communicating your requirements clearly, and considering the development cost will help you choose the best mobile app development agency. BitsWits practices open communication so that the solution to your query is answered adequately to provide you with the utmost satisfaction."],
                                    ["What industries does bitswits cater to?", "At BitsWits, we specialize in developing innovative and efficient mobile applications for various industries across the United States. We offer customized mobile solutions from e-commerce to healthcare and gaming to meet each client's specific requirements and business. We are a mobile application development company dedicated to creating apps that cater to each client's unique needs."]
                                ].map(([title, desc], i) => (
                                    <Accordion key={i} open={open === i} className="pb-8">
                                        <AccordionHeader onClick={() => handleOpen(i)} className="bg-[#515151] !text-white p-4 md:text-base sm:text-sm text-xs font-semibold border-4 border-white">
                                            <span className="basis-[100%] block">{title}</span>
                                            <div className={`${open === i ? "rotate-180" : "rotate-0"} basis-[0%]`}><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"></path></svg></div>
                                        </AccordionHeader>
                                        <AccordionBody className="text-start bg-[#515151] !text-white p-4 border-b-4 border-l-4 border-r-4 border-white">
                                            {desc}
                                        </AccordionBody>
                                    </Accordion>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Accordions;
