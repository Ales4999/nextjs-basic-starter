import Head from "next/head";
import Image from "next/image";
import NextLink from "next/link";
import { DateTime } from "luxon";

export default function Home() {
  const title = "Blog Two";
  // October 14, 1983 in en_US (Handles different locales)
  // See more here: https://moment.github.io/luxon/docs/manual/formatting.html
  const date = DateTime.fromISO("2021-03-01").toLocaleString(
    DateTime.DATE_FULL
  );

  const body = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing diam donec adipiscing tristique risus nec feugiat in. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu. Eu lobortis elementum nibh tellus molestie nunc non blandit. Facilisis gravida neque convallis a cras semper auctor neque vitae. Dui nunc mattis enim ut tellus. Molestie ac feugiat sed lectus vestibulum. Lectus mauris ultrices eros in cursus turpis massa tincidunt. Massa sed elementum tempus egestas sed sed risus. Posuere lorem ipsum dolor sit amet consectetur. Nunc faucibus a pellentesque sit amet porttitor. Porttitor lacus luctus accumsan tortor posuere ac ut. Quam nulla porttitor massa id neque. Quam pellentesque nec nam aliquam. Porta lorem mollis aliquam ut porttitor leo a diam. Nunc faucibus a pellentesque sit. Quam viverra orci sagittis eu volutpat odio facilisis. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget. Magna fermentum iaculis eu non diam phasellus vestibulum lorem sed.

Cursus sit amet dictum sit amet justo donec enim diam. Semper eget duis at tellus at urna condimentum mattis pellentesque. Euismod quis viverra nibh cras. Magna fermentum iaculis eu non diam phasellus vestibulum lorem. Urna duis convallis convallis tellus id. At lectus urna duis convallis. At consectetur lorem donec massa sapien faucibus et molestie ac. Sit amet justo donec enim diam vulputate ut pharetra. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend. Malesuada pellentesque elit eget gravida cum. Euismod quis viverra nibh cras pulvinar. Mi proin sed libero enim sed faucibus turpis in eu.

Sit amet consectetur adipiscing elit pellentesque habitant morbi tristique. Lacinia at quis risus sed vulputate odio ut. Risus feugiat in ante metus. Elit at imperdiet dui accumsan sit. Laoreet id donec ultrices tincidunt arcu non sodales neque. Eget lorem dolor sed viverra ipsum nunc. Eu feugiat pretium nibh ipsum. Lacus sed turpis tincidunt id aliquet risus. In fermentum posuere urna nec tincidunt praesent semper. Ipsum nunc aliquet bibendum enim facilisis gravida. Quis blandit turpis cursus in hac habitasse platea dictumst quisque. Mauris a diam maecenas sed enim ut sem.

Vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt. Velit ut tortor pretium viverra suspendisse potenti nullam ac tortor. Mauris augue neque gravida in fermentum et. Sit amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus. Consectetur adipiscing elit duis tristique. Cursus mattis molestie a iaculis at erat pellentesque adipiscing. Parturient montes nascetur ridiculus mus mauris vitae. Vel fringilla est ullamcorper eget nulla facilisi etiam. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Sed adipiscing diam donec adipiscing tristique risus nec feugiat. Sit amet justo donec enim diam vulputate ut pharetra. Neque vitae tempus quam pellentesque nec nam aliquam sem et. Dignissim diam quis enim lobortis. Facilisi nullam vehicula ipsum a. Mauris pellentesque pulvinar pellentesque habitant morbi tristique. Sem et tortor consequat id porta nibh venenatis cras. Tincidunt nunc pulvinar sapien et ligula. Id donec ultrices tincidunt arcu non sodales.

Morbi tincidunt augue interdum velit euismod in pellentesque massa. Adipiscing at in tellus integer feugiat scelerisque varius. Diam vel quam elementum pulvinar etiam non quam lacus. Amet mattis vulputate enim nulla aliquet porttitor. Sed cras ornare arcu dui vivamus arcu felis bibendum ut. Faucibus purus in massa tempor. Tortor consequat id porta nibh. Fames ac turpis egestas maecenas pharetra. Porttitor lacus luctus accumsan tortor. Sit amet consectetur adipiscing elit pellentesque. Cursus sit amet dictum sit amet justo donec enim diam. Scelerisque in dictum non consectetur a erat nam. Nulla facilisi etiam dignissim diam quis enim lobortis. Magna sit amet purus gravida quis. Mauris pharetra et ultrices neque ornare aenean euismod elementum nisi.
  `;

  return (
    <>
      <Head>
        <title>{title} | Kyle's Blog</title>
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

            <h2 className="leading-tight text-2xl text-center font-bold my-3">
              Kyle Pfromer
            </h2>
          </div>

          <h1 className="leading-tight text-4xl font-bold">{title}</h1>

          <div className="text-gray-500">
            <time>{date}</time>
          </div>

          <div className="prose">{body}</div>

          <NextLink href="/">
            <a className="text-blue-500 hover:underline">← Back to home</a>
          </NextLink>

          {/* flex items-center justify-center flex-wrap */}
          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-3xl mt-12">
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
          </div> */}
        </main>
      </div>
    </>
  );
}
