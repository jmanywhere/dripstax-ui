// Next
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
// API
import { trpc } from "../utils/trpc";
// Components

const Home: NextPage = () => {
  const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);

  return (
    <>
      <Head>
        <title>Dripstax Dapp</title>
        <meta name="description" content="A Defi Revolution" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="max-h-[260px] overflow-visible relative z-[-1] top-[-100px]">
        <Image
          src="/logo/DRIPSTAX.svg"
          height={500}
          width={500}
          alt="color_logo"
        />
      </div>
      <button className="rounded-full border-4 border-primary text-2xl px-14 py-4 font-light tracking-wider my-4 hover:bg-primary/25">
        Video Tutorials
      </button>
      <button className="rounded-full border-4 border-primary text-2xl px-14 py-4 font-light tracking-wider hover:bg-primary/25">
        Documentation
      </button>
    </>
  );
};

export default Home;
