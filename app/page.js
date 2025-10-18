"use client";
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Biography from '@/components/Biography';
import Appointment from '@/components/Appointment';
import Publications from '@/components/Publication';
import Gallery from '@/components/Gallery';
import VideoGallery from '@/components/VideoGallery';
export default function Home() {
  return (
    <>
      <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Biography />
      <Appointment />
      <Services />
      <Publications />
      <Gallery />
      <VideoGallery />
      <Footer />
    </div>
    </>
  );
}