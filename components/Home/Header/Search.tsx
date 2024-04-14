"use client";

import useLocationModal from "@/hooks/useLocationModal";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { Product } from "@prisma/client";
import Link from "next/link";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  // const [quickSearch, setQuickSearch] = useState(false);
  const params = useSearchParams();
  const query = params.get("query") || "";
  const router = useRouter();
  const { link } = useLocationModal();

  const onSearch = (event: React.FormEvent) => {
    event.preventDefault();

    router.push(`/${link}/search?query=${searchQuery}`);
  };

  // const results = products.filter((entry) =>
  //   entry.label.some((label) =>
  //     label.toLowerCase().includes(query.toLowerCase())
  //   )
  // );

  return (
    <form
      onSubmit={onSearch}
      className="border relative border-orange-bg max-w-[500px] w-full flex justify-between items-center"
    >
      <SearchOutlinedIcon className="text-gray-bg opacity-50 mx-2" />
      <input
        type="search"
        defaultValue={query || ""}
        onChange={(event) => setSearchQuery(event.target.value)}
        placeholder="Поиск по наименованию или коду товара"
        className="text-gray-bg opacity-80 w-full outline-none pr-2"
      />
      <button type="submit" className="bg-orange-bg h-full py-2 px-4">
        Найти
      </button>
      {/* <div
        className={`${
          quickSearch ? "flex" : "hidden"
        } w-full h-[300px] border bg-white absolute top-[50px] z-50 shadow-md`}
      >
        {products.map((link) => (
          <Link href="/">{link.label}</Link>
        ))}
      </div> */}
    </form>
  );
};

export default Search;
