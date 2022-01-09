import React, {useState} from 'react';
import {StyleSheet, View, Image, Text, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import NormalButton from '../../../Components/Button/NormalButton';
import PhoneNoInput from '../../../Components/Input/PhoneNoInput';
import {
  dynamicSize,
  FONTS_OVERPASS_TEXT,
  scaleHeight,
} from '../../../Constants';
import {scale, verticalScale} from '../../../Constants/Size';
import {tStyle} from '../../../Constants/TextStyle';
import {navigation} from '../../../Navigation/NavigationService';

const Login = () => {
  const [phone, setPhone] = useState();

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={styles.container}>
        <Image
          source={require('../../../Assets/loginLogo.png')}
          height={scaleHeight(97)}
          width={dynamicSize(83)}
          style={{
            height: scaleHeight(97),
            width: dynamicSize(83),
            marginTop: scaleHeight(74),
          }}
          resizeMode="contain"
        />
        <Text style={styles.text1}>Hello there,</Text>
        <Text style={[styles.text2, {marginTop: verticalScale(9)}]}>
          Let's continue with
        </Text>
        <Text style={[styles.text2, {marginBottom: verticalScale(61)}]}>
          Mobile Number
        </Text>
        <PhoneNoInput
          PhoneNumber={phone}
          onChangeText={setPhone}
          layout="none"
          autoFocus={true}
        />
        <NormalButton
          buttonLabel={'Next'}
          onPress={() => navigation('VerifyOTP', {phone})}
          labelStyle={{}}
          buttonStyle={{
            backgroundColor: '#099804',
            marginTop: verticalScale(30),
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: scale(25),
  },
  text1: {
    ...tStyle(FONTS_OVERPASS_TEXT.EXTRA_BOLD, null, 40, 48, '#043B53'),
    marginTop: verticalScale(36.5),
  },
  text2: {
    ...tStyle(FONTS_OVERPASS_TEXT.REGULAR, null, 22, 30, '#16516B'),
  },
});

export default Login;
