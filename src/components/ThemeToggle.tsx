import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "dark" | "light";

export const themeInitScript = `(function(){try{var t=localStorage.getItem('trinetra-theme');if(t!=='light'){t='dark'}document.documentElement.classList.remove('dark','light');document.documentElement.classList.add(t)}catch(e){document.documentElement.classList.add('dark')}})();`;

export function ThemeToggle({ className = "" }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const stored = (localStorage.getItem("trinetra-theme") as Theme | null) ?? "dark";
    setTheme(stored === "light" ? "light" : "dark");
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("trinetra-theme", next);
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(next);
  };

  return (
    <button
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className={`flex h-11 w-11 items-center justify-center rounded-sm border border-border text-foreground transition-colors hover:border-accent hover:text-accent ${className}`}
    >
      {theme === "dark" ? <Sun className="h-4.5 w-4.5" /> : <Moon className="h-4.5 w-4.5" />}
    </button>
  );
}
