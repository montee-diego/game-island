import { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { useGetCategoryQuery } from "@services/api";
import { ErrorMessage, Grid, Line, Loading, LoadMore } from "@components";

import * as Styled from "./Browse.styled";

export const Browse = () => {
  const dispatch = useDispatch();
  const { type } = useParams();
  const { category } = useSelector(state => state.app);

  // Return 404 if "type" param is not valid
  if (!category[type]) {
    return <Navigate to='/error' replace={true} />;
  }

  const { isLast, next, page, results } = category[type];
  const { data, isFetching, isError, refetch } = useGetCategoryQuery(
    {
      category: type,
      params: { page: next, page_size: 20 },
    },
    { skip: isLast || page === next }
  );

  const nextPage = () => {
    if (!isLast) {
      dispatch({
        type: "app/updateCategoryPage",
        payload: {
          name: type,
        },
      });
    }
  };

  useEffect(() => {
    if (data) {
      dispatch({
        type: "app/updateCategory",
        payload: {
          name: type,
          isLast: data.next,
          page: next,
          results: data.results,
        },
      });
    }
  }, [data]);

  return (
    <section>
      <Styled.Title>Browse {type}</Styled.Title>
      <Line />
      {results.length > 0 && <Grid data={results} href={`/games/${type}`} />}

      {isFetching ? (
        <Loading />
      ) : isError ? (
        <ErrorMessage action={refetch} />
      ) : (
        !isLast && <LoadMore action={nextPage} />
      )}
    </section>
  );
};
