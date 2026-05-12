"use client";
import { CandidateDetailView, getCandidate } from "@/components/CandidateDetailView";
import {
  guyStrengths,
  guyOpenItems,
  guyNextStepKeys,
  guyTranscript,
} from "@/lib/data";

export default function GuyDetailPage() {
  const candidate = getCandidate("guy-grassiano")!;
  return (
    <CandidateDetailView
      mode="rich"
      candidate={candidate}
      fitHeadlineKey="fitHigh"
      summaryBodyKey="summaryBody"
      strengths={guyStrengths}
      openItems={guyOpenItems}
      nextStepKeys={guyNextStepKeys}
      whatTheySaidKey="whatHeSaid"
      transcript={guyTranscript}
      pdfHref="/guy-grassiano-report.pdf"
    />
  );
}
