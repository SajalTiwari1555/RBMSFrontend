import Cards from "../../../components/assets/cards/cards4"
import Cards1 from "../../../components/assets/cards/cards5"
import { SiChatbot } from "react-icons/si";

export default function Section4() {
    return (
        <div className="w-screen flex flex-col gap-5 justify-end mt-10">
            <div className="flex p-10 gap-3">
                <h1 className="lg:text-5xl lg:w-1/2 text-blue-600 ml-20">A Results-Driven Digital Marketing Agency</h1>
                <p className="lg:text-xl lg:w-1/2 ml-20">We specialize in helping businesses enhance their online presence and connect effectively with their target audience, and with our range of services, we help businesses achieve these goals.</p>

            </div>
            <div className="flex justify-end">
                <div className="lg:h-2xl flex flex-col">
                    <div className="flex">
                        <Cards title="WORDPRESS DEVELOPMENT"
                            icon=<SiChatbot />
                            link="/services/DESIGN-&-DEVELOPMENT/WORDPRESS_WEBSITE_DEVELOPMENT"
                        />
                        <Cards1 title=" WEBSITE DEVELOPMENT "
                            icon=<SiChatbot />
                             link="/services/DESIGN-&-DEVELOPMENT/WEBSITE_DESIGN_SERVICES"

                        />
                        <Cards title="Digital Marketing "
                            icon=<SiChatbot />
                               link="/services"
                        />
                    </div>
                    <div className="flex">
                        <Cards1 title=" SEO "
                            icon=<SiChatbot />


                        />
                        <Cards title="SMM"
                            icon=<SiChatbot />
                        />
                        <Cards1 title=" ACCOUNTS"
                            icon=<SiChatbot />

                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
