import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {TEXT} from '../../../Constants';
import NormalButton from '../../Button/NormalButton';
import HeadingInput from '../../Input/HeadingInput';
import {styles} from './styles';

function ContentView({closeModal}) {
  const [name, setName] = React.useState('');
  const [Gender, setGender] = React.useState('');
  const [Email, setEmail] = React.useState('');

  return (
    <View style={styles.innerView}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.professionalInfo}>{TEXT.PROFESSIONAL_INFO}</Text>
        <HeadingInput
          heading={TEXT.NAME}
          value={name}
          customViewStyle={styles.customViewStyle}
          onChangeText={text => setName(text)}
        />
        <HeadingInput
          heading={TEXT.GENDER}
          value={Gender}
          onChangeText={text => setGender(text)}
        />
        <HeadingInput
          heading={TEXT.EMAIL}
          value={Email}
          onChangeText={text => setEmail(text)}
        />
        <HeadingInput
          heading={TEXT.STATE_LOCATION}
          value={Email}
          onChangeText={text => setEmail(text)}
        />
        <NormalButton
          buttonLabel={TEXT.UPDATE}
          buttonStyle={styles.buttonStyle}
          onPress={closeModal}
        />
      </ScrollView>
    </View>
  );
}
export default ContentView;
