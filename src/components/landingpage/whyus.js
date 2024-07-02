import Cards2 from "../assets/cards/cards2"


export default function why( params ) {
    return (
        <div className="flex flex-col w-screen gap-10 justify-center p-20">
            <h1 className="flex lg:text-5xl font-bold justify-center">
                Why People Choose <span className="text-blue-600"> Our Services ?</span>
            </h1>
           <div className="flex justify-center gap-10"> <div className="flex flex-col gap-4 justify-center">
                <Cards2
                    title="Free Legal Advice"
                    desc="We provide free of cost consultation and legal advice to our clients."
                />
                <Cards2
                    title="Free Legal Advice"
                    desc="We provide free of cost consultation and legal advice to our clients."
                />
            </div>
            <div>
                <img src="https://images.unsplash.com/photo-1606746448655-6d7d999ebf31?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8" alt="" className=" mix-blend-burn" />
            </div>
              <div className="flex flex-col gap-4 justify-center">
                <Cards2
                    title="Free Legal Advice"
                    desc="We provide free of cost consultation and legal advice to our clients."
                />
                <Cards2
                    title="Free Legal Advice"
                    desc="We provide free of cost consultation and legal advice to our clients."
                />
                </div>

            </div>
              <div className="flex gap-4 justify-center">
                <Cards2
                    title="Free Legal Advice"
                    desc="We provide free of cost consultation and legal advice to our clients."
                />
                <Cards2
                    title="Free Legal Advice"
                    desc="We provide free of cost consultation and legal advice to our clients."
                />
            </div>
        </div>
    )
}
