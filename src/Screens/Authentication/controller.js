import {useCallback, useEffect, useRef, useState} from "react";
// import {unwrapResult} from "@reduxjs/toolkit";
import RNOtpVerify from "react-native-otp-verify";
// import * as Notifications from "expo-notifications";
import {Alert, Platform} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {
    devicePushTokenSelector,
    isNetworkConnectedSelector,
    setHashKey,
    setDevicePushToken,
    setLoading,
    hashKeySelector
} from "../../Store/features/appSlice";
// eslint-disable-next-line import/named
import {setUser, setVerifiedPhoneProof} from "../../Store/features/authSlice";
// import {authUsingEmailPasswordAPI, getUserFromPhone, getUserTokenFromPhone, verifyOTPAPI} from "../../services/api";
import {requestForPushNotificationsAsync} from "../../Utility/utilFunctions";
import {replaceStateByUserId} from "../../Store/store";
import {
    useLazyUserAuthFetchUserFromPhoneQuery,
    useUserAuthAuthUsingEmailPasswordMutation,
    useUserAuthRequestOtpMutation, useUserAuthVerifyOtpMutation
} from "../../Store/api/hubApi";


export const useAuthenticationController = () => {
    const dispatch = useDispatch();
    const isNetworkConnected = useSelector(isNetworkConnectedSelector);
    const hashKey = useSelector(hashKeySelector);
    const deviceToken = useSelector(devicePushTokenSelector);
    const [encrypted, setEncrypted] = useState('');
    const [nonce, setNonce] = useState('');
    const [mobile, setMobile] = useState("");
    const [otp, setOtp] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const otpListener = useRef();
    const [requestOtp, {}] = useUserAuthRequestOtpMutation();
    const [verifyOtp] = useUserAuthVerifyOtpMutation();
    const [authUsingEmailPassword] = useUserAuthAuthUsingEmailPasswordMutation();
    const [getUserFromPhone, {}] = useLazyUserAuthFetchUserFromPhoneQuery();
    // const [getUserFromToken] = useLazyUserAuthFetchTokenFromPhoneQuery();


    const listenForOtp = useCallback(() => {
        if (Platform.OS === "android") {
            RNOtpVerify.getOtp()
            .then((RNOtpVerifyGetOtp) => {
                    console.log({RNOtpVerifyGetOtp});
                    RNOtpVerify.addListener((message) => {
                        console.log({RNOtpVerifyAddListenerMessage: message});
                        if (message) {
                            console.log({SMS_OTP: message});
                            try {
                                const parsedToken = /(\d{4})/g.exec(message)[1];
                                console.log({parsedToken});
                                setOtp(parsedToken);
                            } catch (e) {
                                console.log({message, OTP_RECEIVER_ERROR: e});
                            }
                        }
                    });
                }
            )
            .catch((p) => console.log(p));
            return () => {
                RNOtpVerify.removeListener();
            };
        }
        return () => {
        };
    }, [dispatch, setOtp]);

    useEffect(() => {
        requestForPushNotificationsAsync().then(token => {
            dispatch(setDevicePushToken(token));
        });
        console.log({OS: Platform.OS});
        if (Platform.OS === "android") {
            RNOtpVerify.getHash()
            .then((key) => {
                console.log({RNOtpVerifyGetHash: key})
                dispatch(setHashKey(key[0]));
            })
            .catch(console.log);
        }
        return () => {
        };
    }, []);


    const onSubmitPhone = useCallback(() => {
        return new Promise(onPressResolve => {
            console.log({AuthControllerMobile: mobile});
            if (mobile && mobile.length === 10) {
                dispatch(setLoading(true));
                requestOtp({phone_number: mobile, hash_key: hashKey || "x"})
                .unwrap()
                .then(
                    (res) => {
                        setEncrypted(res.encrypted);
                        setNonce(res.nonce);
                        setOtp(res.otp || "");
                        console.log({loginVerifyMobileActionRes: res});
                        dispatch(setLoading(false));
                        onPressResolve('OTPEntryScreen');
                        otpListener.current = listenForOtp();
                    },
                    (e) => {
                        console.log({loginVerifyMobileActionException: e});
                        Alert.alert("Error", e.message);
                        dispatch(setLoading(false));
                    }
                )
                .catch((e) => {
                    console.log({loginVerifyMobileActionException: e});
                    Alert.alert("Error", e.message);
                    dispatch(setLoading(false));
                });
            } else {
                Alert.alert("", "Enter a valid mobile number.");
            }
        });
    }, [mobile, dispatch, hashKey]);

    const isUserFarmInsta = function (userFromServer) {
        return (userFromServer.roles || []).some(role => ['fi-field-partner', 'fi-farmer'].includes(role.name))
    };

    const onSubmitOTP = useCallback(() => {
        // eslint-disable-next-line no-async-promise-executor
        return new Promise(async (resolve) => {
            const input = {encrypted, otp, nonce, mobile};
            console.log(input);
            if (otpListener.current && typeof otpListener.current === 'function') {
                try {
                    otpListener.current();
                } catch (e) {
                }
            }
            const res = await verifyOtp(input).unwrap();
            console.log({resOnSubmitOTP: res.errors});
            if (res.errors && res.errors.length === 0) {
                if (res.data && res.data.is_verified) {
                    setEncrypted(res.data.encrypted);
                    setOtp("");
                    dispatch(setVerifiedPhoneProof(res.data.encrypted));
                    // console.log({encrypted: res.data.encrypted});
                    const userTokenResponse = await getUserFromPhone({encrypted: res.data.encrypted});
                    console.log({userTokenResponse: JSON.stringify(userTokenResponse)});
                    if (userTokenResponse.data.user) {
                        // const accessToken = userTokenResponse.data.legacy_token;
                        // const profileRes = (await dispatch(ProfileFetchAction({accessToken, deviceToken }))).payload;
                        // console.log({profileRes});
                        // const userFromServer = profileRes.profile[0];
                        // userFromServer.status = "active";
                        const userFromServer = userTokenResponse.data.user;
                        await dispatch(setUser(userFromServer));
                        await replaceStateByUserId(userFromServer.id);
                        if (isUserFarmInsta(userFromServer)) {
                            resolve('HomeScreen');
                        } else {
                            resolve('RoleSelectScreen');
                        }
                    } else {
                        resolve('RoleSelectScreen');
                    }
                } else {
                    Alert.alert('Error', 'Incorrect OTP.')
                }
            } else {
                Alert.alert('Error', res.errors[0].message)
            }
        });
    }, [mobile, dispatch, encrypted, nonce, otp, deviceToken]);

    const onSubmitEmailPassword = useCallback(() => {
        // eslint-disable-next-line no-async-promise-executor
        return new Promise(async (resolve, reject) => {
            const response = await authUsingEmailPassword({encrypted, email, password}).unwrap();
            if (response.errors && response.errors.length === 0 && response.data.legacy_user) {
                const userFromServer = response.data.legacy_user;
                await dispatch(setUser(userFromServer));
                await replaceStateByUserId(userFromServer.id);
                resolve('HomeScreen');
            } else {
                let message = '';
                if (response.errors && response.errors.length > 0) {
                    message = response.errors[0].message;
                }
                reject(new Error(`Login failed: ${message}`));
            }
        });
    }, [dispatch, encrypted, email, password]);

    return {
        dispatch,
        isNetworkConnected,
        onNext: onSubmitPhone,
        onSubmitOTP,
        onSubmitEmailPassword,
        mobile,
        setMobile,
        otp,
        setOtp,
        email, setEmail,
        password, setPassword,
    }
};
