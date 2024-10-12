import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Homepage from "@site/src/components/Homepage";
import Heading from "@theme/Heading";
import styles from "./index.module.css";
import GitHubButton from "react-github-btn";

export function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header
      className={clsx("hero hero--primary", styles.heroBanner)}
      style={{ background: "#DFDFDF" }}
    >
      <div className="container">
        <Heading as="h1" className="hero__title">
          <img
            src="/images/pino-banner.png"
            alt="Pino logger Logo"
            style={{
              width: "100%",
              maxWidth: "600px"
            }}
          />
        </Heading>
        <p
          className="hero__subtitle"
          style={{ color: "#000000", padding: "0px", margin: "0px" }}
        >
          {siteConfig.tagline}
        </p>
        <ButtonGithub />
      </div>
    </header>
  );
}

export function ButtonGithub() {
  return (
    <div style={{ marginTop: "20px" }}>
      <GitHubButton
        href="https://github.com/pinojs/pino"
        data-icon="octicon-star"
        aria-label="Star Pino on GitHub"
        data-size="large"
        data-show-count="true"
      >
        Star
      </GitHubButton>
      &nbsp; &nbsp;
      <GitHubButton
        href="https://github.com/pinojs/pino/fork"
        data-icon="octicon-repo-forked"
        aria-label="Fork Pino on GitHub"
        data-size="large"
      >
        Fork
      </GitHubButton>
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title}`} description="pino">
      <HomepageHeader />
      <main>
        <Homepage />
      </main>
    </Layout>
  );
}
