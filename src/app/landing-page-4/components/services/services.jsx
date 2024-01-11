import style from "./services.module.css"
const services = () => {
    let card = [
        {
            backgroundImage: 'bg-[url("../../public/landing-page-4/wordpress.png")]',
            title: 'WordPress Development',
            desc: 'Experience the Power of Expert WordPress Development, Crafting Dynamic, User-Friendly, and Versatile Websites Tailored to Your Unique Vision.',
            classes: "col-span-2",
        },
        {
            backgroundImage: 'bg-[url("../../public/landing-page-4/shopitfy.png")]',
            title: 'Shopify Development',
            desc: 'Elevate your online store with Shopify for seamless, scalable, and stunning retail experiences.',
            classes: "col-span-2",
        },
        {
            backgroundImage: 'bg-[url("../../public/landing-page-4/custom.png")]',
            title: 'Custom website',
            desc: 'Tailored Excellence: Elevate Your Online Presence with Our Custom Website Solutions – Uniquely Crafted for Your Distinctive Vision',
            classes: "col-span-2",
        },
        {
            backgroundImage: 'bg-[url("../../public/landing-page-4/ecommerce.png")]',
            title: 'Ecommerce Development',
            desc: 'Empower Your Business: Seamless Ecommerce Development for a Digital Shopping Experience Beyond Expectations.',
            classes: "lg:col-span-3 col-span-2 lg:!px-14 lg:text-center",
        },
        {
            backgroundImage: 'bg-[url("../../public/landing-page-4/magento.png")]',
            title: 'Magento Development',
            desc: 'Unleash E-commerce Excellence: Harnessing the Strength of Magento for Robust, Flexible, and High-Performance Online Stores.',
            classes: "lg:col-span-3 col-span-2 lg:!px-14 lg:text-center",
        },
    ]
    return (
        <div className={`xl:py-16 lg:py-14 py-10 ${style.bg}`}>
            <div className="container">
                <div className="text-black text-center font-sans">
                    <span className="block lg:text-xl text-lg leading-none font-medium lg:mb-3 mb-2">Services</span>
                    <h2 className="xl:text-[50px] lg:text-[40px] md:text-[30px] text-[20px] leading-tight font-bold">Our Web Design & Development <br className="xl:block hidden" /> Services and Solutions</h2>
                </div>
                <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-3 md:mt-14 mt-10">
                    {
                        card && card.map((e, i) => (
                            <>
                                <div key={i} className={`${e.classes} ${e.backgroundImage} relative border-2 bg-cover bg-no-repeat bg-center border-white before:bg-black before:block before:absolute before:opacity-90 before:h-full before:w-full before:top-0 before:left-0 before:bottom-0 before:rounded-[20px] px-4 md:h-[400px] h-[300px] rounded-[20px] flex flex-col justify-end pb-5 text-white`}>
                                    <div className="relative z-30">
                                        <h4 className="xl:text-[25px] lg:text-[20px] font-bold mb-2">{e.title}</h4>
                                        <p className="text-[14px] xl:min-h-[72px] md:min-h-[120px] leading-[24px]">{e.desc}</p>
                                    </div>
                                </div>
                            </>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default services;
