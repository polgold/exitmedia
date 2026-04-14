"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    setMounted(true);
    const stored = (localStorage.getItem("theme") as "dark" | "light") || "dark";
    setTheme(stored);
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.classList.toggle("dark", next === "dark");
  };

  return (
    <button
      onClick={toggle}
      aria-label={`Cambiar a modo ${theme === "dark" ? "claro" : "oscuro"}`}
      className="relative w-9 h-9 grid place-items-center rounded-full border border-border hover:border-accent/60 transition-colors"
    >
      {mounted && (theme === "dark" ? <Sun size={16} /> : <Moon size={16} />)}
    </button>
  );
}
