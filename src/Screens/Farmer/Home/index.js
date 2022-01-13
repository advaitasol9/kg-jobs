import React, {createContext, useState} from 'react';
import {View, Image, Modal} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabBar from '../../../Components/Other/BottomTabs';
import Requests from './Requests';
import {dynamicSize} from '../../../Constants';
import HomeStack from './HomeStack';
import ProfileStack from './ProfileStack';
import MoreMenu from './MoreMenu';

const Tab = createBottomTabNavigator();

export const MoreMenuContext = createContext();

const HomeTabs = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={{flex: 1}}>
      <Modal visible={modalVisible}>
        <MoreMenu
          hideModal={() => {
            setModalVisible(false);
          }}
        />
      </Modal>
      <MoreMenuContext.Provider value={setModalVisible}>
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
            options={{
              headerShown: false,
              title: 'Home',
            }}
          />
          <Tab.Screen
            name={'Requests'}
            component={Requests}
            options={{title: 'Requests'}}
          />
          <Tab.Screen
            name={'Profile'}
            component={ProfileStack}
            options={{headerShown: false, title: 'Profile'}}
          />
        </Tab.Navigator>
      </MoreMenuContext.Provider>
    </View>
  );
};

export default HomeTabs;
