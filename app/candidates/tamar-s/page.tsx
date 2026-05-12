"use client";
import { CandidateDetailView, getCandidate } from "@/components/CandidateDetailView";
import { otherCandidates } from "@/lib/data";

export default function TamarDetailPage() {
  const candidate = getCandidate("tamar-s")!;
  return (
    <CandidateDetailView
      mode="content"
      candidate={candidate}
      content={otherCandidates["tamar-s"]}
    />
  );
}
