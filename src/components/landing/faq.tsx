import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MotionWrapper } from "../motion-wrapper";

const faqItems = [
  {
    question: "What is HelaLink?",
    answer: "HelaLink is a comprehensive marketing platform that allows you to earn money from your phone through various online activities like watching videos, answering surveys, spinning a wheel, and participating in a referral program.",
  },
  {
    question: "How do I get started?",
    answer: "To get started, simply click on the 'Sign Up' button on our website, fill out the registration form, and activate your account. You can then immediately start participating in earning activities.",
  },
  {
    question: "Is HelaLink available in my country?",
    answer: "Yes, HelaLink is a global platform. We welcome users from all around the world. Our payment systems are designed to work internationally.",
  },
  {
    question: "How do I withdraw my earnings?",
    answer: "You can withdraw your earnings directly to your preferred mobile money or bank account. Withdrawals are processed quickly to ensure you get your money when you need it.",
  },
  {
    question: "How does the referral program work?",
    answer: "Our referral program has three levels. You earn a commission when someone you refer joins (Level 1), when your referral refers someone else (Level 2), and even when that person refers another (Level 3). It's a powerful way to build passive income.",
  },
];

export function Faq() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <MotionWrapper>
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-3">
            <div className="inline-block rounded-lg bg-primary/10 text-primary px-3 py-1 text-sm font-medium">FAQ</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Have questions? We've got answers. Here are some of the most common questions we get.
            </p>
          </div>
        </div>
        </MotionWrapper>
        <div className="mx-auto max-w-3xl pt-12">
          <MotionWrapper>
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">{item.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}
