import React from 'react';
import {View, Text, ScrollView} from 'react-native';

import NormalButton from '../../Components/Button/NormalButton';
import {Bubble, styleBase, TEXT} from '../../Constants';
import {styles} from './styles';

const dummyInterestData = ['Agriculture', 'Poultry', 'Dairy', 'Fisheries'];

function InteresteView({interestOnPress}) {
  const [selectedInterest, setSelectedInterest] = React.useState([]);

  const selecUnselectInterest = interest => {
    if (selectedInterest.includes(interest)) {
      const index = selectedInterest.indexOf(interest);
      selectedInterest.splice(index, 1);
      setSelectedInterest([...selectedInterest]);
    } else {
      selectedInterest.push(interest);
      setSelectedInterest([...selectedInterest]);
    }
  };

  return (
    <View style={styles.bottomContentView}>
      <View style={styleBase.inRow}>
        <View style={styles.nameIconView}>
          <Bubble width={50} height={50} />
          <Text style={styles.NameFirstLetter}>S</Text>
        </View>
        <View>
          <Text style={styles.whatICall}>{TEXT.INTERESTED_SEGMENTS}</Text>
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.ScrollViewInterest}>
        <View style={styles.containerView}>
          {dummyInterestData.map(interest => {
            const isSelected = selectedInterest.includes(interest);
            return (
              <View key={interest} style={styles.singleInterestView}>
                <NormalButton
                  buttonLabel={interest}
                  buttonStyle={styles.interestBtn(isSelected)}
                  labelStyle={styles.interestLabelText(isSelected)}
                  onPress={() => selecUnselectInterest(interest)}
                />
              </View>
            );
          })}
        </View>
      </ScrollView>
      <NormalButton
        buttonLabel="Next"
        buttonStyle={styles.buttonStyle}
        onPress={interestOnPress}
      />
    </View>
  );
}
export default InteresteView;
