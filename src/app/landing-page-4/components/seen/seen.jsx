// Next
import Image from "next/image";
// Media
import Brands from "media/landing-page-4/brands.png"
const Seen = () => {
    return (
        <div className="pt-8 bg-[#F3F3F3]">
            <div className="container">
                <div className="text-black text-center">
                    <h2 className="text-xl leading-tight font-semibold">AS SEEN IN</h2>
                </div>
                <Image src={Brands} alt="Icons" className="block mx-auto"/>
            </div>
        </div>
    )
}

export default Seen;
