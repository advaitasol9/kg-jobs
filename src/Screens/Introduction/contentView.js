import React from 'react';
import {View, Text, Image} from 'react-native';
import Animated, {
  Easing,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import NormalButton from '../../Components/Button/NormalButton';
import {
  COLORS,
  DeviceWidth,
  IntroLogo,
  LogoWhiteBg,
  ROUTE_NAME,
  TEXT,
} from '../../Constants';
import {navigation} from '../../Navigation/NavigationService';

import {styles} from './styles';

function ContentView() {
  const circleAnimation = useSharedValue(0);

  const navigateToOnboarding = () => navigation(ROUTE_NAME.ONBOARDING);

  const StartAnimation = () => {
    circleAnimation.value = withRepeat(
      withTiming(1, {
        duration: 2100,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      }),
      -1,
      true,
    );
  };

  const AnimateOutterCircle = useAnimatedStyle(() => {
    const opacity = interpolate(circleAnimation.value, [0, 1], [0.2, 0.4]);
    return {opacity};
  });

  const AnimateInnerCircle = useAnimatedStyle(() => {
    const opacity = interpolate(circleAnimation.value, [0, 1], [0.4, 0.2]);
    const scale = interpolate(circleAnimation.value, [0, 1], [1.1, 0.9]);
    return {opacity, transform: [{scale}]};
  });

  React.useEffect(() => {
    StartAnimation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <View style={styles.NameNLogo}>
        <View style={styles.IntroLogo}>
          <Animated.View style={[styles.outterCircle, AnimateOutterCircle]} />
          <Animated.View style={[styles.innerCircle, AnimateInnerCircle]} />
          <Image source={LogoWhiteBg} style={styles.IntroLogoImage} />
        </View>
        <Text style={styles.heyText}>{TEXT.HEY_IM}</Text>
        <Text style={styles.assigtant}>{TEXT.PERSONAL_ASSIGTANT}</Text>
      </View>
      <View style={styles.TextNBtton}>
        <Text style={styles.helpText}>{TEXT.HELP_ME_BUILD}</Text>
        <NormalButton
          buttonLabel="Yes, Please"
          buttonStyle={styles.buttonStyle}
          labelStyle={styles.labelStyle}
          onPress={navigateToOnboarding}
        />
      </View>
    </>
  );
}
export default ContentView;
