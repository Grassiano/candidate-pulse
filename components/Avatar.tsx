import { clsx } from "@/lib/clsx";

type Tone = "purple" | "mint" | "pink" | "yellow" | "gray";

// Light + dark themed avatar tones
const toneClasses: Record<Tone, string> = {
  purple:
    "bg-(--color-cp-lavender) border-(--color-cp-border-strong) text-(--color-cp-ink)",
  mint: "bg-[#DFFBF1] dark:bg-[#143B30] border-[#BAF1DC] dark:border-[#1F5A47] text-(--color-cp-ink)",
  pink: "bg-[#F8D9E3] dark:bg-[#3D1F2A] border-[#EFC4D4] dark:border-[#5A2D3D] text-(--color-cp-ink)",
  yellow:
    "bg-[#FFF3D6] dark:bg-[#3D2F15] border-[#F4DCA1] dark:border-[#5A4622] text-(--color-cp-ink)",
  gray: "bg-[#ECECF0] dark:bg-[#2A2447] border-[#DEDEE3] dark:border-[#3A3160] text-(--color-cp-ink)",
};

export function Avatar({
  initials,
  tone = "purple",
  size = "sm",
  className,
}: {
  initials: string;
  tone?: Tone;
  size?: "sm" | "lg";
  className?: string;
}) {
  const sizeClasses =
    size === "lg" ? "w-16 h-16 text-[22px]" : "w-9 h-9 text-[13px]";
  return (
    <div
      className={clsx(
        "latin inline-flex items-center justify-center rounded-full font-semibold border shrink-0",
        sizeClasses,
        toneClasses[tone],
        className,
      )}
    >
      {initials}
    </div>
  );
}
