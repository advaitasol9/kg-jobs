import {StyleSheet} from 'react-native';
import {COLORS, FONTS_OVERPASS_TEXT, styleBase} from '../../Constants';

export const styles = StyleSheet.create({
  headerView: {
    ...styleBase.inRow,
    ...styleBase.spaceBetween,
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 36,
  },
  headingText: {
    ...styleBase.text18,
    fontFamily: FONTS_OVERPASS_TEXT.EXTRA_BOLD,
    color: COLORS.white,
  },
  extraView: {
    width: 50,
  },
  bottomView: {
    ...styleBase.flex1,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 20,
    paddingTop: 36,
  },
  searchView: {
    ...styleBase.inRow,
    ...styleBase.spaceBetween,
  },
  customViewStyle: {
    width: '80%',
  },
  filterView: {
    width: 52,
    height: 52,
    backgroundColor: COLORS.GraishGreen,
    ...styleBase.inCenter,
    borderRadius: 8,
  },
  filterIcon: {
    width: 18,
    height: 18,
    tintColor: COLORS.tabInactiveColor,
  },
  newFilerIndicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: COLORS.gray12,
    position: 'absolute',
    top: 12,
    right: 12,
  },
  searchKeyword: {
    ...styleBase.text24,
    color: COLORS.black,
    fontFamily: FONTS_OVERPASS_TEXT.EXTRA_BOLD,
    marginVertical: 18,
  },
});
