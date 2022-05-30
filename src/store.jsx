import { configureStore } from "@reduxjs/toolkit";

import { fetchAPI } from "./services/api";
import appReducer from "./slice/appSlice";

export const store = configureStore({
  reducer: {
    [fetchAPI.reducerPath]: fetchAPI.reducer,
    app: appReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(fetchAPI.middleware),
});
