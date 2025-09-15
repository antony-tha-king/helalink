"use client"

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { placeHolderImages } from "@/lib/placeholder-images";
import { ArrowRight } from "lucide-react";

export function Hero() {
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
            Monetize Your Time, Effortlessly.
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
            Hey you! Want to make extra cash or build a passive income stream? Why not monetize your social media accounts and your spare time? With HelaLink, you can get paid for simple tasks you already do online. Sign up today to get started!
          </p>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="font-semibold text-lg py-7 px-8 glitter-effect">
            <Link href="https://helalink.com/register.php?ref=antony" target="_blank" rel="noopener noreferrer">
              Sign Up Today <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
           <Button asChild size="lg" variant="outline" className="font-semibold text-lg py-7 px-8 bg-transparent hover:bg-white/10 text-white border-white/50 hover:text-white">
            <Link href="#features">
              How It Works
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
