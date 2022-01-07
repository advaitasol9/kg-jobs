import { configureStore }                                 from '@reduxjs/toolkit'
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import auth                                               from "./features/authSlice";
import app                                               from "./features/appSlice";
import { hubApi }                                         from "./api/hubApi";
import { jobsApi }                                        from "./api/jobsApi";
import { setupListeners }                                 from "@reduxjs/toolkit/query";

export function setUpStore() {

    const store = configureStore({
        reducer: {
            auth,
            app,
            [hubApi.reducerPath]: hubApi.reducer,
            [jobsApi.reducerPath]: jobsApi.reducer,
        },
        middleware: (getDefaultMiddleware) => {
            return getDefaultMiddleware().concat(hubApi.middleware).concat(jobsApi.middleware)
        },
    })
    setupListeners(store.dispatch);
    return store;
}

export const store = setUpStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export function replaceStateByUserId() {

}
