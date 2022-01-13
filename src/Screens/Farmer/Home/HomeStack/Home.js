import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import NormalButton from '../../../../Components/Button/NormalButton';
import {FONTS_OVERPASS_TEXT} from '../../../../Constants';
import {scale, verticalScale} from '../../../../Constants/Size';
import {tStyle} from '../../../../Constants/TextStyle';
import {Shadow} from 'react-native-shadow-2';
import {MoreMenuContext} from '../index';

const Home = ({navigation}) => {
  const setModalVisible = useContext(MoreMenuContext);

  useEffect(() => {
    navigation.setOptions({
      header: () => (
        <Shadow
          sides={'bottom'}
          distance={verticalScale(68)}
          startColor={'#ffffff'}>
          <View
            style={{
              height: verticalScale(80.5),
              width: '100%',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: scale(25),
              flexDirection: 'row',
              backgroundColor: '#ffffff',
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
        </Shadow>
      ),
    });
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}></MapView>
      <View style={{position: 'absolute', top: verticalScale(23), zIndex: 1}}>
        <Text style={styles.text1}>Hello Vinay</Text>
        <Text style={styles.text2}>Recommended actions for you</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('SelectProvider');
          }}>
          <Image
            source={require('../../../../Assets/homett.png')}
            height={verticalScale(110)}
            width={scale(364)}
            resizeMode="cover"
            style={{
              height: verticalScale(110),
              width: scale(364),
              marginTop: verticalScale(20),
              borderRadius: 15,
            }}
          />
        </TouchableOpacity>
      </View>
      <NormalButton
        buttonLabel={'Make a Request'}
        labelStyle={{color: '#ffffff'}}
        buttonStyle={{
          backgroundColor: '#043B53',
          height: verticalScale(62),
          width: scale(202),
          position: 'absolute',
          bottom: verticalScale(20),
        }}
        onPress={() => {
          navigation.navigate('CreateRequest1');
        }}
      />
    </View>
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

export default Home;
