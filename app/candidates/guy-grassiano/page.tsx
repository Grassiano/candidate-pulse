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
      <main className="flex-1 py-9 pb-14">
        <div className="max-w-[1240px] mx-auto px-8">
          <div className="text-(--color-muted) text-[13px] mb-[10px]">
            <Link href="/" className="hover:text-(--color-ink)">
              מועמדים
            </Link>{" "}
            ← <span className="text-(--color-ink)">גיא גרסיאנו</span>
          </div>

          {/* Header */}
          <div className="flex items-center justify-between gap-6 mb-7">
            <div className="flex items-center gap-4">
              <Avatar initials="ג.ג" tone="purple" size="lg" />
              <div>
                <div className="text-[26px] font-semibold tracking-[-0.01em]">
                  גיא גרסיאנו
                </div>
                <div className="text-(--color-muted) text-[14px] mt-[2px] flex items-center gap-[10px]">
                  <span className="latin">AI Adoption Engineer</span>
                  <span className="text-[#C6C6CC]">·</span>
                  <span>
                    ראיון: <span className="latin">11.5.2026</span>
                  </span>
                  <span className="text-[#C6C6CC]">·</span>
                  <span>סבב ראשון</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href="/guy-grassiano-report.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full bg-white border border-(--color-border-strong) px-4 py-[9px] text-[14px] font-medium text-(--color-ink) hover:bg-[#FAFAFB] transition"
              >
                <DownloadIcon />
                ייצוא <span className="latin">PDF</span>
              </a>
              <button className="inline-flex items-center gap-2 rounded-full bg-white border border-(--color-border-strong) px-4 py-[9px] text-[14px] font-medium text-(--color-ink) hover:bg-[#FAFAFB] transition">
                <ShareIcon />
                שלח ל-<span className="latin">VP AI</span>
              </button>
              <button className="inline-flex items-center gap-2 rounded-full bg-(--color-purple) text-white px-4 py-[9px] text-[14px] font-medium hover:bg-(--color-purple-deep) transition">
                <CalendarIcon />
                קבע סבב שני
              </button>
            </div>
          </div>

          {/* Summary with ring */}
          <div className="bg-white rounded-[20px] border border-(--color-border) shadow-(--shadow-soft) px-7 py-[26px] mb-7 grid items-center gap-8" style={{ gridTemplateColumns: "auto 1fr auto" }}>
            <div className="ring-meter" style={{ "--val": 78, "--col": "var(--color-mint)" } as React.CSSProperties}>
              <span className="ring-val">
                <span className="latin">78%</span>
              </span>
            </div>
            <div>
              <div className="text-[16px] text-(--color-ink) font-medium mb-[6px]">
                התאמה גבוהה לתפקיד — חזק במיוחד בבנייה בפועל ובחשיבת אדופציה
              </div>
              <div className="text-(--color-muted) text-[14px] leading-[1.6] max-w-[56ch]">
                הסיכום נוצר אוטומטית מתוך תמלול של 47 דקות שיחה. שלוש חוזקות מרכזיות
                זוהו, וכן שלושה פתוחים שכדאי לסגור לפני סבב שני.
              </div>
            </div>
            <div className="text-end text-(--color-muted) text-[13px]">
              <span className="inline-flex items-center rounded-full px-3 py-[5px] text-[12.5px] font-medium leading-none bg-(--color-lavender) text-(--color-purple) mb-2">
                ממתין לסקירה
              </span>
              <span className="block">עודכן לפני 12 דקות</span>
            </div>
          </div>

          {/* Strengths */}
          <div className="mb-9">
            <h2 className="text-[18px] font-semibold mb-[14px]">חוזקות מרכזיות</h2>
            <div className="grid grid-cols-3 gap-4">
              {guyStrengths.map((s, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-(--color-border) rounded-2xl shadow-(--shadow-soft) p-[22px] pb-5 flex flex-col"
                >
                  <div className="w-7 h-7 rounded-full bg-(--color-lavender) text-(--color-purple) font-semibold text-[13px] inline-flex items-center justify-center mb-[14px]">
                    {idx + 1}
                  </div>
                  <h3 className="text-[16px] font-semibold mb-2 leading-[1.35]">
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
          <div className="mb-9">
            <h2 className="text-[18px] font-semibold mb-[14px]">פתוחים לסגירה</h2>
            <div className="flex flex-col gap-[10px]">
              {guyOpenItems.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-(--color-yellow) rounded-2xl px-5 py-4 grid items-start gap-[14px]"
                  style={{ gridTemplateColumns: "32px 1fr" }}
                >
                  <div className="w-7 h-7 rounded-full inline-flex items-center justify-center mt-[2px] bg-[rgba(154,103,0,0.12)] text-(--color-yellow-text)">
                    <AlertIcon />
                  </div>
                  <div>
                    <h4 className="text-(--color-yellow-text) text-[14.5px] font-semibold mb-[3px]">
                      {item.title}
                    </h4>
                    <p className="text-(--color-yellow-deep) text-[13.5px] leading-[1.5]">
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next steps */}
          <div className="mb-9">
            <h2 className="text-[18px] font-semibold mb-[14px]">צעדים מומלצים</h2>
            <div className="flex flex-col gap-[10px]">
              {guyNextSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-(--color-border) rounded-[14px] shadow-(--shadow-soft) px-[18px] py-[14px] grid items-center gap-[14px]"
                  style={{ gridTemplateColumns: "32px 1fr" }}
                >
                  <div className="w-7 h-7 rounded-full bg-(--color-purple) text-white font-semibold text-[13px] inline-flex items-center justify-center">
                    {idx + 1}
                  </div>
                  <p className="text-[14.5px] text-(--color-ink)">{step}</p>
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
            className="block text-end text-(--color-muted) text-[13px] mt-6 hover:text-(--color-purple) transition"
          >
            השווה עם מועמדים אחרים →
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
