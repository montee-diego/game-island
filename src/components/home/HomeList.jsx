import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useGetListsQuery } from "@services/api";
import { ErrorMessage, Grid, Line, Loading } from "@components";

import * as Styled from "./HomeList.styled";

export const HomeList = ({ type, order, id }) => {
  const dispatch = useDispatch();
  const { home } = useSelector(state => state.app);
  const { name, results } = home[id];
  const { data, isFetching, isError, refetch } = useGetListsQuery(
    {
      list: type,
      params: { ordering: order, page: 1, page_size: 10 },
    },
    { skip: results.length > 0 }
  );

  useEffect(() => {
    if (data && !results.length) {
      dispatch({
        type: "app/updateHome",
        payload: {
          id: id,
          results: data?.results,
        },
      });
    }
  }, [data]);

  return (
    <div>
      <Styled.Title to={`/games/discover/${type}`}>{name}</Styled.Title>
      <Line />

      {results.length > 0 && <Grid data={results} href={"/browse/game"} />}
      {isFetching ? <Loading /> : isError && <ErrorMessage action={refetch} />}
    </div>
  );
};
