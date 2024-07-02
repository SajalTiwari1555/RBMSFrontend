import Link from "next/link";


export default function cards4( { title, icon, link, desc, desc1, desc2 } ) {
      const isValidLink = link && typeof link === "string";

    return (
        <div>
            <div className="lg:w-96 hover:bg-black hover:text-white border-r border-b text-white lg:h-auto lg:p-4 gap-10 flex flex-col">
                <div className="lg:text-4xl">
                    {icon}
                </div>

          <h1 className="text-3xl">{title}</h1>
          <p className="text-sm">{desc}</p>
          <p className="text-sm">{desc1}</p>
          <p className="text-sm">{desc2}</p>
                {/* {isValidLink ? (
            <div className="  flex items-center lg:text-2xl  ">
              <Link href={link}>view more--</Link>
            </div>
          ) : (
            <span className="text-2xl ">view more--</span>
          )} */}
            </div>
        </div>
    )
}
