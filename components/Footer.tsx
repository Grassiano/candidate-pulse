"use client";
import { useSettings } from "./SettingsProvider";

export function Footer() {
  const { t } = useSettings();
  return (
    <footer className="border-t border-(--color-cp-border) bg-(--color-cp-bg) py-[18px] text-(--color-cp-muted) text-[12px] mt-auto">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-8 flex flex-wrap gap-y-[6px] gap-x-[22px]">
        <span className="inline-flex items-center gap-[6px] latin">
          {t("footerCredit")}
        </span>
      </div>
    </footer>
  );
}
