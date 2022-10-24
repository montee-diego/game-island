import { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useGetCategoryQuery } from "../services/api";

import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import CategoryList from "../components/CategoryList";
import LoadButton from "../components/LoadButton";

const Browse = () => {
  const dispatch = useDispatch();
  const { type } = useParams();
  const { category } = useSelector(state => state.app);

  // Return 404 if "type" param is not valid
  if (!category[type]) {
    return <Navigate to='/error' replace={true} />;
  }

  const { isLast, next, page, results } = category[type];
  const { data, isFetching, isError, refetch } = useGetCategoryQuery(
    { type: type, page: next },
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
      {results.length > 0 && <CategoryList categories={results} />}

      {isFetching ? (
        <Loading />
      ) : isError ? (
        <ErrorMessage action={refetch} />
      ) : (
        !isLast && <LoadButton action={nextPage} />
      )}
    </section>
  );
};

export default Browse;
