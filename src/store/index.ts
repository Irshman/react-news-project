import { configureStore } from '@reduxjs/toolkit'
import {useDispatch, useSelector} from "react-redux";
import { reducer as newsReducer } from "./slices/newsSlice.ts";
import {newsApi} from "./services/newsApi.ts";

export const store = configureStore({
    reducer: {
        news: newsReducer,
        [newsApi.reducerPath]: newsApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(newsApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()