"use client";
import { useState } from "react";
import { SearchIcon, BellIcon } from "./icons";

export function TopNav() {
  const [lang, setLang] = useState<"he" | "en">("he");

  return (
    <nav className="bg-(--color-card) border-b border-(--color-border) py-[12px] sm:py-[14px]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-8 flex items-center gap-3 sm:gap-6">
        <div className="flex items-center gap-[10px] shrink-0">
          <div
            className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] rounded-full bg-(--color-mint)"
            style={{ boxShadow: "inset 0 -2px 0 rgba(0,0,0,0.04)" }}
          />
          <a
            href="/"
            className="latin font-semibold text-[15px] sm:text-[17px] tracking-[-0.01em] text-(--color-ink)"
          >
            Candidate Pulse
          </a>
        </div>

        {/* Search input — hidden below sm, shown as icon button on mobile */}
        <div className="hidden sm:block flex-1 max-w-[460px] mx-auto relative">
          <input
            type="text"
            placeholder="חיפוש מועמדים..."
            className="w-full border border-(--color-border) bg-[#FAFAFB] rounded-full py-[10px] pr-[44px] pl-[18px] text-[14px] text-(--color-ink) outline-none focus:border-[#D9C9F6] focus:bg-white transition placeholder:text-[#9A9AA1]"
          />
          <SearchIcon
            size={16}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-[#A0A0A7]"
          />
        </div>

        <div className="flex-1 sm:hidden" />

        <div className="flex items-center gap-2 sm:gap-[14px] shrink-0">
          <button
            aria-label="search"
            className="sm:hidden w-9 h-9 rounded-full border border-(--color-border) bg-white inline-flex items-center justify-center text-(--color-muted)"
          >
            <SearchIcon size={16} />
          </button>
          <div className="flex bg-[#F2F2F4] rounded-full p-[3px] text-[13px] font-medium">
            <button
              onClick={() => setLang("he")}
              className={`px-2 sm:px-3 py-[5px] rounded-full leading-none inline-flex items-center transition ${
                lang === "he"
                  ? "bg-white text-(--color-ink) shadow-[0_1px_2px_rgba(0,0,0,0.05)]"
                  : "text-(--color-muted)"
              }`}
            >
              עברית
            </button>
            <button
              onClick={() => setLang("en")}
              className={`latin px-2 sm:px-3 py-[5px] rounded-full leading-none inline-flex items-center transition text-[12px] tracking-[0.02em] ${
                lang === "en"
                  ? "bg-white text-(--color-ink) shadow-[0_1px_2px_rgba(0,0,0,0.05)]"
                  : "text-(--color-muted)"
              }`}
            >
              EN
            </button>
          </div>
          <button
            aria-label="notifications"
            className="hidden sm:inline-flex w-9 h-9 rounded-full border border-(--color-border) bg-white items-center justify-center text-(--color-ink) relative"
          >
            <BellIcon size={16} />
            <span
              className="absolute top-[7px] right-2 w-[7px] h-[7px] bg-(--color-purple) rounded-full border-2 border-white"
              aria-hidden
            />
          </button>
          <div className="w-9 h-9 rounded-full inline-flex items-center justify-center font-semibold text-[13px] text-(--color-ink) bg-(--color-lavender) border border-(--color-lavender-border)">
            ל.א
          </div>
        </div>
      </div>
    </nav>
  );
}
