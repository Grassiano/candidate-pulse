"use client";
import { SearchIcon } from "./icons";
import { useSettings } from "./SettingsProvider";
import { SettingsCog } from "./SettingsCog";
import { NotificationsBell } from "./NotificationsBell";

export function TopNav() {
  const { t } = useSettings();

  return (
    <nav className="bg-(--color-cp-card) border-b border-(--color-cp-border) py-[12px] sm:py-[14px]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-8 flex items-center gap-3 sm:gap-6">
        <a
          href="/"
          aria-label="Candidate Pulse"
          className="flex items-center gap-[10px] shrink-0 min-h-[44px]"
        >
          <span
            className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] rounded-full bg-(--color-mint)"
            style={{ boxShadow: "inset 0 -2px 0 rgba(0,0,0,0.04)" }}
          />
          <span className="latin font-semibold text-[15px] sm:text-[17px] tracking-[-0.01em] text-(--color-cp-ink)">
            Candidate Pulse
          </span>
        </a>

        {/* Search input — hidden below sm */}
        <div className="hidden sm:block flex-1 max-w-[460px] mx-auto relative">
          <input
            type="text"
            placeholder={t("searchPlaceholder")}
            className="w-full border border-(--color-cp-border) bg-(--color-cp-card-2) rounded-full py-[10px] pe-[44px] ps-[18px] text-[14px] text-(--color-cp-ink) outline-none focus:border-(--color-purple) focus:bg-(--color-cp-card) transition placeholder:text-(--color-cp-muted)"
            aria-label={t("search")}
          />
          <SearchIcon
            size={16}
            className="absolute end-4 top-1/2 -translate-y-1/2 text-(--color-cp-muted)"
          />
        </div>

        <div className="flex-1 sm:hidden" />

        <div className="flex items-center gap-2 sm:gap-[14px] shrink-0">
          <button
            aria-label={t("search")}
            className="sm:hidden w-[44px] h-[44px] rounded-full border border-(--color-cp-border) bg-(--color-cp-card) inline-flex items-center justify-center text-(--color-cp-muted)"
          >
            <SearchIcon size={16} />
          </button>
          <NotificationsBell />
          <SettingsCog />
          <div className="latin w-[44px] h-[44px] rounded-full inline-flex items-center justify-center font-semibold text-[13px] text-(--color-cp-ink) bg-(--color-cp-lavender) border border-(--color-cp-border-strong)">
            L.O
          </div>
        </div>
      </div>
    </nav>
  );
}
