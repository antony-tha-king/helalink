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
        <div className="flex items-center gap-2">
          <Button asChild className="glitter-effect md:hidden" size="sm">
            <Link href="https://helalink.com/register.php?ref=antony" target="_blank" rel="noopener noreferrer">
              Sign Up
            </Link>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="grid gap-4 py-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex w-full items-center py-2 text-lg font-semibold"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
        <nav className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium hover:underline underline-offset-4">
              {link.label}
            </Link>
          ))}
          <Button asChild className="glitter-effect">
              <Link href="https://helalink.com/register.php?ref=antony" target="_blank" rel="noopener noreferrer">
                Sign Up
              </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
