import React from 'react';
import Animated, {
  Easing,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {Platform} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import MainContainer from '../../Components/Other/MainContainer';
import BottomView from './BottomView';
import {styles} from './../Home/styles';
import UpperView from './UpperView';
import {DeviceHeight, ROUTE_NAME} from '../../Constants';
import ExtraQuestionView from './ExtraQuestionView';
import {navigation} from '../../Navigation/NavigationService';
import {useRoute} from '@react-navigation/core';

function JobDetails({}) {
  const insert = useSafeAreaInsets();
  const paddingTop = Platform.OS === 'ios' ? insert.top : 0;
  const AskQuestion = useSharedValue(0);
  const route = useRoute();
  const isAppliedOnVisible = route.params?.appliedOnVisible || false;

  const closeExtraQuesView = () => {
    const value = AskQuestion.value === 0 ? 1 : 0;
    AskQuestion.value = withTiming(value, {
      duration: 700,
      easing: Easing.bezier(0.25, 0.1, 0.25, 1),
    });
  };

  const onPressNext = () => {
    closeExtraQuesView();
    setTimeout(() => {
      navigation(ROUTE_NAME.INTRODUCTION);
    }, 750);
  };

  const AnimatedAskQuestion = useAnimatedStyle(() => {
    const translateY = interpolate(
      AskQuestion.value,
      [0, 1],
      [DeviceHeight, 0],
    );
    return {
      transform: [{translateY}],
    };
  });

  return (
    <>
      <MainContainer>
        <UpperView />
        <BottomView
          openQuesView={closeExtraQuesView}
          isAppliedOnVisible={isAppliedOnVisible}
        />
      </MainContainer>
      <Animated.View
        style={[styles.filter(paddingTop, 1), AnimatedAskQuestion]}>
        <ExtraQuestionView
          CloseView={closeExtraQuesView}
          onPressNext={onPressNext}
        />
      </Animated.View>
    </>
  );
}
export default JobDetails;
