import {StyleSheet} from 'react-native';
import {
  COLORS,
  DeviceWidth,
  FONTS_OVERPASS_TEXT,
  styleBase,
} from '../../Constants';

export const styles = StyleSheet.create({
  MainContainer: {
    ...styleBase.flex1,
  },
  NameNLogo: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 24,
  },
  IntroLogo: {
    width: DeviceWidth / 2,
    height: DeviceWidth / 2,
    ...styleBase.inCenter,
  },
  IntroLogoImage: {
    width: DeviceWidth / 4,
    height: DeviceWidth / 4,
    position: 'absolute',
    zIndex: 3,
    resizeMode: 'contain',
  },
  innerCircle: {
    width: DeviceWidth / 3,
    height: DeviceWidth / 3,
    borderRadius: DeviceWidth / 3 / 2,
    backgroundColor: COLORS.white,
    position: 'absolute',
    zIndex: 2,
  },
  outterCircle: {
    width: DeviceWidth / 2.4,
    height: DeviceWidth / 2.4,
    borderRadius: DeviceWidth / 2.4 / 2,
    backgroundColor: COLORS.white,
    position: 'absolute',
    zIndex: 1,
  },
  TextNBtton: {
    ...styleBase.flex1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 36,
  },
  heyText: {
    textAlign: 'center',
    ...styleBase.text24,
    fontFamily: FONTS_OVERPASS_TEXT.EXTRA_BOLD,
    color: COLORS.white,
    marginTop: 36,
  },
  assigtant: {
    textAlign: 'center',
    ...styleBase.text16,
    fontFamily: FONTS_OVERPASS_TEXT.REGULAR,
    color: COLORS.white,
  },
  helpText: {
    textAlign: 'center',
    ...styleBase.text24,
    fontFamily: FONTS_OVERPASS_TEXT.EXTRA_BOLD,
    color: COLORS.white,
    marginBottom: 60,
  },
  buttonStyle: {
    backgroundColor: COLORS.white,
    width: DeviceWidth - 48,
    alignSelf: 'center',
  },
  labelStyle: {
    color: COLORS.primaryDefault,
  },
});
