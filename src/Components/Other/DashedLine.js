import React from 'react';
import {StyleSheet} from 'react-native';
import DashedLine from 'react-native-dashed-line';
import {COLORS} from '../../Constants';

const styles = StyleSheet.create({
  lineSeprator: {
    backgroundColor: COLORS.white,
  },
});

function DashLine() {
  return (
    <DashedLine
      dashLength={10}
      dashThickness={1}
      dashGap={5}
      dashColor={COLORS.grayC1}
      style={styles.lineSeprator}
    />
  );
}
export default DashLine;
