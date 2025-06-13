// import Image from "next/image";
"use client"
// import { useEffect } from "react";
// import { useRouter } from "next/navigation";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import CtaBanner from "./components/CtaBanner";
import TopTalent from "./components/TopTalent";
import FeatureComparison from "./components/FeatureComparison";
import Footer from "./components/Footer";
export default function Home() {
  // const router = useRouter();
  // useEffect(()=>{
  //   router.replace('/dashboard')
  // }, [router])

  return (
    <div className="">
      <Header/> 
      <Hero/>
      <HowItWorks/>
      <Testimonials/>
      <CtaBanner/>
      <TopTalent/>
      <FeatureComparison/>
      <Footer/>
    </div>
  );
}
