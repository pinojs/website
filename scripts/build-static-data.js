"use strict";

const { promises: fs } = require("fs");
const path = require("path");
const yaml = require("yaml");

const log = require("pino")({
  level: process.env.LOG_LEVEL || "debug",
  transport: {
    target: "pino-pretty",
    options: {
      colorize: true
    }
  }
});

execute([
  // ##### Team
  {
    staticDataFile: path.join(__dirname, "../static/data/team.yml"),
    outputFile: path.join(__dirname, "../static/generated/team.json"),
    sideEffect: (data) => {
      // Sort alphabetically by `sortname`
      data.forEach((group) => {
        group.people.sort((a, b) => {
          return a.sortname.localeCompare(b.sortname);
        });
      });
    }
  }
]);

async function execute(filePipeline) {
  for (const file of filePipeline) {
    await processFile(file);
  }
}

async function processFile({ staticDataFile, outputFile, sideEffect }) {
  const dataFile = await yamlToJSON(staticDataFile);
  log.debug("Read the file: %s", staticDataFile);

  sideEffect(dataFile);

  await fs.writeFile(outputFile, JSON.stringify(dataFile, null, 2));
  log.info("Wrote the file to %s", outputFile);
}

async function yamlToJSON(yamlFile) {
  const content = await fs.readFile(yamlFile, "utf8");
  return yaml.parse(content);
}
