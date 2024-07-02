import Button from "../Buttons/button"
import Cards from "../cards/cards"
import Image from "next/image"
import Bannerimg from "../../../assets/bnn.jpg"
import { IoLogoAppleAr } from "react-icons/io5";

export default function Banner(  ) {
    return (
        <div className=" h-auto relative lg:h-screen ">
            <div className="absolute z-10  text-white flex flex-col justify-center items-center gap-4 m-5 lg:mt-44 lg:m-20 lg:w-3/4">
                <h1 className="lg:text-7xl font-bold">

             Turn your marketing operations into a revenue-generating machine.
                </h1>
                <p className="lg:text-xl font-semibold">RBMS is Digital marketing and Accounts services company. From conceptualization to final-stage execution, we implement the entire digital marketing strategy.</p>
                {/* <Button title="BOOK YOUR CONSULTATION" /> */}
                {/* <div className="flex lg:flex-row flex-col gap-5 lg:p-0 p-10">
                    <Cards icons=<IoLogoAppleAr/>  title="1.Application" desc="Fill the application form."/>
                    <Cards icons=<IoLogoAppleAr/>  title="1.Application" desc="Fill the application form." />
                    <Cards icons=<IoLogoAppleAr/>  title="1.Application" desc="Fill the application form." />
                    <Cards icons=<IoLogoAppleAr/>  title="1.Application" desc="Fill the application form." /></div> */}

            </div>
            <Image src={Bannerimg} alt="digital marketing" className="w-screen lg:h-screen"/>

    </div>
)
}
