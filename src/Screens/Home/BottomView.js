import React from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';

import NormalInput from '../../Components/Input/NormalInput';
import HomeTile from '../../Components/Tiles/HomeTile';
import {Filter, IconName, ROUTE_NAME, styleBase, TEXT} from '../../Constants';
import {navigation} from '../../Navigation/NavigationService';
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

function ButtomView({openFilter, onPressSearchView}) {
  const [search, setSearch] = React.useState('');

  const onChangeText = text => setSearch(text);

  const onSelectJob = jobDetail => navigation(ROUTE_NAME.JOB_DETAILS);

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
          onPressFullView={onPressSearchView}
          editable={false}
        />
        <TouchableOpacity
          activeOpacity={1}
          style={styles.filterView}
          onPress={openFilter}>
          <Image source={Filter} style={styles.filterIcon} />
        </TouchableOpacity>
      </View>
      <Text style={styles.recentList}>{TEXT.RECENT_LIST}</Text>
      <Text style={styles.headingText}>{TEXT.CHECKOUT_LIST}</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        data={DummyJobData}
        renderItem={({item}) => (
          <HomeTile item={item} onSelectJob={onSelectJob} />
        )}
      />
    </View>
  );
}
export default ButtomView;
