import { Flags } from "@/components/landing/flags";

export function Countries() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-card text-card-foreground">
      <div className="container mx-auto px-4 md:px-6 space-y-12">
        <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl">
          Available Worldwide
        </h2>
        <Flags />
      </div>
    </section>
  );
}
