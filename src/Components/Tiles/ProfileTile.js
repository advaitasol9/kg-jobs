import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {dynamicSize, scaleHeight} from '../../Constants';
import {scale} from '../../Constants/Size';

const ProfileTile = ({content, imgSrc, onPress, style}) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Image
        source={imgSrc}
        height={scaleHeight(90.15)}
        width={dynamicSize(65.84)}
        style={{
          height: scaleHeight(90.15),
          width: dynamicSize(65.84),
          marginHorizontal: scale(30),
        }}
        resizeMode="contain"
      />
      <View>
        {content.map(t => (
          <Text style={t.style}>{t.text}</Text>
        ))}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: scaleHeight(150),
    width: '100%',
    borderWidth: 1,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#E7EDF0',
  },
});

export default ProfileTile;
