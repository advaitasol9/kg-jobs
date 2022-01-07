import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {COLORS, FONTS_OVERPASS_TEXT, styleBase, TEXT} from '../../Constants';

const styles = StyleSheet.create({
  container: {
    ...styleBase.inRow,
    ...styleBase.spaceBetween,
  },
  LeftText: {
    ...styleBase.text24,
    fontFamily: FONTS_OVERPASS_TEXT.EXTRA_BOLD,
    color: COLORS.black,
  },
  RightText: {
    ...styleBase.text14,
    fontFamily: FONTS_OVERPASS_TEXT.SEMI_BOLD,
    color: COLORS.black,
    textDecorationLine: 'underline',
  },
});

function ProfileHeadingView({Heading, onPressEdit, customContainer}) {
  return (
    <View style={[styles.container, customContainer]}>
      <Text style={styles.LeftText}>{Heading}</Text>
      <Text onPress={onPressEdit} style={styles.RightText}>
        {TEXT.EDIT}
      </Text>
    </View>
  );
}
export default ProfileHeadingView;
