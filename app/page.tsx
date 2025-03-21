"use client";
import { Education, TimelineDemo } from "@/components/layouts/Education";
import Contact from "@/components/ui/Contact";
import Header from "@/components/ui/Header";
import Hero from "@/components/ui/Hero";
import SampleGallery from "@/components/ui/SampleGallery";

export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <Education />
            <SampleGallery />
            <Contact />
        </>
    );
}
