import React from 'react';
import {View, Text} from 'react-native';
import MainContainer from '../../Components/Other/MainContainer';
import BottomView from './BottomView';

import {styles} from './styles';
import UpperView from './UpperView';

function SearchResult() {
  return (
    <MainContainer showViewOnly>
      <UpperView />
      <BottomView />
    </MainContainer>
  );
}
export default SearchResult;
