export type NewsItem = {
  href: string;
  outlet: string;
  title: string;
  date: string;
  dateLabel: string;
  dek: string;
  image: string;
  imageAlt: string;
  imageClass?: string;
};

export const NEWS: NewsItem[] = [
  {
    href: "https://missionlocal.org/2026/09/saikat-chakrabarti-san-francisco-ballot-measure-funding/",
    outlet: "Mission Local",
    title:
      "Saikat Chakrabarti drops $400K for affordable housing, public bank and transit measures",
    date: "2026-09-16",
    dateLabel: "September 16, 2026",
    dek: "Chakrabarti contributed $150,000 to Yes on Proposition B, the San Francisco public bank measure, as part of $400,000 across three November ballot measures.",
    image: "/news/mission-local.jpg",
    imageAlt:
      "Saikat Chakrabarti speaking after June 2026 election results in San Francisco",
    imageClass: "object-cover object-[center_20%]",
  },
  {
    href: "https://www.sfchronicle.com/opinion/editorials/article/prop-b-bank-san-francisco-22422523.php",
    outlet: "San Francisco Chronicle",
    title:
      "Endorsement: Vote no on San Francisco’s Prop B to create a public bank",
    date: "2026-09-10",
    dateLabel: "September 10, 2026",
    dek: "The Chronicle editorial board recommends No, citing no funding plan, hundreds of millions in cost, and tools the city already has.",
    image: "/news/chronicle-editorial.jpg",
    imageAlt:
      "San Francisco Chronicle illustration for its No on Prop B editorial",
    imageClass: "object-cover object-[center_30%]",
  },
  {
    href: "https://thevoicesf.org/public-bank-debate-heats-up-as-san-francisco-voters-head-toward-november-vote/",
    outlet: "The Voice of San Francisco",
    title:
      "Public bank debate heats up as San Francisco voters head toward November vote",
    date: "2026-09-01",
    dateLabel: "September 1, 2026",
    dek: "Coverage of dueling Yes and No rallies, including Supervisor Wong and the official opposition making the case against Prop B.",
    image: "/news/voice-sf.jpg",
    imageAlt:
      "Yes on Proposition B supporters at a rally in San Francisco",
  },
  {
    href: "https://www.kqed.org/forum/2010101914947/should-san-francisco-create-a-public-bank",
    outlet: "KQED Forum",
    title: "Should San Francisco create a public bank?",
    date: "2026-08-18",
    dateLabel: "August 18, 2026",
    dek: "Forum walks through what Prop B actually does — a charter framework with no capitalization — and the risks of a first-of-its-kind city bank.",
    image: "/news/kqed.jpg",
    imageAlt: "San Francisco skyline from underneath the Bay Bridge",
  },
  {
    href: "https://www.sfchronicle.com/opinion/openforum/article/public-bank-housing-san-francisco-22339707.php",
    outlet: "San Francisco Chronicle",
    title: "Why the case for an S.F. public bank makes no sense",
    date: "2026-07-18",
    dateLabel: "July 18, 2026",
    dek: "UC Berkeley law professor Prasad Krishnamurthy argues housing bonds and the Housing Trust Fund already do this work with less risk.",
    image: "/news/chronicle-openforum.jpg",
    imageAlt: "A key to a vacant San Francisco apartment rental",
    imageClass: "object-cover object-right",
  },
  {
    href: "https://www.americanbanker.com/news/san-francisco-to-vote-on-whether-to-set-up-public-bank",
    outlet: "American Banker",
    title: "San Francisco to vote on whether to set up public bank",
    date: "2026-07-13",
    dateLabel: "July 13, 2026",
    dek: "Trade coverage of the November vote, the 9–2 Board placement, and Supervisor Wong’s warning that the city has not shown how it would be funded.",
    image: "/news/american-banker.jpg",
    imageAlt: "San Francisco skyline used with American Banker’s public bank story",
  },
  {
    href: "https://nypost.com/2026/07/09/us-news/san-francisco-eyes-public-bank-inspired-by-north-dakota/",
    outlet: "New York Post",
    title:
      "San Francisco eyes public bank inspired by North Dakota",
    date: "2026-07-09",
    dateLabel: "July 9, 2026",
    dek: "National coverage of the unfunded $325 million startup cost, the city’s deficit, and the North Dakota comparison.",
    image: "/news/nypost.jpg",
    imageAlt: "New York Post collage on San Francisco’s proposed public bank",
  },
  {
    href: "https://www.axios.com/local/san-francisco/2026/07/08/san-francisco-public-bank-us-first-ballot-measure",
    outlet: "Axios San Francisco",
    title:
      "San Francisco could create the nation’s first city-run public bank",
    date: "2026-07-08",
    dateLabel: "July 8, 2026",
    dek: "Axios reports the measure creates a governance framework, not the money, after the Board voted 9–2 to put it on the Nov. 3 ballot.",
    image: "/news/axios.jpg",
    imageAlt: "Axios illustration of a person holding a bag of money",
  },
];
