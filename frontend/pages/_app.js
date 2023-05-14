import "@/styles/globals.css";
import Head from "next/head";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Online Shoe Store</title>
        <meta name="description" content="Get desire shoes from Shoe store" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}