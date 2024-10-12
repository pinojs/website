import Team from "../Team";
import styles from "./styles.module.css";
import CodeBlock from "@theme/CodeBlock";

export default function Homepage() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <PinoInfo />
        </div>
      </div>
    </section>
  );
}

const SnippetCodeInstallNpm = `$ npm install pino`;
const SnippetCodeInstallYarn = `$ yarn add pino`;

const SnippetCodeQuickstart = `const logger = require('pino')()

logger.info('hello world')

const child = logger.child({ a: 'property' })
child.info('hello child!')
`;

const SnippetLoggerJson = `{"level":30,"time":1531171074631,"msg":"hello world","pid":657,"hostname":"Davids-MBP-3.fritz.box"}
{"level":30,"time":1531171082399,"msg":"hello child!","pid":657,"hostname":"Davids-MBP-3.fritz.box","a":"property"}`;

export const PinoInfo = () => {
  return (
    <div style={{ padding: "16px", width: "100%" }}>
      <div>
        <h1>Install</h1>
        <p>Using NPM:</p>
        <CodeBlock className="language-bash">{SnippetCodeInstallNpm}</CodeBlock>
        <p>Using YARN:</p>
        <CodeBlock className="language-bash">
          {SnippetCodeInstallYarn}
        </CodeBlock>
        <p>
          If you would like to install pino v6, refer to{" "}
          <a href="https://github.com/pinojs/pino/tree/v6.x">
            https://github.com/pinojs/pino/tree/v6.x
          </a>
          .
        </p>

        <h1>Usage</h1>
        <CodeBlock className="language-js">{SnippetCodeQuickstart}</CodeBlock>
        <p>This produces:</p>
        <CodeBlock>{SnippetLoggerJson}</CodeBlock>
        <p>For using Pino with a web framework see:</p>
        <ul>
          <li>
            <a href="docs/guides/web-frameworks/#pino-with-fastify">
              Pino with Fastify
            </a>
          </li>
          <li>
            <a href="docs/guides/web-frameworks/#pino-with-express">
              Pino with Express
            </a>
          </li>
          <li>
            <a href="docs/guides/web-frameworks/#pino-with-hapi">
              Pino with Hapi
            </a>
          </li>
          <li>
            <a href="docs/guides/web-frameworks/#pino-with-restify">
              Pino with Restify
            </a>
          </li>
          <li>
            <a href="docs/guides/web-frameworks/#pino-with-koa">
              Pino with Koa
            </a>
          </li>
          <li>
            <a href="docs/guides/web-frameworks/#pino-with-http">
              Pino with Node core http
            </a>
          </li>
          <li>
            <a href="docs/guides/web-frameworks/#pino-with-nest">
              Pino with Nest
            </a>
          </li>
        </ul>

        <h1>Essentials</h1>
        <h2>Development Formatting</h2>
        <p>
          The <a href="https://github.com/pinojs/pino-pretty">pino-pretty</a>{" "}
          module can be used to format logs during development:
        </p>
        <img src="/images/pretty-demo.png" alt="pretty demo" />

        <h2>Transports & Log Processing</h2>
        <p>
          Due to Node's single-threaded event-loop, it's highly recommended that
          sending, alert triggering, reformatting, and all forms of log
          processing are conducted in a separate process or thread.
        </p>
        <p>
          In Pino terminology, we call all log processors "transports" and
          recommend that the transports be run in a worker thread using our
          pino.transport API.
        </p>
        <p>
          For more details see our{" "}
          <a href="docs/guides/transports">Transports</a> document.
        </p>

        <h2>Low overhead</h2>
        <p>
          Using minimum resources for logging is very important. Log messages
          tend to get added over time and this can lead to a throttling effect
          on applications - such as reduced requests per second.
        </p>
        <p>In many cases, Pino is over 5x faster than alternatives.</p>
        <p>
          See the <a href="/benchmarks">Benchmarks</a> document for comparisons.
        </p>

        <h2>Bundling support</h2>
        <p>Pino supports being bundled using tools like webpack or esbuild.</p>
        <p>
          See <a href="docs/guides/bundling">Bundling</a> document for more
          information.
        </p>
        <section className="section">
          <div className="container-team">
            <h1>Meet The Team</h1>
            <Team />
          </div>
        </section>
      </div>

      <section className="section">
        <h1>Examples</h1>
        <p>
          Check{" "}
          <a href="https://github.com/pinojs/pino/tree/master/examples">
            GitHub repo
          </a>{" "}
          for more examples.
        </p>
        <h1>Acknowledgements</h1>
        <p>The project is kindly sponsored by:</p>
        <ul>
          <li>
            <a href="https://www.nearform.com">NearForm</a>
          </li>
          <li>
            <a href="https://platformatic.dev">Platformatic</a>
          </li>
        </ul>
      </section>
    </div>
  );
};
