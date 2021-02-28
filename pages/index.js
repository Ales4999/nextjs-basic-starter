import Head from "next/head";

const card =
  "text-md p-6 border border-gray-200 hover:border-blue-500 hover:text-blue-500 rounded-xl transition-colors";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen px-3 flex flex-col justify-center items-center">
        <main className="py-20 flex-grow flex flex-col justify-center items-center">
          <h1 className="leading-tight text-6xl text-center">
            Welcome to{" "}
            <a
              href="https://nextjs.org"
              className="text-blue-500 hover:underline"
            >
              Next.js!
            </a>
          </h1>

          <p className="text-center">
            Get started by editing{" "}
            <code className="bg-gray-50 rounded p-3 text-lg font-mono">
              pages/index.js
            </code>
          </p>

          {/* flex items-center justify-center flex-wrap */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-3xl mt-12">
            <a href="https://nextjs.org/docs" className={card}>
              <h3>Documentation &rarr;</h3>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>

            <a href="https://nextjs.org/learn" className={card}>
              <h3>Learn &rarr;</h3>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>

            <a
              href="https://github.com/vercel/next.js/tree/master/examples"
              className={card}
            >
              <h3>Examples &rarr;</h3>
              <p>Discover and deploy boilerplate example Next.js projects.</p>
            </a>

            <a
              href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={card}
            >
              <h3>Deploy &rarr;</h3>
              <p>
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </a>
          </div>
        </main>

        <footer className="w-full h-24 border-t border-gray-200 flex justify-center items-center">
          <a
            className="flex justify-center items-center"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <img src="/vercel.svg" alt="Vercel Logo" className="ml-2 h-4" />
          </a>
        </footer>
      </div>
    </>
  );
}
