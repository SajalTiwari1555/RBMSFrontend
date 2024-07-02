import Link from "next/link"
import Button from "../../components/assets/Buttons/button2"
import { FcWorkflow } from "react-icons/fc";
import "./Section.css"
import img from "../../assets/elements.png"
import Image from "next/image";
export default function section3() {
    return (
        <div className=" w-screen h-screen relative overflow-hidden bg-black flex justify-center p-20">
               <Image src={img} className=" absolute w-screen" />
            <div className='w-3/4 relative  bg-white rounded-3xl flex lg:flex-row flex-col gap-5 p-10'>

                <div className='  rounded-2xl flex flex-col gap-5 '>

                    <h1 className="lg:text-4xl text-3xl font-bold ">How to get started</h1>
                    <p className=" font-bold -mt-5">In a 30 minute call we&apos;ll use your own data to:</p>
                    <ul className="ml-3">
                        <li>Show you how your SEO efforts are working  for FREE</li>
                        <li>
                            Identify the 20% of SEO activities that will drive the biggest business results </li>
                        <li>Definitively state if we can make a significant impact in your SEO performance</li>
                    </ul>
                    <p>If your website is doing better than our baseline we&apos;ll simply congratulate you. If it doesn&apos;t, we&apos;ll discuss what step 2 should look like.</p>
                    <Link href="#" className="">
                        <Button title="Get a free live audit" />
                    </Link>
                </div>
                <div className="flex items-center">
                    <FcWorkflow className="sicons" />
                </div>
            </div>


        </div>
    )
}
