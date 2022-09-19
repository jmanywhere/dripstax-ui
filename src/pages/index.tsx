// Next
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
// API
import { trpc } from "../utils/trpc";
// Images

const Home: NextPage = () => {
  const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);

  return (
    <>
      <Head>
        <title>Dripstax Dapp</title>
        <meta name="description" content="A Defi Revolution" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="px-4 py-2 flex items-center">
        <Link href="/" passHref className="mr-2">
          <a>
            <Image
              src="/logo/logo_white.png"
              height={811 / 12}
              width={783 / 12}
              alt="Dripstax Logo"
            />
          </a>
        </Link>
        <nav>
          <Link href="/swap">
            <a onClick={(e) => e.preventDefault()}>SWAP</a>
          </Link>
          ACCOUNT REWARDS BANK LOTTERY VOTE
        </nav>
        <div>CONNECT WALLET &amp; PRICE</div>
      </header>
      <main className="container mx-auto flex flex-col items-center justify-center min-h-full p-4">
        <Image
          src="/bg/bg-dapp.jpg"
          layout="fill"
          objectFit="cover"
          alt="dapp-bg"
          className="z-[-1]"
        />
      </main>
    </>
  );
};

export default Home;
