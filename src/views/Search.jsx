import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useGetSearchQuery } from "../services/api";

import Line from "../components/Line";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import LoadButton from "../components/LoadButton";
import GameList from "../components/GameList";

const Search = () => {
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

  return (
    <section>
      <h1>Search Results for "{searchQuery}"</h1>
      <Line />

      {results.length > 0 && <GameList games={results} />}

      {isFetching ? (
        <Loading />
      ) : isError ? (
        <ErrorMessage action={refetch} />
      ) : (
        data?.next !== null && <LoadButton action={nextPage} />
      )}
    </section>
  );
};

export default Search;
