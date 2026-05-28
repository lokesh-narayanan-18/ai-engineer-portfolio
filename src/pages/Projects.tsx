import { Helmet } from "react-helmet-async";
import { ArrowUpRight } from "lucide-react";

type Project = {
  title: string;
  year: string;
  blurb: string;
  bullets: string[];
  tags: string[];
  type: "Work" | "Personal";
};

const projects: Project[] = [
  {
    title: "Enterprise RAG on Azure",
    year: "2024 – Present",
    type: "Work",
    blurb: "End-to-end Retrieval-Augmented Generation system deployed on Microsoft Azure for enterprise document understanding.",
    bullets: [
      "Improved retrieval accuracy by ~25% via embedding tuning and hybrid search.",
      "Vector store on FAISS / Pinecone with chunking and re-ranking pipeline.",
      "LLM inference endpoints exposed as REST APIs for downstream products.",
    ],
    tags: ["Python", "Azure", "LangChain", "FAISS", "Pinecone", "LLMs", "RAG"],
  },
  {
    title: "Multi-Agent Workflow Automation",
    year: "2024 – Present",
    type: "Work",
    blurb: "Agentic AI systems that automate enterprise operational workflows end-to-end.",
    bullets: [
      "Reduced manual effort by ~30% across targeted processes.",
      "Designed task decomposition, tool-use and supervisor agents.",
      "JSON-based observability with Azure Cosmos DB for run-level analytics.",
    ],
    tags: ["LangChain", "Multi-Agent", "Azure", "Cosmos DB", "Prompt Engineering"],
  },
  {
    title: "Text-to-SQL Natural Language Interface",
    year: "2024",
    type: "Work",
    blurb: "Conversational SQL agent letting non-technical stakeholders query enterprise databases in plain English.",
    bullets: [
      "Schema-aware prompt construction with safety guards.",
      "Few-shot examples + retrieval over query history to lift accuracy.",
      "REST API integration with internal BI tools.",
    ],
    tags: ["LLMs", "SQL", "RAG", "REST APIs", "Python"],
  },
  {
    title: "PDF Extraction & NLP Pipelines",
    year: "2024",
    type: "Work",
    blurb: "Robust pipelines to extract structured and unstructured data from large-scale PDF documents for ML and NLP workflows.",
    bullets: [
      "NER, information extraction and classification at scale.",
      "Preprocessing and validation tooling that improved data quality measurably.",
      "Plug-in design for multiple document families and layouts.",
    ],
    tags: ["NLP", "NER", "Python", "Embeddings", "Pipelines"],
  },
  {
    title: "Image Caption Generator",
    year: "April 2023",
    type: "Personal",
    blurb: "End-to-end image captioning combining CNN feature extraction with sequence-to-sequence decoding.",
    bullets: [
      "Custom image–text dataset collected and processed from Twitter.",
      "Reached 73% caption-to-image matching accuracy via transfer learning.",
      "Delivered inside a 4–5 month research timeline.",
    ],
    tags: ["Computer Vision", "NLP", "TensorFlow", "Seq2Seq", "Transfer Learning"],
  },
];

export default function Projects() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <Helmet>
        <title>Projects — Lokesh L</title>
        <meta name="description" content="Selected AI/ML work: RAG systems on Azure, multi-agent automation, Text-to-SQL pipelines, PDF extraction and an image captioning model." />
      </Helmet>
      <p className="text-xs font-medium uppercase tracking-[0.18em] text-ink-muted">Selected work</p>
      <h1 className="mt-3 font-display text-5xl font-bold tracking-tight text-ink md:text-6xl">
        Things I've shipped<span className="text-brand">.</span>
      </h1>
      <p className="mt-4 max-w-2xl text-ink-muted">
        A mix of enterprise AI delivered at TCS and personal research. Most production work is under NDA; what's below is what I can talk about.
      </p>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <article key={p.title} className="group relative flex flex-col rounded-2xl border border-border bg-background p-7 transition-colors hover:border-ink/30">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-brand">{p.type} · {p.year}</span>
                <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight text-ink">{p.title}</h2>
              </div>
              <ArrowUpRight className="h-5 w-5 shrink-0 text-ink-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" />
            </div>

            <p className="mt-4 text-sm leading-relaxed text-ink-muted">{p.blurb}</p>

            <ul className="mt-5 space-y-2 text-sm text-ink-muted">
              {p.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <ul className="mt-6 flex flex-wrap gap-1.5">
              {p.tags.map((t) => (
                <li key={t} className="rounded-md border border-border bg-surface px-2 py-0.5 text-[11px] text-ink">{t}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}
