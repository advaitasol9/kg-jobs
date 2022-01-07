import React from 'react';
import {View} from 'react-native';
import ProfileHeadingView from '../../Components/Other/ProfileHeadingView';
import LabelValueView from '../../Components/Other/LabelValueView';
import {TEXT} from '../../Constants';
import {styles} from './styles';

function ProfileContentView({PersonalInfoModal, ProfessionalInfoModal}) {
  return (
    <View style={styles.contentView}>
      <ProfileHeadingView
        Heading={TEXT.PERSONAL_INFO}
        onPressEdit={PersonalInfoModal}
      />
      <LabelValueView
        hideRightValue
        LeftLabel={TEXT.NAME}
        leftValue={'Simran jeet singh'}
        customeLabelView={styles.customeLabelView}
      />
      <LabelValueView
        LeftLabel={TEXT.GENDER}
        leftValue={'Male'}
        rightLabel={TEXT.PHONE_NUMBER}
        rightValue={'9811384587'}
        customeLabelView={styles.customeLabelView}
      />
      <LabelValueView
        hideRightValue
        LeftLabel={TEXT.EMAIL}
        leftValue={'Nayol.simran1@mail.com'}
        customeLabelView={styles.customeLabelView}
      />
      <LabelValueView
        hideRightValue
        LeftLabel={TEXT.STATE_LOCATION}
        leftValue={'PitumPura, Delhi'}
        customeLabelView={styles.customeLabelView}
      />
      <ProfileHeadingView
        Heading={TEXT.PROFESSIONAL_INFO}
        customContainer={styles.customContainer}
        onPressEdit={ProfessionalInfoModal}
      />
      <LabelValueView
        hideRightValue
        LeftLabel={TEXT.INTERESTED_SEGMENTS_TEXT}
        leftValue={'Agriculture, Poultry & Dairy'}
        customeLabelView={styles.customeLabelView}
      />
      <LabelValueView
        hideRightValue
        LeftLabel={TEXT.EXPERIENCE_TEXT}
        leftValue={'10 Years'}
        customeLabelView={styles.customeLabelView}
      />
      <LabelValueView
        hideRightValue
        LeftLabel={TEXT.PREVIOUS_WORKED_CROP}
        leftValue={'Veg, FC & chemicals'}
        customeLabelView={styles.customeLabelView}
      />
    </View>
  );
}
export default ProfileContentView;
