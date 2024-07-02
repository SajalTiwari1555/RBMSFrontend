import Link from "next/link";

export default function Cards3({ icons, title, link, url }) {
  // Check if link is defined
  const isValidLink = link && typeof link === "string";

  return (
    <div className="lg:w-auto w-full">
      <div className="bg-white border relative rounded-2xl flex flex-col gap-5 justify-center lg:w-full w-full h-auto p-2">
          {/* Use Link only if link is a valid string */}
          {isValidLink ? (
            <div className=" text-orange-500 flex justify-center items-end  lg:text-xl font-semibold ">
                      <Link href={link}><img src={url} alt="" className="w-full h-full rounded-2xl" /></Link>
                      <div className="absolute bg-white hover:bg-orange-500 hover:text-white h-20 flex justify-center items-center  rounded-2xl lg:w-3/4 lg:ml-1 text-black  lg:mt-20 shadow-2xl">
                          <h1 className="font-semibold text-base">{title}</h1>
                      </div>
            </div>
          ) : (
            <span className="text-2xl font-bold">{title2}</span>
          )}

      </div>
    </div>
  );
}
