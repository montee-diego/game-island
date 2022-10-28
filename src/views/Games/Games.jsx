import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useGetCategoryDetailsQuery, useGetCategoryGamesQuery } from "@services/api";
import { ErrorMessage, Grid, Line, Loading, LoadMore } from "@components";

const DynamicTitle = ({ type, id }) => {
  const { data, isFetching, isError } = useGetCategoryDetailsQuery({
    type: type,
    id: id,
  });

  return <h1>{isFetching || isError ? "..." : `${data?.name} Games`}</h1>;
};

export const Games = () => {
  const [page, setPage] = useState(1);
  const [results, setResults] = useState([]);
  const [isComplete, setIsComplete] = useState(false);
  const [param, setParam] = useState("");

  const { type, id } = useParams();

  const { data, isFetching, isError, refetch } = useGetCategoryGamesQuery(
    {
      filter: type,
      id: id,
      params: { page: page, page_size: 20 },
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
    if (id !== param) {
      setIsComplete(false);
      setPage(1);
      setResults([]);
      setParam(id);
    }

    if (data && !isComplete) {
      setIsComplete(true);
      setResults(results.concat(data?.results));
    }
  }, [id, data]);

  return (
    <section>
      <DynamicTitle type={type} id={id} />
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
