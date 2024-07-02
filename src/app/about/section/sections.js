import Link from "next/link"

export default function section1(params) {
    return (
        <div className=" h-screen bg-blue-50  p-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div className="text-blue-700 border-t pt-20 flex flex-col gap-10 border-blue-800 ">
                    <h1 className="lg:text-5xl text-3xl">Take your Business to the next level with our digital marketing solutions. Rahil Business Multiple Solution</h1>
                    <Link href="/" className="border border-blue-800 w-44 flex hover:bg-blue-800 hover:text-white  justify-center p-4">
                        Meet The Team
                    </Link>
                </div>
                <div className=" lg:text-2xl flex items-center justify-center">
                <h1>We&apos;re a team of passionate problem-solvers and out-of-the-box technical thinkers. Our objective? To take as much complexity off of our partner&apos;s plates and make their WordPress websites perform for their business.</h1>
                </div>
            </div>
        </div>
    )
}
