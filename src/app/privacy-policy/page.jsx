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
                            About The Policy
                        </h2>
                        <p className="text-[14px] leading-[24px] text-[#565151] font-normal mb-3">
                            At Web Design Hub, the privacy of our clients is our top priority on <a href="/" className="text-[#0F2847] font-bold">webdesignhub.co</a> and we respect it as our own. Though we collect information from our clients, it is only used to make improvements in our customer services. Our company acknowledges that the maintenance and use of our clients' information is our responsibility. We DO NOT rent or sell the information that our clients provide us online.
                        </p>
                        <p className="text-[14px] leading-[24px] text-[#565151] font-normal mb-5">
                            This policy describes how the personal information of our client collected by us is used, why we collect it, and how we use it. It is within our policy that we describe the choices you can make about how we can collect and use your information.
                        </p>
                        <h2 className="text-2xl sm:text-4xl font-sans text-[#202020] font-semibold leading-none mb-3">
                            Personal Information Collected
                        </h2>
                        <p className="text-[14px] leading-[24px] text-[#565151] font-normal mb-3">
                            The information collected by Web Design Hub includes the client's name, e-mail, mailing address and phone number. These are pieces of information that the client provides us while ordering or while saving the information with our company. We may also use the email addresses or mailing addresses which we receive through our mailing system such as our Contact Us Form for responding to comments, queries etc.
                        </p>
                        <p className="text-[14px] leading-[24px] text-[#565151] font-normal mb-5">
                            Our company also maintains records of the items, which have interested our clients in the past, as well as the client's purchases online.
                        </p>
                        <h2 className="text-2xl sm:text-4xl font-sans text-[#202020] font-semibold leading-none mb-3">
                            Use of Collected Data
                        </h2>
                        <p className="text-[14px] leading-[24px] text-[#565151] font-normal mb-3">
                            The information collected is used in many diversified methods. Our company uses the information saved by our clients to process their order. We also send them e-mails to confirm the order and our customer services may also contact them via phone, mailing address or e-mail if our company has other queries regarding the order placed.
                        </p>
                        <p className="text-[14px] leading-[24px] text-[#565151] font-normal mb-5">
                            As a client, one might also receive updates regarding our site and services which may include a newsletter and information on promotions. In addition, we may also use the information about your interests and purchases to help our company improve our site design and the client's purchasing experience.
                        </p>
                        <h2 className="text-2xl sm:text-4xl font-sans text-[#202020] font-semibold leading-none mb-3">
                            Newsletter Opt-out
                        </h2>
                        <p className="text-[14px] leading-[24px] text-[#565151] font-normal mb-5">
                            If you no longer wish to receive our newsletter and promotional communications, you may opt-out of receiving them by following the instructions included in each newsletter or communication or by emailing us at Or calling us at <a href="tel:(855)888-8399" className="text-[#0F2847] font-bold">(855) 888-8399</a>.
                        </p>
                        <h2 className="text-2xl sm:text-4xl font-sans text-[#202020] font-semibold leading-none mb-3">
                            Social Media (Features) and Widgets
                        </h2>
                        <p className="text-[14px] leading-[24px] text-[#565151] font-normal mb-5">
                            Our Web site includes Social Media Features, such as the Facebook Like button [and Widgets, such as the Share this button or interactive mini-programs that run on our site]. These Features may collect your IP address, which page you are visiting on our site, and may set a cookie to enable the Feature to function properly. Social Media Features and Widgets are either hosted by a third party or hosted directly on our Site. Your interactions with these Features are governed by the privacy policy of the company providing it.
                        </p>
                        <h2 className="text-2xl sm:text-4xl font-sans text-[#202020] font-semibold leading-none mb-3">
                            3rd Party Sharing
                        </h2>
                        <p className="text-[14px] leading-[24px] text-[#565151] font-normal mb-3">
                            Personal information will NOT be released to third parties unless as described in this policy. There are no circumstances under.
                        </p>
                        <p className="text-[14px] leading-[24px] text-[#565151] font-normal mb-3">
                            which we sell personal information to third parties.
                        </p>
                        <p className="text-[14px] leading-[24px] text-[#565151] font-normal mb-5">
                            We use credit card processing companies to bill you for services. These companies do not retain, share, store or use personally identifiable information for any other purposes. We also use Live Person to provide live customer support chat on our website. These companies are authorized to use your personal information only as necessary to provide these services to us.
                        </p>
                        <h2 className="text-2xl sm:text-4xl font-sans text-[#202020] font-semibold leading-none mb-3">
                            Security of Personal Information
                        </h2>
                        <p className="text-[14px] leading-[24px] text-[#565151] font-normal mb-3">
                            The information of our clients is secure, as it is protected during transmission by the use of the Secure Sockets Layer (SSL) Software which encrypts the information the client puts in.
                        </p>
                        <p className="text-[14px] leading-[24px] text-[#565151] font-normal mb-3">
                            We follow generally accepted industry standards to protect the personal information submitted to us, both during transmission and once we receive it. No method of transmission over the Internet, or method of electronic storage, is 100% secure, however. Therefore, while we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
                        </p>
                        <p className="text-[14px] leading-[24px] text-[#565151] font-normal mb-5">
                            If you have any questions about security on our Web site, you can send an email to us at <a href="mailto:info@webdesignhub.co" className="text-[#0F2847] font-bold">"info@webdesignhub.co"</a>
                        </p>
                        <h2 className="text-2xl sm:text-4xl font-sans text-[#202020] font-semibold leading-none mb-3">
                            Access of Registered Accounts
                        </h2>
                        <p className="text-[14px] leading-[24px] text-[#565151] font-normal mb-5">
                            The client can access their registered accounts by signing in on our homepage. Once signed in, the client has access to their previous lists and information that they have already submitted to the site. The users are able to update their information once they have logged in to their accounts by clicking My Account.
                        </p>
                        <h2 className="text-2xl sm:text-4xl font-sans text-[#202020] font-semibold leading-none mb-3">
                            Changing & Deleting/Unsubscribing Accounts
                        </h2>
                        <p className="text-[14px] leading-[24px] text-[#565151] font-normal mb-3">
                            The client has to send in an email to request the cancellation of subscription or request to have their personal information deleted. This shall prevent the user from receiving e-mails communication relating to any online order they might have placed at the site.
                        </p>
                        <p className="text-[14px] leading-[24px] text-[#565151] font-normal mb-5">
                            We will retain your information for as long as your account is active or as needed to provide you services. Please contact us if you wish to cancel your account or request that we no longer use your information to provide you services. We will retain and use your information as necessary to comply with our legal obligations, resolve disputes, and enforce our agreements.
                        </p>
                        <h2 className="text-2xl sm:text-4xl font-sans text-[#202020] font-semibold leading-none mb-3">
                            Cookies and Their Use
                        </h2>
                        <p className="text-[14px] leading-[24px] text-[#565151] font-normal mb-3">
                            Cookies are alphanumeric identifiers that are transferred to the clients' hard drives through their Web browsers. This enables our systems to recognize the clients' browsers and storage of items in their Shopping Carts during visits.
                        </p>
                        <p className="text-[14px] leading-[24px] text-[#565151] font-normal mb-3">
                            The Help portion of the toolbar on most browsers will be more helpful in explaining how to prevent the browser from accepting new cookies, how to have the browser notify the user when a new cookie is received, or how to disable cookies altogether. However, cookies allow you to take full advantage of the top features at our site, and our company's personal recommendation is that the client leaves them to be accepted.
                        </p>
                        <p className="text-[14px] leading-[24px] text-[#565151] font-normal mb-3">
                            Second, we keep track of your IP address to help diagnose problems with our server and to administer our Web site. Your IP address is also used to gather broad demographic information about you, such as your location and your Internet service provider. We may also collect combined information on how our users are utilizing the site. This might include information regarding traffic patterns through the site and search queries. No IP address/log file information is tied to Personally Identifiable Information (PII).
                        </p>
                        <p className="text-[14px] leading-[24px] text-[#565151] font-normal mb-3">
                            Third, we log browser types, access times, URLs from which visitors came to our site and URLs viewed by visitors while on our site. Except as otherwise stated in this Privacy Policy, we do not provide this information to third parties, except in combined form.
                        </p>
                        <p className="text-[14px] leading-[24px] text-[#565151] font-normal mb-3">
                            The use of cookies by our partners, affiliates, tracking utility company, service providers is not covered by our privacy statement. We do not have access or control over these cookies. Our partners, affiliates, tracking utility company, service providers use session ID cookies to make it easier for you to navigate our site.
                        </p>
                        <h2 className="text-2xl sm:text-4xl font-sans text-[#202020] font-semibold leading-none mb-3">
                            Clear Gifs (Web Beacons/Web Bugs)
                        </h2>
                        <p className="text-[14px] leading-[24px] text-[#565151] font-normal mb-5">
                            We employ a software technology called clear gifs (a.k.a. Web Beacons/Web Bugs), that help us better manage content on our site by informing us what content is effective. Clear gifs are tiny graphics with a unique identifier, similar in function to cookies, and are used to track the online movements of Web users. In contrast to cookies, which are stored on a user's computer hard drive, clear gifs are embedded invisibly on Web pages and are about the size of the period at the end of this sentence. We do not tie the information gathered by clear gifs to our customers' personally identifiable information.
                        </p>
                        <h2 className="text-2xl sm:text-4xl font-sans text-[#202020] font-semibold leading-none mb-3">
                            Testimonials
                        </h2>
                        <p className="text-[14px] leading-[24px] text-[#565151] font-normal mb-5">
                            With your consent we may post your testimonial along with your name. If you want your testimonial removed please contact us.
                        </p>
                        <h2 className="text-2xl sm:text-4xl font-sans text-[#202020] font-semibold leading-none mb-3">
                            Links to Other Web Sites
                        </h2>
                        <p className="text-[14px] leading-[24px] text-[#565151] font-normal mb-5">
                            Our Site includes links to other Web sites whose privacy practices may differ from those of ours. If you submit personal information to any of those sites, your information is governed by their privacy statements. We encourage you to carefully read the privacy statement of any Web site you visit.
                        </p>
                        <h2 className="text-2xl sm:text-4xl font-sans text-[#202020] font-semibold leading-none mb-3">
                            Notification of the Changes in Privacy Policy
                        </h2>
                        <p className="text-[14px] leading-[24px] text-[#565151] font-normal mb-5">
                            If we decide to change our privacy policy, we will post those changes to this privacy statement, the homepage, and other places we deem appropriate so that you are aware of what information we collect, how we use it, and under what circumstances, if any, we disclose it. We reserve the right to modify this privacy statement at any time, so please review it frequently. If we make material changes to this policy, we will notify you here, by email, or by means of a notice on our homepage before the change takes effect.
                        </p>
                        <h2 className="text-2xl sm:text-4xl font-sans text-[#202020] font-semibold leading-none mb-3">
                            Questions
                        </h2>
                        <p className="text-[14px] leading-[24px] text-[#565151] font-normal">
                            If you have any questions regarding our Privacy Policy or our use of your information, call our toll free number <a href="tel:(855)888-8399" className="text-[#0F2847] font-bold">(855) 888-8399</a> or email us on <a href="mailto:info@webdesignhub.co" className="text-[#0F2847] font-bold">info@webdesignhub.co</a>
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