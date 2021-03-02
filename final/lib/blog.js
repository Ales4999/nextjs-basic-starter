import fs from "fs";
import matter from "gray-matter";
import renderToString from "next-mdx-remote/render-to-string";
import path from "path";
import { promisify } from "util";

// TODO: more comments

const root = process.cwd();

export function getFiles() {
  return fs.readdirSync(path.join(root, "content", "blog"));
}

export async function getBlogPostFrontmatter(slug) {
  const allFiles = getFiles();

  // Find "slug".mdx
  const file = allFiles
    .filter((file) => /\.mdx$/.test(file))
    .find((fileName) => fileName.replace(/\.mdx$/, "") === slug);

  if (!file) return undefined;

  // Get the file data
  const filepath = path.join(root, "content", "blog", `${slug}.mdx`);
  const data = (await promisify(fs.readFile)(filepath)).toString();

  return await {
    ...matter(data).data,
    slug,
  };
}

export async function getBlogPost(slug) {
  const allFiles = getFiles();
  const file = allFiles
    .filter((file) => /\.mdx$/.test(file))
    .find((fileName) => fileName.replace(/\.mdx$/, "") === slug);

  if (!file) return undefined;

  const filepath = path.join(root, "content", "blog", `${slug}.mdx`);

  const data = (await promisify(fs.readFile)(filepath)).toString();

  const {
    // File data without frontmatter
    content,
    // The frontmatter
    data: metadata,
  } = matter(data);

  return {
    slug,
    frontmatter: { slug, ...metadata },
    // renderToString converts the raw string data (mdx) to a html string that can be render easily
    body: await renderToString(content, {
      scope: metadata,
    }),
  };
}

export async function getBlogPostSlugs() {
  const allFiles = getFiles()
    .filter((file) => /\.mdx$/.test(file))
    .map((file) => file.replace(/\.mdx$/, ""));

  return allFiles;
}

export async function getAllBlogPostsFrontmatter(sortByDate) {
  const slugs = await getBlogPostSlugs();

  const blogPosts = [];

  for (const slug of slugs) {
    blogPosts.push(await getBlogPostFrontmatter(slug));
  }

  if (!sortByDate) return blogPosts;

  return blogPosts.sort(
    (a, b) =>
      (sortByDate === "asc" ? 1 : -1) *
      DateTime.fromISO(a.created).diff(DateTime.fromISO(b.created)).milliseconds
  );
}
