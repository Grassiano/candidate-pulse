"use client";
import { useEffect, useRef, useState } from "react";
import { BellIcon } from "./icons";
import { Popover } from "./Popover";
import { useSettings } from "./SettingsProvider";

type Notif = {
  id: string;
  textKey: "notif1" | "notif2" | "notif3";
  metaKey: "notif1Meta" | "notif2Meta" | "notif3Meta";
  tone: "mint" | "purple" | "yellow";
};

const NOTIFS: Notif[] = [
  { id: "1", textKey: "notif1", metaKey: "notif1Meta", tone: "mint" },
  { id: "2", textKey: "notif2", metaKey: "notif2Meta", tone: "purple" },
  { id: "3", textKey: "notif3", metaKey: "notif3Meta", tone: "yellow" },
];

const toneIcon: Record<Notif["tone"], { bg: string; fg: string }> = {
  mint: { bg: "var(--color-cp-mint-bg)", fg: "var(--color-cp-mint-text)" },
  purple: { bg: "var(--color-cp-lavender)", fg: "var(--color-cp-lavender-text)" },
  yellow: { bg: "var(--color-cp-yellow)", fg: "var(--color-cp-yellow-text)" },
};

export function NotificationsBell() {
  const { t } = useSettings();
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  return (
    <div className="relative" ref={wrapRef}>
      <button
        aria-label={t("notifications")}
        aria-expanded={open}
        aria-haspopup="dialog"
        onClick={() => setOpen((v) => !v)}
        className="hidden sm:inline-flex w-[44px] h-[44px] rounded-full border border-(--color-cp-border) bg-(--color-cp-card) items-center justify-center text-(--color-cp-ink) relative hover:bg-(--color-cp-bg) transition"
      >
        <BellIcon size={16} />
        <span
          className="absolute top-[7px] end-2 w-[7px] h-[7px] bg-(--color-purple) rounded-full border-2 border-(--color-cp-card)"
          aria-hidden
        />
      </button>

      <Popover open={open} onClose={() => setOpen(false)} title={t("notifications")}>
        <div className="flex flex-col gap-2">
          {NOTIFS.map((n) => {
            const tone = toneIcon[n.tone];
            return (
              <div
                key={n.id}
                className="grid items-start gap-3 rounded-xl p-3 hover:bg-(--color-cp-bg) transition cursor-pointer"
                style={{ gridTemplateColumns: "32px 1fr" }}
              >
                <div
                  className="w-8 h-8 rounded-full inline-flex items-center justify-center text-[13px] font-semibold"
                  style={{ background: tone.bg, color: tone.fg }}
                >
                  <BellIcon size={14} />
                </div>
                <div className="min-w-0">
                  <div className="text-[13.5px] text-(--color-cp-ink) leading-[1.45]">
                    {t(n.textKey)}
                  </div>
                  <div className="text-(--color-cp-muted) text-[11.5px] mt-[2px]">
                    {t(n.metaKey)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="border-t border-(--color-cp-border) mt-3 pt-3 px-1">
          <button className="text-(--color-purple) text-[13px] font-medium hover:underline">
            {t("markAllRead")}
          </button>
        </div>
      </Popover>
    </div>
  );
}
