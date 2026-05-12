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
  candidates,
  statusKeys,
  statusToneClass,
  type Candidate,
  type TranscriptLine,
  type StrengthRef,
  type OpenItemRef,
  type CandidateInsight,
  type OtherCandidateContent,
} from "@/lib/data";
import { useSettings } from "@/components/SettingsProvider";
import type { StringKey } from "@/lib/i18n";

type Mode = "rich" | "content";

type RichProps = {
  mode: "rich";
  candidate: Candidate;
  fitHeadlineKey: StringKey;
  summaryBodyKey: StringKey;
  strengths: StrengthRef[];
  openItems: OpenItemRef[];
  nextStepKeys: StringKey[];
  whatTheySaidKey: StringKey;
  transcript: TranscriptLine[];
  pdfHref: string;
};

type ContentProps = {
  mode: "content";
  candidate: Candidate;
  content: OtherCandidateContent;
};

export function CandidateDetailView(props: RichProps | ContentProps) {
  const { t, lang } = useSettings();
  const arrow = lang === "he" ? "←" : "→";
  const { candidate } = props;
  const status = statusKeys[candidate.status];
  const statusTone = statusToneClass[candidate.status];

  const fitHeadline =
    props.mode === "rich"
      ? t(props.fitHeadlineKey)
      : lang === "he"
        ? props.content.fitHeadline.he
        : props.content.fitHeadline.en;
  const summaryBody =
    props.mode === "rich"
      ? t(props.summaryBodyKey)
      : lang === "he"
        ? props.content.summaryBody.he
        : props.content.summaryBody.en;

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
            <span className="latin text-(--color-cp-ink)">{candidate.name}</span>
          </div>

          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6 mb-6 sm:mb-7">
            <div className="flex items-center gap-3 sm:gap-4 min-w-0">
              <Avatar
                initials={candidate.initials}
                tone={candidate.avatarTone}
                size="lg"
              />
              <div className="min-w-0">
                <div className="latin text-[22px] sm:text-[26px] font-semibold tracking-[-0.01em] leading-tight text-(--color-cp-ink)">
                  {candidate.name}
                </div>
                <div className="text-(--color-cp-muted) text-[13px] sm:text-[14px] mt-[2px] flex flex-wrap items-center gap-x-[10px] gap-y-1">
                  <span className="latin">{candidate.role}</span>
                  <span>·</span>
                  <span>
                    {t("interview")}:{" "}
                    <span className="latin">{candidate.interviewDate}</span>
                  </span>
                  <span className="hidden sm:inline">·</span>
                  <span className="hidden sm:inline">{t("firstRound")}</span>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-2 -mx-4 sm:mx-0 px-4 sm:px-0 overflow-x-auto sm:overflow-visible no-scrollbar">
              {props.mode === "rich" && (
                <a
                  href={props.pdfHref}
                  download
                  className="inline-flex items-center gap-2 rounded-full bg-(--color-cp-card) border border-(--color-cp-border-strong) px-4 py-[10px] min-h-[44px] text-[14px] font-medium text-(--color-cp-ink) hover:bg-(--color-cp-bg) transition shrink-0"
                >
                  <DownloadIcon />
                  {t("exportPdf")}
                </a>
              )}
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
                style={
                  {
                    "--val": candidate.fitPct,
                    "--col": "var(--color-mint)",
                    "--size": "84px",
                  } as React.CSSProperties
                }
              >
                <span className="ring-val">
                  <span className="latin">{candidate.fitPct}%</span>
                </span>
              </div>
              <div className="sm:hidden flex-1">
                <span
                  className={`inline-flex items-center rounded-full px-3 py-[5px] text-[12.5px] font-medium leading-none ${statusTone}`}
                >
                  {t(status)}
                </span>
                <div className="text-(--color-cp-muted) text-[12.5px] mt-2">
                  {t("lastUpdated")}
                </div>
              </div>
            </div>
            <div>
              <div className="text-[15px] sm:text-[16px] text-(--color-cp-ink) font-medium mb-[6px] leading-snug">
                {fitHeadline}
              </div>
              <div className="text-(--color-cp-muted) text-[13.5px] sm:text-[14px] leading-[1.6] max-w-[56ch]">
                {summaryBody}
              </div>
            </div>
            <div className="hidden sm:block text-end text-(--color-cp-muted) text-[13px]">
              <span
                className={`inline-flex items-center rounded-full px-3 py-[5px] text-[12.5px] font-medium leading-none mb-2 ${statusTone}`}
              >
                {t(status)}
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
              {props.mode === "rich"
                ? props.strengths.map((s, idx) => (
                    <RichStrengthCard
                      key={idx}
                      idx={idx}
                      titleKey={s.titleKey}
                      descKey={s.descKey}
                      quote={lang === "he" ? s.quote.he : s.quote.en}
                      whatTheySaidKey={props.whatTheySaidKey}
                    />
                  ))
                : props.content.strengths.map((s, idx) => (
                    <SourcedStrengthCard
                      key={idx}
                      idx={idx}
                      insight={s}
                    />
                  ))}
            </div>
          </div>

          {/* Open items */}
          <div className="mb-7 sm:mb-9">
            <h2 className="text-[17px] sm:text-[18px] font-semibold mb-3 sm:mb-[14px] text-(--color-cp-ink)">
              {t("openItems")}
            </h2>
            <div className="flex flex-col gap-[10px]">
              {props.mode === "rich"
                ? props.openItems.map((item, idx) => (
                    <OpenItemCard
                      key={idx}
                      title={t(item.titleKey)}
                      body={t(item.bodyKey)}
                    />
                  ))
                : props.content.openItems.map((item, idx) => (
                    <OpenItemCard
                      key={idx}
                      title={lang === "he" ? item.title.he : item.title.en}
                      body={lang === "he" ? item.body.he : item.body.en}
                    />
                  ))}
            </div>
          </div>

          {/* Next steps */}
          <div className="mb-7 sm:mb-9">
            <h2 className="text-[17px] sm:text-[18px] font-semibold mb-3 sm:mb-[14px] text-(--color-cp-ink)">
              {t("nextSteps")}
            </h2>
            <div className="flex flex-col gap-[10px]">
              {props.mode === "rich"
                ? props.nextStepKeys.map((stepKey, idx) => (
                    <NextStepCard key={idx} idx={idx} text={t(stepKey)} />
                  ))
                : props.content.nextSteps.map((step, idx) => (
                    <NextStepCard
                      key={idx}
                      idx={idx}
                      text={lang === "he" ? step.he : step.en}
                    />
                  ))}
            </div>
          </div>

          {/* Transcript (only on rich detail page) */}
          {props.mode === "rich" && (
            <div className="mb-3">
              <TranscriptToggle lines={props.transcript} />
            </div>
          )}

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

function RichStrengthCard({
  idx,
  titleKey,
  descKey,
  quote,
  whatTheySaidKey,
}: {
  idx: number;
  titleKey: StringKey;
  descKey: StringKey;
  quote: string;
  whatTheySaidKey: StringKey;
}) {
  const { t } = useSettings();
  return (
    <div className="bg-(--color-cp-card) border border-(--color-cp-border) rounded-2xl shadow-(--shadow-soft) p-5 sm:p-[22px] sm:pb-5 flex flex-col">
      <div className="latin w-7 h-7 rounded-full bg-(--color-cp-lavender) text-(--color-cp-lavender-text) font-semibold text-[13px] inline-flex items-center justify-center mb-[14px]">
        {idx + 1}
      </div>
      <h3 className="text-[15.5px] sm:text-[16px] font-semibold mb-2 leading-[1.35] text-(--color-cp-ink)">
        {t(titleKey)}
      </h3>
      <p className="text-(--color-cp-muted) text-[13.5px] leading-[1.55] mb-4">
        {t(descKey)}
      </p>
      <div
        className="mt-auto bg-(--color-cp-quote-bg) rounded-lg px-[14px] py-3"
        style={{ borderInlineEnd: "3px solid var(--color-mint)" }}
      >
        <div className="text-(--color-cp-muted) text-[11.5px] font-medium mb-1">
          {t(whatTheySaidKey)}
        </div>
        <div className="quote-text text-(--color-cp-ink) text-[13px] leading-[1.5]">
          {quote}
        </div>
      </div>
    </div>
  );
}

function SourcedStrengthCard({
  idx,
  insight,
}: {
  idx: number;
  insight: CandidateInsight;
}) {
  const { t, lang } = useSettings();
  const sourceKey =
    insight.source === "resume"
      ? ("sourceResume" as const)
      : insight.source === "linkedin"
        ? ("sourceLinkedIn" as const)
        : ("sourceScreen" as const);
  return (
    <div className="bg-(--color-cp-card) border border-(--color-cp-border) rounded-2xl shadow-(--shadow-soft) p-5 sm:p-[22px] sm:pb-5 flex flex-col">
      <div className="latin w-7 h-7 rounded-full bg-(--color-cp-lavender) text-(--color-cp-lavender-text) font-semibold text-[13px] inline-flex items-center justify-center mb-[14px]">
        {idx + 1}
      </div>
      <h3 className="text-[15.5px] sm:text-[16px] font-semibold mb-2 leading-[1.35] text-(--color-cp-ink)">
        {lang === "he" ? insight.he.title : insight.en.title}
      </h3>
      <p className="text-(--color-cp-muted) text-[13.5px] leading-[1.55] mb-4">
        {lang === "he" ? insight.he.description : insight.en.description}
      </p>
      <div
        className="mt-auto bg-(--color-cp-quote-bg) rounded-lg px-[14px] py-3"
        style={{ borderInlineEnd: "3px solid var(--color-mint)" }}
      >
        <div className="text-(--color-cp-muted) text-[11.5px] font-medium">
          {t("insightSource")}:{" "}
          <span className="text-(--color-cp-ink) font-semibold">
            {t(sourceKey)}
          </span>
        </div>
      </div>
    </div>
  );
}

function OpenItemCard({ title, body }: { title: string; body: string }) {
  return (
    <div
      className="bg-(--color-cp-yellow) rounded-2xl px-4 sm:px-5 py-3.5 sm:py-4 grid items-start gap-3 sm:gap-[14px]"
      style={{ gridTemplateColumns: "28px 1fr" }}
    >
      <div className="w-7 h-7 rounded-full inline-flex items-center justify-center mt-[2px] bg-[rgba(154,103,0,0.18)] text-(--color-cp-yellow-text)">
        <AlertIcon />
      </div>
      <div className="min-w-0">
        <h4 className="text-(--color-cp-yellow-text) text-[14px] sm:text-[14.5px] font-semibold mb-[3px]">
          {title}
        </h4>
        <p className="text-(--color-cp-yellow-deep) text-[13px] sm:text-[13.5px] leading-[1.5]">
          {body}
        </p>
      </div>
    </div>
  );
}

function NextStepCard({ idx, text }: { idx: number; text: string }) {
  return (
    <div
      className="bg-(--color-cp-card) border border-(--color-cp-border) rounded-[14px] shadow-(--shadow-soft) px-4 sm:px-[18px] py-3 sm:py-[14px] grid items-center gap-3 sm:gap-[14px]"
      style={{ gridTemplateColumns: "28px 1fr" }}
    >
      <div className="latin w-7 h-7 rounded-full bg-(--color-purple) text-white font-semibold text-[13px] inline-flex items-center justify-center">
        {idx + 1}
      </div>
      <p className="text-[14px] sm:text-[14.5px] text-(--color-cp-ink)">
        {text}
      </p>
    </div>
  );
}

// Helper used by candidate pages to resolve their candidate record
export function getCandidate(slug: string): Candidate | undefined {
  return candidates.find((c) => c.slug === slug);
}
