// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import {getBaseUrls} from "./apiEndpoints";

const POST = 'POST';
const GET = 'GET';

console.log({hubBase: getBaseUrls().hub});

function getHeadersAsText(headers) {
    let output = ``;
    headers.forEach((h,i) => { output+= `${i}: ${h}`});
    return output;
}

// Define a service using a base URL and expected endpoints
export const hubApi = createApi({
    reducerPath: 'hubApi',
    baseQuery: fetchBaseQuery({
        baseUrl: getBaseUrls().hub,
//         fetchFn: (input1: RequestInfo, input2) => {
//             console.log(`
//
// ${input1.method} ${input1.url}
// ${getHeadersAsText(input1.headers)}
// ${input1._bodyText}
//
// `);
//             return fetch(input1, input2).then(result => {
//                 console.log(`
//
// ${result.status} ${result.statusText}
// ${getHeadersAsText(result.headers)}
// ${result.clone().json()}
//
// `);
//                 return result;
//             }, err => {
//                 console.log(`[HTTP] ${err.message}`);
//                 if (err.response) {
//                     console.log(`
//
// ${err.response.status} ${err.response.statusText}
// ${getHeadersAsText(err.response.headers)}
// ${err.response.clone().json()}
//
// `);
//                 }
//                 throw err;
//             });
//         },
    }),
    endpoints: (builder) => ({
        userAuthRequestOtp: builder.mutation({
            query: (body:{phone_number: string, hash_key: string}) => ({url: '/user-auth/request-otp', method: POST, body}),
        }),
        userAuthVerifyOtp: builder.mutation({
            query: (body) => ({url: '/user-auth/verify-otp', method: POST, body}),
        }),
        userAuthResendOtp: builder.mutation({
            query: (body) => ({url: '/user-auth/resend-otp', method: POST, body}),
        }),
        userAuthFetchUserFromPhone: builder.query({
            query: (body) => ({url: '/user-auth/fetch-user-from-phone', method: POST, body}),
        }),
        userAuthFetchTokenFromPhone: builder.query({
            query: (body) => ({url: '/user-auth/fetch-token-from-phone', method: POST, body}),
        }),
        userAuthAuthUsingEmailPassword: builder.mutation({
            query: (body) => ({url: '/user-auth/auth-using-email-password', method: POST, body}),
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
    useUserAuthRequestOtpMutation,
    useUserAuthVerifyOtpMutation,
    useUserAuthResendOtpMutation,
    useUserAuthFetchUserFromPhoneQuery,
    useLazyUserAuthFetchUserFromPhoneQuery,
    useUserAuthFetchTokenFromPhoneQuery,
    useLazyUserAuthFetchTokenFromPhoneQuery,
    useUserAuthAuthUsingEmailPasswordMutation,
} = hubApi;
