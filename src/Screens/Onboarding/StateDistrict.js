import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import NormalButton from '../../Components/Button/NormalButton';
import {Bubble, Frameicon, styleBase, TEXT} from '../../Constants';
import {styles} from './styles';

function StateDistrict({openModal, stateDistrictOnPress}) {
  return (
    <View style={styles.bottomContentView}>
      <View style={styleBase.inRow}>
        <View style={styles.nameIconView}>
          <Bubble width={50} height={50} />
          <Text style={styles.NameFirstLetter}>S</Text>
        </View>
        <View>
          <Text style={styles.whatICall}>{TEXT.STATE_DISTRICT}</Text>
        </View>
      </View>
      <TouchableOpacity
        activeOpacity={1}
        onPress={openModal}
        style={styles.frameView}>
        <Frameicon />
        <Text style={styles.tapToSelect}>{TEXT.TAP_TO_SELECT}</Text>
      </TouchableOpacity>
      <NormalButton
        buttonLabel="Next"
        buttonStyle={styles.buttonStyle}
        onPress={stateDistrictOnPress}
      />
    </View>
  );
}
export default StateDistrict;
