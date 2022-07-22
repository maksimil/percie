import MarkdownIt from "markdown-it";

const md = new MarkdownIt("commonmark");

export const parseMd = (raw: string): string => {
  const html = md.render(raw);
  return html;
};
