import { createSlice } from "@reduxjs/toolkit";
const searchSlice = createSlice({
  name: "search",
  initialState: {
    query: "",
    activeTab: "Photos",
    result: [],
    loading: false,
    error: null,
  },
  reducers: {
    setQuery(state, action) {
      state.query = action.payload;
    },
    setActiveTabs(state, action) {
      state.activeTab = action.payload;
    },
    setResults(state, action) {
      state.result = action.payload;
      state.loading = false;
    },
    setLoading(state, action) {
      state.loading = true;
      state.error = null;
    },
    setError(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { setQuery, setActiveTabs, setError, setLoading, setResults } =
  searchSlice.actions;
export default searchSlice.reducer;
