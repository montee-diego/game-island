import { Link } from "react-router-dom";

import { resizeImage } from "@utils/Images";
import { cardHoverAnim } from "@utils/Animations";

import * as Styled from "./Card.styled";

export const Card = ({ data, href }) => {
  // API returns image_background or background_image property depending on endpoint
  const image = data.image_background || data.background_image;

  return (
    <Styled.Container variants={cardHoverAnim} initial='hidden' whileHover='show'>
      <Link to={`${href}/${data.id}`}>
        <img src={resizeImage(image, 640)} alt={data.name} />
        <Styled.Details>
          <h3>{data.name}</h3>
          {data.hasOwnProperty("tba") ? (
            <h4>{data.tba ? "TBA" : data.released}</h4>
          ) : (
            <h4>{data.games_count} Games</h4>
          )}
        </Styled.Details>
      </Link>
    </Styled.Container>
  );
};
