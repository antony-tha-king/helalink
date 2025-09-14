import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Users, Award, TrendingUp } from "lucide-react";
import { MotionWrapper } from "../motion-wrapper";

const referralLevels = [
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    level: "Level 1",
    reward: "$2.50",
    description: "Earn for every person you directly invite to join HelaLink. The more you share, the more you earn.",
  },
  {
    icon: <Award className="h-10 w-10 text-primary" />,
    level: "Level 2",
    reward: "$1.50",
    description: "When your referrals invite new members, you get a commission too! Your network works for you.",
  },
  {
    icon: <TrendingUp className="h-10 w-10 text-primary" />,
    level: "Level 3",
    reward: "$0.50",
    description: "Your earnings grow even deeper. Earn from the third level of referrals and maximize your passive income.",
  },
];

export function ReferralProgram() {
  return (
    <section id="referrals" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <MotionWrapper>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-primary/10 text-primary px-3 py-1 text-sm font-medium">
                Referral Program
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Earn Together, Grow Faster
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Invite your friends and earn commissions up to three levels deep. Our referral program is designed to reward you for growing the HelaLink community.
              </p>
            </div>
          </div>
        </MotionWrapper>
        <div className="mx-auto grid max-w-5xl items-stretch gap-8 sm:grid-cols-1 md:grid-cols-3 pt-12">
          {referralLevels.map((level, index) => (
            <MotionWrapper key={index}>
              <Card className="flex flex-col text-center border-t-4 border-primary shadow-lg">
                <CardHeader className="items-center">
                  <div className="bg-primary/10 p-4 rounded-full">
                      {level.icon}
                    </div>
                  <CardTitle className="mt-4 font-bold text-2xl">{level.level}</CardTitle>
                  <CardDescription className="text-4xl font-bold text-primary">{level.reward}</CardDescription>
                </CardHeader>
                <CardContent className="text-muted-foreground flex-grow">
                  <p>{level.description}</p>
                </CardContent>
              </Card>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
