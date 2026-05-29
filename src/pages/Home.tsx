import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Download, Mail, MapPin, Github, Linkedin } from "lucide-react";
import { HeroCanvas } from "@/components/HeroCanvas";
import Resume from "@/Assets/Lokesh L - Resume.pdf";
const stats = [
  { value: "2+ yrs", label: "at TCS" },
  { value: "~25%", label: "retrieval accuracy gain" },
  { value: "~30%", label: "manual effort reduced" },
  { value: "M.Tech + IIT-M", label: "VIT Chennai · DS" },
];

const stack = [
  { group: "AI / ML", items: ["LLMs", "RAG", "NLP", "Multi-Agent AI", "Prompt Engineering", "Text-to-SQL", "Computer Vision"] },
  { group: "Frameworks", items: ["LangChain", "TensorFlow", "HF Transformers", "Scikit-learn"] },
  { group: "Cloud & Data", items: ["Microsoft Azure", "Azure Cosmos DB", "FAISS", "Pinecone", "Chroma", "SQL"] },
  { group: "Languages", items: ["Python", "R", "Java", "C/C++"] },
  { group: "MLOps & Tools", items: ["Docker", "CI/CD", "REST APIs", "Git", "Model Deployment", "JSON Logging"] },
];

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Lokesh L — AI/ML Engineer Portfolio</title>
        <meta name="description" content="AI/ML Engineer with 2+ years building LLM, RAG and multi-agent systems on Azure. Currently at Tata Consultancy Services." />
        <meta property="og:title" content="Lokesh L — AI/ML Engineer Portfolio" />
        <meta property="og:description" content="Production-grade LLM, RAG and multi-agent AI systems." />
      </Helmet>

      <section className="relative overflow-hidden">
        <div className="relative mx-auto max-w-6xl px-6 pt-16 pb-20 md:pt-28 md:pb-32">
          <HeroCanvas />
          <div className="relative z-10 max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1 text-xs text-ink-muted backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
              </span>
              Available for new opportunities
            </span>

            <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight text-ink md:text-7xl">
              Lokesh L<span className="text-brand">.</span>
            </h1>
            <p className="mt-3 font-display text-3xl font-semibold leading-[1.1] tracking-tight text-ink-muted md:text-5xl">
              AI/ML Engineer building production-grade
              <span className="text-ink"> LLM, RAG &amp; multi-agent</span> systems.
            </p>

            <p className="mt-8 max-w-2xl text-base leading-relaxed text-ink-muted">
              I design and deploy end-to-end machine learning systems on{" "}
              <span className="text-ink">Microsoft Azure</span> — vector retrieval, agentic
              workflows, and natural-language interfaces. Currently at{" "}
              <span className="text-ink">Tata Consultancy Services</span>, shipping enterprise
              AI that moves real metrics.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link to="/projects" className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90">
                View projects <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={Resume} download className="inline-flex items-center gap-2 rounded-md border border-input bg-background px-5 py-3 text-sm font-medium text-ink transition-colors hover:bg-surface">
                <Download className="h-4 w-4" />
                Download résumé
              </a>
              <Link to="/contact" className="inline-flex items-center gap-1 px-2 py-3 text-sm font-medium text-ink underline-offset-4 hover:underline">
                Get in touch
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-ink-muted">
              <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4" /> Bengaluru, India</span>
              <a className="inline-flex items-center gap-2 hover:text-ink" href="mailto:lokesh.mass@outlook.com"><Mail className="h-4 w-4" /> Email</a>
              <a className="inline-flex items-center gap-2 hover:text-ink" href="https://github.com/" target="_blank" rel="noreferrer"><Github className="h-4 w-4" /> GitHub</a>
              <a className="inline-flex items-center gap-2 hover:text-ink" href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><Linkedin className="h-4 w-4" /> LinkedIn</a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-12 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">{s.value}</p>
              <p className="mt-1 text-sm text-ink-muted">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-ink-muted">Core stack</p>
        <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
          What I reach for<span className="text-brand">.</span>
        </h2>
        <p className="mt-3 max-w-2xl text-ink-muted">The tools I use day-to-day, grouped by where they sit in the stack.</p>

        <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {stack.map((g) => (
            <div key={g.group} className="bg-background p-6">
              <p className="text-xs font-medium uppercase tracking-[0.15em] text-brand">{g.group}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.items.map((i) => (
                  <li key={i} className="rounded-md border border-border bg-surface px-2.5 py-1 text-xs text-ink">{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-16 md:flex-row md:items-center">
          <div>
            <h3 className="font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">Have an AI problem worth solving?</h3>
            <p className="mt-2 text-ink-muted">I'm open to roles, contracts, and interesting collaborations.</p>
          </div>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90">
            Start a conversation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
