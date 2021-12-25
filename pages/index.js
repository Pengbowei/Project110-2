import Head from "next/head";
import About from "./homepage/About";

import Intro from "./homepage/Intro";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Intro />
      <About />
    </div>
  );
}
