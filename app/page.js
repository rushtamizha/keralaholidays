import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { Divide } from "lucide-react";
import Image from "next/image";
import AboutFeatures from "@/components/AboutFeatures";
import Packages from "@/components/Packages";
import CabServices from "@/components/CabServices";
import UniqueExperiences from "@/components/UniqueExperiences";
import ResortShowcase from "@/components/ResortShowcase";
import Testimonials from "@/components/Testimonials";
import ImageMarquee from "@/components/ImageMarquee";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <AboutFeatures/>
    <Packages/>
    <CabServices/>
    <UniqueExperiences/>
    <ResortShowcase/>
    <Testimonials/>
    <ImageMarquee/>
    <Footer/>
    </>
  );
}
