"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

interface Props {
  title: string;
  param: string;
}

const NavbarItem = ({ title, param }: Props) => {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");

  return (
    <article>
      <Link
        href={`/?genre=${param}`}
        className={`m-4 hover:text-amber-600 font-semibold p-2 transition-colors ${
          genre &&
          genre === param &&
          "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg"
        }`}
      >
        {title}
      </Link>
    </article>
  );
};

export default NavbarItem;
