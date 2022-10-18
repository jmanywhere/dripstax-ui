// Next
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
// API
import { trpc } from "../utils/trpc";
// Components

const Home: NextPage = () => {
  const hello = trpc.useQuery(["main.hello", { text: "from tRPC" }]);

  return (
    <>
      <Head>
        <title>Dripstax Dapp</title>
        <meta name="description" content="A Defi Revolution" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="max-h-full">
        <Image
          src="/logo/DRIPSTAX.svg"
          height={230}
          width={300}
          alt="color_logo"
        />
      </div>
      <button className="text-center rounded-full border-4 border-primary text-2xl px-14 py-4 font-light tracking-wider my-4 hover:bg-primary/25 min-w-[300px]">
        Video Tutorials
      </button>
      <button className="text-center rounded-full border-4 border-primary text-2xl px-14 py-4 font-light tracking-wider mb-4 hover:bg-primary/25 min-w-[300px]">
        Documentation
      </button>
      <a
        href="https://dripstax.com/Fiat/"
        target="_blank"
        rel="noreferrer"
        className="text-center rounded-full border-4 border-primary text-2xl px-14 py-4 font-light tracking-wider hover:bg-primary/25 min-w-[300px]"
      >
        Buy with Card
      </a>
    </>
  );
};

export default Home;
