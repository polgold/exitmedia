"use client";

import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

type Props = {
  ariaLabel: string;
  text: string;
  waMessage: string;
};

export function FloatingCTA({ ariaLabel, text, waMessage }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const href = `https://wa.me/5491136511204?text=${encodeURIComponent(waMessage)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={ariaLabel}
      className={`fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 h-12 pl-4 pr-5 rounded-full bg-accent text-background shadow-xl shadow-black/30 hover:bg-accent-hover transition-all pulse-ring ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"
      }`}
    >
      <MessageCircle size={18} />
      <span className="text-sm font-medium">{text}</span>
    </a>
  );
}
