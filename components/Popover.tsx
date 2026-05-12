"use client";
import { useEffect, useState } from "react";

/**
 * Popover — opaque dropdown on desktop, bottom sheet on mobile.
 * Pattern from research: solid bg, layered shadow, dimmed backdrop on mobile only.
 */
export function Popover({
  open,
  onClose,
  title,
  children,
  align = "end",
}: {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  align?: "start" | "end" | "center";
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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

  const alignClass =
    align === "end" ? "end-0" : align === "start" ? "start-0" : "left-1/2 -translate-x-1/2";

  return (
    <>
      {/* ============ DESKTOP — opaque dropdown ============ */}
      {open && (
        <div
          role="dialog"
          aria-label={title}
          className={`hidden sm:block absolute top-[52px] ${alignClass} z-50 w-[320px] origin-top-end cp-animate-fade-scale`}
          style={{
            background: "var(--color-cp-card)",
            border: "1px solid var(--color-cp-border)",
            borderRadius: "14px",
            boxShadow:
              "0 12px 32px -8px rgba(30, 26, 57, 0.18), 0 4px 12px -4px rgba(30, 26, 57, 0.12)",
          }}
        >
          {title && (
            <div className="px-4 pt-3 pb-3 border-b border-(--color-cp-border) flex items-center justify-between">
              <div className="text-[15px] font-semibold text-(--color-cp-ink)">
                {title}
              </div>
            </div>
          )}
          <div className="px-3 py-3">{children}</div>
        </div>
      )}

      {/* ============ MOBILE — bottom sheet ============ */}
      {mounted && (
        <>
          {/* Backdrop */}
          <div
            onClick={onClose}
            aria-hidden="true"
            className={`sm:hidden fixed inset-0 z-40 transition-opacity duration-200 ${
              open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
            style={{
              background: "rgba(30, 26, 57, 0.55)",
              backdropFilter: "blur(2px)",
              WebkitBackdropFilter: "blur(2px)",
            }}
          />
          {/* Sheet */}
          <div
            role="dialog"
            aria-label={title}
            aria-modal="true"
            className={`sm:hidden fixed inset-x-0 bottom-0 z-50 transition-transform duration-[260ms] ${
              open ? "translate-y-0" : "translate-y-full"
            }`}
            style={{
              transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)",
              background: "var(--color-cp-card)",
              borderTopLeftRadius: "20px",
              borderTopRightRadius: "20px",
              boxShadow: "0 -16px 40px rgba(30, 26, 57, 0.22)",
              paddingBottom: "env(safe-area-inset-bottom)",
              maxHeight: "85dvh",
              overflowY: "auto",
            }}
          >
            {/* Drag handle */}
            <div className="flex justify-center pt-3 pb-1 sticky top-0 bg-(--color-cp-card) z-10">
              <div
                className="w-9 h-[5px] rounded-full"
                style={{ background: "rgba(154, 154, 168, 0.45)" }}
              />
            </div>
            {title && (
              <div className="px-5 pt-2 pb-3 border-b border-(--color-cp-border) sticky top-[20px] bg-(--color-cp-card) z-10">
                <div className="text-[16px] font-semibold text-(--color-cp-ink)">
                  {title}
                </div>
              </div>
            )}
            <div className="px-4 py-4">{children}</div>
          </div>
        </>
      )}

      <style>{`
        @keyframes cp-fade-scale-in {
          from { opacity: 0; transform: scale(0.96); }
          to   { opacity: 1; transform: scale(1); }
        }
        .cp-animate-fade-scale {
          animation: cp-fade-scale-in 140ms ease-out;
        }
      `}</style>
    </>
  );
}
