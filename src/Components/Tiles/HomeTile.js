import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {COLORS, FIcon, FONTS_OVERPASS_TEXT, styleBase} from '../../Constants';

const styles = StyleSheet.create({
  containerView: {
    padding: 14,
    width: '100%',
    backgroundColor: COLORS.GraishGreen,
    marginBottom: 20,
    borderRadius: 10,
  },
  bottomView: {
    ...styleBase.inRow,
    ...styleBase.spaceBetween,
    marginTop: 12,
  },
  headingView: {
    marginLeft: 12,
  },
  headingText: {
    ...styleBase.text18,
    color: COLORS.black,
    fontFamily: FONTS_OVERPASS_TEXT.EXTRA_BOLD,
  },
  SalaryText: {
    ...styleBase.text13,
    color: COLORS.black,
    fontFamily: FONTS_OVERPASS_TEXT.SEMI_BOLD,
    marginTop: 4,
  },
  locationText: {
    ...styleBase.text13,
    color: COLORS.PLaceholderColor,
    fontFamily: FONTS_OVERPASS_TEXT.REGULAR,
  },
  middleText: {
    ...styleBase.text13,
    color: COLORS.primaryDefault,
    fontFamily: FONTS_OVERPASS_TEXT.REGULAR,
  },
});

function HomeTile({item, onSelectJob}) {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => onSelectJob(item)}
      style={styles.containerView}>
      <View style={styleBase.inRow}>
        <FIcon />
        <View style={styles.headingView}>
          <Text style={styles.headingText}>{item}</Text>
          <Text style={styles.SalaryText}>Freshers | Salary</Text>
        </View>
      </View>
      <View style={styles.bottomView}>
        <Text style={styles.locationText}>21-12-2021</Text>
        <Text style={styles.middleText}>Freelance</Text>
        <Text style={styles.locationText}>Location</Text>
      </View>
    </TouchableOpacity>
  );
}
export default HomeTile;
