import * as Styled from "./LoadMore.styled";

export const LoadMore = ({ action }) => {
  return <Styled.Button onClick={action}>Load More</Styled.Button>;
};
