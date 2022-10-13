import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
// Components
import NavLink from "components/header/NavLink";

const Header: FC<Record<string, string>> = () => {
  return (
    <header className="px-8 py-4 flex flex-row fixed w-screen items-center justify-center">
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
      <div className="flex-1 flex flex-col justify-end items-end">
        <div className="pb-2">
          <button className="border border-white px-8 py-2 text-lg font-bold rounded-xl hover:bg-gray-500/30">
            CONNECT WALLET
          </button>
        </div>
        <div className="flex items-center justify-end">
          <p className="mr-4 text-lg font-bold">$ 0.0000</p>
          <Image
            src="/logo/logo_white.png"
            height={811 / 24}
            width={783 / 24}
            alt="Dripstax Logo SM"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
