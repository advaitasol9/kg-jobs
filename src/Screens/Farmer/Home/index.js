import React from 'react';
import {View, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabBar from '../../../Components/Other/BottomTabs';
import Requests from './Requests';
import Profile from './Profile';
import {dynamicSize} from '../../../Constants';
import HomeStack from './HomeStack';

const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator
      tabBar={props => <TabBar {...props} />}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let imgPath;

          if (route.name === 'HomeStack') {
            imgPath = !focused
              ? require('../../../Assets/homeIc.png')
              : require('../../../Assets/homeIcSelected.png');
          } else if (route.name === 'Requests') {
            imgPath = !focused
              ? require('../../../Assets/requestsIc.png')
              : require('../../../Assets/requestsIcSelected.png');
          } else if (route.name === 'Profile') {
            imgPath = !focused
              ? require('../../../Assets/profileIc.png')
              : require('../../../Assets/profileIcSelected.png');
          }
          return (
            <Image
              source={imgPath}
              resizeMode="contain"
              height={dynamicSize(24)}
              width={dynamicSize(24)}
              style={{height: dynamicSize(24), width: dynamicSize(24)}}
            />
          );
        },
        //   headerTransparent: true,
        headerTitleAlign: 'center',
      })}>
      <Tab.Screen
        name={'HomeStack'}
        component={HomeStack}
        options={{headerShown: false}}
      />
      <Tab.Screen name={'Requests'} component={Requests} />
      <Tab.Screen name={'Profile'} component={Profile} />
    </Tab.Navigator>
  );
};

export default HomeTabs;
