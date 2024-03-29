import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { useGetSearchQuery } from "@services/api";
import { useTitle } from "@utils/useTitle";
import { ErrorMessage, Grid, Line, Loading, LoadMore } from "@components";

export const Search = () => {
  const [page, setPage] = useState(1);
  const [results, setResults] = useState([]);
  const [isComplete, setIsComplete] = useState(false);
  const [query, setQuery] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get("query");

  const { data, isFetching, isError, refetch } = useGetSearchQuery(
    { search: searchQuery, page: page, page_size: 20 },
    { skip: isComplete }
  );

  const nextPage = () => {
    if (data?.next !== null) {
      setIsComplete(false);
      setPage(page + 1);
    }
  };

  useEffect(() => {
    if (query !== searchQuery) {
      setIsComplete(false);
      setPage(1);
      setResults([]);
      setQuery(searchQuery);
    }

    if (data && !isComplete) {
      setIsComplete(true);
      setResults(results.concat(data?.results));
    }
  }, [searchParams, data]);

  useTitle("Search");

  return (
    <section>
      <h1>Search Results for "{searchQuery}"</h1>
      <Line />

      {results.length > 0 && <Grid data={results} href={"/browse/game"} />}

      {isFetching ? (
        <Loading />
      ) : isError ? (
        <ErrorMessage action={refetch} />
      ) : (
        data?.next !== null && <LoadMore action={nextPage} />
      )}
    </section>
  );
};
