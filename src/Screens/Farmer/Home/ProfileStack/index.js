import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {TouchableOpacity, Image, View, StyleSheet} from 'react-native';

import ProfileScreen from './ProfileScreen';
import {verticalScale, scale} from '../../../../Constants/Size';
import {tStyle} from '../../../../Constants/TextStyle';
import {FONTS_OVERPASS_TEXT} from '../../../../Constants';
import {Shadow} from 'react-native-shadow-2';
import NormalButton from '../../../../Components/Button/NormalButton';

const Stack = createStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator
      screenOptions={({navigation}) => ({
        header: () => (
          <View
            style={{
              height: verticalScale(80.5),
              width: '100%',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: scale(25),
              flexDirection: 'row',
              backgroundColor: '#ffffff',
              borderBottomWidth: 1,
              borderColor: '#E7EDF0',
            }}>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(true);
              }}>
              <Image
                source={require('../../../../Assets/homeHeaderLeft.png')}
                height={verticalScale(36)}
                width={scale(30.5)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: '#E7EDF0',
                height: scale(40),
                width: scale(40),
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 5,
              }}
              onPress={() => {
                navigation.navigate('Notifications');
              }}>
              <Image
                source={require('../../../../Assets/notifBell.png')}
                height={verticalScale(26.6)}
                width={scale(23.31)}
                resizeMode="contain"
                style={{height: verticalScale(26.6), width: scale(23.31)}}
              />
            </TouchableOpacity>
          </View>
        ),
      })}>
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  text1: {
    ...tStyle(FONTS_OVERPASS_TEXT.EXTRA_BOLD, '400', 30, 40, '#043B53'),
  },
  text2: {
    ...tStyle(FONTS_OVERPASS_TEXT.BOLD, '400', 18, 24, '#16516B'),
    marginTop: verticalScale(5),
  },
});

export default ProfileStack;
