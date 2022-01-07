import React from 'react';
import {Modal, Platform, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import SearchView from './SearchView';
import {styles} from './styles';

function HomeSearch({visible, onClose, onSelectItem}) {
  const inset = useSafeAreaInsets();
  const Topheight = Platform.OS === 'ios' ? inset.top : 0;
  return (
    <Modal
      transparent
      animationType="slide"
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.modalContainer(Topheight)}>
        <SearchView CloseSearchView={onClose} onSelectItem={onSelectItem} />
      </View>
    </Modal>
  );
}
export default HomeSearch;
