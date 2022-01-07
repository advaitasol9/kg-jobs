import React from 'react';
import {View, StyleSheet} from 'react-native';
import {COLORS} from '../../Constants';

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    paddingHorizontal: 30,
    paddingTop: 42,
    paddingBottom: 40,
  },
  rightCurveView: {
    width: 50,
    height: 50,
    backgroundColor: COLORS.primaryDefault,
    position: 'absolute',
    zIndex: 1,
    top: -25,
    right: -25,
    borderRadius: 25,
  },
  LeftCurveView: {
    width: 50,
    height: 50,
    backgroundColor: COLORS.primaryDefault,
    position: 'absolute',
    zIndex: 1,
    top: -25,
    left: -25,
    borderRadius: 25,
  },
});

function BottomView(props) {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.rightCurveView} />
      <View style={styles.LeftCurveView} />
      {props.children}
    </View>
  );
}
export default BottomView;
