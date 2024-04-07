"use client";

import useLocationModal from "@/hooks/useLocationModal";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const params = useSearchParams();
  const query = params.get("query");
  const router = useRouter();
  const { link } = useLocationModal();

  const onSearch = (event: React.FormEvent) => {
    event.preventDefault();

    router.push(`/${link}/search?query=${searchQuery}`);
  };

  return (
    <form
      onSubmit={onSearch}
      className="border relative border-orange-bg max-w-[500px] w-full flex justify-between items-center"
    >
      <SearchOutlinedIcon className="text-gray-bg opacity-50 mx-2" />
      <input
        disabled
        type="search"
        defaultValue={query || ""}
        onChange={(event) => setSearchQuery(event.target.value)}
        placeholder="Поиск по наименованию или коду товара"
        className="text-gray-bg cursor-not-allowed opacity-80 w-full outline-none pr-2"
      />
      <button
        disabled
        type="submit"
        className="bg-orange-bg cursor-not-allowed h-full py-2 px-4"
      >
        Найти
      </button>
    </form>
  );
};

export default Search;
