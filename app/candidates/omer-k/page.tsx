"use client";
import { CandidateDetailView, getCandidate } from "@/components/CandidateDetailView";
import { otherCandidates } from "@/lib/data";

export default function OmerDetailPage() {
  const candidate = getCandidate("omer-k")!;
  return (
    <CandidateDetailView
      mode="content"
      candidate={candidate}
      content={otherCandidates["omer-k"]}
    />
  );
}
