"use client";
import { useEffect } from "react";
import { useSettings } from "./SettingsProvider";

/**
 * Modal — centered on desktop, full-screen-ish sheet on mobile.
 * Opaque card with dimmed backdrop. Click outside or Escape to close.
 */
export function NewInterviewModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const { t } = useSettings();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = originalOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        aria-hidden="true"
        className="fixed inset-0 z-40 transition-opacity duration-200 opacity-100"
        style={{
          background: "rgba(30, 26, 57, 0.55)",
          backdropFilter: "blur(3px)",
          WebkitBackdropFilter: "blur(3px)",
        }}
      />

      {/* Modal */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label={t("newInterviewTitle")}
        className="fixed z-50 inset-x-4 bottom-4 sm:inset-x-auto sm:bottom-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:w-[440px] cp-modal-in"
        style={{
          background: "var(--color-cp-card)",
          border: "1px solid var(--color-cp-border)",
          borderRadius: "20px",
          boxShadow:
            "0 24px 48px -12px rgba(30, 26, 57, 0.28), 0 8px 16px -8px rgba(30, 26, 57, 0.16)",
          paddingBottom: "env(safe-area-inset-bottom)",
        }}
      >
        <div className="px-6 pt-6 pb-5">
          {/* Icon + title */}
          <div className="flex items-center gap-3 mb-3">
            <div
              className="w-10 h-10 rounded-full inline-flex items-center justify-center"
              style={{
                background: "var(--color-cp-lavender)",
                color: "var(--color-cp-lavender-text)",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v20M2 12h20" />
              </svg>
            </div>
            <div className="text-[18px] font-semibold text-(--color-cp-ink)">
              {t("newInterviewTitle")}
            </div>
          </div>

          {/* Coming soon pill */}
          <div className="mb-4">
            <span
              className="inline-flex items-center rounded-full px-3 py-[5px] text-[11.5px] font-semibold"
              style={{
                background: "var(--color-cp-mint-bg)",
                color: "var(--color-cp-mint-text)",
              }}
            >
              {t("newInterviewComingSoon")}
            </span>
          </div>

          {/* Body */}
          <p className="text-[14px] text-(--color-cp-muted) leading-[1.6] mb-5">
            {t("newInterviewBody")}
          </p>

          {/* Upload area (decorative) */}
          <div
            className="rounded-2xl border-2 border-dashed flex items-center justify-center py-8 mb-5"
            style={{
              borderColor: "var(--color-cp-border-strong)",
              background: "var(--color-cp-bg)",
            }}
          >
            <div className="flex flex-col items-center gap-2">
              <div
                className="w-10 h-10 rounded-full inline-flex items-center justify-center"
                style={{
                  background: "var(--color-cp-card)",
                  border: "1px solid var(--color-cp-border)",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--color-cp-muted)" }}>
                  <path d="M12 19V5" />
                  <path d="M5 12l7-7 7 7" />
                </svg>
              </div>
              <div className="text-[12.5px] text-(--color-cp-muted)">
                {t("uploadRecording")}
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-2">
            <button
              onClick={onClose}
              className="px-4 py-[10px] min-h-[44px] rounded-full text-[14px] font-medium text-(--color-cp-ink) hover:bg-(--color-cp-bg) transition"
            >
              {t("cancel")}
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes cp-modal-in {
          from { opacity: 0; transform: translateY(8px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @media (min-width: 640px) {
          @keyframes cp-modal-in {
            from { opacity: 0; transform: translate(-50%, calc(-50% + 8px)) scale(0.98); }
            to   { opacity: 1; transform: translate(-50%, -50%) scale(1); }
          }
        }
        .cp-modal-in { animation: cp-modal-in 180ms ease-out; }
      `}</style>
    </>
  );
}
