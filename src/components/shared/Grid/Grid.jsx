import { Card } from "@components";
import * as Styled from "./Grid.styled";

export const Grid = ({ data, href }) => {
  return (
    <Styled.Container>
      {data.length > 0 ? (
        data.map(item => <Card data={item} href={href} key={item.id} />)
      ) : (
        <p>No results found.</p>
      )}
    </Styled.Container>
  );
};
