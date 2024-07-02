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
            <Banner heading="Digital Marketing For Banking, Financial Services and Insurance (BFSI) Industry"
                desc="A trusted digital marketing partner for leading BFSI companies. Get seen, win trust and build your brand online with our expertise"
            Mainh="INDUSTRIES / BFSI"
            />
            <Section1/>
            <Section/>
            <Faq/>
            <Footer />
        </div>
    );
}
