import Link from "next/link";
import { TopNav } from "@/components/TopNav";
import { Footer } from "@/components/Footer";
import { Avatar } from "@/components/Avatar";
import {
  BoltIcon,
  BulbIcon,
  BuildingIcon,
  CalendarIcon,
  ChartIcon,
  ChatIcon,
  ChevRight,
  ClockIcon,
  CodeIcon,
  DownloadIcon,
  FileIcon,
  GlobeIcon,
  ShareIcon,
} from "@/components/icons";
import { compareData, compareDimensions, type DotLevel } from "@/lib/data";

const ringTones: Record<"mint" | "purple" | "gray", string> = {
  mint: "var(--color-mint)",
  purple: "var(--color-purple)",
  gray: "#C9C9D0",
};

const dimensionIcons = {
  aiTooling: BoltIcon,
  builder: BuildingIcon,
  crossFunctional: GlobeIcon,
  pythonDepth: CodeIcon,
  communication: ChatIcon,
  rampUp: ClockIcon,
} as const;

export default function ComparePage() {
  return (
    <>
      <TopNav />
      <main className="flex-1 py-6 sm:py-9 pb-12 sm:pb-14">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-8">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-6 sm:mb-7 gap-4 sm:gap-6">
            <div className="flex-1 min-w-0">
              <div className="text-(--color-muted) text-[13px] mb-[10px] flex items-center gap-[6px]">
                <Link
                  href="/"
                  className="inline-flex items-center min-h-11 sm:min-h-0 py-2 sm:py-0 hover:text-(--color-ink) transition"
                >
                  מועמדים
                </Link>
                <span>←</span>
                <span className="text-(--color-ink)">השוואה</span>
              </div>
              <h1 className="text-[22px] sm:text-[30px] leading-[1.2] tracking-[-0.01em]">
                השוואת מועמדים
              </h1>
              <div className="text-(--color-muted) text-[14px] sm:text-[15px] mt-[6px]">
                <span className="latin">AI Adoption Engineer</span> · 5 מועמדים
                נבחרו
              </div>
            </div>
            <div className="flex gap-2 items-center -mx-4 sm:mx-0 px-4 sm:px-0 overflow-x-auto sm:overflow-visible no-scrollbar">
              <a
                href="/guy-grassiano-report.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full bg-white border border-(--color-border-strong) px-4 py-[10px] min-h-11 text-[14px] font-medium text-(--color-ink) hover:bg-[#FAFAFB] transition shrink-0"
              >
                <DownloadIcon />
                ייצוא <span className="latin">PDF</span>
              </a>
              <button className="inline-flex items-center gap-2 rounded-full bg-(--color-purple) text-white px-4 py-[10px] min-h-11 text-[14px] font-medium hover:bg-(--color-purple-deep) transition shrink-0">
                <ShareIcon />
                שתף עם <span className="latin">VP AI</span>
              </button>
            </div>
          </div>

          {/* Matrix card — horizontally scrollable on mobile */}
          <div className="bg-white rounded-[20px] border border-(--color-border) shadow-(--shadow-soft) overflow-hidden">
            <div className="overflow-x-auto -mx-px">
              <div
                className="grid p-4 sm:p-[26px] min-w-[640px] sm:min-w-0"
                style={{
                  gridTemplateColumns:
                    "140px repeat(5, minmax(96px, 1fr))",
                }}
              >
                {/* Header row */}
                <div />
                {compareData.map((c) => (
                  <div
                    key={c.slug}
                    className={`px-2 sm:px-[14px] pt-3 sm:pt-[18px] pb-4 sm:pb-5 text-center border-b border-(--color-border) ${
                      c.isFocus ? "bg-[rgba(63,224,183,0.06)] rounded-t-[14px]" : ""
                    }`}
                  >
                    <div className="mx-auto flex justify-center">
                      <Avatar initials={c.initials} tone={c.avatarTone} />
                    </div>
                    <div className="font-semibold text-[12.5px] sm:text-[14px] mt-2 sm:mt-3 leading-[1.3]">
                      {c.name}
                    </div>
                    <div className="text-(--color-muted) text-[11px] sm:text-[12px] mt-[2px] line-clamp-1">
                      <span className="latin">{c.role}</span>
                    </div>
                    <div
                      className="ring-meter mx-auto mt-2 sm:mt-[14px]"
                      style={
                        {
                          "--val": c.fitPct,
                          "--col": ringTones[c.ringTone],
                          "--size": "48px",
                        } as React.CSSProperties
                      }
                    >
                      <span className="ring-val text-[12px] sm:text-[14px]">
                        <span className="latin">{c.fitPct}%</span>
                      </span>
                    </div>
                  </div>
                ))}

                {/* Row 1: Overall fit */}
                <RowLabel icon={<ChartIcon />}>התאמה כללית</RowLabel>
                {compareData.map((c, i) => (
                  <MatrixCell key={`fit-${c.slug}`} focus={c.isFocus}>
                    <span
                      className={`font-semibold text-[13px] sm:text-[14.5px] latin ${
                        i === compareData.length - 1
                          ? "text-(--color-muted)"
                          : "text-(--color-ink)"
                      }`}
                    >
                      {c.fitPct}%
                    </span>
                  </MatrixCell>
                ))}

                {/* Dimension rows */}
                {compareDimensions.map((dim) => {
                  const Icon = dimensionIcons[dim.key];
                  return (
                    <RowGroup key={dim.key}>
                      <RowLabel icon={<Icon />}>{dim.he}</RowLabel>
                      {compareData.map((c) => (
                        <MatrixCell
                          key={`${dim.key}-${c.slug}`}
                          focus={c.isFocus}
                        >
                          <Dot level={c.scores[dim.key]} />
                        </MatrixCell>
                      ))}
                    </RowGroup>
                  );
                })}

                {/* Row 8: Open items count */}
                <RowLabel icon={<FileIcon />} noBorder>
                  פתוחים לסגירה
                </RowLabel>
                {compareData.map((c) => (
                  <MatrixCell key={`open-${c.slug}`} focus={c.isFocus} noBorder>
                    <span
                      className={`inline-flex items-center justify-center min-w-[30px] h-[26px] px-[10px] rounded-full font-semibold text-[13px] text-(--color-yellow-text) ${
                        c.openTone === "yellow-strong"
                          ? "bg-(--color-yellow-strong)"
                          : "bg-(--color-yellow)"
                      }`}
                    >
                      {c.openCount}
                    </span>
                  </MatrixCell>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile hint */}
          <div className="sm:hidden text-center text-(--color-muted) text-[12px] mt-2">
            ← החלק את הטבלה כדי לראות עוד
          </div>

          {/* Takeaway */}
          <div
            className="rounded-[20px] px-5 sm:px-7 py-5 sm:py-[26px] mt-6 grid gap-4 sm:gap-[18px]"
            style={{
              background: "rgba(63, 224, 183, 0.14)",
              border: "1px solid rgba(63, 224, 183, 0.28)",
              gridTemplateColumns: "36px 1fr",
            }}
          >
            <div className="w-9 h-9 rounded-[10px] bg-(--color-mint) text-(--color-ink) inline-flex items-center justify-center">
              <BulbIcon />
            </div>
            <div>
              <h3 className="text-[15.5px] sm:text-[16px] font-semibold mb-2">
                שורה תחתונה
              </h3>
              <p className="text-[13.5px] sm:text-[14.5px] leading-[1.6] sm:leading-[1.65] text-(--color-ink) max-w-[78ch] mb-4 sm:mb-[18px]">
                גיא בולט בתבנית הרחבה — שילוב של בנייה בפועל, שליטה בכלים מתקדמים,
                וחשיבת אדופציה צולבת. איתן חזק יותר בעומק{" "}
                <span className="latin">Python</span> אבל מצומצם יותר בתפיסה
                צולבת-תחומים. מומלץ: להעביר את גיא לראיון עם{" "}
                <span className="latin">VP AI</span>, ולהמשיך במקביל עם איתן
                כגיבוי טכני.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 sm:justify-start">
                <button className="inline-flex items-center justify-center gap-2 rounded-full bg-(--color-purple) text-white px-4 py-[10px] min-h-11 text-[14px] font-medium hover:bg-(--color-purple-deep) transition">
                  <CalendarIcon />
                  קבע ראיון עם גיא
                </button>
                <button className="inline-flex items-center justify-center gap-2 rounded-full px-4 py-[10px] min-h-11 text-[14px] font-medium text-(--color-ink) hover:bg-[#F0F0F3] transition">
                  שמור גם את איתן בלולאה
                </button>
              </div>
            </div>
          </div>

          <Link
            href="/"
            className="inline-flex items-center gap-[6px] mt-6 sm:mt-7 py-3 min-h-11 text-(--color-muted) text-[13.5px] font-medium hover:text-(--color-purple) transition"
          >
            <ChevRight />
            חזור לדשבורד
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}

function RowGroup({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

function RowLabel({
  children,
  icon,
  noBorder,
}: {
  children: React.ReactNode;
  icon: React.ReactNode;
  noBorder?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-2 sm:gap-[10px] py-3 sm:py-[18px] ps-2 sm:ps-[14px] pe-[6px] font-medium text-[12.5px] sm:text-[14px] text-(--color-ink) bg-white sticky right-0 z-10 ${
        noBorder ? "" : "border-b border-(--color-border)"
      }`}
    >
      <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-[#F4F0FC] text-(--color-purple) inline-flex items-center justify-center shrink-0">
        {icon}
      </span>
      <span className="leading-tight">{children}</span>
    </div>
  );
}

function MatrixCell({
  children,
  focus,
  noBorder,
}: {
  children: React.ReactNode;
  focus?: boolean;
  noBorder?: boolean;
}) {
  return (
    <div
      className={`px-2 py-3 sm:py-[18px] text-center flex items-center justify-center ${
        focus ? "bg-[rgba(63,224,183,0.06)]" : ""
      } ${noBorder ? "" : "border-b border-(--color-border)"}`}
    >
      {children}
    </div>
  );
}

function Dot({ level }: { level: DotLevel }) {
  if (level === "strong")
    return (
      <span className="w-4 h-4 rounded-full bg-(--color-mint) inline-block" />
    );
  if (level === "half") return <span className="dot-half" />;
  return (
    <span className="w-4 h-4 rounded-full bg-white border-[1.5px] border-[#DCDCE2] inline-block" />
  );
}
