import React from 'react';
import {View, Text, ScrollView} from 'react-native';

import NormalButton from '../../Components/Button/NormalButton';
import {Bubble, styleBase, TEXT} from '../../Constants';
import {styles} from './styles';

const dummyExperienceData = [
  "I'm a Fresher",
  '1-2 Years',
  '5-8 Years',
  '8+ Years',
];

function ExperienceView({onPressNext}) {
  const [selectedExperience, setSelectedExperience] = React.useState('');

  return (
    <View style={styles.bottomContentView}>
      <View style={styleBase.inRow}>
        <View style={styles.nameIconView}>
          <Bubble width={50} height={50} />
          <Text style={styles.NameFirstLetter}>S</Text>
        </View>
        <View>
          <Text style={styles.whatICall}>{TEXT.EXPERIENCE}</Text>
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.ScrollViewInterest}>
        <View style={styles.containerView}>
          {dummyExperienceData.map(experience => {
            const isSelected = selectedExperience === experience;
            return (
              <View key={experience} style={styles.singleInterestView}>
                <NormalButton
                  buttonLabel={experience}
                  buttonStyle={styles.interestBtn(isSelected)}
                  labelStyle={styles.interestLabelText(isSelected)}
                  onPress={() => setSelectedExperience(experience)}
                />
              </View>
            );
          })}
        </View>
      </ScrollView>
      <NormalButton
        buttonLabel="Next"
        buttonStyle={styles.buttonStyle}
        onPress={onPressNext}
      />
    </View>
  );
}
export default ExperienceView;
