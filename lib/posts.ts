import path from "path";
import fs from "fs";
import yaml from "js-yaml";
import { parseMd } from "lib/md";

const POSTS_DIR = path.resolve(process.cwd(), "_posts/recipies");

export const getPostsList = async (): Promise<string[]> => {
  return (await fs.promises.readdir(POSTS_DIR)).map((s) => path.parse(s).name);
};

export type PostMeta = {
  title: string;
  author?: string;
};

export type Post = {
  meta: PostMeta;
  data: string;
};

const parseMeta = (raw: string): PostMeta => {
  const meta = yaml.load(raw) as PostMeta;
  if (meta.title === undefined) {
    throw `Title is not defined`;
  }
  return meta;
};

const POST_REGEX = /---\n([\s\S]*?)\n---\n([\s\S]*)/m;

const getPostMatches = async (name: string): Promise<RegExpMatchArray> => {
  const rawdata = await fs.promises.readFile(
    path.resolve(POSTS_DIR, name + ".md"),
    {
      encoding: "utf8",
    }
  );

  const match = rawdata.match(POST_REGEX);

  if (match === null) {
    throw `Match of ${name} is null`;
  }

  return match;
};

export const getPost = async (name: string): Promise<Post> => {
  const matches = await getPostMatches(name);

  const meta = parseMeta(matches[1]);
  const data = parseMd(matches[2]);

  return { meta, data };
};

export const getPostMeta = async (name: string): Promise<PostMeta> => {
  const matches = await getPostMatches(name);

  const meta = parseMeta(matches[1]);

  return meta;
};
