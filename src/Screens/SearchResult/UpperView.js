import React from 'react';
import {View, Text, Image} from 'react-native';
import BackButton from '../../Components/Button/BackButton';
import {TEXT} from '../../Constants';
import {styles} from './styles';

function UpperView() {
  return (
    <View style={styles.headerView}>
      <BackButton />
      <Text style={styles.headingText}>{TEXT.SEARCH_RESULT}</Text>
      <View style={styles.extraView} />
    </View>
  );
}
export default UpperView;
