import { useEffect } from "react";
import { default as styled } from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useGetListsQuery } from "../services/api";

import ErrorMessage from "./ErrorMessage";
import GameList from "./GameList";
import Line from "./Line";
import Loading from "./Loading";

const HomeList = ({ type, order, id }) => {
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
      <TitleLink to={`/games/discover/${type}`}>{name}</TitleLink>
      <Line />

      {results.length > 0 && <GameList games={results} />}
      {isFetching ? <Loading /> : isError && <ErrorMessage action={refetch} />}
    </div>
  );
};

const TitleLink = styled(Link)`
  display: inline-block;
  font-size: 1.8rem;
  font-weight: 700;
  padding: 1rem 0rem;
`;

export default HomeList;
