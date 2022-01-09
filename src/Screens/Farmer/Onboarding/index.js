import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import HomeTabs from '../Home';
import Login from './Login';
import SelectProfile from './SelectProfile';
import VerifyOTP from './VerifyOtp';
import {verticalScale} from '../../../Constants/Size';

const Stack = createStackNavigator();

const FarmerStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          height: verticalScale(69.5),
          borderBottomWidth: 1,
          elevation: 0,
        },
      }}>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen name="VerifyOTP" component={VerifyOTP} />
      <Stack.Screen name="SelectProfile" component={SelectProfile} />
      <Stack.Screen
        name="Home"
        component={HomeTabs}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default FarmerStack;
