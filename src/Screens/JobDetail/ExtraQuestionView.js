import React from 'react';
import {
  TouchableOpacity,
  Image,
  View,
  Text,
  TextInput,
  Keyboard,
} from 'react-native';
import NormalButton from '../../Components/Button/NormalButton';
import useKeyboard from '../../Components/Other/KeyboardListener';

import {Bubble, CloseBar, COLORS, styleBase, TEXT} from '../../Constants';
import {styles} from './styles';

function ExtraQuestionView({CloseView, onPressNext}) {
  const [question, setQuestion] = React.useState('');

  const keyboardHeight = useKeyboard();

  const onSubmitEditing = () => Keyboard.dismiss();

  return (
    <View style={styles.innerView(keyboardHeight)}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={CloseView}
        style={styles.closeBar}>
        <Image source={CloseBar} />
      </TouchableOpacity>
      <View style={styles.headerContentView}>
        <View style={styleBase.inRow}>
          <View style={styles.nameIconView}>
            <Bubble width={42} height={42} />
            <Text style={styles.NameFirstLetter}>S</Text>
          </View>
          <View>
            <Text style={styles.extraQuesText}>{TEXT.EXTRA_QUES}</Text>
          </View>
        </View>
        <Text style={styles.extraQuesText}>
          <Text style={styles.quesCount}>1</Text>/2
        </Text>
      </View>
      <View style={styles.inputFieldView}>
        <TextInput
          value={question}
          onChangeText={text => setQuestion(text)}
          underlineColorAndroid={COLORS.transparentColor}
          multiline
          style={styles.inputField}
          onSubmitEditing={onSubmitEditing}
        />
      </View>
      <NormalButton
        buttonLabel={TEXT.NEXT}
        buttonStyle={styles.buttonStyle}
        onPress={onPressNext}
      />
    </View>
  );
}
export default ExtraQuestionView;
