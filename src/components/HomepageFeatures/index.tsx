import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList: FeatureItem[] = [
  {
    title: "Easy to Revise Notes",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        InterViewNotes is built with the purpose of making it easy to revise notes. It is designed to
        be easy to revise important topics.
      </>
    ),
  },
  {
    title: "Focus on What Matters",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Select the topics you want to revise and focus on what matters. InterViewNotes is designed to
        helps you revise not to learn & explain in depth.
      </>
    ),
  },
  {
    title: "Community Driven",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        InterViewNotes is open source and is driven by the community. It is designed to be easy to
        contribute and help others.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
