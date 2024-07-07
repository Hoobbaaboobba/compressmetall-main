"use client";

import useLocationModal from "@/hooks/useLocationModal";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState, useTransition } from "react";
import { QuickSearchProducts } from "./QuickSearchProducts";
import { Search as SearchIcon } from "lucide-react";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSuggestions, setSuggestions] = useState(false);

  const params = useSearchParams();
  const query = params.get("query") || "";
  const router = useRouter();
  const { link } = useLocationModal();

  const onSearch = (event: React.FormEvent) => {
    event.preventDefault();

    router.push(`/${link}/search?query=${searchQuery}`);
  };

  const handleClickOnSearch = () => {
    setSuggestions(true);
  };

  const handleSearchBlur = () => {
    setTimeout(() => {
      setSuggestions(false);
    }, 100);
  };

  return (
    <form
      onSubmit={onSearch}
      className="border rounded-md relative border-orange-bg max-w-[500px] w-full flex gap-2 justify-between items-center"
    >
      <SearchIcon className="w-5 h-5 text-gray-bg ml-2" />
      <input
        type="search"
        onFocus={handleClickOnSearch}
        onBlur={handleSearchBlur}
        defaultValue={query || ""}
        onChange={(event) => setSearchQuery(event.target.value)}
        placeholder="Поиск по наименованию или коду товара"
        className="text-gray-bg opacity-80 w-full outline-none pr-2"
      />
      <button
        type="submit"
        className="bg-orange-bg rounded-r-md h-full py-2 px-4"
      >
        Найти
      </button>
      {isSuggestions && <QuickSearchProducts searchValue={searchQuery} />}
    </form>
  );
};

export default Search;
