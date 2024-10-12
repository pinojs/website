import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Pino",
  tagline: "Very low overhead Node.js logger",
  favicon: "favicon.ico",

  // Set the production url of your site here
  url: "https://getpino.io/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "pino-js", // Usually your GitHub org/user name.
  projectName: "pino", // Usually your repo name.

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"]
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: (editPage) => {
            // Users can not submit doc updates to the legacy versions!

            // We want users to submit doc updates to the upstream/next version!
            return `https://github.com/pino-js/pino/edit/main/docs/${editPage.docPath}`;
          }
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css"
        }
      } satisfies Preset.Options
    ]
  ],
  plugins: [
    [
      require.resolve("docusaurus-lunr-search"),
      {
        // Optional: Specify options here
        languages: ["en"] // Array of languages, default is ['en']
      }
    ]
  ],
  themeConfig: {
    navbar: {
      logo: {
        alt: "Pino logger Logo",
        src: "images/pino-banner.png",
        srcDark: "images/pino-banner-dark.png"
      },
      items: [
        { to: "/", label: "Home", position: "left" },
        {
          type: "docSidebar",
          sidebarId: "docsSidebar",
          label: "Docs",
          position: "left"
        },
        {
          to: "/benchmarks",
          label: "Benchmarks",
          position: "left"
        },
        {
          to: "/contribute",
          label: "Contribute",
          position: "left"
        },
        {
          type: "docsVersionDropdown",
          position: "right"
        },
        {
          href: "https://github.com/pinojs/pino",
          label: "GitHub",
          position: "right"
        }
      ]
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Getting Started",
              to: "/"
            }
          ]
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/pino"
            }
          ]
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/pinojs/pino"
            }
          ]
        }
      ],
      copyright: `Pino, Copyright © 2016-${new Date().getFullYear()}, Licensed under <a href="https://github.com/pinojs/pino/blob/main/LICENSE">MIT</a>`
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.oceanicNext
    }
  } satisfies Preset.ThemeConfig
};

export default config;
