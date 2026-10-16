import clsx from "clsx";
import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import LanguagesIcon from "./icons/languages.svg";
import ArchitectureIcon from "./icons/architecture.svg";
import PlatformIcon from "./icons/platform.svg";
import GenAiIcon from "./icons/genai.svg";
import ProgrammingIcon from "./icons/programming.svg";
import SystemDesignIcon from "./icons/system-design.svg";
import BehaviouralIcon from "./icons/behavioural.svg";

type Section = {
  title: string;
  to: string;
  description: string;
  Icon: React.ComponentType<React.ComponentProps<"svg">>;
};

const SectionList: Section[] = [
  {
    title: "Languages & Frameworks",
    to: "/docs/languages/java",
    description: "Java, Spring Boot, Kotlin, Python and Frontend: language features, runtimes and framework APIs.",
    Icon: LanguagesIcon,
  },
  {
    title: "Architecture",
    to: "/docs/architecture/microservices",
    description: "Microservices, Saga, event-driven architecture, DDD and messaging concepts.",
    Icon: ArchitectureIcon,
  },
  {
    title: "Platform",
    to: "/docs/platform/cloud",
    description: "Technologies you deploy and operate: Cloud, Kafka, Kubernetes and more.",
    Icon: PlatformIcon,
  },
  {
    title: "GenAI",
    to: "/docs/genai",
    description: "LLM fundamentals, RAG, embeddings, agents, MCP and evaluation.",
    Icon: GenAiIcon,
  },
  {
    title: "Programming",
    to: "/docs/programming/lld",
    description: "Data structures and algorithms, LLD, SOLID, design patterns and TDD.",
    Icon: ProgrammingIcon,
  },
  {
    title: "System Design",
    to: "/docs/designs",
    description: "Building blocks and end-to-end \"Design X\" interview problems.",
    Icon: SystemDesignIcon,
  },
  {
    title: "Behavioural",
    to: "/docs/behavioural",
    description: "How to structure answers to behavioural and leadership questions.",
    Icon: BehaviouralIcon,
  },
];

function SectionCard({ title, to, description, Icon }: Section) {
  return (
    <div className={clsx("col col--4", styles.section)}>
      <Link to={to} className={clsx("card padding--lg", styles.card)}>
        <span className={styles.icon}>
          <Icon aria-hidden="true" />
        </span>
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
        <Heading as="h2" id="sections" className={styles.heading}>
          Browse by section
        </Heading>
        <div className="row">
          {SectionList.map((props) => (
            <SectionCard key={props.title} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
