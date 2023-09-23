"use client";

import SearchContent from "@/components/Search/SearchContent";
import { posts } from "@/posts";
import { useSearchParams } from "next/navigation";

const SearchPage = () => {
  const search = useSearchParams();
  const query = search.get("query");

  let currentPosts = posts;

  if (query) {
    currentPosts = posts.filter(
      (post) =>
        post[0].toLowerCase().includes(query.toLowerCase()) ||
        post[1].toLowerCase().includes(query.toLowerCase())
    );
  }

  // if (query) {
  //   currentPosts = posts.filter((post) =>
  //     post[1].toLowerCase().includes(query.toLowerCase())
  //   );
  // }

  return <SearchContent query={query || ""} currentPosts={currentPosts} />;
};

export default SearchPage;
