import { defineConfig, UserConfig } from "vitepress";
import { primaryThemeConfig } from 'primary-vitepress/config';
import { withSidebar } from "vitepress-sidebar";

// https://vitepress.dev/reference/site-config
const vitePressConfigs: UserConfig<any> = {
  title: "📑 FICHES.ME",
  description: "Les fiches de révisions ...",
  extends: primaryThemeConfig,
  cleanUrls: true,
  lastUpdated: true,
  ignoreDeadLinks: true,
  markdown: {
    lineNumbers: true,
    math: true,
    languageAlias: {
      "pseudo-code": "python",
      conf: "yaml",
    },
  },
  titleTemplate: ":title - FICHES.ME",
  lang: "fr-FR",
  head: [["link", { rel: "icon", type: "image/png", href: "/logo.png" }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/logo.png",
    editLink: {
      pattern: "https://github.com/fiches-me/fiches-me.github.io/edit/main/:path",
    },
    nav: [
      { text: "🎨 Primary Vitepress", link: "/primary" },
      { text: "💖 Contribuer à Fiches", link: "/contribution" },
    ],
    footer: {
      message: "Publié sous licence GPL-3.0.",
      copyright: "Copyright © 2019-2026 FUNASITIEN, Guilhem C.",
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/fiches-me" },
      { icon: "discord", link: "https://dsc.gg/drmcld" },
    ],
  },
  sitemap: {
    hostname: "https://fiches.funa.dev",
  },
  transformPageData(ctx) {
    const canonicalUrl = `https://fiches.funa.dev/${ctx.relativePath.replace(/\.(md|html)$/, "").replace(/\index$/, "")}`;
    ctx.frontmatter.head = ctx.frontmatter.head || [];
    ctx.frontmatter.head.push([
      "link",
      { rel: "canonical", href: canonicalUrl },
    ]);
  },
};

const sections = [
  "primary",
  "contribution",
];

const sidebarOptions = sections.map((section) => ({
  documentRootPath: "/",
  scanStartPath: section,
  resolvePath: `/${section}/`,
  useTitleFromFrontmatter: true,
  useFolderTitleFromIndexFile: true,
  sortMenusByFrontmatterOrder: true,
  excludeFilesByFrontmatterFieldName: "draft",
  hyphenToSpace: true,
  underscoreToSpace: true,
}));

export default defineConfig(withSidebar(vitePressConfigs, sidebarOptions));
