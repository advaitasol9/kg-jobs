import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SplashScreen from 'react-native-splash-screen';
import {hasNotch} from 'react-native-device-info';

import {navigationRef} from './NavigationService';
import {
  Applied,
  COLORS,
  FONTS_OVERPASS_TEXT,
  Home,
  MyJob,
  Profile,
  ROUTE_NAME,
  styleBase,
} from '../Constants';

//Screens
import Authentication from '../Screens/Authentication';
import Introduction from '../Screens/Introduction';
import Onboarding from '../Screens/Onboarding';
import HomeTab from '../Screens/Home';
import AppliedTab from '../Screens/Applied';
import MyJobTab from '../Screens/MyJob';
import ProfileTab from '../Screens/Profile';
import {Image, Text} from 'react-native';
import JobDetails from '../Screens/JobDetail';
import SearchResult from '../Screens/SearchResult';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);

  const MyTabs = () => {
    const IconStyle = focused => {
      return {
        tintColor: focused ? COLORS.primaryDefault : COLORS.tabInactiveColor,
        marginTop: 6,
      };
    };

    const tabLabelStyle = focused => {
      return {
        color: focused ? COLORS.primaryDefault : COLORS.tabInactiveColor,
        ...styleBase.text12,
        fontFamily: FONTS_OVERPASS_TEXT.BOLD,
        marginTop: 6,
      };
    };

    return (
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            height: hasNotch() ? 100 : 72,
            backgroundColor: COLORS.GraishGreen,
          },
          headerShown: false,
        }}>
        <Tab.Screen
          name={ROUTE_NAME.HOME_TAB}
          component={HomeTab}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({focused}) => (
              <>
                <Image
                  source={Home}
                  resizeMode="contain"
                  style={IconStyle(focused)}
                />
                <Text style={tabLabelStyle(focused)}>Home</Text>
              </>
            ),
          }}
        />
        <Tab.Screen
          name={ROUTE_NAME.APPILIED_TAB}
          component={AppliedTab}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({focused}) => (
              <>
                <Image
                  source={Applied}
                  resizeMode="contain"
                  style={IconStyle(focused)}
                />
                <Text style={tabLabelStyle(focused)}>Applied</Text>
              </>
            ),
          }}
        />
        <Tab.Screen
          name={ROUTE_NAME.MY_JOB_TAB}
          component={MyJobTab}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({focused}) => (
              <>
                <Image
                  source={MyJob}
                  resizeMode="contain"
                  style={IconStyle(focused)}
                />
                <Text style={tabLabelStyle(focused)}>My Jobs</Text>
              </>
            ),
          }}
        />
        <Tab.Screen
          name={ROUTE_NAME.PROFILE_TAB}
          component={ProfileTab}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({focused}) => (
              <>
                <Image
                  source={Profile}
                  resizeMode="contain"
                  style={IconStyle(focused)}
                />
                <Text style={tabLabelStyle(focused)}>Profile</Text>
              </>
            ),
          }}
        />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name={ROUTE_NAME.AUTHENTICATION}
          component={Authentication}
        />
        <Stack.Screen name={ROUTE_NAME.INTRODUCTION} component={Introduction} />
        <Stack.Screen name={ROUTE_NAME.ONBOARDING} component={Onboarding} />
        <Stack.Screen name={ROUTE_NAME.MY_TABS} component={MyTabs} />
        <Stack.Screen name={ROUTE_NAME.JOB_DETAILS} component={JobDetails} />
        <Stack.Screen
          name={ROUTE_NAME.SEARCH_RESULT}
          component={SearchResult}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
