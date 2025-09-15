"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Header() {
  const navLinks = [
    { href: "/#features", label: "Features" },
    { href: "/#testimonials", label: "Testimonials" },
    { href: "/#contact", label: "Contact Us" },
  ];

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Zap className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl">HelaLink</span>
        </Link>
        <div className="flex items-center space-x-2">
          <Button asChild className="glitter-effect hidden md:inline-flex">
              <Link href="https://helalink.com/register.php?ref=antony" target="_blank" rel="noopener noreferrer">
                Sign Up
              </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
