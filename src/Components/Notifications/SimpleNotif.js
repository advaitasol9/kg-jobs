import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {FONTS_OVERPASS_TEXT} from '../../Constants';
import {moderateScale, scale, verticalScale} from '../../Constants/Size';
import {tStyle} from '../../Constants/TextStyle';
import NormalButton from '../Button/NormalButton';

const SimpleNotif = ({
  title = 'Service Provider Scheduled a field visit',
  content = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s',
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={[styles.content, {marginTop: verticalScale(14)}]}>
        {content}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: verticalScale(162),
    width: scale(358),
    borderRadius: moderateScale(25),
    backgroundColor: '#E7EDF0',
    paddingTop: verticalScale(19),
    paddingBottom: verticalScale(29),
    paddingLeft: scale(20),
    paddingRight: scale(26),
    marginTop: verticalScale(20),
  },
  row: {flexDirection: 'row', alignItems: 'center'},
  title: {...tStyle(FONTS_OVERPASS_TEXT.SEMI_BOLD, '400', 18, 24, '#043B53')},
  time: {...tStyle(FONTS_OVERPASS_TEXT.BOLD, '700', 16, 21, '#043B53')},
  content: {...tStyle(FONTS_OVERPASS_TEXT.REGULAR, '400', 14, 19, '#547E92')},
  buttonLabel: {...tStyle(FONTS_OVERPASS_TEXT.BOLD, '400', 14, 19, '#547E92')},
});

export default SimpleNotif;
