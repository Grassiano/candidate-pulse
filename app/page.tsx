"use client";
import { useState } from "react";
import Link from "next/link";
import { TopNav } from "@/components/TopNav";
import { Footer } from "@/components/Footer";
import { Avatar } from "@/components/Avatar";
import { CompareIcon, PlusIcon, ChevLeft, ChevRight } from "@/components/icons";
import {
  candidates,
  statusKeys,
  statusToneClass,
  type CandidateStatus,
} from "@/lib/data";
import { useSettings } from "@/components/SettingsProvider";
import { NewInterviewModal } from "@/components/NewInterviewModal";

type Filter = "all" | CandidateStatus;

export default function DashboardPage() {
  const { t, lang } = useSettings();
  const ChevToDetail = lang === "he" ? ChevLeft : ChevRight;
  const [filter, setFilter] = useState<Filter>("all");
  const [newInterviewOpen, setNewInterviewOpen] = useState(false);

  const visible = filter === "all" ? candidates : candidates.filter((c) => c.status === filter);
  const awaitingCount = candidates.filter((c) => c.status === "awaiting").length;
  const advancedCount = candidates.filter((c) => c.status === "advanced").length;
  const rejectedCount = candidates.filter((c) => c.status === "rejected").length;

  return (
    <>
      <TopNav />

      <main className="flex-1 py-6 sm:py-9 pb-12 sm:pb-14">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-8">
          {/* Greeting */}
          <div className="flex justify-between items-end mb-5 sm:mb-7">
            <div>
              <h1 className="text-[22px] sm:text-[30px] leading-[1.2] tracking-[-0.01em] text-(--color-cp-ink)">
                {t("greeting")} <span className="font-normal">👋</span>
              </h1>
              <div className="text-(--color-cp-muted) text-[14px] sm:text-[15px] mt-[6px]">
                <span className="latin">{awaitingCount}</span> {t("greetingSub")}
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-7 sm:mb-9">
            <StatCard label={t("statInterviewsThisWeek")} value="8" trend="+2" />
            <StatCard label={t("statAwaiting")} value={String(awaitingCount)} dotColor="bg-(--color-purple)" />
            <StatCard label={t("statAdvanced")} value={String(advancedCount)} dotColor="bg-(--color-mint)" />
            <StatCard label={t("statScheduled")} value="5" />
          </div>

          {/* Section header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 mb-[14px]">
            <h2 className="text-[18px] sm:text-[19px] font-semibold leading-[1.2] text-(--color-cp-ink)">
              {t("recentCandidates")}
            </h2>
            <div className="flex items-center gap-[10px] -mx-4 sm:mx-0 px-4 sm:px-0 overflow-x-auto sm:overflow-visible no-scrollbar">
              <div className="flex items-center gap-[6px] shrink-0">
                <FilterPill active={filter === "all"} onClick={() => setFilter("all")}>
                  {t("filterAll")}
                </FilterPill>
                <FilterPill active={filter === "awaiting"} onClick={() => setFilter("awaiting")}>
                  {t("filterAwaiting")}
                </FilterPill>
                <FilterPill active={filter === "advanced"} onClick={() => setFilter("advanced")}>
                  {t("filterAdvanced")}
                </FilterPill>
                <FilterPill active={filter === "rejected"} onClick={() => setFilter("rejected")}>
                  {t("filterRejected")}
                </FilterPill>
              </div>
              {/* DESKTOP compare pill — sits between filters and primary CTA */}
              <Link
                href="/compare"
                className="hidden sm:inline-flex items-center gap-2 rounded-full px-4 py-[10px] min-h-[44px] font-medium text-[14px] bg-(--color-cp-lavender) text-(--color-cp-lavender-text) hover:opacity-90 transition shrink-0"
              >
                <CompareIcon />
                {t("compareCandidates")}
              </Link>
              <button
                onClick={() => setNewInterviewOpen(true)}
                className="inline-flex items-center gap-2 rounded-full px-4 py-[10px] min-h-[44px] font-medium text-[14px] bg-(--color-purple) text-white hover:bg-(--color-purple-deep) transition shrink-0"
              >
                <PlusIcon />
                {t("newInterview")}
              </button>
            </div>
          </div>

          {/* MOBILE compare CTA banner — prominent card above the list */}
          <Link
            href="/compare"
            className="sm:hidden flex items-center justify-between gap-3 mb-3 rounded-2xl border border-(--color-cp-border) bg-(--color-cp-card) shadow-(--shadow-soft) px-4 py-[14px] min-h-[56px] transition active:bg-(--color-cp-bg) touch-manipulation"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-9 h-9 rounded-full bg-(--color-cp-lavender) text-(--color-cp-lavender-text) inline-flex items-center justify-center shrink-0">
                <CompareIcon size={16} />
              </div>
              <div className="min-w-0">
                <div className="font-semibold text-[14.5px] text-(--color-cp-ink) leading-tight">
                  {t("compareAllN")}
                </div>
                <div className="text-(--color-cp-muted) text-[12px] mt-[2px]">
                  {t("sideBySide")}
                </div>
              </div>
            </div>
            <ChevToDetail className="text-(--color-cp-muted) shrink-0" />
          </Link>

          {/* Candidate list */}
          <div className="flex flex-col gap-3 sm:gap-[10px]">
            {visible.length === 0 && (
              <div className="rounded-2xl border border-(--color-cp-border) bg-(--color-cp-card) py-10 text-center text-(--color-cp-muted) text-[14px]">
                {t("emptyStateNoResults")}
              </div>
            )}
            {visible.map((c) => {
              const statusToneCls = statusToneClass[c.status];
              const isHighlight = c.justAnalyzed;
              return (
                <Link
                  key={c.slug}
                  href={`/candidates/${c.slug}`}
                  className={`rounded-2xl border px-4 sm:px-5 py-3 sm:py-[14px] transition hover:shadow-md block sm:grid sm:items-center sm:gap-[22px] touch-manipulation ${
                    isHighlight
                      ? "border-[color:rgba(63,224,183,0.45)] bg-[linear-gradient(0deg,rgba(63,224,183,0.06),rgba(63,224,183,0.06)),var(--color-cp-card)]"
                      : "border-(--color-cp-border) bg-(--color-cp-card) shadow-(--shadow-soft)"
                  }`}
                  style={{
                    gridTemplateColumns:
                      "44px minmax(220px, 1.4fr) 110px 180px 140px 130px",
                  }}
                >
                  {/* MOBILE: stacked */}
                  <div className="sm:hidden flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <Avatar initials={c.initials} tone={c.avatarTone} />
                      <div className="flex flex-col gap-[2px] min-w-0 flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="latin font-semibold text-(--color-cp-ink) text-[15px]">
                            {c.name}
                          </span>
                          {c.justAnalyzed && (
                            <span className="badge-dot inline-flex items-center bg-(--color-cp-mint-bg) text-(--color-cp-mint-text) rounded-full px-[9px] py-[3px] text-[11px] font-semibold">
                              {t("justAnalyzed")}
                            </span>
                          )}
                        </div>
                        <span className="text-(--color-cp-muted) text-[12.5px]">
                          <span className="latin">{c.role}</span>
                          <span className="mx-[6px]">·</span>
                          <span className="latin">{c.interviewDate}</span>
                        </span>
                      </div>
                      <ChevToDetail className="text-(--color-cp-muted) shrink-0" />
                    </div>
                    <div className="flex items-center gap-3">
                      <span
                        className={`inline-flex items-center rounded-full px-3 py-[5px] text-[12px] font-medium leading-none whitespace-nowrap shrink-0 ${statusToneCls}`}
                      >
                        {t(statusKeys[c.status])}
                      </span>
                      <div className="flex-1 h-[6px] bg-(--color-cp-lavender) rounded-full overflow-hidden">
                        <div
                          className="h-full bg-(--color-mint) rounded-full"
                          style={{ width: `${c.fitPct}%` }}
                        />
                      </div>
                      <span className="latin font-semibold text-[13px] text-(--color-cp-ink) min-w-[34px] text-end">
                        {c.fitPct}%
                      </span>
                    </div>
                  </div>

                  {/* DESKTOP */}
                  <Avatar
                    initials={c.initials}
                    tone={c.avatarTone}
                    className="hidden sm:inline-flex"
                  />
                  <div className="hidden sm:flex flex-col gap-[3px] min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="latin font-semibold text-(--color-cp-ink) text-[15px]">
                        {c.name}
                      </span>
                      {c.justAnalyzed && (
                        <span className="badge-dot inline-flex items-center bg-(--color-cp-mint-bg) text-(--color-cp-mint-text) rounded-full px-[9px] py-[3px] text-[11.5px] font-semibold">
                          {t("justAnalyzed")}
                        </span>
                      )}
                    </div>
                    <span className="text-(--color-cp-muted) text-[13px]">
                      <span className="latin">{c.role}</span>
                    </span>
                  </div>
                  <div className="hidden sm:block text-(--color-cp-muted) text-[13.5px]">
                    <span className="latin font-medium text-(--color-cp-ink)">
                      {c.interviewDate}
                    </span>
                  </div>
                  <div className="hidden sm:flex items-center gap-[10px]">
                    <div className="flex-1 h-[6px] bg-(--color-cp-lavender) rounded-full overflow-hidden">
                      <div
                        className="h-full bg-(--color-mint) rounded-full"
                        style={{ width: `${c.fitPct}%` }}
                      />
                    </div>
                    <div className="latin font-semibold text-[13px] text-(--color-cp-ink) min-w-[34px] text-end">
                      {c.fitPct}%
                    </div>
                  </div>
                  <div className="hidden sm:block">
                    <span
                      className={`inline-flex items-center rounded-full px-3 py-[5px] text-[12.5px] font-medium leading-none whitespace-nowrap ${statusToneCls}`}
                    >
                      {t(statusKeys[c.status])}
                    </span>
                  </div>
                  <div className="hidden sm:flex justify-end">
                    <span className="inline-flex items-center gap-1 text-(--color-cp-ink) text-[13px] font-medium px-[10px] py-[6px] rounded-full">
                      {t("viewSummary")}
                      <ChevToDetail />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

        </div>
      </main>

      <Footer />

      <NewInterviewModal open={newInterviewOpen} onClose={() => setNewInterviewOpen(false)} />
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
    <div className="bg-(--color-cp-card) border border-(--color-cp-border) rounded-2xl shadow-(--shadow-soft) px-4 sm:px-[22px] py-4 sm:py-5">
      <div className="text-(--color-cp-muted) text-[12.5px] sm:text-[13.5px] mb-[8px] sm:mb-[10px]">
        {label}
      </div>
      <div className="flex items-baseline gap-2 sm:gap-[10px] text-[26px] sm:text-[34px] font-semibold leading-none tracking-[-0.02em] text-(--color-cp-ink)">
        <span className="latin">{value}</span>
        {trend && (
          <span className="text-(--color-cp-mint-text) bg-(--color-cp-mint-bg) rounded-full px-2 py-[3px] text-[11px] sm:text-[12px] font-semibold leading-none latin">
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
  onClick,
}: {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      aria-pressed={active}
      className={`inline-flex items-center px-[14px] py-[8px] min-h-[44px] rounded-full text-[13.5px] font-medium transition whitespace-nowrap ${
        active
          ? "bg-(--color-cp-lavender) text-(--color-cp-lavender-text)"
          : "bg-transparent text-(--color-cp-ink) hover:bg-(--color-cp-bg)"
      }`}
    >
      {children}
    </button>
  );
}
