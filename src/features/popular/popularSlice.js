import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const getPopular = createAsyncThunk('popular/fetchPopular', async () => {
    const response = await fetch('https://www.reddit.com/r/popular.json');
    const json = await response.json();
    const posts = await json.data.children;
    return posts
})




export const popularSlice = createSlice({
    name: 'popular',
    initialState: {
        popularFeed: [],
        isLoading: false,
        isError: false
    },
    reducers: {
        getPopularData: (state, action) => {
            const { children } = action.payload;
            state.popularFeed.push(children);
        }
    },
    extraReducers: {
        [getPopular.pending]: (state, action) => {
            state.isLoading = true;
            state.isError = false;
        },
        [getPopular.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.popularFeed = action.payload

        },
        [getPopular.rejected]: (state, action) => {
            state.isLoading = false;
            state.isError = true;
        }
    }
})


export const {getPopularData} = popularSlice.actions
export const selectPopularData = (state) => state.popular.popularFeed
export default popularSlice.reducer