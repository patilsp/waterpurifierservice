import Link from "next/link";
import Banner from "@/components/banner";
import Hero from "@/components/hero";
import Pricing from "@/components/Pricing";
import { Footer } from "@/components/Footer";
import Guide from "@/components/guide";

export default function IndexPage() {
  return (
   <div className="">
    
    <Banner />    
    {/* <Service /> */}
    <Hero />   
    <Guide />
    <Pricing />
    <Footer />

  </div>
  )
}
