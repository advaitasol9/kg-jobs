import {Platform, StyleSheet} from 'react-native';
import {COLORS} from '../../../Constants';

export const styles = StyleSheet.create({
  modalContainer: Topheight => ({
    backgroundColor: COLORS.ModalBgColor,
    paddingHorizontal: 10,
    paddingTop: Platform.OS === 'ios' ? Topheight + 24 : 48,
    width: '100%',
    height: '100%',
  }),
});
