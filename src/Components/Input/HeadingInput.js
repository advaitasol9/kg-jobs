import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {COLORS, FONTS_OVERPASS_TEXT, styleBase} from '../../Constants';
import NormalInput from './NormalInput';

const styles = StyleSheet.create({
  heading: {
    ...styleBase.text14,
    fontFamily: FONTS_OVERPASS_TEXT.SEMI_BOLD,
    color: COLORS.black,
    marginBottom: 3,
  },
  customViewStyle: {
    marginBottom: 16,
  },
});

function HeadingInput({heading, onChangeText, value, customViewStyle}) {
  return (
    <View style={customViewStyle}>
      <Text style={styles.heading}>{heading}</Text>
      <NormalInput
        value={value}
        onChangeText={onChangeText}
        customViewStyle={styles.customViewStyle}
      />
    </View>
  );
}
export default HeadingInput;
