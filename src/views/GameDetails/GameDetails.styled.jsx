import { default as styled } from "styled-components";

export const Section = styled.section`
  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 0rem;
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 60vh;
  position: relative;
  border-left: 1px solid rgba(0, 0, 0, 0.3);
  border-right: 1px solid rgba(0, 0, 0, 0.3);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: 768px) {
    border: none;
  }
`;

export const GameTitle = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);

  h1 {
    color: white;
    padding: 1rem;
  }
`;

export const Platforms = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  display: flex;

  h4 {
    color: white;
    font-weight: 400;
    font-size: 0.9rem;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 3px;
    padding: 0.5rem;
    margin-right: 0.5rem;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;

    h4 {
      margin-right: 0rem;
      margin-bottom: 0.5rem;
    }
  }
`;

export const GameMainInfo = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #272f3b;
  border-left: 1px solid rgba(0, 0, 0, 0.3);
  border-right: 1px solid rgba(0, 0, 0, 0.3);

  .score-info {
    display: flex;
  }

  h3 {
    padding: 1rem;
    line-height: 2rem;

    .score {
      padding: 0.3rem;
      color: #4dca44;
      border: 3px solid #4dca44;
      border-radius: 5px;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    border: none;

    h3 {
      padding: 0.5rem 1rem;
    }

    .score-info {
      h3 {
        padding: 0.5rem 0rem 0.5rem 1rem;
      }
    }
  }
`;

export const Description = styled.div`
  padding: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.3);

  @media screen and (max-width: 768px) {
    border: none;
    border-top: 1px solid rgba(0, 0, 0, 0.3);
  }
`;

export const Gallery = styled.div`
  padding: 1rem;
  border-left: 1px solid rgba(0, 0, 0, 0.3);
  border-right: 1px solid rgba(0, 0, 0, 0.3);

  @media screen and (max-width: 768px) {
    border: none;
    border-top: 1px solid rgba(0, 0, 0, 0.3);
  }
`;

export const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 1rem;
  margin-top: 1rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Lists = styled.div`
  display: flex;
  padding: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.3);

  div {
    width: 50%;

    h3 {
      padding: 0.5rem 0rem;
      margin-bottom: 0.5rem;
    }

    li {
      margin-bottom: 1rem;
      font-size: 1.2rem;
    }
  }

  @media screen and (max-width: 768px) {
    border: none;
    border-top: 1px solid rgba(0, 0, 0, 0.3);

    div {
      h3 {
        font-size: 1.1rem;
      }

      li {
        font-size: 1rem;
      }
    }
  }
`;

export const RelatedGames = styled.div`
  padding: 1rem;
  border-left: 1px solid rgba(0, 0, 0, 0.3);
  border-right: 1px solid rgba(0, 0, 0, 0.3);

  @media screen and (max-width: 768px) {
    border: none;
    border-top: 1px solid rgba(0, 0, 0, 0.3);
  }
`;
