import React from 'react';
import {View, Modal} from 'react-native';
import ContentView from './contentView';

import {styles} from './styles';

function PersonalInfo({visible, closeModal}) {
  return (
    <Modal
      transparent
      animationType="slide"
      visible={visible}
      onRequestClose={() => closeModal()}>
      <View style={styles.modalContainer}>
        <ContentView closeModal={closeModal} />
      </View>
    </Modal>
  );
}
export default PersonalInfo;
