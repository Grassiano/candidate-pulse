"use client";
import { CandidateDetailView, getCandidate } from "@/components/CandidateDetailView";
import { otherCandidates } from "@/lib/data";

export default function EitanDetailPage() {
  const candidate = getCandidate("eitan-m")!;
  return (
    <CandidateDetailView
      mode="content"
      candidate={candidate}
      content={otherCandidates["eitan-m"]}
    />
  );
}
