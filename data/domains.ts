// data/domains.ts

export interface Domain {
  id: string;
  label: string;
  shortLabel: string;
  x: number; // percentage 0-100
  y: number; // percentage 0-100
  color: string;
  tagline: string;
  essay: string;
  tags: string[];
}

export const domains: Domain[] = [
  {
    id: "infrastructure",
    label: "Information Infrastructure",
    shortLabel: "Infrastructure",
    x: 50,
    y: 22,
    color: "#38BDF8",
    tagline: "The physical layer that decides what can exist.",
    essay: `The internet looks weightless. It is not. Every headline, feed, and livestream rides on steel, silicon, and geopolitics. Data centres, fibre routes, submarine cables, peering agreements, spectrum, energy contracts, cooling water, and land-use permits are not "tech background". They are the hard constraints that shape what platforms can do, what newsrooms can afford, and which countries can keep their information systems sovereign.

            This is the underworld of modern journalism and digital platforms: latency and routing, outages and chokepoints, energy prices and grid capacity, regulation of critical infrastructure, and the quiet international deals that decide where capacity gets built and who can switch it off.

            If you want to understand why certain media models collapse, why some platforms become natural monopolies, or why "free" services always end up paid in another currency, start here. Infrastructure is policy made concrete. It is power with an IP address and a power meter.`,
    tags: ["infrastructure", "datacentres", "fibre", "cables", "energy", "regulation"],
  },
  {
    id: "media-systems",
    label: "Media Systems",
    shortLabel: "Media",
    x: 18,
    y: 48,
    color: "#A78BFA",
    tagline: "The software layer that shapes what people believe.",
    essay: `People argue about content while living inside the machinery that manufactures attention. Media systems are not just channels. They are decision engines: what gets surfaced, what gets buried, what gets rewarded, and what gets forgotten.

Platforms, algorithms, ranking systems, recommendation loops, and ad markets do not merely distribute journalism. They define the economic and cognitive environment journalism must survive in. They also import bias: through data, through optimisation targets, through moderation rules, and through the incentives that make outrage cheap and nuance expensive.

This is also where titans consolidates: mergers and acquisitions, vertical integration, cross-ownership between tech and news, and regulatory battles over competition, speech, privacy, and platform responsibility. The "public sphere" is now, in practice, a product surface.

The core question is not only what gets said. It is what the system makes easier to notice, easier to repeat, and easier to believe — and what it makes almost impossible to think, publish, or fund at all.`,
    tags: ["platforms", "algorithms", "digital media", "regulation", "mergers"],
  },
  {
    id: "data-power",
    label: "Data & Information Power",
    shortLabel: "Data Power",
    x: 82,
    y: 48,
    color: "#4ADE80",
    tagline: "Information is power — now more than ever.",
    essay: `Throughout history, narrative control has mattered as much as the apparatus of repression. Brute force can subjugate. Long-term domination requires justification: a story that makes power feel natural, inevitable, or righteous. The polarisation of today rings unsettling bells from the tragedies of yesterday.

In a world where digitisation is now ubiquitous, the levers of soft control have been concentrated as never before. A handful of companies have staggering amounts of data over billions of individuals, making people not only vulnerable, but mostly unaware of how much of their lives is outside their control. Information — be it user data or news narratives — is power in its raw state.

Learning the ways in which this data is controlled demands a hybrid analysis: technical, social, and political. The moguls reigning over gigantic structures across the globe are now kingmakers, eager to serve whoever has the best bid. This concentration will not decrease any time soon, and the pressure against anyone trying to derail these dynamics will become open as soon as the fabric of society is weak enough.`,
    tags: ["critique", "society", "power"],
  },
  {
    id: "disinformation-ecosystems",
    label: "Disinformation Ecosystems",
    shortLabel: "Disinformation",
    x: 28,
    y: 76,
    color: "#FBBF24",
    tagline: "The world of post-truth.",
    essay: `The quest for truth is a challenge that has intrigued humanity for thousands of years. The subject has left academia and broken into real life with a violence and fragmentation that cannot be countered with old instincts.

Checking information is necessary, but it is not sufficient if the interaction with audiences is no longer there. News companies do it because they have been taught to do so, but no one has ever told them what to do when individuals are busy following the provider with the version of reality that pleases them most. Reality is not a static object. It is the force field between subject and object. Understanding that process is where dismantling disinformation has to begin.

The main problem to break down now is no longer false information itself, but the disinformation economy that has risen around its use. Once actors have economic incentives to engage, the obstacles multiply. Even the definition of a "bad actor" becomes questionable, like everything else in the post-truth, fake news, surreal world we live in.`,
    tags: ["disinformation", "post-truth", "media"],
  },
  {
    id: "AI",
    label: "AI and Knowledge Works",
    shortLabel: "AI + Knowledge",
    x: 72,
    y: 76,
    color: "#FB7185",
    tagline: "How will we know, tomorrow?",
    essay: `Artificial intelligence can now be found in the most unexpected places, from military decision-making apps to Internet of Things devices that prepare your next meal. But do not be fooled: AI is everywhere because of outsized expectations of profit, and because a market that barely exists can still be captured — at its peak — by a handful of giants. Money always defines the story.

In a non-surprising way, AI is set to obliterate current information systems, from education to journalism. Is that a good thing? Will it give individuals capabilities they only dreamed of, or will it ravage the job market, create surveillance states, make "logical" decisions to kill with no human intervention, and concentrate global power in the hands of very few?

Technologies do not have morals. The uses given to them do. If we want to hold back the technophiles eager to deploy AI indiscriminately, then an ongoing public argument has to happen before the shock arrives. When the time for thinking becomes zero seconds, the debate must already have been done. This conversation has to start now, and it cannot be confined to public office and corporate boardrooms.`,
    tags: ["AI", "ethics", "future"],
  },
];