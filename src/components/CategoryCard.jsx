import { default as styled } from "styled-components";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

import { resizeImage } from "@utils/Images";
import { cardHoverAnim } from "@utils/Animations";

const CategoryCard = ({ category }) => {
  const location = useLocation();
  const parentCategory = location.pathname.split("/")[2];

  return (
    <GameWrapper variants={cardHoverAnim} initial='hidden' whileHover='show'>
      <Link to={`/games/${parentCategory}/${category.id}`}>
        <img src={resizeImage(category.image_background, 640)} alt={category.name} />
        <Details>
          <h3>{category.name}</h3>
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

export default CategoryCard;
