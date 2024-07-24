import Link from "next/link";
import Banner from "@/components/banner";
import Hero from "@/components/hero";
import LogoTicker from "@/components/LogoTicker";
import Pricing from "@/components/Pricing";
import { Footer } from "@/components/Footer"

export default function IndexPage() {
  return (
   <div className="mb-4">
    
    <Banner />
    <LogoTicker />
    <Pricing />
    <Hero />
    <Footer />

  </div>
  )
}
