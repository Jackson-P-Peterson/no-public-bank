export type NewsItem = {
  slug: string;
  href: string;
  outlet: string;
  title: string;
  date: string;
  dateLabel: string;
  dek: string;
  take: string[];
  image: string;
  imageAlt: string;
  imageClass?: string;
};

export function newsPath(item: NewsItem) {
  return `/news/${item.slug}`;
}

export function getNewsBySlug(slug: string) {
  return NEWS.find((item) => item.slug === slug);
}

export const NEWS: NewsItem[] = [
  {
    slug: "sfgate-public-bank-ballot-measure",
    href: "https://www.sfgate.com/news/bayarea/article/sf-ballot-measure-to-allow-for-creation-of-22442293.php",
    outlet: "SFGate",
    title:
      "SF: Ballot Measure To Allow For Creation Of Public Bank Heads To Voters",
    date: "2026-09-21",
    dateLabel: "September 21, 2026",
    dek: "Bay City News, published in SFGate, walks through Prop B as a charter framework — not a funded bank — and notes the Controller’s warning that costs would be significant.",
    take: [
      "SFGate published a Bay City News explainer on November Prop B: it would amend the Charter to authorize a Municipal Finance Corporation and, later, a public bank. It does not create the bank on election night, and residents still could not open checking accounts.",
      "The piece quotes the Controller: if the City proceeds, “costs would be significant.” It cites the 2023 Reinvestment Working Group plan at $300 million-plus over eight years, and notes that startup money would likely come from grants and forgivable loans “unlikely to be repaid.” That is still a blank check. The Controller’s range this committee uses is $310–$460 million, and Prop B still appropriates $0.",
      "The article also names the official No side: Mayor Lurie, Supervisors Wong and Sherrill, the Chamber, the Bay Area Council, and SPUR. “First in the nation” is the Yes slogan. The ballot question is whether to lock an unfunded City Hall bank into the Charter.",
    ],
    image: "/news/sfgate.jpg",
    imageAlt:
      "San Francisco City Hall seen from Civic Center Plaza",
  },
  {
    slug: "saikat-chakrabarti-public-bank-donation",
    href: "https://missionlocal.org/2026/09/saikat-chakrabarti-san-francisco-ballot-measure-funding/",
    outlet: "Mission Local",
    title:
      "Saikat Chakrabarti drops $400K for affordable housing, public bank and transit measures",
    date: "2026-09-16",
    dateLabel: "September 16, 2026",
    dek: "Chakrabarti contributed $150,000 to Yes on Proposition B, the San Francisco public bank measure, as part of $400,000 across three November ballot measures.",
    take: [
      "Mission Local reported that Saikat Chakrabarti put $150,000 into Yes on Proposition B as part of $400,000 across three November measures. That is a large early bet on an unfunded Charter amendment.",
      "Money in a ballot fight is not the same as a business plan. Prop B still appropriates $0, still has a Controller cost of $310–$460 million, and still would not let residents open accounts.",
      "The official No committee’s read: a well-funded Yes campaign does not fix the sequence problem — lock the bank into the Charter first, invent the tax later.",
    ],
    image: "/news/mission-local.jpg",
    imageAlt:
      "Saikat Chakrabarti speaking after June 2026 election results in San Francisco",
    imageClass: "object-cover object-[center_20%]",
  },
  {
    slug: "chronicle-endorses-no-on-prop-b",
    href: "https://www.sfchronicle.com/opinion/editorials/article/prop-b-bank-san-francisco-22422523.php",
    outlet: "San Francisco Chronicle",
    title:
      "Endorsement: Vote no on San Francisco’s Prop B to create a public bank",
    date: "2026-09-10",
    dateLabel: "September 10, 2026",
    dek: "The Chronicle editorial board recommends No, citing no funding plan, hundreds of millions in cost, and tools the city already has.",
    take: [
      "The San Francisco Chronicle editorial board recommended a No vote on Prop B, the November 2026 public bank measure. The board pointed to the missing funding plan, the hundreds of millions in cost, and lending tools the City already has.",
      "That is the same case this committee makes: do not write an unfunded bank into the Charter during a deficit. Housing and small-business programs can be expanded without a new financial institution.",
      "Read the Chronicle’s endorsement, then read our FAQ for the Controller numbers, AB 857 wholesale limits, and the Los Angeles Measure B result.",
    ],
    image: "/news/chronicle-editorial.jpg",
    imageAlt:
      "San Francisco Chronicle illustration for its No on Prop B editorial",
    imageClass: "object-cover object-[center_30%]",
  },
  {
    slug: "public-bank-debate-november-vote",
    href: "https://thevoicesf.org/public-bank-debate-heats-up-as-san-francisco-voters-head-toward-november-vote/",
    outlet: "The Voice of San Francisco",
    title:
      "Public bank debate heats up as San Francisco voters head toward November vote",
    date: "2026-09-01",
    dateLabel: "September 1, 2026",
    dek: "Coverage of dueling Yes and No rallies, including Supervisor Wong and the official opposition making the case against Prop B.",
    take: [
      "The Voice of San Francisco covered dueling rallies as Prop B headed toward the November 3, 2026 ballot. Supervisor Alan Wong and the official No committee made the case against an unfunded public bank.",
      "Wong had been open to public banking and flipped after looking at City Hall’s record on risk and delivery. That is a supervisor’s judgment, not an industry talking point.",
      "Rallies do not capitalize a bank. The Controller’s range is still $310 million to $460 million, and the withdrawn tax is still gone.",
    ],
    image: "/news/voice-sf.jpg",
    imageAlt:
      "Yes on Proposition B supporters at a rally in San Francisco",
  },
  {
    slug: "kqed-should-san-francisco-create-a-public-bank",
    href: "https://www.kqed.org/forum/2010101914947/should-san-francisco-create-a-public-bank",
    outlet: "KQED Forum",
    title: "Should San Francisco create a public bank?",
    date: "2026-08-18",
    dateLabel: "August 18, 2026",
    dek: "Forum walks through what Prop B actually does — a charter framework with no capitalization — and the risks of a first-of-its-kind city bank.",
    take: [
      "KQED Forum asked whether San Francisco should create a public bank. The useful part of that hour is the legal mechanics: Prop B is a Charter framework, not capitalization, not a branch network, not checking accounts.",
      "Yes speakers described a multi-year path to a charter and talked about capital that is not on this ballot. That is the blank-check problem in plain language.",
      "If you only have time for one audio explainer, start with KQED, then come back here for the Controller cost, AB 857, and why Los Angeles voters rejected the same structure.",
    ],
    image: "/news/kqed.jpg",
    imageAlt: "San Francisco skyline from underneath the Bay Bridge",
  },
  {
    slug: "public-bank-housing-case-makes-no-sense",
    href: "https://www.sfchronicle.com/opinion/openforum/article/public-bank-housing-san-francisco-22339707.php",
    outlet: "San Francisco Chronicle",
    title: "Why the case for an S.F. public bank makes no sense",
    date: "2026-07-18",
    dateLabel: "July 18, 2026",
    dek: "UC Berkeley law professor Prasad Krishnamurthy argues housing bonds and the Housing Trust Fund already do this work with less risk.",
    take: [
      "UC Berkeley law professor Prasad Krishnamurthy argued in the Chronicle that the housing case for an S.F. public bank does not hold: bonds and the Housing Trust Fund already do this work with less risk.",
      "Prop C on the same November ballot would expand the Housing Trust Fund. That is a direct dollar path. Prop B is an institution in search of capital.",
      "A bank does not make construction cheaper or erase default risk. If the City wants more lending, fund the programs that already exist.",
    ],
    image: "/news/chronicle-openforum.jpg",
    imageAlt: "A key to a vacant San Francisco apartment rental",
    imageClass: "object-cover object-right",
  },
  {
    slug: "san-francisco-vote-to-set-up-public-bank",
    href: "https://www.americanbanker.com/news/san-francisco-to-vote-on-whether-to-set-up-public-bank",
    outlet: "American Banker",
    title: "San Francisco to vote on whether to set up public bank",
    date: "2026-07-13",
    dateLabel: "July 13, 2026",
    dek: "Trade coverage of the November vote, the 9–2 Board placement, and Supervisor Wong’s warning that the city has not shown how it would be funded.",
    take: [
      "American Banker covered the 9–2 Board vote putting a municipal finance corporation on the November 3 ballot and noted the missing funding mechanism.",
      "Supervisor Alan Wong’s warning still stands: the City has not shown how the bank would be funded. AB 857 state authorization sunsets in 2028 — that is an argument for a complete plan, not a rushed Charter lock-in.",
      "Trade press is useful for the mechanics. The voter question is simpler: should San Francisco authorize an unfunded bank while closing a deficit?",
    ],
    image: "/news/american-banker.jpg",
    imageAlt: "San Francisco skyline used with American Banker’s public bank story",
  },
  {
    slug: "san-francisco-public-bank-north-dakota",
    href: "https://nypost.com/2026/07/09/us-news/san-francisco-eyes-public-bank-inspired-by-north-dakota/",
    outlet: "New York Post",
    title:
      "San Francisco eyes public bank inspired by North Dakota",
    date: "2026-07-09",
    dateLabel: "July 9, 2026",
    dek: "National coverage of the unfunded $325 million startup cost, the city’s deficit, and the North Dakota comparison.",
    take: [
      "National coverage focused on the unfunded startup cost — on the order of $325 million before loans — and the comparison to the Bank of North Dakota.",
      "North Dakota’s bank is a century-old state institution in an energy-revenue state. It is not a city bank written into a municipal charter in a deficit year.",
      "If the national headline is “San Francisco eyes a public bank,” the local fact is that Prop B still has no funding plan.",
    ],
    image: "/news/nypost.jpg",
    imageAlt: "New York Post collage on San Francisco’s proposed public bank",
  },
  {
    slug: "first-city-run-public-bank-ballot-measure",
    href: "https://www.axios.com/local/san-francisco/2026/07/08/san-francisco-public-bank-us-first-ballot-measure",
    outlet: "Axios San Francisco",
    title:
      "San Francisco could create the nation’s first city-run public bank",
    date: "2026-07-08",
    dateLabel: "July 8, 2026",
    dek: "Axios reports the measure creates a governance framework, not the money, after the Board voted 9–2 to put it on the Nov. 3 ballot.",
    take: [
      "Axios reported the accurate core: after a 9–2 Board vote, November Prop B creates a governance framework, not the money for a city-run public bank.",
      "“Nation’s first city-run public bank” is a slogan. The ballot text is a Municipal Finance Corporation charter amendment with $0 attached.",
      "First-of-its-kind is a warning label, not a reason to vote Yes. Los Angeles already rejected a similar charter measure in 2018.",
    ],
    image: "/news/axios.jpg",
    imageAlt: "Axios illustration of a person holding a bag of money",
  },
];
