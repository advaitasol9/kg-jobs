import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';

import FarmerStack from '../Screens/Farmer/Onboarding';
import AppNavigator from './Routes';
import {navigationRef} from './NavigationService';

const Stack = createStackNavigator();

const Root = () => {
  useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={'Farmer'} component={FarmerStack} />
        <Stack.Screen name={'ServiceProvider'} component={AppNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Root;
