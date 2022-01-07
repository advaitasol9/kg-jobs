import React from 'react';
import {View, Text} from 'react-native';
import NormalButton from '../../Components/Button/NormalButton';
import LabelValueView from '../../Components/Other/LabelValueView';

import {styleBase, TEXT} from '../../Constants';
import {styles} from './styles';

function BottomView({openQuesView, isAppliedOnVisible}) {
  return (
    <View style={styles.bottomView}>
      <View style={styleBase.inRow}>
        <View style={styles.jobProfilePic} />
        <View>
          <Text style={styles.jobTitleText}>UI UX Designer</Text>
          <Text style={styles.jobWorkingCop}>Freshers | Salary</Text>
        </View>
      </View>
      {isAppliedOnVisible && (
        <LabelValueView
          LeftLabel={TEXT.APPLIED_ON}
          leftValue={'19-12-2021'}
          rightLabel={TEXT.STATUS}
          rightValue={'Waiting for review'}
          leftValueStyle={styles.valueColor}
          rightValueStyle={styles.valueColor}
        />
      )}
      <LabelValueView
        LeftLabel={TEXT.CLOSING_DATE}
        leftValue={'21-12-2021'}
        rightLabel={TEXT.FULL_TIME}
        rightValue={'Full Time'}
      />
      <LabelValueView
        LeftLabel={TEXT.LOCATION}
        leftValue={'Location'}
        rightLabel={TEXT.COMPANY}
        rightValue={'Kisangates Pvt Ltd'}
        rightValueStyle={styles.rightValueStyle}
      />
      <View style={styles.jobDescriptionView}>
        <Text style={styles.description}>{TEXT.JOB_DESCRIPTION}</Text>
        <Text style={styles.descriptionText}>
          {
            'React Native combines the best parts of native development with React, a best-in-class JavaScript library for building user interfaces.'
          }
        </Text>
      </View>
      <NormalButton buttonLabel={TEXT.APPLY} onPress={openQuesView} />
    </View>
  );
}
export default BottomView;
