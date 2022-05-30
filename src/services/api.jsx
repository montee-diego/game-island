import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const fetchAPI = createApi({
  reducerPath: "fetchAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.rawg.io/api" }),
  keepUnusedDataFor: 60,
  endpoints: builder => ({
    getLists: builder.query({
      query: param =>
        `/games/lists/${param.type}?key=${
          import.meta.env.VITE_API_KEY
        }&ordering=${param.order}&page=${param.page}&page_size=${param.size}`,
    }),
    getDetails: builder.query({
      query: game_id => `/games/${game_id}?key=${import.meta.env.VITE_API_KEY}`,
    }),
    getStoreLinks: builder.query({
      query: game_id =>
        `/games/${game_id}/stores?key=${import.meta.env.VITE_API_KEY}`,
    }),
    getScreenshots: builder.query({
      query: game_id =>
        `/games/${game_id}/screenshots?key=${import.meta.env.VITE_API_KEY}`,
    }),
    getMoreRelated: builder.query({
      query: game_id =>
        `/games/${game_id}/game-series?key=${import.meta.env.VITE_API_KEY}`,
    }),
    getSearch: builder.query({
      query: params =>
        `/games?key=${import.meta.env.VITE_API_KEY}&search=${
          params.query
        }&page=${params.page}&page_size=20`,
    }),
    getCategory: builder.query({
      query: params =>
        `/${params.type}?key=${import.meta.env.VITE_API_KEY}&page=${
          params.page
        }&page_size=20`,
    }),
    getCategoryGames: builder.query({
      query: params =>
        `/games?key=${import.meta.env.VITE_API_KEY}&${params.type}=${
          params.id
        }&page=${params.page}&page_size=20`,
    }),
    getCategoryDetails: builder.query({
      query: params =>
        `/${params.type}/${params.id}?key=${import.meta.env.VITE_API_KEY}`,
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
