import React, {useContext} from 'react';
import {View} from 'react-native';
import Animated, {
    withTiming,
    useSharedValue,
    useAnimatedStyle,
    Easing,
    Extrapolate,
    interpolate,
    interpolateColor,
} from 'react-native-reanimated';

import OutterView from '../../Components/TicketView/OutterView';

import {Applogo, COLORS, DeviceHeight, ROUTE_NAME} from '../../Constants';
import SignupView from './SignUpView';
import VerifyOtpView from './VerifyOtpView';
import LoginView from './LoginView';
import {styles} from './styles';
import {useAuthenticationController} from "./controller";
import {AuthStageContext} from "./context";
import {navigation} from "../../Navigation/NavigationService";

function TicketContainer() {
    const ticketNo = useSharedValue(0);
    const controller = useContext(AuthStageContext);

    const onPressContinue = () => {
        controller.onNext();
        ticketNo.value = withTiming(1, {
            duration: 1500,
            easing: Easing.bezier(0.25, 0.1, 0.25, 1),
        });
    };

    const onPressVerify = async () => {
        const nextScreen = await controller.onSubmitOTP();
        if (nextScreen === 'RoleSelectScreen') {
            navigation(ROUTE_NAME.ROLESELECT);
        } else {

        }
        ticketNo.value = withTiming(2, {
            duration: 1000,
            easing: Easing.bezier(0.25, 0.1, 0.25, 1),
        });
    };

    const changeText = () => {
        ticketNo.value = withTiming(0, {
            duration: 700,
            easing: Easing.bezier(0.25, 0.1, 0.25, 1),
        });
    };

    const SignUpViewStyle = useAnimatedStyle(() => {
        const translateY = interpolate(
            ticketNo.value,
            [0, 1, 2],
            [0, -DeviceHeight * 1.5, -DeviceHeight * 1.5],
            Extrapolate.CLAMP,
        );

        return {
            transform: [{translateY}],
        };
    });

    const VerifyOtpViewStyle = useAnimatedStyle(() => {
        const translateY = interpolate(
            ticketNo.value,
            [0, 1, 2],
            [15, 0, -DeviceHeight * 1.5],
            Extrapolate.CLAMP,
        );

        const scaleX = interpolate(
            ticketNo.value,
            [0, 1, 2],
            [0.9, 1, 1],
            Extrapolate.CLAMP,
        );

        const backgroundColor = interpolateColor(
            ticketNo.value,
            [0, 1, 2],
            [COLORS.whiteC1, COLORS.white, COLORS.white],
        );

        return {
            transform: [{translateY}, {scaleX}],
            backgroundColor,
        };
    });

    const loginViewStyle = useAnimatedStyle(() => {
        const translateY = interpolate(
            ticketNo.value,
            [0, 1, 2],
            [30, 15, 0],
            Extrapolate.CLAMP,
        );

        const scaleX = interpolate(
            ticketNo.value,
            [0, 1, 2],
            [0.75, 0.9, 1],
            Extrapolate.CLAMP,
        );

        const backgroundColor = interpolateColor(
            ticketNo.value,
            [0, 1, 2],
            [COLORS.white8D, COLORS.whiteC1, COLORS.white],
        );

        return {
            transform: [{translateY}, {scaleX}],
            backgroundColor,
        };
    });

    return (
        <View style={styles.TicketContainerView}>
            <View style={styles.upperAppLogo}>
                <Applogo/>
            </View>
            <OutterView>
                <Animated.View style={[styles.OutterView(3), SignUpViewStyle]}>
                    <SignupView onClickContinue={onPressContinue} />
                </Animated.View>
                <Animated.View style={[styles.OutterView(2), VerifyOtpViewStyle]}>
                    <VerifyOtpView
                        onPressVerify={onPressVerify}
                        changeText={changeText}
                    />
                </Animated.View>
                <Animated.View style={[styles.contentView, loginViewStyle]}>
                    <LoginView  {...controller} />
                </Animated.View>
            </OutterView>
        </View>
    );
}

export default TicketContainer;
