import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Cards2({ icons, title, desc, title2, link }) {
  // Check if link is defined
  const isValidLink = link && typeof link === "string";

  return (
    <div className="lg:w-auto w-full">
      <div className="bg-white border relative rounded-3xl flex flex-col gap-5 justify-center lg:w-full w-full h-auto p-8">
        <div className="text-5xl z-10 text-orange-500 font-bold">{icons}</div>
        <div className="z-10 flex flex-col text-black font-semibold">
          <h1 className="z-10 flex flex-row text-black lg:text-xl font-semibold">
            {title}
          </h1>
                  <p>{desc}</p>
        </div>
          {/* Use Link only if link is a valid string */}
          {isValidLink ? (
            <div className=" text-orange-500 flex items-center lg:text-xl font-semibold ">
              <Link href={link}>{title2}</Link><IoIosArrowRoundForward/>
            </div>
          ) : (
            <span className="text-2xl font-bold">{title2}</span>
          )}

      </div>
    </div>
  );
}
