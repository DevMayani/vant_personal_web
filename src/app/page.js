import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import SectionOne from "@/components/sectionOne";
import SectionTwo from "@/components/sectionTwo";
import SectionThree from "@/components/sectionThree";
import Image from "next/image";
import Faq from "@/components/faq";
import SectionFour from "@/components/sectionFour";
import SectionFive from "@/components/sectionFive";
import SectionSix from "@/components/sectionSix";
import Blog from "@/components/blog";

export default function Home() {

  return (
   <div>
    <Navbar />
    <SectionOne />
    <SectionTwo />
    <SectionThree />
    <SectionFour />
    <SectionFive />
    <SectionSix />
    <Blog />
    <Faq />
    <Footer />
   </div>
  );
}
