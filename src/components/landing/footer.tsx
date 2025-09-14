import Link from "next/link";
import { Button } from "../ui/button";
import { Zap } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-background border-t">
      <div className="container py-12 px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-3 space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Zap className="h-8 w-8 text-primary" />
              <span className="font-bold text-2xl">HelaLink</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              The #1 trusted platform to monetize your time. Get paid for simple tasks, referrals, and more.
            </p>
          </div>
          <div className="md:col-span-2">
            <h4 className="font-semibold mb-3">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/#features" className="text-muted-foreground hover:text-foreground">Features</Link></li>
              <li><Link href="/#testimonials" className="text-muted-foreground hover:text-foreground">Testimonials</Link></li>
              <li><Link href="/#contact" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <h4 className="font-semibold mb-3">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">Terms of Service</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">Privacy Policy</Link></li>
            </ul>
          </div>
          <div className="md:col-span-5 flex flex-col items-start md:items-end">
             <h4 className="font-semibold mb-3">Get Started</h4>
             <p className="text-muted-foreground mb-4 text-sm text-left md:text-right">Join thousands of users earning from their phone.</p>
              <Button asChild>
                <Link href="https://helalink.com/register.php?ref=antony" target="_blank" rel="noopener noreferrer">
                  Sign Up Now
                </Link>
              </Button>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} HelaLink. Powered by BestTech Management. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
