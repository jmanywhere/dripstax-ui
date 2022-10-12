import Link from "next/link";
import Image from "next/image";
import type { FC } from "react";

const NavLink: FC<{
  href: string;
  name: string;
  src: string;
  alt: string;
  img?: { h: number; w: number };
}> = ({ href, name, src, alt, img }) => {
  const height = 60;
  const width = (60 * (img?.w || 381)) / (img?.h || 300);
  return (
    <Link href={href} passHref>
      <a
        onClick={(e) => e.preventDefault()}
        className="flex flex-col items-center justify-center font-semibold py-1 px-2 mx-1 hover:bg-[rgba(255,255,255,0.05)] min-w-[95px]"
      >
        <Image width={width} height={height} src={src} alt={alt} />
        {name}
      </a>
    </Link>
  );
};

export default NavLink;
