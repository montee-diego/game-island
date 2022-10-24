import { default as styled } from "styled-components";
import { useParams } from "react-router-dom";

import {
  useGetDetailsQuery,
  useGetStoreLinksQuery,
  useGetScreenshotsQuery,
  useGetMoreRelatedQuery,
} from "../services/api";
import { resizeImage } from "../utils";
import ErrorMessage from "../components/ErrorMessage";
import Loading from "../components/Loading";
import GameList from "../components/GameList";

const GameDetails = () => {
  const { id } = useParams();

  const {
    data: gameData,
    isLoading: gameIsLoading,
    isError: gameIsError,
    refetch: gameRefetch,
  } = useGetDetailsQuery(id);

  const {
    data: storeData,
    isLoading: storeIsLoading,
    isError: storeIsError,
  } = useGetStoreLinksQuery(id);

  const {
    data: screenshotData,
    isLoading: screenshotIsLoading,
    isError: screenshotIsError,
  } = useGetScreenshotsQuery(id);

  const {
    data: relatedData,
    isLoading: relatedIsLoading,
    isError: relatedIsError,
  } = useGetMoreRelatedQuery(id);

  return (
    <Section>
      {gameIsLoading ? (
        <Loading />
      ) : gameIsError ? (
        <ErrorMessage action={gameRefetch} />
      ) : (
        <>
          <ImageWrapper>
            <img
              src={resizeImage(gameData.background_image, 1280)}
              alt={gameData.name}
            />
            <GameTitle>
              <h1>{gameData.name}</h1>
            </GameTitle>
            <Platforms>
              {gameData.platforms.map(data => (
                <h4 key={data.platform.id}>{data.platform.name}</h4>
              ))}
            </Platforms>
          </ImageWrapper>

          <GameMainInfo>
            <h3>Release Date: {gameData.tba ? "TBA" : gameData.released}</h3>
            <div className='score-info'>
              {gameData.metacritic !== null && (
                <h3>
                  Meta <span className='score'>{gameData.metacritic}</span>
                </h3>
              )}
              {gameData.rating !== null && (
                <h3>
                  Users <span className='score'>{gameData.rating}</span>
                </h3>
              )}
            </div>
          </GameMainInfo>

          <Description>
            <p>{gameData.description_raw}</p>
          </Description>

          <Gallery>
            <h2>Gallery</h2>
            <GalleryGrid>
              {!screenshotIsLoading &&
                !screenshotIsError &&
                screenshotData.results.map(data => (
                  <a href={data.image} key={data.id} target='_blank'>
                    <img src={data.image} alt={data.id} />
                  </a>
                ))}
            </GalleryGrid>
          </Gallery>

          <Lists>
            <div className='storefronts'>
              <h3>Storefronts</h3>
              <ul>
                {storeIsLoading ? (
                  <p>Retrieving store data...</p>
                ) : storeIsError ? (
                  <p>Game over! Failed to fetch data.</p>
                ) : gameData.stores.length === 0 ? (
                  <p>No store data available.</p>
                ) : (
                  gameData.stores.map((data, index) => (
                    <li key={data.store.id}>
                      <a href={storeData?.results[index]?.url} target='_blank'>
                        {data.store.name}
                      </a>
                    </li>
                  ))
                )}
              </ul>
            </div>
            <div className='company-info'>
              <h3>Developed by</h3>
              <ul>
                {gameData.developers.map(data => (
                  <li key={data.id}>{data.name}</li>
                ))}
              </ul>
              <h3>Published by</h3>
              <ul>
                {gameData.publishers.map(data => (
                  <li key={data.id}>{data.name}</li>
                ))}
              </ul>
            </div>
          </Lists>

          <RelatedGames>
            <h2>Related Games</h2>

            {relatedIsLoading ? (
              <Loading />
            ) : relatedIsError ? (
              <p>Game over! Failed to fetch data.</p>
            ) : (
              <GameList games={relatedData.results} />
            )}
          </RelatedGames>
        </>
      )}
    </Section>
  );
};

const Section = styled.section`
  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 0rem;
  }
`;

const ImageWrapper = styled.div`
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

const GameTitle = styled.div`
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

const Platforms = styled.div`
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

const GameMainInfo = styled.div`
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

const Description = styled.div`
  padding: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.3);

  @media screen and (max-width: 768px) {
    border: none;
    border-top: 1px solid rgba(0, 0, 0, 0.3);
  }
`;

const Gallery = styled.div`
  padding: 1rem;
  border-left: 1px solid rgba(0, 0, 0, 0.3);
  border-right: 1px solid rgba(0, 0, 0, 0.3);

  @media screen and (max-width: 768px) {
    border: none;
    border-top: 1px solid rgba(0, 0, 0, 0.3);
  }
`;

const GalleryGrid = styled.div`
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

const Lists = styled.div`
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

const RelatedGames = styled.div`
  padding: 1rem;
  border-left: 1px solid rgba(0, 0, 0, 0.3);
  border-right: 1px solid rgba(0, 0, 0, 0.3);

  @media screen and (max-width: 768px) {
    border: none;
    border-top: 1px solid rgba(0, 0, 0, 0.3);
  }
`;

export default GameDetails;
