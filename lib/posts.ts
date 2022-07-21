import path from "path";
import fs from "fs";
import yaml from "js-yaml";
import MarkdownIt from "markdown-it";

const md = new MarkdownIt("commonmark");

const POSTS_DIR = path.resolve(process.cwd(), "_posts");

export const getPostsList = async (): Promise<string[]> => {
  return (await fs.promises.readdir(POSTS_DIR)).map((s) => path.parse(s).name);
};

export type PostMeta = {
  title?: string;
  author?: string;
};

export type Post = {
  meta: PostMeta;
  data: string;
};

const parseMeta = (raw: string): PostMeta => {
  const meta = yaml.load(raw) as PostMeta;
  return meta;
};

const parseMd = (raw: string): string => {
  const html = md.render(raw);
  return html;
};

const POST_REGEX = /---\n([\s\S]*?)\n---\n([\s\S]*)/m;

const getPostMatches = async (
  name: string
): Promise<RegExpMatchArray | null> => {
  const rawdata = await fs.promises.readFile(
    path.resolve(POSTS_DIR, name + ".md"),
    {
      encoding: "utf8",
    }
  );

  return rawdata.match(POST_REGEX);
};

export const getPost = async (name: string): Promise<Post | null> => {
  const matches = await getPostMatches(name);
  if (matches === null) {
    return null;
  }

  const meta = parseMeta(matches[1]);
  const data = parseMd(matches[2]);

  return { meta, data };
};

export const getPostMeta = async (name: string): Promise<PostMeta | null> => {
  const matches = await getPostMatches(name);
  if (matches === null) {
    return null;
  }

  const meta = parseMeta(matches[1]);

  return meta;
};
