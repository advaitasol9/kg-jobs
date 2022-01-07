import {StyleSheet, Dimensions, Platform} from 'react-native';
import {getFontSize} from './index';
const {width, height} = Dimensions.get('window');
export const DeviceWidth = width;
export const DeviceHeight = height;

const X_WIDTH = 375;
const X_HEIGHT = 812;
const XSMAX_WIDTH = 414;
const XSMAX_HEIGHT = 896;

export const isIPhoneX = () =>
  Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS
    ? (width === X_WIDTH && height === X_HEIGHT) ||
      (width === XSMAX_WIDTH && height === XSMAX_HEIGHT)
    : false;

export const styleBase = StyleSheet.create({
  mainContainer: backgroundColor => ({
    flex: 1,
    backgroundColor,
  }),
  flex1: {
    flex: 1,
  },
  inRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  verticalCenter: {
    justifyContent: 'center',
  },
  alignCenter: {
    alignItems: 'center',
  },
  absolutePosition: {
    position: 'absolute',
  },
  alignSelf: {
    alignSelf: 'center',
  },
  text11: {
    fontSize: 11,
  },
  text12: {
    fontSize: getFontSize(12),
  },
  text13: {
    fontSize: getFontSize(13),
  },
  text14: {
    fontSize: getFontSize(14),
  },
  text16: {
    fontSize: getFontSize(16),
  },
  text15: {
    fontSize: getFontSize(15),
  },
  text18: {
    fontSize: getFontSize(18),
  },
  text20: {
    fontSize: getFontSize(20),
  },
  text24: {
    fontSize: getFontSize(24),
  },
  centerText: {
    textAlign: 'center',
  },
});
