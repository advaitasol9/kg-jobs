import {createStackNavigator} from '@react-navigation/stack';
import React, {useRef} from 'react';
import {TouchableOpacity, Image} from 'react-native';
import Notifications from '../Notifications';
import Home from './Home';
import CreateRequest1 from './CreateRequest1';
import {verticalScale, scale} from '../../../../Constants/Size';
import {tStyle} from '../../../../Constants/TextStyle';
import {FONTS_OVERPASS_TEXT} from '../../../../Constants';
import CreateRequest2 from './CreateRequest2';
import Success from './Success';
import SelectProvider from './SelectProvider';

const Stack = createStackNavigator();

const HomeStack = () => {
  const stackRef = useRef();
  return (
    <Stack.Navigator
      ref={stackRef}
      screenOptions={({navigation}) => ({
        headerStyle: {
          elevation: 0,
          borderBottomWidth: 1,
          borderColor: '#E7EDF0',
        },
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            style={{
              height: scale(40),
              width: scale(40),
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 5,
              marginLeft: scale(25),
              backgroundColor: '#E7EDF0',
            }}>
            <Image
              source={require('../../../../Assets/chevronLeft.png')}
              height={verticalScale(20.21)}
              width={scale(10.86)}
            />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <TouchableOpacity
            style={{
              backgroundColor: '#E7EDF0',
              height: scale(40),
              width: scale(40),
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 5,
              marginRight: scale(20),
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
        ),
        headerTitleAlign: 'center',
        headerTitleStyle: tStyle(
          FONTS_OVERPASS_TEXT.SEMI_BOLD,
          '400',
          20,
          27,
          '#547E92',
        ),
      })}>
      <Stack.Screen name={'Home'} component={Home} />
      <Stack.Screen name={'Notifications'} component={Notifications} />
      <Stack.Screen name={'SelectProvider'} component={SelectProvider} />
      <Stack.Screen name={'CreateRequest1'} component={CreateRequest1} />
      <Stack.Screen name={'CreateRequest2'} component={CreateRequest2} />
      <Stack.Screen
        name={'Success'}
        component={Success}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
