import Image from "next/image";
// components
import Header from "components/header/Header";
import { FC, ReactNode } from "react";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="container mx-auto flex flex-col items-center justify-center min-h-screen p-4">
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
    </>
  );
};

export default Layout;
