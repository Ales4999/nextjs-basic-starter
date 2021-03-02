import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  // Copy/paste from nextjs
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head>
          {/* Inter Font */}
          <link
            rel="preload"
            href="/fonts/inter-var.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
        </Head>

        <body
        // TODO: remove?
        // className="transition-colors duration-500 bg-white text-black dark:bg-gray-900 dark:text-white"
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
