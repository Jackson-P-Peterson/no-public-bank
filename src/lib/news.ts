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
    slug: "spur-recommends-no-on-sf-prop-b",
    href: "https://www.spur.org/voter-guide/2026-11/sf-prop-b-public-bank",
    outlet: "SPUR",
    title: "San Francisco Prop B — Public Bank",
    date: "2026-09-29",
    dateLabel: "September 29, 2026",
    dek: "SPUR’s November voter guide recommends No. The charter amendment locks detailed governance into the Charter and still does not say how the bank would be capitalized.",
    take: [
      "SPUR recommended a No vote on San Francisco Proposition B in its November 2026 voter guide. The organization said a well-designed public bank could be useful, and still concluded this charter amendment is the wrong way to get one.",
      "The guide’s objection is governance and money. Prop B writes boards and commissions into the Charter, which SPUR says the City does not need to do — a public bank could be pursued by ordinance. The measure also does not identify capitalization, a problem in a deficit year. Without capital, the municipal finance corporation would sit inactive.",
      "That is the official No case in a civic organization’s own words: do not lock an unfunded institution into the Charter.",
    ],
    image: "/news/spur.jpg",
    imageAlt:
      "SPUR voter guide recommending No on San Francisco Proposition B",
  },
  {
    slug: "politico-campaigns-message-the-bots",
    href: "https://www.politico.com/newsletters/california-playbook-pm/2026/09/28/campaigns-are-learning-to-message-the-bots-01095564",
    outlet: "POLITICO",
    title: "Campaigns are learning to message the bots",
    date: "2026-09-28",
    dateLabel: "September 28, 2026",
    dek: "California Playbook’s ballot roundup lists San Francisco Prop B, a charter amendment for a first-in-the-nation public bank, and notes Mayor Daniel Lurie’s opposition.",
    take: [
      "POLITICO’s California Playbook listed San Francisco Proposition B in its weekly ballot roundup: a charter amendment to allow what supporters call the nation’s first public bank, with opposition from Mayor Daniel Lurie.",
      "The item is short. The rest of the newsletter is about how campaigns write for chatbots. The local facts have not changed. Prop B still creates a framework, not the money, and the mayor has said the City should spend on housing and small businesses instead of a new institution.",
      "National political coverage is starting to name the measure. The voter question is still whether to write an unfunded bank into the Charter.",
    ],
    image: "/news/politico.jpg",
    imageAlt:
      "Laptop screen showing the letters AI beside the Google Gemini logo",
  },
  {
    slug: "sf-public-press-prop-b-public-bank-groundwork",
    href: "https://www.sfpublicpress.org/proposition-b-would-lay-groundwork-for-a-san-francisco-public-bank/",
    outlet: "San Francisco Public Press",
    title:
      "Proposition B Would Lay Groundwork for a San Francisco Public Bank",
    date: "2026-09-27",
    dateLabel: "September 27, 2026",
    dek: "Sylvie Sturm reports that Prop B would not create a bank or raise taxes on election night, and quotes the Controller’s estimate of $310 million to $460 million.",
    take: [
      "The San Francisco Public Press walked through what November Prop B actually does: a Charter amendment to authorize a Municipal Finance Corporation, not a bank, a tax, or startup money on election night. Funding would have to be found later.",
      "The piece quotes Controller Greg Wagner’s analysis: establishing the corporation and moving it toward a public bank could cost about $310 million to $460 million over eight years. Some of that could come from grants and forgivable loans “unlikely to be repaid,” and sustainability “is not guaranteed.”",
      "It also records the opposition already on the record — Mayor Lurie, Supervisors Sherrill and Wong — and the fact that residents still could not open accounts. A public bank is not a neighborhood checking account.",
    ],
    image: "/news/sf-public-press.jpg",
    imageAlt:
      "Redwood Credit Union branch in San Francisco, photographed for the San Francisco Public Press",
  },
  {
    slug: "richmond-sunset-prop-b-next-scandal",
    href: "https://richmondsunsetnews.com/2026/09/24/letter-to-the-editor-prop-b-lets-not-approve-the-next-scandal/",
    outlet: "Richmond Review/Sunset Beacon",
    title: "Letter to the Editor: Prop. B, Let’s Not Approve the Next Scandal",
    date: "2026-09-24",
    dateLabel: "September 24, 2026",
    dek: "Richie Greenberg writes that Prop B asks voters to trust City Hall with an unfunded bank, and that a public bank would not let residents open accounts.",
    take: [
      "A letter in the Richmond Review/Sunset Beacon urges a No vote on Prop B. Richie Greenberg argues City Hall should not be trusted to run a bank, and that the Municipal Finance Corporation is an open-ended scheme with a startup cost in the hundreds of millions.",
      "The letter makes two points this committee keeps making: loan losses would land on taxpayers, and San Francisco already has housing, small-business, and climate tools that do not require a new bank. A public bank is not a place for neighbors to open a checking or savings account.",
      "The ballot question is whether to approve the institution before the money, the reserves, or the product exist.",
    ],
    image: "/news/richmond-sunset.jpg",
    imageAlt:
      "Letter to the editor graphic from the Richmond Review/Sunset Beacon",
  },
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
