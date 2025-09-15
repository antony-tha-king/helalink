"use client";

import Link from "next/link";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { MotionWrapper } from "../motion-wrapper";

export function FloatingWhatsAppButton() {
  return (
    <MotionWrapper>
      <Link
        href="https://wa.me/254111918657?text=Hello,%20Am%20Interested%20In%20HelaLink"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform hover:scale-110"
        aria-label="Message us on WhatsApp"
      >
        <WhatsAppIcon className="h-8 w-8" />
      </Link>
    </MotionWrapper>
  );
}
