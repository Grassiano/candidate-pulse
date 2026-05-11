"use client";
import { useState } from "react";
import { ChevDown, TranscriptIcon } from "./icons";
import type { TranscriptLine } from "@/lib/data";
import { useSettings } from "./SettingsProvider";

export function TranscriptToggle({ lines }: { lines: TranscriptLine[] }) {
  const [open, setOpen] = useState(false);
  const { lang, t } = useSettings();

  return (
    <div className="bg-(--color-cp-card) border border-(--color-cp-border) rounded-[14px] shadow-(--shadow-soft) overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-[22px] py-4 min-h-[64px]"
        aria-expanded={open}
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-(--color-cp-lavender) text-(--color-cp-lavender-text) inline-flex items-center justify-center">
            <TranscriptIcon size={16} />
          </div>
          <div className="text-start">
            <h4 className="text-[15px] font-semibold text-(--color-cp-ink)">
              {t("transcriptTitle")}
            </h4>
            <div className="text-[12.5px] text-(--color-cp-muted) mt-[2px]">
              {t("transcriptMeta")}
            </div>
          </div>
        </div>
        <span className="inline-flex items-center gap-2 px-4 py-[9px] rounded-full text-[14px] font-medium text-(--color-cp-ink) hover:bg-(--color-cp-bg) transition">
          {open ? t("hideTranscript") : t("showTranscript")}
          <ChevDown
            className={`transition-transform ${open ? "rotate-180" : ""}`}
          />
        </span>
      </button>

      {open && (
        <div className="border-t border-(--color-cp-border) bg-(--color-cp-bg) px-4 sm:px-[22px] py-5 max-h-[480px] overflow-y-auto">
          <div className="flex flex-col gap-3">
            {lines.map((line, idx) => {
              const text = lang === "he" ? line.he : line.en;
              return (
                <div
                  key={idx}
                  className={`flex gap-3 ${
                    line.speaker === "interviewer" ? "" : "flex-row-reverse"
                  }`}
                >
                  <div
                    className={`latin w-7 h-7 rounded-full inline-flex items-center justify-center text-[11px] font-semibold shrink-0 border ${
                      line.speaker === "interviewer"
                        ? "bg-(--color-cp-lavender) text-(--color-cp-lavender-text) border-(--color-cp-border-strong)"
                        : "bg-(--color-cp-mint-bg) text-(--color-cp-mint-text) border-(--color-cp-border-strong)"
                    }`}
                  >
                    {line.speaker === "interviewer" ? "G.G" : "L.O"}
                  </div>
                  <div
                    className={`max-w-[88%] px-4 py-[10px] rounded-2xl text-[13.5px] leading-[1.55] ${
                      line.speaker === "interviewer"
                        ? "bg-(--color-cp-card) border border-(--color-cp-border) text-(--color-cp-ink) rounded-tr-sm"
                        : "bg-(--color-cp-lavender) text-(--color-cp-ink) rounded-tl-sm"
                    }`}
                  >
                    {text}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
