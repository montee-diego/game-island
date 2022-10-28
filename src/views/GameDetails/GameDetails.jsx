import { default as styled } from "styled-components";
import { useParams } from "react-router-dom";

import {
  useGetDetailsQuery,
  useGetStoreLinksQuery,
  useGetScreenshotsQuery,
  useGetMoreRelatedQuery,
} from "@services/api";
import { resizeImage } from "@utils/Images";
import { ErrorMessage, Grid, Loading } from "@components";

import * as Styled from "./GameDetails.styled";

export const GameDetails = () => {
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
    <Styled.Section>
      {gameIsLoading ? (
        <Loading />
      ) : gameIsError ? (
        <ErrorMessage action={gameRefetch} />
      ) : (
        <>
          <Styled.ImageWrapper>
            <img src={resizeImage(gameData.background_image, 1280)} alt={gameData.name} />
            <Styled.GameTitle>
              <h1>{gameData.name}</h1>
            </Styled.GameTitle>
            <Styled.Platforms>
              {gameData.platforms.map(data => (
                <h4 key={data.platform.id}>{data.platform.name}</h4>
              ))}
            </Styled.Platforms>
          </Styled.ImageWrapper>

          <Styled.GameMainInfo>
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
          </Styled.GameMainInfo>

          <Styled.Description>
            <p>{gameData.description_raw}</p>
          </Styled.Description>

          <Styled.Gallery>
            <h2>Gallery</h2>
            <Styled.GalleryGrid>
              {!screenshotIsLoading &&
                !screenshotIsError &&
                screenshotData.results.map(data => (
                  <a href={data.image} key={data.id} target='_blank'>
                    <img src={data.image} alt={data.id} />
                  </a>
                ))}
            </Styled.GalleryGrid>
          </Styled.Gallery>

          <Styled.Lists>
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
          </Styled.Lists>

          <Styled.RelatedGames>
            <h2>Related Games</h2>

            {relatedIsLoading ? (
              <Loading />
            ) : relatedIsError ? (
              <p>Game over! Failed to fetch data.</p>
            ) : (
              <Grid data={relatedData.results} href={"/browse/game"} />
            )}
          </Styled.RelatedGames>
        </>
      )}
    </Styled.Section>
  );
};
