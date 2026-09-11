const facts = [
  {
    n: "01",
    title: "$460 MILLION",
    body: "That’s the Controller’s estimate of what this experiment costs — the City’s own fiscal number, not a campaign talking point.",
  },
  {
    n: "02",
    title: "NO FUNDING PLAN",
    body: "The measure appropriates nothing. The only tax proposed to pay for it was withdrawn in March 2026. The likely next step is a parcel tax — the same model Berkeley is putting on the ballot to capitalize its public bank.",
  },
  {
    n: "03",
    title: "POLITICIANS PICKING LOANS",
    body: "Appointed commissioners would decide who gets the money — handing loans to NGOs and political favorites. When those loans go bad, you pay.",
  },
];

export function Facts() {
  return (
    <section id="facts" className="bg-white">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <p className="font-display text-[22px] font-bold tracking-[0.12em] text-orange md:text-[20px] md:tracking-[0.18em]">
          THREE FACTS. MEMORIZE THEM.
        </p>
        <h2 className="font-display mt-3 max-w-5xl text-[clamp(3.15rem,10vw,5.5rem)] font-black leading-[0.88] tracking-[-0.03em] text-black">
          Prop B isn’t a “public bank.”
          <span className="mt-1 block text-orange">Politicians don’t.</span>
        </h2>

        <div className="mt-14 grid gap-0 border-t-4 border-black md:grid-cols-3">
          {facts.map((fact) => (
            <article
              key={fact.n}
              className="border-b-4 border-black px-0 py-8 md:border-b-0 md:border-r-4 md:px-6 md:py-10 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
            >
              <p className="font-display text-[18px] font-bold tracking-[0.16em] text-orange">
                {fact.n}
              </p>
              <h3 className="font-display mt-3 text-[clamp(2.35rem,6vw,2.85rem)] font-black leading-[0.95] text-black">
                {fact.title}
              </h3>
              <p className="mt-4 text-[21px] font-medium leading-relaxed text-muted">
                {fact.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
