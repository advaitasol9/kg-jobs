import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import NormalButton from '../../Components/Button/NormalButton';
import NormalInput from '../../Components/Input/NormalInput';
import {Bubble, NameTitle, styleBase, TEXT} from '../../Constants';
import {styles} from './styles';

function UserName({onPressBtn}) {
  const [selectedTitle, setNameTitle] = React.useState('Mr.');
  const [userName, setUserName] = React.useState('');

  const changeText = text => {
    setUserName(text);
  };

  const changeTitle = title => {
    setNameTitle(title);
  };

  return (
    <View style={styles.bottomContentView}>
      <View style={styleBase.inRow}>
        <View style={styles.nameIconView}>
          <Bubble width={50} height={50} />
          <Text style={styles.NameFirstLetter}>S</Text>
        </View>
        <View>
          <Text style={styles.whatICall}>Hey there,</Text>
          <Text style={styles.whatICall}>{TEXT.WHAT_I_CALL}</Text>
        </View>
      </View>
      <View style={styles.titleView}>
        {NameTitle.map(title => (
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => changeTitle(title)}
            key={title}
            style={styles.nameTitleView(title === selectedTitle)}>
            <Text style={styles.nameTitle(title === selectedTitle)}>
              {title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View>
        <Text style={styles.nameText}>{TEXT.NAME}</Text>
        <NormalInput
          value={userName}
          onChangeText={changeText}
          placeholder={TEXT.ENTER_NAME}
        />
      </View>
      <NormalButton
        onPress={onPressBtn}
        buttonLabel="Next"
        buttonStyle={styles.buttonStyle}
      />
    </View>
  );
}
export default UserName;
