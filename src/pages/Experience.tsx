import { Helmet } from "react-helmet-async";

const roles = [
  {
    company: "Tata Consultancy Services",
    location: "Bengaluru, India",
    role: "AI Engineer",
    period: "July 2024 – Present",
    stack: ["Python", "Azure", "LangChain", "FAISS", "Pinecone", "SQL", "REST APIs"],
    bullets: [
      "Designed and deployed end-to-end RAG systems on Microsoft Azure using vector databases and LLM inference — improving retrieval accuracy by ~25%.",
      "Built robust data pipelines to extract and preprocess structured and unstructured data from large-scale PDF documents.",
      "Engineered multi-agent AI systems to automate enterprise workflows, reducing manual effort by ~30%.",
      "Developed scalable ML pipelines with embedding models and vector databases, enabling efficient semantic search and document understanding.",
      "Implemented JSON-based logging and real-time monitoring using Azure Cosmos DB.",
      "Applied NLP techniques (NER, information extraction, classification) for large-scale unstructured data processing.",
      "Built Text-to-SQL pipelines enabling natural-language querying for non-technical stakeholders.",
      "Optimized model and system performance, improving scalability and response time.",
      "Collaborated with cross-functional teams to deliver production-ready AI/ML solutions aligned with business goals.",
    ],
  },
  {
    company: "OEConnection",
    location: "Chennai, India",
    role: "AI/ML Developer Intern",
    period: "July 2023 – October 2023",
    stack: ["Python", "TensorFlow", "Scikit-learn", "R", "Java"],
    bullets: [
      "Contributed to AI/ML classification and prediction models aligned with business requirements.",
      "Performed data preprocessing, cleaning and validation — improving data quality and lifting model performance by ~15%.",
      "Built and evaluated ML models with TensorFlow and Scikit-learn, applying best practices in training, hyperparameter tuning and performance optimization.",
      "Developed AI/ML solutions across Python, R and Java, demonstrating cross-language proficiency.",
    ],
  },
];

export default function Experience() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20 md:py-28">
      <Helmet>
        <title>Experience — Lokesh L</title>
        <meta name="description" content="Professional experience of Lokesh L — AI Engineer at Tata Consultancy Services and AI/ML Developer Intern at OEConnection." />
      </Helmet>
      <p className="text-xs font-medium uppercase tracking-[0.18em] text-ink-muted">Experience</p>
      <h1 className="mt-3 font-display text-5xl font-bold tracking-tight text-ink md:text-6xl">
        Where I've worked<span className="text-brand">.</span>
      </h1>

      <ol className="mt-14 space-y-12">
        {roles.map((r) => (
          <li key={r.company} className="relative border-l border-border pl-8">
            <span className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full border-2 border-background bg-brand" />
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="font-display text-2xl font-bold tracking-tight text-ink">{r.role}</h2>
              <span className="text-sm text-ink-muted">{r.period}</span>
            </div>
            <p className="mt-1 text-sm text-ink">
              {r.company} <span className="text-ink-muted">· {r.location}</span>
            </p>

            <ul className="mt-5 space-y-2.5 text-sm leading-relaxed text-ink-muted">
              {r.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <ul className="mt-5 flex flex-wrap gap-1.5">
              {r.stack.map((t) => (
                <li key={t} className="rounded-md border border-border bg-surface px-2 py-0.5 text-[11px] text-ink">{t}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  );
}
