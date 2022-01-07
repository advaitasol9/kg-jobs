import React from 'react';
import {View, Text, ScrollView} from 'react-native';

import NormalButton from '../../Components/Button/NormalButton';
import {Bubble, styleBase, TEXT} from '../../Constants';
import {styles} from './styles';

const dummyPrevWorkData = ['Veg', 'FC', 'fresher', 'Chemicals', 'Bioproducts'];

function PreviousWorkCops({navigateToTab}) {
  const [selectedOption, setSelectedOption] = React.useState('');

  return (
    <View style={styles.bottomContentView}>
      <View style={styleBase.inRow}>
        <View style={styles.nameIconView}>
          <Bubble width={50} height={50} />
          <Text style={styles.NameFirstLetter}>S</Text>
        </View>
        <View>
          <Text style={styles.whatICall}>{TEXT.PREVIOUS_WORKED}</Text>
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.ScrollViewInterest}>
        <View style={styles.containerView}>
          {dummyPrevWorkData.map(prevWork => {
            const isSelected = selectedOption === prevWork;
            return (
              <View key={prevWork} style={styles.singleInterestView}>
                <NormalButton
                  buttonLabel={prevWork}
                  buttonStyle={styles.interestBtn(isSelected)}
                  labelStyle={styles.interestLabelText(isSelected)}
                  onPress={() => setSelectedOption(prevWork)}
                />
              </View>
            );
          })}
        </View>
      </ScrollView>
      <NormalButton
        buttonLabel="Next"
        buttonStyle={styles.buttonStyle}
        onPress={navigateToTab}
      />
    </View>
  );
}
export default PreviousWorkCops;
