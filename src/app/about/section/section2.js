import Link from "next/link"
import img from "../../../assets/PROFILE.jpg"
import Image from "next/image"
export default function section2(params) {
    return (
        <div className=" w-screen flex justify-center p-10 items-center">
            <div className="flex flex-col justify-center gap-10 items-center">
                <h1 className="lg:text-5xl text-3xl text-blue-700">
                    The RBMS Difference
                </h1>
                <div className="grid grid-cols-1 lg:grid-cols-3 w-3/4 justify-center items-center">

                    <div className="flex flex-col justify-center items-center">
                          <div className="relative ">
                            <div className=" absolute lg:w-64 lg:h-64 rounded-full -z-10 border border-blue-700 ">

                    </div>
                    <Image src={img} alt="rahil business multiple solution " className="rounded-full lg:w-60 lg:h-60"/>
                        </div>

                        <h1 className="flex lg:mt-5 text-blue-700 lg:text-2xl font-semibold justify-center">Client</h1>
                        <p className="w-3/4 text-center">I don&apos;t know how I would replace the value I&apos;m receiving from my RBMS team.</p>
                </div>
                    <div className="flex flex-col justify-center items-center">
                        <div className="relative ">
                            <div className=" absolute lg:w-64 lg:h-64 rounded-full -z-10 border border-blue-700 ">

                    </div>
                    <Image src={img} alt="rahil business multiple solution " className="rounded-full lg:w-60 lg:h-60"/>
                        </div>
                        <h1 className="flex lg:mt-5 text-blue-700 lg:text-2xl font-semibold justify-center">Employee
</h1>
                        <p className="w-3/4 text-center">I feel valued, engaged, and proud of the growth I am experiencing at RBMS.</p>
                </div>
                    <div className="flex flex-col justify-center items-center">
                          <div className="relative ">
                            <div className=" absolute lg:w-64 lg:h-64 rounded-full -z-10 border border-blue-700 ">

                    </div>
                    <Image src={img} alt="rahil business multiple solution " className="rounded-full lg:w-60 lg:h-60"/>
                        </div>

                        <h1 className="flex lg:mt-5 text-blue-700 lg:text-2xl font-semibold justify-center">Company</h1>
                        <p className="w-3/4 text-center">We are proud of the impact we create for our clients and employees and are growing in a sustainable way.</p>
                </div>
                </div>
            </div>
       </div>
    )
}
