// Import Components
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Link from "next/link";

const Page = () => {
    return (
        <main>
            <Header />
            <section>
                <div className="__homeHeroGradientBg h-screen flex items-center text-center">
                    <div className="container">
                        <h1 className="text-4xl sm:text-5xl xl:text-5xl 2xl:text-6xl font-megat text-white font-normal leading-none mb-5">
                            Thank You!
                        </h1>
                        <p className="text-base font-medium font-sans text-white mb-5">
                            Welcome to the community, your personalized experience awaits!
                        </p>
                        <Link href="/" className="w-max px-10 rounded-xl h-[50px] block bg-[#0d3163] text-[#ffffff] text-[18px] font-sans font-semibold hover:ring-2 hover:bg-transparent ring-[#9E7DE9] mx-auto mb-5 leading-[50px]">
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