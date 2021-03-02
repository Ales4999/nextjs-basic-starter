import { DateTime } from "luxon";
import Head from "next/head";
import Image from "next/image";
import NextLink from "next/link";
import { getAllBlogPostsFrontmatter } from "../lib/blog";

const card =
  "text-md p-6 border border-gray-200 hover:border-blue-500 hover:text-blue-500 rounded-xl transition-colors";

export const getStaticProps = async () => {
  const posts = await getAllBlogPostsFrontmatter();

  return {
    props: { posts },
  };
};

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Kyle's Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen px-3 flex flex-col justify-center items-center">
        <main className="py-20 flex-grow max-w-xl flex flex-col space-y-5">
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

            <h1 className="leading-tight text-6xl text-center font-bold my-3">
              Kyle Pfromer
            </h1>
          </div>

          <div className="text-xl space-y-4">
            <p>
              Hello, I'm Kyle. I'm a student at CU Boulder, that likes to
              program. You can check me out on{" "}
              <a
                href="https://github.com/kpfromer"
                className="text-blue-500 hover:underline"
              >
                GitHub
              </a>
              .
            </p>

            <p>(This is a sample website!)</p>
          </div>

          <h2 className="text-2xl font-bold">Blog</h2>

          <ul className="text-xl space-y-5">
            {/* <li key="thing" className="flex flex-col space-y-2">
              <NextLink href="/blog/two">
                <a className="text-blue-500 hover:underline">
                  Two Forms of Pre-rendering
                </a>
              </NextLink>
              <small className="text-gray-500">
                <time>January 1, 2020</time>
              </small>
            </li> */}

            {posts.map(({ slug, title, date }) => (
              <li key={title} className="flex flex-col space-y-2">
                <NextLink href={`/blog/${slug}`}>
                  <a className="text-blue-500 hover:underline">{title}</a>
                </NextLink>
                <small className="text-gray-500">
                  <time>
                    {DateTime.fromISO(date).toLocaleString(DateTime.DATE_FULL)}
                  </time>
                </small>
              </li>
            ))}
          </ul>
        </main>
      </div>
    </>
  );
}
