"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Sprout } from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Sprout className="h-6 w-6 text-primary" />
          <span className="font-bold font-headline text-lg">HelaLink</span>
        </Link>
        <nav className="flex items-center space-x-6 text-sm font-medium">
          <Link
            href="/#features"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Features
          </Link>
          <Link
            href="/#testimonials"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Testimonials
          </Link>
          <Link
            href="/#contact"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Contact Us
          </Link>
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <ThemeToggle />
          <Button asChild>
            <Link href="https://helalink.com/register.php?ref=antony" target="_blank" rel="noopener noreferrer">
              Sign Up
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
