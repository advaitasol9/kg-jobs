import React from 'react';
import {Text} from 'react-native';
import {FONTS_OVERPASS_TEXT} from '../../Constants';
import {tStyle} from '../../Constants/TextStyle';

const HeaderTitle = ({title, style}) => {
  return (
    <Text
      style={tStyle(FONTS_OVERPASS_TEXT.SEMI_BOLD, '400', 20, 27, '#043B53')}>
      {title}
    </Text>
  );
};

export default HeaderTitle;
