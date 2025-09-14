import { CheckCircle } from "lucide-react";

export function DigitalStartup() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/20 dark:bg-muted/40">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-1 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-primary/10 text-primary px-3 py-1 text-sm font-medium">Business Opportunity</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Your Own Digital Startup
              </h2>
              <p className="max-w-[700px] mx-auto lg:mx-0 text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                HelaLink isn't just about earning extra cash. It's a gateway to launching your own digital business. With our tools and your ambition, you can build a sustainable income stream and achieve financial independence.
              </p>
            </div>
            <ul className="grid gap-4 max-w-md mx-auto lg:mx-0 text-left">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0"/>
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Platform Provided:</span> We give you the tools, products, and payment systems to succeed.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0"/>
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Limitless Growth:</span> From reselling digital products to building a massive referral network, the possibilities are endless.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0"/>
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">You Bring the Drive:</span> Your ambition is the only limit to your potential earnings.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
