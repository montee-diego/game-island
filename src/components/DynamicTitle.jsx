import { useGetCategoryDetailsQuery } from "../services/api";

const DynamicTitle = ({ type, id }) => {
  const { data, isFetching, isError } = useGetCategoryDetailsQuery({
    type: type,
    id: id,
  });

  return <h1>{isFetching || isError ? "..." : data?.name + " Games"}</h1>;
};

export default DynamicTitle;
