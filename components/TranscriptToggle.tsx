"use client";
import { useState } from "react";
import { ChevDown, TranscriptIcon } from "./icons";
import type { TranscriptLine } from "@/lib/data";

export function TranscriptToggle({ lines }: { lines: TranscriptLine[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white border border-(--color-border) rounded-[14px] shadow-(--shadow-soft) overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-[22px] py-4"
        aria-expanded={open}
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-(--color-lavender) text-(--color-purple) inline-flex items-center justify-center">
            <TranscriptIcon size={16} />
          </div>
          <div className="text-start">
            <h4 className="text-[15px] font-semibold">תמלול מלא של השיחה</h4>
            <div className="text-[12.5px] text-(--color-muted) mt-[2px]">
              47 דקות · נוצר ע"י <span className="latin">Dwight</span>, סוכן אישי
            </div>
          </div>
        </div>
        <span className="inline-flex items-center gap-2 px-4 py-[9px] rounded-full text-[14px] font-medium text-(--color-ink) hover:bg-[#F0F0F3] transition">
          {open ? "הסתר תמלול" : "הצג תמלול"}
          <ChevDown
            className={`transition-transform ${open ? "rotate-180" : ""}`}
          />
        </span>
      </button>

      {open && (
        <div className="border-t border-(--color-border) bg-(--color-bg) px-[22px] py-5 max-h-[480px] overflow-y-auto">
          <div className="flex flex-col gap-3">
            {lines.map((line, idx) => (
              <div
                key={idx}
                className={`flex gap-3 ${
                  line.speaker === "interviewer" ? "" : "flex-row-reverse"
                }`}
              >
                <div
                  className={`w-7 h-7 rounded-full inline-flex items-center justify-center text-[11px] font-semibold shrink-0 border ${
                    line.speaker === "interviewer"
                      ? "bg-(--color-lavender) text-(--color-purple) border-(--color-lavender-border)"
                      : "bg-[#DFFBF1] text-(--color-mint-text) border-[#BAF1DC]"
                  }`}
                >
                  {line.speaker === "interviewer" ? "ג.ג" : "ל.א"}
                </div>
                <div
                  className={`max-w-[88%] px-4 py-[10px] rounded-2xl text-[13.5px] leading-[1.55] ${
                    line.speaker === "interviewer"
                      ? "bg-white border border-(--color-border) text-(--color-ink) rounded-tr-sm"
                      : "bg-(--color-lavender) text-(--color-ink) rounded-tl-sm"
                  }`}
                >
                  {line.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
