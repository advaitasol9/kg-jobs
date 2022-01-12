import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ScrollView,
  Modal,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';

import {tStyle} from '../../../../Constants/TextStyle';
import {FONTS_OVERPASS_TEXT, TEXT} from '../../../../Constants';
import {scale, verticalScale} from '../../../../Constants/Size';

const MobileModal = ({
  showModal = false,
  mobileNum,
  changeMobileNum,
  hideModal,
}) => {
  const [mobNum, setMobNum] = useState(mobileNum);
  const [stage, setStage] = useState(0);
  return (
    <Modal visible={showModal} transparent={true}>
      {stage === 0 && (
        <View style={styles.container}>
          <View style={styles.btm}>
            <Text style={styles.text1}>New Mobile Number</Text>
            <Text style={styles.text2}>Enter new mobile number and verify</Text>
            <Text style={styles.text3}>NEW MOBILE NUMBER</Text>
            <View style={{flexDirection: 'row', marginTop: verticalScale(8)}}>
              <View
                style={{...styles.rowWrapper, paddingTop: verticalScale(15)}}>
                <Text style={styles.text4}>+91</Text>
                <Image
                  source={require('../../../../Assets/poly.png')}
                  style={styles.img}
                />
              </View>
              <View
                style={{...styles.rowWrapper, flex: 1, marginLeft: scale(25)}}>
                {/* <Text style={styles.text4}>{mobNum}</Text> */}
                <TextInput
                  value={mobNum}
                  onChangeText={val => setMobNum(val)}
                  style={styles.text4}
                  placeholder=""
                />
              </View>
            </View>
            <TouchableOpacity style={styles.btn} onPress={() => setStage(1)}>
              <Text style={styles.text7}>Get OTP</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      {stage === 1 && (
        <View style={styles.container}>
          <View style={styles.btm}>
            <Text style={styles.text1}>Verify Mobile number</Text>
            <Text style={styles.text2}>Verify your number</Text>
            <Text style={styles.text3}>
              We have send a verification code to
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: verticalScale(13),
              }}>
              <Text style={styles.text4}>{'+91 ' + mobNum}</Text>
              <TouchableWithoutFeedback onPress={() => setStage(0)}>
                <Text
                  style={{...styles.text4, textDecorationLine: 'underline'}}>
                  Change
                </Text>
              </TouchableWithoutFeedback>
            </View>
            <Text style={styles.text8}>OTP</Text>
            <View>
              <OTPInputView
                pinCount={6}
                style={styles.otpCont}
                codeInputFieldStyle={styles.otpInput}
                onCodeFilled={code => {}}
                autoFocusOnLoad={false}
              />
            </View>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                changeMobileNum(mobNum);
                setStage(2);
              }}>
              <Text style={styles.text7}>Verify and change</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      {stage === 2 && (
        <View style={styles.container}>
          <View style={{...styles.btm, alignItems: 'center'}}>
            <Image
              source={require('../../../../Assets/tick.png')}
              style={styles.img2}
              resizeMode="contain"
            />
            <Text style={{...styles.text1, marginBottom: verticalScale(4)}}>
              Successful
            </Text>
            <Text style={styles.text2}>You have successfully changed</Text>
            <Text style={styles.text2}>your mobile number</Text>
            <TouchableWithoutFeedback
              onPress={() => {
                setStage(0);
                hideModal();
              }}>
              <Text
                style={{
                  ...styles.text4,
                  textDecorationLine: 'underline',
                  marginTop: verticalScale(22),
                  marginBottom: verticalScale(61),
                }}>
                Back to Profile
              </Text>
            </TouchableWithoutFeedback>
          </View>
        </View>
      )}
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#043B5360',
  },
  btm: {
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopLeftRadius: scale(25),
    borderTopRightRadius: scale(25),
    paddingHorizontal: scale(25),
    paddingTop: verticalScale(38),
  },
  text1: {
    ...tStyle(FONTS_OVERPASS_TEXT.BOLD, '100', 24, 32, '#043B53'),
  },
  text2: {
    ...tStyle(FONTS_OVERPASS_TEXT.REGULAR, '100', 16, 21, '#16516B'),
    marginTop: verticalScale(4),
  },
  text3: {
    ...tStyle(FONTS_OVERPASS_TEXT.REGULAR, '100', 14, 19, '#547E92'),
    marginTop: verticalScale(40),
  },
  rowWrapper: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#E7EDF0',
  },
  text4: {
    ...tStyle(FONTS_OVERPASS_TEXT.BOLD, '100', 20, 27, '#043B53'),
  },
  btn: {
    height: verticalScale(65),
    width: scale(364),
    marginTop: verticalScale(30),
    marginBottom: verticalScale(46),
    borderRadius: scale(10),
    backgroundColor: '#099804',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  text7: {
    ...tStyle(FONTS_OVERPASS_TEXT.REGULAR, '600', 20, 27, '#fff'),
    paddingTop: verticalScale(5),
  },
  img: {
    width: scale(19),
    height: verticalScale(10),
    marginLeft: scale(10),
    marginTop: verticalScale(4),
  },
  text8: {
    ...tStyle(FONTS_OVERPASS_TEXT.EXTRA_LIGHT, '600', 14, 19, '#547E92'),
    marginTop: verticalScale(30),
  },
  otpCont: {
    marginTop: verticalScale(9),
    height: verticalScale(60),
  },
  otpInput: {
    height: verticalScale(60),
    width: scale(45),
    borderRadius: scale(12),
    borderColor: '#E7EDF0',
    color: '#547E92',
  },
  img2: {
    width: scale(90),
    height: verticalScale(90),
    marginBottom: verticalScale(18),
  },
});

export default MobileModal;
