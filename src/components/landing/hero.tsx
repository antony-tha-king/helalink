"use client"

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { placeHolderImages } from "@/lib/placeholder-images";
import { ArrowRight } from "lucide-react";

const headlines = [
  "Earn From Your Phone Every Day.",
  "Join a Global Community of Earners.",
  "Start Your Digital Business Today.",
  "Unlock Your Earning Potential.",
  "Your Journey to Financial Freedom Starts Here.",
  "Turn Your Screen Time into Earning Time.",
  "Experience the Ultimate Digital Hustle.",
  "Monetize Your Influence and Time.",
  "Get Paid for Your Opinions and Actions.",
  "Your Gateway to Daily Passive Income.",
  "Work from Anywhere, Anytime, on Your Terms.",
  "Your Reliable Pocket Money Partner.",
  "Digital Rewards, Real Cash in Your Wallet.",
  "Make Every Click and Minute Count.",
  "Join the Revolution of Online Earning."
];

export function Hero() {
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);

  useEffect(() => {
    const handleTyping = () => {
      const currentHeadline = headlines[headlineIndex];
      if (isDeleting) {
        setDisplayedText(currentHeadline.substring(0, displayedText.length - 1));
        setTypingSpeed(60);
      } else {
        setDisplayedText(currentHeadline.substring(0, displayedText.length + 1));
        setTypingSpeed(120);
      }

      if (!isDeleting && displayedText === currentHeadline) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setHeadlineIndex((prev) => (prev + 1) % headlines.length);
      }
    };

    const typingTimeout = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingTimeout);
  }, [displayedText, isDeleting, headlineIndex, typingSpeed]);

  const heroImage = placeHolderImages.find(img => img.id === "hero-background")!;

  return (
    <section className="relative w-full h-[85vh] min-h-[500px] md:h-screen flex items-center justify-center pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background z-10"/>
      <Image
        src={heroImage.imageUrl}
        alt={heroImage.description}
        data-ai-hint={heroImage.imageHint}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-20 container px-4 md:px-6 text-center text-white">
        <div className="space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="animate-typing">{displayedText}</span>
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
            The #1 trusted platform to monetize your time. Get paid for simple tasks, referrals, and more.
          </p>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="font-semibold text-lg py-7 px-8 glitter-effect">
            <Link href="https://wa.me/254111918657?text=Hello,%20Am%20Interested%20In%20HelaLink">
              Start Now on WhatsApp <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
           <Button asChild size="lg" variant="outline" className="font-semibold text-lg py-7 px-8 bg-transparent hover:bg-white/10 text-white border-white/50 hover:text-white">
            <Link href="#features">
              Learn More
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
