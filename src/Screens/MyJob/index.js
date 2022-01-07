import React from 'react';

import MainContainer from '../../Components/Other/MainContainer';
import TabBottomView from '../../Components/TabSubComp/BottomView';
import TabUpperView from '../../Components/TabSubComp/TabUpperView';
import {UpperViewType} from '../../Constants';

function MyJobTab() {
  return (
    <MainContainer showViewOnly>
      <TabUpperView />
      <TabBottomView tabname={UpperViewType.MY_JOBS} />
    </MainContainer>
  );
}
export default MyJobTab;
