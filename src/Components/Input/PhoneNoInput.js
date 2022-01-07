import React from 'react';
import {View, Text, StyleSheet, TextInput, Image} from 'react-native';

import {
  COLORS,
  DownArrow,
  FONTS_OVERPASS_TEXT,
  styleBase,
} from '../../Constants';

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

function PhoneNoInput({PhoneNumber, onChangeText}) {
  return (
    <View style={styles.outterView}>
      <View style={styles.countryCodeView}>
        <Text style={styles.countryCodeText}>+91</Text>
        <Image source={DownArrow} style={styles.DownArrow} />
      </View>
      <View style={styles.inputView}>
        <TextInput
          value={PhoneNumber}
          onChangeText={onChangeText}
          underlineColorAndroid={COLORS.transparentColor}
          keyboardType="phone-pad"
          maxLength={10}
          style={styles.countryCodeText}
        />
      </View>
    </View>
  );
}
export default React.memo(PhoneNoInput);
