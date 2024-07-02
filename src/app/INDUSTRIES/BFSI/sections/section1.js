"use client";
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";

import Cards from "../../../../components/assets/cards/cards4"
import Cards1 from "../../../../components/assets/cards/cards5"
import { SiChatbot } from "react-icons/si";
import { useEffect, useRef, useState } from 'react';

export default function Section4() {
   const containerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        setScrollPosition(containerRef.current.scrollLeft);
      }
    };

    if (containerRef.current) {
      containerRef.current.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const handleScrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= 100; // Adjust the scroll left distance as needed
    }
  };

  const handleScrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 100; // Adjust the scroll right distance as needed
    }
  };

    return (
        <div className="w-screen flex flex-col gap-5 justify-end mt-10">
            <div className="flex p-10 gap-3">
                <h1 className="lg:text-5xl lg:w-1/2 text-blue-600 ml-20">Our Digital Marketing Services For Banking, Financial Services and Insurance (BFSI) Industry</h1>
                <p className="lg:text-xl lg:w-1/2 ml-20">Every player in the Banking and Financial Services Industry needs a thorough digital marketing plan. With our expertise and experience, we offer the following top-notch digital services:</p>

            </div>
            <div className="scroll-buttons flex justify-end gap-5 p-10">
        {scrollPosition > 0 && (
          <button onClick={handleScrollLeft}> <GoArrowLeft className="lg:text-4xl  bg-gray-200 text-blue-600"/></button>
        )}
        {containerRef.current && scrollPosition < containerRef.current.scrollWidth - containerRef.current.clientWidth && (
          <button onClick={handleScrollRight}> <GoArrowRight className="lg:text-4xl  bg-gray-200 text-blue-600"/></button>
        )}
      </div>
            <div className="flex justify-end">
                <div className="lg:h-2xl grid overflow-x-scroll grid-cols-3" ref={containerRef}>
                    <div className="flex">
                        <Cards title="SEO SERVICES"
                            icon=<SiChatbot />
                            link="/services/DESIGN-&-DEVELOPMENT/WORDPRESS_WEBSITE_DEVELOPMENT"
                        />
                        <Cards1 title=" PPC MARKETING "
                            icon=<SiChatbot />
                            link="/services/DESIGN-&-DEVELOPMENT/WEBSITE_DESIGN_SERVICES"

                        />
                        <Cards title="B2B LEADS GENERATION "
                            icon=<SiChatbot />
                            link="/services"
                        />

                        <Cards1 title=" ACCOUNT BASED MARKETING "
                            icon=<SiChatbot />


                        />
                        <Cards title="CONTENT MARKETING"
                            icon=<SiChatbot />
                        />
                        <Cards1 title=" ACCOUNTS"
                            icon=<SiChatbot />

                        />
                    </div>

                </div>

            </div>
        </div>
    )
}
