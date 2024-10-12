import CodeBlock from "@theme/CodeBlock";

export default function Benchmarks() {
  const SnippetCodePinoLogger = `pino.info('hello world')`;
  const SnippetCodeBasicBenchmarkAverages = "pino.info({ 'hello': 'world' })";
  const SnippetCodeObjectBenchmarkAverages = `pino.info(aBigDeeplyNestedObject)`;
  const SnippetCodeDeepObjectBenchmarkAverages = `pino.info('hello %s %j %d', 'world', { obj: true }, 4, { another: 'obj' })`;

  return (
    <div>
      <h1 style={{ fontSize: "48px" }}>Benchmarks</h1>

      <CodeBlock className="language-js">{SnippetCodePinoLogger}</CodeBlock>

      <h2>BASIC benchmark averages</h2>
      <ul>
        <li>Bunyan average: 377.434ms</li>
        <li>Winston average: 270.249ms</li>
        <li>Bole average: 172.690ms</li>
        <li>Debug average: 220.527ms</li>
        <li>LogLevel average: 222.802ms</li>
        <li>Pino average: 114.801ms</li>
        <li>PinoMinLength average: 70.968ms</li>
        <li>PinoNodeStream average: 159.192ms</li>
      </ul>

      <CodeBlock className="language-js">
        {SnippetCodeBasicBenchmarkAverages}
      </CodeBlock>

      <h2>OBJECT benchmark averages</h2>
      <ul>
        <li>BunyanObj average: 410.379ms</li>
        <li>WinstonObj average: 273.120ms</li>
        <li>BoleObj average: 185.069ms</li>
        <li>LogLevelObject average: 433.425ms</li>
        <li>PinoObj average: 119.315ms</li>
        <li>PinoMinLengthObj average: 76.968ms</li>
        <li>PinoNodeStreamObj average: 164.268ms</li>
      </ul>

      <CodeBlock className="language-js">
        {SnippetCodeObjectBenchmarkAverages}
      </CodeBlock>
      <h2>DEEP-OBJECT benchmark averages</h2>
      <ul>
        <li>BunyanDeepObj average: 1.839ms</li>
        <li>WinstonDeepObj average: 5.604ms</li>
        <li>BoleDeepObj average: 3.422ms</li>
        <li>LogLevelDeepObj average: 11.716ms</li>
        <li>PinoDeepObj average: 2.256ms</li>
        <li>PinoMinLengthDeepObj average: 2.240ms</li>
        <li>PinoNodeStreamDeepObj average: 2.595ms</li>
      </ul>

      <CodeBlock className="language-js">
        {SnippetCodeDeepObjectBenchmarkAverages}
      </CodeBlock>
      <p>
        For a fair comparison, <a href="http://npm.im/loglevel">LogLevel</a> was
        extended to include a timestamp and{" "}
        <a href="http://npm.im/bole">bole</a> had fastTime mode switched on.
      </p>
    </div>
  );
}
