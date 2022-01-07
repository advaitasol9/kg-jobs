import React from 'react';
import {TouchableOpacity, StyleSheet, Image} from 'react-native';
import {COLORS, Share, styleBase} from '../../Constants';

const styles = StyleSheet.create({
  buttonContainer: {
    width: 50,
    height: 50,
    ...styleBase.inCenter,
    backgroundColor: COLORS.primaryLightMode,
    borderRadius: 12,
  },
  shareIcon: {
    width: 24,
    height: 24,
  },
});

function ShareButton({onPress}) {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={onPress}
      style={styles.buttonContainer}>
      <Image source={Share} style={styles.shareIcon} />
    </TouchableOpacity>
  );
}
export default ShareButton;
