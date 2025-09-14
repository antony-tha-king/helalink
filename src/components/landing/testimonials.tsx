import Image from "next/image";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { placeHolderImages } from "@/lib/placeholder-images";
import { Star } from "lucide-react";
import { MotionWrapper } from "../motion-wrapper";

const testimonials = [
  {
    id: "testimonial-1",
    name: "Alex Johnson",
    role: "Digital Marketer",
    quote: "HelaLink has been a game-changer for my side income. The tasks are easy, and the payouts are always on time. Highly recommended!",
  },
  {
    id: "testimonial-2",
    name: "Benjamin Carter",
    role: "Student",
    quote: "As a student, every extra dollar counts. HelaLink provides a flexible way to earn money without affecting my studies. The referral program is amazing!",
  },
  {
    id: "testimonial-3",
    name: "Christopher Lee",
    role: "Freelancer",
    quote: "I've tried many platforms, but HelaLink stands out. The variety of earning methods and the supportive community make it the best.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-muted/20 dark:bg-muted/40">
      <div className="container px-4 md:px-6">
        <MotionWrapper>
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-3">
            <div className="inline-block rounded-lg bg-primary/10 text-primary px-3 py-1 text-sm font-medium">Testimonials</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              What Our Users Say
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear from members of our community and see how HelaLink has made a difference for them.
            </p>
          </div>
        </div>
        </MotionWrapper>
        <div className="mx-auto grid max-w-5xl items-stretch gap-8 sm:grid-cols-1 md:grid-cols-3 pt-12">
          {testimonials.map((testimonial) => {
            const image = placeHolderImages.find(img => img.id === testimonial.id)!;
            return (
              <MotionWrapper key={testimonial.id}>
              <Card className="flex flex-col p-6">
                <CardContent className="p-0 flex-grow flex flex-col justify-between">
                  <div className="flex items-center gap-1 text-yellow-400 mb-4">
                      <Star className="h-5 w-5 fill-current" />
                      <Star className="h-5 w-5 fill-current" />
                      <Star className="h-5 w-5 fill-current" />
                      <Star className="h-5 w-5 fill-current" />
                      <Star className="h-5 w-5 fill-current" />
                    </div>
                  <p className="text-muted-foreground mb-6 text-lg">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={image.imageUrl} alt={testimonial.name} data-ai-hint={image.imageHint} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              </MotionWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
