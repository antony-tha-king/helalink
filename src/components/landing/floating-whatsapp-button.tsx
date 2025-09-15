"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { motion, AnimatePresence } from "framer-motion";

export function FloatingWhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <Link
            href="https://wa.me/254111918657?text=Hello,%20Am%20Interested%20In%20HelaLink"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform hover:scale-110"
            aria-label="Message us on WhatsApp"
          >
            <WhatsAppIcon className="h-8 w-8" />
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
