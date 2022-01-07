import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  AuthHeaderType,
  COLORS,
  SignUpLogo,
  styleBase,
  VerifyLogo,
} from '../../Constants';

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    paddingTop: 40,
    paddingBottom: 28,
  },
  rightCurveView: {
    width: 50,
    height: 50,
    backgroundColor: COLORS.primaryDefault,
    position: 'absolute',
    zIndex: 1,
    bottom: -25,
    right: -25,
    borderRadius: 25,
  },
  LeftCurveView: {
    width: 50,
    height: 50,
    backgroundColor: COLORS.primaryDefault,
    position: 'absolute',
    zIndex: 1,
    bottom: -25,
    left: -25,
    borderRadius: 25,
  },
  IconView: {
    ...styleBase.inCenter,
  },
});

function UpperView({type}) {
  const RenderHeaderIcon = () => {
    if (type === AuthHeaderType.SIGN_UP) {
      return <SignUpLogo />;
    } else {
      return <VerifyLogo />;
    }
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.rightCurveView} />
      <View style={styles.LeftCurveView} />
      <View style={styles.IconView}>{RenderHeaderIcon()}</View>
    </View>
  );
}
export default React.memo(UpperView);
