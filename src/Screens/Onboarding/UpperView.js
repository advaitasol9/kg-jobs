import React from 'react';
import {View, Text} from 'react-native';
import Svg, {Circle, G} from 'react-native-svg';
import OnBoardingHeader from '../../Components/Header/Onboarding';

import {COLORS, TEXT} from '../../Constants';
import {styles} from './styles';

function UpperView({percentage = 10, getBackFunc}) {
  const circleRef = React.useRef();
  const circleCircumference = 2 * Math.PI * 45;
  let stageCount = 1;

  const strokeDashoffset =
    circleCircumference - (circleCircumference * percentage) / 100;

  if (percentage > 50) stageCount = 3;
  else if (percentage >= 30) stageCount = 2;
  else stageCount = 1;

  return (
    <View style={styles.UpperView}>
      <OnBoardingHeader getBackFunc={getBackFunc} />
      <View style={styles.progressView}>
        <Svg width={120} height={120} viewBox={'0 0 100 100'}>
          <G rotation="-90" origin={'50, 50'}>
            <Circle
              cx="50%"
              cy="50%"
              r="45"
              stroke={COLORS.primaryLightMode}
              strokeWidth="7"
            />
            <Circle
              ref={circleRef}
              cx="50%"
              cy="50%"
              r="45"
              stroke={COLORS.white}
              strokeWidth="7"
              strokeDasharray={circleCircumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
            />
          </G>
        </Svg>
        <View style={styles.countView}>
          <Text style={styles.countText}>{stageCount}</Text>
          <Text style={styles.stageText}>Stage</Text>
        </View>
      </View>
      <Text style={styles.heyText}>Hey there,</Text>
      <Text style={styles.BuildProfileText}>{TEXT.BUILD_PROFILE}</Text>
    </View>
  );
}
export default React.memo(UpperView);
