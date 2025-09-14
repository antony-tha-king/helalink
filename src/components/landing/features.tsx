import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Award, BotMessageSquare, CircleDollarSign, Clapperboard, Gamepad2, Send, Zap } from "lucide-react";
import { MotionWrapper } from "../motion-wrapper";

const features = [
  {
    icon: <Gamepad2 className="h-8 w-8 text-primary" />,
    title: "Spin & Win",
    description: "Try your luck on our prize wheel and win cash rewards instantly. New spins available daily!",
  },
  {
    icon: <Clapperboard className="h-8 w-8 text-primary" />,
    title: "Watch Videos",
    description: "Get paid for watching short, engaging video ads from our partners. It's that simple.",
  },
  {
    icon: <BotMessageSquare className="h-8 w-8 text-primary" />,
    title: "Answer Surveys",
    description: "Share your opinions by answering simple surveys and get rewarded for your valuable insights.",
  },
  {
    icon: <Send className="h-8 w-8 text-primary" />,
    title: "Trivia Questions",
    description: "Test your knowledge with our fun trivia questions and earn money for every correct answer.",
  },
  {
    icon: <CircleDollarSign className="h-8 w-8 text-primary" />,
    title: "Click Ads",
    description: "Earn by simply clicking on ads and exploring our partners' websites and offers.",
  },
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: "Claim Rewards",
    description: "Earn consistent rewards through daily check-ins and completing simple tasks on the platform.",
  },
];

export function Features() {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted/20 dark:bg-muted/40">
      <div className="container px-4 md:px-6">
        <MotionWrapper>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-primary/10 text-primary px-3 py-1 text-sm font-medium">
                Earning Features
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Multiple Ways to Earn
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our platform offers a variety of simple and fun tasks that you can complete to earn money right from your phone.
              </p>
            </div>
          </div>
        </MotionWrapper>
        <div className="mx-auto grid max-w-5xl items-stretch gap-6 sm:grid-cols-2 md:grid-cols-3 pt-12">
          {features.map((feature, index) => (
            <MotionWrapper key={index}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-primary/20">
                <CardHeader className="flex flex-col items-start">
                  <div className="bg-primary/10 p-3 rounded-full">
                      {feature.icon}
                    </div>
                  <CardTitle className="mt-4 font-bold text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground text-left">
                  <p>{feature.description}</p>
                </CardContent>
              </Card>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
