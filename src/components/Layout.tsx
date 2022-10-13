import Image from "next/image";
// components
import Header from "components/header/Header";
import { FC, ReactNode } from "react";
import { Web3Provider } from "@ethersproject/providers";
import { Web3ReactProvider } from "@web3-react/core";
import ConnectModal from "./wallet/ConnectDialog";
import { useEagerConnect } from "hooks/useAuth";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  const library = (provider: any) => new Web3Provider(provider);
  return (
    <Web3ReactProvider getLibrary={library}>
      <Header />
      <main className="container mx-auto flex flex-col items-center justify-center min-h-screen p-4">
        <ConnectModal />
        <div className="absolute z-[-1] h-full w-full overflow-hidden">
          <Image
            src="/bg/bg_2.png"
            layout="fill"
            objectFit="cover"
            alt="dapp-bg"
          />
        </div>
        {children}
      </main>
    </Web3ReactProvider>
  );
};

export default Layout;
