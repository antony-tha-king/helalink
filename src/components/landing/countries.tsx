import Image from "next/image";
import { placeHolderImages } from "@/lib/placeholder-images";

export function Countries() {
  const nationalityImages = placeHolderImages.filter(img => img.id.startsWith("nationality-"));
  const marqueeImages = [...nationalityImages, ...nationalityImages];

  return (
    <section className="w-full py-12 md:py-20 lg:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Available Worldwide
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our platform is accessible to users from all corners of the globe. Join our international community and start earning today, no matter where you are.
            </p>
          </div>
        </div>
      </div>
      <div className="marquee-container mt-12">
        <div className="marquee-content space-x-4">
          {marqueeImages.map((image, index) => (
            <div key={index} className="flex-shrink-0 w-48 h-64 rounded-xl overflow-hidden shadow-lg">
              <Image
                src={image.imageUrl}
                alt={image.description}
                data-ai-hint={image.imageHint}
                width={192}
                height={256}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
