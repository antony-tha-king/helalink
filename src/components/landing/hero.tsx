"use client"

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { placeHolderImages } from "@/lib/placeholder-images";
import { ArrowRight } from "lucide-react";

const typedSentences = [
  "Hey you! Want to make extra cash?",
  "Or maybe build a passive income stream?",
  "Why not monetize your social media accounts?",
  "And get paid for your spare time?",
  "With HelaLink, earn from tasks you already do online.",
  "Sign up today to get started!"
];

export function Hero() {
  const heroImage = placeHolderImages.find(img => img.id === "hero-background")!;
  const [currentSentence, setCurrentSentence] = useState("");
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const delay = isDeleting ? deletingSpeed : typingSpeed;
    const endDelay = 1500;

    const handleTyping = () => {
      const fullSentence = typedSentences[sentenceIndex];
      if (isDeleting) {
        if (charIndex > 0) {
          setCurrentSentence(fullSentence.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setSentenceIndex((prev) => (prev + 1) % typedSentences.length);
        }
      } else {
        if (charIndex < fullSentence.length) {
          setCurrentSentence(fullSentence.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), endDelay);
        }
      }
    };

    const typingTimeout = setTimeout(handleTyping, delay);
    return () => clearTimeout(typingTimeout);
  }, [charIndex, isDeleting, sentenceIndex]);


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
          <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl min-h-[140px] md:min-h-[160px]">
             <span className="animate-typing">{currentSentence}</span>
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
            Join thousands of users who are making money right from their phones. With HelaLink, you can get paid for simple tasks you already do online. Sign up today to get started!
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
