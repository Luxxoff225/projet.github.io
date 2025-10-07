"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useId, useState } from "react";

export type FAQItemProps = {
  question: string;
  answer: string;
};

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const baseId = useId();
  const contentId = `${baseId}-content`;
  const buttonId = `${baseId}-button`;

  return (
    <div className="rounded-3xl border border-white/10 bg-surface/80 p-6 md:p-8">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 text-left text-foreground"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-controls={contentId}
        id={buttonId}
      >
        <span className="text-base font-semibold md:text-lg">{question}</span>
        <span
          className={`flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm transition-transform duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
          aria-hidden
        >
          +
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={contentId}
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
            role="region"
            aria-labelledby={buttonId}
          >
            <p className="mt-4 text-sm leading-relaxed text-muted">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FAQItem;
