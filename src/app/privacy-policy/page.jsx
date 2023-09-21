// Import Components
import Contact from "@/components/contact/contact";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Letstalk from "@/components/letstalk/letstalk";
import Reviews from "@/components/reviews/reviews";

const Page = () => {
    // Array for Letstalk Component Props
    const letstalk = {
        title: "Design Consultation",
        desc: "Contact us for a free consultation, and let's design your captivating logo, website, and mobile app together!"
    }
    return (
        <main>
            <Header />
            <section>
                <div className="__homeHeroGradientBg h-[250px] flex items-center text-center">
                    <div className="container">
                        <h1 className="text-4xl sm:text-5xl xl:text-5xl 2xl:text-6xl font-megat text-white font-normal leading-none mt-10">Privacy Policy</h1>
                    </div>
                </div>
            </section>
            <section>
                <div className="py-[50px]">
                    <div className="container">
                        <h2 className="text-2xl sm:text-4xl font-sans text-[#202020] font-semibold leading-none mb-3">
                            Personal Information:
                        </h2>
                        <p className="text-[14px] leading-[24px] text-[#565151] font-normal mb-5">
                            {`When you interact with us, we automatically receive and store certain types of information, such as the content you view, the date and time that you view this content, the products you purchase, or your location information associated with your IP address. We use the information we collect to serve you more relevant advertisements (referred to as “Retargeting”). This is statistical information used to monitor the usage of our website and for advertising purposes. This information does not include personal information. a) Personally Identifiable Information: WebDesignHub Consulting will not rent or sell your personally identifiable information to others. We may store personal information in locations outside the direct control of WebDesignHub Consulting (for instance on servers or databases co-located with hosting providers). Any personally identifiable information you elect to make publicly available on our sites, such as posting comments on our blog page, will be available to others. If you remove information that you have made public on our site, copies may remain viewable in cached and archived pages of our site, or if other users have copied or saved that information. Our blog is managed by a third party application that may require you to register to post a comment. We do not have access or control of the information posted on the blog. You will need to contact or login into the third party application if you want the personal information that was posted to the comments section removed. To learn how the third party application uses your information, please visit their privacy policy. All personal information used within our contact form will be used by the internal team at WebDesignHub for communication purposes. b) Non-Personally Identifiable Information: Non-Personally Identifiable Information: We may share non-personally identifiable information (such as anonymous usage data, referring/exit pages and URLs, platform types, number of clicks, etc,) with interested third parties to help them understand the usage patterns for certain WebDesignHub Consulting services.`}
                        </p>
                        <h2 className="text-2xl sm:text-4xl font-sans text-[#202020] font-semibold leading-none mb-3">
                            Cookies
                        </h2>
                        <p className="text-[14px] leading-[24px] text-[#565151] font-normal mb-5">
                            As you browse WebDesignHub.co, advertising cookies will be placed on your computer so that we can understand what you are interested in. Our display advertising partner, then enables us to present you with retargeting advertising on other sites based on your previous interaction with WebDesignHub.co. The techniques our partners employ do not collect personal information such as your name, email address, postal address or telephone number. You can visit this page to opt out of AdRoll and their partner's targeted advertising.
                        </p>
                        <h2 className="text-2xl sm:text-4xl font-sans text-[#202020] font-semibold leading-none mb-3">
                            Security
                        </h2>
                        <p className="text-[14px] leading-[24px] text-[#565151] font-normal">
                            We implement a secure processing server on our site when collecting information to ensure a high level of security for your personal information entered such as bank details and credit card information
                        </p>
                    </div>
                </div>
            </section>
            <Letstalk content={letstalk} />
            <Reviews />
            <Contact />
            <Footer />
        </main>
    );
}

export default Page;