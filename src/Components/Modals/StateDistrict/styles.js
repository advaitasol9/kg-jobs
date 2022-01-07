import {StyleSheet} from 'react-native';
import {
  COLORS,
  DeviceHeight,
  DeviceWidth,
  FONTS_OVERPASS_TEXT,
  styleBase,
} from '../../../Constants';

export const styles = StyleSheet.create({
  modalContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    backgroundColor: COLORS.PLaceholderColor,
    paddingHorizontal: 10,
  },
  contentView: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 30,
    paddingVertical: 32,
    height: DeviceHeight - DeviceHeight / 4,
    borderRadius: 12,
    width: '100%',
    position: 'absolute',
    alignSelf: 'center',
  },
  selectState: {
    ...styleBase.text20,
    lineHeight: 26,
    fontFamily: FONTS_OVERPASS_TEXT.SEMI_BOLD,
    color: COLORS.black,
  },
  customViewStyle: {
    marginVertical: 20,
  },
  StateNameView: {
    ...styleBase.inRow,
    marginBottom: 18,
    paddingHorizontal: 12,
  },
  tickLayout: isSelected => ({
    backgroundColor: isSelected ? COLORS.primaryDefault : COLORS.GraishGreen,
    width: 30,
    height: 30,
    borderRadius: 15,
    ...styleBase.inCenter,
  }),
  StateName: {
    ...styleBase.text14,
    lineHeight: 24,
    fontFamily: FONTS_OVERPASS_TEXT.SEMI_BOLD,
    color: COLORS.gray12,
    marginLeft: 16,
  },
  buttonStyle: {
    marginTop: 20,
  },
});
