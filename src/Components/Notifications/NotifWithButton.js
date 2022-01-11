import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {FONTS_OVERPASS_TEXT} from '../../Constants';
import {moderateScale, scale, verticalScale} from '../../Constants/Size';
import {tStyle} from '../../Constants/TextStyle';
import NormalButton from '../Button/NormalButton';

const NotifWithButton = ({
  title = 'Service Provider Scheduled a field visit',
  id = '#FA4321',
  time = '12 Dec | 12:30 PM',
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={[styles.content, {marginTop: verticalScale(14)}]}>{id}</Text>
      <Text style={[styles.time, {marginTop: verticalScale(5)}]}>{time}</Text>
      <View style={styles.row}>
        <NormalButton
          labelStyle={[styles.buttonLabel, {color: '#043B53'}]}
          buttonLabel={'Reschedule'}
          buttonStyle={{
            height: verticalScale(40),
            width: scale(115),
            backgroundColor: '#F5BD00',
            borderRadius: moderateScale(25),
            marginRight: scale(10),
          }}
        />
        <NormalButton
          labelStyle={[styles.buttonLabel, {color: '#ffffff'}]}
          buttonLabel={'Accept'}
          buttonStyle={{
            height: verticalScale(40),
            width: scale(85),
            backgroundColor: '#099804',
            borderRadius: moderateScale(25),
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: verticalScale(177),
    width: scale(358),
    borderRadius: moderateScale(25),
    backgroundColor: '#E7EDF0',
    paddingTop: verticalScale(19),
    paddingBottom: verticalScale(29),
    paddingLeft: scale(20),
    paddingRight: scale(26),
    marginTop: verticalScale(20),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: verticalScale(17),
  },
  title: {...tStyle(FONTS_OVERPASS_TEXT.SEMI_BOLD, '400', 18, 24, '#043B53')},
  time: {...tStyle(FONTS_OVERPASS_TEXT.BOLD, '700', 16, 21, '#043B53')},
  content: {...tStyle(FONTS_OVERPASS_TEXT.REGULAR, '400', 14, 19, '#547E92')},
  buttonLabel: {...tStyle(FONTS_OVERPASS_TEXT.BOLD, '400', 14, 19, '#547E92')},
});

export default NotifWithButton;
