import React from 'react';
import {View, Text, Image} from 'react-native';
import {styleBase} from '../../Constants';
import MediaButton from '../../Components/Button/MediaButton';
import {styles} from './styles';

function ProfileUpperView() {
  return (
    <View style={styles.containerView}>
      <MediaButton />
      <View style={styleBase.inCenter}>
        <View style={styles.ImageView}>
          <Image
            source={{
              uri: 'https://media1.popsugar-assets.com/files/thumbor/KMAw5MW-Ho0d8-8-5gjOsEAnZzw/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2018/07/16/742/n/1922398/82ba4a455b4ccc8f4e5155.17609611_/i/Robert-Pattinson.jpg',
            }}
            style={styles.profilePic}
          />
        </View>
        <Text style={styles.userNameText}>Simran Jeet Singh</Text>
        <Text style={styles.emailNumberText}>Nayol.simran1@mail.com</Text>
        <Text style={styles.emailNumberText}>+91-9811384587</Text>
      </View>
    </View>
  );
}
export default ProfileUpperView;
