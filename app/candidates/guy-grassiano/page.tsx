"use client";
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
  guyNextStepKeys,
  guyTranscript,
} from "@/lib/data";
import { useSettings } from "@/components/SettingsProvider";

export default function GuyDetailPage() {
  const { t, lang } = useSettings();
  const arrow = lang === "he" ? "←" : "→";
  const arrowBack = lang === "he" ? "→" : "←";

  return (
    <>
      <TopNav />
      <main className="flex-1 py-6 sm:py-9 pb-12 sm:pb-14">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-8">
          <div className="text-(--color-cp-muted) text-[13px] mb-[10px] flex items-center gap-[6px]">
            <Link
              href="/"
              className="inline-flex items-center min-h-[44px] sm:min-h-0 py-2 sm:py-0 hover:text-(--color-cp-ink) transition"
            >
              {t("candidatesBreadcrumb")}
            </Link>
            <span>{arrow}</span>
            <span className="latin text-(--color-cp-ink)">Guy Grassiano</span>
          </div>

          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6 mb-6 sm:mb-7">
            <div className="flex items-center gap-3 sm:gap-4 min-w-0">
              <Avatar initials="G.G" tone="purple" size="lg" />
              <div className="min-w-0">
                <div className="latin text-[22px] sm:text-[26px] font-semibold tracking-[-0.01em] leading-tight text-(--color-cp-ink)">
                  Guy Grassiano
                </div>
                <div className="text-(--color-cp-muted) text-[13px] sm:text-[14px] mt-[2px] flex flex-wrap items-center gap-x-[10px] gap-y-1">
                  <span className="latin">AI Adoption Engineer</span>
                  <span>·</span>
                  <span>
                    {t("interview")}: <span className="latin">11.5.2026</span>
                  </span>
                  <span className="hidden sm:inline">·</span>
                  <span className="hidden sm:inline">{t("firstRound")}</span>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-2 -mx-4 sm:mx-0 px-4 sm:px-0 overflow-x-auto sm:overflow-visible no-scrollbar">
              <a
                href="/guy-grassiano-report.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full bg-(--color-cp-card) border border-(--color-cp-border-strong) px-4 py-[10px] min-h-[44px] text-[14px] font-medium text-(--color-cp-ink) hover:bg-(--color-cp-bg) transition shrink-0"
              >
                <DownloadIcon />
                {t("exportPdf")}
              </a>
              <button className="inline-flex items-center gap-2 rounded-full bg-(--color-cp-card) border border-(--color-cp-border-strong) px-4 py-[10px] min-h-[44px] text-[14px] font-medium text-(--color-cp-ink) hover:bg-(--color-cp-bg) transition shrink-0">
                <ShareIcon />
                {t("sendToVPAI")}
              </button>
              <button className="inline-flex items-center gap-2 rounded-full bg-(--color-purple) text-white px-4 py-[10px] min-h-[44px] text-[14px] font-medium hover:bg-(--color-purple-deep) transition shrink-0">
                <CalendarIcon />
                {t("scheduleSecondRound")}
              </button>
            </div>
          </div>

          {/* Summary */}
          <div className="bg-(--color-cp-card) rounded-[20px] border border-(--color-cp-border) shadow-(--shadow-soft) px-5 sm:px-7 py-5 sm:py-[26px] mb-6 sm:mb-7 flex flex-col sm:grid sm:items-center gap-5 sm:gap-8 sm:grid-cols-[auto_1fr_auto]">
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
                <span className="inline-flex items-center rounded-full px-3 py-[5px] text-[12.5px] font-medium leading-none bg-(--color-cp-lavender) text-(--color-cp-lavender-text)">
                  {t("statusAwaiting")}
                </span>
                <div className="text-(--color-cp-muted) text-[12.5px] mt-2">
                  {t("lastUpdated")}
                </div>
              </div>
            </div>
            <div>
              <div className="text-[15px] sm:text-[16px] text-(--color-cp-ink) font-medium mb-[6px] leading-snug">
                {t("fitHigh")}
              </div>
              <div className="text-(--color-cp-muted) text-[13.5px] sm:text-[14px] leading-[1.6] max-w-[56ch]">
                {t("summaryBody")}
              </div>
            </div>
            <div className="hidden sm:block text-end text-(--color-cp-muted) text-[13px]">
              <span className="inline-flex items-center rounded-full px-3 py-[5px] text-[12.5px] font-medium leading-none bg-(--color-cp-lavender) text-(--color-cp-lavender-text) mb-2">
                {t("statusAwaiting")}
              </span>
              <span className="block">{t("lastUpdated")}</span>
            </div>
          </div>

          {/* Strengths */}
          <div className="mb-7 sm:mb-9">
            <h2 className="text-[17px] sm:text-[18px] font-semibold mb-3 sm:mb-[14px] text-(--color-cp-ink)">
              {t("keyStrengths")}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              {guyStrengths.map((s, idx) => (
                <div
                  key={idx}
                  className="bg-(--color-cp-card) border border-(--color-cp-border) rounded-2xl shadow-(--shadow-soft) p-5 sm:p-[22px] sm:pb-5 flex flex-col"
                >
                  <div className="latin w-7 h-7 rounded-full bg-(--color-cp-lavender) text-(--color-cp-lavender-text) font-semibold text-[13px] inline-flex items-center justify-center mb-[14px]">
                    {idx + 1}
                  </div>
                  <h3 className="text-[15.5px] sm:text-[16px] font-semibold mb-2 leading-[1.35] text-(--color-cp-ink)">
                    {t(s.titleKey)}
                  </h3>
                  <p className="text-(--color-cp-muted) text-[13.5px] leading-[1.55] mb-4">
                    {t(s.descKey)}
                  </p>
                  <div
                    className="mt-auto bg-(--color-cp-quote-bg) rounded-lg px-[14px] py-3"
                    style={{ borderInlineEnd: "3px solid var(--color-mint)" }}
                  >
                    <div className="text-(--color-cp-muted) text-[11.5px] font-medium mb-1">
                      {t("whatHeSaid")}
                    </div>
                    <div className="quote-text text-(--color-cp-ink) text-[13px] leading-[1.5]">
                      {lang === "he" ? s.quote.he : s.quote.en}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Open items */}
          <div className="mb-7 sm:mb-9">
            <h2 className="text-[17px] sm:text-[18px] font-semibold mb-3 sm:mb-[14px] text-(--color-cp-ink)">
              {t("openItems")}
            </h2>
            <div className="flex flex-col gap-[10px]">
              {guyOpenItems.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-(--color-cp-yellow) rounded-2xl px-4 sm:px-5 py-3.5 sm:py-4 grid items-start gap-3 sm:gap-[14px]"
                  style={{ gridTemplateColumns: "28px 1fr" }}
                >
                  <div className="w-7 h-7 rounded-full inline-flex items-center justify-center mt-[2px] bg-[rgba(154,103,0,0.18)] text-(--color-cp-yellow-text)">
                    <AlertIcon />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-(--color-cp-yellow-text) text-[14px] sm:text-[14.5px] font-semibold mb-[3px]">
                      {t(item.titleKey)}
                    </h4>
                    <p className="text-(--color-cp-yellow-deep) text-[13px] sm:text-[13.5px] leading-[1.5]">
                      {t(item.bodyKey)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next steps */}
          <div className="mb-7 sm:mb-9">
            <h2 className="text-[17px] sm:text-[18px] font-semibold mb-3 sm:mb-[14px] text-(--color-cp-ink)">
              {t("nextSteps")}
            </h2>
            <div className="flex flex-col gap-[10px]">
              {guyNextStepKeys.map((stepKey, idx) => (
                <div
                  key={idx}
                  className="bg-(--color-cp-card) border border-(--color-cp-border) rounded-[14px] shadow-(--shadow-soft) px-4 sm:px-[18px] py-3 sm:py-[14px] grid items-center gap-3 sm:gap-[14px]"
                  style={{ gridTemplateColumns: "28px 1fr" }}
                >
                  <div className="latin w-7 h-7 rounded-full bg-(--color-purple) text-white font-semibold text-[13px] inline-flex items-center justify-center">
                    {idx + 1}
                  </div>
                  <p className="text-[14px] sm:text-[14.5px] text-(--color-cp-ink)">
                    {t(stepKey)}
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
            className="flex justify-end items-center text-(--color-cp-muted) text-[13px] mt-6 py-3 min-h-[44px] hover:text-(--color-purple) transition"
          >
            {t("compareWithOthers")} {arrow}
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
