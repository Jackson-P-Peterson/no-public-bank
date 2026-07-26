"use client";

import { useEffect, useState } from "react";

export function Nav() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-200 ${
        solid ? "bg-black text-white" : "bg-transparent text-white"
      }`}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 md:px-8">
        <a
          href="#top"
          className="font-display max-w-[58%] text-[13px] font-extrabold leading-[1.05] tracking-wide sm:max-w-none sm:text-[16px] md:text-[18px]"
        >
          NO CITY HALL BANK{" "}
          <span className="text-red">YOU PAY THE TAX</span>
        </a>
        <nav className="hidden items-center gap-6 text-[13px] font-semibold tracking-wide md:flex">
          <a href="#facts" className="opacity-90 hover:opacity-100">
            Facts
          </a>
          <a href="#cost" className="opacity-90 hover:opacity-100">
            Cost
          </a>
          <a href="#truth" className="opacity-90 hover:opacity-100">
            Truth
          </a>
          <a href="#act" className="opacity-90 hover:opacity-100">
            Act
          </a>
        </nav>
        <a
          href="#act"
          className="bg-red px-3.5 py-2 font-display text-[15px] font-extrabold leading-none tracking-wide text-white transition hover:bg-red-deep"
        >
          VOTE NO
        </a>
      </div>
    </header>
  );
}
