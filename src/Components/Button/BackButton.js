import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {BackBtn, COLORS, styleBase} from '../../Constants';
import {goBack} from '../../Navigation/NavigationService';

const styles = StyleSheet.create({
  buttonContainer: {
    width: 50,
    height: 50,
    ...styleBase.inCenter,
    backgroundColor: COLORS.primaryLightMode,
    borderRadius: 12,
  },
});

function BackButton({getBackFunc}) {
  const previousScreen = () => goBack();
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={getBackFunc ? getBackFunc : previousScreen}
      style={styles.buttonContainer}>
      <BackBtn />
    </TouchableOpacity>
  );
}
export default BackButton;
