import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ScrollView,
} from 'react-native';

import {tStyle} from '../../../../Constants/TextStyle';
import {FONTS_OVERPASS_TEXT} from '../../../../Constants';
import {scale, verticalScale} from '../../../../Constants/Size';
import MobileModal from './MobileModal';

const ProfileScreen = () => {
  const [showEdits, setShowEdits] = useState(false);
  const [name, setName] = useState('Vinaya Panicker');
  const [gender, setGender] = useState('Male');
  const [email, setEmail] = useState('vinayapanicker@gmail.com');
  const [showModal, setShowModal] = useState(false);
  const [mobNum, setMobNum] = useState('8892401405');

  const genderList = ['Male', 'Female', 'Other'];
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.text1}>Profile</Text>
        <TouchableOpacity onPress={() => setShowEdits(!showEdits)}>
          <Text style={styles.text2}>{showEdits ? 'Save' : 'Edit'}</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.text3}>Your Personal Details</Text>
      <View style={styles.nameAvatar}>
        <Text style={styles.text4}>{name[0]}</Text>
      </View>
      <View style={{marginTop: verticalScale(30)}}>
        <Text style={styles.text5}>NAME</Text>
        <TextInput
          value={name}
          onChangeText={val => setName(val)}
          style={showEdits ? styles.text6a : styles.text6}
          placeholder=""
          editable={showEdits}
        />
      </View>
      <View style={{marginTop: verticalScale(25)}}>
        <Text style={styles.text5}>GENDER</Text>
        <View style={{flexDirection: 'row', marginTop: verticalScale(8)}}>
          {!showEdits ? (
            <Text style={styles.text9}>{gender}</Text>
          ) : (
            genderList.map(gen => (
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => {
                  if (showEdits) setGender(gen);
                }}
                style={{marginLeft: gen === 'Male' ? 0 : scale(38)}}>
                <Text style={gen === gender ? styles.text9 : styles.text9a}>
                  {gen}
                </Text>
              </TouchableOpacity>
            ))
          )}
        </View>
      </View>
      <View style={{marginTop: verticalScale(25)}}>
        <Text style={styles.text5}>EMAIL</Text>
        <TextInput
          value={email}
          onChangeText={val => setEmail(val)}
          style={showEdits ? styles.text6a : styles.text6}
          placeholder=""
          editable={showEdits}
        />
      </View>
      {!showEdits ? (
        <View style={{marginTop: verticalScale(25)}}>
          <Text style={styles.text5}>MOBILE NUMBER</Text>
          <Text style={styles.text8}>{'+91 ' + mobNum}</Text>
        </View>
      ) : null}
      {!showEdits ? (
        <TouchableOpacity style={styles.btn} onPress={() => setShowModal(true)}>
          <Text style={styles.text7}>Change Mobile Number</Text>
        </TouchableOpacity>
      ) : null}
      <MobileModal
        showModal={showModal}
        mobileNum={mobNum}
        changeMobileNum={val => setMobNum(val)}
        hideModal={() => setShowModal(false)}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: verticalScale(22.5),
    paddingHorizontal: scale(25),
    backgroundColor: '#fff',
  },
  text1: {
    ...tStyle(FONTS_OVERPASS_TEXT.BOLD, '100', 30, 40, '#043B53'),
  },
  text2: {
    ...tStyle(FONTS_OVERPASS_TEXT.BOLD, '100', 24, 32, '#043B53'),
    textDecorationLine: 'underline',
  },
  text3: {
    ...tStyle(FONTS_OVERPASS_TEXT.REGULAR, '100', 18, 24, '#16516B'),
    marginTop: verticalScale(5),
  },
  nameAvatar: {
    height: scale(90),
    width: scale(90),
    borderRadius: scale(45),
    backgroundColor: '#06AC00',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: verticalScale(30),
  },
  text4: {
    ...tStyle(FONTS_OVERPASS_TEXT.SEMI_BOLD, '100', 40, 53, '#fff'),
    paddingTop: verticalScale(20),
  },
  text5: {
    ...tStyle(FONTS_OVERPASS_TEXT.REGULAR, '100', 14, 19, '#547E92'),
  },
  text6: {
    ...tStyle(FONTS_OVERPASS_TEXT.BOLD, '600', 20, 27, '#043B53'),
    marginTop: verticalScale(-8),
    marginLeft: scale(-3),
  },
  text6a: {
    ...tStyle(FONTS_OVERPASS_TEXT.BOLD, '600', 20, 27, '#043B53'),
    borderBottomWidth: 1,
    borderColor: '#E7EDF0',
    marginTop: verticalScale(-8),
    marginLeft: scale(-3),
  },
  btn: {
    height: verticalScale(65),
    width: scale(374),
    marginTop: verticalScale(30),
    borderRadius: scale(10),
    backgroundColor: '#099804',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  text7: {
    ...tStyle(FONTS_OVERPASS_TEXT.REGULAR, '600', 20, 27, '#fff'),
    paddingTop: verticalScale(5),
  },
  text8: {
    ...tStyle(FONTS_OVERPASS_TEXT.BOLD, '600', 20, 27, '#043B53'),
    marginTop: verticalScale(8),
  },
  text9: {
    ...tStyle(FONTS_OVERPASS_TEXT.BOLD, '600', 20, 27, '#043B53'),
  },
  text9a: {
    ...tStyle(FONTS_OVERPASS_TEXT.BOLD, '600', 20, 27, '#547E92'),
  },
});

export default ProfileScreen;
