"use client";

import useLocationModal from "@/hooks/useLocationModal";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { QuickSearchProducts } from "./QuickSearchProducts";
import { Search as SearchIcon } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSuggestions, setSuggestions] = useState(false);
  const [isMount, setIsMount] = useState(false);

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
    const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
      setIsMount(true);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!isMount) {
    return (
        <Skeleton className="w-full max-w-[950px] h-[40px]"/>
    )
  }
  return (
    <form
      onSubmit={onSearch}
      className={`border-2 rounded-md relative border-main-black ${scrollPosition > 60 ? "max-w-[600px]" : "max-w-[700px]"} w-full flex gap-2 justify-between items-center`}
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
        className="bg-main-black h-full py-2 px-4 text-white"
      >
        Найти
      </button>
      {isSuggestions && <QuickSearchProducts searchValue={searchQuery} />}
    </form>
  );
};

export default Search;
