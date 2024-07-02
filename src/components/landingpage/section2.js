import Link from "next/link";
import Cards from "../assets/cards/cards"
import { FaRocket } from "react-icons/fa";


export default function section2() {
  return (
    <div className="h-auto  flex flex-col lg:p-20 justify-center items-center">
      <div className=" flex w-3/4  gap-2">
          <div className="relative hover:bg-blue-600 hover:text-white lg:h-44 flex flex-col ">
            <div className="bg-gray-200 flex justify-start items-start lg:w-20 lg:h-20 ">
              <div className="bg-blue-600 lg:h-24 lg:-ml-4 lg:-mt-8 lg:w-1"></div>
              <div className="bg-blue-600 lg:h-24 lg:-ml-4 lg:w-1"></div>
              <h1 className=" lg:text-6xl lg:font-semibold lg:-mt-5 lg:-ml-5">01</h1>

            </div>
            <div className=" flex flex-col lg:-mt-5">
              <h1 className="lg:text-2xl font-semibold">Startup India</h1>
              <p className="lg:w-3/4">
Get Your Startup Recognized By the Government of India.
              </p>
              <Link href="/accounts" >Get started</Link>
            </div>
          </div>
          <div className=" flex lg:mt-14 flex-col ">
            <div className="bg-gray-200 flex justify-start items-start lg:w-20 lg:h-20 ">
              <div className="bg-blue-600 lg:h-24 lg:-ml-4 lg:-mt-8 lg:w-1"></div>
              <div className="bg-blue-600 lg:h-24 lg:-ml-4 lg:w-1"></div>
              <h1 className=" lg:text-6xl lg:font-semibold text-black lg:-mt-5 lg:-ml-5">01</h1>

            </div>
            <div className=" flex flex-col lg:-mt-5">
              <h1 className="lg:text-2xl font-semibold">Private Company</h1>
              <p className="lg:w-3/4">
Get Your Startup Recognized By the Government of India.
              </p>
              <Link href="/accounts" >Get started</Link>
            </div>
          </div>
          <div className=" flex lg:mt-32 flex-col ">
            <div className="bg-gray-200 flex justify-start items-start lg:w-20 lg:h-20 ">
              <div className="bg-blue-600 lg:h-24 lg:-ml-4 lg:-mt-8 lg:w-1"></div>
              <div className="bg-blue-600 lg:h-24 lg:-ml-4 lg:w-1"></div>
              <h1 className=" lg:text-6xl lg:font-semibold lg:-mt-5 lg:-ml-5">01</h1>

            </div>
            <div className=" flex flex-col lg:-mt-5">
              <h1 className="lg:text-2xl font-semibold">GST Registration</h1>
              <p className="lg:w-3/4">
Get Your Startup Recognized By the Government of India.
              </p>
              <Link href="/accounts" >Get started</Link>
            </div>
          </div>
        </div>
      <div className=" flex w-3/4  gap-2">
          <div className="relative flex flex-col ">
            <div className="bg-gray-200 flex justify-start items-start lg:w-20 lg:h-20 ">
              <div className="bg-blue-600 lg:h-24 lg:-ml-4 lg:-mt-8 lg:w-1"></div>
              <div className="bg-blue-600 lg:h-24 lg:-ml-4 lg:w-1"></div>
              <h1 className=" lg:text-6xl lg:font-semibold lg:-mt-5 lg:-ml-5">01</h1>

            </div>
            <div className=" flex flex-col lg:-mt-5">
              <h1 className="lg:text-2xl font-semibold">LLP Registration</h1>
              <p className="lg:w-3/4">
Get Your Startup Recognized By the Government of India.
              </p>
              <Link href="/accounts" >Get started</Link>
            </div>
          </div>
          <div className=" flex lg:mt-14 flex-col ">
            <div className="bg-gray-200 flex justify-start items-start lg:w-20 lg:h-20 ">
              <div className="bg-blue-600 lg:h-24 lg:-ml-4 lg:-mt-8 lg:w-1"></div>
              <div className="bg-blue-600 lg:h-24 lg:-ml-4 lg:w-1"></div>
              <h1 className=" lg:text-6xl lg:font-semibold lg:-mt-5 lg:-ml-5">01</h1>

            </div>
            <div className=" flex flex-col lg:-mt-5">
              <h1 className="lg:text-2xl font-semibold">Startup India</h1>
              <p className="lg:w-3/4">
Get Your Startup Recognized By the Government of India.
              </p>
              <Link href="/accounts" >Get started</Link>
            </div>
          </div>
          <div className=" flex lg:mt-32 flex-col ">
            <div className="bg-gray-200 flex justify-start items-start lg:w-20 lg:h-20 ">
              <div className="bg-blue-600 lg:h-24 lg:-ml-4 lg:-mt-8 lg:w-1"></div>
              <div className="bg-blue-600 lg:h-24 lg:-ml-4 lg:w-1"></div>
              <h1 className=" lg:text-6xl lg:font-semibold lg:-mt-5 lg:-ml-5">01</h1>

            </div>
            <div className=" flex flex-col lg:-mt-5">
              <h1 className="lg:text-2xl font-semibold">Startup India</h1>
              <p className="lg:w-3/4">
Get Your Startup Recognized By the Government of India.
              </p>
              <Link href="/accounts" >Get started</Link>
            </div>
          </div>
        </div>
   </div>
  )
}
