"use client";

import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

const Searchbox = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const onChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!search) return;

    router.push(`/search/${search}`);
    setSearch("");
  };

  return (
    <form
      className="flex max-w-6xl mx-auto justify-between items-center px-5"
      onSubmit={handleSubmit}
    >
      <input
        value={search}
        onChange={onChangeValue}
        type="text"
        placeholder="Search keywords..."
        className="w-full h-14 rounded-sm placeholder-gray-500 outline-none bg-transparent flex-1"
      />
      <button
        disabled={!search}
        type="submit"
        className="text-amber-500 disabled:text-gray-400"
      >
        Search
      </button>
    </form>
  );
};

export default Searchbox;
