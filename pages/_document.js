import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  redner() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="preload"
            href="/fonts/NotoSans-Bold.ttf"
            as="font"
            crossOrigin="anonymous"
          ></link>

          <link
            rel="preload"
            href="/fonts/NotoSans-BoldItalic.ttf"
            as="font"
            crossOrigin="anonymous"
          ></link>

          <link
            rel="preload"
            href="/fonts/NotoSans-Italic.ttf"
            as="font"
            crossOrigin="anonymous"
          ></link>

          <link
            rel="preload"
            href="/fonts/NotoSans-Regular.ttf"
            as="font"
            crossOrigin="anonymous"
          ></link>
          <body>
            <Main></Main>
            <NextScript />
          </body>
        </Head>
      </Html>
    );
  }
}

export default MyDocument;
