import clsx from "clsx";
import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type Section = {
  title: string;
  to: string;
  description: string;
};

const SectionList: Section[] = [
  {
    title: "Languages & Frameworks",
    to: "/docs/languages/java",
    description: "Java, Spring Boot, Kotlin, Python and Frontend: language features, runtimes and framework APIs.",
  },
  {
    title: "Architecture",
    to: "/docs/architecture/microservices",
    description: "Microservices, Saga, event-driven architecture, DDD and messaging concepts.",
  },
  {
    title: "Platform",
    to: "/docs/platform/cloud",
    description: "Technologies you deploy and operate: Cloud, Kafka, Kubernetes and more.",
  },
  {
    title: "GenAI",
    to: "/docs/genai",
    description: "LLM fundamentals, RAG, embeddings, agents, MCP and evaluation.",
  },
  {
    title: "Programming",
    to: "/docs/programming/lld",
    description: "Data structures and algorithms, LLD, SOLID, design patterns and TDD.",
  },
  {
    title: "System Design",
    to: "/docs/designs",
    description: "Building blocks and end-to-end \"Design X\" interview problems.",
  },
  {
    title: "Behavioural",
    to: "/docs/behavioural",
    description: "How to structure answers to behavioural and leadership questions.",
  },
];

function SectionCard({ title, to, description }: Section) {
  return (
    <div className={clsx("col col--4", styles.section)}>
      <Link to={to} className={clsx("card padding--lg", styles.card)}>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </Link>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {SectionList.map((props) => (
            <SectionCard key={props.title} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
