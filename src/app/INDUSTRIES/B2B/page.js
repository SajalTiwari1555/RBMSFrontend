import Navbar from "@/components/navbar/mainnav";
import Footer from "@/components/footer/footer";
import Banner from "../../../components/assets/Banner/Banner3"
// import img from "../../../assets/"
import Faq from "../../../components/faq/faq"
import Section from "./sections/section1"
import Section1 from "./sections/section2"

export default function SEO() {
    return (
        <div className="flex flex-col ">
            <Navbar />
            <Banner heading="Turn your marketing operations into a revenue-generating machine"
                desc="ake command of your marketing data, tech stack, and processes to achieve sustained, efficient growth with our Marketing Operations Agency."
            Mainh="INDUSTRIES / B2B"
            />
            <Section1/>
            <Section/>
            <Faq/>
            <Footer />
        </div>
    );
}
