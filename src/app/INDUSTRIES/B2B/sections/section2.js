import Image from "next/image"
import SEOIMG from "../../../../assets/seo.jpg"
import SEOIMG1 from "../../../../assets/b2bsection.jpg"
import { FcElectricity } from "react-icons/fc";
import Link from "next/link";

export default function section1() {
    return (
        <div className="flex relative  flex-col bg-white  justify-center w-screen overflow-hidden h-auto lg:pb-2 ">


            <div className=" bg-blue-600 lg:p-10 h-screen  text-white grid  gap-10 overflow-hidden grid-cols-1 lg:grid-cols-2">

                <div className="flex flex-col  lg:mt-10 gap-5">
                    <h1 className="lg:text-5xl text-xl font-bold ">Success requires building a rock-solid marketing operation.</h1>
                    <p className="lg:text-2xl">With marketing operations done right, your tech company can connect and align people, process, and technology to streamline the customer journey and your team’s effectiveness, leading to increased revenue.</p>
                    <p className="lg:text-2xl font-bold">
                    How do your marketing operations measure up?</p>
                <Link href="/" className=" bg-orange-600 p-3 w-44 flex justify-center hover:bg-white hover:text-blue-600 hover:font-bold" >Book Intro Now </Link>
                </div>
                 <div className="relative ">
                    <Image src={SEOIMG1} alt="digital marketing agency" className="h-3/4 z-5 " />

                <div className=" border-2 border-orange-500 absolute top-1 rounded-full lg:w-72 -z-10 lg:h-96"></div>
                <div className=" border-2 border-orange-500 rotate-90 absolute top-10 left-52 rounded-full lg:w-72 -z-10 lg:h-96"></div>
                </div>
            </div>
        </div>
    )
}
