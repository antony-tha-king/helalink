import Link from "next/link";
import { Button } from "../ui/button";
import { Zap } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-background border-t">
      <div className="container py-12 px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Zap className="h-8 w-8 text-primary" />
              <span className="font-bold text-2xl">HelaLink</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs">
              The #1 trusted platform to monetize your time. Get paid for simple tasks, referrals, and more.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-3">Company</h4>
              <ul className="space-y-2">
                <li><span className="text-muted-foreground hover:text-foreground cursor-default">Features</span></li>
                <li><span className="text-muted-foreground hover:text-foreground cursor-default">Testimonials</span></li>
                <li><span className="text-muted-foreground hover:text-foreground cursor-default">Contact</span></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Legal</h4>
              <ul className="space-y-2">
                <li><span className="text-muted-foreground hover:text-foreground cursor-default">Terms of Service</span></li>
                <li><span className="text-muted-foreground hover:text-foreground cursor-default">Privacy Policy</span></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-start md:items-end">
             <h4 className="font-semibold mb-3">Get Started</h4>
             <p className="text-muted-foreground mb-4 text-sm text-left md:text-right">Join thousands of users earning from their phone.</p>
              <Button asChild className="glitter-effect">
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
