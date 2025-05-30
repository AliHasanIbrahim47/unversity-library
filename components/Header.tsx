"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Session } from "next-auth";
import { Avatar } from "./ui/avatar";

const Header = ({ session }: { session: Session }) => {
  const pathname = usePathname();
  return (
    <header className="my-10 flex justify-between gap-5">
      <Link href="/">
        <Image src="/icons/logo.svg" width={40} height={40} alt="site-logo" />
      </Link>

      <ul className="flex flex-row items-center gap-8">
        <li>
          <Link
            href="/library"
            className={cn(
              "text-base cursor-pointer capitalize",
              pathname === "/library" ? "text-light-200" : "text-light-100"
            )}
          >
            library
          </Link>
        </li>

        <li>
          <Link
            href="/my-profile"
            className="text-base cursor-pointer capitalize text-light-100"
          >
            {/* <Avatar name={session?.user?.name || ""} /> */}
            {session?.user?.name || ""}
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
