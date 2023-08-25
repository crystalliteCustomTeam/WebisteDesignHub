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
import reviewsIllustration from "media/reviews/reviews.png";

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
                            <Slider {...settings} className="pb-8">
                                <div>
                                    <p className="text-sm lg:text-[18px] leading-[28px] font-light  text-gray-600 shadow-md bg-white p-3 rounded-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a suscipit odio. Etiam nunc nisl, fermentum quis sagittis non, posuere sit amet diam. Maecenas porttitor, felis vel iaculis volutpat, nibh dolor vulputate ex, nec consectetur dui felis id nisl. Suspendisse porta iaculis malesuada. Curabitur nec orci lobortis, viverra nibh porta, lobortis mi</p>
                                    <div className="flex items-center gap-5 mt-5">
                                        <Image src={avatarOne} alt={avatarOne} className="mt-5 shadow-md rounded-full" />
                                        <div >
                                            <h5 className="text-lg text-black font-sans font-bold leading-none mb-2">Kylie Madona</h5>
                                            <p className="text-sm text-black font-light">CTO of JamsosTech</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-sm lg:text-[18px] leading-[28px] font-light  text-gray-600 shadow-md bg-white p-3 rounded-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a suscipit odio. Etiam nunc nisl, fermentum quis sagittis non, posuere sit amet diam. Maecenas porttitor, felis vel iaculis volutpat, nibh dolor vulputate ex, nec consectetur dui felis id nisl. Suspendisse porta iaculis malesuada. Curabitur nec orci lobortis, viverra nibh porta, lobortis mi</p>
                                    <div className="flex items-center gap-5 mt-5">
                                        <Image src={avatarTwo} alt={avatarTwo} className="shadow-md rounded-full" />
                                        <div>
                                            <h5 className="text-lg text-black font-sans font-bold leading-none mb-2">Kylie Madona</h5>
                                            <p className="text-sm text-black font-light">CTO of JamsosTech</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-sm lg:text-[18px] leading-[28px] font-light  text-gray-600 shadow-md bg-white p-3 rounded-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a suscipit odio. Etiam nunc nisl, fermentum quis sagittis non, posuere sit amet diam. Maecenas porttitor, felis vel iaculis volutpat, nibh dolor vulputate ex, nec consectetur dui felis id nisl. Suspendisse porta iaculis malesuada. Curabitur nec orci lobortis, viverra nibh porta, lobortis mi</p>
                                    <div className="flex items-center gap-5 mt-5">
                                    <Image src={avatarThree} alt={avatarThree} className="mt-5 shadow-md rounded-full" />
                                    <div>
                                        <h5 className="text-lg text-black font-sans font-bold leading-none mb-2">Kylie Madona</h5>
                                        <p className="text-sm text-black font-light">CTO of JamsosTech</p>
                                    </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                        <div className="basis-full md:basis-2/4">
                            <Image src={reviewsIllustration} alt="reviewsIllustration" />
                        </div>
                        {/* <div className="basis-full md:basis-2/4 flex flex-col gap-5">
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
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Reviews;