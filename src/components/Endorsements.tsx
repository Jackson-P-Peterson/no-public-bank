import Image from "next/image";

const officials = [
  {
    name: "Daniel Lurie",
    title: "Mayor of San Francisco",
    src: "/endorsements/daniel-lurie.jpg",
    alt: "San Francisco Mayor Daniel Lurie",
    quote:
      "Creating a new institution, rather than investing those resources directly in housing, small businesses and other critical needs, is irresponsible.",
  },
  {
    name: "Stephen Sherrill",
    title: "District 2 Supervisor",
    src: "/endorsements/stephen-sherrill.jpg",
    alt: "San Francisco District 2 Supervisor Stephen Sherrill",
    quote:
      "It is a redundant tool on top of tools that we already have and aren’t using.",
  },
  {
    name: "Alan Wong",
    title: "District 4 Supervisor",
    src: "/endorsements/alan-wong.jpg",
    alt: "San Francisco District 4 Supervisor Alan Wong",
    quote:
      "Asking voters to commit San Francisco to potentially running a financial institution is asking for trust the city has not yet earned.",
  },
];

const organizations = [
  {
    name: "San Francisco Chronicle Editorial Board",
    src: "/endorsements/sf-chronicle.png",
    alt: "San Francisco Chronicle logo",
  },
  {
    name: "San Francisco Chamber of Commerce",
    src: "/endorsements/sf-chamber.png",
    alt: "San Francisco Chamber of Commerce logo",
    dark: true,
  },
  {
    name: "GrowSF",
    src: "/endorsements/growsf.png",
    alt: "GrowSF logo",
  },
  {
    name: "ConnectedSF",
    src: "/endorsements/connectedsf.png",
    alt: "ConnectedSF logo",
  },
  {
    name: "SPUR",
    src: "/endorsements/spur.png",
    alt: "SPUR logo",
  },
  {
    name: "CalTax",
    src: "/endorsements/caltax.png",
    alt: "California Taxpayers Association logo",
  },
  {
    name: "Howard Jarvis Taxpayers Association",
    src: "/endorsements/hjta.png",
    alt: "Howard Jarvis Taxpayers Association logo",
  },
];

const people = [
  "Garry Tan",
  "Marie Hurabiell",
  "Griffin Lee",
  "Edward Escobar",
  "Jackson Peterson",
  "Jon Coupal",
  "Tuan Ngo",
  "Larry Marso",
  "Leslie Huang",
  "Gina Tse-Louie",
  "Stephanie Jeong",
  "Dorothy Joan Leone",
  "Kathleen Louise Trewin",
  "Francesca Pastine",
  "Henry Karnilowicz",
  "Todd Greenberg",
  "Stefania Rose",
  "Seneca Scott",
  "Adam Mesnick",
  "Richie Greenberg",
  "Erica Sandberg",
  "William Peterson",
  "Tom Wolf",
  "Ji Winkler",
];

export function Endorsements() {
  return (
    <section id="endorsements" className="bg-white">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <p className="font-display text-[18px] font-bold tracking-[0.18em] text-orange">
          ENDORSEMENTS
        </p>
        <h2 className="font-display mt-3 max-w-5xl text-[clamp(2.85rem,6.8vw,5.25rem)] font-black leading-[0.92] tracking-[-0.02em] text-black">
          LEADERS WHO KNOW THE RISK.
          <br />
          <span className="text-orange">THEY’RE VOTING NO.</span>
        </h2>

        <h3 className="font-display mt-14 text-[20px] font-bold tracking-[0.16em] text-orange md:mt-16">
          ELECTED OFFICIALS
        </h3>
        <ul className="mt-6 grid gap-5 sm:grid-cols-3">
          {officials.map((person) => (
            <li key={person.name} className="border-4 border-black bg-paper">
              <div className="relative aspect-[4/5] overflow-hidden bg-navy">
                <Image
                  src={person.src}
                  alt={person.alt}
                  fill
                  className="object-cover object-[center_18%]"
                  sizes="(max-width: 640px) 100vw, 33vw"
                  loading="eager"
                />
              </div>
              <div className="border-t-4 border-black px-4 py-4">
                <p className="font-display text-[28px] font-black leading-none tracking-tight text-black">
                  {person.name}
                </p>
                <p className="mt-2 text-[16px] font-semibold leading-snug text-muted md:text-[18px]">
                  {person.title}
                </p>
                <blockquote className="mt-4 border-l-4 border-orange pl-3 text-[16px] font-medium leading-snug text-ink md:text-[17px]">
                  “{person.quote}”
                </blockquote>
              </div>
            </li>
          ))}
        </ul>

        <h3 className="font-display mt-14 text-[20px] font-bold tracking-[0.16em] text-orange md:mt-16">
          ORGANIZATIONS / BUSINESSES
        </h3>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {organizations.map((org) => (
            <li
              key={org.name}
              className="flex flex-col border-4 border-black bg-white"
            >
              <div
                className={
                  org.dark
                    ? "relative h-36 overflow-hidden bg-[#1b1b1b] md:h-40"
                    : "relative h-36 overflow-hidden bg-white md:h-40"
                }
              >
                <div className="absolute inset-5">
                  <Image
                    src={org.src}
                    alt={org.alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="eager"
                  />
                </div>
              </div>
              <p className="border-t-4 border-black px-4 py-3 font-display text-[18px] font-extrabold leading-tight tracking-wide text-black">
                {org.name}
              </p>
            </li>
          ))}
        </ul>

        <h3 className="font-display mt-14 text-[20px] font-bold tracking-[0.16em] text-orange md:mt-16">
          SAN FRANCISCANS
        </h3>
        <ul className="mt-6 columns-1 sm:columns-2 md:columns-3 md:gap-x-10">
          {people.map((name) => (
            <li
              key={name}
              className="break-inside-avoid border-b border-line py-2.5 text-[18px] font-semibold leading-snug text-ink md:text-[20px]"
            >
              {name}
            </li>
          ))}
        </ul>
        <p className="mt-10 text-center font-display text-[22px] font-bold tracking-[0.14em] text-muted">
          ~ Partial List ~
        </p>
      </div>
    </section>
  );
}
