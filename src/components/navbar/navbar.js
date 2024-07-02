
import Link from "next/link";
import logo from "../../assets/RBMS logo.jpeg.jpg"
import "./main.css"
export default function Navbar() {
    return (
        <div className="z-50  flex flex-col bg-white">

            <div className="flex p-5 w-full  justify-between items-center  text-black dark">
                <div>
                    <h1>logo</h1>
                </div>

                <div className=" justify-between items-center gap-4 hidden lg:flex">

                    <nav>
                        <ul className="menus flex gap-5 w-full">
                            <li>
                                <Link href="/">Home</Link>
                            </li>

                            <li className="dropdown">
                                <a href="#" className="links">Company</a>
                                <div className="dropdown-content flex flex-col gap-5 p-5 w-full">
                                    <Link href="/services/service1" className=" w-full">About us</Link>
                                    <br/>
                                    <Link href="company/vision&mission" className=" flex w-full">Vision & Mission</Link>
                                    <br/>
                                    <Link href="/services/service3" className=" w-full"> </Link>
                                </div>
                            </li>
                            <li className="dropdown">
                                <a href="#" className="links">Services</a>
                                <div className="dropdown-content flex flex-col">
                                    <Link href="/services/service1" className=" w-full">Service 1</Link>
                                    <Link href="/services/service2" className=" w-full">Service 2</Link>
                                    <Link href="/services/service3" className=" w-full">Service 3</Link>
                                </div>
                            </li>
                            <li className="dropdown">
                                <a href="#" className="links">Services</a>
                                <div className="dropdown-content flex flex-col">
                                    <Link href="/services/service1" className=" w-full">Service 1</Link>
                                    <Link href="/services/service2" className=" w-full">Service 2</Link>
                                    <Link href="/services/service3" className=" w-full">Service 3</Link>
                                </div>
                            </li>
                            <li className="dropdown">
                                <a href="#" className="links">Services</a>
                                <div className="dropdown-content flex flex-col">
                                    <Link href="/services/service11" className=" w-full">Service 1</Link>
                                    <Link href="/services/service2" className=" w-full">Service 2</Link>
                                    <Link href="/services/service3" className=" w-full">Service 3</Link>
                                </div>
                            </li>

                        </ul>


                    </nav>

                </div>
            </div>

        </div>
    )
}
