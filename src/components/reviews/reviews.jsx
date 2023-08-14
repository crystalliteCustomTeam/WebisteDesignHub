"use client"
// Import Components
import Slider from "react-slick";
import Image from "next/image";
// Import Css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Import Images
import quote from "media/reviews/quote.png";
import avatarOne from "media/reviews/avatarOne.png";
import avatarTwo from "media/reviews/avatarTwo.png";
import avatarThree from "media/reviews/avatarThree.png";

const Reviews = () => {
    const settings = {
        dots: true,
        arrows: true,
        slidesToShow: 1,
        infinite: false
    };
    return (
        <section>
            <div className="__reviewsCmp bg-[#F5F5F5] py-10 md:py-20 relative overflow-hidden">
                <div className="container">
                    <div className="flex gap-5 items-center flex-wrap md:flex-nowrap">
                        <div className="basis-full md:basis-2/4 overflow-hidden">
                            <Image src={quote} alt={quote} className="mb-10" />
                            <h2 className="text-4xl lg:text-5xl font-megat text-black font-normal mb-5">Our Client`s Review</h2>
                            <Slider {...settings}>
                                <div>
                                    <p className="text-sm lg:text-base font-normal text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a suscipit odio. Etiam nunc nisl, fermentum quis sagittis non, posuere sit amet diam. Maecenas porttitor, felis vel iaculis volutpat, nibh dolor vulputate ex, nec consectetur dui felis id nisl. Suspendisse porta iaculis malesuada. Curabitur nec orci lobortis, viverra nibh porta, lobortis mi</p>
                                </div>
                                <div>
                                    <p className="text-base font-normal text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a suscipit odio. Etiam nunc nisl, fermentum quis sagittis non, posuere sit amet diam. Maecenas porttitor, felis vel iaculis volutpat, nibh dolor vulputate ex, nec consectetur dui felis id nisl. Suspendisse porta iaculis malesuada. Curabitur nec orci lobortis, viverra nibh porta, lobortis mi</p>
                                </div>
                                <div>
                                    <p className="text-base font-normal text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a suscipit odio. Etiam nunc nisl, fermentum quis sagittis non, posuere sit amet diam. Maecenas porttitor, felis vel iaculis volutpat, nibh dolor vulputate ex, nec consectetur dui felis id nisl. Suspendisse porta iaculis malesuada. Curabitur nec orci lobortis, viverra nibh porta, lobortis mi</p>
                                </div>
                            </Slider>
                        </div>
                        <div className="basis-full md:basis-2/4 flex flex-col gap-5">
                            <div className="bg-[#0F2847] p-6 rounded-3xl cursor-pointer shadow-md relative md:left-[-50px] xl:left-[-100px]">
                                <div className="flex items-center gap-4">
                                    <Image src={avatarOne} alt={avatarOne} />
                                    <div>
                                        <h5 className="text-lg text-white font-sans font-bold leading-none mb-2">Kylie Madona</h5>
                                        <p className="text-sm text-gray-400 font-light">CTO of JamsosTech</p>
                                    </div>
                                </div>
                                <p className="text-sm font-normal text-white mt-3 hidden lg:block">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a suscipit odio. Etiam nunc nisl, fermentum quis sagittis non, posuere sit amet diam.</p>
                            </div>
                            <div className="bg-[#F9F9FB] p-6 rounded-3xl cursor-pointer">
                                <div className="flex items-center gap-4">
                                    <Image src={avatarTwo} alt={avatarTwo} />
                                    <div>
                                        <h5 className="text-lg text-black font-sans font-bold leading-none mb-2">Kylie Madona</h5>
                                        <p className="text-sm text-gray-400 font-light">CTO of JamsosTech</p>
                                    </div>
                                </div>
                                <p className="text-sm font-normal text-black mt-3 hidden lg:block">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a suscipit odio. Etiam nunc nisl, fermentum quis sagittis non, posuere sit amet diam.</p>
                            </div>
                            <div className="bg-[#F9F9FB] p-6 rounded-3xl cursor-pointer">
                                <div className="flex items-center gap-4">
                                    <Image src={avatarThree} alt={avatarThree} />
                                    <div>
                                        <h5 className="text-lg text-black font-sans font-bold leading-none mb-2">Kylie Madona</h5>
                                        <p className="text-sm text-gray-400 font-light">CTO of JamsosTech</p>
                                    </div>
                                </div>
                                <p className="text-sm font-normal text-black mt-3 hidden lg:block">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a suscipit odio. Etiam nunc nisl, fermentum quis sagittis non, posuere sit amet diam.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Reviews;