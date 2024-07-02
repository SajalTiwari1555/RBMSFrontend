import Image from "next/image"
import SEOIMG from "../../assets/seo.jpg"
import SEOIMG1 from "../../assets/seo1.jpg"
import { FcElectricity } from "react-icons/fc";

export default function section1() {
    return (
        <div className="flex relative  flex-col bg-white  justify-center w-screen overflow-hidden h-auto lg:pb-2 ">
           <div> <h1 className="lg:text-5xl lg:p-10 text-xl text-blue-600 font-bold flex justify-center">We&apos;re not your typical “Digital Marketing agency”</h1>
            <p className="flex justify-center text-base">Why choose RBMS for your SEO needs? Here are three compelling reasons:</p>
            </div>
            <div className=" flex  justify-center lg:p-10">
                <div className=" grid grid-flow-row h-1/2 gap-10 overflow-hidden grid-cols-1 lg:grid-cols-2">
                <div className="relative">
                <Image src={SEOIMG} alt="digital marketing agency" className="h-3/4 z-5 rounded-full" />
                <div className=" border-2 border-orange-500 absolute top-1 rounded-full lg:w-72 -z-10 lg:h-96"></div>
                <div className=" border-2 border-orange-500 rotate-90 absolute top-10 left-52 rounded-full lg:w-72 -z-10 lg:h-96"></div>
                </div>
                <div className="flex flex-col gap-5">
                    <h1 className="lg:text-4xl text-xl font-semibold text-blue-600">360° Digital Marketing Services</h1>
                    <p>SEO is one of the most complicated digital marketing channels because of the diverse set of skills needed to conduct keyword research, create content, investigate technical SEO issues, and build backlinks.</p>
                    <p>
                        Our team of analysts, writers, strategists, developers, and creatives allow us to break through whatever barriers have kept you from the rankings you want.</p>
                    <ul className="ml-10">
                        <li className=" flex gap-2"><FcElectricity className="-rotate-90"/> SEO strategy / website audits</li>
                        <li className=" flex gap-2"><FcElectricity className="-rotate-90"/>Keyword / competitor research</li>
                       <li className=" flex gap-2"><FcElectricity className="-rotate-90"/>Information architecture</li>
                       <li className=" flex gap-2"><FcElectricity className="-rotate-90"/>New Content strategy and creation</li>
                       <li className=" flex gap-2"><FcElectricity className="-rotate-90"/>Existing Content optimization</li>
                       <li className=" flex gap-2"><FcElectricity className="-rotate-90"/>Off-site promotion / link acquisition</li>
                       <li className=" flex gap-2"><FcElectricity className="-rotate-90"/>International SEO</li>
                       <li className=" flex gap-2"><FcElectricity className="-rotate-90"/>Technical SEO</li>
                    </ul>
                </div>
            </div>

            </div>
            <div className=" bg-blue-600 lg:p-10 h-screen  text-white grid  gap-10 overflow-hidden grid-cols-1 lg:grid-cols-2">

                <div className="flex flex-col  lg:mt-20 gap-5">
                    <h1 className="lg:text-4xl text-xl font-semibold ">Drive Business Growth, Not Just Traffic Growth</h1>
                    <p>We take the time to deeply understand your business and your target audience. This knowledge allows us to identify the topics and keywords that are most likely to generate business opportunities for you.</p>
                    <p>
                       Our approach to SEO is centered around delivering results that matter to your bottom line. We constantly monitor and measure the impact of our strategies, providing you with comprehensive reporting and analytics. This allows you to track the performance of your SEO campaigns, understand the business opportunities they generate, and make informed decisions to drive continuous growth.</p>

                </div>
                 <div className="relative ">
                <Image src={SEOIMG1} alt="digital marketing agency" className="h-3/4 z-5 rounded-full" />
                <div className=" border-2 border-orange-500 absolute top-1 rounded-full lg:w-72 -z-10 lg:h-96"></div>
                <div className=" border-2 border-orange-500 rotate-90 absolute top-10 left-52 rounded-full lg:w-72 -z-10 lg:h-96"></div>
                </div>
            </div>
        </div>
    )
}
