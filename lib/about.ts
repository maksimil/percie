import path from "path";
import fs from "fs";
import { parseMd } from "lib/md";

const ABOUT_PATH = path.join(process.cwd(), "_posts/about.md");

export const getAbout = async (): Promise<string> => {
  const raw = await fs.promises.readFile(ABOUT_PATH, { encoding: "utf8" });
  const html = parseMd(raw);
  return html;
};
