import Head from "next/head";
import Image from "next/image";
import NextLink from "next/link";
import { DateTime } from "luxon";
import { getBlogPostSlugs, getBlogPost } from "../../lib/blog";
import hydrate from "next-mdx-remote/hydrate";

export const getStaticPaths = async () => {
  const slugs = await getBlogPostSlugs();

  return {
    // create a page for all slugs /blog/slug
    paths: slugs.map((slug) => ({ params: { slug } })),
    // Generate the pages when compiling/building
    // Read more here: https://nextjs.org/docs/basic-features/data-fetching#fallback-false
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const post = await getBlogPost(params.slug);

  return {
    props: post,
  };
};

export default function Home({ frontmatter, body }) {
  // October 14, 1983 in en_US (Handles different locales)
  // See more here: https://moment.github.io/luxon/docs/manual/formatting.html
  const title = frontmatter.title;
  const date = DateTime.fromISO(frontmatter.date).toLocaleString(
    DateTime.DATE_FULL
  );
  const content = hydrate(body);

  return (
    <>
      <Head>
        <title>{title} | Kyle's Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen px-3">
        <div className="mx-auto max-w-xl py-20">
          <main className="flex flex-col space-y-5">
            {/* Relative to /public folder */}
            <div className="flex flex-col justify-center items-center">
              <Image
                src="/me.jpg"
                alt="Kyle Pfromer"
                width={150}
                height={150}
                layout="fixed"
                className="rounded-full"
              />

              <h2 className="leading-tight text-2xl text-center font-bold my-3">
                Kyle Pfromer
              </h2>
            </div>

            <h1 className="leading-tight text-4xl font-bold">{title}</h1>

            <div className="text-gray-500">
              <time>{date}</time>
            </div>

            <hr />

            <div className="prose">{content}</div>
          </main>

          <footer className="mt-5">
            <NextLink href="/">
              <a className="text-blue-500 hover:underline">← Back to home</a>
            </NextLink>
          </footer>
        </div>
      </div>
    </>
  );
}
