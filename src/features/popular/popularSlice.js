import { createSlice } from "@reduxjs/toolkit";

export const popularSlice = createSlice({
    name: 'popular',
    initialState: {
        popularFeed: {

        }
    },
    reducers: {
        getPopularData: (state, action) => {
            const { children } = action.payload;
            state.popularFeed = 
        }
    }
})

const fetchData = async () => {
    const response = await fetch('https://www.reddit.com/r/popular.json')
    const json = await response.json();
    return json
}
export const getPopularFeed = (request) => {
    return (dispatch) => {
        return fetchData
    }
}