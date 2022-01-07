import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import BackgroundTimer from "react-native-background-timer";
import { hubApi }                        from "../api/hubApi";
import { jobsApi }                       from "../api/jobsApi";
import { NetInfoState }                  from "@react-native-community/netinfo";
import { useSelector }                   from "react-redux";
import { RootState }                     from "../store";

const initialState: {
    devicePushToken: string,
    hashKey: string,
    appState: string | null,
    networkState: NetInfoState | null,
    isLoading: boolean
} = {
    devicePushToken: '',
    hashKey: '',
    appState: null,
    networkState: null,
    isLoading: false,
}

export const devicePushTokenSelector = (state: RootState) => state.app.devicePushToken;
export const isNetworkConnectedSelector = (state: RootState) => (state.app.networkState && state.app.networkState ? state.app.networkState.isInternetReachable : false);
export const hashKeySelector = (state:RootState) => state.app.hashKey;

let goingBackground: null;

export const setAppState = createAsyncThunk<string, string>("app/setAppState", async (val) => {
    if (val === "background") {
        return new Promise((res) => {
            goingBackground = BackgroundTimer.setTimeout(() => res(val), 15000);
        });
    }
    if (goingBackground) {
        BackgroundTimer.clearTimeout(goingBackground);
        goingBackground = null;
    }

    return val;
});

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setDevicePushToken: (state, { payload: { devicePushToken } }) => {
            state.devicePushToken = devicePushToken;
        },
        setHashKey: (state, { payload: { hashKey } }) => {
            state.hashKey = hashKey
        },
        setLoading: (state, { payload: { isLoading } }) => {
            state.isLoading = isLoading;
        }
    },
    extraReducers: {
        [setAppState.fulfilled]: (state, {payload}) => {
            state.appState = payload;
        }
    }
})

// Action creators are generated for each case reducer function
export const { setDevicePushToken, setLoading, setHashKey } = appSlice.actions

export default appSlice.reducer
