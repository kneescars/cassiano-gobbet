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
    id: "media-topology",
    title: "Media Topology",
    year: "2024",
    category: "Research",
    description: "Mapping the structural relationships between media forms across historical epochs.",
    detail: `A longitudinal research project examining how the topological properties of communication networks — density, centrality, clustering — predict cultural outcomes. Drawing on network science, media history, and information theory, this work proposes a formal vocabulary for describing media environments beyond McLuhan's intuitions.

The central argument: media forms do not simply transmit culture, they constrain its possibility space. By modeling these constraints topologically, we can generate testable predictions about what kinds of ideas, movements, and institutions are possible under different media regimes.`,
    tags: ["Network Science", "Media History", "Information Theory"],
    status: "ongoing",
  },
  {
    id: "ontological-debt",
    title: "Ontological Debt",
    year: "2023",
    category: "Essay Series",
    description: "A framework for thinking about the hidden costs of premature data modeling in organizations.",
    detail: `Borrowing from software engineering's concept of technical debt, ontological debt describes the accumulated cost of conceptual commitments made too early, too rigidly, or without adequate understanding of the domain being modeled.

Published as a five-part essay series, this work has been cited in information architecture practice, knowledge management, and organizational theory contexts. The core insight: the cost of changing a conceptual model grows super-linearly with the amount of infrastructure built on top of it.`,
    tags: ["Information Architecture", "Organizations", "Epistemology"],
    status: "published",
  },
  {
    id: "attention-commons",
    title: "The Attention Commons",
    year: "2023",
    category: "Research",
    description: "Applying commons theory to the political economy of human attention.",
    detail: `Attention is finite. Digital platforms treat it as a resource to be extracted rather than a commons to be managed. This research applies Elinor Ostrom's framework for governing shared resources to the problem of collective attention — asking what institutional designs might sustain a healthy epistemic commons in the age of algorithmic recommendation.

The research includes both theoretical contributions and a survey of existing governance experiments in platform design, academic publishing, and public media.`,
    tags: ["Political Economy", "Commons Theory", "Platform Design"],
    status: "research",
  },
  {
    id: "interface-ideology",
    title: "Interface Ideology",
    year: "2022",
    category: "Talk",
    description: "Keynote exploring how UI conventions encode and transmit ideological assumptions.",
    detail: `Every interface is an argument. The button invites action; the notification demands attention; the feed implies infinitude. These are not innocent design choices — they are claims about how the world works, who has authority, and what human beings are for.

Delivered at conferences across Europe and Latin America, this talk introduces a critical vocabulary for analyzing interfaces as ideological artifacts, drawing on semiotics, political theory, and the history of design. The talk has been adapted as a course module at three universities.`,
    tags: ["Design Theory", "Semiotics", "Critical Theory"],
    status: "live",
  },
  {
    id: "epistemic-infrastructure",
    title: "Epistemic Infrastructure Lab",
    year: "2024",
    category: "Initiative",
    description: "A collaborative research initiative focused on the design of knowledge systems for the AI era.",
    detail: `An interdisciplinary initiative bringing together researchers from information science, philosophy, computer science, and journalism to address the challenge of knowledge infrastructure in an era of AI-generated content and fragmented institutional authority.

Current projects include: a taxonomy of epistemic failure modes in digital environments; a design framework for AI-assisted peer review; and a policy brief on the governance of large language models in academic publishing.`,
    tags: ["AI", "Institutions", "Interdisciplinary"],
    status: "ongoing",
  },
  {
    id: "systems-atlas",
    title: "Systems Atlas",
    year: "2022",
    category: "Design",
    description: "An interactive visualization of interconnected global systems and their feedback relationships.",
    detail: `A web-based interactive atlas mapping the causal relationships between climate systems, economic systems, political systems, and technological systems at the global scale. Designed for use in educational contexts and policy deliberation.

The visualization draws on systems dynamics modeling and uses a novel interface paradigm — the "causal lens" — that allows users to trace paths of influence through the network while maintaining awareness of the whole.`,
    tags: ["Data Visualization", "Systems Dynamics", "Interactive Design"],
    status: "live",
  },
];
