"use client";
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";

import Cards from "../../../../components/assets/cards/cards6"
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
        <div className="w-screen flex gap-5 justify-end mt-10">
            <div className="flex flex-col  p-10 gap-10">
                <h1 className="lg:text-5xl lg:w-3/4 text-blue-600 ml-20">Marketing Operations powered by Customer Generation.</h1>
                <p className="lg:text-xl lg:w-3/4 ml-20">Every player in the Banking and Financial Services Industry needs a thorough digital marketing plan. With our expertise and experience, we offer the following top-notch digital services:</p>
<div className="scroll-buttons flex justify-center items-center gap-5 p-10">
  {scrollPosition > 0 && (
    <button
      onClick={handleScrollLeft}
      className="bg-gray-200 p-2 rounded-full focus:outline-none"
    >
      <GoArrowLeft className="lg:text-4xl text-blue-600" />
    </button>
  )}
  {containerRef.current && scrollPosition < containerRef.current.scrollWidth - containerRef.current.clientWidth && (
    <button
      onClick={handleScrollRight}
      className="bg-gray-200 p-2 rounded-full focus:outline-none"
    >
      <GoArrowRight className="lg:text-4xl text-blue-600" />
    </button>
  )}
</div>
            </div>

            <div className=" justify-end">
                <div className="lg:h-screen  overflow-y-scroll " ref={containerRef}>
                    <div className="flex flex-col lg:h-screen overflow-y-scroll">
              <Cards title="Offline Conversion Tracking"
                         desc="Optimize paid campaigns with complete attribution data and drive more pipeline, not form fills."

                            link="/services/DESIGN-&-DEVELOPMENT/WORDPRESS_WEBSITE_DEVELOPMENT"
                        />
              <Cards1 title=" Lifecycle Design"
                desc="Map the precise lifecycle of your ICP to inform strategy, budget, and maximize LTV:CAC. Identify lifecycle leaks across processes, data, and technology to foolproof your pipeline."

                            link="/services/DESIGN-&-DEVELOPMENT/WEBSITE_DESIGN_SERVICES"

                        />
              <Cards title="Marketing Automation Platform (MAP) Audit and Optimization "
                desc="Set up your MAP for optimal usability and data accuracy to unite your marketing and sales teams."

                            link="/services"
                        />

              <Cards1 title=" Lead Scoring "
                desc="Build out a comprehensive lead scoring model to ensure your leads are routed accurately in key moments at the right time."
                                link="/services"


                        />
              <Cards title="Lead Routing"
                desc="Ensure that your leads are effectively routed to your sales team with built-out processes and refinements."

                        />
              <Cards1 title=" Pipeline Nurture and Email Campaigns"
                desc="Support the execution, planning, and optimization of nurture and email campaigns within your MAP."


                        />
                    </div>

                </div>

            </div>
        </div>
    )
}
