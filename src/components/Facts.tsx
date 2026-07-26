const facts = [
  {
    n: "01",
    title: "$310 MILLION",
    body: "That’s what the City’s own plan says this bank costs over eight years — $90 million just to open the door.",
  },
  {
    n: "02",
    title: "NO FUNDING PLAN",
    body: "The measure appropriates nothing. The only tax proposed to pay for it was withdrawn in March 2026.",
  },
  {
    n: "03",
    title: "POLITICIANS PICK LOANS",
    body: "Their own consultants warned against binding political control. City Hall did it anyway.",
  },
];

export function Facts() {
  return (
    <section id="facts" className="bg-white">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <p className="font-display text-[14px] font-bold tracking-[0.22em] text-red">
          THREE FACTS. MEMORIZE THEM.
        </p>
        <h2 className="font-display mt-3 max-w-4xl text-[clamp(2.5rem,6vw,4.5rem)] font-black leading-[0.92] tracking-[-0.02em] text-black">
          This isn’t a “public bank.”
          <span className="text-red"> It’s a blank check.</span>
        </h2>

        <div className="mt-14 grid gap-0 border-t-4 border-black md:grid-cols-3">
          {facts.map((fact) => (
            <article
              key={fact.n}
              className="border-b-4 border-black px-0 py-8 md:border-b-0 md:border-r-4 md:px-6 md:py-10 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
            >
              <p className="font-display text-[15px] font-bold tracking-[0.2em] text-red">
                {fact.n}
              </p>
              <h3 className="font-display mt-3 text-[clamp(1.75rem,3vw,2.35rem)] font-black leading-[0.95] text-black">
                {fact.title}
              </h3>
              <p className="mt-4 text-[17px] font-medium leading-relaxed text-muted">
                {fact.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
