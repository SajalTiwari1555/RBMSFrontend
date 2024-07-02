// Navbar.js
"use client";
// Navbar.js
import logo from "../../assets/RBMS logo.jpeg.jpg"
import { useState } from 'react';
import Link from 'next/link';
import Logo from "../../assets/logo.png"
import "./main.css"
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  const [ isMenuOpen, setIsMenuOpen ] = useState( false );

  const toggleMenu = () => {
    setIsMenuOpen( !isMenuOpen );
  };

  return (
    <nav className="text-white relative z-50 w-screen">
      <div>

      </div>
      <div className={`menu-toggle ${ isMenuOpen ? 'open' : '' }`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`menu ${ isMenuOpen ? 'open' : '' }`}>
        <div className="flex gap-20 bg-black/50 fixed w-screen justify-between pl-4 pr-10  p-4">
          <Link href="/">
            Logo
            {/* <Image src={Logo} alt="rahil business multiple solution" className="w-10" /> */}
          </Link>
          <div className="flex gap-4 items-center  ">
            <li>
              <Link className="hover:underline hover:text-orange-600"  href="/">HOME</Link>
            </li>
            <li className="dropdown">
              <Link href="/about" className="flex items-center hover:underline hover:text-orange-600  gap-1">ABOUT US  </Link>
              {/* <div className="dropdown-content z-50">
                <div className="flex gap-10">
                  <div className="flex gap-2 flex-col">
                    <Link className="hover:underline"  href="/company/vision&mission">Vision & mission</Link>

                    <Link className="hover:underline"  href="/company/Team">Team </Link>
                    <Link className="hover:underline"  href="/company/CAREERS">CAREERS</Link>
                    <Link className="hover:underline"  href="/company/Blogs">BLOGS</Link>
                  </div>

                </div>
              </div> */}
            </li>
            <li className="dropdown">
              <a  href="#" className="flex items-center gap-1 hover:text-orange-600 hover:underline" >INDUSTRIES <IoIosArrowDown className="text-red-500"/></a>
              <div className="dropdown-content ">
                <div className="flex gap-10">
                  <div className="flex gap-2 flex-col">
                    <Link className="hover:underline"  href="/INDUSTRIES/BFSI">BFSI</Link>

                    <Link className="hover:underline"  href="/INDUSTRIES/B2B">B2B</Link>
                    <Link className="hover:underline"  href="/INDUSTRIES/HEALTHCARE">HEALTHCARE  </Link>
                    <Link className="hover:underline"  href="/INDUSTRIES/EDUCATION">EDUCATION   </Link>
                  </div>

                </div>
              </div>
            </li>
            <li className="dropdown">
              <a  href="#" className="flex items-center hover:underline hover:text-orange-600  gap-1">SERVICES <IoIosArrowDown className="text-red-500"/></a>
              <div className="dropdown-content ">
                <div className="flex gap-10">
                  <div className="flex gap-2 flex-col">
                    <Link className="hover:underline"  href="/services" >DIGITAL MARKETING </Link>

                    <Link className="hover:underline"  href="/INDUSTRIES/B2B">WEBSITE DEVELOPMENT </Link>
                    <Link className="hover:underline"  href="/INDUSTRIES/HEALTHCARE">ACCOUNTS SERVICES  </Link>
                  </div>

                </div>
              </div>
            </li>
           <Link className="hover:underline hover:text-orange-600"  href="/BLOGS">BLOGS</Link>

          </div>
            <Link  href="/contact" className="flex hover:underline  items-center border border-blue-700 p-3 hover:bg-blue-600 hover:text-white">CONTACT</Link>
        </div>
      </ul>
  {/* <ul className={`menu ${ isMenuOpen ? 'open' : '' }`}>
        <div className="flex gap-20 bg-white justify-center  p-4">

          <div className="flex gap-4 bg-white ">

            <li className="dropdown">
              <a href="#">SEO</a>
              <div className="dropdown-content ">
                <div className="flex gap-10">
                  <div className="flex gap-2 flex-col">
                    <Link href="/services/SEO/seoservices">SEO SERVICES</Link>

                    <Link href="/services/SEO/ENTERPRISE-SEO">ENTERPRISE SEO  </Link>
                    <Link href="/services/SEO/E-COMMERCE-SEO">E-COMMERCE SEO</Link>
                    <Link href="/services/SEO/LOCAL-SEO">LOCAL SEO</Link>
                    <Link href="/services/SEO/SEO-RESELLER-SERVICES">SEO RESELLER SERVICES</Link>
                  </div>

                </div>
              </div>
            </li>

            <li className="dropdown">
              <a href="#">CONTENT MARKETING </a>
              <div className="dropdown-content ">
                <div className="flex gap-10">
                  <div className="flex gap-2 flex-col">
                    <Link href="/services/CONTENT-MARKETING/END_TO_END_CONTENT_MARKETING">END TO END CONTENT MARKETING </Link>

                    <Link href="/services/CONTENT-MARKETING/GUEST_POSTING">GUEST POSTING </Link>
                    <Link href="/services/CONTENT-MARKETING/QUORA_MARKETING">QUORA MARKETING  </Link>
                    <Link href="/services/CONTENT-MARKETING/DIGITAL_MARKETING">DIGITAL MARKETING   </Link>
                  </div>

                </div>
              </div>
            </li>
            <li className="dropdown">
              <a href="#">PAID MARKETING </a>
              <div className="dropdown-content ">
                <div className="flex gap-10">
                  <div className="flex gap-2 flex-col">
                    <Link href="/services/PAID-MARKETING/PPC-SERVICES">PPC SERVICES</Link>

                    <Link href="/services/PAID-MARKETING/RE-MARKETING -SERVICES">RE-MARKETING  SERVICES </Link>
                    <Link href="/services/PAID-MARKETING/MOBILE-ADVERTISEMENT">MOBILE ADVERTISEMENT  </Link>
                    <Link href="/services/PAID-MARKETING/AMAZON-ADS">AMAZON ADS   </Link>
                    <Link href="/services/PAID-MARKETING/PPX-RESELLER-SERVICES">PPX RESELLER SERVICES   </Link>
                  </div>

                </div>
              </div>
            </li>
            <li className="dropdown">
              <a href="#">DESIGN & DEVELOPMENT  </a>
              <div className="dropdown-content ">
                <div className="flex gap-10">
                  <div className="flex gap-2 flex-col">
                    <Link href="/services/DESIGN-&-DEVELOPMENT/WEBSITE_DESIGN_SERVICES">WEBSITE DESIGN SERVICES</Link>

                    <Link href="/services/DESIGN-&-DEVELOPMENT/MOBILE_WEBSITE_DESIGN">MOBILE WEBSITE DESIGN  </Link>
                    <Link href="/services/DESIGN-&-DEVELOPMENT/E-COMMERCE_WEBSITE_DESIGN">E-COMMERCE WEBSITE DESIGN   </Link>
                    <Link href="/services/DESIGN-&-DEVELOPMENT/WORDPRESS_WEBSITE_DEVELOPMENT">WORDPRESS WEBSITE DEVELOPMENT  </Link>
                  </div>

                </div>
              </div>
            </li>
          </div>
        </div>
      </ul> */}

    </nav>
  );
};

export default Navbar;
