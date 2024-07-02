import Footer from "@/components/footer/footer"
import Navbar from "@/components/navbar/mainnav"
import Banner from "../components/assets/Banner/Banner"
import Section2 from "../components/landingpage/section2"
import Why from "../components/landingpage/whyus"
import About from "../components/landingpage/About"
import Service from "../components/landingpage/services"
export default function App( params ) {
  return (
    <div>
      <Navbar />

      <Banner />
      <About/>
      <Section2/>
      <Why />
      <Service/>
      <Footer />
    </div>
  )
}
