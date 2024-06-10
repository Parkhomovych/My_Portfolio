"use client";

import { motion } from "framer-motion";
import { ContactForm } from "@/components/ContactForm";

export default function ContactsPage() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <ContactForm />
          </div>
          {/* info */}
        </div>
      </div>
    </motion.section>
  );
}
