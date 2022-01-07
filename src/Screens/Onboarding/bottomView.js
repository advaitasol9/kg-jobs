import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';

function BottomView(props) {
  return <View style={styles.BottomView}>{props.children}</View>;
}
export default BottomView;
