import Image from "next/image";
import { placeHolderImages } from "@/lib/placeholder-images";

export function DigitalStartup() {
  const image = placeHolderImages.find(img => img.id === "digital-startup")!;

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Business Opportunity</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
              Your Own Digital Startup
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              HelaLink isn't just about earning extra cash. It's a gateway to launching your own digital business. With our tools and your ambition, you can build a sustainable income stream and achieve financial independence.
            </p>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We provide the platform, the products, and the payment systems. You bring the drive. From reselling our digital products to building a massive referral network, the possibilities for growth are limitless.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src={image.imageUrl}
              alt={image.description}
              data-ai-hint={image.imageHint}
              width={600}
              height={400}
              className="rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
