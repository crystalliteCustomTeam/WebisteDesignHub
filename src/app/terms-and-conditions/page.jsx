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
                        <h1 className="text-4xl sm:text-5xl xl:text-5xl 2xl:text-6xl font-megat text-white font-normal leading-none mt-10">Terms & Conditions
                        </h1>
                    </div>
                </div>
            </section>
            <section>
                <div className="py-[50px]">
                    <div className="container">
                        <h2 className="text-2xl sm:text-4xl font-sans text-[#202020] font-semibold leading-none mb-3">
                            Refund Policy:
                        </h2>
                        <p className="text-[14px] leading-[24px] text-[#565151] font-normal mb-3">
                            WebDesignHub ensures that every project we undertake is managed with expertise and committed to delivering exactly what was promised in the proposal. We have established clear service guidelines and Conditions of Use for each of our offerings, which will be referenced when evaluating refund requests following the completion of our dispute-resolution process.
                        </p>
                        <p className="text-[14px] leading-[24px] text-[#565151] font-normal mb-5">
                            While we strive to ensure every project meets our clients’ expectations, we acknowledge that exceptional circumstances can arise. In such cases, we may consider issuing refunds. To determine if you are eligible for a refund, please reach out to us at <a href="mailto:info@webdesignhub.co" className="text-purple-500">Contact Email</a>.
                        </p>
                        <h2 className="text-2xl sm:text-4xl font-sans text-[#202020] font-semibold leading-none mb-3">
                            Terms & Conditions
                        </h2>
                        <p className="text-[14px] leading-[24px] text-[#565151] font-normal mb-3">
                            ATTENTION: PLEASE READ THIS STATEMENT CAREFULLY BEFORE USING BitsWits (THIS “WEBSITE”). YOUR USE OF THIS WEBSITE CONSTITUTES YOUR ACCEPTANCE OF THIS COPYRIGHT STATEMENT AND TERMS OF USE (COLLECTIVELY, “TERMS OF USE”). IF YOU DO NOT ACCEPT THESE TERMS OF USE, DO NOT USE THIS WEBSITE.
                        </p>
                        <p className="text-[14px] leading-[24px] text-[#565151] font-normal mb-3">
                            BitsWits reserves the right to modify these Terms of Use without notice and any modifications are effective when they are posted here. BitsWits may, at any time, in its discretion terminate your access to this Web site. Access to the Web site may be monitored by BitsWits If you are accessing this Web site as a representative of an organization, these Terms of Use bind both you inpidually and the organization and references to “you” and “your” shall be construed to apply to you inpidually and the organization.
                        </p>
                        <p className="text-[14px] leading-[24px] text-[#565151] font-normal mb-3">
                            While BitsWits maintains copyright protection in all materials, information and publications (collectively, “Web site information”) it places on this Web site, WebDesignHub consents to normal downloading, copying and distribution of the information for non-commercial purposes by you or within your organization only. In consideration of this consent, you agree that copies of the Web site information will retain all copyright and other proprietary notices and that you will not modify the Web site information in any way. Except where your use constitutes “fair use” under copyright law, you may not otherwise use, download, upload, copy, print, display, perform, reproduce, publish, or distribute any Website information, in whole or in part, without the prior written consent of BitsWits.
                        </p>
                        <p className="text-[14px] leading-[24px] text-[#565151] font-normal mb-3">
                            As a condition of your use of this Web site, you will not use the Web site or the Web site information for any purpose that is unlawful or prohibited by these Terms of Use. You will not use this Web site in any manner that could damage, disable, overload or impair the operation of this Web site or use by third parties.
                        </p>
                        <p className="text-[14px] leading-[24px] text-[#565151] font-normal mb-3">
                            Certain restricted product information is available on this Web site only to licensed customers of BitsWits that are registered to receive information via passwords issued by BitsWits This restricted information is considered confidential and proprietary information of BitsWits If you are a registered customer or a representative of a registered customer, BitsWits authorizes you to download, copy, distribute and use the restricted information for yourself or, if applicable, only within the customer organization, and only for the intended purposes authorized by BitsWits Issuance of a registration password is conditioned on the customer’s use of the information in accordance with the terms of its license or service agreement with BitsWits You shall not transfer your password to unauthorized parties. You will immediately notify BitsWits Proof any unauthorized use of your password. You are responsible for use of your password. You will not attempt to gain unauthorized access to any Web site information or area within this Website.
                        </p>
                        <p className="text-[14px] leading-[24px] text-[#565151] font-normal mb-3">
                            {`You may link to the BitsWits home page, but are not authorized to link to any other page on the BitsWits Web site without the prior express written consent of WebDesignHub provided that BitsWits reserves the right to withdraw this consent at any time in its discretion. You may not use any of BitsWits proprietary logos, marks, or other distinctive graphics, video, or audio material in your links. You may not link in any manner reasonably likely to 1) imply affiliation with or endorsement or sponsorship by WebDesignHub 2) cause confusion, mistake, or deception; 3) dilute BitsWits trademarks, service marks or trade names; or 4) otherwise violate applicable law.`}
                        </p>
                        <p className="text-[14px] leading-[24px] text-[#565151] font-normal mb-3">
                            BitsWits makes no representations or promises to develop, provide or market any software, service or product discussed on this Web site, and you shall not rely on the information provided or the prospect of availability of any software, service or product currently in development or currently anticipated to be made available in the future.
                        </p>
                        <p className="text-[14px] leading-[24px] text-[#565151] font-normal mb-3">
                            Web site information may refer to products, programs or services that are not available in your country. Consult your BitsWits representative for information about the products, programs and services that may be available to you.
                        </p>
                        <p className="text-[14px] leading-[24px] text-[#565151] font-normal mb-3">
                            Any software that is available for download from this Web site is the copyrighted property of BitsWits and/or its suppliers. Any use or reproduction of any such software and warranties as to such software, if any, are governed by the terms of the license agreement applicable to that software. Any use of any other product or service and warranties as to such product or service purchased by you using, or in connection with, this Web site, if any, is governed by the terms of the agreement applicable to that product or service.
                        </p>
                        <p className="text-[14px] leading-[24px] text-[#565151] font-normal mb-3">
                            BitsWits makes no representations or promises to develop, provide or market any software, service or product discussed on this Web site, and you shall not rely on the information provided or the prospect of availability of any software, service or product currently in development or currently anticipated to be made available in the future.
                        </p>
                        <p className="text-[14px] leading-[24px] text-[#565151] font-normal mb-3">
                            Web site information may refer to products, programs or services that are not available in your country. Consult your BitsWits representative for information about the products, programs and services that may be available to you.
                        </p>
                        <p className="text-[14px] leading-[24px] text-[#565151] font-normal">
                            Any software that is available for download from this Web site is the copyrighted property of BitsWits and/or its suppliers. Any use or reproduction of any such software and warranties as to such software, if any, are governed by the terms of the license agreement applicable to that software. Any use of any other product or service and warranties as to such product or service purchased by you using, or in connection with, this Web site, if any, is governed by the terms of the agreement applicable to that product or service
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