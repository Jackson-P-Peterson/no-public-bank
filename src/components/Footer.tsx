export function Footer() {
  return (
    <footer className="border-t-4 border-black bg-white">
      <div className="mx-auto max-w-6xl px-5 py-10 md:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display text-[28px] font-black leading-none tracking-tight text-black sm:text-[40px] md:text-[48px]">
              NO CITY HALL BANK{" "}
              <span className="text-red">YOU PAY THE TAX</span>
            </p>
            <p className="mt-3 max-w-md text-[15px] font-semibold leading-snug text-ink">
              $310 million. No funding plan. Politicians picking loans. Vote No —
              November 3, 2026.
            </p>
          </div>
          <div className="flex flex-wrap gap-5 text-[14px] font-bold tracking-wide">
            <a href="#facts" className="hover:text-red">
              Facts
            </a>
            <a href="#cost" className="hover:text-red">
              Cost
            </a>
            <a href="#truth" className="hover:text-red">
              Truth
            </a>
            <a href="#act" className="hover:text-red">
              Act
            </a>
          </div>
        </div>
        <p className="mt-8 border-t-2 border-line pt-6 text-[12px] leading-relaxed text-muted">
          Paid for by No on the City Hall Bank (committee formation pending). Not
          authorized by any candidate or candidate-controlled committee. Figures
          from the SF Reinvestment Working Group Business Plan (2023), AB 857,
          and Board of Supervisors File No. 260535. We attack the measure, the
          process, and the numbers — never any individual’s health, family, or
          identity.
        </p>
      </div>
    </footer>
  );
}
