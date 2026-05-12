"use client";
import { useEffect, useRef, useState } from "react";
import { useSettings } from "./SettingsProvider";
import { Popover } from "./Popover";

const SettingsIcon = ({ size = 18 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const SunIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2" /><path d="M12 20v2" /><path d="M4.93 4.93l1.41 1.41" /><path d="M17.66 17.66l1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="M4.93 19.07l1.41-1.41" /><path d="M17.66 6.34l1.41-1.41" />
  </svg>
);

const MoonIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

export function SettingsCog() {
  const { lang, theme, setLang, setTheme, t } = useSettings();
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  return (
    <div className="relative" ref={wrapRef}>
      <button
        aria-label={t("settings")}
        aria-expanded={open}
        aria-haspopup="dialog"
        onClick={() => setOpen((v) => !v)}
        className="w-[44px] h-[44px] rounded-full border border-(--color-cp-border) bg-(--color-cp-card) inline-flex items-center justify-center text-(--color-cp-ink) hover:bg-(--color-cp-bg) transition"
      >
        <SettingsIcon />
      </button>

      <Popover open={open} onClose={() => setOpen(false)} title={t("settings")}>
        {/* Theme row */}
        <div className="mb-3">
          <div className="text-(--color-cp-muted) text-[12px] font-medium mb-[8px] px-1">
            {t("theme")}
          </div>
          <div className="flex p-[3px] rounded-full" style={{ background: "var(--color-cp-bg)" }}>
            <button
              onClick={() => setTheme("light")}
              className={`flex-1 inline-flex items-center justify-center gap-[6px] py-[10px] rounded-full text-[13px] font-medium transition ${
                theme === "light" ? "bg-(--color-cp-card) text-(--color-cp-ink)" : "text-(--color-cp-muted) hover:text-(--color-cp-ink)"
              }`}
              style={theme === "light" ? { boxShadow: "0 1px 2px rgba(0,0,0,0.06)" } : undefined}
            >
              <SunIcon />
              {t("themeLight")}
            </button>
            <button
              onClick={() => setTheme("dark")}
              className={`flex-1 inline-flex items-center justify-center gap-[6px] py-[10px] rounded-full text-[13px] font-medium transition ${
                theme === "dark" ? "bg-(--color-cp-card) text-(--color-cp-ink)" : "text-(--color-cp-muted) hover:text-(--color-cp-ink)"
              }`}
              style={theme === "dark" ? { boxShadow: "0 1px 2px rgba(0,0,0,0.06)" } : undefined}
            >
              <MoonIcon />
              {t("themeDark")}
            </button>
          </div>
        </div>

        {/* Language row */}
        <div>
          <div className="text-(--color-cp-muted) text-[12px] font-medium mb-[8px] px-1">
            {t("language")}
          </div>
          <div className="flex p-[3px] rounded-full" style={{ background: "var(--color-cp-bg)" }}>
            <button
              onClick={() => setLang("he")}
              className={`flex-1 py-[10px] rounded-full text-[13px] font-medium transition ${
                lang === "he" ? "bg-(--color-cp-card) text-(--color-cp-ink)" : "text-(--color-cp-muted) hover:text-(--color-cp-ink)"
              }`}
              style={lang === "he" ? { boxShadow: "0 1px 2px rgba(0,0,0,0.06)" } : undefined}
            >
              עברית
            </button>
            <button
              onClick={() => setLang("en")}
              className={`latin flex-1 py-[10px] rounded-full text-[13px] font-medium transition ${
                lang === "en" ? "bg-(--color-cp-card) text-(--color-cp-ink)" : "text-(--color-cp-muted) hover:text-(--color-cp-ink)"
              }`}
              style={lang === "en" ? { boxShadow: "0 1px 2px rgba(0,0,0,0.06)" } : undefined}
            >
              English
            </button>
          </div>
        </div>
      </Popover>
    </div>
  );
}
