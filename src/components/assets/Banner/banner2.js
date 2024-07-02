import Image from "next/image"
import Button from "../Buttons/button"
import Bannerimg from "../../../assets/banner.jpg"
export default function Banner( {heading, desc,img } ) {
    return (
        <div className=" h-auto  lg:h-3/4 ">
            <div className="absolute z-10  text-white flex flex-col gap-4 m-5 lg:m-20  lg:w-1/2">
                <h1 className="lg:text-4xl font-bold">

                {heading}
                </h1>
                <p className="lg:text-xl font-semibold">{desc}</p>
                <Button title={"BOOK YOUR CONSULTATION"} />


            </div>
            <Image src={img} alt="digital marketing" className="w-screen lg:h-96"/>
    </div>
)
}
