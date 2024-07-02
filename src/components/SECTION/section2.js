import Image from "next/image"
import b2bimg from "../../assets/elements (1).png"
export default function section2( { } ) {


    return (
        <div className="flex flex-col  w-screen overflow-hidden bg-blue-600  gap-10  justify-center p-10 h-auto">
            <h1 className="lg:text-5xl text-3xl font-bold text-white  flex items-start justify-center">Who we’re built for</h1>
            <div className=" flex justify-center items-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5  lg:w-3/4 justify-center ">
                <div className=" flex relative overflow-hidden flex-col  rounded-2xl h-auto  bg-white p-10">
                    <h1 className="lg:text-3xl font-bold text-blue-600">B2Bs</h1>
                        <p>We don&apos;t just fill your site with irrelevant organic traffic. Get qualified visitors that convert into meetings on your sales team’s calendar, marketing-sourced pipeline and Closed Won revenue.</p>
                                                    <Image src={b2bimg} className="absolute h-full w-full rotate-45 -left-10"/>

                    <div className="border-l-2 relative flex flex-col gap-5 pl-5 border-blue-600">
                        <span className="lg:text-4xl text-blue-600">"</span>
                            <p>Just a quick note to thank you for the incredible work and partnership this year. We appreciate your expertise and input, and I look forward to continuing our relationship.</p>
                    </div>
                </div>
                <div className=" flex flex-col relative overflow-hidden rounded-2xl   bg-white p-10">
                    <h1 className="lg:text-3xl font-bold text-blue-600">High-ticket B2Cs</h1>
                        <p>Get more buyers visiting your website and on the phone with your sales team. Perfect for considered purchases with longer sales cycles, even in highly-regulated markets like housing, employment and credit.</p>
                           <Image src={b2bimg} className="absolute h-full w-full rotate-90 -left-10"/>
                    <div className="border-l-2 flex flex-col gap-5 pl-5 border-blue-600">
                        <span className="lg:text-4xl text-blue-600">"</span>
                        <p>Their talented team is extremely bright and knowledgeable about the latest in digital marketing. They are invested in building long-term relationships with their clients, and it shows. RBMS tops my list of high-performing digital marketing agencies, and I seize any moment when I can recommend them.</p>
                    </div>
                </div>

            </div>
            </div>
        </div>
    )
}
