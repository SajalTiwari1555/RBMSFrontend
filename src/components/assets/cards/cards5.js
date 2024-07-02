import Link from "next/link";


export default function cards4( { title, icon, link,desc  } ) {
      const isValidLink = link && typeof link === "string";

    return (
        <div>
            <div className="lg:w-96 hover:bg-blue-600 hover:text-white bg-blue-50 text-blue-600 lg:h-96 lg:p-10 gap-10 flex flex-col">
                <div className="lg:text-6xl">
                    {icon}
                </div>

          <h1 className="text-4xl">{title}</h1>
            <p>{desc}</p>
                {isValidLink ? (
            <div className="  flex items-center lg:text-2xl  ">
              <Link href={link}>view more--</Link>
            </div>
          ) : (
            <span className="text-2xl ">view more--</span>
          )}
            </div>
        </div>
    )
}
