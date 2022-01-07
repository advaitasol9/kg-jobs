import React from 'react';

import MainContainer from '../../Components/Other/MainContainer';
import HomeFilter from '../../Components/Modals/HomeFilter';
import HomeSearch from '../../Components/Modals/HomeSearch';
import {navigation} from '../../Navigation/NavigationService';
import {ROUTE_NAME, UpperViewType} from '../../Constants';
import TabUpperView from '../../Components/TabSubComp/TabUpperView';
import TabBottomView from '../../Components/TabSubComp/BottomView';

function HomeTab() {
  const [isFilterVisible, setFilterVisible] = React.useState(false);
  const [isSearchVisible, setSearchVisible] = React.useState(false);

  const openCloseFilter = () => setFilterVisible(!isFilterVisible);

  const onPressSearchView = () => setSearchVisible(!isSearchVisible);

  const onSelectSearchItem = () => {
    onPressSearchView();
    setTimeout(() => {
      navigation(ROUTE_NAME.SEARCH_RESULT);
    }, 700);
  };

  return (
    <>
      <MainContainer showViewOnly>
        <TabUpperView />
        <TabBottomView
          tabname={UpperViewType.HOME}
          openFilter={openCloseFilter}
          onPressSearchView={onPressSearchView}
        />
      </MainContainer>
      <HomeFilter visible={isFilterVisible} onClose={openCloseFilter} />
      <HomeSearch
        visible={isSearchVisible}
        onClose={onPressSearchView}
        onSelectItem={onSelectSearchItem}
      />
    </>
  );
}
export default HomeTab;
