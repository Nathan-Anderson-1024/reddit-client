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
        incrementUpvote: (state, action) => {
            // Finds the index position that matches the post youre upvoting
            const indexLoc = state.popularFeed.findIndex((post) => {
                return post.data.id === action.payload
            })
            // adds one to the data.score key for post in index position
            state.popularFeed[indexLoc].data.score += 1;
        },
        decrementUpvote: (state, action) => {
            // Finds the index position that matches the post youre upvoting
            const indexLoc = state.popularFeed.findIndex((post) => {
                return post.data.id === action.payload
            })
            // decrements one to the data.score key for post in index position
            state.popularFeed[indexLoc].data.score -= 1;
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


export const {incrementUpvote, decrementUpvote} = popularSlice.actions
export const selectPopularData = (state) => state.popular.popularFeed
export default popularSlice.reducer