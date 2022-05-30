import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    home: {
      latest: { name: "Latest", results: [] },
      popular: { name: "Popular", results: [] },
      thisweek: { name: "This Week", results: [] },
      upcoming: { name: "Upcoming", results: [] },
    },
    category: {
      genres: { isLast: false, next: 1, page: 0, results: [] },
      platforms: { isLast: false, next: 1, page: 0, results: [] },
      publishers: { isLast: false, next: 1, page: 0, results: [] },
      stores: { isLast: false, next: 1, page: 0, results: [] },
      developers: { isLast: false, next: 1, page: 0, results: [] },
    },
  },
  reducers: {
    updateCategoryPage: (state, action) => {
      state.category[action.payload.name].next += 1;
    },
    updateCategory: (state, action) => {
      const category = state.category[action.payload.name];

      if (category.page < action.payload.page) {
        category.isLast = action.payload.isLast === null;
        category.page = action.payload.page;
        category.results = category.results.concat(action.payload.results);
      }
    },
    updateHome: (state, action) => {
      state.home[action.payload.id].results = action.payload.results;
    },
  },
});

export const { getView } = appSlice.actions;
export default appSlice.reducer;
