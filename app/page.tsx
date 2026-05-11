import Link from "next/link";
import { TopNav } from "@/components/TopNav";
import { Footer } from "@/components/Footer";
import { Avatar } from "@/components/Avatar";
import {
  CompareIcon,
  PlusIcon,
  ChevLeft,
} from "@/components/icons";
import { candidates, statusLabels } from "@/lib/data";

export default function DashboardPage() {
  return (
    <>
      <TopNav />

      <main className="flex-1 py-9 pb-14">
        <div className="max-w-[1240px] mx-auto px-8">
          {/* Greeting */}
          <div className="flex justify-between items-end mb-7">
            <div>
              <h1 className="text-[30px] leading-[1.2] tracking-[-0.01em]">
                שלום ליאת <span className="font-normal">👋</span>
              </h1>
              <div className="text-(--color-muted) text-[15px] mt-[6px]">
                3 מועמדים מחכים לסקירה השבוע
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-4 mb-9">
            <StatCard
              label="ראיונות השבוע"
              value="8"
              trend="+2"
            />
            <StatCard
              label="מחכים לסקירה"
              value="3"
              dotColor="bg-(--color-purple)"
            />
            <StatCard
              label="עברו לסבב הבא"
              value="2"
              dotColor="bg-(--color-mint)"
            />
            <StatCard label="מתוזמנים" value="5" />
          </div>

          {/* Section header */}
          <div className="flex items-center justify-between gap-4 mb-[14px]">
            <h2 className="text-[19px] font-semibold leading-[1.2]">
              מועמדים אחרונים
            </h2>
            <div className="flex items-center gap-[10px]">
              <div className="flex items-center gap-[6px] flex-wrap">
                <FilterPill active>הכל</FilterPill>
                <FilterPill>ממתינים</FilterPill>
                <FilterPill>עברו לסבב הבא</FilterPill>
                <FilterPill>בהמתנה</FilterPill>
              </div>
              <button className="btn-primary inline-flex items-center gap-2 rounded-full px-4 py-[9px] font-medium text-[14px] bg-(--color-purple) text-white hover:bg-(--color-purple-deep) transition">
                <PlusIcon />
                ראיון חדש
              </button>
            </div>
          </div>

          {/* Above-list compare link */}
          <div className="flex justify-start mb-[14px]">
            <Link
              href="/compare"
              className="inline-flex items-center gap-1 text-(--color-ink) text-[13px] font-medium px-[10px] py-[6px] rounded-full hover:bg-[#F0F0F3] transition"
            >
              <CompareIcon />
              השווה מועמדים
            </Link>
          </div>

          {/* Candidate list */}
          <div className="flex flex-col gap-[10px]">
            {candidates.map((c) => {
              const status = statusLabels[c.status];
              const isHighlight = c.justAnalyzed;
              return (
                <Link
                  key={c.slug}
                  href={`/candidates/${c.slug}`}
                  className={`grid items-center gap-[22px] rounded-2xl border px-5 py-[14px] transition hover:shadow-md ${
                    isHighlight
                      ? "border-[#C6F1DF] bg-[linear-gradient(0deg,rgba(63,224,183,0.06),rgba(63,224,183,0.06)),#fff]"
                      : "border-(--color-border) bg-white shadow-(--shadow-soft)"
                  }`}
                  style={{
                    gridTemplateColumns:
                      "44px minmax(220px, 1.4fr) 110px 180px 140px 130px",
                  }}
                >
                  <Avatar initials={c.initials} tone={c.avatarTone} />
                  <div className="flex flex-col gap-[3px] min-w-0">
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
                  <div className="text-(--color-muted) text-[13.5px]">
                    <span className="latin font-medium text-(--color-ink)">
                      {c.interviewDate}
                    </span>
                  </div>
                  <div className="flex items-center gap-[10px]">
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
                  <div>
                    <span
                      className={`inline-flex items-center rounded-full px-3 py-[5px] text-[12.5px] font-medium leading-none whitespace-nowrap ${status.toneClass}`}
                    >
                      {status.he}
                    </span>
                  </div>
                  <div className="flex justify-end">
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
          <div className="flex justify-center gap-2 mt-[26px]">
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
    <div className="bg-white border border-(--color-border) rounded-2xl shadow-(--shadow-soft) px-[22px] py-5">
      <div className="text-(--color-muted) text-[13.5px] mb-[10px]">{label}</div>
      <div className="flex items-baseline gap-[10px] text-[34px] font-semibold leading-none tracking-[-0.02em] text-(--color-ink)">
        <span className="latin">{value}</span>
        {trend && (
          <span className="text-(--color-mint-text) bg-(--color-mint-bg) rounded-full px-2 py-[3px] text-[12px] font-semibold leading-none latin">
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
      className={`inline-flex items-center px-[14px] py-[7px] rounded-full text-[13.5px] font-medium transition ${
        active
          ? "bg-(--color-lavender) text-(--color-purple)"
          : "bg-transparent text-(--color-ink) hover:bg-[#F0F0F3]"
      }`}
    >
      {children}
    </button>
  );
}
