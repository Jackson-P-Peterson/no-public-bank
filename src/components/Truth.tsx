const rows = [
  {
    claim: "“Public banks work — look at North Dakota.”",
    answer:
      "North Dakota nearly failed for 20 years under political lending. It was saved only when politicians were locked out of loans — the safeguard Prop B rejected.",
  },
  {
    claim: "“It will fund affordable housing.”",
    answer:
      "The Controller says capitalizing it takes money from housing bonds and services. This bank builds zero units this decade.",
  },
  {
    claim: "“It’s just a framework — no money yet.”",
    answer:
      "That’s a blank check. The only funding plan proposed was withdrawn in March. If Prop B is harmless, why the rush?",
  },
  {
    claim: "“It helps small business.”",
    answer:
      "State law forbids direct small-business lending. Don’t write a $460 million check for a bank that can’t serve you.",
  },
];

export function Truth() {
  return (
    <section id="truth" className="bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <p className="font-display text-[18px] font-bold tracking-[0.18em] text-orange">
          WHAT THEY’LL SAY
        </p>
        <h2 className="font-display mt-3 max-w-4xl text-[clamp(2.85rem,6.5vw,5.25rem)] font-black leading-[0.92] tracking-[-0.02em] text-black">
          DON’T VOTE ON THE DREAM.
          <br />
          <span className="text-orange">VOTE ON THE MEASURE.</span>
        </h2>

        <div className="mt-12 border-4 border-black bg-white">
          {rows.map((row, i) => (
            <div
              key={row.claim}
              className={`grid gap-4 p-6 md:grid-cols-[1fr_1.15fr] md:gap-8 md:p-8 ${
                i !== rows.length - 1 ? "border-b-4 border-black" : ""
              }`}
            >
              <p className="font-display text-[26px] font-extrabold leading-tight tracking-tight text-black md:text-[32px]">
                {row.claim}
              </p>
              <p className="text-[21px] font-semibold leading-relaxed text-ink">
                <span className="font-display mr-2 text-[18px] font-black tracking-wide text-orange">
                  TRUTH:
                </span>
                {row.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
