import {StyleSheet} from 'react-native';
import {
  COLORS,
  DeviceHeight,
  DeviceWidth,
  FONTS_OVERPASS_TEXT,
  getFontSize,
  styleBase,
} from '../../Constants';

export const styles = StyleSheet.create({
  UpperView: {
    alignItems: 'center',
    paddingBottom: 36,
  },
  progressView: {
    width: 120,
    height: 120,
    marginTop: 28,
  },
  AnimatedView: {
    width: DeviceWidth,
    paddingHorizontal: 10,
    paddingTop: 24,
    position: 'absolute',
  },
  BottomView: {
    minHeight: 435,
    justifyContent: 'flex-end',
  },
  heyText: {
    ...styleBase.text24,
    lineHeight: 26,
    color: COLORS.white,
    fontFamily: FONTS_OVERPASS_TEXT.LIGHT,
    marginBottom: 16,
    marginTop: 29,
  },
  BuildProfileText: {
    ...styleBase.text24,
    lineHeight: 31,
    color: COLORS.white,
    fontFamily: FONTS_OVERPASS_TEXT.EXTRA_BOLD,
  },
  bottomContentView: {
    backgroundColor: COLORS.white,
    paddingVertical: 40,
    paddingHorizontal: 20,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  nameIconView: {
    width: 50,
    height: 50,
    ...styleBase.inCenter,
  },
  NameFirstLetter: {
    fontSize: getFontSize(22),
    fontFamily: FONTS_OVERPASS_TEXT.EXTRA_BOLD,
    color: COLORS.white,
    position: 'absolute',
    zIndex: 1,
  },
  whatICall: {
    ...styleBase.text20,
    fontFamily: FONTS_OVERPASS_TEXT.EXTRA_BOLD,
    lineHeight: 26,
    marginLeft: 14,
  },
  titleView: {
    ...styleBase.inRow,
    marginTop: 28,
  },
  nameTitleView: selected => ({
    width: 60,
    height: 50,
    ...styleBase.inCenter,
    backgroundColor: selected ? COLORS.primaryDefault : COLORS.GraishGreen,
    borderRadius: 10,
    marginRight: 10,
  }),
  nameTitle: selected => ({
    ...styleBase.text24,
    lineHeight: 30,
    color: selected ? COLORS.white : COLORS.black,
    fontFamily: FONTS_OVERPASS_TEXT.REGULAR,
  }),
  nameText: {
    ...styleBase.text18,
    lineHeight: 22,
    color: COLORS.black,
    fontFamily: FONTS_OVERPASS_TEXT.SEMI_BOLD,
    marginBottom: 10,
    marginTop: 24,
  },
  buttonStyle: {
    marginTop: 22,
  },
  frameView: {
    ...styleBase.inRow,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderWidth: 1,
    borderColor: COLORS.stockColor,
    borderStyle: 'dashed',
    borderRadius: 8,
    marginTop: 36,
  },
  tapToSelect: {
    ...styleBase.text20,
    fontFamily: FONTS_OVERPASS_TEXT.SEMI_BOLD,
    color: COLORS.gray12,
    lineHeight: 24,
    marginLeft: 16,
  },
  countView: {
    position: 'absolute',
    ...styleBase.inCenter,
    width: '100%',
    height: '100%',
  },
  countText: {
    ...styleBase.text24,
    fontFamily: FONTS_OVERPASS_TEXT.BOLD,
    color: COLORS.white,
  },
  stageText: {
    ...styleBase.text16,
    fontFamily: FONTS_OVERPASS_TEXT.REGULAR,
    color: COLORS.white,
  },
  ScrollViewInterest: {
    maxHeight: 124,
    marginTop: 16,
  },
  containerView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  singleInterestView: {
    marginRight: 10,
    marginTop: 14,
  },
  interestBtn: interestBtn => ({
    backgroundColor: interestBtn ? COLORS.primaryDefault : COLORS.GraishGreen,
    paddingHorizontal: 18,
  }),
  interestLabelText: interestBtn => ({
    color: interestBtn ? COLORS.white : COLORS.black,
  }),
});
