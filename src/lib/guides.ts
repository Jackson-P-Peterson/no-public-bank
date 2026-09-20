export type Guide = {
  slug: string;
  kicker: string;
  h1: string;
  title: string;
  description: string;
  lede: string;
  sections: { heading: string; paragraphs: string[] }[];
};

export const GUIDES: Guide[] = [
  {
    slug: "prop-b-san-francisco",
    kicker: "NOVEMBER 3, 2026 BALLOT",
    h1: "Prop B San Francisco",
    title: "Prop B San Francisco: Vote No on the public bank (Nov 3, 2026)",
    description:
      "Prop B San Francisco on November 3, 2026 is a City Charter amendment for a Municipal Finance Corporation and public bank. It has no funding plan. The Controller estimates $310–$460 million. Official No campaign.",
    lede: "Prop B San Francisco is the November 3, 2026 ballot measure (File No. 260535) to authorize a City Hall public bank. It is not the June 2026 Prop B on term limits. The official No committee asks San Francisco voters to vote No.",
    sections: [
      {
        heading: "What Prop B San Francisco does",
        paragraphs: [
          "Proposition B amends the San Francisco City Charter to authorize a Municipal Finance Corporation now and a public bank later. That is the entire legal effect of a Yes vote.",
          "The ballot question is: “Shall the City amend the Charter to authorize the City to establish a municipal finance corporation and a public bank?”",
          "It does not open on election night. It does not appropriate money. It does not let residents open checking accounts. It writes the mission, principles, and governance into the Charter, so unwinding it later requires another citywide election — not ordinary legislation.",
        ],
      },
      {
        heading: "Cost and funding",
        paragraphs: [
          "The City Controller, citing San Francisco’s 2023 Reinvestment Working Group plan, estimates $310 million to $460 million over eight years if the City proceeds with the corporation and then the bank. Supporters have talked about roughly $325 million in startup capital before a single loan is issued.",
          "The measure itself spends $0. A gross-receipts tax meant to capitalize the bank was introduced in February 2026 and withdrawn in March. “It costs nothing on the ballot” is not fiscal discipline. It is a blank check: lock the structure in first, fight the tax later.",
          "San Francisco is already closing a roughly $640 million deficit. Loan losses would fall on taxpayers, not private shareholders.",
        ],
      },
      {
        heading: "Who would control the San Francisco public bank",
        paragraphs: [
          "Each oversight commission has nine seats. The Board of Supervisors appoints four — the plurality. The Mayor appoints two. The Treasurer-Tax Collector, Controller, and City Attorney appoint one each.",
          "Current and recent politicians are barred from serving. Their staffers, donors, and political appointees are not. Undefined bans on “predatory lending,” fossil fuels, weapons, and labor-law violators would be interpreted by those same commissions.",
        ],
      },
      {
        heading: "Who is voting No",
        paragraphs: [
          "The San Francisco Chronicle editorial board recommends No. Mayor Daniel Lurie has said creating a new institution instead of putting scarce dollars directly into housing and small businesses is irresponsible. Supervisors Alan Wong and Stephen Sherrill voted against placing the measure on the ballot.",
          "This committee — NO on Proposition B – San Franciscans for Fiscal Responsibility (FPPC #1494608) — is the official opposition. If the idea were ready, it would come with a funding plan, a consumer product, and a business case that survives the Controller’s numbers. It does not.",
        ],
      },
    ],
  },
  {
    slug: "san-francisco-public-bank",
    kicker: "WHAT THE MEASURE ACTUALLY CREATES",
    h1: "San Francisco public bank",
    title:
      "San Francisco public bank: what Prop B would create — and what it would not",
    description:
      "The San Francisco public bank on the November 2026 ballot is a wholesale Municipal Finance Corporation under AB 857, not a neighborhood bank. No checking accounts, no funding plan, $310–$460 million Controller cost.",
    lede: "Voters searching “San Francisco public bank” are usually looking for Prop B on the November 3, 2026 ballot. The marketing is a city-owned bank. The legal text is an unfunded charter framework for a lending corporation that residents cannot join as customers.",
    sections: [
      {
        heading: "Not a bank you can join",
        paragraphs: [
          "California’s public-bank law (AB 857) is a wholesale model. Coalition spokespeople have said the institution is not designed for consumer checking or everyday banking. It would start as a lending corporation and, years later, might hold institutional deposits.",
          "If you want a credit union or a branch on your corridor, Prop B is not that. It is an unfunded lending authority written into the Charter.",
        ],
      },
      {
        heading: "North Dakota is not San Francisco",
        paragraphs: [
          "The Bank of North Dakota is a 100-year-old state institution in an energy-revenue state. It is not a first-of-its-kind city bank carved into a municipal charter during a deficit.",
          "No American city has successfully done what this San Francisco public bank contemplates. First-of-its-kind financial risk belongs in a fully funded business plan with an exit ramp — not in the Charter.",
        ],
      },
      {
        heading: "Los Angeles already voted this down",
        paragraphs: [
          "Los Angeles Measure B (2018) was a nearly identical public-bank charter amendment, placed on the ballot unanimously by the City Council. After voters heard the cost and the gaps, it lost 55.85% No to 44.15% Yes.",
          "Concept polls always look strong. Ballot language plus a price tag is what voters actually decide. San Francisco should not ignore the only large-city test of this idea.",
        ],
      },
      {
        heading: "Housing and small business do not need a new bank",
        paragraphs: [
          "San Francisco already runs housing funds, small-business loan programs, and Treasurer’s Office lending tools. Prop C on the same November ballot would expand the Housing Trust Fund.",
          "A bank does not make construction cheaper. It does not erase default risk. If the City wants more lending, it can fund programs voters can oversee and shut down without amending the Charter.",
        ],
      },
    ],
  },
  {
    slug: "what-is-prop-b",
    kicker: "VOTER GUIDE",
    h1: "What is Prop B?",
    title:
      "What is Prop B in San Francisco? November 2026 public bank, not term limits",
    description:
      "What is Prop B in San Francisco? In November 2026 it is the public bank / Municipal Finance Corporation charter amendment (File 260535), not the June 2026 term-limits Prop B. Vote November 3.",
    lede: "“What is Prop B?” depends on the election. In June 2026, San Francisco Prop B was about term limits. On November 3, 2026, Prop B is the public bank charter amendment. This site is the official No campaign on the November measure.",
    sections: [
      {
        heading: "November 3, 2026 — public bank",
        paragraphs: [
          "November Prop B (Board of Supervisors File No. 260535) asks voters to amend the Charter so the City can establish a Municipal Finance Corporation and a public bank.",
          "A Yes vote does not capitalize the bank, hire the staff, or issue loans. It creates a Charter mandate that later Boards will be pressured to fund — including, likely, a new tax.",
          "Election day is Tuesday, November 3, 2026, in the City and County of San Francisco. A simple majority decides the measure.",
        ],
      },
      {
        heading: "June 2026 — a different Prop B",
        paragraphs: [
          "San Francisco reused the letter B in June 2026 for a term-limits measure. Search results often mix the two. This committee opposes only the November public-bank Prop B.",
          "If a headline says “Prop B San Francisco” without a month, check whether it is talking about term limits (June) or the Municipal Finance Corporation (November 3, 2026).",
        ],
      },
      {
        heading: "The case for No, in one paragraph",
        paragraphs: [
          "The Controller’s cost is $310 million to $460 million. The measure appropriates nothing. Appointed commissioners would pick the loans. Residents could not open accounts. Mayor Lurie, Supervisors Wong and Sherrill, and the Chronicle editorial board have all warned against it.",
          "A No vote leaves every existing housing and small-business tool in place. It only blocks the bad sequence: Charter first, money later.",
        ],
      },
    ],
  },
];

export function getGuide(slug: string) {
  return GUIDES.find((guide) => guide.slug === slug);
}

export const GUIDE_PATHS = GUIDES.map((guide) => `/${guide.slug}`);
