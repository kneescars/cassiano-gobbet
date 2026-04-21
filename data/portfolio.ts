// data/portfolio.ts

export interface Project {
  id: string;
  title: string;
  year: string;
  category: string;
  description: string;
  detail: string;
  tags: string[];
  link?: string;
  status: "live" | "research" | "published" | "ongoing";
}

export const projects: Project[] = [
  {
    id: "hidden-infra",
    title: "Ads, tech the cost of news and the economics you don’t see",
    year: "2026",
    category: "Analysis",//any category placed here will show up in the menu 'All Analysis, etc'
    description: "The hidden cost structure of modern news: ad-tech extraction acting as an invisible tax, and the infrastructure rent of platforms controlling distribution, hosting, and access to audiences.",
    detail: `A structural analysis of the transition from isolated misinformation to “deep disinformation,” where narratives accumulate into durable, self-reinforcing corpora that audiences inhabit over time. The piece examines how algorithmic amplification, emotional engagement, and network effects transform exposure into epistemic enclosure, making correction ineffective and disagreement persistent. 

It connects these dynamics to institutional outcomes across Western democracies and Latin America, highlighting how polarisation, media capture, and fragmented information flows erode shared factual baselines. By focusing on incentives rather than individual actors alone, it argues that the loss of common ground is an emergent property of platform economics, attention-driven design, and fragmented regulatory environments—requiring structural, enforceable interventions rather than content-level fixes.`,
    tags: ["Disinformation", "Reality", "Infrastructure"],
    status: "published",
  },
  {
    id: "deep-disinformation",
    title: "Deep disinformation: loss of common ground is the new normal",
    year: "2026",
    category: "Essay",
    description: "How disinformation evolves into self-reinforcing belief ecosystems that fragment shared reality and weaken institutional consensus.",
    detail: `A structural analysis of how disinformation has evolved from isolated falsehoods into persistent, self-reinforcing ecosystems. Over time, repeated narratives form a “corpus” that users return to, creating parallel realities with little overlap.

By examining engagement dynamics, identity alignment, and algorithmic amplification, it shows how audiences cluster around incompatible versions of truth. The central argument: the problem is no longer correcting errors, but confronting a landscape where common ground has structurally disappeared.  `,
    tags: ["Information Architecture", "Organizations", "Epistemology"],
    status: "published",
  },
  {
    id: "attention-commons",
    title: "How digital economics led the institutional voice to “Selfie” journalism",
    year: "2026",
    category: "Analysis",
    description: "Applying commons theory to the political economy of human attention.",
    detail: `Attention is finite. Digital platforms treat it as a resource to be extracted rather than a commons to be managed. This research applies Elinor Ostrom's framework for governing shared resources to the problem of collective attention — asking what institutional designs might sustain a healthy epistemic commons in the age of algorithmic recommendation.

The research includes both theoretical contributions and a survey of existing governance experiments in platform design, academic publishing, and public media.`,
    tags: ["Digital economics", "Narrative", "Individualism", "first-person"],
    status: "published",
  },
  {
    id: "lost - media",
    title: "Checkmate - How Media Lost the Public Information Space  ",
    year: "2026",
    category: "Essay",
    description: "Media lost the war for attention in the infrastructure layer - not the content.",
    detail: `Media’s decline is not reducible to the dominance of Alphabet and Meta, but reflects a structural loss of control over infrastructure and visibility. The transition from scarcity to abundance dismantled its economic model, exposing it to global competition and eroding pricing power.

Presented in academic and policy contexts, this work frames media not as an industry in crisis but as a system reconfigured by platform monopolies. It develops a conceptual lens to understand how control over distribution reshapes perception, coordination, and the stability of shared reality.
`,
    tags: ["Infrastructure", "Information Monopoly", "Media"],
    status: "published",
  },
  {
    id: "epistemic-infrastructure",
    title: "Disinformation Is Not the Real Problem",
    year: "2024",
    category: "Essay",
    description: "A collaborative research initiative focused on the design of knowledge systems for the AI era.",
    detail: `An interdisciplinary initiative bringing together researchers from information science, philosophy, computer science, and journalism to address the challenge of knowledge infrastructure in an era of AI-generated content and fragmented institutional authority.

Current projects include: a taxonomy of epistemic failure modes in digital environments; a design framework for AI-assisted peer review; and a policy brief on the governance of large language models in academic publishing.`,
    tags: ["AI", "Institutions", "Interdisciplinary"],
    status: "ongoing",
  },
  {
    id: "systems-atlas",
    title: "AI as a Cognitive Exoskeleton for Journalists",
    year: "2022",
    category: "Commentary",
    description: "An interactive visualization of interconnected global systems and their feedback relationships.",
    detail: `A web-based interactive atlas mapping the causal relationships between climate systems, economic systems, political systems, and technological systems at the global scale. Designed for use in educational contexts and policy deliberation.

The visualization draws on systems dynamics modeling and uses a novel interface paradigm — the "causal lens" — that allows users to trace paths of influence through the network while maintaining awareness of the whole.`,
    tags: ["Data Visualization", "Systems Dynamics", "Interactive Design"],
    status: "live",
  },
];
