import Link from "next/link";
import type { FC } from "react";

const NavLink: FC<{ href: string }> = ({ href }) => {
  return (
    <Link href={href}>
      <a></a>
    </Link>
  );
};

export default NavLink;
