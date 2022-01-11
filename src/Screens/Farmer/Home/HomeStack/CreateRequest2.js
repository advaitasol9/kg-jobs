import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  Modal,
} from 'react-native';
import NormalButton from '../../../../Components/Button/NormalButton';
import {FONTS_OVERPASS_TEXT} from '../../../../Constants';
import {moderateScale, scale, verticalScale} from '../../../../Constants/Size';
import {tStyle} from '../../../../Constants/TextStyle';
import Success from './Success';

const locations = ['Location One', 'Location Two', 'Location Three'];

const CreateRequest2 = ({navigation}) => {
  const [location, setLocation] = useState();
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Create a Request',
    });
  }, []);

  const locationPoints = ({title}) => (
    <View style={{flexDirection: 'row', marginBottom: verticalScale(19)}}>
      <View style={styles.bulletPoint} />
      <Text style={styles.point}>{title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        <Text style={styles.heading}>Location</Text>
        <Text style={styles.subHeading}>Select Field Location</Text>
        <TextInput
          placeholder="Enter Location"
          value={location}
          setValue={setLocation}
          style={styles.input}
        />
        <View
          style={{
            flexDirection: 'row',
            marginTop: verticalScale(30.5),
            alignItems: 'center',
          }}>
          <Image
            source={require('../../../../Assets/location.png')}
            height={scale(30)}
            width={scale(30)}
            style={{height: scale(30), width: scale(30)}}
          />
          <Text style={[styles.location, {marginLeft: scale(11)}]}>
            Select Current Location
          </Text>
        </View>
        <Text style={[styles.heading2]}>Popular Locations</Text>

        <View style={styles.column}>
          {locations.map(item => locationPoints({title: item}))}
        </View>
      </ScrollView>
      <NormalButton
        buttonLabel={'Next'}
        onPress={() => {
          setModalVisible(true);
        }}
        buttonStyle={{
          backgroundColor: '#099804',
          marginTop: verticalScale(30),
          position: 'absolute',
          bottom: verticalScale(30),
        }}
      />
      <Modal
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}>
        <Success />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: scale(25),
    alignItems: 'center',
  },
  scrollContainer: {
    flex: 1,
    width: '100%',
  },
  heading: {
    ...tStyle(FONTS_OVERPASS_TEXT.EXTRA_BOLD, '400', 30, 40, '#043B53'),
    marginTop: verticalScale(36.5),
  },
  subHeading: {
    ...tStyle(FONTS_OVERPASS_TEXT.EXTRA_BOLD, '400', 18, 24, '#16516B'),
    marginTop: verticalScale(5),
  },
  inputPlaceholder: {
    ...tStyle(FONTS_OVERPASS_TEXT.BOLD, '400', 18, 24, '#547E92'),
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#E7EDF0',
  },
  heading2: {
    ...tStyle(FONTS_OVERPASS_TEXT.BOLD, '400', 20, 27, '#547E92'),
    marginTop: verticalScale(28.5),
  },
  location: {
    ...tStyle(FONTS_OVERPASS_TEXT.SEMI_BOLD, '400', 18, 24, '#043B53'),
  },
  row: {
    flexGrow: 1,
    marginTop: verticalScale(16),
  },
  card: {
    height: verticalScale(51),
    minWidth: scale(5),
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: scale(15),
    marginRight: scale(10),
    backgroundColor: '#E7EDF0',
    borderRadius: moderateScale(10),
  },
  cardText: {
    ...tStyle(FONTS_OVERPASS_TEXT.REGULAR, '400', 16, 21, '#043B53'),
  },
  column: {
    marginTop: verticalScale(20),
  },
  bulletPoint: {
    height: scale(11),
    width: scale(11),
    borderRadius: scale(5.5),
    backgroundColor: '#F5BD00',
    marginRight: scale(15),
  },

  point: {
    ...tStyle(FONTS_OVERPASS_TEXT.BOLD, '400', 18, 24, '#043B53'),
  },
});

export default CreateRequest2;
