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
    id: "information-systems",
    label: "Information Systems",
    shortLabel: "Info Systems",
    x: 50,
    y: 22,
    color: "#38BDF8",
    tagline: "How structure shapes thought.",
    essay: `Information systems are not neutral. Every database schema, every API contract, every taxonomy we impose on data reflects a theory of the world — a set of assumptions about what matters, what can be measured, and what relations deserve to be formalized. When we design a system, we are not merely solving a technical problem. We are making ontological commitments.

The gap between the map and the territory grows critical at scale. A hospital's record system that doesn't account for ambiguous diagnoses will systematically distort clinical reality. A content platform's engagement metric that conflates attention with value will gradually reshape the media it hosts. Systems are not passive pipes — they are active participants in constructing the phenomena they were built to represent.

This is why information architecture is fundamentally a humanistic discipline. The best systems thinkers are part logician, part anthropologist, part philosopher of language. They understand that the real design surface is not the interface or the database — it's the conceptual model, the shared mental representation that a system makes possible or forecloses.`,
    tags: ["ontology", "architecture", "epistemology"],
  },
  {
    id: "media-ecology",
    label: "Media Ecology",
    shortLabel: "Media",
    x: 18,
    y: 48,
    color: "#A78BFA",
    tagline: "The medium is the environment.",
    essay: `Marshall McLuhan's most important insight was not that the medium is the message — it was that most people never think about the medium at all. We experience content; we rarely experience the substrate that shapes how content can exist, how it feels, what it does to time and attention.

Media ecology treats communication technologies as environments. Television did not just deliver different content than radio — it restructured family space, reshaped political discourse, and altered the cognitive rhythms of entire generations. The internet did not merely accelerate information distribution — it disaggregated authority, fractured shared narrative, and created new forms of collective intelligence alongside new failure modes of collective delusion.

Understanding any era's culture requires understanding its dominant media forms. Not as causes — media ecology is not determinism — but as constraints and affordances, the shape of the water in which thought swims. The question is always: what kinds of ideas become thinkable, speakable, shareable — and which become impossible — inside this particular technological environment?`,
    tags: ["McLuhan", "culture", "technology"],
  },
  {
    id: "technology-culture",
    label: "Technology & Culture",
    shortLabel: "Tech Culture",
    x: 82,
    y: 48,
    color: "#4ADE80",
    tagline: "Tools shape societies. Societies shape tools.",
    essay: `Technology is never just technology. Every tool carries with it a set of social relations, economic assumptions, and power configurations. The smartphone is not just a communication device — it is a surveillance apparatus, a labor management system, a new form of intimacy, and a restructuring of urban space, all at once.

The mistake of technological determinism is to treat these effects as inevitable, as if the artifact dictates its own use. The mistake of social constructivism is to treat technology as infinitely malleable, shaped entirely by whoever wields it. The truth is more interesting: technology and culture co-evolve. Each shapes the other across iterative cycles, with neither fully in control.

Silicon Valley's greatest blind spot has been the refusal to engage seriously with this co-evolution. "Move fast and break things" is a design philosophy that externalizes social cost. The resulting products are not neutral tools that people use — they are environments that people inhabit, and that inhabit people in turn. Critical literacy about technology means learning to see these environments, to name their effects, and to imagine alternatives.`,
    tags: ["critique", "society", "power"],
  },
  {
    id: "systems-thinking",
    label: "Systems Thinking",
    shortLabel: "Systems",
    x: 28,
    y: 76,
    color: "#FBBF24",
    tagline: "Seeing wholes in a world of parts.",
    essay: `Most problems that resist solution are not complicated — they are complex. Complicated problems have many parts but those parts behave predictably; complex problems involve feedback, emergence, and non-linear causality. Treating a complex problem as merely complicated is one of the most reliable ways to make it worse.

Systems thinking is the discipline of perceiving and reasoning about whole systems rather than isolated components. It asks: what are the feedback loops? Where are the delays? What are the stocks and flows? What behaviors does this structure generate — not just today, but over time, at scale, under stress?

The practical application of systems thinking is humility in the face of intervention. Every policy, every product, every organizational change is an experiment in a complex adaptive system. The honest framing is not "we will solve X" but "we will introduce perturbation Y and observe how the system responds." This is not defeatism — it is the precondition for learning rather than cycling through the same failed interventions with growing confidence.`,
    tags: ["feedback", "emergence", "complexity"],
  },
  {
    id: "knowledge-futures",
    label: "Knowledge Futures",
    shortLabel: "Knowledge",
    x: 72,
    y: 76,
    color: "#FB7185",
    tagline: "How will we know, tomorrow?",
    essay: `The epistemic infrastructure of civilization is in transition. For five centuries, the printed codex was the dominant technology for stabilizing, authenticating, and transmitting knowledge. Peer review, citation, the footnote, the encyclopedia — these are not timeless features of knowledge-making. They are historical responses to the affordances and constraints of print.

AI-generated content, decentralized publishing, algorithmic curation, and the collapse of gatekeeping institutions are not just threats to the status quo — they are invitations to re-examine what we actually want from knowledge infrastructure. What problems were academic journals solving? Which of those problems remain? What new problems have they created? What might better solutions look like?

The future of knowledge is not pre-determined. It will be shaped by the choices of designers, policymakers, researchers, and platform builders — most of whom are not currently thinking of themselves as engaged in epistemic infrastructure. This is the highest-stakes design challenge of the coming decades, and it is almost entirely invisible to the people who have the power to shape it.`,
    tags: ["AI", "epistemology", "institutions"],
  },
];
