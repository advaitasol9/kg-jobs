import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import NormalButton from '../../../../Components/Button/NormalButton';
import {FONTS_OVERPASS_TEXT} from '../../../../Constants';
import {scale, verticalScale} from '../../../../Constants/Size';
import {tStyle} from '../../../../Constants/TextStyle';
import Modal from 'react-native-modal';

dummyData = [
  {
    logo: require('../../../../Assets/companyLogo.png'),
    name: 'Vinaya Parickar',
    company: 'Company',
    rating: 4.2,
  },
  {
    logo: require('../../../../Assets/companyLogo.png'),
    name: 'Vinaya Parickar',
    company: 'Company',
    rating: 4.2,
  },
  {
    logo: require('../../../../Assets/companyLogo.png'),
    name: 'Vinaya Parickar',
    company: 'Company',
    rating: 4.2,
  },
];

const SelectProvider = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [barHeight, setBarHeight] = useState(0);
  const [barTopMargin, setBarTopMargin] = useState(0);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Create a Request',
    });
  }, []);

  const renderCard = ({item}) => (
    <View style={styles.cardCont}>
      <TouchableOpacity
        onPress={() => {
          setModalVisible(true);
        }}>
        <Image
          source={require('../../../../Assets/tempServiceProv.png')}
          height={verticalScale(490)}
          width={scale(320)}
          resizeMode="cover"
          style={{
            height: verticalScale(490),
            width: scale(320),
            overflow: 'visible',
            borderRadius: scale(20),
          }}
        />
      </TouchableOpacity>
      <View style={styles.cardDetailsCont}>
        <Image source={item.logo} height={scale(39)} width={scale(39)} />
        <View style={styles.cardDetailsRow}>
          <View>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.companyName}>{item.company}</Text>
          </View>
          <View style={styles.ratingCont}>
            <Image
              source={require('../../../../Assets/whiteStar.png')}
              height={scale(15)}
              width={scale(15)}
              resizeMode="cover"
              style={{height: scale(15), width: scale(15)}}
            />
            <Text style={styles.rating}>{item.rating}</Text>
          </View>
        </View>
        <NormalButton
          buttonLabel={'Place Request'}
          buttonStyle={{
            backgroundColor: '#099804',
            marginTop: verticalScale(30),
          }}
          onPress={() => {
            navigation.navigate('CreateRequest1');
          }}
        />
      </View>
      <Modal
        isVisible={modalVisible}
        onBackdropPress={() => {
          setModalVisible(false);
        }}
        backdropOpacity={0.3}
        style={{
          marginHorizontal: 0,
          justifyContent: 'flex-end',
          marginBottom: 0,
        }}>
        <View style={styles.modalCont}>
          <View style={styles.modalTopCont}>
            <Image
              source={require('../../../../Assets/tempServiceProv.png')}
              height={scale(90)}
              width={scale(90)}
              resizeMode="cover"
              style={{
                height: scale(90),
                width: scale(90),
                overflow: 'visible',
                borderRadius: scale(20),
                marginRight: scale(15),
              }}
            />
            <View>
              <Text style={styles.modalName}>{item.name}</Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: verticalScale(22.5),
                }}>
                {[1, 2, 3, 4, 5].map(item => (
                  <Image
                    source={require('../../../../Assets/goldStar.png')}
                    height={scale(17.32)}
                    width={scale(17.32)}
                    style={{marginRight: scale(5)}}
                  />
                ))}
                <Text style={styles.modalRating}>{`(${item.rating})`}</Text>
              </View>
            </View>
          </View>
          <View style={styles.modalMiddleCont}>
            <Text style={styles.sectionHeading}>Work Info</Text>
            <Text style={styles.sectionSubHeading}>
              Previous work experience
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: verticalScale(20),
                justifyContent: 'space-between',
              }}>
              <View>
                <Text style={styles.requestText}>TOTAL REQUESTS</Text>
                <Text style={styles.requestCount}>126</Text>
              </View>
              <View>
                <Text style={styles.requestText}>ACCEPTED REQUESTS</Text>
                <Text style={styles.requestCount}>125</Text>
              </View>
            </View>
          </View>
          <View style={styles.modalBottomCont}>
            <Text style={styles.sectionHeading}>Professional Info</Text>
            <Text style={styles.sectionSubHeading}>
              Provider's professional Info
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: verticalScale(21),
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image
                  source={item.logo}
                  height={scale(39)}
                  width={scale(39)}
                />

                <View>
                  <Text style={styles.contactText}>COMPANY</Text>
                  <Text style={styles.contactInfo}>Kisangates</Text>
                </View>
              </View>
              <View>
                <Text style={styles.contactText}>EMAIL</Text>
                <Text style={styles.contactInfo}>info@kisangates.com</Text>
              </View>
            </View>
            <NormalButton
              buttonLabel={'Place Request'}
              buttonStyle={{
                backgroundColor: '#099804',
                marginTop: verticalScale(30),
              }}
              onPress={() => {
                setModalVisible(false);

                navigation.navigate('CreateRequest1');
              }}
            />
          </View>
        </View>
      </Modal>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Service Providers</Text>
      <View style={styles.row}>
        <Text style={styles.subHeading}>48 Service Providers found</Text>
        <Text>
          <Text style={styles.currentCard}>1</Text>
          <Text style={styles.totalCard}>/3</Text>
        </Text>
      </View>

      <ScrollView
        style={{
          width: '100%',
          paddingLeft: scale(29),
          height: verticalScale(490),
          marginTop: verticalScale(40),
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={({nativeEvent}) => {
          console.log('nativeEvent', nativeEvent);
          const {contentOffset, contentSize, layoutMeasurement} = nativeEvent;
          setBarHeight(
            ((layoutMeasurement.width / contentSize.width) * 100).toFixed(2),
          );
          setBarTopMargin(contentOffset.x / contentSize.width);
        }}
        scrollEventThrottle={500}>
        {dummyData.map(item => renderCard({item}))}
      </ScrollView>
      <View style={styles.scrollIndicator}>
        <View
          style={[
            styles.scrollBar,
            {
              width: `${barHeight}%`,
              marginLeft: Number(barTopMargin) * scale(86),
            },
          ]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  heading: {
    ...tStyle(FONTS_OVERPASS_TEXT.EXTRA_BOLD, '400', 30, 40, '#043B53'),
    marginTop: verticalScale(22.5),
    marginLeft: scale(25),
  },
  subHeading: {
    ...tStyle(FONTS_OVERPASS_TEXT.EXTRA_BOLD, '400', 18, 24, '#16516B'),
    marginTop: verticalScale(5),
    marginLeft: scale(25),
  },
  row: {
    marginTop: verticalScale(5),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: scale(364),
  },
  currentCard: {
    ...tStyle(FONTS_OVERPASS_TEXT.BOLD, '400', 24, 32, '#099804'),
  },
  totalCard: {
    ...tStyle(FONTS_OVERPASS_TEXT.EXTRA_BOLD, '400', 18, 24, '#547E92'),
  },
  cardCont: {
    // marginTop: verticalScale(40),
    height: verticalScale(490),
    width: scale(320),
    marginRight: scale(20),
  },
  cardDetailsCont: {
    position: 'absolute',
    bottom: verticalScale(30),
    width: scale('270'),
    alignSelf: 'center',
  },
  name: {
    ...tStyle(FONTS_OVERPASS_TEXT.BOLD, '400', 22, 30, '#ffffff'),
  },
  companyName: {
    ...tStyle(FONTS_OVERPASS_TEXT.REGULAR, '400', 16, 21, '#ffffff'),
  },
  cardDetailsRow: {
    marginTop: verticalScale(4),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  ratingCont: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255,255,255,0.5)',
    paddingLeft: scale(10),
    paddingRight: scale(10),
    justifyContent: 'space-between',
    alignItems: 'center',
    height: verticalScale(40),
    width: scale(68),
    borderRadius: scale(8),
  },
  rating: {
    ...tStyle(FONTS_OVERPASS_TEXT.SEMI_BOLD, '400', 16, 21, '#ffffff'),
  },
  modalCont: {
    width: '100%',
    height: verticalScale(641),
    backgroundColor: '#ffffff',
    paddingHorizontal: scale(25),
    borderTopLeftRadius: scale(15),
    borderTopRightRadius: scale(15),
  },
  modalTopCont: {
    flexDirection: 'row',
    alignItems: 'center',
    height: verticalScale(160.5),
    borderBottomWidth: 1,
    borderColor: '#E7EDF0',
  },
  modalMiddleCont: {
    height: verticalScale(198),
    borderBottomWidth: 1,
    borderColor: '#E7EDF0',
    paddingTop: verticalScale(28.5),
    paddingBottom: verticalScale(31.5),
  },
  modalBottomCont: {
    height: verticalScale(282.5),
    paddingTop: verticalScale(28.5),
    paddingBottom: verticalScale(30),
  },
  modalName: {
    ...tStyle(FONTS_OVERPASS_TEXT.BOLD, '400', 22, 30, '#043B53'),
  },
  modalRating: {
    ...tStyle(FONTS_OVERPASS_TEXT.EXTRA_BOLD, '400', 16, 21, '#043B53'),
    marginLeft: scale(5),
  },
  sectionHeading: {
    ...tStyle(FONTS_OVERPASS_TEXT.EXTRA_BOLD, '400', 24, 32, '#043B53'),
  },
  sectionSubHeading: {
    ...tStyle(FONTS_OVERPASS_TEXT.EXTRA_BOLD, '400', 16, 21, '#16516B'),
    marginTop: verticalScale(4),
  },
  requestText: {
    ...tStyle(FONTS_OVERPASS_TEXT.REGULAR, '400', 14, 19, '#547E92'),
  },
  requestCount: {
    ...tStyle(FONTS_OVERPASS_TEXT.BOLD, '400', 30, 40, '#043B53'),
    marginTop: verticalScale(2),
  },
  contactText: {
    ...tStyle(FONTS_OVERPASS_TEXT.REGULAR, '400', 14, 19, '#547E92'),
  },
  contactInfo: {
    ...tStyle(FONTS_OVERPASS_TEXT.SEMI_BOLD, '400', 16, 21, '#043B53'),
  },
  scrollIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    height: verticalScale(8),
    width: scale(86),
    borderRadius: scale(24),
    backgroundColor: '#cccccc',
    alignSelf: 'center',
    marginBottom: verticalScale(20),
  },
  scrollBar: {
    height: verticalScale(10),
    borderRadius: scale(17),
    backgroundColor: '#099804',
  },
});

export default SelectProvider;
