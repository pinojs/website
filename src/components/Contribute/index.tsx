import GoodFirstIssue from "../GoodFirstIssue";

export default function ContributeToPino() {
  return (
    <section>
      <h1 style={{ fontSize: "48px" }}>Contribute to Pino</h1>
      <p>
        Pino is a growing and friendly community, and would be lucky to have
        your contributions! 🙇‍♂️
      </p>
      <p>
        Contributions are always welcome, we only ask you follow the{" "}
        <a href="https://github.com/pinojs/pino/blob/master/CONTRIBUTING">
          Contribution Guidelines
        </a>{" "}
        and the{" "}
        <a href="https://github.com/pinojs/pino/blob/master/CODE_OF_CONDUCT">
          Code Of Conduct
        </a>
        .
      </p>
      <p>
        If you don't know where to start you can have a look at the list of{" "}
        <a href="https://github.com/pinojs/pino/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22">
          good first issues
        </a>{" "}
        below.
      </p>
      <h2>Good first issues</h2>
      <GoodFirstIssue url="https://goodfirstissue.fastify.io/api/find-issues?org=pinojs" />
    </section>
  );
}
