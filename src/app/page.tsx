"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { Features } from "@/components/landing/features";
import { ReferralProgram } from "@/components/landing/referral-program";
import { DigitalStartup } from "@/components/landing/digital-startup";
import { Countries } from "@/components/landing/countries";
import { Testimonials } from "@/components/landing/testimonials";
import { Faq } from "@/components/landing/faq";
import { Cta } from "@/components/landing/cta";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  const [showTestimonials, setShowTestimonials] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#testimonials") {
        setShowTestimonials(true);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    
    // Check on initial load
    if (window.location.hash === "#testimonials") {
      setShowTestimonials(true);
    }

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <ReferralProgram />
        <DigitalStartup />
        <Countries />
        {showTestimonials && <Testimonials />}
        <Faq />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
