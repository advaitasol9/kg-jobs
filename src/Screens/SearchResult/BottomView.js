import React from 'react';
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import NormalInput from '../../Components/Input/NormalInput';
import HomeTile from '../../Components/Tiles/HomeTile';
import {Filter, IconName, TEXT} from '../../Constants';
import {styles} from './styles';

const DummyJobData = [
  'UI UX Designer',
  'UI UX Designer',
  'UI UX Designer',
  'UI UX Designer',
  'UI UX Designer',
  'UI UX Designer',
  'UI UX Designer',
];

function BottomView() {
  const [search, setSearch] = React.useState('');

  const onChangeText = text => setSearch(text);

  return (
    <View style={styles.bottomView}>
      <View style={styles.searchView}>
        <NormalInput
          value={search}
          onChangeText={onChangeText}
          placeholder={TEXT.SEARCH}
          showRightIcon
          Icon={IconName.SEARCH}
          customViewStyle={styles.customViewStyle}
        />
        <TouchableOpacity activeOpacity={1} style={styles.filterView}>
          <Image source={Filter} style={styles.filterIcon} />
          <View style={styles.newFilerIndicator} />
        </TouchableOpacity>
      </View>
      <Text style={styles.searchKeyword}>{TEXT.SEARCH_KEYWORD}</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        data={DummyJobData}
        renderItem={({item}) => <HomeTile item={item} />}
      />
    </View>
  );
}
export default BottomView;
