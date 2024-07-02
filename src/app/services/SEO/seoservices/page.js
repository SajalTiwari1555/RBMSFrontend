import Navbar from "@/components/navbar/mainnav";
import Footer from "@/components/footer/footer";
import Banner from "@/components/assets/Banner/banner2";
export default function SEO() {
    return (
        <div className="flex flex-col ">
            {/* <Navbar /> */}
            <Navbar />
            <Banner heading="Your Dedicated Seo Expert Just a Click Away!"
                desc=""
                btn=""
            />
            <Footer />
            {/* <Footer /> */}
        </div>
    );
}
