// Import Components
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Link from "next/link";
import Script from "next/script";

const Page = () => {
    return (
        <main>
            <Script id="tacking-code-gtag">
                {`
                    gtag('event', 'conversion', {'send_to': 'AW-11337170041/esMKCNTj5uEYEPn4_Z0q'});
                `}
            </Script>

            {/* Google tag (gtag.js)  */}
            <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-11337170041"></Script>
            <Script>
                {`
                    
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments)}
                    gtag('js', new Date());
                    gtag('config', 'AW-11337170041');
                
                `}
            </Script>
            <Header />
            <section>
                <div className="__homeHeroGradientBg h-screen flex items-center">
                    <div className="container">
                        <h1 className="text-4xl sm:text-5xl xl:text-5xl 2xl:text-6xl font-sans text-white font-bold leading-none mb-5">
                            Dear Customer,
                        </h1>
                        <p className="text-base font-medium font-sans text-white mb-5">
                            Thank you for submitting the Form on our website. We appreciate your interest
                        </p>
                        <Link href="/" className="w-max px-10 rounded-xl h-[50px] block bg-[#0d3163] text-[#ffffff] text-[18px] font-sans font-semibold hover:ring-2 hover:bg-transparent ring-[#9E7DE9] leading-[50px]">
                            Back to Home
                        </Link>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}

export default Page;