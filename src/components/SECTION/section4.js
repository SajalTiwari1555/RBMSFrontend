import { FaSearch } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { IoChatbubblesOutline } from "react-icons/io5";
import { MdAccountBalance } from "react-icons/md";
import { SlSocialYoutube } from "react-icons/sl";

export default function section4( params ) {
    return (
        <div className="flex flex-col gap-10 p-5 mb-10 w-screen text-white bg-transparent justify-center items-center">
            <div className="w-3/4 flex flex-col justify-center">
                <h1 className="flex justify-center lg:text-4xl font-bold text-white">Make Your Marketing Irresistible</h1>
                <p className="  flex justify-center font-semibold">Not only does our work look great, but it also performs great.
                    Whatever you need... we&apos;re here to help you get results.</p>
            </div>
            <div className="grid grid-cols-3 gap-5 lg:text-2xl lg:grid-cols-4 ">
                 <div className="flex justify-center  lg:p-3 gap-2 flex-col items-center">
                <FaSearch />
                <h1 className="lg:text-2xl">SEO</h1>
            </div>
                 <div className="flex justify-center  lg:p-3 gap-2 flex-col items-center">
                <SlSocialYoutube />
                <h1 className="lg:text-2xl">SMM </h1>
            </div>

                 <div className="flex justify-center  lg:p-3 gap-2 flex-col items-center">
                <IoChatbubblesOutline />
                <h1 className="lg:text-2xl">SOCIAL MEDIA ADS</h1>
            </div>

                 <div className="flex justify-center  lg:p-3 gap-2 flex-col items-center">
                <FaSearch />
                <h1 className="lg:text-2xl">SITE OPTIMIZATION</h1>
            </div>

                 <div className="flex justify-center  lg:p-3 gap-2 flex-col items-center">
                <MdAccountBalance />
                <h1 className="lg:text-2xl">ACCOUNTS</h1>
            </div>
                 <div className="flex justify-center  lg:p-3 gap-2 flex-col items-center">
                <FaSearch />
                <h1 className="lg:text-2xl">LANDING PAGES</h1>
            </div>
                 <div className="flex justify-center  lg:p-3 gap-2 flex-col items-center">
                <FaSearch />
                <h1 className="lg:text-2xl">CONTENT MARKETING</h1>
            </div>

           </div>
        </div>
    )
}
