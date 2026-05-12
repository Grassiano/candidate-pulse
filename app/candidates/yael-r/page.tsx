"use client";
import { CandidateDetailView, getCandidate } from "@/components/CandidateDetailView";
import { otherCandidates } from "@/lib/data";

export default function YaelDetailPage() {
  const candidate = getCandidate("yael-r")!;
  return (
    <CandidateDetailView
      mode="content"
      candidate={candidate}
      content={otherCandidates["yael-r"]}
    />
  );
}
