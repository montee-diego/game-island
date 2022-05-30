import { default as styled } from "styled-components";

import GameCard from "./GameCard";

const GameList = ({ games }) => {
  return (
    <StyledList>
      {games.length > 0 ? (
        games.map(game => <GameCard game={game} key={game.id} />)
      ) : (
        <p>No games found.</p>
      )}
    </StyledList>
  );
};

// Styles
const StyledList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 1.5rem;
  margin: 1rem 0rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export default GameList;
