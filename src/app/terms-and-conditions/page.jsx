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
                            Revision Policy
                        </h2>
                        <p className="text-[14px] leading-[24px] text-[#565151] font-normal mb-5">
                            We provide revision depending upon the package you selected. Customers can ask us for unlimited free revisions and we will revise their design without any additional charges provided that the design and concept remains the same. Revision Turnaround Time would be 48 hours.
                        </p>
                        <h2 className="text-2xl sm:text-4xl font-sans text-[#202020] font-semibold leading-none mb-3">
                            Refund Policy / Money Back Guarantee
                        </h2>
                        <p className="text-[14px] leading-[24px] text-[#565151] font-normal mb-3">
                            In any event, any deposited funds for a project shall not be subject to refund after delivery if the initial design concepts are approved, or a change is requested unless Web Design Hub cancels or terminates your Contract for a reason other than your breach or non-performance.
                        </p>
                        <p className="text-[14px] leading-[24px] text-[#565151] font-normal mb-3">
                            All refund requests will be fulfilled as per the following arrangement: You make a request when the initial concepts for a logo are offered. However once you approve or request changes in the initial designs, the refund offer becomes void and refund request will not be entertained.
                        </p>
                        <p className="text-[14px] leading-[24px] text-[#565151] font-normal mb-3">
                            If request for refund is made before the delivery of initial design concepts, then you would be eligible for Full Refund (less 10% service & processing fee). If request for refund is made within 48 hours, you would be eligible for 66% refund (less 10% service & processing fee).
                        </p>
                        <p className="text-[14px] leading-[24px] text-[#565151] font-normal mb-3">
                            If request for refund is made between 48- 120 hours of the initial design delivery, you would be eligible 33% refund (less 10% service & processing fee).
                        </p>
                        <p className="text-[14px] leading-[24px] text-[#565151] font-normal mb-3">
                            No refund request will be entertained after 120 hours of your initial design delivery, however since we believe in 100% customer satisfaction you`re encouraged to contact us in case of any concern.
                        </p>
                        <p className="text-[14px] leading-[24px] text-[#565151] font-normal mb-3">
                            No refund request will be entertained if you have not taken any action on your order for 30 days after placing your order. However, if you want to reactivate your design order, you will be charged a certain fee depending on your project.
                        </p>
                        <p className="text-[14px] leading-[24px] text-[#565151] font-normal mb-3">
                            No refund requests will be entertained after the final files have been delivered. For website packages no refund will be entertained once website development has been completed or once the website has been deployed live.
                        </p>
                        <p className="text-[14px] leading-[24px] text-[#565151] font-normal mb-3">
                            For video animation packages no refund request will be entertained after the designing of the storyboard.
                        </p>
                        <p className="text-[14px] leading-[24px] text-[#565151] font-normal mb-3">
                            All refund requests should be communicated to the support department. Web Design Hub, based on the violation of your user agreement reserves the right to approve/disapprove your request on an individual case to case basis.
                        </p>
                        <p className="text-[14px] leading-[24px] text-[#565151] font-normal mb-3">
                            For Web Design Hub / Custom packages, refund will be applicable the same as it is on the single packages.
                        </p>
                        <p className="text-[14px] leading-[24px] text-[#565151] font-normal mb-3">
                            For example, if you order logo and web design service and approve the logo, you can claim refund for the website service at the time of initial design only.
                        </p>
                        <p className="text-[14px] leading-[24px] text-[#565151] font-normal mb-5">
                            A refund request will need to have a valid reason which must be qualified against the design brief and customer feedback for revisions. Unless a concept has not been designed according to the brief, a refund will not be given however further revisions will be provided until complete satisfaction Money back guarantee is based on that the order is placed in good faith. Where a customer has placed design orders with more than one design agency for the same job with the intention to claim refund, we do not consider it a good faith. In such a case we reserve the right to decline a refund request. All design jobs require customer feedback before finalizing the design therefore it is only fair that the customer gets involved and provides feedback in order to get the desired results. 100% unique design guarantee entitles you to a re-draw if our designed logo is to be found considerably similar to another logo design that may already exist. Any resemblance to an existing design will be merely a coincidence and Web Design Hub will not accept any responsibility or claim of any compensation in such a case.
                        </p>
                        <h2 className="text-2xl sm:text-4xl font-sans text-[#202020] font-semibold leading-none mb-3">
                            How to claim your refund
                        </h2>
                        <p className="text-[14px] leading-[24px] text-[#565151] font-normal mb-5">
                            To assure your refund request is approved, please make sure you meet the following requirements. Claim your refund specifying your concern by contacting us via any of the following three modes: Toll free # <a href="tel:(855)888-8399" className="text-[#0F2847] font-bold">(855) 888-8399</a>
                        </p>
                        <h2 className="text-2xl sm:text-4xl font-sans text-[#202020] font-semibold leading-none mb-3">
                            Live Chat
                        </h2>
                        <p className="text-[14px] leading-[24px] text-[#0F2847] font-bold mb-1">
                            <a href="mailto:info@webdesignhub.co">info@webdesignhub.co</a>
                        </p>
                        <p className="text-[14px] leading-[24px] text-[#565151] font-normal mb-5">
                            We will try to resolve your concern by virtue of our revision policy immediately or else will email you a refund request approval from our refund department. After the refund, your design rights would be obtained by Web Design Hub and you would not be able to display any version of the design sent by company. Let us also specify that:
                        </p>
                        <h2 className="text-2xl sm:text-4xl font-sans text-[#202020] font-semibold leading-none mb-3">
                            My Account
                        </h2>
                        <p className="text-[14px] leading-[24px] text-[#565151] font-normal mb-5">
                            The My Account area is a convenient way to communicate. It is your sole responsibility to check the account area to address any queries, concerns, or additional instructions required by the designer. Not checking or using the Account Area frequently shall not provide you adequate grounds for a refund. However, if you are uncertain how to use the area, you may contact the customer support team at any time for assistance.
                        </p>
                        <h2 className="text-2xl sm:text-4xl font-sans text-[#202020] font-semibold leading-none mb-3">
                            Quality Assurance Policy
                        </h2>
                        <p className="text-[14px] leading-[24px] text-[#565151] font-normal mb-3">
                            In order to provide you the desired satisfaction, our designers don't deviate from the specifications provided by you in the order form.
                        </p>
                        <p className="text-[14px] leading-[24px] text-[#565151] font-normal mb-5">
                            The designs are created after a thorough research which ensures the design quality and uniqueness.
                        </p>
                        <h2 className="text-2xl sm:text-4xl font-sans text-[#202020] font-semibold leading-none mb-3">
                            100% Satisfaction Guarantee
                        </h2>
                        <p className="text-[14px] leading-[24px] text-[#565151] font-normal mb-5">
                            We rework the ordered design and keep on revising it until you are 100% satisfied (depending upon your package).
                        </p>
                        <h2 className="text-2xl sm:text-4xl font-sans text-[#202020] font-semibold leading-none mb-3">
                            Domain and Hosting
                        </h2>
                        <p className="text-[14px] leading-[24px] text-[#565151] font-normal mb-3">
                            Domain and hosting will be provided for free with website packages, where applicable.
                        </p>
                        <p className="text-[14px] leading-[24px] text-[#565151] font-normal mb-3">
                            All the email accounts provided with website packages can be configured on third party email soft-wares such as outlook. Each email account will have 10MB of space.
                        </p>
                        <p className="text-[14px] leading-[24px] text-[#565151] font-normal mb-3">
                            If you are not hosting your website with us, we will not provide email accounts.
                        </p>
                        <p className="text-[14px] leading-[24px] text-[#565151] font-normal mb-5">
                            There is no refund for the hosting, domain or email server package
                        </p>
                        <h2 className="text-2xl sm:text-4xl font-sans text-[#202020] font-semibold leading-none mb-3">
                            Delivery Policy
                        </h2>
                        <p className="text-[14px] leading-[24px] text-[#565151] font-normal mb-5">
                            All design order files are delivered to My Account as per the date specified on the "Order Confirmation". An e-mail is also sent to inform the client about their design order delivery made to their specific account area. All policies pertaining to revision & refund are subject to date and time of design order delivered to client's account area. All design order files are delivered to "My Account" as per the date specified on the "Order Confirmation". An e-mail is also sent to inform the client about their design order delivery made to their specific account area. All policies pertaining to revision & refund are subject to date and time of design order delivered to client's account area. We deliver all our customized design orders via e-mail within 5 to 7 days of receiving your order. We offer a RUSH DELIVERY service through which you can have your first logo samples within 48 hours by paying just $100 extra! For further assistance, contact us at 24-Hour Customer Support Center.
                        </p>
                        <h2 className="text-2xl sm:text-4xl font-sans text-[#202020] font-semibold leading-none mb-3">
                            Record Maintenance
                        </h2>
                        <p className="text-[14px] leading-[24px] text-[#565151] font-normal mb-5">
                            We keep a record of your finalized design once we provide you the final files. If you require the final files again in the future we can send them to you at your request.
                        </p>
                        <h2 className="text-2xl sm:text-4xl font-sans text-[#202020] font-semibold leading-none mb-3">
                            Customer Support
                        </h2>
                        <p className="text-[14px] leading-[24px] text-[#565151] font-normal mb-3">
                            We offer 24-Hour Customer Support to address your queries and questions.
                        </p>
                        <p className="text-[14px] leading-[24px] text-[#565151] font-normal mb-5">
                            You can contact us any time and we guarantee to respond immediately.
                        </p>
                        <h2 className="text-2xl sm:text-4xl font-sans text-[#202020] font-semibold leading-none mb-3">
                            Communication Policy
                        </h2>
                        <p className="text-[14px] leading-[24px] text-[#565151] font-normal mb-5">
                            YOU agree that Web Design Hub is not liable for any correspondence from email address (es) other than the ones followed by our own domain i.e. <a href="mailto:info@webdesignhub.co" className="text-[#0F2847] font-bold">"info@webdesignhub.co"</a> or/and any toll free number that is not mentioned on our website. Web Design Hub should not be held responsible for any damage(s) caused by such correspondence. We only take responsibility of any communication through email address (es) under our own domain name or/and via toll free number i.e. already mentioned on Web Design Hub Website.
                        </p>
                        <h2 className="text-2xl sm:text-4xl font-sans text-[#202020] font-semibold leading-none mb-3">
                            Access to Information
                        </h2>
                        <p className="text-[14px] leading-[24px] text-[#565151] font-normal mb-3">
                            To access Web Design Hub services you may be asked to provide certain registration details or other information. By accepting these terms & conditions, you hereby acknowledge that all the information provided by you will be correct, current, and complete. If Web Design Hub believes the information that you have provided is not correct, current, or complete, Web Design Hub has the right to refuse your access to any services or any of its resources, and to terminate or suspend your account at any time.
                        </p>
                        <p className="text-[14px] leading-[24px] text-[#565151] font-normal mb-5">
                            Web Design Hub is operating under a PCI DSS compliant company; therefore it is authorized to keep your credit card information on file that can be used for any recurring service, additional development hours, server or network equipment required to develop or launch your website without any prior notification. However, our representatives always bring this in knowledge so that you are aware about all the processes.
                        </p>
                        <h2 className="text-2xl sm:text-4xl font-sans text-[#202020] font-semibold leading-none mb-3">
                            100% Unique Design Guarantee
                        </h2>
                        <p className="text-[14px] leading-[24px] text-[#565151] font-normal mb-5">
                            At Web Design Hub we guarantee that all of our customers' logos are made from scratch. This way you will have a logo that is tailor made for your requirements. We guarantee that your logo will be unique and impress your clientele.
                        </p>
                        <h2 className="text-2xl sm:text-4xl font-sans text-[#202020] font-semibold leading-none mb-3">
                            Exclusions
                        </h2>
                        <p className="text-[14px] leading-[24px] text-[#565151] font-normal ">
                            The Company will assist the Client with the integration of 3rd party plugins and APIs but any third party integration required to assist with the functionality of the website will be STRICTLY standard. The Company will not have anything to do with any third party dealings during the development of this project. All additional work will require a separate fee agreement.
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