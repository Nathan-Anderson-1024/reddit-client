import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getComments = createAsyncThunk('comments/fetchComments', async (permalink) => {
    const initialLink = String(permalink)
    const linkStripped = initialLink.substring(0, initialLink.length - 1)
    console.log(linkStripped)
    const response = await fetch(`https://reddit.com/${linkStripped}.json`, {headers: {'Access-Control-Allow-Origin': '*'}})
    console.log(response)
    return response
})

export const commentSlice = createSlice({
    name: 'comments',
    initialState: {
        comments: [],
        isLoading: false,
        isError: false
    },
    reducers: {
        addComment: (state, action) => {
            state.comments.push(action.payload)
        }

    },
    extraReducers: {
        [getComments.pending]: (state) => {
            state.isLoading = true;
            state.isError = false;
        },
        [getComments.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.comments.push(action.payload);
        },
        [getComments.rejected]: (state, action) => {
            state.isLoading = false;
            state.isError = true;
            console.log(action.payload)
        }
    }
    
})
export const selectComments = (state) => state.comments.comments
export const {addComment} = commentSlice.actions
export default commentSlice.reducer