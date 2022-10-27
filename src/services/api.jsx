import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createSearchParams } from "react-router-dom";

const searchParams = (params = {}) => {
  return createSearchParams({
    key: import.meta.env.VITE_API_KEY,
    ...params,
  });
};

export const fetchAPI = createApi({
  reducerPath: "fetchAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.rawg.io/api" }),
  keepUnusedDataFor: 60,
  endpoints: builder => ({
    getLists: builder.query({
      query: ({ list, params }) => `/games/lists/${list}?${searchParams(params)}`,
    }),
    getDetails: builder.query({
      query: game_id => `/games/${game_id}?${searchParams()}`,
    }),
    getStoreLinks: builder.query({
      query: game_id => `/games/${game_id}/stores?${searchParams()}`,
    }),
    getScreenshots: builder.query({
      query: game_id => `/games/${game_id}/screenshots?${searchParams()}`,
    }),
    getMoreRelated: builder.query({
      query: game_id => `/games/${game_id}/game-series?${searchParams()}`,
    }),
    getSearch: builder.query({
      query: params => `/games?${searchParams(params)}`,
    }),
    getCategory: builder.query({
      query: ({ category, params }) => `/${category}?${searchParams(params)}`,
    }),
    getCategoryGames: builder.query({
      query: ({ filter, id, params }) => {
        const dynamicParams = { ...params };
        dynamicParams[filter] = id;

        return `/games?${searchParams(dynamicParams)}`;
      },
    }),
    getCategoryDetails: builder.query({
      query: params => `/${params.type}/${params.id}?${searchParams()}`,
    }),
  }),
});

export const {
  useGetListsQuery,
  useGetDetailsQuery,
  useGetStoreLinksQuery,
  useGetScreenshotsQuery,
  useGetMoreRelatedQuery,
  useGetSearchQuery,
  useGetCategoryQuery,
  useGetCategoryGamesQuery,
  useGetCategoryDetailsQuery,
} = fetchAPI;
