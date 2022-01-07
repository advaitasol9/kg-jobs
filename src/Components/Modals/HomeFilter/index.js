import React from 'react';
import {Modal, Platform, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import FilterView from './FilterView';
import {styles} from './styles';

function HomeFilter({visible, onClose}) {
  const inset = useSafeAreaInsets();
  const Topheight = Platform.OS === 'ios' ? inset.top : 0;
  return (
    <Modal
      transparent
      animationType="slide"
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.modalContainer(Topheight)}>
        <FilterView closeFilter={onClose} />
      </View>
    </Modal>
  );
}
export default HomeFilter;
