import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {scaleHeight, dynamicSize} from '../../Constants';
import {scale, verticalScale} from '../../Constants/Size';

const TabBar = props => {
  var focusedRoute;

  return (
    //   <Shadow
    //     viewStyle={styles.shadowCont}
    //     containerViewStyle={{
    //       width: dynamicSize(320),
    //       alignSelf: 'center',
    //       position: 'absolute',
    //       bottom: scaleHeight(20),
    //     }}
    //     startColor="rgba(0,0,0,0.1)"
    //     distance={dynamicSize(20)}>
    <View style={styles.container}>
      {Object.keys(props.descriptors).map(desc => {
        const {options, navigation, route} = props.descriptors[desc];
        const focused = navigation.isFocused();
        if (focused) {
          focusedRoute = route.name;
        }

        return (
          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => {
              navigation.navigate(route.name);
            }}>
            {options.tabBarIcon({
              focused,
            })}
            <Text
              style={[
                styles.routeName,
                {color: focused ? '#099804' : '#547E92'},
              ]}>
              {route.name}
            </Text>
            {focused && (
              <Image
                source={require('../../Assets/tabPointer.png')}
                height={verticalScale(5)}
                width={scale(50)}
                style={{position: 'absolute', top: verticalScale(-15)}}
              />
            )}
          </TouchableOpacity>
        );
      })}
    </View>
    //   </Shadow>
  );
};

const styles = StyleSheet.create({
  shadowCont: {
    height: verticalScale(89),
    width: scale(320),
    backgroundColor: '#ffffff',
    // marginBottom: verticalScale(20),
    justifyContent: 'center',
  },
  container: {
    height: verticalScale(89),
    width: '100%',
    paddingHorizontal: scale(50),
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1.5,
    borderColor: '#E7EDF0',
  },

  routeName: {
    // ...tStyle('Manrope-Regular', '400', 'normal', 10, 13.66, '#000000'),
  },
});

export default TabBar;
