import React from 'react';
import Animated, {
  Easing,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import StateDistrictModal from '../../Components/Modals/StateDistrict';
import BottomView from './bottomView';
import SharePhoneNumber from './SharePhoneNum';
import StateDistrict from './StateDistrict';
import UpperView from './UpperView';
import UserName from './UserName';

import {styles} from './styles';
import {DeviceWidth, ROUTE_NAME} from '../../Constants';
import {goBack, navigation} from '../../Navigation/NavigationService';
import InteresteView from './InterestedView';
import ExperienceView from './ExperienceView';
import PreviousWorkCops from './PreviousWorkCops';

function ContainerView() {
  const AnimateBottomViews = useSharedValue(0);
  const [isVisible, changeVisibility] = React.useState(false);
  const [percentage, setPercentage] = React.useState(10);

  const AnimateNameView = useAnimatedStyle(() => {
    const translateX = interpolate(
      AnimateBottomViews.value,
      [0, 1],
      [0, -DeviceWidth],
    );
    return {
      transform: [{translateX}],
    };
  });

  const AnimatePhoneNoView = useAnimatedStyle(() => {
    const translateX = interpolate(
      AnimateBottomViews.value,
      [0, 1, 2],
      [DeviceWidth, 0, -DeviceWidth],
    );
    return {
      transform: [{translateX}],
    };
  });

  const AnimateStateDistView = useAnimatedStyle(() => {
    const translateX = interpolate(
      AnimateBottomViews.value,
      [0, 1, 2],
      [DeviceWidth, DeviceWidth, 0],
    );
    return {
      transform: [{translateX}],
    };
  });

  const AnimateInterestView = useAnimatedStyle(() => {
    const translateX = interpolate(
      AnimateBottomViews.value,
      [1, 2, 3],
      [DeviceWidth, DeviceWidth, 0],
    );
    return {
      transform: [{translateX}],
    };
  });

  const AnimateExperienceView = useAnimatedStyle(() => {
    const translateX = interpolate(
      AnimateBottomViews.value,
      [2, 3, 4],
      [DeviceWidth, DeviceWidth, 0],
    );
    return {
      transform: [{translateX}],
    };
  });

  const AnimatePrevWorkView = useAnimatedStyle(() => {
    const translateX = interpolate(
      AnimateBottomViews.value,
      [3, 4, 5],
      [DeviceWidth, DeviceWidth, 0],
    );
    return {
      transform: [{translateX}],
    };
  });

  const openModal = () => changeVisibility(true);

  const closeModal = () => changeVisibility(false);

  const onPressNextButton = (viewCount, percent) => {
    AnimateBottomViews.value = withTiming(viewCount, {
      duration: 700,
      easing: Easing.bezier(0.25, 0.1, 0.25, 1),
    });
    setPercentage(percent);
  };

  const getDecsPercentage = DescValue => {
    switch (DescValue) {
      case 1:
        return 30;
      case 2:
        return 50;
      case 3:
        return 70;
      case 4:
        return 85;
      default:
        return 10;
    }
  };

  const onPressBack = () => {
    if (AnimateBottomViews.value !== 0) {
      const DescValue = AnimateBottomViews.value - 1;
      setPercentage(getDecsPercentage(DescValue));
      AnimateBottomViews.value = withTiming(DescValue, {
        duration: 400,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      });
    } else {
      goBack();
    }
  };

  const navigateToTab = () => navigation(ROUTE_NAME.MY_TABS);

  return (
    <>
      <UpperView percentage={percentage} getBackFunc={onPressBack} />
      <BottomView>
        <Animated.View style={[styles.AnimatedView, AnimateNameView]}>
          <UserName onPressBtn={() => onPressNextButton(1, 30)} />
        </Animated.View>
        <Animated.View style={[styles.AnimatedView, AnimatePhoneNoView]}>
          <SharePhoneNumber
            onPressSecondNext={() => onPressNextButton(2, 50)}
          />
        </Animated.View>
        <Animated.View style={[styles.AnimatedView, AnimateStateDistView]}>
          <StateDistrict
            openModal={openModal}
            stateDistrictOnPress={() => onPressNextButton(3, 70)}
          />
        </Animated.View>
        <Animated.View style={[styles.AnimatedView, AnimateInterestView]}>
          <InteresteView interestOnPress={() => onPressNextButton(4, 85)} />
        </Animated.View>
        <Animated.View style={[styles.AnimatedView, AnimateExperienceView]}>
          <ExperienceView onPressNext={() => onPressNextButton(5, 100)} />
        </Animated.View>
        <Animated.View style={[styles.AnimatedView, AnimatePrevWorkView]}>
          <PreviousWorkCops navigateToTab={navigateToTab} />
        </Animated.View>
      </BottomView>
      <StateDistrictModal visible={isVisible} closeModal={closeModal} />
    </>
  );
}
export default ContainerView;
