import React from 'react';
import {View, Text, StyleSheet, TextInput, Image} from 'react-native';

import {
  COLORS,
  DownArrow,
  FONTS_OVERPASS_TEXT,
  styleBase,
} from '../../Constants';
import {verticalScale} from '../../Constants/Size';

const styles = StyleSheet.create({
  outterView: {
    width: '100%',
    height: 52,
    backgroundColor: COLORS.GraishGreen,
    borderRadius: 8,
    ...styleBase.inRow,
    overflow: 'hidden',
    paddingHorizontal: 18,
  },
  countryCodeView: {
    ...styleBase.inRow,
    borderRightColor: COLORS.lightGray,
    borderRightWidth: 1,
    height: '100%',
    paddingRight: 6,
  },
  countryCodeText: {
    ...styleBase.text16,
    fontFamily: FONTS_OVERPASS_TEXT.BOLD,
    color: COLORS.black,
  },
  inputView: {
    marginLeft: 6,
    width: '80%',
  },
  DownArrow: {
    width: 13,
    height: 7,
    marginLeft: 8,
  },
});

const Layouts = {
  none: 'none',
  box: 'box',
};

function PhoneNoInput({
  PhoneNumber,
  onChangeText,
  layout = Layouts.box,
  autoFocus = false,
}) {
  const isLayoutNone = layout == Layouts.none;
  return (
    <View
      style={[
        styles.outterView,
        isLayoutNone && {backgroundColor: 'transparent'},
      ]}>
      <View
        style={[
          styles.countryCodeView,
          isLayoutNone && {
            borderBottomWidth: 1,
            borderColor: '#E7EDF0',
            height: verticalScale(48),
            borderRightWidth: 0,
          },
        ]}>
        <Text style={styles.countryCodeText}>+91</Text>
        <Image source={DownArrow} style={styles.DownArrow} />
      </View>
      <View style={styles.inputView}>
        <TextInput
          value={PhoneNumber}
          onChangeText={onChangeText}
          underlineColorAndroid={
            isLayoutNone ? '#E7EDF0' : COLORS.transparentColor
          }
          keyboardType="phone-pad"
          maxLength={10}
          placeholder={isLayoutNone ? 'Enter Mobile Number' : null}
          style={styles.countryCodeText}
          autoFocus={autoFocus}
        />
      </View>
    </View>
  );
}
export default React.memo(PhoneNoInput);
