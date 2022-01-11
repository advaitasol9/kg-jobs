import React from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';
import {FONTS_OVERPASS_TEXT} from '../../../../Constants';
import {scale, verticalScale} from '../../../../Constants/Size';
import {tStyle} from '../../../../Constants/TextStyle';
import {SafeAreaView} from 'react-native-safe-area-context';

const Success = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imgCont}>
        <Image
          source={require('../../../../Assets/check.png')}
          height={verticalScale(25.49)}
          width={scale(36.02)}
        />
      </View>
      <Text style={styles.hurray}>Hurray!</Text>
      <Text
        style={[
          styles.content,
          {
            marginTop: verticalScale(16),
            width: scale(226),
            textAlign: 'center',
          },
        ]}>
        Your request has been placed successfully
      </Text>
      <Text
        style={[
          styles.content,
          {
            marginTop: verticalScale(31),
            width: scale(284),
            textAlign: 'center',
          },
        ]}>
        You can see your request details under History Section
      </Text>
      <Text style={styles.history}>History</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  imgCont: {
    height: scale(90),
    width: scale(90),
    borderRadius: scale(45),
    backgroundColor: '#06AC00',
    justifyContent: 'center',
    alignItems: 'center',
  },
  hurray: {
    ...tStyle(FONTS_OVERPASS_TEXT.SEMI_BOLD, '400', 30, 40, '#043B53'),
    marginTop: verticalScale(31),
  },
  content: {...tStyle(FONTS_OVERPASS_TEXT.SEMI_BOLD, '400', 18, 24, '#16516B')},
  history: {
    ...tStyle(FONTS_OVERPASS_TEXT.SEMI_BOLD, '400', 24, 32, '#099804'),
    textDecorationLine: 'underline',
    marginTop: verticalScale(18),
  },
});

export default Success;
