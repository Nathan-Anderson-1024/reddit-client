import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchSearch = createAsyncThunk('search/fetchSearch', async (string) => {
    const response = await fetch(`https://www.reddit.com/search.json?q=${string}`);
    const json = await response.json();
    const posts = await json.data.children;
    return posts
})

export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        searchResult: [],
        searchString: "",
        isLoading: false,
        isError: false
    },
    reducers: {
        addSearch: (state, action) => {
            state.searchString = action.payload
        }
    },
    extraReducers: {
        [fetchSearch.pending]: (state) => {
            state.isLoading = true;
            state.isError = false;
        },
        [fetchSearch.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.searchResult = action.payload;
        },
        [fetchSearch.rejected]: (state) => {
            state.isLoading = false;
            state.isError = true;
        }
    }
})
export const {addSearch} = searchSlice.actions
export const selectSearchData = (state) => state.search.searchResult
export const selectSearchTerm = (state) => state.search.searchString
export const selectLoading = (state) => state.search.isLoading
export default searchSlice.reducer