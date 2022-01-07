import React from 'react';
import {View, Text} from 'react-native';

import BackButton from '../../Components/Button/BackButton';
import ShareButton from '../../Components/Button/ShareButton';
import {TEXT} from '../../Constants';
import {styles} from './styles';

function UpperView() {
  return (
    <View style={styles.headerView}>
      <BackButton />
      <Text style={styles.jobDetailsText}>{TEXT.JOB_DETAILS}</Text>
      <ShareButton />
    </View>
  );
}
export default UpperView;
