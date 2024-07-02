import Image from "next/image"
import Button from "../Buttons/button3"

export default function Banner( {heading, desc,img, Mainh } ) {
    return (
    <div className=" h-96 bg-blue-600 w-screen  text-white  lg:p-10">

            <div className=" z-10  text-white flex flex-col gap-4  ">
                    <h1 className="text-orange-600 ">{Mainh} </h1>
                <h1 className="lg:text-5xl font-semibold w-3/4">

                    {heading}

                </h1>
                <p className="lg:text-xl font-normal  w-3/4">{desc}</p>
                <Button title={"ENQUIRE NOW"} />  </div>

    </div>
)
}
