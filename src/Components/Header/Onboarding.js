import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {COLORS, FONTS_OVERPASS_TEXT, styleBase, TEXT} from '../../Constants';
import BackButton from '../Button/BackButton';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    ...styleBase.inRow,
    ...styleBase.spaceBetween,
    padding: 20,
  },
  skipText: {
    ...styleBase.text18,
    lineHeight: 25,
    textDecorationLine: 'underline',
    color: COLORS.white,
    fontFamily: FONTS_OVERPASS_TEXT.REGULAR,
  },
});

function OnBoardingHeader({getBackFunc}) {
  return (
    <View style={styles.container}>
      <BackButton getBackFunc={getBackFunc} />
      <Text style={styles.skipText}>{TEXT.SKIP}</Text>
    </View>
  );
}
export default OnBoardingHeader;
