export type Project = {
  slug: string;
  id: string;
  sector: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  imageAlt: string;
  stack: string[];
  problem: string;
  build: string[];
  impact: string;
};

export const projects: Project[] = [
  {
    slug: "ai-check-validation",
    id: "PROJECT-01",
    sector: "AI LEGAL",
    title: "AI Check Validation System",
    tagline: "Enterprise check validation, end to end on Azure.",
    description:
      "Enterprise-grade financial check validation powered by Azure Document Intelligence. Automates OCR processing of settlement checks with batch validation pipelines, n8n workflow orchestration, and Azure Entra ID authentication — deployed to production on Azure.",
    image: "/images/magma.png",
    imageAlt:
      "Abstract molten-orange and dark visual representing the check validation pipeline",
    stack: [
      "Azure Document Intelligence",
      "Python",
      "n8n",
      "Azure Entra ID",
      "OCR",
      "Batch pipelines",
    ],
    problem:
      "Settlement checks arrived as scans in inconsistent formats, and every one had to be manually read, cross-checked, and routed before funds could move. Manual review was slow, error-prone, and impossible to audit at scale.",
    build: [
      "Built an OCR extraction layer on Azure Document Intelligence tuned for the fields that matter on a settlement check: payee, amount, routing data, endorsements.",
      "Designed batch validation pipelines that reconcile extracted values against case records, flagging mismatches instead of silently passing them through.",
      "Orchestrated the full intake-to-decision flow with n8n so every check follows the same auditable path.",
      "Locked the system behind Azure Entra ID so access maps to real organizational identity.",
    ],
    impact:
      "Deployed to production on Azure and used by legal-operations staff daily — turning a manual review queue into an automated, auditable pipeline.",
  },
  {
    slug: "sj-chatter-box",
    id: "PROJECT-02",
    sector: "AI LEGAL",
    title: "SJ Chatter Box",
    tagline: "14-section legal demand letters, streamed and verified.",
    description:
      "AI-powered demand letter generator that streams multi-section legal documents via Claude, with citation verification against source PDFs, side-by-side review, and native Word/PDF export. Backed by 1,200+ tests.",
    image: "/images/ship.jpg",
    imageAlt:
      "A ship at sea — the visual identity for the Chatter Box demand letter generator",
    stack: [
      "Claude",
      "Python",
      "RAG",
      "Streaming",
      "Citation verification",
      "Word/PDF export",
    ],
    problem:
      "Demand letters are long, structured, high-stakes documents. Drafting one means hours of synthesizing medical records, bills, and case facts — and a single unsupported claim can undermine the whole letter.",
    build: [
      "Architected a 14-section generation pipeline where Claude streams each section live, so attorneys watch the document assemble instead of waiting on a black box.",
      "Built citation verification that checks every generated claim against the source PDFs it cites — claims that can't be traced get flagged, not shipped.",
      "Designed a side-by-side review interface pairing generated text with its source evidence.",
      "Shipped native Word and PDF export so output drops directly into existing legal workflows.",
      "Hardened the system with a suite of 1,200+ tests.",
    ],
    impact:
      "In production at a legal firm, compressing a multi-hour drafting process into a reviewed, citation-verified document — with the test coverage to ship changes confidently.",
  },
  {
    slug: "document-classifier",
    id: "PROJECT-03",
    sector: "AI LEGAL",
    title: "Custom Document Classifier",
    tagline: "40+ document types, filed correctly without a human touch.",
    description:
      "Intelligent document classification that organizes 40+ legal document types into a 12-category filing taxonomy with smart naming, Azure Cognitive Search semantic retrieval, and OneDrive/SharePoint routing.",
    image: "/images/octo.svg",
    imageAlt:
      "Stylized octopus illustration — the visual identity for the document classifier",
    stack: [
      "Azure Cognitive Search",
      "Python",
      "Semantic retrieval",
      "OneDrive / SharePoint",
      "Taxonomy design",
    ],
    problem:
      "A legal case generates dozens of document types — medical records, police reports, correspondence, liens — and they all landed in flat folders with inconsistent names. Finding the right document meant knowing who filed it and how they felt that day.",
    build: [
      "Classified 40+ legal document types into a 12-category filing taxonomy designed with the legal teams who actually retrieve these files.",
      "Implemented smart naming so files self-describe: type, party, and date readable at a glance.",
      "Wired Azure Cognitive Search semantic retrieval over the corpus, so search works by meaning, not just keywords.",
      "Automated routing into the right OneDrive/SharePoint locations the moment a document is classified.",
    ],
    impact:
      "Every incoming document now lands named, categorized, and findable — eliminating an entire class of 'where is that file' work.",
  },
  {
    slug: "services-expert",
    id: "PROJECT-04",
    sector: "AI EDU",
    title: "Sweet James Services Expert",
    tagline: "Conversational RAG for people navigating a hard moment.",
    description:
      "An AI-powered conversational legal assistant that helps users understand and navigate Sweet James personal-injury legal services.",
    image: "/images/justice_robot.png",
    imageAlt:
      "Illustration of a robot holding the scales of justice — the Services Expert assistant",
    stack: ["RAG", "Claude", "Python", "Vector search", "Conversational UX"],
    problem:
      "People researching a personal-injury claim are often stressed, in pain, and unfamiliar with legal process. Static FAQ pages don't answer the question they actually have.",
    build: [
      "Built a conversational RAG assistant grounded in the firm's real service documentation, so answers reflect what the firm actually does.",
      "Tuned retrieval so the assistant answers in plain language while staying anchored to source material instead of improvising legal claims.",
      "Designed the conversation flow to meet users where they are — first questions first, escalation to humans when it matters.",
    ],
    impact:
      "Gives prospective clients clear, grounded answers about legal services at the moment they're deciding whether to reach out.",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
