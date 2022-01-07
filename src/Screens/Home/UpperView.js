import React from 'react';
import {View, Text, Image} from 'react-native';
import {Bellicon, styleBase, TEXT, WhiteWithLogo} from '../../Constants';
import {styles} from './styles';

function UpperView() {
  return (
    <View style={styles.headerView}>
      <View style={styleBase.inRow}>
        <View style={styles.imageView}>
          <WhiteWithLogo />
        </View>
        <View>
          <Text style={styles.welcomeText}>{TEXT.WELCOME}</Text>
          <Text style={styles.UserNameText}>Simran Jeet singh</Text>
        </View>
      </View>
      <Image source={Bellicon} style={styles.bellicon} />
    </View>
  );
}
export default UpperView;
