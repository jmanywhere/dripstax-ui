// Next
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
// API
import { trpc } from "../utils/trpc";
// Components
import NavLink from "components/header/NavLink";

const Home: NextPage = () => {
  const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);

  return (
    <>
      <Head>
        <title>Dripstax Dapp</title>
        <meta name="description" content="A Defi Revolution" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="px-8 py-2 flex flex-row fixed w-screen items-center justify-center">
        <div className="flex-1">
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
        </div>
        <nav className="flex items-center justify-center flex-1">
          <NavLink
            name="SWAP"
            href="/swap"
            src="/header/swap_1.png"
            alt="swap_icon"
          />
          <NavLink
            name="ACCOUNT"
            href="/account"
            src="/header/act_icon.png"
            alt="account_icon"
            img={{
              h: 1210,
              w: 1170,
            }}
          />
          <NavLink
            name="REWARDS"
            href="/rewards"
            src="/header/lock.png"
            alt="lock_icon"
            img={{
              h: 359,
              w: 300,
            }}
          />
          <NavLink
            name="BANK"
            href="/bank"
            src="/header/bank.png"
            alt="bank_icon"
            img={{
              h: 1414,
              w: 2000,
            }}
          />
          <NavLink
            name="LOTTERY"
            href="/lottery"
            src="/header/lottery.png"
            alt="lottery_icon"
            img={{
              h: 1120,
              w: 1120,
            }}
          />
          <NavLink
            name="VOTE"
            href="/vote"
            src="/header/vote.png"
            alt="vote_icon"
            img={{
              h: 1000,
              w: 1000,
            }}
          />
        </nav>
        <div className="flex-1 flex justify-end">
          CONNECT WALLET &amp; PRICE
        </div>
      </header>
      <main className="container mx-auto flex flex-col items-center justify-center min-h-screen p-4">
        <div className="absolute z-[-1] h-full w-full overflow-hidden">
          <Image
            src="/bg/bg_2.png"
            layout="fill"
            objectFit="cover"
            alt="dapp-bg"
          />
        </div>
      </main>
    </>
  );
};

export default Home;
