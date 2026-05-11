import { clsx } from "@/lib/clsx";

type Tone = "purple" | "mint" | "pink" | "yellow" | "gray";

const toneClasses: Record<Tone, string> = {
  purple: "bg-(--color-lavender) border-(--color-lavender-border)",
  mint: "bg-[#DFFBF1] border-[#BAF1DC]",
  pink: "bg-(--color-pink) border-(--color-pink-border)",
  yellow: "bg-[#FFF3D6] border-[#F4DCA1]",
  gray: "bg-[#ECECF0] border-[#DEDEE3]",
};

export function Avatar({
  initials,
  tone = "purple",
  size = "sm",
}: {
  initials: string;
  tone?: Tone;
  size?: "sm" | "lg";
}) {
  const sizeClasses =
    size === "lg" ? "w-16 h-16 text-[22px]" : "w-9 h-9 text-[13px]";
  return (
    <div
      className={clsx(
        "inline-flex items-center justify-center rounded-full font-semibold text-(--color-ink) border",
        sizeClasses,
        toneClasses[tone],
      )}
    >
      {initials}
    </div>
  );
}
