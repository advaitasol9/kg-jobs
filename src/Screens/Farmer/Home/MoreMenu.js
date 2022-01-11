import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {scale, verticalScale} from '../../../Constants/Size';
import {tStyle} from '../../../Constants/TextStyle';
import {FONTS_OVERPASS_TEXT} from '../../../Constants';

const moreOptions = [
  {
    title: 'About Us',
    onPress: () => {},
  },
  {
    title: 'Terms & Conditions',
    onPress: () => {},
  },
  {
    title: 'Privacy Policy',
    onPress: () => {},
  },
];

const MoreMenu = ({hideModal}) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={{marginTop: verticalScale(30)}}
        onPress={() => {
          hideModal();
        }}>
        <Image
          source={require('../../../Assets/close.png')}
          height={verticalScale(27.33)}
          width={scale(25.44)}
          style={{height: verticalScale(27.33), width: scale(25.44)}}
          resizeMode="cover"
        />
      </TouchableOpacity>
      <Text style={styles.heading}>Hello Vinay</Text>
      <Text style={styles.subHeading}>Here is your more options</Text>
      <View style={styles.menuCont}>
        {moreOptions.map(item => (
          <Pressable onPress={item.onPress}>
            <Text style={styles.menuItem}>{item.title}</Text>
          </Pressable>
        ))}
      </View>
      <View style={styles.bottomCont}>
        <Text style={styles.support}>Support</Text>
        <Text style={styles.needAnyHelp}>Need any help</Text>
        <View style={styles.row}>
          <View>
            <Text style={styles.contactType}>Phone</Text>
            <Text style={styles.contactInfo}>1800-123-456</Text>
          </View>
          <View>
            <Text style={styles.contactType}>Email</Text>
            <Text style={styles.contactInfo}>info@kisangates.com</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: scale(25),
  },
  heading: {
    ...tStyle(FONTS_OVERPASS_TEXT.EXTRA_BOLD, '400', 30, 40, '#043B53'),
    marginTop: verticalScale(45.7),
  },
  subHeading: {
    ...tStyle(FONTS_OVERPASS_TEXT.REGULAR, '400', 18, 24, '#16516B'),
    marginTop: verticalScale(5),
  },
  menuCont: {
    height: verticalScale(404.5),
    marginTop: verticalScale(48),
  },
  menuItem: {
    ...tStyle(FONTS_OVERPASS_TEXT.REGULAR, '400', 20, 27, '#043B53'),
    marginBottom: verticalScale(24),
  },
  bottomCont: {
    height: verticalScale(243.5),
    width: '100%',
    borderTopWidth: 1,
    borderColor: '#E7EDF0',
  },
  support: {
    ...tStyle(FONTS_OVERPASS_TEXT.EXTRA_BOLD, '400', 24, 32, '#043B53'),
    marginTop: verticalScale(28.5),
  },
  needAnyHelp: {
    ...tStyle(FONTS_OVERPASS_TEXT.REGULAR, '400', 16, 21, '#16516B'),
    marginTop: verticalScale(4),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: verticalScale(30),
  },
  contactType: {
    ...tStyle(FONTS_OVERPASS_TEXT.REGULAR, '400', 14, 19, '#547E92'),
  },
  contactInfo: {
    ...tStyle(FONTS_OVERPASS_TEXT.SEMI_BOLD, '400', 18, 24, '#547E92'),
    marginTop: verticalScale(5),
  },
});

export default MoreMenu;
