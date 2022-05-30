import { default as styled } from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { resizeImage } from "../utils";
import { cardHoverAnim } from "../animations";

const GameCard = ({ game }) => {
  return (
    <GameWrapper variants={cardHoverAnim} initial='hidden' whileHover='show'>
      <Link to={`/browse/game/${game.id}`}>
        <img src={resizeImage(game.background_image, 640)} alt={game.name} />
        <Details>
          <h3>{game.name}</h3>
          <h4>{game.tba ? "TBA" : game.released}</h4>
        </Details>
      </Link>
    </GameWrapper>
  );
};

const GameWrapper = styled(motion.div)`
  display: flex;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 0.5rem;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  position: relative;
  overflow: hidden;

  a {
    display: block;
    width: 100%;
    height: 100%;
  }

  img {
    width: 100%;
    aspect-ratio: 16/9;
    object-fit: cover;
    line-height: 3rem;
    text-align: center;
  }
`;

const Details = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 101%;
  background-color: rgba(0, 0, 0, 0.7);
  color: #d9dfeb;
  padding: 0.5rem;
`;

export default GameCard;
