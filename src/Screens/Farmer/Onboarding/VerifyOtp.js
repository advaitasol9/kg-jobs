import React, {useEffect, useRef, useState} from 'react';
import {StyleSheet, View, Image, Text, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import OtpInputs, {OtpInputsRef} from 'react-native-otp-inputs';

import NormalButton from '../../../Components/Button/NormalButton';
import PhoneNoInput from '../../../Components/Input/PhoneNoInput';
import {FONTS_OVERPASS_TEXT, ROUTE_NAME} from '../../../Constants';
import Onboarding from '../../Onboarding';
import OnBoardingHeader from '../../../Components/Header/Onboarding';
import HeaderTitle from '../../../Components/Header/HeaderTitle';
import {scale, verticalScale} from '../../../Constants/Size';
import {tStyle} from '../../../Constants/TextStyle';

const formatTime = num =>
  num.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});

const VerifyOTP = ({navigation, route}) => {
  const otpRef = useRef();

  const [count, setCount] = useState(60);

  useEffect(() => {
    navigation.setOptions({
      //   headerLeft: () => <Icon />,
      headerTitle: () => <HeaderTitle title={'Enter 6 digit OTP'} />,
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [count]);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text1}>Enter the 6-digit code sent to you at</Text>
      <Text style={styles.phone}>+91 {route.params.phone}</Text>
      <View style={{width: '100%', height: 52, alignSelf: 'center'}}>
        <OtpInputs
          ref={otpRef}
          handleChange={code => console.log(code)}
          numberOfInputs={6}
          secureTextEntry={true}
          autoFocus={true}
          inputStyles={{borderBottomWidth: 1, textAlign: 'center'}}
          // inputContainerStyles={{width: '90%'}}/
        />
      </View>
      <Text style={styles.resend}>
        {count > 0 ? `Resend OTP in 00:${formatTime(count)}` : 'Resend OTP'}
      </Text>
      <Text
        style={[
          styles.text2,
          {
            marginTop: verticalScale(68),
          },
        ]}>
        Having Trouble?
      </Text>
      <Text style={styles.text2}>Reach us at support@wiingy.com</Text>
      <NormalButton
        buttonLabel={'Next'}
        onPress={() => {
          navigation.navigate('SelectProfile');
        }}
        labelStyle={{}}
        buttonStyle={{
          backgroundColor: '#099804',
          marginTop: verticalScale(30),
        }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: scale(25),
    backgroundColor: '#ffffff',
  },
  text1: {
    ...tStyle(FONTS_OVERPASS_TEXT.REGULAR, '400', 18, 24, '#16516B'),
    marginTop: verticalScale(29.5),
  },
  phone: {
    ...tStyle(FONTS_OVERPASS_TEXT.BOLD, '400', 20, 40, '#043B53'),
    marginTop: verticalScale(13),
  },
  resend: {
    ...tStyle(FONTS_OVERPASS_TEXT.BOLD, '700', 20, 40, '#043B53'),
    marginTop: verticalScale(23),
    textDecorationLine: 'underline',
  },
  text2: {
    ...tStyle(FONTS_OVERPASS_TEXT.REGULAR, '400', 16, 26, '#043B53'),
  },
});

export default VerifyOTP;
