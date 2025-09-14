import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { Features } from "@/components/landing/features";
import { ReferralProgram } from "@/components/landing/referral-program";
import { DigitalStartup } from "@/components/landing/digital-startup";
import { Testimonials } from "@/components/landing/testimonials";
import { Faq } from "@/components/landing/faq";
import { Countries } from "@/components/landing/countries";
import { Cta } from "@/components/landing/cta";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <ReferralProgram />
        <DigitalStartup />
        <Testimonials />
        <Faq />
        <Countries />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
