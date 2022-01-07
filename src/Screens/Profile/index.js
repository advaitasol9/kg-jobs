import React from 'react';
import PersonalInfo from '../../Components/Modals/PersonalInfo';

import MainContainer from '../../Components/Other/MainContainer';
import ProfileContentView from './ProfileContentView';
import ProfileUpperView from './ProfileUpperView';

function ProfileTab() {
  const [isPerModalVisible, setIsPerModalVisible] = React.useState(false);
  const [isProModalVisible, setIsProModalVisible] = React.useState(false);

  const PersonalInfoModal = () => setIsPerModalVisible(!isPerModalVisible);

  const ProfessionalInfoModal = () => setIsProModalVisible(!isProModalVisible);

  return (
    <>
      <MainContainer bounces={false}>
        <ProfileUpperView />
        <ProfileContentView
          ProfessionalInfoModal={ProfessionalInfoModal}
          PersonalInfoModal={PersonalInfoModal}
        />
      </MainContainer>
      <PersonalInfo
        visible={isPerModalVisible}
        closeModal={PersonalInfoModal}
      />
    </>
  );
}
export default ProfileTab;
