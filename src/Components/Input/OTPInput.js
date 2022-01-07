import React from 'react';
import {StyleSheet, View} from 'react-native';
import OtpInputs from 'react-native-otp-inputs';
import {COLORS} from '../../Constants';

const styles = StyleSheet.create({
  otpContainer: {
    width: '100%',
    height: 52,
  },
  inputStyles: {
    width: 50,
    height: 50,
    borderRadius: 8,
    textAlign: 'center',
    backgroundColor: COLORS.GraishGreen,
  },
});

function OtpInput({handleChange}) {
  return (
    <View style={styles.otpContainer}>
      <OtpInputs
        handleChange={handleChange}
        numberOfInputs={4}
        inputStyles={styles.inputStyles}
      />
    </View>
  );
}
export default React.memo(OtpInput);
