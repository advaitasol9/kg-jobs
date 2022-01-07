import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {COLORS, FONTS_OVERPASS_TEXT, styleBase} from '../../Constants';

const styles = StyleSheet.create({
  LabelValueView: {
    ...styleBase.inRow,
    marginTop: 30,
  },
  oneSideView: hideRightValue => ({
    width: hideRightValue ? '100%' : '50%',
  }),
  LabelStyle: {
    ...styleBase.text16,
    fontFamily: FONTS_OVERPASS_TEXT.REGULAR,
    color: COLORS.tabInactiveColor,
  },
  valueStyle: {
    ...styleBase.text18,
    fontFamily: FONTS_OVERPASS_TEXT.BOLD,
    color: COLORS.black,
    marginTop: 4,
  },
});

function LabelValueView({
  rightLabel,
  LeftLabel,
  rightValue,
  leftValue,
  leftValueStyle,
  rightValueStyle,
  hideRightValue,
  customeLabelView,
}) {
  return (
    <View style={[styles.LabelValueView, customeLabelView]}>
      <View style={styles.oneSideView(hideRightValue)}>
        <Text style={styles.LabelStyle}>{LeftLabel}</Text>
        <Text style={[styles.valueStyle, leftValueStyle]}>{leftValue}</Text>
      </View>
      {!hideRightValue && (
        <View style={styles.oneSideView}>
          <Text style={styles.LabelStyle}>{rightLabel}</Text>
          <Text style={[styles.valueStyle, rightValueStyle]}>{rightValue}</Text>
        </View>
      )}
    </View>
  );
}
export default LabelValueView;
