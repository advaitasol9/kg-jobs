import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {COLORS, FONTS_OVERPASS_TEXT, styleBase} from '../../Constants';

const styles = StyleSheet.create({
  tileView: {
    ...styleBase.inRow,
    marginBottom: 24,
  },
  DotStyle: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: COLORS.tabInactiveColor,
  },
  labelText: {
    ...styleBase.text18,
    fontFamily: FONTS_OVERPASS_TEXT.SEMI_BOLD,
    color: COLORS.tabInactiveColor,
    marginLeft: 12,
  },
});

function SearchTile({item, onPress}) {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={onPress}
      style={styles.tileView}>
      <View style={styles.DotStyle} />
      <Text style={styles.labelText}>{item}</Text>
    </TouchableOpacity>
  );
}
export default SearchTile;
