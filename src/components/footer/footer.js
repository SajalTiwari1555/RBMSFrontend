import Link from "next/link";
import { IoLogoInstagram } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { SlEarphonesAlt } from "react-icons/sl";
import "../SECTION/Section.css";
export default function Footer() {
    return (
        <div className=" bg-blue-600 h-auto flex text-white flex-col gap-10 p-5">
            <div className="lg:h-3/4   p-20 gap-20 flex">
                <div className="w-1/2 flex gap-20 flex-col ">
                    <h1 className="lg:text-5xl font-normal ">  We help your website and business stay ahead of the curve.</h1>
                    <Link href="/contact" className=" border-white border w-32  hover:rounded-3xl hover:bg-white hover:text-blue-600  hover:font-bold p-4 flex justify-center">Contact us </Link>
               </div>
                <SlEarphonesAlt className="sicons2"/>

            </div>
            <div className="flex lg:flex-row flex-col  justify-center items-center gap-20">
                <div className="flex flex-col gap-4 ">
                    <h1 className="text-white">LOGO</h1>
                    <h1 className="text-white w-60 text-balance">We deliver transformational growth
                        for our clients through digital excellence</h1>
                </div>
                <div className="flex flex-col lg:flex-row gap-5">
                    <div className="flex flex-col gap-5      ">
                        <h1 className="text-white text-xl">Company</h1>
                        <div className="flex flex-col">
                             <Link href="" className=" text-sm ">ABOUT US </Link>
                        <Link href="" className=" text-sm ">VISION AND MISSION </Link>
                        <Link href="" className=" text-sm ">PORTFOLIO </Link>
                        <Link href="" className=" text-sm ">CONTACT US </Link>
                        <Link href="" className=" text-sm ">PRIVACY & POLICY </Link>
                       </div>
                    </div>
                    <div className="flex flex-col    gap-5   ">
                        <h1 className="text-white text-xl">Our Services</h1>
                        <div className="flex flex-col ">
                        <Link href="" className=" text-sm ">Digital Marketing Services</Link>
                        <Link href="" className=" text-sm ">SEO Services</Link>
                        <Link href="" className=" text-sm ">App Store Optimization</Link>
                        <Link href="" className=" text-sm ">Website Designing & Development </Link>
                        <Link href="" className=" text-sm ">Content Marketing</Link>
                        <Link href="" className=" text-sm ">Paid Marketing</Link>
                        <Link href="" className=" text-sm ">Online Reputation Management</Link></div>
                    </div>
                    <div className="flex flex-col   gap-5    ">
                        <h1 className="text-white text-xl">
                            Industries</h1>
                        <div className="flex flex-col">
                        <Link href="" className=" text-sm ">ABOUT US </Link>
                        <Link href="" className=" text-sm ">B2B </Link>
                        <Link href="" className=" text-sm ">Healthcare </Link>
                        <Link href="" className=" text-sm ">Education </Link>
                        <Link href="" className=" text-sm ">E-commerce</Link>
                       </div>
                    </div>
                    <div className="flex flex-col       ">
                        <h1 className="text-white text-xl">Quick Links</h1>
                        <Link href="" className=" text-sm ">Blog</Link>
                        <Link href="" className=" text-sm ">Web Stories</Link>
                        <Link href="" className=" text-sm ">Case Studies</Link>
                        <Link href="" className=" text-sm ">Testimonials </Link>
                        <Link href="" className=" text-sm ">Digital Report Card </Link>
                        <Link href="" className=" text-sm ">Sitemap </Link>
                    </div>
                </div>

            </div>
            <div className="flex justify-center gap-10 lg:text-4xl text-xl items-center">
                <IoLogoInstagram className="rounded-3xl bg-white  text-blue-700 p-2" />
                <FaFacebookF className="rounded-3xl bg-white  text-white p-2" />
                <FaTwitter className="rounded-3xl bg-white  text-white p-2" />
            </div>
        </div>

    )
}
