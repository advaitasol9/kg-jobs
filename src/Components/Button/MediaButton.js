import React from 'react';
import {TouchableOpacity, StyleSheet, Image} from 'react-native';
import {Camera, COLORS, styleBase} from '../../Constants';

const styles = StyleSheet.create({
  buttonContainer: {
    width: 50,
    height: 50,
    alignSelf: 'flex-end',
    backgroundColor: COLORS.primaryLightMode,
    borderRadius: 12,
    ...styleBase.inCenter,
  },
  shareIcon: {
    width: 24,
    height: 24,
  },
});

function MediaButton({onPress}) {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={onPress}
      style={styles.buttonContainer}>
      <Image source={Camera} resizeMode="contain" style={styles.shareIcon} />
    </TouchableOpacity>
  );
}
export default MediaButton;
