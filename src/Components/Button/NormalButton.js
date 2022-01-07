import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {COLORS, FONTS_OVERPASS_TEXT, styleBase} from '../../Constants';

const styles = StyleSheet.create({
  buttonView: {
    width: '100%',
    height: 48,
    backgroundColor: COLORS.primaryDefault,
    ...styleBase.inCenter,
    borderRadius: 8,
  },
  buttonLabel: {
    ...styleBase.text16,
    color: COLORS.white,
    fontFamily: FONTS_OVERPASS_TEXT.BOLD,
  },
});

function NormalButton({buttonLabel, buttonStyle, onPress, labelStyle}) {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={onPress}
      style={[styles.buttonView, buttonStyle]}>
      <Text style={[styles.buttonLabel, labelStyle]}>{buttonLabel}</Text>
    </TouchableOpacity>
  );
}
export default React.memo(NormalButton);
