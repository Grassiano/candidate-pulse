import Link from "next/link";
import { TopNav } from "@/components/TopNav";
import { Footer } from "@/components/Footer";
import { Avatar } from "@/components/Avatar";
import { CompareIcon, PlusIcon, ChevLeft } from "@/components/icons";
import { candidates, statusLabels } from "@/lib/data";

export default function DashboardPage() {
  return (
    <>
      <TopNav />

      <main className="flex-1 py-6 sm:py-9 pb-12 sm:pb-14">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-8">
          {/* Greeting */}
          <div className="flex justify-between items-end mb-5 sm:mb-7">
            <div>
              <h1 className="text-[22px] sm:text-[30px] leading-[1.2] tracking-[-0.01em]">
                שלום ליאת <span className="font-normal">👋</span>
              </h1>
              <div className="text-(--color-muted) text-[14px] sm:text-[15px] mt-[6px]">
                3 מועמדים מחכים לסקירה השבוע
              </div>
            </div>
          </div>

          {/* Stats — 2x2 on mobile, 4-col on desktop */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-7 sm:mb-9">
            <StatCard label="ראיונות השבוע" value="8" trend="+2" />
            <StatCard label="מחכים לסקירה" value="3" dotColor="bg-(--color-purple)" />
            <StatCard label="עברו לסבב הבא" value="2" dotColor="bg-(--color-mint)" />
            <StatCard label="מתוזמנים" value="5" />
          </div>

          {/* Section header — stack on mobile */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 mb-[14px]">
            <h2 className="text-[18px] sm:text-[19px] font-semibold leading-[1.2]">
              מועמדים אחרונים
            </h2>
            <div className="flex items-center gap-[10px] sm:gap-[10px] -mx-4 sm:mx-0 px-4 sm:px-0 overflow-x-auto sm:overflow-visible no-scrollbar">
              <div className="flex items-center gap-[6px] shrink-0">
                <FilterPill active>הכל</FilterPill>
                <FilterPill>ממתינים</FilterPill>
                <FilterPill>עברו לסבב הבא</FilterPill>
                <FilterPill>בהמתנה</FilterPill>
              </div>
              <button className="inline-flex items-center gap-2 rounded-full px-4 py-[10px] min-h-[44px] font-medium text-[14px] bg-(--color-purple) text-white hover:bg-(--color-purple-deep) transition shrink-0">
                <PlusIcon />
                ראיון חדש
              </button>
            </div>
          </div>

          {/* Above-list compare link */}
          <div className="flex justify-start mb-[14px]">
            <Link
              href="/compare"
              className="inline-flex items-center gap-1 text-(--color-ink) text-[13px] font-medium px-[10px] py-[8px] min-h-[44px] rounded-full hover:bg-[#F0F0F3] transition"
            >
              <CompareIcon />
              השווה מועמדים
            </Link>
          </div>

          {/* Candidate list — stacked on mobile, 6-col grid on desktop */}
          <div className="flex flex-col gap-3 sm:gap-[10px]">
            {candidates.map((c) => {
              const status = statusLabels[c.status];
              const isHighlight = c.justAnalyzed;
              return (
                <Link
                  key={c.slug}
                  href={`/candidates/${c.slug}`}
                  className={`rounded-2xl border px-4 sm:px-5 py-3 sm:py-[14px] transition hover:shadow-md block sm:grid sm:items-center sm:gap-[22px] touch-manipulation ${
                    isHighlight
                      ? "border-[#C6F1DF] bg-[linear-gradient(0deg,rgba(63,224,183,0.06),rgba(63,224,183,0.06)),#fff]"
                      : "border-(--color-border) bg-white shadow-(--shadow-soft)"
                  }`}
                  style={{
                    gridTemplateColumns:
                      "44px minmax(220px, 1.4fr) 110px 180px 140px 130px",
                  }}
                >
                  {/* MOBILE: stacked layout */}
                  <div className="sm:hidden flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <Avatar initials={c.initials} tone={c.avatarTone} />
                      <div className="flex flex-col gap-[2px] min-w-0 flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-semibold text-(--color-ink) text-[15px]">
                            {c.name}
                          </span>
                          {c.justAnalyzed && (
                            <span className="badge-dot inline-flex items-center bg-(--color-mint-bg) text-(--color-mint-text) rounded-full px-[9px] py-[3px] text-[11px] font-semibold">
                              נותח עכשיו
                            </span>
                          )}
                        </div>
                        <span className="text-(--color-muted) text-[12.5px]">
                          <span className="latin">{c.role}</span>
                          <span className="text-[#C6C6CC] mx-[6px]">·</span>
                          <span className="latin">{c.interviewDate}</span>
                        </span>
                      </div>
                      <ChevLeft className="text-(--color-muted) shrink-0" />
                    </div>
                    <div className="flex items-center gap-3">
                      <span
                        className={`inline-flex items-center rounded-full px-3 py-[5px] text-[12px] font-medium leading-none whitespace-nowrap shrink-0 ${status.toneClass}`}
                      >
                        {status.he}
                      </span>
                      <div className="flex-1 h-[6px] bg-(--color-lavender) rounded-full overflow-hidden">
                        <div
                          className="h-full bg-(--color-mint) rounded-full"
                          style={{ width: `${c.fitPct}%` }}
                        />
                      </div>
                      <span className="latin font-semibold text-[13px] text-(--color-ink) min-w-[34px] text-end">
                        {c.fitPct}%
                      </span>
                    </div>
                  </div>

                  {/* DESKTOP: 6-col grid */}
                  <Avatar
                    initials={c.initials}
                    tone={c.avatarTone}
                    className="hidden sm:inline-flex"
                  />
                  <div className="hidden sm:flex flex-col gap-[3px] min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-(--color-ink) text-[15px]">
                        {c.name}
                      </span>
                      {c.justAnalyzed && (
                        <span className="badge-dot inline-flex items-center bg-(--color-mint-bg) text-(--color-mint-text) rounded-full px-[9px] py-[3px] text-[11.5px] font-semibold">
                          נותח עכשיו
                        </span>
                      )}
                    </div>
                    <span className="text-(--color-muted) text-[13px]">
                      <span className="latin">{c.role}</span>
                    </span>
                  </div>
                  <div className="hidden sm:block text-(--color-muted) text-[13.5px]">
                    <span className="latin font-medium text-(--color-ink)">
                      {c.interviewDate}
                    </span>
                  </div>
                  <div className="hidden sm:flex items-center gap-[10px]">
                    <div className="flex-1 h-[6px] bg-(--color-lavender) rounded-full overflow-hidden">
                      <div
                        className="h-full bg-(--color-mint) rounded-full"
                        style={{ width: `${c.fitPct}%` }}
                      />
                    </div>
                    <div className="latin font-semibold text-[13px] text-(--color-ink) min-w-[34px] text-end">
                      {c.fitPct}%
                    </div>
                  </div>
                  <div className="hidden sm:block">
                    <span
                      className={`inline-flex items-center rounded-full px-3 py-[5px] text-[12.5px] font-medium leading-none whitespace-nowrap ${status.toneClass}`}
                    >
                      {status.he}
                    </span>
                  </div>
                  <div className="hidden sm:flex justify-end">
                    <span className="inline-flex items-center gap-1 text-(--color-ink) text-[13px] font-medium px-[10px] py-[6px] rounded-full">
                      צפה בסיכום
                      <ChevLeft />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-2 mt-6 sm:mt-[26px]">
            <span className="w-[22px] h-[7px] rounded-full bg-(--color-purple)" />
            <span className="w-[7px] h-[7px] rounded-full bg-[#D6D6DC]" />
            <span className="w-[7px] h-[7px] rounded-full bg-[#D6D6DC]" />
            <span className="w-[7px] h-[7px] rounded-full bg-[#D6D6DC]" />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

function StatCard({
  label,
  value,
  trend,
  dotColor,
}: {
  label: string;
  value: string;
  trend?: string;
  dotColor?: string;
}) {
  return (
    <div className="bg-white border border-(--color-border) rounded-2xl shadow-(--shadow-soft) px-4 sm:px-[22px] py-4 sm:py-5">
      <div className="text-(--color-muted) text-[12.5px] sm:text-[13.5px] mb-[8px] sm:mb-[10px]">
        {label}
      </div>
      <div className="flex items-baseline gap-2 sm:gap-[10px] text-[26px] sm:text-[34px] font-semibold leading-none tracking-[-0.02em] text-(--color-ink)">
        <span className="latin">{value}</span>
        {trend && (
          <span className="text-(--color-mint-text) bg-(--color-mint-bg) rounded-full px-2 py-[3px] text-[11px] sm:text-[12px] font-semibold leading-none latin">
            {trend}
          </span>
        )}
        {dotColor && (
          <span
            className={`inline-block w-2 h-2 rounded-full ${dotColor} ms-1 align-middle`}
          />
        )}
      </div>
    </div>
  );
}

function FilterPill({
  children,
  active,
}: {
  children: React.ReactNode;
  active?: boolean;
}) {
  return (
    <button
      className={`inline-flex items-center px-[14px] py-[8px] min-h-[44px] rounded-full text-[13.5px] font-medium transition whitespace-nowrap ${
        active
          ? "bg-(--color-lavender) text-(--color-purple)"
          : "bg-transparent text-(--color-ink) hover:bg-[#F0F0F3]"
      }`}
    >
      {children}
    </button>
  );
}
