// Import Components
import Button from "@/components/button/Button";

const Services = () => {
    return (
        <section>
            <div className="bg-[#EBEBEB] py-10 lg:pb-20 lg:pt-[200px]">
                <div className="container">
                    <div className="text-center mb-10">
                        <span className="text-base font-normal text-[#00B4FF]">Provider of Moving Image Work</span>
                        <h2 className="font-megat font-normal text-3xl sm:text-4xl lg:text-5xl text-black mb-2">Continued Progress</h2>
                        <p className="text-base text-black font-normal">Through the use of animations, music, and other media content, motion graphics may turn even the most mundane subject matter into something that holds the viewer's interest. Whether it's an infomercial or an instructional video, Urban Web Designers can create an engaging and effective animation.</p>
                    </div>
                    <video src="videos/motionGraphicsLaptop.mp4" autoPlay loop muted controls={false}></video>
                    <div className="flex items-center gap-3 justify-center mt-10 relative z-10">
                        <Button text="Start Live Chat"
                            icon={true}
                            color="bg-[#195A47] text-white"
                            hover="hover:bg-[#000000]"
                            link="#" />
                        <Button text="(123)-000-0000"
                            color="bg-transparent text-[#202020]"
                            border="border-2 border-[#195A47]"
                            hover="hover:bg-[#195A47] hover:text-white"
                            link="tel:123654789" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;