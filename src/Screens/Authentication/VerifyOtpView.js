import React, {useContext} from 'react';
import {View, Text} from 'react-native';

import UpperView from '../../Components/TicketView/UpperView';
import BottomView from '../../Components/TicketView/BottomView';
import DashedLine from '../../Components/Other/DashedLine';
import OtpInput from '../../Components/Input/OTPInput';
import NormalButton from '../../Components/Button/NormalButton';
import {AuthHeaderType, TEXT} from '../../Constants';
import {styles} from './styles';
import {AuthStageContext} from "./context";

function VerifyOtpView({onPressVerify, changeText}) {
  const [otpNumber, SetOtpNumber] = React.useState('');
  const controller = useContext(AuthStageContext);

  console.log(otpNumber);

  const onChangeNumber = text => {
    SetOtpNumber(text);
  };

  const onVerify = () => {
    controller.setOtp(otpNumber);
    onPressVerify();
  }

  return (
    <>
      <UpperView type={AuthHeaderType.VERIFY_OTP} />
      <DashedLine />
      <BottomView>
        <Text style={styles.titleText}>{TEXT.LET_VERIFY}</Text>
        <Text style={styles.shortText}>{TEXT.CONT_LET_VERIFY}</Text>
        <View style={styles.showMobileNoView}>
          <Text style={styles.phoneNumber}>+91 {controller.mobile}</Text>
          <Text onPress={changeText} style={styles.changeText}>
            {TEXT.CHANGE_TXT}
          </Text>
        </View>
        <View style={styles.InputView}>
          <Text style={styles.mobileNo}>{TEXT.VERIFY_CODE}</Text>
          <OtpInput handleChange={onChangeNumber} />
          <NormalButton
            buttonStyle={styles.buttonStyle}
            buttonLabel="Verify"
            onPress={onVerify}
          />
        </View>
      </BottomView>
    </>
  );
}
export default VerifyOtpView;
