import { Helmet } from "react-helmet-async";

const education = [
  { school: "Vellore Institute of Technology, Chennai", degree: "M.Tech (Integrated), Computer Science Engineering", detail: "Major: Business Analytics" },
  { school: "Indian Institute of Technology, Madras", degree: "Foundation in Data Science", detail: "Major: Data Science" },
];

export default function About() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20 md:py-28">
      <Helmet>
        <title>About — Lokesh L</title>
        <meta name="description" content="Background, education and approach of Lokesh L, AI/ML Engineer specialising in LLMs, RAG and multi-agent systems." />
      </Helmet>
      <p className="text-xs font-medium uppercase tracking-[0.18em] text-ink-muted">About</p>
      <h1 className="mt-3 font-display text-5xl font-bold tracking-tight text-ink md:text-6xl">
        Engineering for measurable impact<span className="text-brand">.</span>
      </h1>

      <div className="mt-10 space-y-6 text-lg leading-relaxed text-ink-muted">
        <p>
          I'm a results-driven AI/ML Engineer with <span className="text-ink">2+ years</span> of hands-on experience designing and deploying production-grade machine learning systems. My focus is{" "}
          <span className="text-ink">Large Language Models, Retrieval-Augmented Generation, NLP, and multi-agent AI architectures</span> — built and operated on Microsoft Azure.
        </p>
        <p>At Tata Consultancy Services I build end-to-end ML pipelines using vector databases, embedding models and LLM-based inference: Text-to-SQL agents, PDF extraction pipelines, semantic search, and custom monitoring stacks on Azure Cosmos DB.</p>
        <p>I care about systems that <span className="text-ink">actually ship</span> — fast enough, observable enough, and aligned with the business outcome they're meant to move.</p>
      </div>

      <hr className="my-16 border-border" />

      <section>
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-ink-muted">Education</p>
        <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink">
          Where I trained<span className="text-brand">.</span>
        </h2>
        <ul className="mt-8 space-y-6">
          {education.map((e) => (
            <li key={e.school} className="rounded-xl border border-border bg-background p-6">
              <p className="font-display text-lg font-semibold text-ink">{e.degree}</p>
              <p className="mt-1 text-sm text-ink-muted">{e.school}</p>
              <p className="mt-2 text-xs text-brand">{e.detail}</p>
            </li>
          ))}
        </ul>
      </section>

      <hr className="my-16 border-border" />

      <section>
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-ink-muted">Leadership</p>
        <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink">
          Beyond the code<span className="text-brand">.</span>
        </h2>
        <div className="mt-8 rounded-xl border border-border bg-background p-6">
          <p className="font-display text-lg font-semibold text-ink">Head of Research &amp; Development — Tech Researchers Club, VIT Chennai</p>
          <p className="mt-1 text-sm text-ink-muted">Sept 2022 – June 2023</p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-ink-muted">
            <li>Led a cross-functional R&amp;D team to execute AI/ML innovation projects, aligning research with organizational goals.</li>
            <li>Mentored team members and fostered a collaborative, problem-solving culture that lifted overall technical capability.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
