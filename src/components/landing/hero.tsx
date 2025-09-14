"use client"

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { placeHolderImages } from "@/lib/placeholder-images";
import { ArrowRight } from "lucide-react";

const headlines = [
  "Earn From Your Phone Every Day.",
  "Join a Global Community.",
  "Start Your Digital Business Today.",
  "Unlock Your Earning Potential.",
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
    <section className="relative w-full h-[80vh] min-h-[500px] md:h-screen flex items-center justify-center">
      <Image
        src={heroImage.imageUrl}
        alt={heroImage.description}
        data-ai-hint={heroImage.imageHint}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative container px-4 md:px-6 text-center text-white">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline">
            <span className="animate-typing">{displayedText}</span>
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
            The #1 trusted platform to monetize your time. Get paid for simple tasks, referrals, and more.
          </p>
        </div>
        <div className="mt-8">
          <Button asChild size="lg" className="font-semibold text-lg py-7 px-8">
            <Link href="https://wa.me/254111918657?text=Hello,%20Am%20Interested%20In%20HelaLink">
              Start Now on WhatsApp <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
