const facts = [
  {
    n: "01",
    title: "$460 MILLION",
    body: "That’s what the City’s own plan says this bank costs over eight years — $90 million just to open the door.",
  },
  {
    n: "02",
    title: "NO FUNDING PLAN",
    body: "The measure appropriates nothing. The only tax proposed to pay for it was withdrawn in March 2026.",
  },
  {
    n: "03",
    title: "POLITICIANS PICKING LOANS",
    body: "Their own consultants warned against binding political control. City Hall did it anyway.",
  },
];

export function Facts() {
  return (
    <section id="facts" className="bg-white">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <p className="font-display text-[18px] font-bold tracking-[0.18em] text-orange">
          THREE FACTS. MEMORIZE THEM.
        </p>
        <h2 className="font-display mt-3 max-w-5xl text-[clamp(2.85rem,6.5vw,5.25rem)] font-black leading-[0.92] tracking-[-0.02em] text-black">
          Prop B isn’t a “public bank.”
          <span className="text-orange"> It’s a blank check to city hall.</span>
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
              <h3 className="font-display mt-3 text-[clamp(2rem,3.4vw,2.85rem)] font-black leading-[0.95] text-black">
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
