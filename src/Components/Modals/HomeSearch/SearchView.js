import React from 'react';
import {Image, TouchableOpacity, FlatList, View} from 'react-native';

import NormalInput from '../../Input/NormalInput';
import SearchTile from '../../Tiles/SearchTile';
import {CloseBar, IconName, TEXT} from '../../../Constants';
import {styles} from './../../../Screens/Home/styles';

const dummyList = [
  'UI UX Designer',
  'UI UX Developer',
  'Javascript Developer',
  'JAVA',
  'Node JS',
  'MongoDB',
];

function SearchView({CloseSearchView, onSelectItem}) {
  const [search, setSearch] = React.useState('');
  const [FilterList, setFilterList] = React.useState([...dummyList]);

  const onChangeText = text => {
    setSearch(text);
    const filteredList = [...dummyList].filter(item => item.includes(text));
    setFilterList(filteredList);
  };

  const HeaderComponent = () => {
    return (
      <NormalInput
        value={search}
        onChangeText={onChangeText}
        customViewStyle={styles.searchInputStyle}
        placeholder={TEXT.SEARCH}
        showRightIcon
        Icon={IconName.SEARCH}
      />
    );
  };
  return (
    <View style={styles.innerView}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={CloseSearchView}
        style={styles.closeBar}>
        <Image source={CloseBar} />
      </TouchableOpacity>
      <FlatList
        data={FilterList}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
        ListHeaderComponent={HeaderComponent}
        renderItem={({item}) => (
          <SearchTile item={item} onPress={onSelectItem} />
        )}
      />
    </View>
  );
}
export default SearchView;
