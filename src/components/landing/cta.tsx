import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Cta() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline">
            Ready to Start Earning?
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Don't wait any longer. Join thousands of users who are making money right from their phones. Click the button below to start a conversation with us on WhatsApp.
          </p>
        </div>
        <div className="mx-auto w-full max-w-sm space-y-2">
          <Button asChild size="lg" className="w-full font-semibold">
            <Link href="https://wa.me/254111918657?text=Hello,%20Am%20Interested%20In%20HelaLink">
              Start Now on WhatsApp
            </Link>
          </Button>
          <p className="text-xs text-muted-foreground">
            Get instant access and support.
          </p>
        </div>
      </div>
    </section>
  );
}
