import {scale, verticalScale, moderateScale} from './Size';

export const tStyle = (
  font = 'Manrope-Regular',
  weight = '400',
  size = 12,
  lineHeight = 16,
  color = '#000000',
) => ({
  fontFamily: font,
  fontWeight: weight,
  fontSize: moderateScale(size),
  lineHeight: verticalScale(lineHeight),
  color,
});
