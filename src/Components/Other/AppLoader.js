import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import {COLORS, styleBase} from '../../Constants';

const styles = StyleSheet.create({
  loaderView: bgColor => ({
    ...styleBase.absolutePosition,
    zIndex: 1000,
    backgroundColor: bgColor,
  }),
});

export default function AppLoader({
  bgColor = COLORS.white,
  indicatorColor = COLORS.primaryDefault,
}) {
  return (
    <View style={styles.loaderView(bgColor)}>
      <ActivityIndicator color={indicatorColor} />
    </View>
  );
}
