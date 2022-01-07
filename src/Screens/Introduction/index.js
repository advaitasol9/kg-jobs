import React from 'react';
import {View} from 'react-native';

import MainContainer from '../../Components/Other/MainContainer';
import ContentView from './contentView';
import {styles} from './styles';

function Introduction() {
  return (
    <MainContainer showViewOnly>
      <View style={styles.MainContainer}>
        <ContentView />
      </View>
    </MainContainer>
  );
}
export default Introduction;
