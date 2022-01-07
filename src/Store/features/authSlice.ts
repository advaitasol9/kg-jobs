import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { hubApi }                        from "../api/hubApi";
import { jobsApi }                       from "../api/jobsApi";

const initialState = {
    value: 0,
    phoneNumber: '',
    verifiedPhoneProof: '',
    user: null,
}

export const requestOTP = createAsyncThunk<{}, { phoneNumber: string }>('auth/requestOtp', async ({ phoneNumber }, { dispatch }) => {
    dispatch(setPhone(phoneNumber));
    const res = dispatch(hubApi.endpoints.userAuthRequestOtp.initiate({ phoneNumber }));
    const otpRes = hubApi.endpoints.userAuthRequestOtp.select(res.requestId);
    return undefined;
})
//
// export const setUserAction = createAsyncThunk('auth/setUser', async ({user}) => {
//     return user;
// })

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setPhone: (state, { payload }) => {
            state.phoneNumber = payload;
        },
        setVerifiedPhoneProof:(state, {payload}) => {
            state.verifiedPhoneProof = payload;
        },
        setUser: (state, { payload: { user } }) => {
            state.user = user;
        }
    },
    extraReducers: {
        // [setUserAction.fulfilled]: (state, {payload: {user}}) => {
        //
        // }
    }
})

// Action creators are generated for each case reducer function
export const { setPhone, setUser, setVerifiedPhoneProof } = authSlice.actions

export default authSlice.reducer
