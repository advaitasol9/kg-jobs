import React from 'react';

import TabUpperView from '../../Components/TabSubComp/TabUpperView';
import MainContainer from '../../Components/Other/MainContainer';
import TabBottomView from '../../Components/TabSubComp/BottomView';
import {UpperViewType} from '../../Constants';

function AppliedTab() {
  return (
    <MainContainer showViewOnly>
      <TabUpperView />
      <TabBottomView tabname={UpperViewType.APPLY_JOB} />
    </MainContainer>
  );
}
export default AppliedTab;
