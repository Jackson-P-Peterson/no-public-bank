"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { InvolveForm, INVOLVE_SUBMITTED_KEY } from "./InvolveForm";

const SEEN_KEY = "exitInvolveSeen";
const ARM_MS = 4000;

function alreadyDone() {
  try {
    return (
      sessionStorage.getItem(SEEN_KEY) === "1" ||
      sessionStorage.getItem(INVOLVE_SUBMITTED_KEY) === "1"
    );
  } catch {
    return false;
  }
}

function markSeen() {
  try {
    sessionStorage.setItem(SEEN_KEY, "1");
  } catch {
    // ignore
  }
}

function isExternalHref(href: string) {
  try {
    const url = new URL(href, window.location.href);
    return url.origin !== window.location.origin;
  } catch {
    return false;
  }
}

export function ExitInvolve() {
  const [open, setOpen] = useState(false);
  const armed = useRef(false);
  const shown = useRef(false);
  const pendingHref = useRef<string | null>(null);
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);

  const show = useCallback(() => {
    if (shown.current || alreadyDone()) return;
    shown.current = true;
    markSeen();
    setOpen(true);
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    const href = pendingHref.current;
    pendingHref.current = null;
    if (href) window.location.assign(href);
  }, []);

  useEffect(() => {
    if (alreadyDone()) {
      shown.current = true;
      return;
    }

    const arm = window.setTimeout(() => {
      armed.current = true;
    }, ARM_MS);

    function onMouseLeave(e: MouseEvent) {
      if (!armed.current || shown.current) return;
      if (e.clientY > 8) return;
      show();
    }

    function onClick(e: MouseEvent) {
      if (!armed.current || shown.current) return;
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey) {
        return;
      }
      const target = e.target;
      if (!(target instanceof Element)) return;
      const link = target.closest("a");
      if (!link || !link.href || link.target === "_blank") return;
      if (link.protocol === "mailto:" || link.protocol === "tel:") return;
      if (!isExternalHref(link.href)) return;
      e.preventDefault();
      pendingHref.current = link.href;
      show();
    }

    document.documentElement.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("click", onClick, true);

    return () => {
      window.clearTimeout(arm);
      document.documentElement.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("click", onClick, true);
    };
  }, [show]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center p-3 sm:items-center sm:p-6">
      <button
        type="button"
        aria-label="Close"
        className="absolute inset-0 bg-black/75"
        onClick={close}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-10 max-h-[92vh] w-full max-w-lg overflow-y-auto border-4 border-black bg-white p-5 text-black shadow-2xl md:p-7"
      >
        <button
          ref={closeRef}
          type="button"
          onClick={close}
          className="absolute right-3 top-3 border-2 border-black px-2 py-1 font-display text-[16px] font-black leading-none hover:bg-black hover:text-white"
          aria-label="Close get involved form"
        >
          ×
        </button>
        <p
          id={titleId}
          className="font-display pr-10 text-[22px] font-bold tracking-[0.1em] text-orange md:text-[24px]"
        >
          BEFORE YOU GO
        </p>
        <p className="mt-2 text-[18px] font-semibold leading-snug text-ink">
          Get involved before Prop B writes an unfunded bank into the Charter.
        </p>
        <div className="mt-5">
          <InvolveForm
            idPrefix="exit-"
            showTitle={false}
            onSuccess={() => {
              pendingHref.current = null;
            }}
          />
        </div>
      </div>
    </div>
  );
}
