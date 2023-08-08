import { join } from "path";
import { readdirSync, readFileSync } from "fs";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import remarkGfm from "remark-gfm";

export const getList = (path) => {
  const directory = join(process.cwd(), path);
  const files = readdirSync(directory);

  return files.map((file) => {
    const fullPath = join(directory, file);
    const fileContents = readFileSync(fullPath, "utf-8");
    const { data } = matter(fileContents);

    return {
      ...data,
      slug: file.replace(".md", ""),
    };
  });
};

export const getFileBySlug = async (path, slug) => {
  const directory = join(process.cwd(), path);
  const fullPath = join(directory, `${slug}.md`);
  const fileContents = readFileSync(fullPath, "utf-8");

  const { data, content: markdownContent } = matter(fileContents);
  let content = "";

  if (markdownContent) {
    const processedContent = await remark()
      .use(remarkGfm)
      .use(html)
      .process(markdownContent);
    content = processedContent
      .toString()
      .replace(/!\[(.*?)\]\((.*?)\)/g, (match, alt, src) => {
        return `<Image src="${src}" alt="${alt}" width={'100%'} height={'auto'} />`;
      });
  }

  return {
    ...data,
    content,
    slug,
  };
};
