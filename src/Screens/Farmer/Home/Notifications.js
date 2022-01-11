import React, {useEffect} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import NotifWithButton from '../../../Components/Notifications/NotifWithButton';
import SimpleNotif from '../../../Components/Notifications/SimpleNotif';
import {FONTS_OVERPASS_TEXT} from '../../../Constants';
import {scale, verticalScale} from '../../../Constants/Size';
import {tStyle} from '../../../Constants/TextStyle';

const Notifications = ({navigation}) => {
  useEffect(() => {
    navigation.setOptions({
      headerTitle: '',
    });
  }, []);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{
        alignItems: 'center',
      }}>
      <Text style={styles.heading}>Notifications</Text>
      <Text style={styles.subHeading}>The latest Notifications</Text>
      <NotifWithButton />
      <SimpleNotif />
    </ScrollView>
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
    marginTop: verticalScale(22.5),
    alignSelf: 'flex-start',
  },
  subHeading: {
    ...tStyle(FONTS_OVERPASS_TEXT.REGULAR, '400', 18, 24, '#16516B'),
    marginTop: verticalScale(5),
    alignSelf: 'flex-start',
  },
});

export default Notifications;
