const social = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/nopropbsf",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7 fill-current">
        <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.84c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.24.2 2.24.2v2.48h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/nopropb",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7 fill-current">
        <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6" />
      </svg>
    ),
  },
  {
    name: "X",
    href: "https://x.com/nopublicbank",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-current">
        <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-4.71-6.23-5.4 6.23H2.74l7.73-8.84L1.25 2.25H8.08l4.25 5.62zm-1.16 17.52h1.83L7.08 4.13H5.12z" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="border-t-4 border-black bg-white">
      <div className="mx-auto max-w-6xl px-5 py-10 md:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display text-[32px] font-black leading-[0.95] tracking-tight text-black sm:text-[44px] md:text-[56px] md:leading-none">
              <span className="block md:inline">NO ON PROP B</span>
              <span className="mt-1 block text-orange md:mt-0 md:inline">
                <span className="hidden md:inline"> </span>
                YOU’LL PAY THE TAX
              </span>
            </p>
            <p className="mt-3 max-w-lg text-[20px] font-semibold leading-snug text-ink">
              $460 million. No funding plan. Politicians picking loans. Vote No
              on Prop B — November 3, 2026.
            </p>
          </div>
          <div className="flex flex-wrap gap-5 text-[17px] font-bold tracking-wide">
            <a href="/#facts" className="hover:text-orange">
              Facts
            </a>
            <a href="/#cost" className="hover:text-orange">
              Cost
            </a>
            <a href="/#truth" className="hover:text-orange">
              Truth
            </a>
            <a href="/#act" className="hover:text-orange">
              Act
            </a>
            <a href="mailto:campaign@nopropb.com" className="hover:text-orange">
              Donate
            </a>
          </div>
        </div>
        <p className="mt-8 border-t-2 border-line pt-6 text-[1.25rem] leading-relaxed text-ink">
          Paid for by NO on Proposition B – San Franciscans for Fiscal
          Responsibility, the official opposition committee opposing Proposition
          B. FPPC # 1494608. Financial disclosures are available at{" "}
          <a
            href="https://sfethics.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-orange decoration-2 underline-offset-4 hover:text-orange"
          >
            sfethics.org
          </a>
          . Not authorized by a candidate or a committee controlled by a
          candidate.
        </p>
        <div className="mt-8 flex flex-col items-center">
          <nav aria-label="Social media" className="flex items-center gap-6">
            {social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.name}
                className="text-black transition hover:text-orange"
              >
                {item.icon}
              </a>
            ))}
          </nav>
          <a
            href="mailto:campaign@nopropb.com"
            className="mt-4 text-[18px] font-semibold text-ink hover:text-orange"
          >
            campaign@nopropb.com
          </a>
        </div>
      </div>
    </footer>
  );
}

