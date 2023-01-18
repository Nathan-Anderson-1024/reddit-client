import { configureStore } from '@reduxjs/toolkit'
import popularReducer from '../features/popular/popularSlice'
import commentReducer from '../features/comment/commentSlice'
import searchReducer from '../features/search/searchSlice'
export const store =  configureStore({
    reducer: {
        popular: popularReducer,
        comments: commentReducer,
        search: searchReducer
    },
})