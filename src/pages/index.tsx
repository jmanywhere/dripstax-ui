// Next
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
// API
import { trpc } from "../utils/trpc";
// Components
import NavLink from "components/header/NavLink";
import Header from "components/header/Header";

const Home: NextPage = () => {
  const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);

  return (
    <>
      <Head>
        <title>Dripstax Dapp</title>
        <meta name="description" content="A Defi Revolution" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      Stuff here
    </>
  );
};

export default Home;
