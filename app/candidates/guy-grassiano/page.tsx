import Link from "next/link";
import { TopNav } from "@/components/TopNav";
import { Footer } from "@/components/Footer";
import { Avatar } from "@/components/Avatar";
import { TranscriptToggle } from "@/components/TranscriptToggle";
import {
  AlertIcon,
  CalendarIcon,
  DownloadIcon,
  ShareIcon,
} from "@/components/icons";
import {
  guyStrengths,
  guyOpenItems,
  guyNextSteps,
  guyTranscript,
} from "@/lib/data";

export default function GuyDetailPage() {
  return (
    <>
      <TopNav />
      <main className="flex-1 py-6 sm:py-9 pb-12 sm:pb-14">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-8">
          <div className="text-(--color-muted) text-[13px] mb-[10px] flex items-center gap-[6px]">
            <Link
              href="/"
              className="inline-flex items-center min-h-11 sm:min-h-0 py-2 sm:py-0 hover:text-(--color-ink) transition"
            >
              מועמדים
            </Link>
            <span>←</span>
            <span className="text-(--color-ink)">גיא גרסיאנו</span>
          </div>

          {/* Header — stacks on mobile */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6 mb-6 sm:mb-7">
            <div className="flex items-center gap-3 sm:gap-4 min-w-0">
              <Avatar initials="ג.ג" tone="purple" size="lg" />
              <div className="min-w-0">
                <div className="text-[22px] sm:text-[26px] font-semibold tracking-[-0.01em] leading-tight">
                  גיא גרסיאנו
                </div>
                <div className="text-(--color-muted) text-[13px] sm:text-[14px] mt-[2px] flex flex-wrap items-center gap-x-[10px] gap-y-1">
                  <span className="latin">AI Adoption Engineer</span>
                  <span className="text-[#C6C6CC]">·</span>
                  <span>
                    ראיון: <span className="latin">11.5.2026</span>
                  </span>
                  <span className="text-[#C6C6CC] hidden sm:inline">·</span>
                  <span className="hidden sm:inline">סבב ראשון</span>
                </div>
              </div>
            </div>

            {/* Action buttons — horizontal scroll row on mobile, inline on desktop */}
            <div className="flex items-center gap-2 -mx-4 sm:mx-0 px-4 sm:px-0 overflow-x-auto sm:overflow-visible no-scrollbar">
              <a
                href="/guy-grassiano-report.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full bg-white border border-(--color-border-strong) px-4 py-[10px] min-h-11 text-[14px] font-medium text-(--color-ink) hover:bg-[#FAFAFB] transition shrink-0"
              >
                <DownloadIcon />
                ייצוא <span className="latin">PDF</span>
              </a>
              <button className="inline-flex items-center gap-2 rounded-full bg-white border border-(--color-border-strong) px-4 py-[10px] min-h-11 text-[14px] font-medium text-(--color-ink) hover:bg-[#FAFAFB] transition shrink-0">
                <ShareIcon />
                שלח ל-<span className="latin">VP AI</span>
              </button>
              <button className="inline-flex items-center gap-2 rounded-full bg-(--color-purple) text-white px-4 py-[10px] min-h-11 text-[14px] font-medium hover:bg-(--color-purple-deep) transition shrink-0">
                <CalendarIcon />
                קבע סבב שני
              </button>
            </div>
          </div>

          {/* Summary — stacks on mobile */}
          <div className="bg-white rounded-[20px] border border-(--color-border) shadow-(--shadow-soft) px-5 sm:px-7 py-5 sm:py-[26px] mb-6 sm:mb-7 flex flex-col sm:grid sm:items-center gap-5 sm:gap-8 sm:grid-cols-[auto_1fr_auto]">
            <div className="flex items-center gap-4 sm:block">
              <div
                className="ring-meter"
                style={{ "--val": 78, "--col": "var(--color-mint)", "--size": "84px" } as React.CSSProperties}
              >
                <span className="ring-val">
                  <span className="latin">78%</span>
                </span>
              </div>
              <div className="sm:hidden flex-1">
                <span className="inline-flex items-center rounded-full px-3 py-[5px] text-[12.5px] font-medium leading-none bg-(--color-lavender) text-(--color-purple)">
                  ממתין לסקירה
                </span>
                <div className="text-(--color-muted) text-[12.5px] mt-2">
                  עודכן לפני 12 דקות
                </div>
              </div>
            </div>
            <div>
              <div className="text-[15px] sm:text-[16px] text-(--color-ink) font-medium mb-[6px] leading-snug">
                התאמה גבוהה לתפקיד — חזק במיוחד בבנייה בפועל ובחשיבת אדופציה
              </div>
              <div className="text-(--color-muted) text-[13.5px] sm:text-[14px] leading-[1.6] max-w-[56ch]">
                הסיכום נוצר אוטומטית מתוך תמלול של 47 דקות שיחה. שלוש חוזקות מרכזיות
                זוהו, וכן שלושה פתוחים שכדאי לסגור לפני סבב שני.
              </div>
            </div>
            <div className="hidden sm:block text-end text-(--color-muted) text-[13px]">
              <span className="inline-flex items-center rounded-full px-3 py-[5px] text-[12.5px] font-medium leading-none bg-(--color-lavender) text-(--color-purple) mb-2">
                ממתין לסקירה
              </span>
              <span className="block">עודכן לפני 12 דקות</span>
            </div>
          </div>

          {/* Strengths — 1-col on mobile, 3-col on desktop */}
          <div className="mb-7 sm:mb-9">
            <h2 className="text-[17px] sm:text-[18px] font-semibold mb-3 sm:mb-[14px]">
              חוזקות מרכזיות
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              {guyStrengths.map((s, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-(--color-border) rounded-2xl shadow-(--shadow-soft) p-5 sm:p-[22px] sm:pb-5 flex flex-col"
                >
                  <div className="w-7 h-7 rounded-full bg-(--color-lavender) text-(--color-purple) font-semibold text-[13px] inline-flex items-center justify-center mb-[14px]">
                    {idx + 1}
                  </div>
                  <h3 className="text-[15.5px] sm:text-[16px] font-semibold mb-2 leading-[1.35]">
                    {s.title}
                  </h3>
                  <p className="text-(--color-muted) text-[13.5px] leading-[1.55] mb-4">
                    {s.description}
                  </p>
                  <div
                    className="mt-auto bg-[#FAFAFB] rounded-lg px-[14px] py-3"
                    style={{ borderInlineEnd: "3px solid var(--color-mint)" }}
                  >
                    <div className="text-(--color-muted) text-[11.5px] font-medium mb-1">
                      מה גיא אמר על זה:
                    </div>
                    <div className="quote-text text-(--color-ink) text-[13px] leading-[1.5]">
                      {s.quote}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Open items */}
          <div className="mb-7 sm:mb-9">
            <h2 className="text-[17px] sm:text-[18px] font-semibold mb-3 sm:mb-[14px]">
              פתוחים לסגירה
            </h2>
            <div className="flex flex-col gap-[10px]">
              {guyOpenItems.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-(--color-yellow) rounded-2xl px-4 sm:px-5 py-3.5 sm:py-4 grid items-start gap-3 sm:gap-[14px]"
                  style={{ gridTemplateColumns: "28px 1fr" }}
                >
                  <div className="w-7 h-7 rounded-full inline-flex items-center justify-center mt-[2px] bg-[rgba(154,103,0,0.12)] text-(--color-yellow-text)">
                    <AlertIcon />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-(--color-yellow-text) text-[14px] sm:text-[14.5px] font-semibold mb-[3px]">
                      {item.title}
                    </h4>
                    <p className="text-(--color-yellow-deep) text-[13px] sm:text-[13.5px] leading-[1.5]">
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next steps */}
          <div className="mb-7 sm:mb-9">
            <h2 className="text-[17px] sm:text-[18px] font-semibold mb-3 sm:mb-[14px]">
              צעדים מומלצים
            </h2>
            <div className="flex flex-col gap-[10px]">
              {guyNextSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-(--color-border) rounded-[14px] shadow-(--shadow-soft) px-4 sm:px-[18px] py-3 sm:py-[14px] grid items-center gap-3 sm:gap-[14px]"
                  style={{ gridTemplateColumns: "28px 1fr" }}
                >
                  <div className="w-7 h-7 rounded-full bg-(--color-purple) text-white font-semibold text-[13px] inline-flex items-center justify-center">
                    {idx + 1}
                  </div>
                  <p className="text-[14px] sm:text-[14.5px] text-(--color-ink)">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Transcript */}
          <div className="mb-3">
            <TranscriptToggle lines={guyTranscript} />
          </div>

          <Link
            href="/compare"
            className="flex justify-end items-center text-(--color-muted) text-[13px] mt-6 py-3 min-h-11 hover:text-(--color-purple) transition"
          >
            השווה עם מועמדים אחרים →
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
