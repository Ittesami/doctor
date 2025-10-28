"use client";
import { useState } from 'react';
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
  const [language, setLanguage] = useState('en');

  return (
    <>
      <div className="min-h-screen">
        <Navbar language={language} setLanguage={setLanguage} />
        <Hero language={language} />
        <Biography language={language} />
        <Services language={language} />
        <Publications language={language} />
        <Gallery language={language} />
        <VideoGallery language={language} />
        <Appointment language={language} />
        <Footer language={language} />
      </div>
    </>
  );
}