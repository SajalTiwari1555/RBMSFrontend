import Image from "next/image";
import { IoSearchSharp } from "react-icons/io5";
import map from "../../assets/IMG-20240214-WA0012.jpg"

export default function About( params ) {
    return (
        <div className="h-screen  bg-blue-600 text-white flex justify-center items-center lg:pt-10 lg:p-20">
            <div className=" grid grid-flow-col grid-cols-1 gap-5 lg:grid-cols-2">
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-5">
                    <h1 className="lg:text-3xl font-bold  "> A Leading Digital Marketing Agency in the UttarPradesh</h1>
                    <p>RBMS is a leading Digital Marketing Agency based in the UK, renowned for providing the best digital solutions for companies across the UK. Our dynamic digital marketing agency is distinguished by its knack for helping businesses bolster their digital presence, utilising cutting-edge technologies and innovative strategies.</p>
                </div>
                <div className="flex flex-col gap-5">
                    <h1 className="lg:text-3xl font-bold  "> Strengthening Your Digital Presence</h1>
                    <p>In the ever-evolving digital landscape, maintaining a substantial digital presence is indispensable. Businesses across the globe are acknowledging the power of the digital world, and Bird’s digital marketing services are leading the charge in this digital transformation. Our expertise lies in amplifying businesses’ digital footprints, ensuring they excel in the online arena.</p>
                </div>
                </div>
                <Image src={map} className=" rounded-xl flex items-center"/>
            </div>
        </div>
    )
}
