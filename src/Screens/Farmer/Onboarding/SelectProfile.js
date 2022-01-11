import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ProfileTile from '../../../Components/Tiles/ProfileTile';
import {navigation} from '../../../Navigation/NavigationService';
import HeaderTitle from '../../../Components/Header/HeaderTitle';
import {scale, verticalScale} from '../../../Constants/Size';
import {tStyle} from '../../../Constants/TextStyle';
import {FONTS_OVERPASS_TEXT} from '../../../Constants';

const SelectProfile = ({navigation}) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => null,
      headerTitle: () => <HeaderTitle title={'Select Profile'} />,
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Hello There,</Text>
      <Text style={styles.text2}>Set your Profile</Text>
      <ProfileTile
        content={[
          {
            text: 'I am a Farmer',
            style: {fontWeight: '700', fontSize: 20, color: '#043B53'},
          },
          {text: '& I love farming', style: {color: '#043B53'}},
        ]}
        onPress={() => {
          navigation.navigate('HomeTabs');
        }}
        imgSrc={require('../../../Assets/farmer.png')}
        style={{marginTop: verticalScale(30)}}
      />
      <ProfileTile
        content={[
          {
            text: 'I am a',
            style: {fontWeight: '700', fontSize: 20, color: '#043B53'},
          },
          {
            text: 'Service Provider',
            style: {fontWeight: '700', fontSize: 20, color: '#043B53'},
          },
          {text: '& I love helping', style: {color: '#043B53'}},
        ]}
        onPress={() => {
          navigation.navigate('ServiceProvider');
        }}
        imgSrc={require('../../../Assets/serviceProv.png')}
        style={{marginTop: verticalScale(20)}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: scale(25),
  },
  text1: {
    ...tStyle(FONTS_OVERPASS_TEXT.EXTRA_BOLD, '400', 30, 40, '#043B53'),
    marginTop: verticalScale(22.5),
  },
  text2: {
    ...tStyle(FONTS_OVERPASS_TEXT.REGULAR, '400', 18, 24, '#16516B'),
    marginTop: verticalScale(5),
  },
});

export default SelectProfile;
