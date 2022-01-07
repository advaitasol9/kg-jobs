import React from 'react';
import {View, Text} from 'react-native';

import NormalButton from '../../Components/Button/NormalButton';
import PhoneNoInput from '../../Components/Input/PhoneNoInput';
import {Bubble, styleBase, TEXT} from '../../Constants';
import {styles} from './styles';

function SharePhoneNumber({onPressSecondNext}) {
  const [PhoneNumber, SetPhoneNumber] = React.useState('');
  const onChangeNumber = text => SetPhoneNumber(text);
  return (
    <View style={styles.bottomContentView}>
      <View style={styleBase.inRow}>
        <View style={styles.nameIconView}>
          <Bubble width={50} height={50} />
          <Text style={styles.NameFirstLetter}>S</Text>
        </View>
        <View>
          <Text style={styles.whatICall}>{TEXT.SHARE_PHONE_NO}</Text>
        </View>
      </View>
      <View>
        <Text style={styles.nameText}>{TEXT.PHONE_NUMBER}</Text>
        <PhoneNoInput PhoneNumber={PhoneNumber} onChangeText={onChangeNumber} />
      </View>
      <NormalButton
        buttonLabel="Next"
        buttonStyle={styles.buttonStyle}
        onPress={onPressSecondNext}
      />
    </View>
  );
}
export default SharePhoneNumber;
