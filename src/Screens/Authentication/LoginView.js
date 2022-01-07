import React from 'react';
import {View, Text} from 'react-native';
import NormalButton from '../../Components/Button/NormalButton';
import NormalInput from '../../Components/Input/NormalInput';

import {CheckBox, ROUTE_NAME, TEXT} from '../../Constants';
import {navigation} from '../../Navigation/NavigationService';
import {styles} from './styles';

function LoginView() {
  const [Email, SetEmail] = React.useState('');
  const [Password, SetPassword] = React.useState('');

  const changeEmailtext = text => {
    SetEmail(text);
  };

  const changePasswordtext = text => {
    SetPassword(text);
  };

  const onPressLogin = () => navigation(ROUTE_NAME.INTRODUCTION);

  return (
    <>
      <Text style={styles.titleText}>{TEXT.LET_LOGIN}</Text>
      <Text style={styles.shortText}>{TEXT.CONT_MOBILE_NO}</Text>
      <View style={styles.emailFieldsView}>
        <Text style={styles.headingText}>{TEXT.EMAIL}</Text>
        <NormalInput
          value={Email}
          onChangeText={changeEmailtext}
          keyboardType="email-address"
        />
      </View>
      <View style={styles.PwdFieldsView}>
        <Text style={styles.headingText}>{TEXT.PASSWORD}</Text>
        <NormalInput
          value={Password}
          onChangeText={changePasswordtext}
          secureTextEntry
        />
      </View>
      <View style={styles.TNCVew}>
        <CheckBox />
        <Text style={styles.termConditionText}>
          {TEXT.TERM_CONDITION}
          <Text style={styles.highLightedText}> {TEXT.TERM_N_CONDITION}</Text>
          {' and\n'}
          <Text style={styles.highLightedText}>{TEXT.PRIVACY_POLICY}</Text>
        </Text>
      </View>
      <Text style={styles.forgotPwdTxt}>{TEXT.FORGOT_PASSWORD}</Text>
      <NormalButton
        buttonLabel="Login"
        buttonStyle={styles.loginButtonStyle}
        onPress={onPressLogin}
      />
    </>
  );
}
export default LoginView;
