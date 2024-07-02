import About from "./about"
import Navbar from "@/components/navbar/mainnav"
import Footer from "@/components/footer/footer"
import Banner from "../../components/assets/Banner/Banner3"
import img from "../../assets/banner.jpg"
import Section from "./section/sections"
import Section2 from "./section/section2"
import Section4 from "./section/section4"

export default function Page() {
    return (
        <div>
            <Navbar />
             <Banner heading="WIN WITH A TEAM YOU
WANT TO WORK WITH"
                desc="Rahil Business Multiple Solution is a data-driven digital marketing agency in uttarpradesh. Our customized campaigns deliver measurable results, free of jargon. We pride ourselves on professionalism and excellence."
                img={img}
                Mainh="ABOUT US "
            />
            <Section />
            <Section4/>

            <Section2/>
            <Footer />
        </div>
    )
}
