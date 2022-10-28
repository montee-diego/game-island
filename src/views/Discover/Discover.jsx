import { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router";

import { useGetListsQuery } from "@services/api";
import { ErrorMessage, Grid, Line, Loading, LoadMore } from "@components";

export const Discover = () => {
  const [page, setPage] = useState(1);
  const [results, setResults] = useState([]);
  const [isComplete, setIsComplete] = useState(false);
  const [param, setParam] = useState("");

  const { type } = useParams();

  // API does not return any usable category title, so this happens:
  const fakeTitleAPI = [
    { id: "main", title: "Latest" },
    { id: "popular", title: "Popular" },
    { id: "recent-games", title: "This Week" },
    { id: "recent-games-future", title: "Upcoming" },
  ];
  const { title } = fakeTitleAPI.find(({ id }) => id === type) || {
    title: "error",
  };

  // Return 404 if "type" param is not valid
  if (title === "error") {
    return <Navigate to='/error' replace={true} />;
  }

  const { data, isFetching, isError, refetch } = useGetListsQuery(
    {
      list: type,
      params: { ordering: "-relevance", page: page, page_size: 20 },
    },
    { skip: isComplete }
  );

  const nextPage = () => {
    if (data?.next !== null) {
      setIsComplete(false);
      setPage(page + 1);
    }
  };

  useEffect(() => {
    if (type !== param) {
      setIsComplete(false);
      setPage(1);
      setResults([]);
      setParam(type);
    }

    if (data && !isComplete) {
      setIsComplete(true);
      setResults(results.concat(data?.results));
    }
  }, [type, data]);

  return (
    <section>
      <h1>Discover: {title ? title : "Uknown Category"}</h1>
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
