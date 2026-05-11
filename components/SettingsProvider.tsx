"use client";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import type { Lang, StringKey } from "@/lib/i18n";
import { t as translate } from "@/lib/i18n";

type Theme = "light" | "dark";

type SettingsContext = {
  lang: Lang;
  theme: Theme;
  setLang: (l: Lang) => void;
  setTheme: (t: Theme) => void;
  t: (key: StringKey) => string;
};

const Ctx = createContext<SettingsContext | null>(null);

export function useSettings() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useSettings must be inside SettingsProvider");
  return c;
}

export function SettingsProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("he");
  const [theme, setThemeState] = useState<Theme>("light");

  // Load from localStorage on mount (client-only)
  useLayoutEffect(() => {
    try {
      const savedLang = localStorage.getItem("cp.lang") as Lang | null;
      const savedTheme = localStorage.getItem("cp.theme") as Theme | null;
      if (savedLang === "he" || savedLang === "en") setLangState(savedLang);
      if (savedTheme === "light" || savedTheme === "dark") setThemeState(savedTheme);
    } catch {}
  }, []);

  // Apply lang + theme to html element
  useEffect(() => {
    const html = document.documentElement;
    html.lang = lang;
    html.dir = lang === "he" ? "rtl" : "ltr";
  }, [lang]);

  useEffect(() => {
    const html = document.documentElement;
    if (theme === "dark") html.classList.add("dark");
    else html.classList.remove("dark");
  }, [theme]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem("cp.lang", l);
    } catch {}
  }, []);

  const setTheme = useCallback((tt: Theme) => {
    setThemeState(tt);
    try {
      localStorage.setItem("cp.theme", tt);
    } catch {}
  }, []);

  const t = useCallback((key: StringKey) => translate(key, lang), [lang]);

  return (
    <Ctx.Provider value={{ lang, theme, setLang, setTheme, t }}>
      {children}
    </Ctx.Provider>
  );
}
